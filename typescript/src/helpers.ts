import { brandNames, stylexCategories } from "./payloads";

/**
 * Stringifies an object, removing circular references.
 * 
 * @param obj - The object to stringify.
 * @returns The stringified object.
 */
const stringifyOutput = (obj) => {
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
  let file = "";

  switch (type) {
    case "colors":
      file = "_colors.css";
      break;
    case "measures":
      file = "_measures.css";
      break;
    case "borders":
      file = "_borders.css";
      break;
    default:
      console.log("File header comment ERROR: file type \"" + type + "\" doesn't exist.");
      break;
  }

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
    default:
      console.log("File header comment ERROR: brand name \"" + brand + "\" doesn't exist.");
      break;
  }

  return `${folder}/${file}`;
};

/**
 * Generate a variable name based on the prefix, token, and token group.
 * 
 * @param prefix - The prefix for the variable name.
 * @param token - The token object.
 * @param tokenGroup - The token group object.
 * @returns The generated variable name.
 */
export const variableName = (prefix: string, token: Token, tokenGroup: TokenGroup): string => {
  // Create array with all path segments and token name at the end.
  const segments = [...tokenGroup.path];
  if (!tokenGroup.isRoot) {
    segments.push(tokenGroup.name);
  }

  segments.push(token.name);
  
  if (prefix && prefix.length > 0) {
    segments.unshift(prefix);
  }

  // create one string with space for camelCase
  const sentence = segments
    .join(" ")
    .toLocaleLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

  return sentence;
};

/**
 * Generate a stylex token name based on the token and token group.
 * 
 * @param token - The token object.
 * @param tokenGroup - The token group object.
 * @returns The generated stylex token name.
 */
export const stylexTokenName = (token: Token, tokenGroup: TokenGroup): string => {
  // Create array with all path segments and token name at the end.
  const segments = [...tokenGroup.path];

  if (!tokenGroup.isRoot) {
    segments.push(tokenGroup.name);
  }

  segments.push(token.name);

  // crete one string with space for camelCase
  const sentence = segments
    .join(" ")
    .toLocaleLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

  return sentence;
};

/**
 * Generate a token name based on the origin name of the token.
 * 
 * @param token - The token object.
 * @returns The generated token name.
 */
export const tokenNameByOriginName = (token: Token): string => {
  const name = token.origin?.name;

  const transfromed = name?.split("/");
  transfromed?.shift();

  const joined = transfromed
    ?.join(" ")
    .toLocaleLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  
  return joined || "";
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
  if (!tokenGroup?.parent) {
    return "";
  }

  const { parent: { name } } = tokenGroup;

  if (name !== groupName) {
    groupName = name;
    printComment = true;
  } else {
    printComment = false;
  }

  return printComment
    ? `
    
  /* --- ${groupName} --- */
  ` : "";
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
 * Print the output data.
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
 * Strin to lower case
 * @param str - string to lower case
 * @returns
 */
export const toLowerCase = (str: string): string => {
  return str.toLocaleLowerCase();
}

export const joinArrayBySlash = (strArr: string[]): string => {
  return strArr.join(" / ");
}
