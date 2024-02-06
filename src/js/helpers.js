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
/*! exports provided: id, name, description, author, organization, homepage, source_dir, version, usesBrands, config, engines, tags, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"ais.exporter stylex\",\"name\":\"STYLEX & CSS ALL THEMES\",\"description\":\"CSS ans Stylex all theme exporter\",\"author\":\"\",\"organization\":\"Ais servis\",\"homepage\":\"\",\"source_dir\":\"src\",\"version\":\"1.0.0\",\"usesBrands\":true,\"config\":{\"sources\":\"sources.json\",\"output\":\"output.json\",\"js\":\"src/js/helpers.js\"},\"engines\":{\"pulsar\":\"1.0.0\",\"supernova\":\"1.0.0\"},\"tags\":[\"CSS\",\"Tokens\",\"Stylex\"]}");

/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.gradientAngle = exports.joinArrayBySlash = exports.toLowerCase = exports.stylexGroupName = exports.printOutput = exports.filterTokens = exports.groupNameComment = exports.tokenNameByOriginName = exports.stylexTokenName = exports.variableName = exports.exportedFileName = exports.getBrandId = exports.currentDate = void 0;
const payloads_1 = __webpack_require__(/*! ./payloads */ "./src/payloads.ts");
/**
 * Stringifies an object, removing circular references.
 *
 * @param obj - The object to stringify.
 * @returns The stringified object.
 */
const stringifyOutput = (obj) => {
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
        case "gradients":
            file = "_gradients.css";
            break;
        default:
            console.log("File header comment ERROR: file type \"" + type + "\" doesn't exist.");
            break;
    }
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
        case payloads_1.brandNames.knz:
            folder = "knz";
            break;
        case payloads_1.brandNames.sus:
            folder = "sus";
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
exports.tokenNameByOriginName = (token) => {
    var _a;
    const name = (_a = token.origin) === null || _a === void 0 ? void 0 : _a.name;
    const transfromed = name === null || name === void 0 ? void 0 : name.split("/");
    transfromed === null || transfromed === void 0 ? void 0 : transfromed.shift();
    const joined = transfromed === null || transfromed === void 0 ? void 0 : transfromed.join(" ").toLocaleLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
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
    console.log(stringifyOutput(data));
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
 * Strin to lower case
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
    if (cmax = r) {
        result = (g - b) / delta % 6;
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
    return `hsl(${hue}, ${Math.round(saturation)}, ${Math.round(lightness)}%, ${Math.round((alpha * 10) / 10)}%)`;
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
    vigo: "01 - VIGo",
    cpp: "02 - CPP",
    koop: "03 - Koop",
    knz: "04 - KNZ",
    sus: "05 - SUS",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHNsLWNvbnZlcnRvci9oc2xDb252ZXJ0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYXlsb2Fkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHFDQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVcsR0FBRyxXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTyxHQUFHLEtBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVUsT0FBTyxFQUFFO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5T2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLElBQUksSUFBSSx1QkFBdUIsS0FBSyxzQkFBc0I7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSxJQUFJLHVCQUF1QixJQUFJLHNCQUFzQixLQUFLLDhCQUE4QjtBQUM5Rzs7Ozs7Ozs7Ozs7OztBQ3RFYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLGlEQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNkJBQTZCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELHFCQUFxQixtQkFBTyxDQUFDLDJEQUFnQjtBQUM3QywyQ0FBMkMscUNBQXFDLCtCQUErQixFQUFFLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUNIdEc7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxrQkFBa0IsbUJBQU8sQ0FBQyxtQ0FBVztBQUNyQyx3QkFBd0IsbUJBQU8sQ0FBQyxxREFBaUI7QUFDakQsbUJBQW1CLG1CQUFPLENBQUMscUNBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsNkNBQXFCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJoZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ3JhZGllbnRBbmdsZSA9IGV4cG9ydHMuam9pbkFycmF5QnlTbGFzaCA9IGV4cG9ydHMudG9Mb3dlckNhc2UgPSBleHBvcnRzLnN0eWxleEdyb3VwTmFtZSA9IGV4cG9ydHMucHJpbnRPdXRwdXQgPSBleHBvcnRzLmZpbHRlclRva2VucyA9IGV4cG9ydHMuZ3JvdXBOYW1lQ29tbWVudCA9IGV4cG9ydHMudG9rZW5OYW1lQnlPcmlnaW5OYW1lID0gZXhwb3J0cy5zdHlsZXhUb2tlbk5hbWUgPSBleHBvcnRzLnZhcmlhYmxlTmFtZSA9IGV4cG9ydHMuZXhwb3J0ZWRGaWxlTmFtZSA9IGV4cG9ydHMuZ2V0QnJhbmRJZCA9IGV4cG9ydHMuY3VycmVudERhdGUgPSB2b2lkIDA7XG5jb25zdCBwYXlsb2Fkc18xID0gcmVxdWlyZShcIi4vcGF5bG9hZHNcIik7XG4vKipcbiAqIFN0cmluZ2lmaWVzIGFuIG9iamVjdCwgcmVtb3ZpbmcgY2lyY3VsYXIgcmVmZXJlbmNlcy5cbiAqXG4gKiBAcGFyYW0gb2JqIC0gVGhlIG9iamVjdCB0byBzdHJpbmdpZnkuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5naWZpZWQgb2JqZWN0LlxuICovXG5jb25zdCBzdHJpbmdpZnlPdXRwdXQgPSAob2JqKSA9PiB7XG4gICAgbGV0IGNhY2hlID0gW107XG4gICAgY29uc3Qgc3RyID0gSlNPTi5zdHJpbmdpZnkob2JqLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY2FjaGUgJiYgY2FjaGUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWNoZSA9PT0gbnVsbCB8fCBjYWNoZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FjaGUucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0pO1xuICAgIGNhY2hlID0gbnVsbDtcbiAgICByZXR1cm4gc3RyO1xufTtcbi8qKlxuICogUmV0dXJuIGN1cnJlbnQgdGltZSBpbiBsb2NhbCBzdHJpbmdcbiAqIEByZXR1cm5zIFRoZSBjdXJyZW50IHRpbWUgaW4gbG9jYWwgc3RyaW5nIGZvcm1hdC5cbiAqL1xuZXhwb3J0cy5jdXJyZW50RGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICBjb25zdCB0aW1lU3RyaW5nID0gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICByZXR1cm4gYCR7ZGF0ZVN0cmluZ30gJHt0aW1lU3RyaW5nfWA7XG59O1xuLyoqXG4gKiBSZXR1cm4gaWQgb2YgdGhlIHRoZW1lIGFjY29yZGluZyB0aGVtZSBuYW1lLlxuICpcbiAqIEBwYXJhbSB0aGVtZU5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgdGhlbWUuXG4gKiBAcGFyYW0gYnJhbmRzIC0gVGhlIGFycmF5IG9mIGJyYW5kIG9iamVjdHMuXG4gKiBAcmV0dXJucyBUaGUgaWQgb2YgdGhlIHRoZW1lLlxuICovXG5leHBvcnRzLmdldEJyYW5kSWQgPSAodGhlbWVOYW1lLCBicmFuZHMpID0+IHtcbiAgICBjb25zdCBicmFuZE9iamVjdCA9IGJyYW5kcy5maWx0ZXIoKGJyYW5kKSA9PiBicmFuZC5uYW1lID09PSB0aGVtZU5hbWUpO1xuICAgIGlmIChicmFuZE9iamVjdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogYnJhbmQgd2l0aCBuYW1lIFxcXCJcIiArIFwibmFtZVwiICsgXCJcXFwiIGRvZXNuJ3QgZXhpc3QuXCIpO1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIGJyYW5kT2JqZWN0WzBdLmlkO1xufTtcbi8qKlxuICogR2VuZXJhdGUgdGhlIGV4cG9ydGVkIGZpbGUgbmFtZSBiYXNlZCBvbiB0aGUgdHlwZSBhbmQgYnJhbmQuXG4gKlxuICogQHBhcmFtIHR5cGUgLSBUaGUgdHlwZSBvZiB0aGUgZmlsZS5cbiAqIEBwYXJhbSBicmFuZCAtIFRoZSBicmFuZCBuYW1lLlxuICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCBmaWxlIG5hbWUuXG4gKi9cbmV4cG9ydHMuZXhwb3J0ZWRGaWxlTmFtZSA9ICh0eXBlLCBicmFuZCkgPT4ge1xuICAgIGxldCBmb2xkZXIgPSBcIlwiO1xuICAgIGxldCBmaWxlID0gXCJcIjtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcImNvbG9yc1wiOlxuICAgICAgICAgICAgZmlsZSA9IFwiX2NvbG9ycy5jc3NcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibWVhc3VyZXNcIjpcbiAgICAgICAgICAgIGZpbGUgPSBcIl9tZWFzdXJlcy5jc3NcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYm9yZGVyc1wiOlxuICAgICAgICAgICAgZmlsZSA9IFwiX2JvcmRlcnMuY3NzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImdyYWRpZW50c1wiOlxuICAgICAgICAgICAgZmlsZSA9IFwiX2dyYWRpZW50cy5jc3NcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGhlYWRlciBjb21tZW50IEVSUk9SOiBmaWxlIHR5cGUgXFxcIlwiICsgdHlwZSArIFwiXFxcIiBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzd2l0Y2ggKGJyYW5kKSB7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLnZpZ286XG4gICAgICAgICAgICBmb2xkZXIgPSBcInZpZ29cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBheWxvYWRzXzEuYnJhbmROYW1lcy5jcHA6XG4gICAgICAgICAgICBmb2xkZXIgPSBcImNwcFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLmtvb3A6XG4gICAgICAgICAgICBmb2xkZXIgPSBcImtvb3BcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBheWxvYWRzXzEuYnJhbmROYW1lcy5rbno6XG4gICAgICAgICAgICBmb2xkZXIgPSBcImtuelwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLnN1czpcbiAgICAgICAgICAgIGZvbGRlciA9IFwic3VzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBoZWFkZXIgY29tbWVudCBFUlJPUjogYnJhbmQgbmFtZSBcXFwiXCIgKyBicmFuZCArIFwiXFxcIiBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gYCR7Zm9sZGVyfS8ke2ZpbGV9YDtcbn07XG4vKipcbiAqIEdlbmVyYXRlIGEgdmFyaWFibGUgbmFtZSBiYXNlZCBvbiB0aGUgcHJlZml4LCB0b2tlbiwgYW5kIHRva2VuIGdyb3VwLlxuICpcbiAqIEBwYXJhbSBwcmVmaXggLSBUaGUgcHJlZml4IGZvciB0aGUgdmFyaWFibGUgbmFtZS5cbiAqIEBwYXJhbSB0b2tlbiAtIFRoZSB0b2tlbiBvYmplY3QuXG4gKiBAcGFyYW0gdG9rZW5Hcm91cCAtIFRoZSB0b2tlbiBncm91cCBvYmplY3QuXG4gKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIHZhcmlhYmxlIG5hbWUuXG4gKi9cbmV4cG9ydHMudmFyaWFibGVOYW1lID0gKHByZWZpeCwgdG9rZW4sIHRva2VuR3JvdXApID0+IHtcbiAgICAvLyBDcmVhdGUgYXJyYXkgd2l0aCBhbGwgcGF0aCBzZWdtZW50cyBhbmQgdG9rZW4gbmFtZSBhdCB0aGUgZW5kLlxuICAgIGNvbnN0IHNlZ21lbnRzID0gWy4uLnRva2VuR3JvdXAucGF0aF07XG4gICAgaWYgKCF0b2tlbkdyb3VwLmlzUm9vdCkge1xuICAgICAgICBzZWdtZW50cy5wdXNoKHRva2VuR3JvdXAubmFtZSk7XG4gICAgfVxuICAgIHNlZ21lbnRzLnB1c2godG9rZW4ubmFtZSk7XG4gICAgaWYgKHByZWZpeCAmJiBwcmVmaXgubGVuZ3RoID4gMCkge1xuICAgICAgICBzZWdtZW50cy51bnNoaWZ0KHByZWZpeCk7XG4gICAgfVxuICAgIC8vIGNyZWF0ZSBvbmUgc3RyaW5nIHdpdGggc3BhY2UgZm9yIGNhbWVsQ2FzZVxuICAgIGNvbnN0IHNlbnRlbmNlID0gc2VnbWVudHNcbiAgICAgICAgLmpvaW4oXCIgXCIpXG4gICAgICAgIC50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOV0rKC4pL2csIChtLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKTtcbiAgICByZXR1cm4gc2VudGVuY2U7XG59O1xuLyoqXG4gKiBHZW5lcmF0ZSBhIHN0eWxleCB0b2tlbiBuYW1lIGJhc2VkIG9uIHRoZSB0b2tlbiBhbmQgdG9rZW4gZ3JvdXAuXG4gKlxuICogQHBhcmFtIHRva2VuIC0gVGhlIHRva2VuIG9iamVjdC5cbiAqIEBwYXJhbSB0b2tlbkdyb3VwIC0gVGhlIHRva2VuIGdyb3VwIG9iamVjdC5cbiAqIEByZXR1cm5zIFRoZSBnZW5lcmF0ZWQgc3R5bGV4IHRva2VuIG5hbWUuXG4gKi9cbmV4cG9ydHMuc3R5bGV4VG9rZW5OYW1lID0gKHRva2VuLCB0b2tlbkdyb3VwKSA9PiB7XG4gICAgLy8gQ3JlYXRlIGFycmF5IHdpdGggYWxsIHBhdGggc2VnbWVudHMgYW5kIHRva2VuIG5hbWUgYXQgdGhlIGVuZC5cbiAgICBjb25zdCBzZWdtZW50cyA9IFsuLi50b2tlbkdyb3VwLnBhdGhdO1xuICAgIGlmICghdG9rZW5Hcm91cC5pc1Jvb3QpIHtcbiAgICAgICAgc2VnbWVudHMucHVzaCh0b2tlbkdyb3VwLm5hbWUpO1xuICAgIH1cbiAgICBzZWdtZW50cy5wdXNoKHRva2VuLm5hbWUpO1xuICAgIC8vIGNyZXRlIG9uZSBzdHJpbmcgd2l0aCBzcGFjZSBmb3IgY2FtZWxDYXNlXG4gICAgY29uc3Qgc2VudGVuY2UgPSBzZWdtZW50c1xuICAgICAgICAuam9pbihcIiBcIilcbiAgICAgICAgLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aMC05XSsoLikvZywgKG0sIGNocikgPT4gY2hyLnRvVXBwZXJDYXNlKCkpO1xuICAgIHJldHVybiBzZW50ZW5jZTtcbn07XG4vKipcbiAqIEdlbmVyYXRlIGEgdG9rZW4gbmFtZSBiYXNlZCBvbiB0aGUgb3JpZ2luIG5hbWUgb2YgdGhlIHRva2VuLlxuICpcbiAqIEBwYXJhbSB0b2tlbiAtIFRoZSB0b2tlbiBvYmplY3QuXG4gKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIHRva2VuIG5hbWUuXG4gKi9cbmV4cG9ydHMudG9rZW5OYW1lQnlPcmlnaW5OYW1lID0gKHRva2VuKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IG5hbWUgPSAoX2EgPSB0b2tlbi5vcmlnaW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lO1xuICAgIGNvbnN0IHRyYW5zZnJvbWVkID0gbmFtZSA9PT0gbnVsbCB8fCBuYW1lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lLnNwbGl0KFwiL1wiKTtcbiAgICB0cmFuc2Zyb21lZCA9PT0gbnVsbCB8fCB0cmFuc2Zyb21lZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdHJhbnNmcm9tZWQuc2hpZnQoKTtcbiAgICBjb25zdCBqb2luZWQgPSB0cmFuc2Zyb21lZCA9PT0gbnVsbCB8fCB0cmFuc2Zyb21lZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdHJhbnNmcm9tZWQuam9pbihcIiBcIikudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWjAtOV0rKC4pL2csIChtLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKTtcbiAgICByZXR1cm4gam9pbmVkIHx8IFwiXCI7XG59O1xubGV0IHByaW50Q29tbWVudCA9IGZhbHNlO1xubGV0IGdyb3VwTmFtZSA9IFwiXCI7XG4vKipcbiAqIEdlbmVyYXRlIGEgZ3JvdXAgbmFtZSBjb21tZW50IGJhc2VkIG9uIHRoZSB0b2tlbiBncm91cC5cbiAqXG4gKiBAcGFyYW0gdG9rZW5Hcm91cCAtIFRoZSB0b2tlbiBncm91cCBvYmplY3QuXG4gKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIGdyb3VwIG5hbWUgY29tbWVudC5cbiAqL1xuZXhwb3J0cy5ncm91cE5hbWVDb21tZW50ID0gKHRva2VuR3JvdXApID0+IHtcbiAgICBpZiAoISh0b2tlbkdyb3VwID09PSBudWxsIHx8IHRva2VuR3JvdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRva2VuR3JvdXAucGFyZW50KSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgY29uc3QgeyBwYXJlbnQ6IHsgbmFtZSB9IH0gPSB0b2tlbkdyb3VwO1xuICAgIGlmIChuYW1lICE9PSBncm91cE5hbWUpIHtcbiAgICAgICAgZ3JvdXBOYW1lID0gbmFtZTtcbiAgICAgICAgcHJpbnRDb21tZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByaW50Q29tbWVudCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcHJpbnRDb21tZW50XG4gICAgICAgID8gYFxyXG4gICAgXHJcbiAgLyogLS0tICR7Z3JvdXBOYW1lfSAtLS0gKi9cclxuICBgIDogXCJcIjtcbn07XG4vKipcbiAqIEZpbHRlciB0b2tlbnMgYmFzZWQgb24gdGhlIG5hbWUuXG4gKlxuICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSB0byBmaWx0ZXIgYnkuXG4gKiBAcGFyYW0gdG9rZW5zIC0gVGhlIGFycmF5IG9mIHRva2Vucy5cbiAqIEByZXR1cm5zIFRoZSBmaWx0ZXJlZCBhcnJheSBvZiB0b2tlbnMuXG4gKi9cbmV4cG9ydHMuZmlsdGVyVG9rZW5zID0gKG5hbWUsIHRva2VucykgPT4ge1xuICAgIHJldHVybiB0b2tlbnMuZmlsdGVyKCh0b2tlbikgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICgoX2EgPSB0b2tlbi5vcmlnaW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW4ub3JpZ2luLm5hbWUuaW5jbHVkZXMobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiQ2h5YmFcIjtcbiAgICB9KTtcbn07XG4vKipcbiAqIFByaW50IHRoZSBvdXRwdXQgZGF0YS5cbiAqXG4gKiBAcGFyYW0gZGF0YSAtIFRoZSBkYXRhIHRvIHByaW50LlxuICovXG5leHBvcnRzLnByaW50T3V0cHV0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdHJpbmdpZnlPdXRwdXQoZGF0YSkpO1xufTtcbi8qKlxuICogR2VuZXJhdGUgYSBncm91cCBuYW1lIGZvciBzdHlsZXggYmFzZWQgb24gdGhlIHByb3ZpZGVkIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIG5hbWVzIC0gVGhlIHN0cmluZ3MgdG8gZ2VuZXJhdGUgdGhlIGdyb3VwIG5hbWUgZnJvbS5cbiAqIEByZXR1cm5zIFRoZSBnZW5lcmF0ZWQgZ3JvdXAgbmFtZS5cbiAqL1xuZXhwb3J0cy5zdHlsZXhHcm91cE5hbWUgPSAoLi4ubmFtZXMpID0+IHtcbiAgICByZXR1cm4gbmFtZXNcbiAgICAgICAgLmpvaW4oXCIgXCIpXG4gICAgICAgIC50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOV0rKC4pL2csIChtLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKTtcbn07XG4vKipcbiAqIFN0cmluIHRvIGxvd2VyIGNhc2VcbiAqIEBwYXJhbSBzdHIgLSBzdHJpbmcgdG8gbG93ZXIgY2FzZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0cy50b0xvd2VyQ2FzZSA9IChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG59O1xuZXhwb3J0cy5qb2luQXJyYXlCeVNsYXNoID0gKHN0ckFycikgPT4ge1xuICAgIHJldHVybiBzdHJBcnIuam9pbihcIiAvIFwiKTtcbn07XG5leHBvcnRzLmdyYWRpZW50QW5nbGUgPSAoZnJvbSwgdG8pID0+IHtcbiAgICBjb25zdCBkZWx0YVggPSB0by54IC0gZnJvbS54O1xuICAgIGNvbnN0IGRlbHRhWSA9IHRvLnkgLSBmcm9tLnk7XG4gICAgY29uc3QgcmFkaWFucyA9IE1hdGguYXRhbjIoZGVsdGFZLCBkZWx0YVgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IChyYWRpYW5zICogMTgwKSAvIE1hdGguUEk7XG4gICAgY29uc3QgZml4ZWRSZXN1bHQgPSByZXN1bHQgKyA5MDtcbiAgICByZXR1cm4gKGZpeGVkUmVzdWx0IDwgMCA/IGZpeGVkUmVzdWx0ICsgMzYwIDogZml4ZWRSZXN1bHQpICUgMzYwO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdHJpbmdIU0xBID0gZXhwb3J0cy5zdHJpbmdIU0wgPSBleHBvcnRzLmNhbGN1bGF0ZVNhdHVyYXRpb24gPSBleHBvcnRzLmNhbGN1bGF0ZUxpZ2h0bmVzcyA9IGV4cG9ydHMuY2FsY3VsYXRlSHVlID0gdm9pZCAwO1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBodWUgdmFsdWUgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0gZGVsdGEgLSBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBtYXhpbXVtIGFuZCBtaW5pbXVtIGNvbG9yIHZhbHVlcy5cbiAqIEBwYXJhbSBjbWF4IC0gVGhlIG1heGltdW0gY29sb3IgdmFsdWUuXG4gKiBAcGFyYW0gciAtIFRoZSByZWQgY29sb3IgdmFsdWUuXG4gKiBAcGFyYW0gZyAtIFRoZSBncmVlbiBjb2xvciB2YWx1ZS5cbiAqIEBwYXJhbSBiIC0gVGhlIGJsdWUgY29sb3IgdmFsdWUuXG4gKiBAcmV0dXJucyBUaGUgY2FsY3VsYXRlZCBodWUgdmFsdWUuXG4gKi9cbmV4cG9ydHMuY2FsY3VsYXRlSHVlID0gKGRlbHRhLCBjbWF4LCByLCBnLCBiKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgaWYgKGRlbHRhID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoY21heCA9IHIpIHtcbiAgICAgICAgcmVzdWx0ID0gKGcgLSBiKSAvIGRlbHRhICUgNjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY21heCA9PT0gZykge1xuICAgICAgICByZXN1bHQgPSAoYiAtIHIpIC8gZGVsdGEgKyAyO1xuICAgIH1cbiAgICBlbHNlIGlmIChjbWF4ID09PSBiKSB7XG4gICAgICAgIHJlc3VsdCA9IChyIC0gZykgLyBkZWx0YSArIDQ7XG4gICAgfVxuICAgIGNvbnN0IHJvdW5kZWQgPSBNYXRoLnJvdW5kKHJlc3VsdCAqIDYwKTtcbiAgICBpZiAocm91bmRlZCA8IDApIHtcbiAgICAgICAgcmV0dXJuIHJvdW5kZWQgKyAzNjA7XG4gICAgfVxuICAgIHJldHVybiByb3VuZGVkO1xufTtcbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGlnaHRuZXNzIHZhbHVlIGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIGNtYXggLSBUaGUgbWF4aW11bSBjb2xvciB2YWx1ZS5cbiAqIEBwYXJhbSBjbWluIC0gVGhlIG1pbmltdW0gY29sb3IgdmFsdWUuXG4gKiBAcmV0dXJucyBUaGUgY2FsY3VsYXRlZCBsaWdodG5lc3MgdmFsdWUuXG4gKi9cbmV4cG9ydHMuY2FsY3VsYXRlTGlnaHRuZXNzID0gKGNtYXgsIGNtaW4pID0+IHtcbiAgICByZXR1cm4gKGNtYXggKyBjbWluKSAvIDI7XG59O1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzYXR1cmF0aW9uIHZhbHVlIGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIGRlbHRhIC0gVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbWF4aW11bSBhbmQgbWluaW11bSBjb2xvciB2YWx1ZXMuXG4gKiBAcGFyYW0gbGlnaHRuZXNzIC0gVGhlIGxpZ2h0bmVzcyB2YWx1ZS5cbiAqIEByZXR1cm5zIFRoZSBjYWxjdWxhdGVkIHNhdHVyYXRpb24gdmFsdWUuXG4gKi9cbmV4cG9ydHMuY2FsY3VsYXRlU2F0dXJhdGlvbiA9IChkZWx0YSwgbGlnaHRuZXNzKSA9PiB7XG4gICAgcmV0dXJuIGRlbHRhID09PSAwID8gMCA6IGRlbHRhIC8gKDEgLSBNYXRoLmFicygyICogbGlnaHRuZXNzIC0gMSkpO1xufTtcbi8qKlxuICogQ29udmVydHMgdGhlIEhTTCB2YWx1ZXMgdG8gYSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXG4gKiBAcGFyYW0gaHVlIC0gVGhlIGh1ZSB2YWx1ZS5cbiAqIEBwYXJhbSBzYXR1cmF0aW9uIC0gVGhlIHNhdHVyYXRpb24gdmFsdWUuXG4gKiBAcGFyYW0gbGlnaHRuZXNzIC0gVGhlIGxpZ2h0bmVzcyB2YWx1ZS5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIEhTTCB2YWx1ZXMuXG4gKi9cbmV4cG9ydHMuc3RyaW5nSFNMID0gKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSA9PiB7XG4gICAgcmV0dXJuIGBoc2woJHtodWV9LCAke01hdGgucm91bmQoc2F0dXJhdGlvbil9JSwgJHtNYXRoLnJvdW5kKGxpZ2h0bmVzcyl9JSlgO1xufTtcbi8qKlxuICogQ29udmVydHMgdGhlIEhTTEEgdmFsdWVzIHRvIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxuICogQHBhcmFtIGh1ZSAtIFRoZSBodWUgdmFsdWUuXG4gKiBAcGFyYW0gc2F0dXJhdGlvbiAtIFRoZSBzYXR1cmF0aW9uIHZhbHVlLlxuICogQHBhcmFtIGxpZ2h0bmVzcyAtIFRoZSBsaWdodG5lc3MgdmFsdWUuXG4gKiBAcGFyYW0gYWxwaGEgLSBUaGUgYWxwaGEgdmFsdWUuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBIU0xBIHZhbHVlcy5cbiAqL1xuZXhwb3J0cy5zdHJpbmdIU0xBID0gKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBhbHBoYSkgPT4ge1xuICAgIHJldHVybiBgaHNsKCR7aHVlfSwgJHtNYXRoLnJvdW5kKHNhdHVyYXRpb24pfSwgJHtNYXRoLnJvdW5kKGxpZ2h0bmVzcyl9JSwgJHtNYXRoLnJvdW5kKChhbHBoYSAqIDEwKSAvIDEwKX0lKWA7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIG9iamVjdCB0byBhbiBIU0wgb3IgSFNMQSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXG4gKlxuICogQHBhcmFtIHtDb2xvclRva2VuVmFsdWV9IGNvbG9yIC0gVGhlIGNvbG9yIG9iamVjdCB0byBjb252ZXJ0LlxuICogQHJldHVybnMgVGhlIEhTTCBvciBIU0xBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29sb3IuXG4gKi9cbmNvbnN0IGhzbENvbnZlcnRvciA9IChjb2xvcikgPT4ge1xuICAgIGNvbnN0IHsgcjogX3IsIGc6IF9nLCBiOiBfYiwgYTogX2EgfSA9IGNvbG9yO1xuICAgIGNvbnN0IHIgPSBfciAvIDI1NTtcbiAgICBjb25zdCBnID0gX2cgLyAyNTU7XG4gICAgY29uc3QgYiA9IF9iIC8gMjU1O1xuICAgIGNvbnN0IGEgPSBfYSAvIDI1NTtcbiAgICBjb25zdCBjbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgY29uc3QgY21heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgIGNvbnN0IGRlbHRhID0gY21heCAtIGNtaW47XG4gICAgY29uc3QgaHVlID0gaGVscGVyc18xLmNhbGN1bGF0ZUh1ZShkZWx0YSwgY21heCwgciwgZywgYik7XG4gICAgY29uc3QgX2xpZ2h0bmVzcyA9IGhlbHBlcnNfMS5jYWxjdWxhdGVMaWdodG5lc3MoY21heCwgY21pbik7XG4gICAgY29uc3QgX3NhdHVyYXRpb24gPSBoZWxwZXJzXzEuY2FsY3VsYXRlU2F0dXJhdGlvbihkZWx0YSwgX2xpZ2h0bmVzcyk7XG4gICAgY29uc3QgbGlnaHRuZXNzID0gKyhfbGlnaHRuZXNzICogMTAwKS50b0ZpeGVkKDEpO1xuICAgIGNvbnN0IHNhdHVyYXRpb24gPSArKF9zYXR1cmF0aW9uICogMTAwKS50b0ZpeGVkKDEpO1xuICAgIHJldHVybiBhID09PSAxID8gaGVscGVyc18xLnN0cmluZ0hTTChodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgOiBoZWxwZXJzXzEuc3RyaW5nSFNMQShodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gaHNsQ29udmVydG9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaHNsQ29udmVydG9yXzEgPSByZXF1aXJlKFwiLi9oc2xDb252ZXJ0b3JcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBoc2xDb252ZXJ0b3JfMS5kZWZhdWx0OyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xuY29uc3QgaHNsX2NvbnZlcnRvcl8xID0gcmVxdWlyZShcIi4vaHNsLWNvbnZlcnRvclwiKTtcbmNvbnN0IHBheWxvYWRzXzEgPSByZXF1aXJlKFwiLi9wYXlsb2Fkc1wiKTtcbi8vIEZ1bmN0aW9ucyByZWdpc3RyYXRpb25cblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiY3VycmVudERhdGVcIiwgaGVscGVyc18xLmN1cnJlbnREYXRlKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiZ2V0QnJhbmRJZFwiLCBoZWxwZXJzXzEuZ2V0QnJhbmRJZCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImV4cG9ydGVkRmlsZU5hbWVcIiwgaGVscGVyc18xLmV4cG9ydGVkRmlsZU5hbWUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJ2YXJpYWJsZU5hbWVcIiwgaGVscGVyc18xLnZhcmlhYmxlTmFtZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImhzbENvbnZlcnRvclwiLCBoc2xfY29udmVydG9yXzEuZGVmYXVsdCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImdyb3VwTmFtZUNvbW1lbnRcIiwgaGVscGVyc18xLmdyb3VwTmFtZUNvbW1lbnQpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJzdHlsZXhUb2tlbk5hbWVcIiwgaGVscGVyc18xLnN0eWxleFRva2VuTmFtZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImZpbHRlclRva2Vuc1wiLCBoZWxwZXJzXzEuZmlsdGVyVG9rZW5zKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwicHJpbnRPdXRwdXRcIiwgaGVscGVyc18xLnByaW50T3V0cHV0KTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwidG9rZW5OYW1lQnlPcmlnaW5OYW1lXCIsIGhlbHBlcnNfMS50b2tlbk5hbWVCeU9yaWdpbk5hbWUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJzdHlsZXhHcm91cE5hbWVcIiwgaGVscGVyc18xLnN0eWxleEdyb3VwTmFtZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInRvTG93ZXJDYXNlXCIsIGhlbHBlcnNfMS50b0xvd2VyQ2FzZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImpvaW5BcnJheUJ5U2xhc2hcIiwgaGVscGVyc18xLmpvaW5BcnJheUJ5U2xhc2gpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJncmFkaWVudEFuZ2xlXCIsIGhlbHBlcnNfMS5ncmFkaWVudEFuZ2xlKTtcbi8vIFBheWxvYWRzXG5QdWxzYXIucmVnaXN0ZXJQYXlsb2FkKFwiY3VycmVudEV4cG9ydGVyVmVyc2lvblwiLCBwYXlsb2Fkc18xLmN1cnJlbnRFeHBvcnRlclZlcnNpb24pO1xuUHVsc2FyLnJlZ2lzdGVyUGF5bG9hZChcImJyYW5kTmFtZXNcIiwgcGF5bG9hZHNfMS5icmFuZE5hbWVzKTtcblB1bHNhci5yZWdpc3RlclBheWxvYWQoXCJiZWhhdmlvclwiLCBwYXlsb2Fkc18xLmJlaGF2aW9yKTtcblB1bHNhci5yZWdpc3RlclBheWxvYWQoXCJzdHlsZXhDYXRlZ29yaWVzXCIsIHBheWxvYWRzXzEuc3R5bGV4Q2F0ZWdvcmllcyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3R5bGV4Q2F0ZWdvcmllcyA9IGV4cG9ydHMuYmVoYXZpb3IgPSBleHBvcnRzLmJyYW5kTmFtZXMgPSBleHBvcnRzLmN1cnJlbnRFeHBvcnRlclZlcnNpb24gPSB2b2lkIDA7XG5jb25zdCBleHBvcnRlcl9qc29uXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwb3J0ZXIuanNvblwiKTtcbmV4cG9ydHMuY3VycmVudEV4cG9ydGVyVmVyc2lvbiA9IGV4cG9ydGVyX2pzb25fMS52ZXJzaW9uO1xuZXhwb3J0cy5icmFuZE5hbWVzID0ge1xuICAgIHZpZ286IFwiMDEgLSBWSUdvXCIsXG4gICAgY3BwOiBcIjAyIC0gQ1BQXCIsXG4gICAga29vcDogXCIwMyAtIEtvb3BcIixcbiAgICBrbno6IFwiMDQgLSBLTlpcIixcbiAgICBzdXM6IFwiMDUgLSBTVVNcIixcbn07XG5leHBvcnRzLmJlaGF2aW9yID0ge1xuICAgIGNvbG9yVG9rZW5QcmVmaXg6IFwiY29sb3JcIixcbiAgICBib3JkZXJUb2tlblByZWZpeDogXCJib3JkZXJcIixcbiAgICBncmFkaWVudFRva2VuUHJlZml4OiBcImdyYWRpZW50XCIsXG4gICAgbWVhc3VyZVRva2VuUHJlZml4OiBcIm1lYXN1cmVcIixcbiAgICBzaGFkb3dUb2tlblByZWZpeDogXCJzaGFkb3dcIixcbiAgICB0eXBvZ3JhcGh5VG9rZW5QcmVmaXg6IFwidHlwb2dyYXBoeVwiLFxufTtcbmV4cG9ydHMuc3R5bGV4Q2F0ZWdvcmllcyA9IFtcbiAgICBcImNvcmVcIixcbiAgICBcInNlbWFudGljXCIsXG4gICAgXCJjb21wb25lbnRcIlxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=