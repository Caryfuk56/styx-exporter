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

module.exports = JSON.parse("{\"id\":\"ais.exporter stylex\",\"name\":\"STYLEX & CSS ALL THEMES\",\"description\":\"CSS ans Stylex all theme exporter\",\"author\":\"\",\"organization\":\"Ais servis\",\"homepage\":\"\",\"source_dir\":\"src\",\"version\":\"2.0.6\",\"usesBrands\":true,\"config\":{\"sources\":\"sources.json\",\"output\":\"output.json\",\"js\":\"src/js/helpers.js\"},\"engines\":{\"pulsar\":\"1.0.0\",\"supernova\":\"1.0.0\"},\"tags\":[\"CSS\",\"Tokens\",\"Stylex\"],\"usesThemes\":true}");

/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.quotationMarks = exports.nameFromOrigin = exports.shadowTokenValue = exports.gradientAngle = exports.joinArrayBySlash = exports.stylexGroupName = exports.printOutput = exports.filterTokens = exports.groupNameComment = exports.exportedFileName = exports.getBrandId = exports.currentDate = exports.stringifyOutput = void 0;
const hsl_convertor_1 = __webpack_require__(/*! ./hsl-convertor */ "./src/hsl-convertor/index.ts");
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
let printComment = false;
let groupName = "";
/**
 * Generate a group name comment based on the token group.
 *
 * @param tokenGroup - The token group object.
 * @returns The generated group name comment.
 */
exports.groupNameComment = (tokenGroup) => {
    if (!tokenGroup) {
        return "";
    }
    const { name } = tokenGroup;
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
const numberIsUndefined = (value) => {
    return value === undefined || isNaN(value) || value === null;
};
const convertToColorTokenValue = (hex, r, g, b, a) => {
    if (!hex || numberIsUndefined(r) || numberIsUndefined(g) || numberIsUndefined(b) || numberIsUndefined(a)) {
        console.log("ERROR: Missing color values." + ` ${hex} ${r} ${g} ${b} ${a}`);
        return {
            hex: "",
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            referencedToken: null,
        };
    }
    return { hex, r: r, g: g, b: b, a: a, referencedToken: null };
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
    const convertedColor = convertToColorTokenValue(color.hex, color.r, color.g, color.b, color.a);
    // return `${offsetX} ${offsetY} ${blurRadius} ${spreadRadius} #${color.hex}`;
    return `${offsetX} ${offsetY} ${blurRadius} ${spreadRadius} ${hsl_convertor_1.default(convertToColorTokenValue(color.hex, color.r, color.g, color.b, color.a))}`;
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
    const rm = (_c = (_b = token.origin) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.split("/").map((item) => {
        return item
            .split(/\-|\s/g)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("");
    });
    if (prefix) {
        rm === null || rm === void 0 ? void 0 : rm.unshift(prefix);
    }
    const rd = removedDoubles(rm)
        .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
        .join("");
    return rd.charAt(0).toLowerCase() + rd.slice(1);
};
exports.quotationMarks = (value) => {
    if (value.match(/^[0-9]+$/)) {
        return value;
    }
    return `"${value}"`;
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
Pulsar.registerFunction("stringifyOutput", helpers_1.stringifyOutput);
Pulsar.registerFunction("nameFromOrigin", helpers_1.nameFromOrigin);
Pulsar.registerFunction("quotationMarks", helpers_1.quotationMarks);
// Payloads
Pulsar.registerPayload("currentExporterVersion", payloads_1.currentExporterVersion);
Pulsar.registerPayload("brandNames", payloads_1.brandNames);
Pulsar.registerPayload("behavior", payloads_1.behavior);
Pulsar.registerPayload("stylexCategories", payloads_1.stylexCategories);
Pulsar.registerPayload("prefixByType", payloads_1.prefixByType);


/***/ }),

/***/ "./src/payloads.ts":
/*!*************************!*\
  !*** ./src/payloads.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.prefixByType = exports.stylexCategories = exports.behavior = exports.brandNames = exports.currentExporterVersion = void 0;
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
exports.prefixByType = {
    Color: "color",
    Typography: "typography",
    Radius: "radius",
    Font: "font",
    Measure: "measures",
    Shadow: "shadow",
    Border: "border",
    Gradient: "gradient",
    Text: "text",
    GenericToken: "fonts",
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHNsLWNvbnZlcnRvci9oc2xDb252ZXJ0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYXlsb2Fkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLHFEQUFpQjtBQUNqRCxtQkFBbUIsbUJBQU8sQ0FBQyxxQ0FBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxXQUFXLEdBQUcsV0FBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPLEdBQUcsS0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNu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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsNkNBQXFCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnF1b3RhdGlvbk1hcmtzID0gZXhwb3J0cy5uYW1lRnJvbU9yaWdpbiA9IGV4cG9ydHMuc2hhZG93VG9rZW5WYWx1ZSA9IGV4cG9ydHMuZ3JhZGllbnRBbmdsZSA9IGV4cG9ydHMuam9pbkFycmF5QnlTbGFzaCA9IGV4cG9ydHMuc3R5bGV4R3JvdXBOYW1lID0gZXhwb3J0cy5wcmludE91dHB1dCA9IGV4cG9ydHMuZmlsdGVyVG9rZW5zID0gZXhwb3J0cy5ncm91cE5hbWVDb21tZW50ID0gZXhwb3J0cy5leHBvcnRlZEZpbGVOYW1lID0gZXhwb3J0cy5nZXRCcmFuZElkID0gZXhwb3J0cy5jdXJyZW50RGF0ZSA9IGV4cG9ydHMuc3RyaW5naWZ5T3V0cHV0ID0gdm9pZCAwO1xuY29uc3QgaHNsX2NvbnZlcnRvcl8xID0gcmVxdWlyZShcIi4vaHNsLWNvbnZlcnRvclwiKTtcbmNvbnN0IHBheWxvYWRzXzEgPSByZXF1aXJlKFwiLi9wYXlsb2Fkc1wiKTtcbi8qKlxuICogU3RyaW5naWZpZXMgYW4gb2JqZWN0LCByZW1vdmluZyBjaXJjdWxhciByZWZlcmVuY2VzLlxuICpcbiAqIEBwYXJhbSBvYmogLSBUaGUgb2JqZWN0IHRvIHN0cmluZ2lmeS5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmdpZmllZCBvYmplY3QuXG4gKi9cbmV4cG9ydHMuc3RyaW5naWZ5T3V0cHV0ID0gKG9iaikgPT4ge1xuICAgIGxldCBjYWNoZSA9IFtdO1xuICAgIGNvbnN0IHN0ciA9IEpTT04uc3RyaW5naWZ5KG9iaiwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGNhY2hlICYmIGNhY2hlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FjaGUgPT09IG51bGwgfHwgY2FjaGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhY2hlLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KTtcbiAgICBjYWNoZSA9IG51bGw7XG4gICAgcmV0dXJuIHN0cjtcbn07XG4vKipcbiAqIFJldHVybiBjdXJyZW50IHRpbWUgaW4gbG9jYWwgc3RyaW5nXG4gKiBAcmV0dXJucyBUaGUgY3VycmVudCB0aW1lIGluIGxvY2FsIHN0cmluZyBmb3JtYXQuXG4gKi9cbmV4cG9ydHMuY3VycmVudERhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgY29uc3QgdGltZVN0cmluZyA9IGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgcmV0dXJuIGAke2RhdGVTdHJpbmd9ICR7dGltZVN0cmluZ31gO1xufTtcbi8qKlxuICogUmV0dXJuIGlkIG9mIHRoZSB0aGVtZSBhY2NvcmRpbmcgdGhlbWUgbmFtZS5cbiAqXG4gKiBAcGFyYW0gdGhlbWVOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHRoZW1lLlxuICogQHBhcmFtIGJyYW5kcyAtIFRoZSBhcnJheSBvZiBicmFuZCBvYmplY3RzLlxuICogQHJldHVybnMgVGhlIGlkIG9mIHRoZSB0aGVtZS5cbiAqL1xuZXhwb3J0cy5nZXRCcmFuZElkID0gKHRoZW1lTmFtZSwgYnJhbmRzKSA9PiB7XG4gICAgY29uc3QgYnJhbmRPYmplY3QgPSBicmFuZHMuZmlsdGVyKChicmFuZCkgPT4gYnJhbmQubmFtZSA9PT0gdGhlbWVOYW1lKTtcbiAgICBpZiAoYnJhbmRPYmplY3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IGJyYW5kIHdpdGggbmFtZSBcXFwiXCIgKyBcIm5hbWVcIiArIFwiXFxcIiBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBicmFuZE9iamVjdFswXS5pZDtcbn07XG4vKipcbiAqIEdlbmVyYXRlIHRoZSBleHBvcnRlZCBmaWxlIG5hbWUgYmFzZWQgb24gdGhlIHR5cGUgYW5kIGJyYW5kLlxuICpcbiAqIEBwYXJhbSB0eXBlIC0gVGhlIHR5cGUgb2YgdGhlIGZpbGUuXG4gKiBAcGFyYW0gYnJhbmQgLSBUaGUgYnJhbmQgbmFtZS5cbiAqIEByZXR1cm5zIFRoZSBnZW5lcmF0ZWQgZmlsZSBuYW1lLlxuICovXG5leHBvcnRzLmV4cG9ydGVkRmlsZU5hbWUgPSAodHlwZSwgYnJhbmQpID0+IHtcbiAgICBsZXQgZm9sZGVyID0gXCJcIjtcbiAgICBzd2l0Y2ggKGJyYW5kKSB7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLnZpZ286XG4gICAgICAgICAgICBmb2xkZXIgPSBcInZpZ29cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBheWxvYWRzXzEuYnJhbmROYW1lcy5jcHA6XG4gICAgICAgICAgICBmb2xkZXIgPSBcImNwcFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLmtvb3A6XG4gICAgICAgICAgICBmb2xkZXIgPSBcImtvb3BcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLmNwcERhcms6XG4gICAgICAgICAgICBmb2xkZXIgPSBcImNwcC1kYXJrXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBheWxvYWRzXzEuYnJhbmROYW1lcy5rb29wRGFyazpcbiAgICAgICAgICAgIGZvbGRlciA9IFwia29vcC1kYXJrXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBwYXlsb2Fkc18xLmJyYW5kTmFtZXMua256OlxuICAgICAgICAgICAgZm9sZGVyID0gXCJrbnpcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBheWxvYWRzXzEuYnJhbmROYW1lcy5zdXM6XG4gICAgICAgICAgICBmb2xkZXIgPSBcInN1c1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgaGVhZGVyIGNvbW1lbnQgRVJST1I6IGJyYW5kIG5hbWUgXFxcIlwiICsgYnJhbmQgKyBcIlxcXCIgZG9lc24ndCBleGlzdC5cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGAke2ZvbGRlcn0vJHt0eXBlfS5jc3NgO1xufTtcbmxldCBwcmludENvbW1lbnQgPSBmYWxzZTtcbmxldCBncm91cE5hbWUgPSBcIlwiO1xuLyoqXG4gKiBHZW5lcmF0ZSBhIGdyb3VwIG5hbWUgY29tbWVudCBiYXNlZCBvbiB0aGUgdG9rZW4gZ3JvdXAuXG4gKlxuICogQHBhcmFtIHRva2VuR3JvdXAgLSBUaGUgdG9rZW4gZ3JvdXAgb2JqZWN0LlxuICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCBncm91cCBuYW1lIGNvbW1lbnQuXG4gKi9cbmV4cG9ydHMuZ3JvdXBOYW1lQ29tbWVudCA9ICh0b2tlbkdyb3VwKSA9PiB7XG4gICAgaWYgKCF0b2tlbkdyb3VwKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBjb25zdCB7IG5hbWUgfSA9IHRva2VuR3JvdXA7XG4gICAgaWYgKG5hbWUgIT09IGdyb3VwTmFtZSkge1xuICAgICAgICBncm91cE5hbWUgPSBuYW1lO1xuICAgICAgICBwcmludENvbW1lbnQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJpbnRDb21tZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBwcmludENvbW1lbnRcbiAgICAgICAgPyBgLyogLS0tICR7Z3JvdXBOYW1lfSAtLS0gKi9cXG5gIDogXCJcIjtcbn07XG4vKipcbiAqIEZpbHRlciB0b2tlbnMgYmFzZWQgb24gdGhlIG5hbWUuXG4gKlxuICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSB0byBmaWx0ZXIgYnkuXG4gKiBAcGFyYW0gdG9rZW5zIC0gVGhlIGFycmF5IG9mIHRva2Vucy5cbiAqIEByZXR1cm5zIFRoZSBmaWx0ZXJlZCBhcnJheSBvZiB0b2tlbnMuXG4gKi9cbmV4cG9ydHMuZmlsdGVyVG9rZW5zID0gKG5hbWUsIHRva2VucykgPT4ge1xuICAgIHJldHVybiB0b2tlbnMuZmlsdGVyKCh0b2tlbikgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICgoX2EgPSB0b2tlbi5vcmlnaW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW4ub3JpZ2luLm5hbWUuaW5jbHVkZXMobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiQ2h5YmFcIjtcbiAgICB9KTtcbn07XG4vKipcbiAqIFByaW50IHRoZSBvdXRwdXQgZGF0YSB0byB0aGUgY29uc29sZS5cbiAqXG4gKiBAcGFyYW0gZGF0YSAtIFRoZSBkYXRhIHRvIHByaW50LlxuICovXG5leHBvcnRzLnByaW50T3V0cHV0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhleHBvcnRzLnN0cmluZ2lmeU91dHB1dChkYXRhKSk7XG59O1xuLyoqXG4gKiBHZW5lcmF0ZSBhIGdyb3VwIG5hbWUgZm9yIHN0eWxleCBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0gbmFtZXMgLSBUaGUgc3RyaW5ncyB0byBnZW5lcmF0ZSB0aGUgZ3JvdXAgbmFtZSBmcm9tLlxuICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCBncm91cCBuYW1lLlxuICovXG5leHBvcnRzLnN0eWxleEdyb3VwTmFtZSA9ICguLi5uYW1lcykgPT4ge1xuICAgIHJldHVybiBuYW1lc1xuICAgICAgICAuam9pbihcIiBcIilcbiAgICAgICAgLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aMC05XSsoLikvZywgKG0sIGNocikgPT4gY2hyLnRvVXBwZXJDYXNlKCkpO1xufTtcbi8qKlxuICogSm9pbiBhcnJheSBvZiBzdHJpbmdzIHdpdGggc2xhc2guXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBzdHJBcnIgLSBhcnJheSBvZiBzdHJpbmdzXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIGpvaW5lZCBzdHJpbmcgd2l0aCBzbGFzaFxuICovXG5leHBvcnRzLmpvaW5BcnJheUJ5U2xhc2ggPSAoc3RyQXJyKSA9PiB7XG4gICAgcmV0dXJuIHN0ckFyci5qb2luKFwiIC8gXCIpO1xufTtcbi8qKlxuICogQ2FsY3VsYXRlIGFuZ2xlIG9mIGdyYWRpZW50IGluIGRlZ3JlZXMgezAsIDM2MH1cbiAqIEBwYXJhbSB7VmVjdG9yMn0gZnJvbSAtIEdyYWRpZW50IHN0YXJ0IHBvaW50XG4gKiBAcGFyYW0ge1ZlY3RvcjJ9IHRvIC0gR3JhZGllbnQgZW5kIHBvaW50XG4gKiBAcmV0dXJucyB7bnVtYmVyfSAtIEFuZ2xlIG9mIGdyYWRpZW50IGluIGRlZ3JlZXMgezAsIDM2MH1cbiAqL1xuZXhwb3J0cy5ncmFkaWVudEFuZ2xlID0gKGZyb20sIHRvKSA9PiB7XG4gICAgaWYgKCFmcm9tIHx8ICF0bykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBNaXNzaW5nIGdyYWRpZW50IHBvaW50cy5cIik7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCBkZWx0YVggPSB0by54IC0gZnJvbS54O1xuICAgIGNvbnN0IGRlbHRhWSA9IHRvLnkgLSBmcm9tLnk7XG4gICAgY29uc3QgcmFkaWFucyA9IE1hdGguYXRhbjIoZGVsdGFZLCBkZWx0YVgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IChyYWRpYW5zICogMTgwKSAvIE1hdGguUEk7XG4gICAgY29uc3QgZml4ZWRSZXN1bHQgPSByZXN1bHQgKyA5MDtcbiAgICByZXR1cm4gKGZpeGVkUmVzdWx0IDwgMCA/IGZpeGVkUmVzdWx0ICsgMzYwIDogZml4ZWRSZXN1bHQpICUgMzYwO1xufTtcbmNvbnN0IGdldFZhbHVlV2l0aENvcnJlY3RVbml0ID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiBgJHt2YWx1ZX1gO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dmFsdWV9cHhgO1xufTtcbmNvbnN0IG5vbk5lZ2F0aXZlVmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gdmFsdWUgPCAwID8gMCA6IHZhbHVlO1xufTtcbmNvbnN0IG51bWJlcklzVW5kZWZpbmVkID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgfHwgaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBudWxsO1xufTtcbmNvbnN0IGNvbnZlcnRUb0NvbG9yVG9rZW5WYWx1ZSA9IChoZXgsIHIsIGcsIGIsIGEpID0+IHtcbiAgICBpZiAoIWhleCB8fCBudW1iZXJJc1VuZGVmaW5lZChyKSB8fCBudW1iZXJJc1VuZGVmaW5lZChnKSB8fCBudW1iZXJJc1VuZGVmaW5lZChiKSB8fCBudW1iZXJJc1VuZGVmaW5lZChhKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBNaXNzaW5nIGNvbG9yIHZhbHVlcy5cIiArIGAgJHtoZXh9ICR7cn0gJHtnfSAke2J9ICR7YX1gKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhleDogXCJcIixcbiAgICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgICBnOiAwLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGE6IDAsXG4gICAgICAgICAgICByZWZlcmVuY2VkVG9rZW46IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IGhleCwgcjogciwgZzogZywgYjogYiwgYTogYSwgcmVmZXJlbmNlZFRva2VuOiBudWxsIH07XG59O1xuLyoqXG4gKiBDYWxjdWxhdGUgY3NzIHZhbHVlIG9mIGZvciBzaGFkb3cgdG9rZW5zLlxuICogQHBhcmFtIHtUb2tlbn0gdG9rZW4gLSBUb2tlbiBvYmplY3RcbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gVG9rZW4gdmFsdWUgaW4gZm9ybWF0IHtvZmZzZXRYfSB7b2Zmc2V0WX0ge2JsdXJSYWRpdXN9IHtzcHJlYWRSYWRpdXN9ICN7Y29sb3IuaGV4fVxuICovXG5leHBvcnRzLnNoYWRvd1Rva2VuVmFsdWUgPSAodG9rZW4pID0+IHtcbiAgICBjb25zdCB7IGNvbG9yLCB4LCB5LCByYWRpdXMsIHNwcmVhZCB9ID0gdG9rZW4udmFsdWU7XG4gICAgY29uc3QgYmx1clJhZGl1cyA9IGdldFZhbHVlV2l0aENvcnJlY3RVbml0KG5vbk5lZ2F0aXZlVmFsdWUocmFkaXVzLm1lYXN1cmUpKTtcbiAgICBjb25zdCBvZmZzZXRYID0gZ2V0VmFsdWVXaXRoQ29ycmVjdFVuaXQoeC5tZWFzdXJlKTtcbiAgICBjb25zdCBvZmZzZXRZID0gZ2V0VmFsdWVXaXRoQ29ycmVjdFVuaXQoeS5tZWFzdXJlKTtcbiAgICBjb25zdCBzcHJlYWRSYWRpdXMgPSBnZXRWYWx1ZVdpdGhDb3JyZWN0VW5pdChzcHJlYWQubWVhc3VyZSk7XG4gICAgY29uc3QgY29udmVydGVkQ29sb3IgPSBjb252ZXJ0VG9Db2xvclRva2VuVmFsdWUoY29sb3IuaGV4LCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iLCBjb2xvci5hKTtcbiAgICAvLyByZXR1cm4gYCR7b2Zmc2V0WH0gJHtvZmZzZXRZfSAke2JsdXJSYWRpdXN9ICR7c3ByZWFkUmFkaXVzfSAjJHtjb2xvci5oZXh9YDtcbiAgICByZXR1cm4gYCR7b2Zmc2V0WH0gJHtvZmZzZXRZfSAke2JsdXJSYWRpdXN9ICR7c3ByZWFkUmFkaXVzfSAke2hzbF9jb252ZXJ0b3JfMS5kZWZhdWx0KGNvbnZlcnRUb0NvbG9yVG9rZW5WYWx1ZShjb2xvci5oZXgsIGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIsIGNvbG9yLmEpKX1gO1xufTtcbmNvbnN0IHJlbW92ZWREb3VibGVzID0gKHN0cmluZ0FycikgPT4ge1xuICAgIGlmICghc3RyaW5nQXJyKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZ0FyciA9PT0gbnVsbCB8fCBzdHJpbmdBcnIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0cmluZ0Fyci5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxvd2VyY2FzZWRJdGVtID0gaXRlbS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gaW5kZXggPT09IHN0cmluZ0Fyci5maW5kSW5kZXgoKHdvcmQpID0+IHdvcmQudG9Mb3dlckNhc2UoKSA9PT0gbG93ZXJjYXNlZEl0ZW0pO1xuICAgIH0pO1xufTtcbi8qKlxuICogQ3JlYXRlIG5hbWUgb2YgdGhlIHRva2VuIGZyb20gb3JpZ2luIG5hbWUuXG4gKiBAcGFyYW0ge1Rva2VufSB0b2tlbiAtIFRva2VuIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggLSBQcmVmaXggZm9yIHRoZSBuYW1lIHBsYWNlZCBiZWZvcmUgdGhlIG9yaWdpbiBuYW1lLlxuICogQHJldHVybnMge3N0cmluZ30gLSBOYW1lIG9mIHRoZSB0b2tlbiBpbiBmb3JtYXQge3ByZWZpeH17b3JpZ2luTmFtZX1cbiAqL1xuZXhwb3J0cy5uYW1lRnJvbU9yaWdpbiA9ICh0b2tlbiwgcHJlZml4KSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgaWYgKCEoKF9hID0gdG9rZW4ub3JpZ2luKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IHJtID0gKF9jID0gKF9iID0gdG9rZW4ub3JpZ2luKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubmFtZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNwbGl0KFwiL1wiKS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgICAgIC5zcGxpdCgvXFwtfFxccy9nKVxuICAgICAgICAgICAgLm1hcCgod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXG4gICAgICAgICAgICAuam9pbihcIlwiKTtcbiAgICB9KTtcbiAgICBpZiAocHJlZml4KSB7XG4gICAgICAgIHJtID09PSBudWxsIHx8IHJtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBybS51bnNoaWZ0KHByZWZpeCk7XG4gICAgfVxuICAgIGNvbnN0IHJkID0gcmVtb3ZlZERvdWJsZXMocm0pXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpdGVtLnNsaWNlKDEpKVxuICAgICAgICAuam9pbihcIlwiKTtcbiAgICByZXR1cm4gcmQuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyByZC5zbGljZSgxKTtcbn07XG5leHBvcnRzLnF1b3RhdGlvbk1hcmtzID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlLm1hdGNoKC9eWzAtOV0rJC8pKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGBcIiR7dmFsdWV9XCJgO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdHJpbmdIU0xBID0gZXhwb3J0cy5zdHJpbmdIU0wgPSBleHBvcnRzLmNhbGN1bGF0ZVNhdHVyYXRpb24gPSBleHBvcnRzLmNhbGN1bGF0ZUxpZ2h0bmVzcyA9IGV4cG9ydHMuY2FsY3VsYXRlSHVlID0gdm9pZCAwO1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBodWUgdmFsdWUgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0gZGVsdGEgLSBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBtYXhpbXVtIGFuZCBtaW5pbXVtIGNvbG9yIHZhbHVlcy5cbiAqIEBwYXJhbSBjbWF4IC0gVGhlIG1heGltdW0gY29sb3IgdmFsdWUuXG4gKiBAcGFyYW0gciAtIFRoZSByZWQgY29sb3IgdmFsdWUuXG4gKiBAcGFyYW0gZyAtIFRoZSBncmVlbiBjb2xvciB2YWx1ZS5cbiAqIEBwYXJhbSBiIC0gVGhlIGJsdWUgY29sb3IgdmFsdWUuXG4gKiBAcmV0dXJucyBUaGUgY2FsY3VsYXRlZCBodWUgdmFsdWUuXG4gKi9cbmV4cG9ydHMuY2FsY3VsYXRlSHVlID0gKGRlbHRhLCBjbWF4LCByLCBnLCBiKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgaWYgKGRlbHRhID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoY21heCA9PT0gcikge1xuICAgICAgICByZXN1bHQgPSAoKGcgLSBiKSAvIGRlbHRhKSAlIDY7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNtYXggPT09IGcpIHtcbiAgICAgICAgcmVzdWx0ID0gKGIgLSByKSAvIGRlbHRhICsgMjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY21heCA9PT0gYikge1xuICAgICAgICByZXN1bHQgPSAociAtIGcpIC8gZGVsdGEgKyA0O1xuICAgIH1cbiAgICBjb25zdCByb3VuZGVkID0gTWF0aC5yb3VuZChyZXN1bHQgKiA2MCk7XG4gICAgaWYgKHJvdW5kZWQgPCAwKSB7XG4gICAgICAgIHJldHVybiByb3VuZGVkICsgMzYwO1xuICAgIH1cbiAgICByZXR1cm4gcm91bmRlZDtcbn07XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxpZ2h0bmVzcyB2YWx1ZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cbiAqIEBwYXJhbSBjbWF4IC0gVGhlIG1heGltdW0gY29sb3IgdmFsdWUuXG4gKiBAcGFyYW0gY21pbiAtIFRoZSBtaW5pbXVtIGNvbG9yIHZhbHVlLlxuICogQHJldHVybnMgVGhlIGNhbGN1bGF0ZWQgbGlnaHRuZXNzIHZhbHVlLlxuICovXG5leHBvcnRzLmNhbGN1bGF0ZUxpZ2h0bmVzcyA9IChjbWF4LCBjbWluKSA9PiB7XG4gICAgcmV0dXJuIChjbWF4ICsgY21pbikgLyAyO1xufTtcbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc2F0dXJhdGlvbiB2YWx1ZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cbiAqIEBwYXJhbSBkZWx0YSAtIFRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIG1heGltdW0gYW5kIG1pbmltdW0gY29sb3IgdmFsdWVzLlxuICogQHBhcmFtIGxpZ2h0bmVzcyAtIFRoZSBsaWdodG5lc3MgdmFsdWUuXG4gKiBAcmV0dXJucyBUaGUgY2FsY3VsYXRlZCBzYXR1cmF0aW9uIHZhbHVlLlxuICovXG5leHBvcnRzLmNhbGN1bGF0ZVNhdHVyYXRpb24gPSAoZGVsdGEsIGxpZ2h0bmVzcykgPT4ge1xuICAgIHJldHVybiBkZWx0YSA9PT0gMCA/IDAgOiBkZWx0YSAvICgxIC0gTWF0aC5hYnMoMiAqIGxpZ2h0bmVzcyAtIDEpKTtcbn07XG4vKipcbiAqIENvbnZlcnRzIHRoZSBIU0wgdmFsdWVzIHRvIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxuICogQHBhcmFtIGh1ZSAtIFRoZSBodWUgdmFsdWUuXG4gKiBAcGFyYW0gc2F0dXJhdGlvbiAtIFRoZSBzYXR1cmF0aW9uIHZhbHVlLlxuICogQHBhcmFtIGxpZ2h0bmVzcyAtIFRoZSBsaWdodG5lc3MgdmFsdWUuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBIU0wgdmFsdWVzLlxuICovXG5leHBvcnRzLnN0cmluZ0hTTCA9IChodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgPT4ge1xuICAgIHJldHVybiBgaHNsKCR7aHVlfSwgJHtNYXRoLnJvdW5kKHNhdHVyYXRpb24pfSUsICR7TWF0aC5yb3VuZChsaWdodG5lc3MpfSUpYDtcbn07XG4vKipcbiAqIENvbnZlcnRzIHRoZSBIU0xBIHZhbHVlcyB0byBhIHN0cmluZyByZXByZXNlbnRhdGlvbi5cbiAqIEBwYXJhbSBodWUgLSBUaGUgaHVlIHZhbHVlLlxuICogQHBhcmFtIHNhdHVyYXRpb24gLSBUaGUgc2F0dXJhdGlvbiB2YWx1ZS5cbiAqIEBwYXJhbSBsaWdodG5lc3MgLSBUaGUgbGlnaHRuZXNzIHZhbHVlLlxuICogQHBhcmFtIGFscGhhIC0gVGhlIGFscGhhIHZhbHVlLlxuICogQHJldHVybnMgVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgSFNMQSB2YWx1ZXMuXG4gKi9cbmV4cG9ydHMuc3RyaW5nSFNMQSA9IChodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYWxwaGEpID0+IHtcbiAgICByZXR1cm4gYGhzbGEoJHtodWV9LCAke01hdGgucm91bmQoc2F0dXJhdGlvbil9JSwgJHtNYXRoLnJvdW5kKGxpZ2h0bmVzcyl9JSwgJHtNYXRoLnJvdW5kKGFscGhhICogMTApIC8gMTB9KWA7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIG9iamVjdCB0byBhbiBIU0wgb3IgSFNMQSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXG4gKlxuICogQHBhcmFtIHtDb2xvclRva2VuVmFsdWV9IGNvbG9yIC0gVGhlIGNvbG9yIG9iamVjdCB0byBjb252ZXJ0LlxuICogQHJldHVybnMgVGhlIEhTTCBvciBIU0xBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29sb3IuXG4gKi9cbmNvbnN0IGhzbENvbnZlcnRvciA9IChjb2xvcikgPT4ge1xuICAgIGNvbnN0IHsgcjogX3IsIGc6IF9nLCBiOiBfYiwgYTogX2EgfSA9IGNvbG9yO1xuICAgIGNvbnN0IHIgPSBfciAvIDI1NTtcbiAgICBjb25zdCBnID0gX2cgLyAyNTU7XG4gICAgY29uc3QgYiA9IF9iIC8gMjU1O1xuICAgIGNvbnN0IGEgPSBfYSAvIDI1NTtcbiAgICBjb25zdCBjbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgY29uc3QgY21heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgIGNvbnN0IGRlbHRhID0gY21heCAtIGNtaW47XG4gICAgY29uc3QgaHVlID0gaGVscGVyc18xLmNhbGN1bGF0ZUh1ZShkZWx0YSwgY21heCwgciwgZywgYik7XG4gICAgY29uc3QgX2xpZ2h0bmVzcyA9IGhlbHBlcnNfMS5jYWxjdWxhdGVMaWdodG5lc3MoY21heCwgY21pbik7XG4gICAgY29uc3QgX3NhdHVyYXRpb24gPSBoZWxwZXJzXzEuY2FsY3VsYXRlU2F0dXJhdGlvbihkZWx0YSwgX2xpZ2h0bmVzcyk7XG4gICAgY29uc3QgbGlnaHRuZXNzID0gKyhfbGlnaHRuZXNzICogMTAwKS50b0ZpeGVkKDEpO1xuICAgIGNvbnN0IHNhdHVyYXRpb24gPSArKF9zYXR1cmF0aW9uICogMTAwKS50b0ZpeGVkKDEpO1xuICAgIHJldHVybiBhID09PSAxID8gaGVscGVyc18xLnN0cmluZ0hTTChodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgOiBoZWxwZXJzXzEuc3RyaW5nSFNMQShodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gaHNsQ29udmVydG9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaHNsQ29udmVydG9yXzEgPSByZXF1aXJlKFwiLi9oc2xDb252ZXJ0b3JcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBoc2xDb252ZXJ0b3JfMS5kZWZhdWx0OyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xuY29uc3QgaHNsX2NvbnZlcnRvcl8xID0gcmVxdWlyZShcIi4vaHNsLWNvbnZlcnRvclwiKTtcbmNvbnN0IHBheWxvYWRzXzEgPSByZXF1aXJlKFwiLi9wYXlsb2Fkc1wiKTtcbi8vIEZ1bmN0aW9ucyByZWdpc3RyYXRpb25cblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiY3VycmVudERhdGVcIiwgaGVscGVyc18xLmN1cnJlbnREYXRlKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiZ2V0QnJhbmRJZFwiLCBoZWxwZXJzXzEuZ2V0QnJhbmRJZCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImV4cG9ydGVkRmlsZU5hbWVcIiwgaGVscGVyc18xLmV4cG9ydGVkRmlsZU5hbWUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJoc2xDb252ZXJ0b3JcIiwgaHNsX2NvbnZlcnRvcl8xLmRlZmF1bHQpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJncm91cE5hbWVDb21tZW50XCIsIGhlbHBlcnNfMS5ncm91cE5hbWVDb21tZW50KTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiZmlsdGVyVG9rZW5zXCIsIGhlbHBlcnNfMS5maWx0ZXJUb2tlbnMpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJwcmludE91dHB1dFwiLCBoZWxwZXJzXzEucHJpbnRPdXRwdXQpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJzdHlsZXhHcm91cE5hbWVcIiwgaGVscGVyc18xLnN0eWxleEdyb3VwTmFtZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImpvaW5BcnJheUJ5U2xhc2hcIiwgaGVscGVyc18xLmpvaW5BcnJheUJ5U2xhc2gpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJncmFkaWVudEFuZ2xlXCIsIGhlbHBlcnNfMS5ncmFkaWVudEFuZ2xlKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwic2hhZG93VG9rZW5WYWx1ZVwiLCBoZWxwZXJzXzEuc2hhZG93VG9rZW5WYWx1ZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInN0cmluZ2lmeU91dHB1dFwiLCBoZWxwZXJzXzEuc3RyaW5naWZ5T3V0cHV0KTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwibmFtZUZyb21PcmlnaW5cIiwgaGVscGVyc18xLm5hbWVGcm9tT3JpZ2luKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwicXVvdGF0aW9uTWFya3NcIiwgaGVscGVyc18xLnF1b3RhdGlvbk1hcmtzKTtcbi8vIFBheWxvYWRzXG5QdWxzYXIucmVnaXN0ZXJQYXlsb2FkKFwiY3VycmVudEV4cG9ydGVyVmVyc2lvblwiLCBwYXlsb2Fkc18xLmN1cnJlbnRFeHBvcnRlclZlcnNpb24pO1xuUHVsc2FyLnJlZ2lzdGVyUGF5bG9hZChcImJyYW5kTmFtZXNcIiwgcGF5bG9hZHNfMS5icmFuZE5hbWVzKTtcblB1bHNhci5yZWdpc3RlclBheWxvYWQoXCJiZWhhdmlvclwiLCBwYXlsb2Fkc18xLmJlaGF2aW9yKTtcblB1bHNhci5yZWdpc3RlclBheWxvYWQoXCJzdHlsZXhDYXRlZ29yaWVzXCIsIHBheWxvYWRzXzEuc3R5bGV4Q2F0ZWdvcmllcyk7XG5QdWxzYXIucmVnaXN0ZXJQYXlsb2FkKFwicHJlZml4QnlUeXBlXCIsIHBheWxvYWRzXzEucHJlZml4QnlUeXBlKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wcmVmaXhCeVR5cGUgPSBleHBvcnRzLnN0eWxleENhdGVnb3JpZXMgPSBleHBvcnRzLmJlaGF2aW9yID0gZXhwb3J0cy5icmFuZE5hbWVzID0gZXhwb3J0cy5jdXJyZW50RXhwb3J0ZXJWZXJzaW9uID0gdm9pZCAwO1xuY29uc3QgZXhwb3J0ZXJfanNvbl8xID0gcmVxdWlyZShcIi4uLy4uL2V4cG9ydGVyLmpzb25cIik7XG5leHBvcnRzLmN1cnJlbnRFeHBvcnRlclZlcnNpb24gPSBleHBvcnRlcl9qc29uXzEudmVyc2lvbjtcbmV4cG9ydHMuYnJhbmROYW1lcyA9IHtcbiAgICBjcHBEYXJrOiBcIkNQUCBEYXJrXCIsXG4gICAgY3BwOiBcIkNQUCBMaWdodFwiLFxuICAgIGtvb3BEYXJrOiBcIktvb3AgRGFya1wiLFxuICAgIGtvb3A6IFwiS29vcCBMaWdodFwiLFxuICAgIHZpZ286IFwiVklHb1wiLFxuICAgIGtuejogXCJLTlogTGlnaHRcIixcbiAgICBzdXM6IFwiU1VTIExpZ2h0XCIsXG59O1xuZXhwb3J0cy5iZWhhdmlvciA9IHtcbiAgICBjb2xvclRva2VuUHJlZml4OiBcImNvbG9yXCIsXG4gICAgYm9yZGVyVG9rZW5QcmVmaXg6IFwiYm9yZGVyXCIsXG4gICAgZ3JhZGllbnRUb2tlblByZWZpeDogXCJncmFkaWVudFwiLFxuICAgIG1lYXN1cmVUb2tlblByZWZpeDogXCJtZWFzdXJlXCIsXG4gICAgc2hhZG93VG9rZW5QcmVmaXg6IFwic2hhZG93XCIsXG4gICAgdHlwb2dyYXBoeVRva2VuUHJlZml4OiBcInR5cG9ncmFwaHlcIixcbn07XG5leHBvcnRzLnN0eWxleENhdGVnb3JpZXMgPSBbXG4gICAgXCJjb3JlXCIsXG4gICAgXCJzZW1hbnRpY1wiLFxuICAgIFwiY29tcG9uZW50XCJcbl07XG5leHBvcnRzLnByZWZpeEJ5VHlwZSA9IHtcbiAgICBDb2xvcjogXCJjb2xvclwiLFxuICAgIFR5cG9ncmFwaHk6IFwidHlwb2dyYXBoeVwiLFxuICAgIFJhZGl1czogXCJyYWRpdXNcIixcbiAgICBGb250OiBcImZvbnRcIixcbiAgICBNZWFzdXJlOiBcIm1lYXN1cmVzXCIsXG4gICAgU2hhZG93OiBcInNoYWRvd1wiLFxuICAgIEJvcmRlcjogXCJib3JkZXJcIixcbiAgICBHcmFkaWVudDogXCJncmFkaWVudFwiLFxuICAgIFRleHQ6IFwidGV4dFwiLFxuICAgIEdlbmVyaWNUb2tlbjogXCJmb250c1wiLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=