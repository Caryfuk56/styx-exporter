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

module.exports = JSON.parse("{\"id\":\"ais.exporter stylex\",\"name\":\"STYLEX & CSS ALL THEMES\",\"description\":\"CSS ans Stylex all theme exporter\",\"author\":\"\",\"organization\":\"Ais servis\",\"homepage\":\"\",\"source_dir\":\"src\",\"version\":\"2.0.3\",\"usesBrands\":true,\"config\":{\"sources\":\"sources.json\",\"output\":\"output.json\",\"js\":\"src/js/helpers.js\"},\"engines\":{\"pulsar\":\"1.0.0\",\"supernova\":\"1.0.0\"},\"tags\":[\"CSS\",\"Tokens\",\"Stylex\"],\"usesThemes\":true}");

/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.nameFromOrigin = exports.shadowTokenValue = exports.gradientAngle = exports.joinArrayBySlash = exports.stylexGroupName = exports.printOutput = exports.filterTokens = exports.groupNameComment = exports.tokenNameWithCategoryFixDoubles = exports.exportedFileName = exports.getBrandId = exports.currentDate = exports.stringifyOutput = void 0;
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
            break;
        case payloads_1.brandNames.cppDark:
            folder = "cpp-dark";
            break;
            break;
        case payloads_1.brandNames.koopDark:
            folder = "koop-dark";
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
exports.tokenNameWithCategoryFixDoubles = (token, prefix) => {
    var _a, _b, _c;
    if (!((_a = token.origin) === null || _a === void 0 ? void 0 : _a.name)) {
        return "";
    }
    const name = (_c = (_b = token.origin) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.replace(/\-|\s/g, "");
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
    const joined = removedDoubles === null || removedDoubles === void 0 ? void 0 : removedDoubles.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
    if (!joined) {
        return "";
    }
    const firstLower = joined.charAt(0).toLowerCase() + (joined === null || joined === void 0 ? void 0 : joined.slice(1));
    return firstLower;
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
 * Print the output data to the console.
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
 * Join array of strings with slash.
 * @param {string[]} strArr - array of strings
 * @returns {string} - joined string with slash
 */
exports.joinArrayBySlash = (strArr) => {
    return strArr.join(" / ");
};
/**
 * Calculate angle of gradient in degrees {0, 360}
 * @param {Vector2} from - Gradient start point
 * @param {Vector2} to - Gradient end point
 * @returns {number} - Angle of gradient in degrees {0, 360}
 */
exports.gradientAngle = (from, to) => {
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
const getValueWithCorrectUnit = (value) => {
    if (value === 0) {
        return `${value}`;
    }
    return `${value}px`;
};
const nonNegativeValue = (value) => {
    return value < 0 ? 0 : value;
};
/**
 * Calculate css value of for shadow tokens.
 * @param {Token} token - Token object
 * @returns {string} - Token value in format {offsetX} {offsetY} {blurRadius} {spreadRadius} #{color.hex}
 */
exports.shadowTokenValue = (token) => {
    const { color, x, y, radius, spread } = token.value;
    const blurRadius = getValueWithCorrectUnit(nonNegativeValue(radius.measure));
    const offsetX = getValueWithCorrectUnit(x.measure);
    const offsetY = getValueWithCorrectUnit(y.measure);
    const spreadRadius = getValueWithCorrectUnit(spread.measure);
    return `${offsetX} ${offsetY} ${blurRadius} ${spreadRadius} #${color.hex}`;
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
/**
 * Create name of the token from origin name.
 * @param {Token} token - Token object.
 * @param {string} prefix - Prefix for the name placed before the origin name.
 * @returns {string} - Name of the token in format {prefix}{originName}
 */
exports.nameFromOrigin = (token, prefix) => {
    var _a, _b, _c;
    if (!((_a = token.origin) === null || _a === void 0 ? void 0 : _a.name)) {
        return "";
    }
    const removedSpecialChars = (_c = (_b = token.origin) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.replace(/\-|\s/g, "/");
    const splittedName = removedSpecialChars === null || removedSpecialChars === void 0 ? void 0 : removedSpecialChars.split("/");
    if (prefix) {
        splittedName === null || splittedName === void 0 ? void 0 : splittedName.unshift(prefix);
    }
    return removedDoubles(splittedName)
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join("");
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
Pulsar.registerFunction("hslConvertor", hsl_convertor_1.default);
Pulsar.registerFunction("groupNameComment", helpers_1.groupNameComment);
Pulsar.registerFunction("filterTokens", helpers_1.filterTokens);
Pulsar.registerFunction("printOutput", helpers_1.printOutput);
Pulsar.registerFunction("stylexGroupName", helpers_1.stylexGroupName);
Pulsar.registerFunction("joinArrayBySlash", helpers_1.joinArrayBySlash);
Pulsar.registerFunction("gradientAngle", helpers_1.gradientAngle);
Pulsar.registerFunction("shadowTokenValue", helpers_1.shadowTokenValue);
Pulsar.registerFunction("tokenNameWithCategoryFixDoubles", helpers_1.tokenNameWithCategoryFixDoubles);
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
    knz: "KNZ Light",
    sus: "SUS Light",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHNsLWNvbnZlcnRvci9oc2xDb252ZXJ0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYXlsb2Fkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHFDQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVcsR0FBRyxXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU8sR0FBRyxLQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVSxPQUFPLEVBQUU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJoZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubmFtZUZyb21PcmlnaW4gPSBleHBvcnRzLnNoYWRvd1Rva2VuVmFsdWUgPSBleHBvcnRzLmdyYWRpZW50QW5nbGUgPSBleHBvcnRzLmpvaW5BcnJheUJ5U2xhc2ggPSBleHBvcnRzLnN0eWxleEdyb3VwTmFtZSA9IGV4cG9ydHMucHJpbnRPdXRwdXQgPSBleHBvcnRzLmZpbHRlclRva2VucyA9IGV4cG9ydHMuZ3JvdXBOYW1lQ29tbWVudCA9IGV4cG9ydHMudG9rZW5OYW1lV2l0aENhdGVnb3J5Rml4RG91YmxlcyA9IGV4cG9ydHMuZXhwb3J0ZWRGaWxlTmFtZSA9IGV4cG9ydHMuZ2V0QnJhbmRJZCA9IGV4cG9ydHMuY3VycmVudERhdGUgPSBleHBvcnRzLnN0cmluZ2lmeU91dHB1dCA9IHZvaWQgMDtcbmNvbnN0IHBheWxvYWRzXzEgPSByZXF1aXJlKFwiLi9wYXlsb2Fkc1wiKTtcbi8qKlxuICogU3RyaW5naWZpZXMgYW4gb2JqZWN0LCByZW1vdmluZyBjaXJjdWxhciByZWZlcmVuY2VzLlxuICpcbiAqIEBwYXJhbSBvYmogLSBUaGUgb2JqZWN0IHRvIHN0cmluZ2lmeS5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmdpZmllZCBvYmplY3QuXG4gKi9cbmV4cG9ydHMuc3RyaW5naWZ5T3V0cHV0ID0gKG9iaikgPT4ge1xuICAgIGxldCBjYWNoZSA9IFtdO1xuICAgIGNvbnN0IHN0ciA9IEpTT04uc3RyaW5naWZ5KG9iaiwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGNhY2hlICYmIGNhY2hlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FjaGUgPT09IG51bGwgfHwgY2FjaGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhY2hlLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KTtcbiAgICBjYWNoZSA9IG51bGw7XG4gICAgcmV0dXJuIHN0cjtcbn07XG4vKipcbiAqIFJldHVybiBjdXJyZW50IHRpbWUgaW4gbG9jYWwgc3RyaW5nXG4gKiBAcmV0dXJucyBUaGUgY3VycmVudCB0aW1lIGluIGxvY2FsIHN0cmluZyBmb3JtYXQuXG4gKi9cbmV4cG9ydHMuY3VycmVudERhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgY29uc3QgdGltZVN0cmluZyA9IGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgcmV0dXJuIGAke2RhdGVTdHJpbmd9ICR7dGltZVN0cmluZ31gO1xufTtcbi8qKlxuICogUmV0dXJuIGlkIG9mIHRoZSB0aGVtZSBhY2NvcmRpbmcgdGhlbWUgbmFtZS5cbiAqXG4gKiBAcGFyYW0gdGhlbWVOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHRoZW1lLlxuICogQHBhcmFtIGJyYW5kcyAtIFRoZSBhcnJheSBvZiBicmFuZCBvYmplY3RzLlxuICogQHJldHVybnMgVGhlIGlkIG9mIHRoZSB0aGVtZS5cbiAqL1xuZXhwb3J0cy5nZXRCcmFuZElkID0gKHRoZW1lTmFtZSwgYnJhbmRzKSA9PiB7XG4gICAgY29uc3QgYnJhbmRPYmplY3QgPSBicmFuZHMuZmlsdGVyKChicmFuZCkgPT4gYnJhbmQubmFtZSA9PT0gdGhlbWVOYW1lKTtcbiAgICBpZiAoYnJhbmRPYmplY3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IGJyYW5kIHdpdGggbmFtZSBcXFwiXCIgKyBcIm5hbWVcIiArIFwiXFxcIiBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBicmFuZE9iamVjdFswXS5pZDtcbn07XG4vKipcbiAqIEdlbmVyYXRlIHRoZSBleHBvcnRlZCBmaWxlIG5hbWUgYmFzZWQgb24gdGhlIHR5cGUgYW5kIGJyYW5kLlxuICpcbiAqIEBwYXJhbSB0eXBlIC0gVGhlIHR5cGUgb2YgdGhlIGZpbGUuXG4gKiBAcGFyYW0gYnJhbmQgLSBUaGUgYnJhbmQgbmFtZS5cbiAqIEByZXR1cm5zIFRoZSBnZW5lcmF0ZWQgZmlsZSBuYW1lLlxuICovXG5leHBvcnRzLmV4cG9ydGVkRmlsZU5hbWUgPSAodHlwZSwgYnJhbmQpID0+IHtcbiAgICBsZXQgZm9sZGVyID0gXCJcIjtcbiAgICBzd2l0Y2ggKGJyYW5kKSB7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLnZpZ286XG4gICAgICAgICAgICBmb2xkZXIgPSBcInZpZ29cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBheWxvYWRzXzEuYnJhbmROYW1lcy5jcHA6XG4gICAgICAgICAgICBmb2xkZXIgPSBcImNwcFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLmtvb3A6XG4gICAgICAgICAgICBmb2xkZXIgPSBcImtvb3BcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLmNwcERhcms6XG4gICAgICAgICAgICBmb2xkZXIgPSBcImNwcC1kYXJrXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBheWxvYWRzXzEuYnJhbmROYW1lcy5rb29wRGFyazpcbiAgICAgICAgICAgIGZvbGRlciA9IFwia29vcC1kYXJrXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBwYXlsb2Fkc18xLmJyYW5kTmFtZXMua256OlxuICAgICAgICAgICAgZm9sZGVyID0gXCJrbnpcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBheWxvYWRzXzEuYnJhbmROYW1lcy5zdXM6XG4gICAgICAgICAgICBmb2xkZXIgPSBcInN1c1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgaGVhZGVyIGNvbW1lbnQgRVJST1I6IGJyYW5kIG5hbWUgXFxcIlwiICsgYnJhbmQgKyBcIlxcXCIgZG9lc24ndCBleGlzdC5cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGAke2ZvbGRlcn0vJHt0eXBlfS5jc3NgO1xufTtcbmV4cG9ydHMudG9rZW5OYW1lV2l0aENhdGVnb3J5Rml4RG91YmxlcyA9ICh0b2tlbiwgcHJlZml4KSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgaWYgKCEoKF9hID0gdG9rZW4ub3JpZ2luKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IG5hbWUgPSAoX2MgPSAoX2IgPSB0b2tlbi5vcmlnaW4pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5uYW1lKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucmVwbGFjZSgvXFwtfFxccy9nLCBcIlwiKTtcbiAgICBjb25zdCBuYW1lQXJyID0gbmFtZSA9PT0gbnVsbCB8fCBuYW1lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lLnNwbGl0KFwiL1wiKTtcbiAgICAvLyBDaGFuZ2UgZGFzaCB0byBDYW1lbENhc2VcbiAgICBjb25zdCB3aXRob3V0RGFzaCA9IG5hbWVBcnIgPT09IG51bGwgfHwgbmFtZUFyciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmFtZUFyci5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gaXRlbS5zcGxpdChcIi1cIilcbiAgICAgICAgICAgIC5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xuICAgIH0pO1xuICAgIGNvbnN0IHJlbW92ZWREb3VibGVzID0gd2l0aG91dERhc2ggPT09IG51bGwgfHwgd2l0aG91dERhc2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpdGhvdXREYXNoLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbG93ZXJjYXNlZEl0ZW0gPSBpdGVtLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBpbmRleCA9PT0gd2l0aG91dERhc2guZmluZEluZGV4KCh3b3JkKSA9PiB3b3JkLnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyY2FzZWRJdGVtKTtcbiAgICB9KTtcbiAgICBpZiAocHJlZml4KSB7XG4gICAgICAgIHJlbW92ZWREb3VibGVzID09PSBudWxsIHx8IHJlbW92ZWREb3VibGVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZW1vdmVkRG91Ymxlcy51bnNoaWZ0KHByZWZpeCk7XG4gICAgfVxuICAgIGNvbnN0IGpvaW5lZCA9IHJlbW92ZWREb3VibGVzID09PSBudWxsIHx8IHJlbW92ZWREb3VibGVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZW1vdmVkRG91Ymxlcy5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKS5qb2luKFwiXCIpO1xuICAgIGlmICgham9pbmVkKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBjb25zdCBmaXJzdExvd2VyID0gam9pbmVkLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgKGpvaW5lZCA9PT0gbnVsbCB8fCBqb2luZWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGpvaW5lZC5zbGljZSgxKSk7XG4gICAgcmV0dXJuIGZpcnN0TG93ZXI7XG59O1xubGV0IHByaW50Q29tbWVudCA9IGZhbHNlO1xubGV0IGdyb3VwTmFtZSA9IFwiXCI7XG4vKipcbiAqIEdlbmVyYXRlIGEgZ3JvdXAgbmFtZSBjb21tZW50IGJhc2VkIG9uIHRoZSB0b2tlbiBncm91cC5cbiAqXG4gKiBAcGFyYW0gdG9rZW5Hcm91cCAtIFRoZSB0b2tlbiBncm91cCBvYmplY3QuXG4gKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIGdyb3VwIG5hbWUgY29tbWVudC5cbiAqL1xuZXhwb3J0cy5ncm91cE5hbWVDb21tZW50ID0gKHRva2VuR3JvdXApID0+IHtcbiAgICBpZiAoISh0b2tlbkdyb3VwID09PSBudWxsIHx8IHRva2VuR3JvdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRva2VuR3JvdXAucGFyZW50KSkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgY29uc3QgeyBwYXJlbnQ6IHsgbmFtZSB9IH0gPSB0b2tlbkdyb3VwO1xuICAgIGlmIChuYW1lICE9PSBncm91cE5hbWUpIHtcbiAgICAgICAgZ3JvdXBOYW1lID0gbmFtZTtcbiAgICAgICAgcHJpbnRDb21tZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByaW50Q29tbWVudCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcHJpbnRDb21tZW50XG4gICAgICAgID8gYC8qIC0tLSAke2dyb3VwTmFtZX0gLS0tICovXFxuYCA6IFwiXCI7XG59O1xuLyoqXG4gKiBGaWx0ZXIgdG9rZW5zIGJhc2VkIG9uIHRoZSBuYW1lLlxuICpcbiAqIEBwYXJhbSBuYW1lIC0gVGhlIG5hbWUgdG8gZmlsdGVyIGJ5LlxuICogQHBhcmFtIHRva2VucyAtIFRoZSBhcnJheSBvZiB0b2tlbnMuXG4gKiBAcmV0dXJucyBUaGUgZmlsdGVyZWQgYXJyYXkgb2YgdG9rZW5zLlxuICovXG5leHBvcnRzLmZpbHRlclRva2VucyA9IChuYW1lLCB0b2tlbnMpID0+IHtcbiAgICByZXR1cm4gdG9rZW5zLmZpbHRlcigodG9rZW4pID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoKF9hID0gdG9rZW4ub3JpZ2luKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuLm9yaWdpbi5uYW1lLmluY2x1ZGVzKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIkNoeWJhXCI7XG4gICAgfSk7XG59O1xuLyoqXG4gKiBQcmludCB0aGUgb3V0cHV0IGRhdGEgdG8gdGhlIGNvbnNvbGUuXG4gKlxuICogQHBhcmFtIGRhdGEgLSBUaGUgZGF0YSB0byBwcmludC5cbiAqL1xuZXhwb3J0cy5wcmludE91dHB1dCA9IChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXhwb3J0cy5zdHJpbmdpZnlPdXRwdXQoZGF0YSkpO1xufTtcbi8qKlxuICogR2VuZXJhdGUgYSBncm91cCBuYW1lIGZvciBzdHlsZXggYmFzZWQgb24gdGhlIHByb3ZpZGVkIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIG5hbWVzIC0gVGhlIHN0cmluZ3MgdG8gZ2VuZXJhdGUgdGhlIGdyb3VwIG5hbWUgZnJvbS5cbiAqIEByZXR1cm5zIFRoZSBnZW5lcmF0ZWQgZ3JvdXAgbmFtZS5cbiAqL1xuZXhwb3J0cy5zdHlsZXhHcm91cE5hbWUgPSAoLi4ubmFtZXMpID0+IHtcbiAgICByZXR1cm4gbmFtZXNcbiAgICAgICAgLmpvaW4oXCIgXCIpXG4gICAgICAgIC50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOV0rKC4pL2csIChtLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKTtcbn07XG4vKipcbiAqIEpvaW4gYXJyYXkgb2Ygc3RyaW5ncyB3aXRoIHNsYXNoLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gc3RyQXJyIC0gYXJyYXkgb2Ygc3RyaW5nc1xuICogQHJldHVybnMge3N0cmluZ30gLSBqb2luZWQgc3RyaW5nIHdpdGggc2xhc2hcbiAqL1xuZXhwb3J0cy5qb2luQXJyYXlCeVNsYXNoID0gKHN0ckFycikgPT4ge1xuICAgIHJldHVybiBzdHJBcnIuam9pbihcIiAvIFwiKTtcbn07XG4vKipcbiAqIENhbGN1bGF0ZSBhbmdsZSBvZiBncmFkaWVudCBpbiBkZWdyZWVzIHswLCAzNjB9XG4gKiBAcGFyYW0ge1ZlY3RvcjJ9IGZyb20gLSBHcmFkaWVudCBzdGFydCBwb2ludFxuICogQHBhcmFtIHtWZWN0b3IyfSB0byAtIEdyYWRpZW50IGVuZCBwb2ludFxuICogQHJldHVybnMge251bWJlcn0gLSBBbmdsZSBvZiBncmFkaWVudCBpbiBkZWdyZWVzIHswLCAzNjB9XG4gKi9cbmV4cG9ydHMuZ3JhZGllbnRBbmdsZSA9IChmcm9tLCB0bykgPT4ge1xuICAgIGlmICghZnJvbSB8fCAhdG8pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogTWlzc2luZyBncmFkaWVudCBwb2ludHMuXCIpO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgZGVsdGFYID0gdG8ueCAtIGZyb20ueDtcbiAgICBjb25zdCBkZWx0YVkgPSB0by55IC0gZnJvbS55O1xuICAgIGNvbnN0IHJhZGlhbnMgPSBNYXRoLmF0YW4yKGRlbHRhWSwgZGVsdGFYKTtcbiAgICBjb25zdCByZXN1bHQgPSAocmFkaWFucyAqIDE4MCkgLyBNYXRoLlBJO1xuICAgIGNvbnN0IGZpeGVkUmVzdWx0ID0gcmVzdWx0ICsgOTA7XG4gICAgcmV0dXJuIChmaXhlZFJlc3VsdCA8IDAgPyBmaXhlZFJlc3VsdCArIDM2MCA6IGZpeGVkUmVzdWx0KSAlIDM2MDtcbn07XG5jb25zdCBnZXRWYWx1ZVdpdGhDb3JyZWN0VW5pdCA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYCR7dmFsdWV9YDtcbiAgICB9XG4gICAgcmV0dXJuIGAke3ZhbHVlfXB4YDtcbn07XG5jb25zdCBub25OZWdhdGl2ZVZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlIDwgMCA/IDAgOiB2YWx1ZTtcbn07XG4vKipcbiAqIENhbGN1bGF0ZSBjc3MgdmFsdWUgb2YgZm9yIHNoYWRvdyB0b2tlbnMuXG4gKiBAcGFyYW0ge1Rva2VufSB0b2tlbiAtIFRva2VuIG9iamVjdFxuICogQHJldHVybnMge3N0cmluZ30gLSBUb2tlbiB2YWx1ZSBpbiBmb3JtYXQge29mZnNldFh9IHtvZmZzZXRZfSB7Ymx1clJhZGl1c30ge3NwcmVhZFJhZGl1c30gI3tjb2xvci5oZXh9XG4gKi9cbmV4cG9ydHMuc2hhZG93VG9rZW5WYWx1ZSA9ICh0b2tlbikgPT4ge1xuICAgIGNvbnN0IHsgY29sb3IsIHgsIHksIHJhZGl1cywgc3ByZWFkIH0gPSB0b2tlbi52YWx1ZTtcbiAgICBjb25zdCBibHVyUmFkaXVzID0gZ2V0VmFsdWVXaXRoQ29ycmVjdFVuaXQobm9uTmVnYXRpdmVWYWx1ZShyYWRpdXMubWVhc3VyZSkpO1xuICAgIGNvbnN0IG9mZnNldFggPSBnZXRWYWx1ZVdpdGhDb3JyZWN0VW5pdCh4Lm1lYXN1cmUpO1xuICAgIGNvbnN0IG9mZnNldFkgPSBnZXRWYWx1ZVdpdGhDb3JyZWN0VW5pdCh5Lm1lYXN1cmUpO1xuICAgIGNvbnN0IHNwcmVhZFJhZGl1cyA9IGdldFZhbHVlV2l0aENvcnJlY3RVbml0KHNwcmVhZC5tZWFzdXJlKTtcbiAgICByZXR1cm4gYCR7b2Zmc2V0WH0gJHtvZmZzZXRZfSAke2JsdXJSYWRpdXN9ICR7c3ByZWFkUmFkaXVzfSAjJHtjb2xvci5oZXh9YDtcbn07XG5jb25zdCByZW1vdmVkRG91YmxlcyA9IChzdHJpbmdBcnIpID0+IHtcbiAgICBpZiAoIXN0cmluZ0Fycikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmdBcnIgPT09IG51bGwgfHwgc3RyaW5nQXJyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdHJpbmdBcnIuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsb3dlcmNhc2VkSXRlbSA9IGl0ZW0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ID09PSBzdHJpbmdBcnIuZmluZEluZGV4KCh3b3JkKSA9PiB3b3JkLnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyY2FzZWRJdGVtKTtcbiAgICB9KTtcbn07XG4vKipcbiAqIENyZWF0ZSBuYW1lIG9mIHRoZSB0b2tlbiBmcm9tIG9yaWdpbiBuYW1lLlxuICogQHBhcmFtIHtUb2tlbn0gdG9rZW4gLSBUb2tlbiBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4IC0gUHJlZml4IGZvciB0aGUgbmFtZSBwbGFjZWQgYmVmb3JlIHRoZSBvcmlnaW4gbmFtZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gTmFtZSBvZiB0aGUgdG9rZW4gaW4gZm9ybWF0IHtwcmVmaXh9e29yaWdpbk5hbWV9XG4gKi9cbmV4cG9ydHMubmFtZUZyb21PcmlnaW4gPSAodG9rZW4sIHByZWZpeCkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGlmICghKChfYSA9IHRva2VuLm9yaWdpbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5hbWUpKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBjb25zdCByZW1vdmVkU3BlY2lhbENoYXJzID0gKF9jID0gKF9iID0gdG9rZW4ub3JpZ2luKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubmFtZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnJlcGxhY2UoL1xcLXxcXHMvZywgXCIvXCIpO1xuICAgIGNvbnN0IHNwbGl0dGVkTmFtZSA9IHJlbW92ZWRTcGVjaWFsQ2hhcnMgPT09IG51bGwgfHwgcmVtb3ZlZFNwZWNpYWxDaGFycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVtb3ZlZFNwZWNpYWxDaGFycy5zcGxpdChcIi9cIik7XG4gICAgaWYgKHByZWZpeCkge1xuICAgICAgICBzcGxpdHRlZE5hbWUgPT09IG51bGwgfHwgc3BsaXR0ZWROYW1lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzcGxpdHRlZE5hbWUudW5zaGlmdChwcmVmaXgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVtb3ZlZERvdWJsZXMoc3BsaXR0ZWROYW1lKVxuICAgICAgICAubWFwKChpdGVtKSA9PiBpdGVtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaXRlbS5zbGljZSgxKSlcbiAgICAgICAgLmpvaW4oXCJcIik7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0cmluZ0hTTEEgPSBleHBvcnRzLnN0cmluZ0hTTCA9IGV4cG9ydHMuY2FsY3VsYXRlU2F0dXJhdGlvbiA9IGV4cG9ydHMuY2FsY3VsYXRlTGlnaHRuZXNzID0gZXhwb3J0cy5jYWxjdWxhdGVIdWUgPSB2b2lkIDA7XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGh1ZSB2YWx1ZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cbiAqIEBwYXJhbSBkZWx0YSAtIFRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIG1heGltdW0gYW5kIG1pbmltdW0gY29sb3IgdmFsdWVzLlxuICogQHBhcmFtIGNtYXggLSBUaGUgbWF4aW11bSBjb2xvciB2YWx1ZS5cbiAqIEBwYXJhbSByIC0gVGhlIHJlZCBjb2xvciB2YWx1ZS5cbiAqIEBwYXJhbSBnIC0gVGhlIGdyZWVuIGNvbG9yIHZhbHVlLlxuICogQHBhcmFtIGIgLSBUaGUgYmx1ZSBjb2xvciB2YWx1ZS5cbiAqIEByZXR1cm5zIFRoZSBjYWxjdWxhdGVkIGh1ZSB2YWx1ZS5cbiAqL1xuZXhwb3J0cy5jYWxjdWxhdGVIdWUgPSAoZGVsdGEsIGNtYXgsIHIsIGcsIGIpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICBpZiAoZGVsdGEgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChjbWF4ID09PSByKSB7XG4gICAgICAgIHJlc3VsdCA9ICgoZyAtIGIpIC8gZGVsdGEpICUgNjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY21heCA9PT0gZykge1xuICAgICAgICByZXN1bHQgPSAoYiAtIHIpIC8gZGVsdGEgKyAyO1xuICAgIH1cbiAgICBlbHNlIGlmIChjbWF4ID09PSBiKSB7XG4gICAgICAgIHJlc3VsdCA9IChyIC0gZykgLyBkZWx0YSArIDQ7XG4gICAgfVxuICAgIGNvbnN0IHJvdW5kZWQgPSBNYXRoLnJvdW5kKHJlc3VsdCAqIDYwKTtcbiAgICBpZiAocm91bmRlZCA8IDApIHtcbiAgICAgICAgcmV0dXJuIHJvdW5kZWQgKyAzNjA7XG4gICAgfVxuICAgIHJldHVybiByb3VuZGVkO1xufTtcbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGlnaHRuZXNzIHZhbHVlIGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIGNtYXggLSBUaGUgbWF4aW11bSBjb2xvciB2YWx1ZS5cbiAqIEBwYXJhbSBjbWluIC0gVGhlIG1pbmltdW0gY29sb3IgdmFsdWUuXG4gKiBAcmV0dXJucyBUaGUgY2FsY3VsYXRlZCBsaWdodG5lc3MgdmFsdWUuXG4gKi9cbmV4cG9ydHMuY2FsY3VsYXRlTGlnaHRuZXNzID0gKGNtYXgsIGNtaW4pID0+IHtcbiAgICByZXR1cm4gKGNtYXggKyBjbWluKSAvIDI7XG59O1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzYXR1cmF0aW9uIHZhbHVlIGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIGRlbHRhIC0gVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbWF4aW11bSBhbmQgbWluaW11bSBjb2xvciB2YWx1ZXMuXG4gKiBAcGFyYW0gbGlnaHRuZXNzIC0gVGhlIGxpZ2h0bmVzcyB2YWx1ZS5cbiAqIEByZXR1cm5zIFRoZSBjYWxjdWxhdGVkIHNhdHVyYXRpb24gdmFsdWUuXG4gKi9cbmV4cG9ydHMuY2FsY3VsYXRlU2F0dXJhdGlvbiA9IChkZWx0YSwgbGlnaHRuZXNzKSA9PiB7XG4gICAgcmV0dXJuIGRlbHRhID09PSAwID8gMCA6IGRlbHRhIC8gKDEgLSBNYXRoLmFicygyICogbGlnaHRuZXNzIC0gMSkpO1xufTtcbi8qKlxuICogQ29udmVydHMgdGhlIEhTTCB2YWx1ZXMgdG8gYSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXG4gKiBAcGFyYW0gaHVlIC0gVGhlIGh1ZSB2YWx1ZS5cbiAqIEBwYXJhbSBzYXR1cmF0aW9uIC0gVGhlIHNhdHVyYXRpb24gdmFsdWUuXG4gKiBAcGFyYW0gbGlnaHRuZXNzIC0gVGhlIGxpZ2h0bmVzcyB2YWx1ZS5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIEhTTCB2YWx1ZXMuXG4gKi9cbmV4cG9ydHMuc3RyaW5nSFNMID0gKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSA9PiB7XG4gICAgcmV0dXJuIGBoc2woJHtodWV9LCAke01hdGgucm91bmQoc2F0dXJhdGlvbil9JSwgJHtNYXRoLnJvdW5kKGxpZ2h0bmVzcyl9JSlgO1xufTtcbi8qKlxuICogQ29udmVydHMgdGhlIEhTTEEgdmFsdWVzIHRvIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxuICogQHBhcmFtIGh1ZSAtIFRoZSBodWUgdmFsdWUuXG4gKiBAcGFyYW0gc2F0dXJhdGlvbiAtIFRoZSBzYXR1cmF0aW9uIHZhbHVlLlxuICogQHBhcmFtIGxpZ2h0bmVzcyAtIFRoZSBsaWdodG5lc3MgdmFsdWUuXG4gKiBAcGFyYW0gYWxwaGEgLSBUaGUgYWxwaGEgdmFsdWUuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBIU0xBIHZhbHVlcy5cbiAqL1xuZXhwb3J0cy5zdHJpbmdIU0xBID0gKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBhbHBoYSkgPT4ge1xuICAgIHJldHVybiBgaHNsYSgke2h1ZX0sICR7TWF0aC5yb3VuZChzYXR1cmF0aW9uKX0lLCAke01hdGgucm91bmQobGlnaHRuZXNzKX0lLCAke01hdGgucm91bmQoYWxwaGEgKiAxMCkgLyAxMH0pYDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG4vKipcbiAqIENvbnZlcnRzIGEgY29sb3Igb2JqZWN0IHRvIGFuIEhTTCBvciBIU0xBIHN0cmluZyByZXByZXNlbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0NvbG9yVG9rZW5WYWx1ZX0gY29sb3IgLSBUaGUgY29sb3Igb2JqZWN0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyBUaGUgSFNMIG9yIEhTTEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjb2xvci5cbiAqL1xuY29uc3QgaHNsQ29udmVydG9yID0gKGNvbG9yKSA9PiB7XG4gICAgY29uc3QgeyByOiBfciwgZzogX2csIGI6IF9iLCBhOiBfYSB9ID0gY29sb3I7XG4gICAgY29uc3QgciA9IF9yIC8gMjU1O1xuICAgIGNvbnN0IGcgPSBfZyAvIDI1NTtcbiAgICBjb25zdCBiID0gX2IgLyAyNTU7XG4gICAgY29uc3QgYSA9IF9hIC8gMjU1O1xuICAgIGNvbnN0IGNtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICBjb25zdCBjbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgY29uc3QgZGVsdGEgPSBjbWF4IC0gY21pbjtcbiAgICBjb25zdCBodWUgPSBoZWxwZXJzXzEuY2FsY3VsYXRlSHVlKGRlbHRhLCBjbWF4LCByLCBnLCBiKTtcbiAgICBjb25zdCBfbGlnaHRuZXNzID0gaGVscGVyc18xLmNhbGN1bGF0ZUxpZ2h0bmVzcyhjbWF4LCBjbWluKTtcbiAgICBjb25zdCBfc2F0dXJhdGlvbiA9IGhlbHBlcnNfMS5jYWxjdWxhdGVTYXR1cmF0aW9uKGRlbHRhLCBfbGlnaHRuZXNzKTtcbiAgICBjb25zdCBsaWdodG5lc3MgPSArKF9saWdodG5lc3MgKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgY29uc3Qgc2F0dXJhdGlvbiA9ICsoX3NhdHVyYXRpb24gKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgcmV0dXJuIGEgPT09IDEgPyBoZWxwZXJzXzEuc3RyaW5nSFNMKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSA6IGhlbHBlcnNfMS5zdHJpbmdIU0xBKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBhKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBoc2xDb252ZXJ0b3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBoc2xDb252ZXJ0b3JfMSA9IHJlcXVpcmUoXCIuL2hzbENvbnZlcnRvclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhzbENvbnZlcnRvcl8xLmRlZmF1bHQ7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG5jb25zdCBoc2xfY29udmVydG9yXzEgPSByZXF1aXJlKFwiLi9oc2wtY29udmVydG9yXCIpO1xuY29uc3QgcGF5bG9hZHNfMSA9IHJlcXVpcmUoXCIuL3BheWxvYWRzXCIpO1xuLy8gRnVuY3Rpb25zIHJlZ2lzdHJhdGlvblxuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJjdXJyZW50RGF0ZVwiLCBoZWxwZXJzXzEuY3VycmVudERhdGUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJnZXRCcmFuZElkXCIsIGhlbHBlcnNfMS5nZXRCcmFuZElkKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiZXhwb3J0ZWRGaWxlTmFtZVwiLCBoZWxwZXJzXzEuZXhwb3J0ZWRGaWxlTmFtZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImhzbENvbnZlcnRvclwiLCBoc2xfY29udmVydG9yXzEuZGVmYXVsdCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImdyb3VwTmFtZUNvbW1lbnRcIiwgaGVscGVyc18xLmdyb3VwTmFtZUNvbW1lbnQpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJmaWx0ZXJUb2tlbnNcIiwgaGVscGVyc18xLmZpbHRlclRva2Vucyk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInByaW50T3V0cHV0XCIsIGhlbHBlcnNfMS5wcmludE91dHB1dCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInN0eWxleEdyb3VwTmFtZVwiLCBoZWxwZXJzXzEuc3R5bGV4R3JvdXBOYW1lKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiam9pbkFycmF5QnlTbGFzaFwiLCBoZWxwZXJzXzEuam9pbkFycmF5QnlTbGFzaCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImdyYWRpZW50QW5nbGVcIiwgaGVscGVyc18xLmdyYWRpZW50QW5nbGUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJzaGFkb3dUb2tlblZhbHVlXCIsIGhlbHBlcnNfMS5zaGFkb3dUb2tlblZhbHVlKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwidG9rZW5OYW1lV2l0aENhdGVnb3J5Rml4RG91Ymxlc1wiLCBoZWxwZXJzXzEudG9rZW5OYW1lV2l0aENhdGVnb3J5Rml4RG91Ymxlcyk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInN0cmluZ2lmeU91dHB1dFwiLCBoZWxwZXJzXzEuc3RyaW5naWZ5T3V0cHV0KTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwibmFtZUZyb21PcmlnaW5cIiwgaGVscGVyc18xLm5hbWVGcm9tT3JpZ2luKTtcbi8vIFBheWxvYWRzXG5QdWxzYXIucmVnaXN0ZXJQYXlsb2FkKFwiY3VycmVudEV4cG9ydGVyVmVyc2lvblwiLCBwYXlsb2Fkc18xLmN1cnJlbnRFeHBvcnRlclZlcnNpb24pO1xuUHVsc2FyLnJlZ2lzdGVyUGF5bG9hZChcImJyYW5kTmFtZXNcIiwgcGF5bG9hZHNfMS5icmFuZE5hbWVzKTtcblB1bHNhci5yZWdpc3RlclBheWxvYWQoXCJiZWhhdmlvclwiLCBwYXlsb2Fkc18xLmJlaGF2aW9yKTtcblB1bHNhci5yZWdpc3RlclBheWxvYWQoXCJzdHlsZXhDYXRlZ29yaWVzXCIsIHBheWxvYWRzXzEuc3R5bGV4Q2F0ZWdvcmllcyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3R5bGV4Q2F0ZWdvcmllcyA9IGV4cG9ydHMuYmVoYXZpb3IgPSBleHBvcnRzLmJyYW5kTmFtZXMgPSBleHBvcnRzLmN1cnJlbnRFeHBvcnRlclZlcnNpb24gPSB2b2lkIDA7XG5jb25zdCBleHBvcnRlcl9qc29uXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwb3J0ZXIuanNvblwiKTtcbmV4cG9ydHMuY3VycmVudEV4cG9ydGVyVmVyc2lvbiA9IGV4cG9ydGVyX2pzb25fMS52ZXJzaW9uO1xuZXhwb3J0cy5icmFuZE5hbWVzID0ge1xuICAgIGNwcERhcms6IFwiQ1BQIERhcmtcIixcbiAgICBjcHA6IFwiQ1BQIExpZ2h0XCIsXG4gICAga29vcERhcms6IFwiS29vcCBEYXJrXCIsXG4gICAga29vcDogXCJLb29wIExpZ2h0XCIsXG4gICAgdmlnbzogXCJWSUdvXCIsXG4gICAga256OiBcIktOWiBMaWdodFwiLFxuICAgIHN1czogXCJTVVMgTGlnaHRcIixcbn07XG5leHBvcnRzLmJlaGF2aW9yID0ge1xuICAgIGNvbG9yVG9rZW5QcmVmaXg6IFwiY29sb3JcIixcbiAgICBib3JkZXJUb2tlblByZWZpeDogXCJib3JkZXJcIixcbiAgICBncmFkaWVudFRva2VuUHJlZml4OiBcImdyYWRpZW50XCIsXG4gICAgbWVhc3VyZVRva2VuUHJlZml4OiBcIm1lYXN1cmVcIixcbiAgICBzaGFkb3dUb2tlblByZWZpeDogXCJzaGFkb3dcIixcbiAgICB0eXBvZ3JhcGh5VG9rZW5QcmVmaXg6IFwidHlwb2dyYXBoeVwiLFxufTtcbmV4cG9ydHMuc3R5bGV4Q2F0ZWdvcmllcyA9IFtcbiAgICBcImNvcmVcIixcbiAgICBcInNlbWFudGljXCIsXG4gICAgXCJjb21wb25lbnRcIlxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=