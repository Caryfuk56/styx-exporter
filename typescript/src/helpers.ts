import { brandNames } from "./payloads";

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
 * @returns 
 */
export const currentDate = (): string => {
  const date = new Date();
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();

  return `${dateString} ${timeString}`;
};

/**
 * Return id of the theme according theme name.
 * @param {string} themeName - name of theme
 * @param {Record<string, unknown>} brands 
 * @returns {string} id of the theme
 */
export const getBrandId = (themeName: string, brands: Record<string, unknown>[]): string => {
  const brandObject = brands.filter((brand) => brand.name === themeName);

  if (brandObject.length === 0) {
    console.log("ERROR: brand with name \"" + "name" + "\" doesn't exist.");
    return "";
  }

  return brandObject[0].id as string;
};

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

// const replaceLastOne = (definition: string[], source: string): string => {
// if (definition.some((item) => source.includes(item))) {

// }
// };

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

export const tokenNameByOriginName = (token: Token): string => {
  const name = token.origin?.name;

  console.log("name " + name?.split("/"))

  const transfromed = name?.split("/");
  transfromed?.shift();

  const joined = transfromed
    ?.join(" ")
    .toLocaleLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

    console.log(joined)
  
  return joined || "";
};

let printComment = false;
let groupName = "";

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

export const filterTokens = (name: any, tokens: any) => {
  // console.log(stringifyOutput(tokens));
  // console.log("ahoj" + data)
  
  const filtered = tokens.filter((token) => token.origin.name.includes(name))
  return filtered;
};

export const printOutput = (data: any) => {
  console.log(stringifyOutput(data));
};
