/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../exporter.json":
/*!************************!*\
  !*** ../exporter.json ***!
  \************************/
/*! exports provided: id, name, description, author, organization, homepage, source_dir, version, usesBrands, config, engines, tags, usesThemes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"ais.exporter stylex\",\"name\":\"STYLEX & CSS ALL THEMES\",\"description\":\"CSS ans Stylex all theme exporter\",\"author\":\"\",\"organization\":\"Ais servis\",\"homepage\":\"\",\"source_dir\":\"src\",\"version\":\"2.0.0\",\"usesBrands\":true,\"config\":{\"sources\":\"sources.json\",\"output\":\"output.json\",\"js\":\"src/js/helpers.js\"},\"engines\":{\"pulsar\":\"1.0.0\",\"supernova\":\"1.0.0\"},\"tags\":[\"CSS\",\"Tokens\",\"Stylex\"],\"usesThemes\":true}");

/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.nameFromOrigin = exports.showTokensNamesByOriginPath = exports.shadowTokenValue = exports.gradientAngle = exports.joinArrayBySlash = exports.toLowerCase = exports.stylexGroupName = exports.printOutput = exports.filterTokens = exports.groupNameComment = exports.tokenNameWithCategoryFixDoubles = exports.tokenNameWithCategory = exports.tokenNameByOriginName = exports.stylexTokenName = exports.variableName = exports.exportedFileName = exports.getBrandId = exports.currentDate = exports.stringifyOutput = void 0;
const payloads_1 = __webpack_require__(/*! ./payloads */ "./src/payloads.ts");
/**
 * Stringifies an object, removing circular references.
 *
 * @param obj - The object to stringify.
 * @returns The stringified object.
 */
exports.stringifyOutput = (obj) => {
    let cache = [];
    const str = JSON.stringify(obj, (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (cache && cache.indexOf(value) !== -1) {
                return null;
            }
            cache === null || cache === void 0 ? void 0 : cache.push(value);
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
exports.currentDate = () => {
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
exports.getBrandId = (themeName, brands) => {
    const brandObject = brands.filter((brand) => brand.name === themeName);
    if (brandObject.length === 0) {
        console.log("ERROR: brand with name \"" + "name" + "\" doesn't exist.");
        return "";
    }
    return brandObject[0].id;
};
/**
 * Generate the exported file name based on the type and brand.
 *
 * @param type - The type of the file.
 * @param brand - The brand name.
 * @returns The generated file name.
 */
exports.exportedFileName = (type, brand) => {
    let folder = "";
    switch (brand) {
        case payloads_1.brandNames.vigo:
            folder = "vigo";
            break;
        case payloads_1.brandNames.cpp:
            folder = "cpp";
            break;
        case payloads_1.brandNames.koop:
            folder = "koop";
            break;
        // case brandNames.knz:
        //   folder = "knz";
        //   break;
        // case brandNames.sus:
        //   folder = "sus";
        //   break;
        default:
            console.log("File header comment ERROR: brand name \"" + brand + "\" doesn't exist.");
            break;
    }
    return `${folder}/${type}.css`;
};
/**
 * Generate a variable name based on the prefix, token, and token group.
 *
 * @param prefix - The prefix for the variable name.
 * @param token - The token object.
 * @param tokenGroup - The token group object.
 * @returns The generated variable name.
 */
exports.variableName = (prefix, token, tokenGroup) => {
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
exports.stylexTokenName = (token, tokenGroup) => {
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
exports.tokenNameByOriginName = (token, keepCategory) => {
    var _a;
    if (!token.origin) {
        console.log("Token origin is undefined", token);
    }
    const name = (_a = token.origin) === null || _a === void 0 ? void 0 : _a.name;
    const transfromed = name === null || name === void 0 ? void 0 : name.split("/");
    if (!keepCategory) {
        transfromed === null || transfromed === void 0 ? void 0 : transfromed.shift();
    }
    const joined = transfromed === null || transfromed === void 0 ? void 0 : transfromed.join(" ").replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    return joined || "";
};
exports.tokenNameWithCategory = (token, prefix) => {
    var _a;
    const name = (_a = token.origin) === null || _a === void 0 ? void 0 : _a.id;
    const nameArr = name === null || name === void 0 ? void 0 : name.split("/");
    if (prefix) {
        nameArr === null || nameArr === void 0 ? void 0 : nameArr.unshift(prefix);
    }
    const joined = nameArr === null || nameArr === void 0 ? void 0 : nameArr.join(" ").toLocaleLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    return joined || "";
};
exports.tokenNameWithCategoryFixDoubles = (token, prefix) => {
    var _a;
    const name = (_a = token.origin) === null || _a === void 0 ? void 0 : _a.id;
    const nameArr = name === null || name === void 0 ? void 0 : name.split("/");
    // Change dash to CamelCase
    const withoutDash = nameArr === null || nameArr === void 0 ? void 0 : nameArr.map((item) => {
        const result = item.split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
        return result.join("");
    });
    const removedDoubles = withoutDash === null || withoutDash === void 0 ? void 0 : withoutDash.filter((item, index) => {
        const lowercasedItem = item.toLowerCase();
        return index === withoutDash.findIndex((word) => word.toLowerCase() === lowercasedItem);
    });
    if (prefix) {
        removedDoubles === null || removedDoubles === void 0 ? void 0 : removedDoubles.unshift(prefix);
    }
    const joined = removedDoubles === null || removedDoubles === void 0 ? void 0 : removedDoubles.join(" ").toLocaleLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
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
exports.groupNameComment = (tokenGroup) => {
    if (!(tokenGroup === null || tokenGroup === void 0 ? void 0 : tokenGroup.parent)) {
        return "";
    }
    const { parent: { name } } = tokenGroup;
    if (name !== groupName) {
        groupName = name;
        printComment = true;
    }
    else {
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
exports.filterTokens = (name, tokens) => {
    return tokens.filter((token) => {
        var _a;
        if ((_a = token.origin) === null || _a === void 0 ? void 0 : _a.name) {
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
exports.printOutput = (data) => {
    console.log(exports.stringifyOutput(data));
};
/**
 * Generate a group name for stylex based on the provided strings.
 *
 * @param names - The strings to generate the group name from.
 * @returns The generated group name.
 */
exports.stylexGroupName = (...names) => {
    return names
        .join(" ")
        .toLocaleLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};
/**
 * String to lower case
 * @param str - string to lower case
 * @returns
 */
exports.toLowerCase = (str) => {
    return str.toLocaleLowerCase();
};
exports.joinArrayBySlash = (strArr) => {
    return strArr.join(" / ");
};
exports.gradientAngle = (from, to) => {
    const deltaX = to.x - from.x;
    const deltaY = to.y - from.y;
    const radians = Math.atan2(deltaY, deltaX);
    const result = (radians * 180) / Math.PI;
    const fixedResult = result + 90;
    return (fixedResult < 0 ? fixedResult + 360 : fixedResult) % 360;
};
const getValueWithCorrectUnit = (value) => {
    if (value === 0) {
        return `${value}`;
    }
    return `${value}px`;
};
const nonNegativeValue = (value) => {
    return value < 0 ? 0 : value;
};
exports.shadowTokenValue = (token) => {
    const { color, x, y, radius, spread } = token.value;
    const blurRadius = getValueWithCorrectUnit(nonNegativeValue(radius.measure));
    const offsetX = getValueWithCorrectUnit(x.measure);
    const offsetY = getValueWithCorrectUnit(y.measure);
    const spreadRadius = getValueWithCorrectUnit(spread.measure);
    return `${offsetX} ${offsetY} ${blurRadius} ${spreadRadius} #${color.hex}`;
};
exports.showTokensNamesByOriginPath = (token) => {
    return {
        tokenOriginObject: exports.stringifyOutput(token.origin),
    };
};
const removedDoubles = (stringArr) => {
    if (!stringArr) {
        return [];
    }
    return stringArr === null || stringArr === void 0 ? void 0 : stringArr.filter((item, index) => {
        const lowercasedItem = item.toLowerCase();
        return index === stringArr.findIndex((word) => word.toLowerCase() === lowercasedItem);
    });
};
exports.nameFromOrigin = (token, usePrefix = true) => {
    var _a, _b;
    const removedSpecialChars = (_b = (_a = token.origin) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.replace(/\-|\s/g, "");
    const splittedName = removedSpecialChars === null || removedSpecialChars === void 0 ? void 0 : removedSpecialChars.split("/");
    return removedDoubles(splittedName)
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join("");
    // return name?.split("/").map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join("") || "";
    // return token.id
};


/***/ }),

/***/ "./src/hsl-convertor/helpers.ts":
/*!**************************************!*\
  !*** ./src/hsl-convertor/helpers.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.stringHSLA = exports.stringHSL = exports.calculateSaturation = exports.calculateLightness = exports.calculateHue = void 0;
/**
 * Calculates the hue value based on the given parameters.
 * @param delta - The difference between the maximum and minimum color values.
 * @param cmax - The maximum color value.
 * @param r - The red color value.
 * @param g - The green color value.
 * @param b - The blue color value.
 * @returns The calculated hue value.
 */
exports.calculateHue = (delta, cmax, r, g, b) => {
    let result = 0;
    if (delta === 0) {
        return 0;
    }
    if (cmax === r) {
        result = ((g - b) / delta) % 6;
    }
    else if (cmax === g) {
        result = (b - r) / delta + 2;
    }
    else if (cmax === b) {
        result = (r - g) / delta + 4;
    }
    const rounded = Math.round(result * 60);
    if (rounded < 0) {
        return rounded + 360;
    }
    return rounded;
};
/**
 * Calculates the lightness value based on the given parameters.
 * @param cmax - The maximum color value.
 * @param cmin - The minimum color value.
 * @returns The calculated lightness value.
 */
exports.calculateLightness = (cmax, cmin) => {
    return (cmax + cmin) / 2;
};
/**
 * Calculates the saturation value based on the given parameters.
 * @param delta - The difference between the maximum and minimum color values.
 * @param lightness - The lightness value.
 * @returns The calculated saturation value.
 */
exports.calculateSaturation = (delta, lightness) => {
    return delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));
};
/**
 * Converts the HSL values to a string representation.
 * @param hue - The hue value.
 * @param saturation - The saturation value.
 * @param lightness - The lightness value.
 * @returns The string representation of the HSL values.
 */
exports.stringHSL = (hue, saturation, lightness) => {
    return `hsl(${hue}, ${Math.round(saturation)}%, ${Math.round(lightness)}%)`;
};
/**
 * Converts the HSLA values to a string representation.
 * @param hue - The hue value.
 * @param saturation - The saturation value.
 * @param lightness - The lightness value.
 * @param alpha - The alpha value.
 * @returns The string representation of the HSLA values.
 */
exports.stringHSLA = (hue, saturation, lightness, alpha) => {
    console.log(`hsl(${hue}, ${Math.round(saturation)}, ${Math.round(lightness)}%, ${alpha})`);
    return `hsla(${hue}, ${Math.round(saturation)}%, ${Math.round(lightness)}%, ${Math.round(alpha * 10) / 10})`;
};


/***/ }),

/***/ "./src/hsl-convertor/hslConvertor.ts":
/*!*******************************************!*\
  !*** ./src/hsl-convertor/hslConvertor.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = __webpack_require__(/*! ./helpers */ "./src/hsl-convertor/helpers.ts");
/**
 * Converts a color object to an HSL or HSLA string representation.
 *
 * @param {ColorTokenValue} color - The color object to convert.
 * @returns The HSL or HSLA string representation of the color.
 */
const hslConvertor = (color) => {
    const { r: _r, g: _g, b: _b, a: _a } = color;
    const r = _r / 255;
    const g = _g / 255;
    const b = _b / 255;
    const a = _a / 255;
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;
    const hue = helpers_1.calculateHue(delta, cmax, r, g, b);
    const _lightness = helpers_1.calculateLightness(cmax, cmin);
    const _saturation = helpers_1.calculateSaturation(delta, _lightness);
    const lightness = +(_lightness * 100).toFixed(1);
    const saturation = +(_saturation * 100).toFixed(1);
    return a === 1 ? helpers_1.stringHSL(hue, saturation, lightness) : helpers_1.stringHSLA(hue, saturation, lightness, a);
};
exports.default = hslConvertor;


/***/ }),

/***/ "./src/hsl-convertor/index.ts":
/*!************************************!*\
  !*** ./src/hsl-convertor/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hslConvertor_1 = __webpack_require__(/*! ./hslConvertor */ "./src/hsl-convertor/hslConvertor.ts");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return hslConvertor_1.default; } });


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
const hsl_convertor_1 = __webpack_require__(/*! ./hsl-convertor */ "./src/hsl-convertor/index.ts");
const payloads_1 = __webpack_require__(/*! ./payloads */ "./src/payloads.ts");
// Functions registration
Pulsar.registerFunction("currentDate", helpers_1.currentDate);
Pulsar.registerFunction("getBrandId", helpers_1.getBrandId);
Pulsar.registerFunction("exportedFileName", helpers_1.exportedFileName);
Pulsar.registerFunction("variableName", helpers_1.variableName);
Pulsar.registerFunction("hslConvertor", hsl_convertor_1.default);
Pulsar.registerFunction("groupNameComment", helpers_1.groupNameComment);
Pulsar.registerFunction("stylexTokenName", helpers_1.stylexTokenName);
Pulsar.registerFunction("filterTokens", helpers_1.filterTokens);
Pulsar.registerFunction("printOutput", helpers_1.printOutput);
Pulsar.registerFunction("tokenNameByOriginName", helpers_1.tokenNameByOriginName);
Pulsar.registerFunction("stylexGroupName", helpers_1.stylexGroupName);
Pulsar.registerFunction("toLowerCase", helpers_1.toLowerCase);
Pulsar.registerFunction("joinArrayBySlash", helpers_1.joinArrayBySlash);
Pulsar.registerFunction("gradientAngle", helpers_1.gradientAngle);
Pulsar.registerFunction("shadowTokenValue", helpers_1.shadowTokenValue);
Pulsar.registerFunction("tokenNameWithCategory", helpers_1.tokenNameWithCategory);
Pulsar.registerFunction("tokenNameWithCategoryFixDoubles", helpers_1.tokenNameWithCategoryFixDoubles);
Pulsar.registerFunction("showTokensNamesByOriginPath", helpers_1.showTokensNamesByOriginPath);
Pulsar.registerFunction("stringifyOutput", helpers_1.stringifyOutput);
Pulsar.registerFunction("nameFromOrigin", helpers_1.nameFromOrigin);
// Payloads
Pulsar.registerPayload("currentExporterVersion", payloads_1.currentExporterVersion);
Pulsar.registerPayload("brandNames", payloads_1.brandNames);
Pulsar.registerPayload("behavior", payloads_1.behavior);
Pulsar.registerPayload("stylexCategories", payloads_1.stylexCategories);


/***/ }),

/***/ "./src/payloads.ts":
/*!*************************!*\
  !*** ./src/payloads.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.stylexCategories = exports.behavior = exports.brandNames = exports.currentExporterVersion = void 0;
const exporter_json_1 = __webpack_require__(/*! ../../exporter.json */ "../exporter.json");
exports.currentExporterVersion = exporter_json_1.version;
exports.brandNames = {
    cppDark: "CPP Dark",
    cpp: "CPP Light",
    koopDark: "Koop Dark",
    koop: "Koop Light",
    vigo: "VIGo",
};
exports.behavior = {
    colorTokenPrefix: "color",
    borderTokenPrefix: "border",
    gradientTokenPrefix: "gradient",
    measureTokenPrefix: "measure",
    shadowTokenPrefix: "shadow",
    typographyTokenPrefix: "typography",
};
exports.stylexCategories = [
    "core",
    "semantic",
    "component"
];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHNsLWNvbnZlcnRvci9oc2xDb252ZXJ0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYXlsb2Fkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHFDQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVcsR0FBRyxXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTyxHQUFHLEtBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUM5QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDZDQUFxQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm5hbWVGcm9tT3JpZ2luID0gZXhwb3J0cy5zaG93VG9rZW5zTmFtZXNCeU9yaWdpblBhdGggPSBleHBvcnRzLnNoYWRvd1Rva2VuVmFsdWUgPSBleHBvcnRzLmdyYWRpZW50QW5nbGUgPSBleHBvcnRzLmpvaW5BcnJheUJ5U2xhc2ggPSBleHBvcnRzLnRvTG93ZXJDYXNlID0gZXhwb3J0cy5zdHlsZXhHcm91cE5hbWUgPSBleHBvcnRzLnByaW50T3V0cHV0ID0gZXhwb3J0cy5maWx0ZXJUb2tlbnMgPSBleHBvcnRzLmdyb3VwTmFtZUNvbW1lbnQgPSBleHBvcnRzLnRva2VuTmFtZVdpdGhDYXRlZ29yeUZpeERvdWJsZXMgPSBleHBvcnRzLnRva2VuTmFtZVdpdGhDYXRlZ29yeSA9IGV4cG9ydHMudG9rZW5OYW1lQnlPcmlnaW5OYW1lID0gZXhwb3J0cy5zdHlsZXhUb2tlbk5hbWUgPSBleHBvcnRzLnZhcmlhYmxlTmFtZSA9IGV4cG9ydHMuZXhwb3J0ZWRGaWxlTmFtZSA9IGV4cG9ydHMuZ2V0QnJhbmRJZCA9IGV4cG9ydHMuY3VycmVudERhdGUgPSBleHBvcnRzLnN0cmluZ2lmeU91dHB1dCA9IHZvaWQgMDtcbmNvbnN0IHBheWxvYWRzXzEgPSByZXF1aXJlKFwiLi9wYXlsb2Fkc1wiKTtcbi8qKlxuICogU3RyaW5naWZpZXMgYW4gb2JqZWN0LCByZW1vdmluZyBjaXJjdWxhciByZWZlcmVuY2VzLlxuICpcbiAqIEBwYXJhbSBvYmogLSBUaGUgb2JqZWN0IHRvIHN0cmluZ2lmeS5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmdpZmllZCBvYmplY3QuXG4gKi9cbmV4cG9ydHMuc3RyaW5naWZ5T3V0cHV0ID0gKG9iaikgPT4ge1xuICAgIGxldCBjYWNoZSA9IFtdO1xuICAgIGNvbnN0IHN0ciA9IEpTT04uc3RyaW5naWZ5KG9iaiwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGNhY2hlICYmIGNhY2hlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FjaGUgPT09IG51bGwgfHwgY2FjaGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhY2hlLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KTtcbiAgICBjYWNoZSA9IG51bGw7XG4gICAgcmV0dXJuIHN0cjtcbn07XG4vKipcbiAqIFJldHVybiBjdXJyZW50IHRpbWUgaW4gbG9jYWwgc3RyaW5nXG4gKiBAcmV0dXJucyBUaGUgY3VycmVudCB0aW1lIGluIGxvY2FsIHN0cmluZyBmb3JtYXQuXG4gKi9cbmV4cG9ydHMuY3VycmVudERhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgY29uc3QgdGltZVN0cmluZyA9IGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgcmV0dXJuIGAke2RhdGVTdHJpbmd9ICR7dGltZVN0cmluZ31gO1xufTtcbi8qKlxuICogUmV0dXJuIGlkIG9mIHRoZSB0aGVtZSBhY2NvcmRpbmcgdGhlbWUgbmFtZS5cbiAqXG4gKiBAcGFyYW0gdGhlbWVOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHRoZW1lLlxuICogQHBhcmFtIGJyYW5kcyAtIFRoZSBhcnJheSBvZiBicmFuZCBvYmplY3RzLlxuICogQHJldHVybnMgVGhlIGlkIG9mIHRoZSB0aGVtZS5cbiAqL1xuZXhwb3J0cy5nZXRCcmFuZElkID0gKHRoZW1lTmFtZSwgYnJhbmRzKSA9PiB7XG4gICAgY29uc3QgYnJhbmRPYmplY3QgPSBicmFuZHMuZmlsdGVyKChicmFuZCkgPT4gYnJhbmQubmFtZSA9PT0gdGhlbWVOYW1lKTtcbiAgICBpZiAoYnJhbmRPYmplY3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IGJyYW5kIHdpdGggbmFtZSBcXFwiXCIgKyBcIm5hbWVcIiArIFwiXFxcIiBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBicmFuZE9iamVjdFswXS5pZDtcbn07XG4vKipcbiAqIEdlbmVyYXRlIHRoZSBleHBvcnRlZCBmaWxlIG5hbWUgYmFzZWQgb24gdGhlIHR5cGUgYW5kIGJyYW5kLlxuICpcbiAqIEBwYXJhbSB0eXBlIC0gVGhlIHR5cGUgb2YgdGhlIGZpbGUuXG4gKiBAcGFyYW0gYnJhbmQgLSBUaGUgYnJhbmQgbmFtZS5cbiAqIEByZXR1cm5zIFRoZSBnZW5lcmF0ZWQgZmlsZSBuYW1lLlxuICovXG5leHBvcnRzLmV4cG9ydGVkRmlsZU5hbWUgPSAodHlwZSwgYnJhbmQpID0+IHtcbiAgICBsZXQgZm9sZGVyID0gXCJcIjtcbiAgICBzd2l0Y2ggKGJyYW5kKSB7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLnZpZ286XG4gICAgICAgICAgICBmb2xkZXIgPSBcInZpZ29cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBheWxvYWRzXzEuYnJhbmROYW1lcy5jcHA6XG4gICAgICAgICAgICBmb2xkZXIgPSBcImNwcFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLmtvb3A6XG4gICAgICAgICAgICBmb2xkZXIgPSBcImtvb3BcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBjYXNlIGJyYW5kTmFtZXMua256OlxuICAgICAgICAvLyAgIGZvbGRlciA9IFwia256XCI7XG4gICAgICAgIC8vICAgYnJlYWs7XG4gICAgICAgIC8vIGNhc2UgYnJhbmROYW1lcy5zdXM6XG4gICAgICAgIC8vICAgZm9sZGVyID0gXCJzdXNcIjtcbiAgICAgICAgLy8gICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBoZWFkZXIgY29tbWVudCBFUlJPUjogYnJhbmQgbmFtZSBcXFwiXCIgKyBicmFuZCArIFwiXFxcIiBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gYCR7Zm9sZGVyfS8ke3R5cGV9LmNzc2A7XG59O1xuLyoqXG4gKiBHZW5lcmF0ZSBhIHZhcmlhYmxlIG5hbWUgYmFzZWQgb24gdGhlIHByZWZpeCwgdG9rZW4sIGFuZCB0b2tlbiBncm91cC5cbiAqXG4gKiBAcGFyYW0gcHJlZml4IC0gVGhlIHByZWZpeCBmb3IgdGhlIHZhcmlhYmxlIG5hbWUuXG4gKiBAcGFyYW0gdG9rZW4gLSBUaGUgdG9rZW4gb2JqZWN0LlxuICogQHBhcmFtIHRva2VuR3JvdXAgLSBUaGUgdG9rZW4gZ3JvdXAgb2JqZWN0LlxuICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCB2YXJpYWJsZSBuYW1lLlxuICovXG5leHBvcnRzLnZhcmlhYmxlTmFtZSA9IChwcmVmaXgsIHRva2VuLCB0b2tlbkdyb3VwKSA9PiB7XG4gICAgLy8gQ3JlYXRlIGFycmF5IHdpdGggYWxsIHBhdGggc2VnbWVudHMgYW5kIHRva2VuIG5hbWUgYXQgdGhlIGVuZC5cbiAgICBjb25zdCBzZWdtZW50cyA9IFsuLi50b2tlbkdyb3VwLnBhdGhdO1xuICAgIGlmICghdG9rZW5Hcm91cC5pc1Jvb3QpIHtcbiAgICAgICAgc2VnbWVudHMucHVzaCh0b2tlbkdyb3VwLm5hbWUpO1xuICAgIH1cbiAgICBzZWdtZW50cy5wdXNoKHRva2VuLm5hbWUpO1xuICAgIGlmIChwcmVmaXggJiYgcHJlZml4Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2VnbWVudHMudW5zaGlmdChwcmVmaXgpO1xuICAgIH1cbiAgICAvLyBjcmVhdGUgb25lIHN0cmluZyB3aXRoIHNwYWNlIGZvciBjYW1lbENhc2VcbiAgICBjb25zdCBzZW50ZW5jZSA9IHNlZ21lbnRzXG4gICAgICAgIC5qb2luKFwiIFwiKVxuICAgICAgICAudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvW15hLXpBLVowLTldKyguKS9nLCAobSwgY2hyKSA9PiBjaHIudG9VcHBlckNhc2UoKSk7XG4gICAgcmV0dXJuIHNlbnRlbmNlO1xufTtcbi8qKlxuICogR2VuZXJhdGUgYSBzdHlsZXggdG9rZW4gbmFtZSBiYXNlZCBvbiB0aGUgdG9rZW4gYW5kIHRva2VuIGdyb3VwLlxuICpcbiAqIEBwYXJhbSB0b2tlbiAtIFRoZSB0b2tlbiBvYmplY3QuXG4gKiBAcGFyYW0gdG9rZW5Hcm91cCAtIFRoZSB0b2tlbiBncm91cCBvYmplY3QuXG4gKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIHN0eWxleCB0b2tlbiBuYW1lLlxuICovXG5leHBvcnRzLnN0eWxleFRva2VuTmFtZSA9ICh0b2tlbiwgdG9rZW5Hcm91cCkgPT4ge1xuICAgIC8vIENyZWF0ZSBhcnJheSB3aXRoIGFsbCBwYXRoIHNlZ21lbnRzIGFuZCB0b2tlbiBuYW1lIGF0IHRoZSBlbmQuXG4gICAgY29uc3Qgc2VnbWVudHMgPSBbLi4udG9rZW5Hcm91cC5wYXRoXTtcbiAgICBpZiAoIXRva2VuR3JvdXAuaXNSb290KSB7XG4gICAgICAgIHNlZ21lbnRzLnB1c2godG9rZW5Hcm91cC5uYW1lKTtcbiAgICB9XG4gICAgc2VnbWVudHMucHVzaCh0b2tlbi5uYW1lKTtcbiAgICAvLyBjcmV0ZSBvbmUgc3RyaW5nIHdpdGggc3BhY2UgZm9yIGNhbWVsQ2FzZVxuICAgIGNvbnN0IHNlbnRlbmNlID0gc2VnbWVudHNcbiAgICAgICAgLmpvaW4oXCIgXCIpXG4gICAgICAgIC50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOV0rKC4pL2csIChtLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKTtcbiAgICByZXR1cm4gc2VudGVuY2U7XG59O1xuLyoqXG4gKiBHZW5lcmF0ZSBhIHRva2VuIG5hbWUgYmFzZWQgb24gdGhlIG9yaWdpbiBuYW1lIG9mIHRoZSB0b2tlbi5cbiAqXG4gKiBAcGFyYW0gdG9rZW4gLSBUaGUgdG9rZW4gb2JqZWN0LlxuICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCB0b2tlbiBuYW1lLlxuICovXG5leHBvcnRzLnRva2VuTmFtZUJ5T3JpZ2luTmFtZSA9ICh0b2tlbiwga2VlcENhdGVnb3J5KSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGlmICghdG9rZW4ub3JpZ2luKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG9rZW4gb3JpZ2luIGlzIHVuZGVmaW5lZFwiLCB0b2tlbik7XG4gICAgfVxuICAgIGNvbnN0IG5hbWUgPSAoX2EgPSB0b2tlbi5vcmlnaW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lO1xuICAgIGNvbnN0IHRyYW5zZnJvbWVkID0gbmFtZSA9PT0gbnVsbCB8fCBuYW1lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lLnNwbGl0KFwiL1wiKTtcbiAgICBpZiAoIWtlZXBDYXRlZ29yeSkge1xuICAgICAgICB0cmFuc2Zyb21lZCA9PT0gbnVsbCB8fCB0cmFuc2Zyb21lZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdHJhbnNmcm9tZWQuc2hpZnQoKTtcbiAgICB9XG4gICAgY29uc3Qgam9pbmVkID0gdHJhbnNmcm9tZWQgPT09IG51bGwgfHwgdHJhbnNmcm9tZWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRyYW5zZnJvbWVkLmpvaW4oXCIgXCIpLnJlcGxhY2UoL1teYS16QS1aMC05XSsoLikvZywgKG0sIGNocikgPT4gY2hyLnRvVXBwZXJDYXNlKCkpO1xuICAgIHJldHVybiBqb2luZWQgfHwgXCJcIjtcbn07XG5leHBvcnRzLnRva2VuTmFtZVdpdGhDYXRlZ29yeSA9ICh0b2tlbiwgcHJlZml4KSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IG5hbWUgPSAoX2EgPSB0b2tlbi5vcmlnaW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZDtcbiAgICBjb25zdCBuYW1lQXJyID0gbmFtZSA9PT0gbnVsbCB8fCBuYW1lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lLnNwbGl0KFwiL1wiKTtcbiAgICBpZiAocHJlZml4KSB7XG4gICAgICAgIG5hbWVBcnIgPT09IG51bGwgfHwgbmFtZUFyciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmFtZUFyci51bnNoaWZ0KHByZWZpeCk7XG4gICAgfVxuICAgIGNvbnN0IGpvaW5lZCA9IG5hbWVBcnIgPT09IG51bGwgfHwgbmFtZUFyciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmFtZUFyci5qb2luKFwiIFwiKS50b0xvY2FsZUxvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16QS1aMC05XSsoLikvZywgKG0sIGNocikgPT4gY2hyLnRvVXBwZXJDYXNlKCkpO1xuICAgIHJldHVybiBqb2luZWQgfHwgXCJcIjtcbn07XG5leHBvcnRzLnRva2VuTmFtZVdpdGhDYXRlZ29yeUZpeERvdWJsZXMgPSAodG9rZW4sIHByZWZpeCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBuYW1lID0gKF9hID0gdG9rZW4ub3JpZ2luKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaWQ7XG4gICAgY29uc3QgbmFtZUFyciA9IG5hbWUgPT09IG51bGwgfHwgbmFtZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmFtZS5zcGxpdChcIi9cIik7XG4gICAgLy8gQ2hhbmdlIGRhc2ggdG8gQ2FtZWxDYXNlXG4gICAgY29uc3Qgd2l0aG91dERhc2ggPSBuYW1lQXJyID09PSBudWxsIHx8IG5hbWVBcnIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hbWVBcnIubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGl0ZW0uc3BsaXQoXCItXCIpXG4gICAgICAgICAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSk7XG4gICAgICAgIHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcbiAgICB9KTtcbiAgICBjb25zdCByZW1vdmVkRG91YmxlcyA9IHdpdGhvdXREYXNoID09PSBudWxsIHx8IHdpdGhvdXREYXNoID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aXRob3V0RGFzaC5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxvd2VyY2FzZWRJdGVtID0gaXRlbS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gaW5kZXggPT09IHdpdGhvdXREYXNoLmZpbmRJbmRleCgod29yZCkgPT4gd29yZC50b0xvd2VyQ2FzZSgpID09PSBsb3dlcmNhc2VkSXRlbSk7XG4gICAgfSk7XG4gICAgaWYgKHByZWZpeCkge1xuICAgICAgICByZW1vdmVkRG91YmxlcyA9PT0gbnVsbCB8fCByZW1vdmVkRG91YmxlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVtb3ZlZERvdWJsZXMudW5zaGlmdChwcmVmaXgpO1xuICAgIH1cbiAgICBjb25zdCBqb2luZWQgPSByZW1vdmVkRG91YmxlcyA9PT0gbnVsbCB8fCByZW1vdmVkRG91YmxlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVtb3ZlZERvdWJsZXMuam9pbihcIiBcIikudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWjAtOV0rKC4pL2csIChtLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKTtcbiAgICByZXR1cm4gam9pbmVkIHx8IFwiXCI7XG59O1xubGV0IHByaW50Q29tbWVudCA9IGZhbHNlO1xubGV0IGdyb3VwTmFtZSA9IFwiXCI7XG4vKipcbiAqIEdlbmVyYXRlIGEgZ3JvdXAgbmFtZSBjb21tZW50IGJhc2VkIG9uIHRoZSB0b2tlbiBncm91cC5cbiAqXG4gKiBAcGFyYW0gdG9rZW5Hcm91cCAtIFRoZSB0b2tlbiBncm91cCBvYmplY3QuXG4gKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIGdyb3VwIG5hbWUgY29tbWVudC5cbiAqL1xuZXhwb3J0cy5ncm91cE5hbWVDb21tZW50ID0gKHRva2VuR3JvdXApID0+IHtcbiAgICBpZiAoISh0b2tlbkdyb3VwID09PSBudWxsIHx8IHRva2VuR3JvdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRva2VuR3JvdXAucGFyZW50KSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgY29uc3QgeyBwYXJlbnQ6IHsgbmFtZSB9IH0gPSB0b2tlbkdyb3VwO1xuICAgIGlmIChuYW1lICE9PSBncm91cE5hbWUpIHtcbiAgICAgICAgZ3JvdXBOYW1lID0gbmFtZTtcbiAgICAgICAgcHJpbnRDb21tZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByaW50Q29tbWVudCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcHJpbnRDb21tZW50XG4gICAgICAgID8gYC8qIC0tLSAke2dyb3VwTmFtZX0gLS0tICovXFxuYCA6IFwiXCI7XG59O1xuLyoqXG4gKiBGaWx0ZXIgdG9rZW5zIGJhc2VkIG9uIHRoZSBuYW1lLlxuICpcbiAqIEBwYXJhbSBuYW1lIC0gVGhlIG5hbWUgdG8gZmlsdGVyIGJ5LlxuICogQHBhcmFtIHRva2VucyAtIFRoZSBhcnJheSBvZiB0b2tlbnMuXG4gKiBAcmV0dXJucyBUaGUgZmlsdGVyZWQgYXJyYXkgb2YgdG9rZW5zLlxuICovXG5leHBvcnRzLmZpbHRlclRva2VucyA9IChuYW1lLCB0b2tlbnMpID0+IHtcbiAgICByZXR1cm4gdG9rZW5zLmZpbHRlcigodG9rZW4pID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoKF9hID0gdG9rZW4ub3JpZ2luKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuLm9yaWdpbi5uYW1lLmluY2x1ZGVzKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIkNoeWJhXCI7XG4gICAgfSk7XG59O1xuLyoqXG4gKiBQcmludCB0aGUgb3V0cHV0IGRhdGEuXG4gKlxuICogQHBhcmFtIGRhdGEgLSBUaGUgZGF0YSB0byBwcmludC5cbiAqL1xuZXhwb3J0cy5wcmludE91dHB1dCA9IChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXhwb3J0cy5zdHJpbmdpZnlPdXRwdXQoZGF0YSkpO1xufTtcbi8qKlxuICogR2VuZXJhdGUgYSBncm91cCBuYW1lIGZvciBzdHlsZXggYmFzZWQgb24gdGhlIHByb3ZpZGVkIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIG5hbWVzIC0gVGhlIHN0cmluZ3MgdG8gZ2VuZXJhdGUgdGhlIGdyb3VwIG5hbWUgZnJvbS5cbiAqIEByZXR1cm5zIFRoZSBnZW5lcmF0ZWQgZ3JvdXAgbmFtZS5cbiAqL1xuZXhwb3J0cy5zdHlsZXhHcm91cE5hbWUgPSAoLi4ubmFtZXMpID0+IHtcbiAgICByZXR1cm4gbmFtZXNcbiAgICAgICAgLmpvaW4oXCIgXCIpXG4gICAgICAgIC50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOV0rKC4pL2csIChtLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKTtcbn07XG4vKipcbiAqIFN0cmluZyB0byBsb3dlciBjYXNlXG4gKiBAcGFyYW0gc3RyIC0gc3RyaW5nIHRvIGxvd2VyIGNhc2VcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydHMudG9Mb3dlckNhc2UgPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0ci50b0xvY2FsZUxvd2VyQ2FzZSgpO1xufTtcbmV4cG9ydHMuam9pbkFycmF5QnlTbGFzaCA9IChzdHJBcnIpID0+IHtcbiAgICByZXR1cm4gc3RyQXJyLmpvaW4oXCIgLyBcIik7XG59O1xuZXhwb3J0cy5ncmFkaWVudEFuZ2xlID0gKGZyb20sIHRvKSA9PiB7XG4gICAgY29uc3QgZGVsdGFYID0gdG8ueCAtIGZyb20ueDtcbiAgICBjb25zdCBkZWx0YVkgPSB0by55IC0gZnJvbS55O1xuICAgIGNvbnN0IHJhZGlhbnMgPSBNYXRoLmF0YW4yKGRlbHRhWSwgZGVsdGFYKTtcbiAgICBjb25zdCByZXN1bHQgPSAocmFkaWFucyAqIDE4MCkgLyBNYXRoLlBJO1xuICAgIGNvbnN0IGZpeGVkUmVzdWx0ID0gcmVzdWx0ICsgOTA7XG4gICAgcmV0dXJuIChmaXhlZFJlc3VsdCA8IDAgPyBmaXhlZFJlc3VsdCArIDM2MCA6IGZpeGVkUmVzdWx0KSAlIDM2MDtcbn07XG5jb25zdCBnZXRWYWx1ZVdpdGhDb3JyZWN0VW5pdCA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYCR7dmFsdWV9YDtcbiAgICB9XG4gICAgcmV0dXJuIGAke3ZhbHVlfXB4YDtcbn07XG5jb25zdCBub25OZWdhdGl2ZVZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlIDwgMCA/IDAgOiB2YWx1ZTtcbn07XG5leHBvcnRzLnNoYWRvd1Rva2VuVmFsdWUgPSAodG9rZW4pID0+IHtcbiAgICBjb25zdCB7IGNvbG9yLCB4LCB5LCByYWRpdXMsIHNwcmVhZCB9ID0gdG9rZW4udmFsdWU7XG4gICAgY29uc3QgYmx1clJhZGl1cyA9IGdldFZhbHVlV2l0aENvcnJlY3RVbml0KG5vbk5lZ2F0aXZlVmFsdWUocmFkaXVzLm1lYXN1cmUpKTtcbiAgICBjb25zdCBvZmZzZXRYID0gZ2V0VmFsdWVXaXRoQ29ycmVjdFVuaXQoeC5tZWFzdXJlKTtcbiAgICBjb25zdCBvZmZzZXRZID0gZ2V0VmFsdWVXaXRoQ29ycmVjdFVuaXQoeS5tZWFzdXJlKTtcbiAgICBjb25zdCBzcHJlYWRSYWRpdXMgPSBnZXRWYWx1ZVdpdGhDb3JyZWN0VW5pdChzcHJlYWQubWVhc3VyZSk7XG4gICAgcmV0dXJuIGAke29mZnNldFh9ICR7b2Zmc2V0WX0gJHtibHVyUmFkaXVzfSAke3NwcmVhZFJhZGl1c30gIyR7Y29sb3IuaGV4fWA7XG59O1xuZXhwb3J0cy5zaG93VG9rZW5zTmFtZXNCeU9yaWdpblBhdGggPSAodG9rZW4pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0b2tlbk9yaWdpbk9iamVjdDogZXhwb3J0cy5zdHJpbmdpZnlPdXRwdXQodG9rZW4ub3JpZ2luKSxcbiAgICB9O1xufTtcbmNvbnN0IHJlbW92ZWREb3VibGVzID0gKHN0cmluZ0FycikgPT4ge1xuICAgIGlmICghc3RyaW5nQXJyKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZ0FyciA9PT0gbnVsbCB8fCBzdHJpbmdBcnIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0cmluZ0Fyci5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxvd2VyY2FzZWRJdGVtID0gaXRlbS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gaW5kZXggPT09IHN0cmluZ0Fyci5maW5kSW5kZXgoKHdvcmQpID0+IHdvcmQudG9Mb3dlckNhc2UoKSA9PT0gbG93ZXJjYXNlZEl0ZW0pO1xuICAgIH0pO1xufTtcbmV4cG9ydHMubmFtZUZyb21PcmlnaW4gPSAodG9rZW4sIHVzZVByZWZpeCA9IHRydWUpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IHJlbW92ZWRTcGVjaWFsQ2hhcnMgPSAoX2IgPSAoX2EgPSB0b2tlbi5vcmlnaW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVwbGFjZSgvXFwtfFxccy9nLCBcIlwiKTtcbiAgICBjb25zdCBzcGxpdHRlZE5hbWUgPSByZW1vdmVkU3BlY2lhbENoYXJzID09PSBudWxsIHx8IHJlbW92ZWRTcGVjaWFsQ2hhcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlbW92ZWRTcGVjaWFsQ2hhcnMuc3BsaXQoXCIvXCIpO1xuICAgIHJldHVybiByZW1vdmVkRG91YmxlcyhzcGxpdHRlZE5hbWUpXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpdGVtLnNsaWNlKDEpKVxuICAgICAgICAuam9pbihcIlwiKTtcbiAgICAvLyByZXR1cm4gbmFtZT8uc3BsaXQoXCIvXCIpLm1hcCgoaXRlbSkgPT4gaXRlbS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGl0ZW0uc2xpY2UoMSkpLmpvaW4oXCJcIikgfHwgXCJcIjtcbiAgICAvLyByZXR1cm4gdG9rZW4uaWRcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RyaW5nSFNMQSA9IGV4cG9ydHMuc3RyaW5nSFNMID0gZXhwb3J0cy5jYWxjdWxhdGVTYXR1cmF0aW9uID0gZXhwb3J0cy5jYWxjdWxhdGVMaWdodG5lc3MgPSBleHBvcnRzLmNhbGN1bGF0ZUh1ZSA9IHZvaWQgMDtcbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgaHVlIHZhbHVlIGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIGRlbHRhIC0gVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbWF4aW11bSBhbmQgbWluaW11bSBjb2xvciB2YWx1ZXMuXG4gKiBAcGFyYW0gY21heCAtIFRoZSBtYXhpbXVtIGNvbG9yIHZhbHVlLlxuICogQHBhcmFtIHIgLSBUaGUgcmVkIGNvbG9yIHZhbHVlLlxuICogQHBhcmFtIGcgLSBUaGUgZ3JlZW4gY29sb3IgdmFsdWUuXG4gKiBAcGFyYW0gYiAtIFRoZSBibHVlIGNvbG9yIHZhbHVlLlxuICogQHJldHVybnMgVGhlIGNhbGN1bGF0ZWQgaHVlIHZhbHVlLlxuICovXG5leHBvcnRzLmNhbGN1bGF0ZUh1ZSA9IChkZWx0YSwgY21heCwgciwgZywgYikgPT4ge1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIGlmIChkZWx0YSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGNtYXggPT09IHIpIHtcbiAgICAgICAgcmVzdWx0ID0gKChnIC0gYikgLyBkZWx0YSkgJSA2O1xuICAgIH1cbiAgICBlbHNlIGlmIChjbWF4ID09PSBnKSB7XG4gICAgICAgIHJlc3VsdCA9IChiIC0gcikgLyBkZWx0YSArIDI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNtYXggPT09IGIpIHtcbiAgICAgICAgcmVzdWx0ID0gKHIgLSBnKSAvIGRlbHRhICsgNDtcbiAgICB9XG4gICAgY29uc3Qgcm91bmRlZCA9IE1hdGgucm91bmQocmVzdWx0ICogNjApO1xuICAgIGlmIChyb3VuZGVkIDwgMCkge1xuICAgICAgICByZXR1cm4gcm91bmRlZCArIDM2MDtcbiAgICB9XG4gICAgcmV0dXJuIHJvdW5kZWQ7XG59O1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsaWdodG5lc3MgdmFsdWUgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0gY21heCAtIFRoZSBtYXhpbXVtIGNvbG9yIHZhbHVlLlxuICogQHBhcmFtIGNtaW4gLSBUaGUgbWluaW11bSBjb2xvciB2YWx1ZS5cbiAqIEByZXR1cm5zIFRoZSBjYWxjdWxhdGVkIGxpZ2h0bmVzcyB2YWx1ZS5cbiAqL1xuZXhwb3J0cy5jYWxjdWxhdGVMaWdodG5lc3MgPSAoY21heCwgY21pbikgPT4ge1xuICAgIHJldHVybiAoY21heCArIGNtaW4pIC8gMjtcbn07XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNhdHVyYXRpb24gdmFsdWUgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0gZGVsdGEgLSBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBtYXhpbXVtIGFuZCBtaW5pbXVtIGNvbG9yIHZhbHVlcy5cbiAqIEBwYXJhbSBsaWdodG5lc3MgLSBUaGUgbGlnaHRuZXNzIHZhbHVlLlxuICogQHJldHVybnMgVGhlIGNhbGN1bGF0ZWQgc2F0dXJhdGlvbiB2YWx1ZS5cbiAqL1xuZXhwb3J0cy5jYWxjdWxhdGVTYXR1cmF0aW9uID0gKGRlbHRhLCBsaWdodG5lc3MpID0+IHtcbiAgICByZXR1cm4gZGVsdGEgPT09IDAgPyAwIDogZGVsdGEgLyAoMSAtIE1hdGguYWJzKDIgKiBsaWdodG5lc3MgLSAxKSk7XG59O1xuLyoqXG4gKiBDb252ZXJ0cyB0aGUgSFNMIHZhbHVlcyB0byBhIHN0cmluZyByZXByZXNlbnRhdGlvbi5cbiAqIEBwYXJhbSBodWUgLSBUaGUgaHVlIHZhbHVlLlxuICogQHBhcmFtIHNhdHVyYXRpb24gLSBUaGUgc2F0dXJhdGlvbiB2YWx1ZS5cbiAqIEBwYXJhbSBsaWdodG5lc3MgLSBUaGUgbGlnaHRuZXNzIHZhbHVlLlxuICogQHJldHVybnMgVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgSFNMIHZhbHVlcy5cbiAqL1xuZXhwb3J0cy5zdHJpbmdIU0wgPSAoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpID0+IHtcbiAgICByZXR1cm4gYGhzbCgke2h1ZX0sICR7TWF0aC5yb3VuZChzYXR1cmF0aW9uKX0lLCAke01hdGgucm91bmQobGlnaHRuZXNzKX0lKWA7XG59O1xuLyoqXG4gKiBDb252ZXJ0cyB0aGUgSFNMQSB2YWx1ZXMgdG8gYSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXG4gKiBAcGFyYW0gaHVlIC0gVGhlIGh1ZSB2YWx1ZS5cbiAqIEBwYXJhbSBzYXR1cmF0aW9uIC0gVGhlIHNhdHVyYXRpb24gdmFsdWUuXG4gKiBAcGFyYW0gbGlnaHRuZXNzIC0gVGhlIGxpZ2h0bmVzcyB2YWx1ZS5cbiAqIEBwYXJhbSBhbHBoYSAtIFRoZSBhbHBoYSB2YWx1ZS5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIEhTTEEgdmFsdWVzLlxuICovXG5leHBvcnRzLnN0cmluZ0hTTEEgPSAoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGFscGhhKSA9PiB7XG4gICAgY29uc29sZS5sb2coYGhzbCgke2h1ZX0sICR7TWF0aC5yb3VuZChzYXR1cmF0aW9uKX0sICR7TWF0aC5yb3VuZChsaWdodG5lc3MpfSUsICR7YWxwaGF9KWApO1xuICAgIHJldHVybiBgaHNsYSgke2h1ZX0sICR7TWF0aC5yb3VuZChzYXR1cmF0aW9uKX0lLCAke01hdGgucm91bmQobGlnaHRuZXNzKX0lLCAke01hdGgucm91bmQoYWxwaGEgKiAxMCkgLyAxMH0pYDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG4vKipcbiAqIENvbnZlcnRzIGEgY29sb3Igb2JqZWN0IHRvIGFuIEhTTCBvciBIU0xBIHN0cmluZyByZXByZXNlbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0NvbG9yVG9rZW5WYWx1ZX0gY29sb3IgLSBUaGUgY29sb3Igb2JqZWN0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyBUaGUgSFNMIG9yIEhTTEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjb2xvci5cbiAqL1xuY29uc3QgaHNsQ29udmVydG9yID0gKGNvbG9yKSA9PiB7XG4gICAgY29uc3QgeyByOiBfciwgZzogX2csIGI6IF9iLCBhOiBfYSB9ID0gY29sb3I7XG4gICAgY29uc3QgciA9IF9yIC8gMjU1O1xuICAgIGNvbnN0IGcgPSBfZyAvIDI1NTtcbiAgICBjb25zdCBiID0gX2IgLyAyNTU7XG4gICAgY29uc3QgYSA9IF9hIC8gMjU1O1xuICAgIGNvbnN0IGNtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICBjb25zdCBjbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgY29uc3QgZGVsdGEgPSBjbWF4IC0gY21pbjtcbiAgICBjb25zdCBodWUgPSBoZWxwZXJzXzEuY2FsY3VsYXRlSHVlKGRlbHRhLCBjbWF4LCByLCBnLCBiKTtcbiAgICBjb25zdCBfbGlnaHRuZXNzID0gaGVscGVyc18xLmNhbGN1bGF0ZUxpZ2h0bmVzcyhjbWF4LCBjbWluKTtcbiAgICBjb25zdCBfc2F0dXJhdGlvbiA9IGhlbHBlcnNfMS5jYWxjdWxhdGVTYXR1cmF0aW9uKGRlbHRhLCBfbGlnaHRuZXNzKTtcbiAgICBjb25zdCBsaWdodG5lc3MgPSArKF9saWdodG5lc3MgKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgY29uc3Qgc2F0dXJhdGlvbiA9ICsoX3NhdHVyYXRpb24gKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgcmV0dXJuIGEgPT09IDEgPyBoZWxwZXJzXzEuc3RyaW5nSFNMKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSA6IGhlbHBlcnNfMS5zdHJpbmdIU0xBKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBhKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBoc2xDb252ZXJ0b3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBoc2xDb252ZXJ0b3JfMSA9IHJlcXVpcmUoXCIuL2hzbENvbnZlcnRvclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhzbENvbnZlcnRvcl8xLmRlZmF1bHQ7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG5jb25zdCBoc2xfY29udmVydG9yXzEgPSByZXF1aXJlKFwiLi9oc2wtY29udmVydG9yXCIpO1xuY29uc3QgcGF5bG9hZHNfMSA9IHJlcXVpcmUoXCIuL3BheWxvYWRzXCIpO1xuLy8gRnVuY3Rpb25zIHJlZ2lzdHJhdGlvblxuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJjdXJyZW50RGF0ZVwiLCBoZWxwZXJzXzEuY3VycmVudERhdGUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJnZXRCcmFuZElkXCIsIGhlbHBlcnNfMS5nZXRCcmFuZElkKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiZXhwb3J0ZWRGaWxlTmFtZVwiLCBoZWxwZXJzXzEuZXhwb3J0ZWRGaWxlTmFtZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInZhcmlhYmxlTmFtZVwiLCBoZWxwZXJzXzEudmFyaWFibGVOYW1lKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiaHNsQ29udmVydG9yXCIsIGhzbF9jb252ZXJ0b3JfMS5kZWZhdWx0KTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiZ3JvdXBOYW1lQ29tbWVudFwiLCBoZWxwZXJzXzEuZ3JvdXBOYW1lQ29tbWVudCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInN0eWxleFRva2VuTmFtZVwiLCBoZWxwZXJzXzEuc3R5bGV4VG9rZW5OYW1lKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiZmlsdGVyVG9rZW5zXCIsIGhlbHBlcnNfMS5maWx0ZXJUb2tlbnMpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJwcmludE91dHB1dFwiLCBoZWxwZXJzXzEucHJpbnRPdXRwdXQpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJ0b2tlbk5hbWVCeU9yaWdpbk5hbWVcIiwgaGVscGVyc18xLnRva2VuTmFtZUJ5T3JpZ2luTmFtZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInN0eWxleEdyb3VwTmFtZVwiLCBoZWxwZXJzXzEuc3R5bGV4R3JvdXBOYW1lKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwidG9Mb3dlckNhc2VcIiwgaGVscGVyc18xLnRvTG93ZXJDYXNlKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiam9pbkFycmF5QnlTbGFzaFwiLCBoZWxwZXJzXzEuam9pbkFycmF5QnlTbGFzaCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImdyYWRpZW50QW5nbGVcIiwgaGVscGVyc18xLmdyYWRpZW50QW5nbGUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJzaGFkb3dUb2tlblZhbHVlXCIsIGhlbHBlcnNfMS5zaGFkb3dUb2tlblZhbHVlKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwidG9rZW5OYW1lV2l0aENhdGVnb3J5XCIsIGhlbHBlcnNfMS50b2tlbk5hbWVXaXRoQ2F0ZWdvcnkpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJ0b2tlbk5hbWVXaXRoQ2F0ZWdvcnlGaXhEb3VibGVzXCIsIGhlbHBlcnNfMS50b2tlbk5hbWVXaXRoQ2F0ZWdvcnlGaXhEb3VibGVzKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwic2hvd1Rva2Vuc05hbWVzQnlPcmlnaW5QYXRoXCIsIGhlbHBlcnNfMS5zaG93VG9rZW5zTmFtZXNCeU9yaWdpblBhdGgpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJzdHJpbmdpZnlPdXRwdXRcIiwgaGVscGVyc18xLnN0cmluZ2lmeU91dHB1dCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcIm5hbWVGcm9tT3JpZ2luXCIsIGhlbHBlcnNfMS5uYW1lRnJvbU9yaWdpbik7XG4vLyBQYXlsb2Fkc1xuUHVsc2FyLnJlZ2lzdGVyUGF5bG9hZChcImN1cnJlbnRFeHBvcnRlclZlcnNpb25cIiwgcGF5bG9hZHNfMS5jdXJyZW50RXhwb3J0ZXJWZXJzaW9uKTtcblB1bHNhci5yZWdpc3RlclBheWxvYWQoXCJicmFuZE5hbWVzXCIsIHBheWxvYWRzXzEuYnJhbmROYW1lcyk7XG5QdWxzYXIucmVnaXN0ZXJQYXlsb2FkKFwiYmVoYXZpb3JcIiwgcGF5bG9hZHNfMS5iZWhhdmlvcik7XG5QdWxzYXIucmVnaXN0ZXJQYXlsb2FkKFwic3R5bGV4Q2F0ZWdvcmllc1wiLCBwYXlsb2Fkc18xLnN0eWxleENhdGVnb3JpZXMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0eWxleENhdGVnb3JpZXMgPSBleHBvcnRzLmJlaGF2aW9yID0gZXhwb3J0cy5icmFuZE5hbWVzID0gZXhwb3J0cy5jdXJyZW50RXhwb3J0ZXJWZXJzaW9uID0gdm9pZCAwO1xuY29uc3QgZXhwb3J0ZXJfanNvbl8xID0gcmVxdWlyZShcIi4uLy4uL2V4cG9ydGVyLmpzb25cIik7XG5leHBvcnRzLmN1cnJlbnRFeHBvcnRlclZlcnNpb24gPSBleHBvcnRlcl9qc29uXzEudmVyc2lvbjtcbmV4cG9ydHMuYnJhbmROYW1lcyA9IHtcbiAgICBjcHBEYXJrOiBcIkNQUCBEYXJrXCIsXG4gICAgY3BwOiBcIkNQUCBMaWdodFwiLFxuICAgIGtvb3BEYXJrOiBcIktvb3AgRGFya1wiLFxuICAgIGtvb3A6IFwiS29vcCBMaWdodFwiLFxuICAgIHZpZ286IFwiVklHb1wiLFxufTtcbmV4cG9ydHMuYmVoYXZpb3IgPSB7XG4gICAgY29sb3JUb2tlblByZWZpeDogXCJjb2xvclwiLFxuICAgIGJvcmRlclRva2VuUHJlZml4OiBcImJvcmRlclwiLFxuICAgIGdyYWRpZW50VG9rZW5QcmVmaXg6IFwiZ3JhZGllbnRcIixcbiAgICBtZWFzdXJlVG9rZW5QcmVmaXg6IFwibWVhc3VyZVwiLFxuICAgIHNoYWRvd1Rva2VuUHJlZml4OiBcInNoYWRvd1wiLFxuICAgIHR5cG9ncmFwaHlUb2tlblByZWZpeDogXCJ0eXBvZ3JhcGh5XCIsXG59O1xuZXhwb3J0cy5zdHlsZXhDYXRlZ29yaWVzID0gW1xuICAgIFwiY29yZVwiLFxuICAgIFwic2VtYW50aWNcIixcbiAgICBcImNvbXBvbmVudFwiXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==