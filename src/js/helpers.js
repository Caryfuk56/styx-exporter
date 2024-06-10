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

module.exports = JSON.parse("{\"id\":\"ais.exporter stylex\",\"name\":\"STYLEX & CSS ALL THEMES\",\"description\":\"CSS ans Stylex all theme exporter\",\"author\":\"\",\"organization\":\"Ais servis\",\"homepage\":\"\",\"source_dir\":\"src\",\"version\":\"2.0.4\",\"usesBrands\":true,\"config\":{\"sources\":\"sources.json\",\"output\":\"output.json\",\"js\":\"src/js/helpers.js\"},\"engines\":{\"pulsar\":\"1.0.0\",\"supernova\":\"1.0.0\"},\"tags\":[\"CSS\",\"Tokens\",\"Stylex\"],\"usesThemes\":true}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHNsLWNvbnZlcnRvci9oc2xDb252ZXJ0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYXlsb2Fkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLHFEQUFpQjtBQUNqRCxtQkFBbUIsbUJBQU8sQ0FBQyxxQ0FBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxXQUFXLEdBQUcsV0FBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPLEdBQUcsS0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNu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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDZDQUFxQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImhlbHBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5xdW90YXRpb25NYXJrcyA9IGV4cG9ydHMubmFtZUZyb21PcmlnaW4gPSBleHBvcnRzLnNoYWRvd1Rva2VuVmFsdWUgPSBleHBvcnRzLmdyYWRpZW50QW5nbGUgPSBleHBvcnRzLmpvaW5BcnJheUJ5U2xhc2ggPSBleHBvcnRzLnN0eWxleEdyb3VwTmFtZSA9IGV4cG9ydHMucHJpbnRPdXRwdXQgPSBleHBvcnRzLmZpbHRlclRva2VucyA9IGV4cG9ydHMuZ3JvdXBOYW1lQ29tbWVudCA9IGV4cG9ydHMuZXhwb3J0ZWRGaWxlTmFtZSA9IGV4cG9ydHMuZ2V0QnJhbmRJZCA9IGV4cG9ydHMuY3VycmVudERhdGUgPSBleHBvcnRzLnN0cmluZ2lmeU91dHB1dCA9IHZvaWQgMDtcbmNvbnN0IGhzbF9jb252ZXJ0b3JfMSA9IHJlcXVpcmUoXCIuL2hzbC1jb252ZXJ0b3JcIik7XG5jb25zdCBwYXlsb2Fkc18xID0gcmVxdWlyZShcIi4vcGF5bG9hZHNcIik7XG4vKipcbiAqIFN0cmluZ2lmaWVzIGFuIG9iamVjdCwgcmVtb3ZpbmcgY2lyY3VsYXIgcmVmZXJlbmNlcy5cbiAqXG4gKiBAcGFyYW0gb2JqIC0gVGhlIG9iamVjdCB0byBzdHJpbmdpZnkuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5naWZpZWQgb2JqZWN0LlxuICovXG5leHBvcnRzLnN0cmluZ2lmeU91dHB1dCA9IChvYmopID0+IHtcbiAgICBsZXQgY2FjaGUgPSBbXTtcbiAgICBjb25zdCBzdHIgPSBKU09OLnN0cmluZ2lmeShvYmosIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjYWNoZSAmJiBjYWNoZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhY2hlID09PSBudWxsIHx8IGNhY2hlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYWNoZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSk7XG4gICAgY2FjaGUgPSBudWxsO1xuICAgIHJldHVybiBzdHI7XG59O1xuLyoqXG4gKiBSZXR1cm4gY3VycmVudCB0aW1lIGluIGxvY2FsIHN0cmluZ1xuICogQHJldHVybnMgVGhlIGN1cnJlbnQgdGltZSBpbiBsb2NhbCBzdHJpbmcgZm9ybWF0LlxuICovXG5leHBvcnRzLmN1cnJlbnREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIGNvbnN0IHRpbWVTdHJpbmcgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIHJldHVybiBgJHtkYXRlU3RyaW5nfSAke3RpbWVTdHJpbmd9YDtcbn07XG4vKipcbiAqIFJldHVybiBpZCBvZiB0aGUgdGhlbWUgYWNjb3JkaW5nIHRoZW1lIG5hbWUuXG4gKlxuICogQHBhcmFtIHRoZW1lTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSB0aGVtZS5cbiAqIEBwYXJhbSBicmFuZHMgLSBUaGUgYXJyYXkgb2YgYnJhbmQgb2JqZWN0cy5cbiAqIEByZXR1cm5zIFRoZSBpZCBvZiB0aGUgdGhlbWUuXG4gKi9cbmV4cG9ydHMuZ2V0QnJhbmRJZCA9ICh0aGVtZU5hbWUsIGJyYW5kcykgPT4ge1xuICAgIGNvbnN0IGJyYW5kT2JqZWN0ID0gYnJhbmRzLmZpbHRlcigoYnJhbmQpID0+IGJyYW5kLm5hbWUgPT09IHRoZW1lTmFtZSk7XG4gICAgaWYgKGJyYW5kT2JqZWN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBicmFuZCB3aXRoIG5hbWUgXFxcIlwiICsgXCJuYW1lXCIgKyBcIlxcXCIgZG9lc24ndCBleGlzdC5cIik7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gYnJhbmRPYmplY3RbMF0uaWQ7XG59O1xuLyoqXG4gKiBHZW5lcmF0ZSB0aGUgZXhwb3J0ZWQgZmlsZSBuYW1lIGJhc2VkIG9uIHRoZSB0eXBlIGFuZCBicmFuZC5cbiAqXG4gKiBAcGFyYW0gdHlwZSAtIFRoZSB0eXBlIG9mIHRoZSBmaWxlLlxuICogQHBhcmFtIGJyYW5kIC0gVGhlIGJyYW5kIG5hbWUuXG4gKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIGZpbGUgbmFtZS5cbiAqL1xuZXhwb3J0cy5leHBvcnRlZEZpbGVOYW1lID0gKHR5cGUsIGJyYW5kKSA9PiB7XG4gICAgbGV0IGZvbGRlciA9IFwiXCI7XG4gICAgc3dpdGNoIChicmFuZCkge1xuICAgICAgICBjYXNlIHBheWxvYWRzXzEuYnJhbmROYW1lcy52aWdvOlxuICAgICAgICAgICAgZm9sZGVyID0gXCJ2aWdvXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBwYXlsb2Fkc18xLmJyYW5kTmFtZXMuY3BwOlxuICAgICAgICAgICAgZm9sZGVyID0gXCJjcHBcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBheWxvYWRzXzEuYnJhbmROYW1lcy5rb29wOlxuICAgICAgICAgICAgZm9sZGVyID0gXCJrb29wXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBheWxvYWRzXzEuYnJhbmROYW1lcy5jcHBEYXJrOlxuICAgICAgICAgICAgZm9sZGVyID0gXCJjcHAtZGFya1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBwYXlsb2Fkc18xLmJyYW5kTmFtZXMua29vcERhcms6XG4gICAgICAgICAgICBmb2xkZXIgPSBcImtvb3AtZGFya1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLmtuejpcbiAgICAgICAgICAgIGZvbGRlciA9IFwia256XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBwYXlsb2Fkc18xLmJyYW5kTmFtZXMuc3VzOlxuICAgICAgICAgICAgZm9sZGVyID0gXCJzdXNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGhlYWRlciBjb21tZW50IEVSUk9SOiBicmFuZCBuYW1lIFxcXCJcIiArIGJyYW5kICsgXCJcXFwiIGRvZXNuJ3QgZXhpc3QuXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBgJHtmb2xkZXJ9LyR7dHlwZX0uY3NzYDtcbn07XG5sZXQgcHJpbnRDb21tZW50ID0gZmFsc2U7XG5sZXQgZ3JvdXBOYW1lID0gXCJcIjtcbi8qKlxuICogR2VuZXJhdGUgYSBncm91cCBuYW1lIGNvbW1lbnQgYmFzZWQgb24gdGhlIHRva2VuIGdyb3VwLlxuICpcbiAqIEBwYXJhbSB0b2tlbkdyb3VwIC0gVGhlIHRva2VuIGdyb3VwIG9iamVjdC5cbiAqIEByZXR1cm5zIFRoZSBnZW5lcmF0ZWQgZ3JvdXAgbmFtZSBjb21tZW50LlxuICovXG5leHBvcnRzLmdyb3VwTmFtZUNvbW1lbnQgPSAodG9rZW5Hcm91cCkgPT4ge1xuICAgIGlmICghdG9rZW5Hcm91cCkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0b2tlbkdyb3VwO1xuICAgIGlmIChuYW1lICE9PSBncm91cE5hbWUpIHtcbiAgICAgICAgZ3JvdXBOYW1lID0gbmFtZTtcbiAgICAgICAgcHJpbnRDb21tZW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByaW50Q29tbWVudCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcHJpbnRDb21tZW50XG4gICAgICAgID8gYC8qIC0tLSAke2dyb3VwTmFtZX0gLS0tICovXFxuYCA6IFwiXCI7XG59O1xuLyoqXG4gKiBGaWx0ZXIgdG9rZW5zIGJhc2VkIG9uIHRoZSBuYW1lLlxuICpcbiAqIEBwYXJhbSBuYW1lIC0gVGhlIG5hbWUgdG8gZmlsdGVyIGJ5LlxuICogQHBhcmFtIHRva2VucyAtIFRoZSBhcnJheSBvZiB0b2tlbnMuXG4gKiBAcmV0dXJucyBUaGUgZmlsdGVyZWQgYXJyYXkgb2YgdG9rZW5zLlxuICovXG5leHBvcnRzLmZpbHRlclRva2VucyA9IChuYW1lLCB0b2tlbnMpID0+IHtcbiAgICByZXR1cm4gdG9rZW5zLmZpbHRlcigodG9rZW4pID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoKF9hID0gdG9rZW4ub3JpZ2luKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuLm9yaWdpbi5uYW1lLmluY2x1ZGVzKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIkNoeWJhXCI7XG4gICAgfSk7XG59O1xuLyoqXG4gKiBQcmludCB0aGUgb3V0cHV0IGRhdGEgdG8gdGhlIGNvbnNvbGUuXG4gKlxuICogQHBhcmFtIGRhdGEgLSBUaGUgZGF0YSB0byBwcmludC5cbiAqL1xuZXhwb3J0cy5wcmludE91dHB1dCA9IChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXhwb3J0cy5zdHJpbmdpZnlPdXRwdXQoZGF0YSkpO1xufTtcbi8qKlxuICogR2VuZXJhdGUgYSBncm91cCBuYW1lIGZvciBzdHlsZXggYmFzZWQgb24gdGhlIHByb3ZpZGVkIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIG5hbWVzIC0gVGhlIHN0cmluZ3MgdG8gZ2VuZXJhdGUgdGhlIGdyb3VwIG5hbWUgZnJvbS5cbiAqIEByZXR1cm5zIFRoZSBnZW5lcmF0ZWQgZ3JvdXAgbmFtZS5cbiAqL1xuZXhwb3J0cy5zdHlsZXhHcm91cE5hbWUgPSAoLi4ubmFtZXMpID0+IHtcbiAgICByZXR1cm4gbmFtZXNcbiAgICAgICAgLmpvaW4oXCIgXCIpXG4gICAgICAgIC50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOV0rKC4pL2csIChtLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKTtcbn07XG4vKipcbiAqIEpvaW4gYXJyYXkgb2Ygc3RyaW5ncyB3aXRoIHNsYXNoLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gc3RyQXJyIC0gYXJyYXkgb2Ygc3RyaW5nc1xuICogQHJldHVybnMge3N0cmluZ30gLSBqb2luZWQgc3RyaW5nIHdpdGggc2xhc2hcbiAqL1xuZXhwb3J0cy5qb2luQXJyYXlCeVNsYXNoID0gKHN0ckFycikgPT4ge1xuICAgIHJldHVybiBzdHJBcnIuam9pbihcIiAvIFwiKTtcbn07XG4vKipcbiAqIENhbGN1bGF0ZSBhbmdsZSBvZiBncmFkaWVudCBpbiBkZWdyZWVzIHswLCAzNjB9XG4gKiBAcGFyYW0ge1ZlY3RvcjJ9IGZyb20gLSBHcmFkaWVudCBzdGFydCBwb2ludFxuICogQHBhcmFtIHtWZWN0b3IyfSB0byAtIEdyYWRpZW50IGVuZCBwb2ludFxuICogQHJldHVybnMge251bWJlcn0gLSBBbmdsZSBvZiBncmFkaWVudCBpbiBkZWdyZWVzIHswLCAzNjB9XG4gKi9cbmV4cG9ydHMuZ3JhZGllbnRBbmdsZSA9IChmcm9tLCB0bykgPT4ge1xuICAgIGlmICghZnJvbSB8fCAhdG8pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogTWlzc2luZyBncmFkaWVudCBwb2ludHMuXCIpO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgZGVsdGFYID0gdG8ueCAtIGZyb20ueDtcbiAgICBjb25zdCBkZWx0YVkgPSB0by55IC0gZnJvbS55O1xuICAgIGNvbnN0IHJhZGlhbnMgPSBNYXRoLmF0YW4yKGRlbHRhWSwgZGVsdGFYKTtcbiAgICBjb25zdCByZXN1bHQgPSAocmFkaWFucyAqIDE4MCkgLyBNYXRoLlBJO1xuICAgIGNvbnN0IGZpeGVkUmVzdWx0ID0gcmVzdWx0ICsgOTA7XG4gICAgcmV0dXJuIChmaXhlZFJlc3VsdCA8IDAgPyBmaXhlZFJlc3VsdCArIDM2MCA6IGZpeGVkUmVzdWx0KSAlIDM2MDtcbn07XG5jb25zdCBnZXRWYWx1ZVdpdGhDb3JyZWN0VW5pdCA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYCR7dmFsdWV9YDtcbiAgICB9XG4gICAgcmV0dXJuIGAke3ZhbHVlfXB4YDtcbn07XG5jb25zdCBub25OZWdhdGl2ZVZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlIDwgMCA/IDAgOiB2YWx1ZTtcbn07XG5jb25zdCBudW1iZXJJc1VuZGVmaW5lZCA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gbnVsbDtcbn07XG5jb25zdCBjb252ZXJ0VG9Db2xvclRva2VuVmFsdWUgPSAoaGV4LCByLCBnLCBiLCBhKSA9PiB7XG4gICAgaWYgKCFoZXggfHwgbnVtYmVySXNVbmRlZmluZWQocikgfHwgbnVtYmVySXNVbmRlZmluZWQoZykgfHwgbnVtYmVySXNVbmRlZmluZWQoYikgfHwgbnVtYmVySXNVbmRlZmluZWQoYSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogTWlzc2luZyBjb2xvciB2YWx1ZXMuXCIgKyBgICR7aGV4fSAke3J9ICR7Z30gJHtifSAke2F9YCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZXg6IFwiXCIsXG4gICAgICAgICAgICByOiAwLFxuICAgICAgICAgICAgZzogMCxcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBhOiAwLFxuICAgICAgICAgICAgcmVmZXJlbmNlZFRva2VuOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4geyBoZXgsIHI6IHIsIGc6IGcsIGI6IGIsIGE6IGEsIHJlZmVyZW5jZWRUb2tlbjogbnVsbCB9O1xufTtcbi8qKlxuICogQ2FsY3VsYXRlIGNzcyB2YWx1ZSBvZiBmb3Igc2hhZG93IHRva2Vucy5cbiAqIEBwYXJhbSB7VG9rZW59IHRva2VuIC0gVG9rZW4gb2JqZWN0XG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIFRva2VuIHZhbHVlIGluIGZvcm1hdCB7b2Zmc2V0WH0ge29mZnNldFl9IHtibHVyUmFkaXVzfSB7c3ByZWFkUmFkaXVzfSAje2NvbG9yLmhleH1cbiAqL1xuZXhwb3J0cy5zaGFkb3dUb2tlblZhbHVlID0gKHRva2VuKSA9PiB7XG4gICAgY29uc3QgeyBjb2xvciwgeCwgeSwgcmFkaXVzLCBzcHJlYWQgfSA9IHRva2VuLnZhbHVlO1xuICAgIGNvbnN0IGJsdXJSYWRpdXMgPSBnZXRWYWx1ZVdpdGhDb3JyZWN0VW5pdChub25OZWdhdGl2ZVZhbHVlKHJhZGl1cy5tZWFzdXJlKSk7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IGdldFZhbHVlV2l0aENvcnJlY3RVbml0KHgubWVhc3VyZSk7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IGdldFZhbHVlV2l0aENvcnJlY3RVbml0KHkubWVhc3VyZSk7XG4gICAgY29uc3Qgc3ByZWFkUmFkaXVzID0gZ2V0VmFsdWVXaXRoQ29ycmVjdFVuaXQoc3ByZWFkLm1lYXN1cmUpO1xuICAgIGNvbnN0IGNvbnZlcnRlZENvbG9yID0gY29udmVydFRvQ29sb3JUb2tlblZhbHVlKGNvbG9yLmhleCwgY29sb3IuciwgY29sb3IuZywgY29sb3IuYiwgY29sb3IuYSk7XG4gICAgLy8gcmV0dXJuIGAke29mZnNldFh9ICR7b2Zmc2V0WX0gJHtibHVyUmFkaXVzfSAke3NwcmVhZFJhZGl1c30gIyR7Y29sb3IuaGV4fWA7XG4gICAgcmV0dXJuIGAke29mZnNldFh9ICR7b2Zmc2V0WX0gJHtibHVyUmFkaXVzfSAke3NwcmVhZFJhZGl1c30gJHtoc2xfY29udmVydG9yXzEuZGVmYXVsdChjb252ZXJ0VG9Db2xvclRva2VuVmFsdWUoY29sb3IuaGV4LCBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iLCBjb2xvci5hKSl9YDtcbn07XG5jb25zdCByZW1vdmVkRG91YmxlcyA9IChzdHJpbmdBcnIpID0+IHtcbiAgICBpZiAoIXN0cmluZ0Fycikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmdBcnIgPT09IG51bGwgfHwgc3RyaW5nQXJyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdHJpbmdBcnIuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsb3dlcmNhc2VkSXRlbSA9IGl0ZW0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ID09PSBzdHJpbmdBcnIuZmluZEluZGV4KCh3b3JkKSA9PiB3b3JkLnRvTG93ZXJDYXNlKCkgPT09IGxvd2VyY2FzZWRJdGVtKTtcbiAgICB9KTtcbn07XG4vKipcbiAqIENyZWF0ZSBuYW1lIG9mIHRoZSB0b2tlbiBmcm9tIG9yaWdpbiBuYW1lLlxuICogQHBhcmFtIHtUb2tlbn0gdG9rZW4gLSBUb2tlbiBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4IC0gUHJlZml4IGZvciB0aGUgbmFtZSBwbGFjZWQgYmVmb3JlIHRoZSBvcmlnaW4gbmFtZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gTmFtZSBvZiB0aGUgdG9rZW4gaW4gZm9ybWF0IHtwcmVmaXh9e29yaWdpbk5hbWV9XG4gKi9cbmV4cG9ydHMubmFtZUZyb21PcmlnaW4gPSAodG9rZW4sIHByZWZpeCkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGlmICghKChfYSA9IHRva2VuLm9yaWdpbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5hbWUpKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBjb25zdCBybSA9IChfYyA9IChfYiA9IHRva2VuLm9yaWdpbikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm5hbWUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5zcGxpdChcIi9cIikubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgICAgICAuc3BsaXQoL1xcLXxcXHMvZylcbiAgICAgICAgICAgIC5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKVxuICAgICAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgfSk7XG4gICAgaWYgKHByZWZpeCkge1xuICAgICAgICBybSA9PT0gbnVsbCB8fCBybSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcm0udW5zaGlmdChwcmVmaXgpO1xuICAgIH1cbiAgICBjb25zdCByZCA9IHJlbW92ZWREb3VibGVzKHJtKVxuICAgICAgICAubWFwKChpdGVtKSA9PiBpdGVtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaXRlbS5zbGljZSgxKSlcbiAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgcmV0dXJuIHJkLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcmQuc2xpY2UoMSk7XG59O1xuZXhwb3J0cy5xdW90YXRpb25NYXJrcyA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZS5tYXRjaCgvXlswLTldKyQvKSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBgXCIke3ZhbHVlfVwiYDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RyaW5nSFNMQSA9IGV4cG9ydHMuc3RyaW5nSFNMID0gZXhwb3J0cy5jYWxjdWxhdGVTYXR1cmF0aW9uID0gZXhwb3J0cy5jYWxjdWxhdGVMaWdodG5lc3MgPSBleHBvcnRzLmNhbGN1bGF0ZUh1ZSA9IHZvaWQgMDtcbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgaHVlIHZhbHVlIGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIGRlbHRhIC0gVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbWF4aW11bSBhbmQgbWluaW11bSBjb2xvciB2YWx1ZXMuXG4gKiBAcGFyYW0gY21heCAtIFRoZSBtYXhpbXVtIGNvbG9yIHZhbHVlLlxuICogQHBhcmFtIHIgLSBUaGUgcmVkIGNvbG9yIHZhbHVlLlxuICogQHBhcmFtIGcgLSBUaGUgZ3JlZW4gY29sb3IgdmFsdWUuXG4gKiBAcGFyYW0gYiAtIFRoZSBibHVlIGNvbG9yIHZhbHVlLlxuICogQHJldHVybnMgVGhlIGNhbGN1bGF0ZWQgaHVlIHZhbHVlLlxuICovXG5leHBvcnRzLmNhbGN1bGF0ZUh1ZSA9IChkZWx0YSwgY21heCwgciwgZywgYikgPT4ge1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIGlmIChkZWx0YSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGNtYXggPT09IHIpIHtcbiAgICAgICAgcmVzdWx0ID0gKChnIC0gYikgLyBkZWx0YSkgJSA2O1xuICAgIH1cbiAgICBlbHNlIGlmIChjbWF4ID09PSBnKSB7XG4gICAgICAgIHJlc3VsdCA9IChiIC0gcikgLyBkZWx0YSArIDI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNtYXggPT09IGIpIHtcbiAgICAgICAgcmVzdWx0ID0gKHIgLSBnKSAvIGRlbHRhICsgNDtcbiAgICB9XG4gICAgY29uc3Qgcm91bmRlZCA9IE1hdGgucm91bmQocmVzdWx0ICogNjApO1xuICAgIGlmIChyb3VuZGVkIDwgMCkge1xuICAgICAgICByZXR1cm4gcm91bmRlZCArIDM2MDtcbiAgICB9XG4gICAgcmV0dXJuIHJvdW5kZWQ7XG59O1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsaWdodG5lc3MgdmFsdWUgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0gY21heCAtIFRoZSBtYXhpbXVtIGNvbG9yIHZhbHVlLlxuICogQHBhcmFtIGNtaW4gLSBUaGUgbWluaW11bSBjb2xvciB2YWx1ZS5cbiAqIEByZXR1cm5zIFRoZSBjYWxjdWxhdGVkIGxpZ2h0bmVzcyB2YWx1ZS5cbiAqL1xuZXhwb3J0cy5jYWxjdWxhdGVMaWdodG5lc3MgPSAoY21heCwgY21pbikgPT4ge1xuICAgIHJldHVybiAoY21heCArIGNtaW4pIC8gMjtcbn07XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNhdHVyYXRpb24gdmFsdWUgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0gZGVsdGEgLSBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBtYXhpbXVtIGFuZCBtaW5pbXVtIGNvbG9yIHZhbHVlcy5cbiAqIEBwYXJhbSBsaWdodG5lc3MgLSBUaGUgbGlnaHRuZXNzIHZhbHVlLlxuICogQHJldHVybnMgVGhlIGNhbGN1bGF0ZWQgc2F0dXJhdGlvbiB2YWx1ZS5cbiAqL1xuZXhwb3J0cy5jYWxjdWxhdGVTYXR1cmF0aW9uID0gKGRlbHRhLCBsaWdodG5lc3MpID0+IHtcbiAgICByZXR1cm4gZGVsdGEgPT09IDAgPyAwIDogZGVsdGEgLyAoMSAtIE1hdGguYWJzKDIgKiBsaWdodG5lc3MgLSAxKSk7XG59O1xuLyoqXG4gKiBDb252ZXJ0cyB0aGUgSFNMIHZhbHVlcyB0byBhIHN0cmluZyByZXByZXNlbnRhdGlvbi5cbiAqIEBwYXJhbSBodWUgLSBUaGUgaHVlIHZhbHVlLlxuICogQHBhcmFtIHNhdHVyYXRpb24gLSBUaGUgc2F0dXJhdGlvbiB2YWx1ZS5cbiAqIEBwYXJhbSBsaWdodG5lc3MgLSBUaGUgbGlnaHRuZXNzIHZhbHVlLlxuICogQHJldHVybnMgVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgSFNMIHZhbHVlcy5cbiAqL1xuZXhwb3J0cy5zdHJpbmdIU0wgPSAoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpID0+IHtcbiAgICByZXR1cm4gYGhzbCgke2h1ZX0sICR7TWF0aC5yb3VuZChzYXR1cmF0aW9uKX0lLCAke01hdGgucm91bmQobGlnaHRuZXNzKX0lKWA7XG59O1xuLyoqXG4gKiBDb252ZXJ0cyB0aGUgSFNMQSB2YWx1ZXMgdG8gYSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXG4gKiBAcGFyYW0gaHVlIC0gVGhlIGh1ZSB2YWx1ZS5cbiAqIEBwYXJhbSBzYXR1cmF0aW9uIC0gVGhlIHNhdHVyYXRpb24gdmFsdWUuXG4gKiBAcGFyYW0gbGlnaHRuZXNzIC0gVGhlIGxpZ2h0bmVzcyB2YWx1ZS5cbiAqIEBwYXJhbSBhbHBoYSAtIFRoZSBhbHBoYSB2YWx1ZS5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIEhTTEEgdmFsdWVzLlxuICovXG5leHBvcnRzLnN0cmluZ0hTTEEgPSAoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGFscGhhKSA9PiB7XG4gICAgcmV0dXJuIGBoc2xhKCR7aHVlfSwgJHtNYXRoLnJvdW5kKHNhdHVyYXRpb24pfSUsICR7TWF0aC5yb3VuZChsaWdodG5lc3MpfSUsICR7TWF0aC5yb3VuZChhbHBoYSAqIDEwKSAvIDEwfSlgO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBvYmplY3QgdG8gYW4gSFNMIG9yIEhTTEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7Q29sb3JUb2tlblZhbHVlfSBjb2xvciAtIFRoZSBjb2xvciBvYmplY3QgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIFRoZSBIU0wgb3IgSFNMQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIGNvbG9yLlxuICovXG5jb25zdCBoc2xDb252ZXJ0b3IgPSAoY29sb3IpID0+IHtcbiAgICBjb25zdCB7IHI6IF9yLCBnOiBfZywgYjogX2IsIGE6IF9hIH0gPSBjb2xvcjtcbiAgICBjb25zdCByID0gX3IgLyAyNTU7XG4gICAgY29uc3QgZyA9IF9nIC8gMjU1O1xuICAgIGNvbnN0IGIgPSBfYiAvIDI1NTtcbiAgICBjb25zdCBhID0gX2EgLyAyNTU7XG4gICAgY29uc3QgY21pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgIGNvbnN0IGNtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICBjb25zdCBkZWx0YSA9IGNtYXggLSBjbWluO1xuICAgIGNvbnN0IGh1ZSA9IGhlbHBlcnNfMS5jYWxjdWxhdGVIdWUoZGVsdGEsIGNtYXgsIHIsIGcsIGIpO1xuICAgIGNvbnN0IF9saWdodG5lc3MgPSBoZWxwZXJzXzEuY2FsY3VsYXRlTGlnaHRuZXNzKGNtYXgsIGNtaW4pO1xuICAgIGNvbnN0IF9zYXR1cmF0aW9uID0gaGVscGVyc18xLmNhbGN1bGF0ZVNhdHVyYXRpb24oZGVsdGEsIF9saWdodG5lc3MpO1xuICAgIGNvbnN0IGxpZ2h0bmVzcyA9ICsoX2xpZ2h0bmVzcyAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICBjb25zdCBzYXR1cmF0aW9uID0gKyhfc2F0dXJhdGlvbiAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICByZXR1cm4gYSA9PT0gMSA/IGhlbHBlcnNfMS5zdHJpbmdIU0woaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIDogaGVscGVyc18xLnN0cmluZ0hTTEEoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGEpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGhzbENvbnZlcnRvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGhzbENvbnZlcnRvcl8xID0gcmVxdWlyZShcIi4vaHNsQ29udmVydG9yXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaHNsQ29udmVydG9yXzEuZGVmYXVsdDsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbmNvbnN0IGhzbF9jb252ZXJ0b3JfMSA9IHJlcXVpcmUoXCIuL2hzbC1jb252ZXJ0b3JcIik7XG5jb25zdCBwYXlsb2Fkc18xID0gcmVxdWlyZShcIi4vcGF5bG9hZHNcIik7XG4vLyBGdW5jdGlvbnMgcmVnaXN0cmF0aW9uXG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImN1cnJlbnREYXRlXCIsIGhlbHBlcnNfMS5jdXJyZW50RGF0ZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImdldEJyYW5kSWRcIiwgaGVscGVyc18xLmdldEJyYW5kSWQpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJleHBvcnRlZEZpbGVOYW1lXCIsIGhlbHBlcnNfMS5leHBvcnRlZEZpbGVOYW1lKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiaHNsQ29udmVydG9yXCIsIGhzbF9jb252ZXJ0b3JfMS5kZWZhdWx0KTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiZ3JvdXBOYW1lQ29tbWVudFwiLCBoZWxwZXJzXzEuZ3JvdXBOYW1lQ29tbWVudCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImZpbHRlclRva2Vuc1wiLCBoZWxwZXJzXzEuZmlsdGVyVG9rZW5zKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwicHJpbnRPdXRwdXRcIiwgaGVscGVyc18xLnByaW50T3V0cHV0KTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwic3R5bGV4R3JvdXBOYW1lXCIsIGhlbHBlcnNfMS5zdHlsZXhHcm91cE5hbWUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJqb2luQXJyYXlCeVNsYXNoXCIsIGhlbHBlcnNfMS5qb2luQXJyYXlCeVNsYXNoKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiZ3JhZGllbnRBbmdsZVwiLCBoZWxwZXJzXzEuZ3JhZGllbnRBbmdsZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInNoYWRvd1Rva2VuVmFsdWVcIiwgaGVscGVyc18xLnNoYWRvd1Rva2VuVmFsdWUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJzdHJpbmdpZnlPdXRwdXRcIiwgaGVscGVyc18xLnN0cmluZ2lmeU91dHB1dCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcIm5hbWVGcm9tT3JpZ2luXCIsIGhlbHBlcnNfMS5uYW1lRnJvbU9yaWdpbik7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInF1b3RhdGlvbk1hcmtzXCIsIGhlbHBlcnNfMS5xdW90YXRpb25NYXJrcyk7XG4vLyBQYXlsb2Fkc1xuUHVsc2FyLnJlZ2lzdGVyUGF5bG9hZChcImN1cnJlbnRFeHBvcnRlclZlcnNpb25cIiwgcGF5bG9hZHNfMS5jdXJyZW50RXhwb3J0ZXJWZXJzaW9uKTtcblB1bHNhci5yZWdpc3RlclBheWxvYWQoXCJicmFuZE5hbWVzXCIsIHBheWxvYWRzXzEuYnJhbmROYW1lcyk7XG5QdWxzYXIucmVnaXN0ZXJQYXlsb2FkKFwiYmVoYXZpb3JcIiwgcGF5bG9hZHNfMS5iZWhhdmlvcik7XG5QdWxzYXIucmVnaXN0ZXJQYXlsb2FkKFwic3R5bGV4Q2F0ZWdvcmllc1wiLCBwYXlsb2Fkc18xLnN0eWxleENhdGVnb3JpZXMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0eWxleENhdGVnb3JpZXMgPSBleHBvcnRzLmJlaGF2aW9yID0gZXhwb3J0cy5icmFuZE5hbWVzID0gZXhwb3J0cy5jdXJyZW50RXhwb3J0ZXJWZXJzaW9uID0gdm9pZCAwO1xuY29uc3QgZXhwb3J0ZXJfanNvbl8xID0gcmVxdWlyZShcIi4uLy4uL2V4cG9ydGVyLmpzb25cIik7XG5leHBvcnRzLmN1cnJlbnRFeHBvcnRlclZlcnNpb24gPSBleHBvcnRlcl9qc29uXzEudmVyc2lvbjtcbmV4cG9ydHMuYnJhbmROYW1lcyA9IHtcbiAgICBjcHBEYXJrOiBcIkNQUCBEYXJrXCIsXG4gICAgY3BwOiBcIkNQUCBMaWdodFwiLFxuICAgIGtvb3BEYXJrOiBcIktvb3AgRGFya1wiLFxuICAgIGtvb3A6IFwiS29vcCBMaWdodFwiLFxuICAgIHZpZ286IFwiVklHb1wiLFxuICAgIGtuejogXCJLTlogTGlnaHRcIixcbiAgICBzdXM6IFwiU1VTIExpZ2h0XCIsXG59O1xuZXhwb3J0cy5iZWhhdmlvciA9IHtcbiAgICBjb2xvclRva2VuUHJlZml4OiBcImNvbG9yXCIsXG4gICAgYm9yZGVyVG9rZW5QcmVmaXg6IFwiYm9yZGVyXCIsXG4gICAgZ3JhZGllbnRUb2tlblByZWZpeDogXCJncmFkaWVudFwiLFxuICAgIG1lYXN1cmVUb2tlblByZWZpeDogXCJtZWFzdXJlXCIsXG4gICAgc2hhZG93VG9rZW5QcmVmaXg6IFwic2hhZG93XCIsXG4gICAgdHlwb2dyYXBoeVRva2VuUHJlZml4OiBcInR5cG9ncmFwaHlcIixcbn07XG5leHBvcnRzLnN0eWxleENhdGVnb3JpZXMgPSBbXG4gICAgXCJjb3JlXCIsXG4gICAgXCJzZW1hbnRpY1wiLFxuICAgIFwiY29tcG9uZW50XCJcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9