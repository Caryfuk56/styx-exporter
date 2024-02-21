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

module.exports = JSON.parse("{\"id\":\"ais.exporter stylex\",\"name\":\"STYLEX & CSS ALL THEMES\",\"description\":\"CSS ans Stylex all theme exporter\",\"author\":\"\",\"organization\":\"Ais servis\",\"homepage\":\"\",\"source_dir\":\"src\",\"version\":\"1.0.1\",\"usesBrands\":true,\"config\":{\"sources\":\"sources.json\",\"output\":\"output.json\",\"js\":\"src/js/helpers.js\"},\"engines\":{\"pulsar\":\"1.0.0\",\"supernova\":\"1.0.0\"},\"tags\":[\"CSS\",\"Tokens\",\"Stylex\"]}");

/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.shadowTokenValue = exports.gradientAngle = exports.joinArrayBySlash = exports.toLowerCase = exports.stylexGroupName = exports.printOutput = exports.filterTokens = exports.groupNameComment = exports.tokenNameWithCategory = exports.tokenNameByOriginName = exports.stylexTokenName = exports.variableName = exports.exportedFileName = exports.getBrandId = exports.currentDate = void 0;
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
    const name = (_a = token.origin) === null || _a === void 0 ? void 0 : _a.name;
    const transfromed = name === null || name === void 0 ? void 0 : name.split("/");
    if (!keepCategory) {
        transfromed === null || transfromed === void 0 ? void 0 : transfromed.shift();
    }
    const joined = transfromed === null || transfromed === void 0 ? void 0 : transfromed.join(" ").toLocaleLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHNsLWNvbnZlcnRvci9oc2xDb252ZXJ0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYXlsb2Fkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHFDQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVcsR0FBRyxXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTyxHQUFHLEtBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVUsT0FBTyxFQUFFO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE1BQU07QUFDeEI7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOEJBQThCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRLEdBQUcsUUFBUSxHQUFHLFdBQVcsR0FBRyxhQUFhLElBQUksVUFBVTtBQUM3RTs7Ozs7Ozs7Ozs7OztBQ3RQYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSxJQUFJLHVCQUF1QixLQUFLLHNCQUFzQjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJLElBQUksdUJBQXVCLElBQUksc0JBQXNCLEtBQUssTUFBTTtBQUMzRixtQkFBbUIsSUFBSSxJQUFJLHVCQUF1QixLQUFLLHNCQUFzQixLQUFLLDRCQUE0QjtBQUM5Rzs7Ozs7Ozs7Ozs7OztBQ3ZFYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLGlEQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNkJBQTZCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELHFCQUFxQixtQkFBTyxDQUFDLDJEQUFnQjtBQUM3QywyQ0FBMkMscUNBQXFDLCtCQUErQixFQUFFLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUNIdEc7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxrQkFBa0IsbUJBQU8sQ0FBQyxtQ0FBVztBQUNyQyx3QkFBd0IsbUJBQU8sQ0FBQyxxREFBaUI7QUFDakQsbUJBQW1CLG1CQUFPLENBQUMscUNBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDZDQUFxQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNoYWRvd1Rva2VuVmFsdWUgPSBleHBvcnRzLmdyYWRpZW50QW5nbGUgPSBleHBvcnRzLmpvaW5BcnJheUJ5U2xhc2ggPSBleHBvcnRzLnRvTG93ZXJDYXNlID0gZXhwb3J0cy5zdHlsZXhHcm91cE5hbWUgPSBleHBvcnRzLnByaW50T3V0cHV0ID0gZXhwb3J0cy5maWx0ZXJUb2tlbnMgPSBleHBvcnRzLmdyb3VwTmFtZUNvbW1lbnQgPSBleHBvcnRzLnRva2VuTmFtZVdpdGhDYXRlZ29yeSA9IGV4cG9ydHMudG9rZW5OYW1lQnlPcmlnaW5OYW1lID0gZXhwb3J0cy5zdHlsZXhUb2tlbk5hbWUgPSBleHBvcnRzLnZhcmlhYmxlTmFtZSA9IGV4cG9ydHMuZXhwb3J0ZWRGaWxlTmFtZSA9IGV4cG9ydHMuZ2V0QnJhbmRJZCA9IGV4cG9ydHMuY3VycmVudERhdGUgPSB2b2lkIDA7XG5jb25zdCBwYXlsb2Fkc18xID0gcmVxdWlyZShcIi4vcGF5bG9hZHNcIik7XG4vKipcbiAqIFN0cmluZ2lmaWVzIGFuIG9iamVjdCwgcmVtb3ZpbmcgY2lyY3VsYXIgcmVmZXJlbmNlcy5cbiAqXG4gKiBAcGFyYW0gb2JqIC0gVGhlIG9iamVjdCB0byBzdHJpbmdpZnkuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5naWZpZWQgb2JqZWN0LlxuICovXG5jb25zdCBzdHJpbmdpZnlPdXRwdXQgPSAob2JqKSA9PiB7XG4gICAgbGV0IGNhY2hlID0gW107XG4gICAgY29uc3Qgc3RyID0gSlNPTi5zdHJpbmdpZnkob2JqLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoY2FjaGUgJiYgY2FjaGUuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWNoZSA9PT0gbnVsbCB8fCBjYWNoZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FjaGUucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0pO1xuICAgIGNhY2hlID0gbnVsbDtcbiAgICByZXR1cm4gc3RyO1xufTtcbi8qKlxuICogUmV0dXJuIGN1cnJlbnQgdGltZSBpbiBsb2NhbCBzdHJpbmdcbiAqIEByZXR1cm5zIFRoZSBjdXJyZW50IHRpbWUgaW4gbG9jYWwgc3RyaW5nIGZvcm1hdC5cbiAqL1xuZXhwb3J0cy5jdXJyZW50RGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICBjb25zdCB0aW1lU3RyaW5nID0gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICByZXR1cm4gYCR7ZGF0ZVN0cmluZ30gJHt0aW1lU3RyaW5nfWA7XG59O1xuLyoqXG4gKiBSZXR1cm4gaWQgb2YgdGhlIHRoZW1lIGFjY29yZGluZyB0aGVtZSBuYW1lLlxuICpcbiAqIEBwYXJhbSB0aGVtZU5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgdGhlbWUuXG4gKiBAcGFyYW0gYnJhbmRzIC0gVGhlIGFycmF5IG9mIGJyYW5kIG9iamVjdHMuXG4gKiBAcmV0dXJucyBUaGUgaWQgb2YgdGhlIHRoZW1lLlxuICovXG5leHBvcnRzLmdldEJyYW5kSWQgPSAodGhlbWVOYW1lLCBicmFuZHMpID0+IHtcbiAgICBjb25zdCBicmFuZE9iamVjdCA9IGJyYW5kcy5maWx0ZXIoKGJyYW5kKSA9PiBicmFuZC5uYW1lID09PSB0aGVtZU5hbWUpO1xuICAgIGlmIChicmFuZE9iamVjdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogYnJhbmQgd2l0aCBuYW1lIFxcXCJcIiArIFwibmFtZVwiICsgXCJcXFwiIGRvZXNuJ3QgZXhpc3QuXCIpO1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIGJyYW5kT2JqZWN0WzBdLmlkO1xufTtcbi8qKlxuICogR2VuZXJhdGUgdGhlIGV4cG9ydGVkIGZpbGUgbmFtZSBiYXNlZCBvbiB0aGUgdHlwZSBhbmQgYnJhbmQuXG4gKlxuICogQHBhcmFtIHR5cGUgLSBUaGUgdHlwZSBvZiB0aGUgZmlsZS5cbiAqIEBwYXJhbSBicmFuZCAtIFRoZSBicmFuZCBuYW1lLlxuICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCBmaWxlIG5hbWUuXG4gKi9cbmV4cG9ydHMuZXhwb3J0ZWRGaWxlTmFtZSA9ICh0eXBlLCBicmFuZCkgPT4ge1xuICAgIGxldCBmb2xkZXIgPSBcIlwiO1xuICAgIHN3aXRjaCAoYnJhbmQpIHtcbiAgICAgICAgY2FzZSBwYXlsb2Fkc18xLmJyYW5kTmFtZXMudmlnbzpcbiAgICAgICAgICAgIGZvbGRlciA9IFwidmlnb1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLmNwcDpcbiAgICAgICAgICAgIGZvbGRlciA9IFwiY3BwXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBwYXlsb2Fkc18xLmJyYW5kTmFtZXMua29vcDpcbiAgICAgICAgICAgIGZvbGRlciA9IFwia29vcFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLmtuejpcbiAgICAgICAgICAgIGZvbGRlciA9IFwia256XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBwYXlsb2Fkc18xLmJyYW5kTmFtZXMuc3VzOlxuICAgICAgICAgICAgZm9sZGVyID0gXCJzdXNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGhlYWRlciBjb21tZW50IEVSUk9SOiBicmFuZCBuYW1lIFxcXCJcIiArIGJyYW5kICsgXCJcXFwiIGRvZXNuJ3QgZXhpc3QuXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBgJHtmb2xkZXJ9LyR7dHlwZX0uY3NzYDtcbn07XG4vKipcbiAqIEdlbmVyYXRlIGEgdmFyaWFibGUgbmFtZSBiYXNlZCBvbiB0aGUgcHJlZml4LCB0b2tlbiwgYW5kIHRva2VuIGdyb3VwLlxuICpcbiAqIEBwYXJhbSBwcmVmaXggLSBUaGUgcHJlZml4IGZvciB0aGUgdmFyaWFibGUgbmFtZS5cbiAqIEBwYXJhbSB0b2tlbiAtIFRoZSB0b2tlbiBvYmplY3QuXG4gKiBAcGFyYW0gdG9rZW5Hcm91cCAtIFRoZSB0b2tlbiBncm91cCBvYmplY3QuXG4gKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIHZhcmlhYmxlIG5hbWUuXG4gKi9cbmV4cG9ydHMudmFyaWFibGVOYW1lID0gKHByZWZpeCwgdG9rZW4sIHRva2VuR3JvdXApID0+IHtcbiAgICAvLyBDcmVhdGUgYXJyYXkgd2l0aCBhbGwgcGF0aCBzZWdtZW50cyBhbmQgdG9rZW4gbmFtZSBhdCB0aGUgZW5kLlxuICAgIGNvbnN0IHNlZ21lbnRzID0gWy4uLnRva2VuR3JvdXAucGF0aF07XG4gICAgaWYgKCF0b2tlbkdyb3VwLmlzUm9vdCkge1xuICAgICAgICBzZWdtZW50cy5wdXNoKHRva2VuR3JvdXAubmFtZSk7XG4gICAgfVxuICAgIHNlZ21lbnRzLnB1c2godG9rZW4ubmFtZSk7XG4gICAgaWYgKHByZWZpeCAmJiBwcmVmaXgubGVuZ3RoID4gMCkge1xuICAgICAgICBzZWdtZW50cy51bnNoaWZ0KHByZWZpeCk7XG4gICAgfVxuICAgIC8vIGNyZWF0ZSBvbmUgc3RyaW5nIHdpdGggc3BhY2UgZm9yIGNhbWVsQ2FzZVxuICAgIGNvbnN0IHNlbnRlbmNlID0gc2VnbWVudHNcbiAgICAgICAgLmpvaW4oXCIgXCIpXG4gICAgICAgIC50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOV0rKC4pL2csIChtLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKTtcbiAgICByZXR1cm4gc2VudGVuY2U7XG59O1xuLyoqXG4gKiBHZW5lcmF0ZSBhIHN0eWxleCB0b2tlbiBuYW1lIGJhc2VkIG9uIHRoZSB0b2tlbiBhbmQgdG9rZW4gZ3JvdXAuXG4gKlxuICogQHBhcmFtIHRva2VuIC0gVGhlIHRva2VuIG9iamVjdC5cbiAqIEBwYXJhbSB0b2tlbkdyb3VwIC0gVGhlIHRva2VuIGdyb3VwIG9iamVjdC5cbiAqIEByZXR1cm5zIFRoZSBnZW5lcmF0ZWQgc3R5bGV4IHRva2VuIG5hbWUuXG4gKi9cbmV4cG9ydHMuc3R5bGV4VG9rZW5OYW1lID0gKHRva2VuLCB0b2tlbkdyb3VwKSA9PiB7XG4gICAgLy8gQ3JlYXRlIGFycmF5IHdpdGggYWxsIHBhdGggc2VnbWVudHMgYW5kIHRva2VuIG5hbWUgYXQgdGhlIGVuZC5cbiAgICBjb25zdCBzZWdtZW50cyA9IFsuLi50b2tlbkdyb3VwLnBhdGhdO1xuICAgIGlmICghdG9rZW5Hcm91cC5pc1Jvb3QpIHtcbiAgICAgICAgc2VnbWVudHMucHVzaCh0b2tlbkdyb3VwLm5hbWUpO1xuICAgIH1cbiAgICBzZWdtZW50cy5wdXNoKHRva2VuLm5hbWUpO1xuICAgIC8vIGNyZXRlIG9uZSBzdHJpbmcgd2l0aCBzcGFjZSBmb3IgY2FtZWxDYXNlXG4gICAgY29uc3Qgc2VudGVuY2UgPSBzZWdtZW50c1xuICAgICAgICAuam9pbihcIiBcIilcbiAgICAgICAgLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aMC05XSsoLikvZywgKG0sIGNocikgPT4gY2hyLnRvVXBwZXJDYXNlKCkpO1xuICAgIHJldHVybiBzZW50ZW5jZTtcbn07XG4vKipcbiAqIEdlbmVyYXRlIGEgdG9rZW4gbmFtZSBiYXNlZCBvbiB0aGUgb3JpZ2luIG5hbWUgb2YgdGhlIHRva2VuLlxuICpcbiAqIEBwYXJhbSB0b2tlbiAtIFRoZSB0b2tlbiBvYmplY3QuXG4gKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIHRva2VuIG5hbWUuXG4gKi9cbmV4cG9ydHMudG9rZW5OYW1lQnlPcmlnaW5OYW1lID0gKHRva2VuLCBrZWVwQ2F0ZWdvcnkpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgbmFtZSA9IChfYSA9IHRva2VuLm9yaWdpbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5hbWU7XG4gICAgY29uc3QgdHJhbnNmcm9tZWQgPSBuYW1lID09PSBudWxsIHx8IG5hbWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hbWUuc3BsaXQoXCIvXCIpO1xuICAgIGlmICgha2VlcENhdGVnb3J5KSB7XG4gICAgICAgIHRyYW5zZnJvbWVkID09PSBudWxsIHx8IHRyYW5zZnJvbWVkID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0cmFuc2Zyb21lZC5zaGlmdCgpO1xuICAgIH1cbiAgICBjb25zdCBqb2luZWQgPSB0cmFuc2Zyb21lZCA9PT0gbnVsbCB8fCB0cmFuc2Zyb21lZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdHJhbnNmcm9tZWQuam9pbihcIiBcIikudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWjAtOV0rKC4pL2csIChtLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKTtcbiAgICByZXR1cm4gam9pbmVkIHx8IFwiXCI7XG59O1xuZXhwb3J0cy50b2tlbk5hbWVXaXRoQ2F0ZWdvcnkgPSAodG9rZW4sIHByZWZpeCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBuYW1lID0gKF9hID0gdG9rZW4ub3JpZ2luKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaWQ7XG4gICAgY29uc3QgbmFtZUFyciA9IG5hbWUgPT09IG51bGwgfHwgbmFtZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmFtZS5zcGxpdChcIi9cIik7XG4gICAgaWYgKHByZWZpeCkge1xuICAgICAgICBuYW1lQXJyID09PSBudWxsIHx8IG5hbWVBcnIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hbWVBcnIudW5zaGlmdChwcmVmaXgpO1xuICAgIH1cbiAgICBjb25zdCBqb2luZWQgPSBuYW1lQXJyID09PSBudWxsIHx8IG5hbWVBcnIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hbWVBcnIuam9pbihcIiBcIikudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWjAtOV0rKC4pL2csIChtLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKTtcbiAgICByZXR1cm4gam9pbmVkIHx8IFwiXCI7XG59O1xubGV0IHByaW50Q29tbWVudCA9IGZhbHNlO1xubGV0IGdyb3VwTmFtZSA9IFwiXCI7XG4vKipcbiAqIEdlbmVyYXRlIGEgZ3JvdXAgbmFtZSBjb21tZW50IGJhc2VkIG9uIHRoZSB0b2tlbiBncm91cC5cbiAqXG4gKiBAcGFyYW0gdG9rZW5Hcm91cCAtIFRoZSB0b2tlbiBncm91cCBvYmplY3QuXG4gKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIGdyb3VwIG5hbWUgY29tbWVudC5cbiAqL1xuZXhwb3J0cy5ncm91cE5hbWVDb21tZW50ID0gKHRva2VuR3JvdXApID0+IHtcbiAgICBpZiAoISh0b2tlbkdyb3VwID09PSBudWxsIHx8IHRva2VuR3JvdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRva2VuR3JvdXAucGFyZW50KSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgY29uc3QgeyBwYXJlbnQ6IHsgbmFtZSB9IH0gPSB0b2tlbkdyb3VwO1xuICAgIGlmIChuYW1lICE9PSBncm91cE5hbWUpIHtcbiAgICAgICAgZ3JvdXBOYW1lID0gbmFtZTtcbiAgICAgICAgcHJpbnRDb21tZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByaW50Q29tbWVudCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcHJpbnRDb21tZW50XG4gICAgICAgID8gYC8qIC0tLSAke2dyb3VwTmFtZX0gLS0tICovXFxuYCA6IFwiXCI7XG59O1xuLyoqXG4gKiBGaWx0ZXIgdG9rZW5zIGJhc2VkIG9uIHRoZSBuYW1lLlxuICpcbiAqIEBwYXJhbSBuYW1lIC0gVGhlIG5hbWUgdG8gZmlsdGVyIGJ5LlxuICogQHBhcmFtIHRva2VucyAtIFRoZSBhcnJheSBvZiB0b2tlbnMuXG4gKiBAcmV0dXJucyBUaGUgZmlsdGVyZWQgYXJyYXkgb2YgdG9rZW5zLlxuICovXG5leHBvcnRzLmZpbHRlclRva2VucyA9IChuYW1lLCB0b2tlbnMpID0+IHtcbiAgICByZXR1cm4gdG9rZW5zLmZpbHRlcigodG9rZW4pID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoKF9hID0gdG9rZW4ub3JpZ2luKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuLm9yaWdpbi5uYW1lLmluY2x1ZGVzKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIkNoeWJhXCI7XG4gICAgfSk7XG59O1xuLyoqXG4gKiBQcmludCB0aGUgb3V0cHV0IGRhdGEuXG4gKlxuICogQHBhcmFtIGRhdGEgLSBUaGUgZGF0YSB0byBwcmludC5cbiAqL1xuZXhwb3J0cy5wcmludE91dHB1dCA9IChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coc3RyaW5naWZ5T3V0cHV0KGRhdGEpKTtcbn07XG4vKipcbiAqIEdlbmVyYXRlIGEgZ3JvdXAgbmFtZSBmb3Igc3R5bGV4IGJhc2VkIG9uIHRoZSBwcm92aWRlZCBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSBuYW1lcyAtIFRoZSBzdHJpbmdzIHRvIGdlbmVyYXRlIHRoZSBncm91cCBuYW1lIGZyb20uXG4gKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIGdyb3VwIG5hbWUuXG4gKi9cbmV4cG9ydHMuc3R5bGV4R3JvdXBOYW1lID0gKC4uLm5hbWVzKSA9PiB7XG4gICAgcmV0dXJuIG5hbWVzXG4gICAgICAgIC5qb2luKFwiIFwiKVxuICAgICAgICAudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvW15hLXpBLVowLTldKyguKS9nLCAobSwgY2hyKSA9PiBjaHIudG9VcHBlckNhc2UoKSk7XG59O1xuLyoqXG4gKiBTdHJpbiB0byBsb3dlciBjYXNlXG4gKiBAcGFyYW0gc3RyIC0gc3RyaW5nIHRvIGxvd2VyIGNhc2VcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydHMudG9Mb3dlckNhc2UgPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0ci50b0xvY2FsZUxvd2VyQ2FzZSgpO1xufTtcbmV4cG9ydHMuam9pbkFycmF5QnlTbGFzaCA9IChzdHJBcnIpID0+IHtcbiAgICByZXR1cm4gc3RyQXJyLmpvaW4oXCIgLyBcIik7XG59O1xuZXhwb3J0cy5ncmFkaWVudEFuZ2xlID0gKGZyb20sIHRvKSA9PiB7XG4gICAgY29uc3QgZGVsdGFYID0gdG8ueCAtIGZyb20ueDtcbiAgICBjb25zdCBkZWx0YVkgPSB0by55IC0gZnJvbS55O1xuICAgIGNvbnN0IHJhZGlhbnMgPSBNYXRoLmF0YW4yKGRlbHRhWSwgZGVsdGFYKTtcbiAgICBjb25zdCByZXN1bHQgPSAocmFkaWFucyAqIDE4MCkgLyBNYXRoLlBJO1xuICAgIGNvbnN0IGZpeGVkUmVzdWx0ID0gcmVzdWx0ICsgOTA7XG4gICAgcmV0dXJuIChmaXhlZFJlc3VsdCA8IDAgPyBmaXhlZFJlc3VsdCArIDM2MCA6IGZpeGVkUmVzdWx0KSAlIDM2MDtcbn07XG5jb25zdCBnZXRWYWx1ZVdpdGhDb3JyZWN0VW5pdCA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYCR7dmFsdWV9YDtcbiAgICB9XG4gICAgcmV0dXJuIGAke3ZhbHVlfXB4YDtcbn07XG5jb25zdCBub25OZWdhdGl2ZVZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlIDwgMCA/IDAgOiB2YWx1ZTtcbn07XG5leHBvcnRzLnNoYWRvd1Rva2VuVmFsdWUgPSAodG9rZW4pID0+IHtcbiAgICBjb25zdCB7IGNvbG9yLCB4LCB5LCByYWRpdXMsIHNwcmVhZCB9ID0gdG9rZW4udmFsdWU7XG4gICAgY29uc3QgYmx1clJhZGl1cyA9IGdldFZhbHVlV2l0aENvcnJlY3RVbml0KG5vbk5lZ2F0aXZlVmFsdWUocmFkaXVzLm1lYXN1cmUpKTtcbiAgICBjb25zdCBvZmZzZXRYID0gZ2V0VmFsdWVXaXRoQ29ycmVjdFVuaXQoeC5tZWFzdXJlKTtcbiAgICBjb25zdCBvZmZzZXRZID0gZ2V0VmFsdWVXaXRoQ29ycmVjdFVuaXQoeS5tZWFzdXJlKTtcbiAgICBjb25zdCBzcHJlYWRSYWRpdXMgPSBnZXRWYWx1ZVdpdGhDb3JyZWN0VW5pdChzcHJlYWQubWVhc3VyZSk7XG4gICAgcmV0dXJuIGAke29mZnNldFh9ICR7b2Zmc2V0WX0gJHtibHVyUmFkaXVzfSAke3NwcmVhZFJhZGl1c30gIyR7Y29sb3IuaGV4fWA7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0cmluZ0hTTEEgPSBleHBvcnRzLnN0cmluZ0hTTCA9IGV4cG9ydHMuY2FsY3VsYXRlU2F0dXJhdGlvbiA9IGV4cG9ydHMuY2FsY3VsYXRlTGlnaHRuZXNzID0gZXhwb3J0cy5jYWxjdWxhdGVIdWUgPSB2b2lkIDA7XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGh1ZSB2YWx1ZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cbiAqIEBwYXJhbSBkZWx0YSAtIFRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIG1heGltdW0gYW5kIG1pbmltdW0gY29sb3IgdmFsdWVzLlxuICogQHBhcmFtIGNtYXggLSBUaGUgbWF4aW11bSBjb2xvciB2YWx1ZS5cbiAqIEBwYXJhbSByIC0gVGhlIHJlZCBjb2xvciB2YWx1ZS5cbiAqIEBwYXJhbSBnIC0gVGhlIGdyZWVuIGNvbG9yIHZhbHVlLlxuICogQHBhcmFtIGIgLSBUaGUgYmx1ZSBjb2xvciB2YWx1ZS5cbiAqIEByZXR1cm5zIFRoZSBjYWxjdWxhdGVkIGh1ZSB2YWx1ZS5cbiAqL1xuZXhwb3J0cy5jYWxjdWxhdGVIdWUgPSAoZGVsdGEsIGNtYXgsIHIsIGcsIGIpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICBpZiAoZGVsdGEgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChjbWF4ID09PSByKSB7XG4gICAgICAgIHJlc3VsdCA9ICgoZyAtIGIpIC8gZGVsdGEpICUgNjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY21heCA9PT0gZykge1xuICAgICAgICByZXN1bHQgPSAoYiAtIHIpIC8gZGVsdGEgKyAyO1xuICAgIH1cbiAgICBlbHNlIGlmIChjbWF4ID09PSBiKSB7XG4gICAgICAgIHJlc3VsdCA9IChyIC0gZykgLyBkZWx0YSArIDQ7XG4gICAgfVxuICAgIGNvbnN0IHJvdW5kZWQgPSBNYXRoLnJvdW5kKHJlc3VsdCAqIDYwKTtcbiAgICBpZiAocm91bmRlZCA8IDApIHtcbiAgICAgICAgcmV0dXJuIHJvdW5kZWQgKyAzNjA7XG4gICAgfVxuICAgIHJldHVybiByb3VuZGVkO1xufTtcbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGlnaHRuZXNzIHZhbHVlIGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIGNtYXggLSBUaGUgbWF4aW11bSBjb2xvciB2YWx1ZS5cbiAqIEBwYXJhbSBjbWluIC0gVGhlIG1pbmltdW0gY29sb3IgdmFsdWUuXG4gKiBAcmV0dXJucyBUaGUgY2FsY3VsYXRlZCBsaWdodG5lc3MgdmFsdWUuXG4gKi9cbmV4cG9ydHMuY2FsY3VsYXRlTGlnaHRuZXNzID0gKGNtYXgsIGNtaW4pID0+IHtcbiAgICByZXR1cm4gKGNtYXggKyBjbWluKSAvIDI7XG59O1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzYXR1cmF0aW9uIHZhbHVlIGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIGRlbHRhIC0gVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbWF4aW11bSBhbmQgbWluaW11bSBjb2xvciB2YWx1ZXMuXG4gKiBAcGFyYW0gbGlnaHRuZXNzIC0gVGhlIGxpZ2h0bmVzcyB2YWx1ZS5cbiAqIEByZXR1cm5zIFRoZSBjYWxjdWxhdGVkIHNhdHVyYXRpb24gdmFsdWUuXG4gKi9cbmV4cG9ydHMuY2FsY3VsYXRlU2F0dXJhdGlvbiA9IChkZWx0YSwgbGlnaHRuZXNzKSA9PiB7XG4gICAgcmV0dXJuIGRlbHRhID09PSAwID8gMCA6IGRlbHRhIC8gKDEgLSBNYXRoLmFicygyICogbGlnaHRuZXNzIC0gMSkpO1xufTtcbi8qKlxuICogQ29udmVydHMgdGhlIEhTTCB2YWx1ZXMgdG8gYSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXG4gKiBAcGFyYW0gaHVlIC0gVGhlIGh1ZSB2YWx1ZS5cbiAqIEBwYXJhbSBzYXR1cmF0aW9uIC0gVGhlIHNhdHVyYXRpb24gdmFsdWUuXG4gKiBAcGFyYW0gbGlnaHRuZXNzIC0gVGhlIGxpZ2h0bmVzcyB2YWx1ZS5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIEhTTCB2YWx1ZXMuXG4gKi9cbmV4cG9ydHMuc3RyaW5nSFNMID0gKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSA9PiB7XG4gICAgcmV0dXJuIGBoc2woJHtodWV9LCAke01hdGgucm91bmQoc2F0dXJhdGlvbil9JSwgJHtNYXRoLnJvdW5kKGxpZ2h0bmVzcyl9JSlgO1xufTtcbi8qKlxuICogQ29udmVydHMgdGhlIEhTTEEgdmFsdWVzIHRvIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxuICogQHBhcmFtIGh1ZSAtIFRoZSBodWUgdmFsdWUuXG4gKiBAcGFyYW0gc2F0dXJhdGlvbiAtIFRoZSBzYXR1cmF0aW9uIHZhbHVlLlxuICogQHBhcmFtIGxpZ2h0bmVzcyAtIFRoZSBsaWdodG5lc3MgdmFsdWUuXG4gKiBAcGFyYW0gYWxwaGEgLSBUaGUgYWxwaGEgdmFsdWUuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBIU0xBIHZhbHVlcy5cbiAqL1xuZXhwb3J0cy5zdHJpbmdIU0xBID0gKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBhbHBoYSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBoc2woJHtodWV9LCAke01hdGgucm91bmQoc2F0dXJhdGlvbil9LCAke01hdGgucm91bmQobGlnaHRuZXNzKX0lLCAke2FscGhhfSlgKTtcbiAgICByZXR1cm4gYGhzbGEoJHtodWV9LCAke01hdGgucm91bmQoc2F0dXJhdGlvbil9JSwgJHtNYXRoLnJvdW5kKGxpZ2h0bmVzcyl9JSwgJHtNYXRoLnJvdW5kKGFscGhhICogMTApIC8gMTB9KWA7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIG9iamVjdCB0byBhbiBIU0wgb3IgSFNMQSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXG4gKlxuICogQHBhcmFtIHtDb2xvclRva2VuVmFsdWV9IGNvbG9yIC0gVGhlIGNvbG9yIG9iamVjdCB0byBjb252ZXJ0LlxuICogQHJldHVybnMgVGhlIEhTTCBvciBIU0xBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29sb3IuXG4gKi9cbmNvbnN0IGhzbENvbnZlcnRvciA9IChjb2xvcikgPT4ge1xuICAgIGNvbnN0IHsgcjogX3IsIGc6IF9nLCBiOiBfYiwgYTogX2EgfSA9IGNvbG9yO1xuICAgIGNvbnN0IHIgPSBfciAvIDI1NTtcbiAgICBjb25zdCBnID0gX2cgLyAyNTU7XG4gICAgY29uc3QgYiA9IF9iIC8gMjU1O1xuICAgIGNvbnN0IGEgPSBfYSAvIDI1NTtcbiAgICBjb25zdCBjbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgY29uc3QgY21heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgIGNvbnN0IGRlbHRhID0gY21heCAtIGNtaW47XG4gICAgY29uc3QgaHVlID0gaGVscGVyc18xLmNhbGN1bGF0ZUh1ZShkZWx0YSwgY21heCwgciwgZywgYik7XG4gICAgY29uc3QgX2xpZ2h0bmVzcyA9IGhlbHBlcnNfMS5jYWxjdWxhdGVMaWdodG5lc3MoY21heCwgY21pbik7XG4gICAgY29uc3QgX3NhdHVyYXRpb24gPSBoZWxwZXJzXzEuY2FsY3VsYXRlU2F0dXJhdGlvbihkZWx0YSwgX2xpZ2h0bmVzcyk7XG4gICAgY29uc3QgbGlnaHRuZXNzID0gKyhfbGlnaHRuZXNzICogMTAwKS50b0ZpeGVkKDEpO1xuICAgIGNvbnN0IHNhdHVyYXRpb24gPSArKF9zYXR1cmF0aW9uICogMTAwKS50b0ZpeGVkKDEpO1xuICAgIHJldHVybiBhID09PSAxID8gaGVscGVyc18xLnN0cmluZ0hTTChodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgOiBoZWxwZXJzXzEuc3RyaW5nSFNMQShodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gaHNsQ29udmVydG9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaHNsQ29udmVydG9yXzEgPSByZXF1aXJlKFwiLi9oc2xDb252ZXJ0b3JcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBoc2xDb252ZXJ0b3JfMS5kZWZhdWx0OyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xuY29uc3QgaHNsX2NvbnZlcnRvcl8xID0gcmVxdWlyZShcIi4vaHNsLWNvbnZlcnRvclwiKTtcbmNvbnN0IHBheWxvYWRzXzEgPSByZXF1aXJlKFwiLi9wYXlsb2Fkc1wiKTtcbi8vIEZ1bmN0aW9ucyByZWdpc3RyYXRpb25cblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiY3VycmVudERhdGVcIiwgaGVscGVyc18xLmN1cnJlbnREYXRlKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiZ2V0QnJhbmRJZFwiLCBoZWxwZXJzXzEuZ2V0QnJhbmRJZCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImV4cG9ydGVkRmlsZU5hbWVcIiwgaGVscGVyc18xLmV4cG9ydGVkRmlsZU5hbWUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJ2YXJpYWJsZU5hbWVcIiwgaGVscGVyc18xLnZhcmlhYmxlTmFtZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImhzbENvbnZlcnRvclwiLCBoc2xfY29udmVydG9yXzEuZGVmYXVsdCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImdyb3VwTmFtZUNvbW1lbnRcIiwgaGVscGVyc18xLmdyb3VwTmFtZUNvbW1lbnQpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJzdHlsZXhUb2tlbk5hbWVcIiwgaGVscGVyc18xLnN0eWxleFRva2VuTmFtZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImZpbHRlclRva2Vuc1wiLCBoZWxwZXJzXzEuZmlsdGVyVG9rZW5zKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwicHJpbnRPdXRwdXRcIiwgaGVscGVyc18xLnByaW50T3V0cHV0KTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwidG9rZW5OYW1lQnlPcmlnaW5OYW1lXCIsIGhlbHBlcnNfMS50b2tlbk5hbWVCeU9yaWdpbk5hbWUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJzdHlsZXhHcm91cE5hbWVcIiwgaGVscGVyc18xLnN0eWxleEdyb3VwTmFtZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInRvTG93ZXJDYXNlXCIsIGhlbHBlcnNfMS50b0xvd2VyQ2FzZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImpvaW5BcnJheUJ5U2xhc2hcIiwgaGVscGVyc18xLmpvaW5BcnJheUJ5U2xhc2gpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJncmFkaWVudEFuZ2xlXCIsIGhlbHBlcnNfMS5ncmFkaWVudEFuZ2xlKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwic2hhZG93VG9rZW5WYWx1ZVwiLCBoZWxwZXJzXzEuc2hhZG93VG9rZW5WYWx1ZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInRva2VuTmFtZVdpdGhDYXRlZ29yeVwiLCBoZWxwZXJzXzEudG9rZW5OYW1lV2l0aENhdGVnb3J5KTtcbi8vIFBheWxvYWRzXG5QdWxzYXIucmVnaXN0ZXJQYXlsb2FkKFwiY3VycmVudEV4cG9ydGVyVmVyc2lvblwiLCBwYXlsb2Fkc18xLmN1cnJlbnRFeHBvcnRlclZlcnNpb24pO1xuUHVsc2FyLnJlZ2lzdGVyUGF5bG9hZChcImJyYW5kTmFtZXNcIiwgcGF5bG9hZHNfMS5icmFuZE5hbWVzKTtcblB1bHNhci5yZWdpc3RlclBheWxvYWQoXCJiZWhhdmlvclwiLCBwYXlsb2Fkc18xLmJlaGF2aW9yKTtcblB1bHNhci5yZWdpc3RlclBheWxvYWQoXCJzdHlsZXhDYXRlZ29yaWVzXCIsIHBheWxvYWRzXzEuc3R5bGV4Q2F0ZWdvcmllcyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3R5bGV4Q2F0ZWdvcmllcyA9IGV4cG9ydHMuYmVoYXZpb3IgPSBleHBvcnRzLmJyYW5kTmFtZXMgPSBleHBvcnRzLmN1cnJlbnRFeHBvcnRlclZlcnNpb24gPSB2b2lkIDA7XG5jb25zdCBleHBvcnRlcl9qc29uXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwb3J0ZXIuanNvblwiKTtcbmV4cG9ydHMuY3VycmVudEV4cG9ydGVyVmVyc2lvbiA9IGV4cG9ydGVyX2pzb25fMS52ZXJzaW9uO1xuZXhwb3J0cy5icmFuZE5hbWVzID0ge1xuICAgIHZpZ286IFwiMDEgLSBWSUdvXCIsXG4gICAgY3BwOiBcIjAyIC0gQ1BQXCIsXG4gICAga29vcDogXCIwMyAtIEtvb3BcIixcbiAgICBrbno6IFwiMDQgLSBLTlpcIixcbiAgICBzdXM6IFwiMDUgLSBTVVNcIixcbn07XG5leHBvcnRzLmJlaGF2aW9yID0ge1xuICAgIGNvbG9yVG9rZW5QcmVmaXg6IFwiY29sb3JcIixcbiAgICBib3JkZXJUb2tlblByZWZpeDogXCJib3JkZXJcIixcbiAgICBncmFkaWVudFRva2VuUHJlZml4OiBcImdyYWRpZW50XCIsXG4gICAgbWVhc3VyZVRva2VuUHJlZml4OiBcIm1lYXN1cmVcIixcbiAgICBzaGFkb3dUb2tlblByZWZpeDogXCJzaGFkb3dcIixcbiAgICB0eXBvZ3JhcGh5VG9rZW5QcmVmaXg6IFwidHlwb2dyYXBoeVwiLFxufTtcbmV4cG9ydHMuc3R5bGV4Q2F0ZWdvcmllcyA9IFtcbiAgICBcImNvcmVcIixcbiAgICBcInNlbWFudGljXCIsXG4gICAgXCJjb21wb25lbnRcIlxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=