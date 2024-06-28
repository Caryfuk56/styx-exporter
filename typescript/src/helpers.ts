import hslConvertor from "./hsl-convertor";
import { brandNames } from "./payloads";

/**
 * Stringifies an object, removing circular references.
 * 
 * @param obj - The object to stringify.
 * @returns The stringified object.
 */
export const stringifyOutput = (obj) => {
  let cache: unknown[] | null = [];
  
  const str = JSON.stringify(obj, (key: string, value: string) => {
    if (typeof value === "object" && value !== null) {
      if (cache && cache.indexOf(value) !== -1) {
        return null;
      }

      cache?.push(value);
    }

    return value;
  });

  cache = null;
  return str;
};

/**
 * Return current time in local string
 * @returns The current time in local string format.
 */
export const currentDate = (): string => {
  const date = new Date();
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();

  return `${dateString} ${timeString}`;
};

/**
 * Return id of the theme according theme name.
 * 
 * @param themeName - The name of the theme.
 * @param brands - The array of brand objects.
 * @returns The id of the theme.
 */
export const getBrandId = (themeName: string, brands: Record<string, unknown>[]): string => {
  const brandObject = brands.filter((brand) => brand.name === themeName);

  if (brandObject.length === 0) {
    console.log("ERROR: brand with name \"" + "name" + "\" doesn't exist.");
    return "";
  }

  return brandObject[0].id as string;
};

/**
 * Generate the exported file name based on the type and brand.
 * 
 * @param type - The type of the file.
 * @param brand - The brand name.
 * @returns The generated file name.
 */
export const exportedFileName = (type: string, brand: string): string => {
  let folder = "";

  switch (brand) {
    case brandNames.vigo:
      folder = "vigo";
      break;
    case brandNames.cpp:
      folder = "cpp";
      break;
    case brandNames.koop:
      folder = "koop";
      break;
      break;
    case brandNames.cppDark:
      folder = "cpp-dark";
      break;
      break;
    case brandNames.koopDark:
      folder = "koop-dark";
      break;
    case brandNames.knz:
      folder = "knz";
      break;
    case brandNames.sus:
      folder = "sus";
      break;
    default:
      console.log("File header comment ERROR: brand name \"" + brand + "\" doesn't exist.");
      break;
  }

  return `${folder}/${type}.css`;
};

let printComment = false;
let groupName = "";

/**
 * Generate a group name comment based on the token group.
 * 
 * @param tokenGroup - The token group object.
 * @returns The generated group name comment.
 */
export const groupNameComment = (tokenGroup: TokenGroup): string => {
  if (!tokenGroup) {
    return "";
  }

  const { name } = tokenGroup;

  if (name !== groupName) {
    groupName = name;
    printComment = true;
  } else {
    printComment = false;
  }

  return printComment
    ? `/* --- ${groupName} --- */\n` : "";
};

/**
 * Filter tokens based on the name.
 * 
 * @param name - The name to filter by.
 * @param tokens - The array of tokens.
 * @returns The filtered array of tokens.
 */
export const filterTokens = (name: string, tokens: Token[]) => {
  return tokens.filter((token) => {
    if (token.origin?.name) {
      return token.origin.name.includes(name);
    }

    return "Chyba";
  });
};

/**
 * Print the output data to the console.
 * 
 * @param data - The data to print.
 */
export const printOutput = (data: any) => {
  console.log(stringifyOutput(data));
};

/**
 * Generate a group name for stylex based on the provided strings.
 * 
 * @param names - The strings to generate the group name from.
 * @returns The generated group name.
 */
export const stylexGroupName = (...names: string[]): string => {
  return names
    .join(" ")
    .toLocaleLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};

/**
 * Join array of strings with slash.
 * @param {string[]} strArr - array of strings
 * @returns {string} - joined string with slash
 */
export const joinArrayBySlash = (strArr: string[]): string => {
  return strArr.join(" / ");
}

type Vector2 = {
  x: number;
  y: number;
}

/**
 * Calculate angle of gradient in degrees {0, 360}
 * @param {Vector2} from - Gradient start point 
 * @param {Vector2} to - Gradient end point 
 * @returns {number} - Angle of gradient in degrees {0, 360}
 */
export const gradientAngle = (from: Vector2, to: Vector2): number => {
  if (!from || !to) {
    console.log("ERROR: Missing gradient points.");
    return 0;
  }
  
  const deltaX = to.x - from.x;
  const deltaY = to.y - from.y;

  const radians = Math.atan2(deltaY, deltaX);
  const result = (radians * 180) / Math.PI;
  const fixedResult = result + 90;

  return (fixedResult < 0 ? fixedResult + 360 : fixedResult) % 360;
};

const getValueWithCorrectUnit = (value: number): string => {
  if (value === 0) {
    return `${value}`;
  }

  return `${value}px`;
};

const nonNegativeValue = (value: number): number => {
  return value < 0 ? 0 : value;
};

const numberIsUndefined = (value: number | undefined): boolean => {
  return value === undefined || isNaN(value) || value === null;
}

const convertToColorTokenValue = (
  hex: string | undefined,
  r: number | undefined,
  g: number | undefined,
  b: number | undefined,
  a: number | undefined
): ColorTokenValue => {
  if (!hex || numberIsUndefined(r) || numberIsUndefined(g) || numberIsUndefined(b) || numberIsUndefined(a)) {
    console.log("ERROR: Missing color values." +  ` ${hex} ${r} ${g} ${b} ${a}`);
    return {
      hex: "",
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      referencedToken: null,
    };
  }
  return { hex, r: r!, g: g!, b: b!, a: a!, referencedToken: null };
};

/**
 * Calculate css value of for shadow tokens.
 * @param {Token} token - Token object 
 * @returns {string} - Token value in format {offsetX} {offsetY} {blurRadius} {spreadRadius} #{color.hex}
 */
export const shadowTokenValue = (token: ShadowToken): string => {
  const { color, x, y, radius, spread } = token.value;

  const blurRadius = getValueWithCorrectUnit(nonNegativeValue(radius.measure));
  const offsetX = getValueWithCorrectUnit(x.measure);
  const offsetY = getValueWithCorrectUnit(y.measure);
  const spreadRadius = getValueWithCorrectUnit(spread.measure);

  const convertedColor = convertToColorTokenValue(color.hex, color.r, color.g, color.b, color.a);

  // return `${offsetX} ${offsetY} ${blurRadius} ${spreadRadius} #${color.hex}`;
  return `${offsetX} ${offsetY} ${blurRadius} ${spreadRadius} ${hslConvertor(convertToColorTokenValue(color.hex, color.r, color.g, color.b, color.a))}`;
};

const removedDoubles = (stringArr: string[] | null | undefined): string[] => {
  if (!stringArr) {
    return [];
  }

  return stringArr?.filter((item, index) => {
    const lowercasedItem = item.toLowerCase();
    return index === stringArr.findIndex((word) => word.toLowerCase() === lowercasedItem);
  });
};

/**
 * Create name of the token from origin name.
 * @param {Token} token - Token object. 
 * @param {string} prefix - Prefix for the name placed before the origin name. 
 * @returns {string} - Name of the token in format {prefix}{originName}
 */
export const nameFromOrigin = (token: Token, prefix?: string): string => {
  if (!token.origin?.name) {
    
    return "";
  }

  // console.log(token.origin?.name)
  // console.log(prefix)

  const rm = token.origin?.name?.split("/").map((item) => {
    return item
      .split(/\-|\s/g)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  })

  if (prefix) {
    rm?.unshift(prefix);
  }

  const rd = removedDoubles(rm)
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join("");

  return rd.charAt(0).toLowerCase() + rd.slice(1);
};

export const quotationMarks = (value: string): string => {
  if (value.match(/^[0-9]+$/)) {
    return value;
  }
  
  return `"${value}"`;
}
