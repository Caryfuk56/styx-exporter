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

module.exports = JSON.parse("{\"id\":\"ais.exporter stylex\",\"name\":\"STYLEX & CSS ALL THEMES\",\"description\":\"CSS ans Stylex all theme exporter\",\"author\":\"\",\"organization\":\"Ais servis\",\"homepage\":\"\",\"source_dir\":\"src\",\"version\":\"2.0.2\",\"usesBrands\":true,\"config\":{\"sources\":\"sources.json\",\"output\":\"output.json\",\"js\":\"src/js/helpers.js\"},\"engines\":{\"pulsar\":\"1.0.0\",\"supernova\":\"1.0.0\"},\"tags\":[\"CSS\",\"Tokens\",\"Stylex\"],\"usesThemes\":true}");

/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.nameFromOrigin = exports.showTokensNamesByOriginPath = exports.shadowTokenValue = exports.gradientAngle = exports.joinArrayBySlash = exports.stylexGroupName = exports.printOutput = exports.filterTokens = exports.groupNameComment = exports.tokenNameWithCategoryFixDoubles = exports.exportedFileName = exports.getBrandId = exports.currentDate = exports.stringifyOutput = void 0;
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
Pulsar.registerFunction("hslConvertor", hsl_convertor_1.default);
Pulsar.registerFunction("groupNameComment", helpers_1.groupNameComment);
Pulsar.registerFunction("filterTokens", helpers_1.filterTokens);
Pulsar.registerFunction("printOutput", helpers_1.printOutput);
Pulsar.registerFunction("stylexGroupName", helpers_1.stylexGroupName);
Pulsar.registerFunction("joinArrayBySlash", helpers_1.joinArrayBySlash);
Pulsar.registerFunction("gradientAngle", helpers_1.gradientAngle);
Pulsar.registerFunction("shadowTokenValue", helpers_1.shadowTokenValue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHNsLWNvbnZlcnRvci9oc2xDb252ZXJ0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYXlsb2Fkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHFDQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVcsR0FBRyxXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU8sR0FBRyxLQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVSxPQUFPLEVBQUU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixNQUFNO0FBQ3hCO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhCQUE4QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUSxHQUFHLFFBQVEsR0FBRyxXQUFXLEdBQUcsYUFBYSxJQUFJLFVBQVU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlOYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSxJQUFJLHVCQUF1QixLQUFLLHNCQUFzQjtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJLElBQUksdUJBQXVCLElBQUksc0JBQXNCLEtBQUssTUFBTTtBQUMzRixtQkFBbUIsSUFBSSxJQUFJLHVCQUF1QixLQUFLLHNCQUFzQixLQUFLLDRCQUE0QjtBQUM5Rzs7Ozs7Ozs7Ozs7OztBQ3ZFYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLGlEQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNkJBQTZCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELHFCQUFxQixtQkFBTyxDQUFDLDJEQUFnQjtBQUM3QywyQ0FBMkMscUNBQXFDLCtCQUErQixFQUFFLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUNIdEc7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxrQkFBa0IsbUJBQU8sQ0FBQyxtQ0FBVztBQUNyQyx3QkFBd0IsbUJBQU8sQ0FBQyxxREFBaUI7QUFDakQsbUJBQW1CLG1CQUFPLENBQUMscUNBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSx3QkFBd0IsbUJBQU8sQ0FBQyw2Q0FBcUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImhlbHBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5uYW1lRnJvbU9yaWdpbiA9IGV4cG9ydHMuc2hvd1Rva2Vuc05hbWVzQnlPcmlnaW5QYXRoID0gZXhwb3J0cy5zaGFkb3dUb2tlblZhbHVlID0gZXhwb3J0cy5ncmFkaWVudEFuZ2xlID0gZXhwb3J0cy5qb2luQXJyYXlCeVNsYXNoID0gZXhwb3J0cy5zdHlsZXhHcm91cE5hbWUgPSBleHBvcnRzLnByaW50T3V0cHV0ID0gZXhwb3J0cy5maWx0ZXJUb2tlbnMgPSBleHBvcnRzLmdyb3VwTmFtZUNvbW1lbnQgPSBleHBvcnRzLnRva2VuTmFtZVdpdGhDYXRlZ29yeUZpeERvdWJsZXMgPSBleHBvcnRzLmV4cG9ydGVkRmlsZU5hbWUgPSBleHBvcnRzLmdldEJyYW5kSWQgPSBleHBvcnRzLmN1cnJlbnREYXRlID0gZXhwb3J0cy5zdHJpbmdpZnlPdXRwdXQgPSB2b2lkIDA7XG5jb25zdCBwYXlsb2Fkc18xID0gcmVxdWlyZShcIi4vcGF5bG9hZHNcIik7XG4vKipcbiAqIFN0cmluZ2lmaWVzIGFuIG9iamVjdCwgcmVtb3ZpbmcgY2lyY3VsYXIgcmVmZXJlbmNlcy5cbiAqXG4gKiBAcGFyYW0gb2JqIC0gVGhlIG9iamVjdCB0byBzdHJpbmdpZnkuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5naWZpZWQgb2JqZWN0LlxuICovXG5leHBvcnRzLnN0cmluZ2lmeU91dHB1dCA9IChvYmopID0+IHtcbiAgICBsZXQgY2FjaGUgPSBbXTtcbiAgICBjb25zdCBzdHIgPSBKU09OLnN0cmluZ2lmeShvYmosIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjYWNoZSAmJiBjYWNoZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhY2hlID09PSBudWxsIHx8IGNhY2hlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYWNoZS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSk7XG4gICAgY2FjaGUgPSBudWxsO1xuICAgIHJldHVybiBzdHI7XG59O1xuLyoqXG4gKiBSZXR1cm4gY3VycmVudCB0aW1lIGluIGxvY2FsIHN0cmluZ1xuICogQHJldHVybnMgVGhlIGN1cnJlbnQgdGltZSBpbiBsb2NhbCBzdHJpbmcgZm9ybWF0LlxuICovXG5leHBvcnRzLmN1cnJlbnREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIGNvbnN0IHRpbWVTdHJpbmcgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIHJldHVybiBgJHtkYXRlU3RyaW5nfSAke3RpbWVTdHJpbmd9YDtcbn07XG4vKipcbiAqIFJldHVybiBpZCBvZiB0aGUgdGhlbWUgYWNjb3JkaW5nIHRoZW1lIG5hbWUuXG4gKlxuICogQHBhcmFtIHRoZW1lTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSB0aGVtZS5cbiAqIEBwYXJhbSBicmFuZHMgLSBUaGUgYXJyYXkgb2YgYnJhbmQgb2JqZWN0cy5cbiAqIEByZXR1cm5zIFRoZSBpZCBvZiB0aGUgdGhlbWUuXG4gKi9cbmV4cG9ydHMuZ2V0QnJhbmRJZCA9ICh0aGVtZU5hbWUsIGJyYW5kcykgPT4ge1xuICAgIGNvbnN0IGJyYW5kT2JqZWN0ID0gYnJhbmRzLmZpbHRlcigoYnJhbmQpID0+IGJyYW5kLm5hbWUgPT09IHRoZW1lTmFtZSk7XG4gICAgaWYgKGJyYW5kT2JqZWN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBicmFuZCB3aXRoIG5hbWUgXFxcIlwiICsgXCJuYW1lXCIgKyBcIlxcXCIgZG9lc24ndCBleGlzdC5cIik7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gYnJhbmRPYmplY3RbMF0uaWQ7XG59O1xuLyoqXG4gKiBHZW5lcmF0ZSB0aGUgZXhwb3J0ZWQgZmlsZSBuYW1lIGJhc2VkIG9uIHRoZSB0eXBlIGFuZCBicmFuZC5cbiAqXG4gKiBAcGFyYW0gdHlwZSAtIFRoZSB0eXBlIG9mIHRoZSBmaWxlLlxuICogQHBhcmFtIGJyYW5kIC0gVGhlIGJyYW5kIG5hbWUuXG4gKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIGZpbGUgbmFtZS5cbiAqL1xuZXhwb3J0cy5leHBvcnRlZEZpbGVOYW1lID0gKHR5cGUsIGJyYW5kKSA9PiB7XG4gICAgbGV0IGZvbGRlciA9IFwiXCI7XG4gICAgc3dpdGNoIChicmFuZCkge1xuICAgICAgICBjYXNlIHBheWxvYWRzXzEuYnJhbmROYW1lcy52aWdvOlxuICAgICAgICAgICAgZm9sZGVyID0gXCJ2aWdvXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBwYXlsb2Fkc18xLmJyYW5kTmFtZXMuY3BwOlxuICAgICAgICAgICAgZm9sZGVyID0gXCJjcHBcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBheWxvYWRzXzEuYnJhbmROYW1lcy5rb29wOlxuICAgICAgICAgICAgZm9sZGVyID0gXCJrb29wXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBheWxvYWRzXzEuYnJhbmROYW1lcy5jcHBEYXJrOlxuICAgICAgICAgICAgZm9sZGVyID0gXCJjcHAtZGFya1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBwYXlsb2Fkc18xLmJyYW5kTmFtZXMua29vcERhcms6XG4gICAgICAgICAgICBmb2xkZXIgPSBcImtvb3AtZGFya1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIGNhc2UgYnJhbmROYW1lcy5rbno6XG4gICAgICAgIC8vICAgZm9sZGVyID0gXCJrbnpcIjtcbiAgICAgICAgLy8gICBicmVhaztcbiAgICAgICAgLy8gY2FzZSBicmFuZE5hbWVzLnN1czpcbiAgICAgICAgLy8gICBmb2xkZXIgPSBcInN1c1wiO1xuICAgICAgICAvLyAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGhlYWRlciBjb21tZW50IEVSUk9SOiBicmFuZCBuYW1lIFxcXCJcIiArIGJyYW5kICsgXCJcXFwiIGRvZXNuJ3QgZXhpc3QuXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBgJHtmb2xkZXJ9LyR7dHlwZX0uY3NzYDtcbn07XG5leHBvcnRzLnRva2VuTmFtZVdpdGhDYXRlZ29yeUZpeERvdWJsZXMgPSAodG9rZW4sIHByZWZpeCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBuYW1lID0gKF9hID0gdG9rZW4ub3JpZ2luKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaWQ7XG4gICAgY29uc3QgbmFtZUFyciA9IG5hbWUgPT09IG51bGwgfHwgbmFtZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmFtZS5zcGxpdChcIi9cIik7XG4gICAgLy8gQ2hhbmdlIGRhc2ggdG8gQ2FtZWxDYXNlXG4gICAgY29uc3Qgd2l0aG91dERhc2ggPSBuYW1lQXJyID09PSBudWxsIHx8IG5hbWVBcnIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hbWVBcnIubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGl0ZW0uc3BsaXQoXCItXCIpXG4gICAgICAgICAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSk7XG4gICAgICAgIHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcbiAgICB9KTtcbiAgICBjb25zdCByZW1vdmVkRG91YmxlcyA9IHdpdGhvdXREYXNoID09PSBudWxsIHx8IHdpdGhvdXREYXNoID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aXRob3V0RGFzaC5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxvd2VyY2FzZWRJdGVtID0gaXRlbS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gaW5kZXggPT09IHdpdGhvdXREYXNoLmZpbmRJbmRleCgod29yZCkgPT4gd29yZC50b0xvd2VyQ2FzZSgpID09PSBsb3dlcmNhc2VkSXRlbSk7XG4gICAgfSk7XG4gICAgaWYgKHByZWZpeCkge1xuICAgICAgICByZW1vdmVkRG91YmxlcyA9PT0gbnVsbCB8fCByZW1vdmVkRG91YmxlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVtb3ZlZERvdWJsZXMudW5zaGlmdChwcmVmaXgpO1xuICAgIH1cbiAgICBjb25zdCBqb2luZWQgPSByZW1vdmVkRG91YmxlcyA9PT0gbnVsbCB8fCByZW1vdmVkRG91YmxlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVtb3ZlZERvdWJsZXMubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSkuam9pbihcIlwiKTtcbiAgICBpZiAoIWpvaW5lZCkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgY29uc3QgZmlyc3RMb3dlciA9IGpvaW5lZC5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIChqb2luZWQgPT09IG51bGwgfHwgam9pbmVkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBqb2luZWQuc2xpY2UoMSkpO1xuICAgIHJldHVybiBmaXJzdExvd2VyO1xufTtcbmxldCBwcmludENvbW1lbnQgPSBmYWxzZTtcbmxldCBncm91cE5hbWUgPSBcIlwiO1xuLyoqXG4gKiBHZW5lcmF0ZSBhIGdyb3VwIG5hbWUgY29tbWVudCBiYXNlZCBvbiB0aGUgdG9rZW4gZ3JvdXAuXG4gKlxuICogQHBhcmFtIHRva2VuR3JvdXAgLSBUaGUgdG9rZW4gZ3JvdXAgb2JqZWN0LlxuICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCBncm91cCBuYW1lIGNvbW1lbnQuXG4gKi9cbmV4cG9ydHMuZ3JvdXBOYW1lQ29tbWVudCA9ICh0b2tlbkdyb3VwKSA9PiB7XG4gICAgaWYgKCEodG9rZW5Hcm91cCA9PT0gbnVsbCB8fCB0b2tlbkdyb3VwID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b2tlbkdyb3VwLnBhcmVudCkpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IHsgcGFyZW50OiB7IG5hbWUgfSB9ID0gdG9rZW5Hcm91cDtcbiAgICBpZiAobmFtZSAhPT0gZ3JvdXBOYW1lKSB7XG4gICAgICAgIGdyb3VwTmFtZSA9IG5hbWU7XG4gICAgICAgIHByaW50Q29tbWVudCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcmludENvbW1lbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHByaW50Q29tbWVudFxuICAgICAgICA/IGAvKiAtLS0gJHtncm91cE5hbWV9IC0tLSAqL1xcbmAgOiBcIlwiO1xufTtcbi8qKlxuICogRmlsdGVyIHRva2VucyBiYXNlZCBvbiB0aGUgbmFtZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSAtIFRoZSBuYW1lIHRvIGZpbHRlciBieS5cbiAqIEBwYXJhbSB0b2tlbnMgLSBUaGUgYXJyYXkgb2YgdG9rZW5zLlxuICogQHJldHVybnMgVGhlIGZpbHRlcmVkIGFycmF5IG9mIHRva2Vucy5cbiAqL1xuZXhwb3J0cy5maWx0ZXJUb2tlbnMgPSAobmFtZSwgdG9rZW5zKSA9PiB7XG4gICAgcmV0dXJuIHRva2Vucy5maWx0ZXIoKHRva2VuKSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKChfYSA9IHRva2VuLm9yaWdpbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbi5vcmlnaW4ubmFtZS5pbmNsdWRlcyhuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJDaHliYVwiO1xuICAgIH0pO1xufTtcbi8qKlxuICogUHJpbnQgdGhlIG91dHB1dCBkYXRhIHRvIHRoZSBjb25zb2xlLlxuICpcbiAqIEBwYXJhbSBkYXRhIC0gVGhlIGRhdGEgdG8gcHJpbnQuXG4gKi9cbmV4cG9ydHMucHJpbnRPdXRwdXQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV4cG9ydHMuc3RyaW5naWZ5T3V0cHV0KGRhdGEpKTtcbn07XG4vKipcbiAqIEdlbmVyYXRlIGEgZ3JvdXAgbmFtZSBmb3Igc3R5bGV4IGJhc2VkIG9uIHRoZSBwcm92aWRlZCBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSBuYW1lcyAtIFRoZSBzdHJpbmdzIHRvIGdlbmVyYXRlIHRoZSBncm91cCBuYW1lIGZyb20uXG4gKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIGdyb3VwIG5hbWUuXG4gKi9cbmV4cG9ydHMuc3R5bGV4R3JvdXBOYW1lID0gKC4uLm5hbWVzKSA9PiB7XG4gICAgcmV0dXJuIG5hbWVzXG4gICAgICAgIC5qb2luKFwiIFwiKVxuICAgICAgICAudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvW15hLXpBLVowLTldKyguKS9nLCAobSwgY2hyKSA9PiBjaHIudG9VcHBlckNhc2UoKSk7XG59O1xuZXhwb3J0cy5qb2luQXJyYXlCeVNsYXNoID0gKHN0ckFycikgPT4ge1xuICAgIHJldHVybiBzdHJBcnIuam9pbihcIiAvIFwiKTtcbn07XG5leHBvcnRzLmdyYWRpZW50QW5nbGUgPSAoZnJvbSwgdG8pID0+IHtcbiAgICBjb25zdCBkZWx0YVggPSB0by54IC0gZnJvbS54O1xuICAgIGNvbnN0IGRlbHRhWSA9IHRvLnkgLSBmcm9tLnk7XG4gICAgY29uc3QgcmFkaWFucyA9IE1hdGguYXRhbjIoZGVsdGFZLCBkZWx0YVgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IChyYWRpYW5zICogMTgwKSAvIE1hdGguUEk7XG4gICAgY29uc3QgZml4ZWRSZXN1bHQgPSByZXN1bHQgKyA5MDtcbiAgICByZXR1cm4gKGZpeGVkUmVzdWx0IDwgMCA/IGZpeGVkUmVzdWx0ICsgMzYwIDogZml4ZWRSZXN1bHQpICUgMzYwO1xufTtcbmNvbnN0IGdldFZhbHVlV2l0aENvcnJlY3RVbml0ID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiBgJHt2YWx1ZX1gO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dmFsdWV9cHhgO1xufTtcbmNvbnN0IG5vbk5lZ2F0aXZlVmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICByZXR1cm4gdmFsdWUgPCAwID8gMCA6IHZhbHVlO1xufTtcbmV4cG9ydHMuc2hhZG93VG9rZW5WYWx1ZSA9ICh0b2tlbikgPT4ge1xuICAgIGNvbnN0IHsgY29sb3IsIHgsIHksIHJhZGl1cywgc3ByZWFkIH0gPSB0b2tlbi52YWx1ZTtcbiAgICBjb25zdCBibHVyUmFkaXVzID0gZ2V0VmFsdWVXaXRoQ29ycmVjdFVuaXQobm9uTmVnYXRpdmVWYWx1ZShyYWRpdXMubWVhc3VyZSkpO1xuICAgIGNvbnN0IG9mZnNldFggPSBnZXRWYWx1ZVdpdGhDb3JyZWN0VW5pdCh4Lm1lYXN1cmUpO1xuICAgIGNvbnN0IG9mZnNldFkgPSBnZXRWYWx1ZVdpdGhDb3JyZWN0VW5pdCh5Lm1lYXN1cmUpO1xuICAgIGNvbnN0IHNwcmVhZFJhZGl1cyA9IGdldFZhbHVlV2l0aENvcnJlY3RVbml0KHNwcmVhZC5tZWFzdXJlKTtcbiAgICByZXR1cm4gYCR7b2Zmc2V0WH0gJHtvZmZzZXRZfSAke2JsdXJSYWRpdXN9ICR7c3ByZWFkUmFkaXVzfSAjJHtjb2xvci5oZXh9YDtcbn07XG5leHBvcnRzLnNob3dUb2tlbnNOYW1lc0J5T3JpZ2luUGF0aCA9ICh0b2tlbikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRva2VuT3JpZ2luT2JqZWN0OiBleHBvcnRzLnN0cmluZ2lmeU91dHB1dCh0b2tlbi5vcmlnaW4pLFxuICAgIH07XG59O1xuY29uc3QgcmVtb3ZlZERvdWJsZXMgPSAoc3RyaW5nQXJyKSA9PiB7XG4gICAgaWYgKCFzdHJpbmdBcnIpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nQXJyID09PSBudWxsIHx8IHN0cmluZ0FyciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RyaW5nQXJyLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbG93ZXJjYXNlZEl0ZW0gPSBpdGVtLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBpbmRleCA9PT0gc3RyaW5nQXJyLmZpbmRJbmRleCgod29yZCkgPT4gd29yZC50b0xvd2VyQ2FzZSgpID09PSBsb3dlcmNhc2VkSXRlbSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5uYW1lRnJvbU9yaWdpbiA9ICh0b2tlbiwgdXNlUHJlZml4ID0gdHJ1ZSkgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgY29uc3QgcmVtb3ZlZFNwZWNpYWxDaGFycyA9IChfYiA9IChfYSA9IHRva2VuLm9yaWdpbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5hbWUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZXBsYWNlKC9cXC18XFxzL2csIFwiXCIpO1xuICAgIGNvbnN0IHNwbGl0dGVkTmFtZSA9IHJlbW92ZWRTcGVjaWFsQ2hhcnMgPT09IG51bGwgfHwgcmVtb3ZlZFNwZWNpYWxDaGFycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVtb3ZlZFNwZWNpYWxDaGFycy5zcGxpdChcIi9cIik7XG4gICAgcmV0dXJuIHJlbW92ZWREb3VibGVzKHNwbGl0dGVkTmFtZSlcbiAgICAgICAgLm1hcCgoaXRlbSkgPT4gaXRlbS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGl0ZW0uc2xpY2UoMSkpXG4gICAgICAgIC5qb2luKFwiXCIpO1xuICAgIC8vIHJldHVybiBuYW1lPy5zcGxpdChcIi9cIikubWFwKChpdGVtKSA9PiBpdGVtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaXRlbS5zbGljZSgxKSkuam9pbihcIlwiKSB8fCBcIlwiO1xuICAgIC8vIHJldHVybiB0b2tlbi5pZFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdHJpbmdIU0xBID0gZXhwb3J0cy5zdHJpbmdIU0wgPSBleHBvcnRzLmNhbGN1bGF0ZVNhdHVyYXRpb24gPSBleHBvcnRzLmNhbGN1bGF0ZUxpZ2h0bmVzcyA9IGV4cG9ydHMuY2FsY3VsYXRlSHVlID0gdm9pZCAwO1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBodWUgdmFsdWUgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0gZGVsdGEgLSBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBtYXhpbXVtIGFuZCBtaW5pbXVtIGNvbG9yIHZhbHVlcy5cbiAqIEBwYXJhbSBjbWF4IC0gVGhlIG1heGltdW0gY29sb3IgdmFsdWUuXG4gKiBAcGFyYW0gciAtIFRoZSByZWQgY29sb3IgdmFsdWUuXG4gKiBAcGFyYW0gZyAtIFRoZSBncmVlbiBjb2xvciB2YWx1ZS5cbiAqIEBwYXJhbSBiIC0gVGhlIGJsdWUgY29sb3IgdmFsdWUuXG4gKiBAcmV0dXJucyBUaGUgY2FsY3VsYXRlZCBodWUgdmFsdWUuXG4gKi9cbmV4cG9ydHMuY2FsY3VsYXRlSHVlID0gKGRlbHRhLCBjbWF4LCByLCBnLCBiKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgaWYgKGRlbHRhID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoY21heCA9PT0gcikge1xuICAgICAgICByZXN1bHQgPSAoKGcgLSBiKSAvIGRlbHRhKSAlIDY7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNtYXggPT09IGcpIHtcbiAgICAgICAgcmVzdWx0ID0gKGIgLSByKSAvIGRlbHRhICsgMjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY21heCA9PT0gYikge1xuICAgICAgICByZXN1bHQgPSAociAtIGcpIC8gZGVsdGEgKyA0O1xuICAgIH1cbiAgICBjb25zdCByb3VuZGVkID0gTWF0aC5yb3VuZChyZXN1bHQgKiA2MCk7XG4gICAgaWYgKHJvdW5kZWQgPCAwKSB7XG4gICAgICAgIHJldHVybiByb3VuZGVkICsgMzYwO1xuICAgIH1cbiAgICByZXR1cm4gcm91bmRlZDtcbn07XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxpZ2h0bmVzcyB2YWx1ZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cbiAqIEBwYXJhbSBjbWF4IC0gVGhlIG1heGltdW0gY29sb3IgdmFsdWUuXG4gKiBAcGFyYW0gY21pbiAtIFRoZSBtaW5pbXVtIGNvbG9yIHZhbHVlLlxuICogQHJldHVybnMgVGhlIGNhbGN1bGF0ZWQgbGlnaHRuZXNzIHZhbHVlLlxuICovXG5leHBvcnRzLmNhbGN1bGF0ZUxpZ2h0bmVzcyA9IChjbWF4LCBjbWluKSA9PiB7XG4gICAgcmV0dXJuIChjbWF4ICsgY21pbikgLyAyO1xufTtcbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc2F0dXJhdGlvbiB2YWx1ZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cbiAqIEBwYXJhbSBkZWx0YSAtIFRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIG1heGltdW0gYW5kIG1pbmltdW0gY29sb3IgdmFsdWVzLlxuICogQHBhcmFtIGxpZ2h0bmVzcyAtIFRoZSBsaWdodG5lc3MgdmFsdWUuXG4gKiBAcmV0dXJucyBUaGUgY2FsY3VsYXRlZCBzYXR1cmF0aW9uIHZhbHVlLlxuICovXG5leHBvcnRzLmNhbGN1bGF0ZVNhdHVyYXRpb24gPSAoZGVsdGEsIGxpZ2h0bmVzcykgPT4ge1xuICAgIHJldHVybiBkZWx0YSA9PT0gMCA/IDAgOiBkZWx0YSAvICgxIC0gTWF0aC5hYnMoMiAqIGxpZ2h0bmVzcyAtIDEpKTtcbn07XG4vKipcbiAqIENvbnZlcnRzIHRoZSBIU0wgdmFsdWVzIHRvIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxuICogQHBhcmFtIGh1ZSAtIFRoZSBodWUgdmFsdWUuXG4gKiBAcGFyYW0gc2F0dXJhdGlvbiAtIFRoZSBzYXR1cmF0aW9uIHZhbHVlLlxuICogQHBhcmFtIGxpZ2h0bmVzcyAtIFRoZSBsaWdodG5lc3MgdmFsdWUuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBIU0wgdmFsdWVzLlxuICovXG5leHBvcnRzLnN0cmluZ0hTTCA9IChodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgPT4ge1xuICAgIHJldHVybiBgaHNsKCR7aHVlfSwgJHtNYXRoLnJvdW5kKHNhdHVyYXRpb24pfSUsICR7TWF0aC5yb3VuZChsaWdodG5lc3MpfSUpYDtcbn07XG4vKipcbiAqIENvbnZlcnRzIHRoZSBIU0xBIHZhbHVlcyB0byBhIHN0cmluZyByZXByZXNlbnRhdGlvbi5cbiAqIEBwYXJhbSBodWUgLSBUaGUgaHVlIHZhbHVlLlxuICogQHBhcmFtIHNhdHVyYXRpb24gLSBUaGUgc2F0dXJhdGlvbiB2YWx1ZS5cbiAqIEBwYXJhbSBsaWdodG5lc3MgLSBUaGUgbGlnaHRuZXNzIHZhbHVlLlxuICogQHBhcmFtIGFscGhhIC0gVGhlIGFscGhhIHZhbHVlLlxuICogQHJldHVybnMgVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgSFNMQSB2YWx1ZXMuXG4gKi9cbmV4cG9ydHMuc3RyaW5nSFNMQSA9IChodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYWxwaGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgaHNsKCR7aHVlfSwgJHtNYXRoLnJvdW5kKHNhdHVyYXRpb24pfSwgJHtNYXRoLnJvdW5kKGxpZ2h0bmVzcyl9JSwgJHthbHBoYX0pYCk7XG4gICAgcmV0dXJuIGBoc2xhKCR7aHVlfSwgJHtNYXRoLnJvdW5kKHNhdHVyYXRpb24pfSUsICR7TWF0aC5yb3VuZChsaWdodG5lc3MpfSUsICR7TWF0aC5yb3VuZChhbHBoYSAqIDEwKSAvIDEwfSlgO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBvYmplY3QgdG8gYW4gSFNMIG9yIEhTTEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7Q29sb3JUb2tlblZhbHVlfSBjb2xvciAtIFRoZSBjb2xvciBvYmplY3QgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIFRoZSBIU0wgb3IgSFNMQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIGNvbG9yLlxuICovXG5jb25zdCBoc2xDb252ZXJ0b3IgPSAoY29sb3IpID0+IHtcbiAgICBjb25zdCB7IHI6IF9yLCBnOiBfZywgYjogX2IsIGE6IF9hIH0gPSBjb2xvcjtcbiAgICBjb25zdCByID0gX3IgLyAyNTU7XG4gICAgY29uc3QgZyA9IF9nIC8gMjU1O1xuICAgIGNvbnN0IGIgPSBfYiAvIDI1NTtcbiAgICBjb25zdCBhID0gX2EgLyAyNTU7XG4gICAgY29uc3QgY21pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgIGNvbnN0IGNtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICBjb25zdCBkZWx0YSA9IGNtYXggLSBjbWluO1xuICAgIGNvbnN0IGh1ZSA9IGhlbHBlcnNfMS5jYWxjdWxhdGVIdWUoZGVsdGEsIGNtYXgsIHIsIGcsIGIpO1xuICAgIGNvbnN0IF9saWdodG5lc3MgPSBoZWxwZXJzXzEuY2FsY3VsYXRlTGlnaHRuZXNzKGNtYXgsIGNtaW4pO1xuICAgIGNvbnN0IF9zYXR1cmF0aW9uID0gaGVscGVyc18xLmNhbGN1bGF0ZVNhdHVyYXRpb24oZGVsdGEsIF9saWdodG5lc3MpO1xuICAgIGNvbnN0IGxpZ2h0bmVzcyA9ICsoX2xpZ2h0bmVzcyAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICBjb25zdCBzYXR1cmF0aW9uID0gKyhfc2F0dXJhdGlvbiAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICByZXR1cm4gYSA9PT0gMSA/IGhlbHBlcnNfMS5zdHJpbmdIU0woaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIDogaGVscGVyc18xLnN0cmluZ0hTTEEoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGEpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGhzbENvbnZlcnRvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGhzbENvbnZlcnRvcl8xID0gcmVxdWlyZShcIi4vaHNsQ29udmVydG9yXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaHNsQ29udmVydG9yXzEuZGVmYXVsdDsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbmNvbnN0IGhzbF9jb252ZXJ0b3JfMSA9IHJlcXVpcmUoXCIuL2hzbC1jb252ZXJ0b3JcIik7XG5jb25zdCBwYXlsb2Fkc18xID0gcmVxdWlyZShcIi4vcGF5bG9hZHNcIik7XG4vLyBGdW5jdGlvbnMgcmVnaXN0cmF0aW9uXG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImN1cnJlbnREYXRlXCIsIGhlbHBlcnNfMS5jdXJyZW50RGF0ZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImdldEJyYW5kSWRcIiwgaGVscGVyc18xLmdldEJyYW5kSWQpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJleHBvcnRlZEZpbGVOYW1lXCIsIGhlbHBlcnNfMS5leHBvcnRlZEZpbGVOYW1lKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiaHNsQ29udmVydG9yXCIsIGhzbF9jb252ZXJ0b3JfMS5kZWZhdWx0KTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiZ3JvdXBOYW1lQ29tbWVudFwiLCBoZWxwZXJzXzEuZ3JvdXBOYW1lQ29tbWVudCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImZpbHRlclRva2Vuc1wiLCBoZWxwZXJzXzEuZmlsdGVyVG9rZW5zKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwicHJpbnRPdXRwdXRcIiwgaGVscGVyc18xLnByaW50T3V0cHV0KTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwic3R5bGV4R3JvdXBOYW1lXCIsIGhlbHBlcnNfMS5zdHlsZXhHcm91cE5hbWUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJqb2luQXJyYXlCeVNsYXNoXCIsIGhlbHBlcnNfMS5qb2luQXJyYXlCeVNsYXNoKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiZ3JhZGllbnRBbmdsZVwiLCBoZWxwZXJzXzEuZ3JhZGllbnRBbmdsZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInNoYWRvd1Rva2VuVmFsdWVcIiwgaGVscGVyc18xLnNoYWRvd1Rva2VuVmFsdWUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJ0b2tlbk5hbWVXaXRoQ2F0ZWdvcnlGaXhEb3VibGVzXCIsIGhlbHBlcnNfMS50b2tlbk5hbWVXaXRoQ2F0ZWdvcnlGaXhEb3VibGVzKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwic2hvd1Rva2Vuc05hbWVzQnlPcmlnaW5QYXRoXCIsIGhlbHBlcnNfMS5zaG93VG9rZW5zTmFtZXNCeU9yaWdpblBhdGgpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJzdHJpbmdpZnlPdXRwdXRcIiwgaGVscGVyc18xLnN0cmluZ2lmeU91dHB1dCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcIm5hbWVGcm9tT3JpZ2luXCIsIGhlbHBlcnNfMS5uYW1lRnJvbU9yaWdpbik7XG4vLyBQYXlsb2Fkc1xuUHVsc2FyLnJlZ2lzdGVyUGF5bG9hZChcImN1cnJlbnRFeHBvcnRlclZlcnNpb25cIiwgcGF5bG9hZHNfMS5jdXJyZW50RXhwb3J0ZXJWZXJzaW9uKTtcblB1bHNhci5yZWdpc3RlclBheWxvYWQoXCJicmFuZE5hbWVzXCIsIHBheWxvYWRzXzEuYnJhbmROYW1lcyk7XG5QdWxzYXIucmVnaXN0ZXJQYXlsb2FkKFwiYmVoYXZpb3JcIiwgcGF5bG9hZHNfMS5iZWhhdmlvcik7XG5QdWxzYXIucmVnaXN0ZXJQYXlsb2FkKFwic3R5bGV4Q2F0ZWdvcmllc1wiLCBwYXlsb2Fkc18xLnN0eWxleENhdGVnb3JpZXMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0eWxleENhdGVnb3JpZXMgPSBleHBvcnRzLmJlaGF2aW9yID0gZXhwb3J0cy5icmFuZE5hbWVzID0gZXhwb3J0cy5jdXJyZW50RXhwb3J0ZXJWZXJzaW9uID0gdm9pZCAwO1xuY29uc3QgZXhwb3J0ZXJfanNvbl8xID0gcmVxdWlyZShcIi4uLy4uL2V4cG9ydGVyLmpzb25cIik7XG5leHBvcnRzLmN1cnJlbnRFeHBvcnRlclZlcnNpb24gPSBleHBvcnRlcl9qc29uXzEudmVyc2lvbjtcbmV4cG9ydHMuYnJhbmROYW1lcyA9IHtcbiAgICBjcHBEYXJrOiBcIkNQUCBEYXJrXCIsXG4gICAgY3BwOiBcIkNQUCBMaWdodFwiLFxuICAgIGtvb3BEYXJrOiBcIktvb3AgRGFya1wiLFxuICAgIGtvb3A6IFwiS29vcCBMaWdodFwiLFxuICAgIHZpZ286IFwiVklHb1wiLFxufTtcbmV4cG9ydHMuYmVoYXZpb3IgPSB7XG4gICAgY29sb3JUb2tlblByZWZpeDogXCJjb2xvclwiLFxuICAgIGJvcmRlclRva2VuUHJlZml4OiBcImJvcmRlclwiLFxuICAgIGdyYWRpZW50VG9rZW5QcmVmaXg6IFwiZ3JhZGllbnRcIixcbiAgICBtZWFzdXJlVG9rZW5QcmVmaXg6IFwibWVhc3VyZVwiLFxuICAgIHNoYWRvd1Rva2VuUHJlZml4OiBcInNoYWRvd1wiLFxuICAgIHR5cG9ncmFwaHlUb2tlblByZWZpeDogXCJ0eXBvZ3JhcGh5XCIsXG59O1xuZXhwb3J0cy5zdHlsZXhDYXRlZ29yaWVzID0gW1xuICAgIFwiY29yZVwiLFxuICAgIFwic2VtYW50aWNcIixcbiAgICBcImNvbXBvbmVudFwiXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==