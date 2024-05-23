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

module.exports = JSON.parse("{\"id\":\"ais.exporter stylex\",\"name\":\"STYLEX & CSS ALL THEMES\",\"description\":\"CSS ans Stylex all theme exporter\",\"author\":\"\",\"organization\":\"Ais servis\",\"homepage\":\"\",\"source_dir\":\"src\",\"version\":\"2.0.1\",\"usesBrands\":true,\"config\":{\"sources\":\"sources.json\",\"output\":\"output.json\",\"js\":\"src/js/helpers.js\"},\"engines\":{\"pulsar\":\"1.0.0\",\"supernova\":\"1.0.0\"},\"tags\":[\"CSS\",\"Tokens\",\"Stylex\"],\"usesThemes\":true}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHNsLWNvbnZlcnRvci9oc2xDb252ZXJ0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYXlsb2Fkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHFDQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVcsR0FBRyxXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTyxHQUFHLEtBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVLE9BQU8sRUFBRTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE1BQU07QUFDeEI7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOEJBQThCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRLEdBQUcsUUFBUSxHQUFHLFdBQVcsR0FBRyxhQUFhLElBQUksVUFBVTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdE5hO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLElBQUksdUJBQXVCLEtBQUssc0JBQXNCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLElBQUksSUFBSSx1QkFBdUIsSUFBSSxzQkFBc0IsS0FBSyxNQUFNO0FBQzNGLG1CQUFtQixJQUFJLElBQUksdUJBQXVCLEtBQUssc0JBQXNCLEtBQUssNEJBQTRCO0FBQzlHOzs7Ozs7Ozs7Ozs7O0FDdkVhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsa0JBQWtCLG1CQUFPLENBQUMsaURBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsV0FBVyw2QkFBNkI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQscUJBQXFCLG1CQUFPLENBQUMsMkRBQWdCO0FBQzdDLDJDQUEyQyxxQ0FBcUMsK0JBQStCLEVBQUUsRUFBRTs7Ozs7Ozs7Ozs7OztBQ0h0RztBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLG1DQUFXO0FBQ3JDLHdCQUF3QixtQkFBTyxDQUFDLHFEQUFpQjtBQUNqRCxtQkFBbUIsbUJBQU8sQ0FBQyxxQ0FBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDZDQUFxQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm5hbWVGcm9tT3JpZ2luID0gZXhwb3J0cy5zaG93VG9rZW5zTmFtZXNCeU9yaWdpblBhdGggPSBleHBvcnRzLnNoYWRvd1Rva2VuVmFsdWUgPSBleHBvcnRzLmdyYWRpZW50QW5nbGUgPSBleHBvcnRzLmpvaW5BcnJheUJ5U2xhc2ggPSBleHBvcnRzLnN0eWxleEdyb3VwTmFtZSA9IGV4cG9ydHMucHJpbnRPdXRwdXQgPSBleHBvcnRzLmZpbHRlclRva2VucyA9IGV4cG9ydHMuZ3JvdXBOYW1lQ29tbWVudCA9IGV4cG9ydHMudG9rZW5OYW1lV2l0aENhdGVnb3J5Rml4RG91YmxlcyA9IGV4cG9ydHMuZXhwb3J0ZWRGaWxlTmFtZSA9IGV4cG9ydHMuZ2V0QnJhbmRJZCA9IGV4cG9ydHMuY3VycmVudERhdGUgPSBleHBvcnRzLnN0cmluZ2lmeU91dHB1dCA9IHZvaWQgMDtcbmNvbnN0IHBheWxvYWRzXzEgPSByZXF1aXJlKFwiLi9wYXlsb2Fkc1wiKTtcbi8qKlxuICogU3RyaW5naWZpZXMgYW4gb2JqZWN0LCByZW1vdmluZyBjaXJjdWxhciByZWZlcmVuY2VzLlxuICpcbiAqIEBwYXJhbSBvYmogLSBUaGUgb2JqZWN0IHRvIHN0cmluZ2lmeS5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmdpZmllZCBvYmplY3QuXG4gKi9cbmV4cG9ydHMuc3RyaW5naWZ5T3V0cHV0ID0gKG9iaikgPT4ge1xuICAgIGxldCBjYWNoZSA9IFtdO1xuICAgIGNvbnN0IHN0ciA9IEpTT04uc3RyaW5naWZ5KG9iaiwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGNhY2hlICYmIGNhY2hlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FjaGUgPT09IG51bGwgfHwgY2FjaGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhY2hlLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KTtcbiAgICBjYWNoZSA9IG51bGw7XG4gICAgcmV0dXJuIHN0cjtcbn07XG4vKipcbiAqIFJldHVybiBjdXJyZW50IHRpbWUgaW4gbG9jYWwgc3RyaW5nXG4gKiBAcmV0dXJucyBUaGUgY3VycmVudCB0aW1lIGluIGxvY2FsIHN0cmluZyBmb3JtYXQuXG4gKi9cbmV4cG9ydHMuY3VycmVudERhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgY29uc3QgdGltZVN0cmluZyA9IGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgcmV0dXJuIGAke2RhdGVTdHJpbmd9ICR7dGltZVN0cmluZ31gO1xufTtcbi8qKlxuICogUmV0dXJuIGlkIG9mIHRoZSB0aGVtZSBhY2NvcmRpbmcgdGhlbWUgbmFtZS5cbiAqXG4gKiBAcGFyYW0gdGhlbWVOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHRoZW1lLlxuICogQHBhcmFtIGJyYW5kcyAtIFRoZSBhcnJheSBvZiBicmFuZCBvYmplY3RzLlxuICogQHJldHVybnMgVGhlIGlkIG9mIHRoZSB0aGVtZS5cbiAqL1xuZXhwb3J0cy5nZXRCcmFuZElkID0gKHRoZW1lTmFtZSwgYnJhbmRzKSA9PiB7XG4gICAgY29uc3QgYnJhbmRPYmplY3QgPSBicmFuZHMuZmlsdGVyKChicmFuZCkgPT4gYnJhbmQubmFtZSA9PT0gdGhlbWVOYW1lKTtcbiAgICBpZiAoYnJhbmRPYmplY3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IGJyYW5kIHdpdGggbmFtZSBcXFwiXCIgKyBcIm5hbWVcIiArIFwiXFxcIiBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBicmFuZE9iamVjdFswXS5pZDtcbn07XG4vKipcbiAqIEdlbmVyYXRlIHRoZSBleHBvcnRlZCBmaWxlIG5hbWUgYmFzZWQgb24gdGhlIHR5cGUgYW5kIGJyYW5kLlxuICpcbiAqIEBwYXJhbSB0eXBlIC0gVGhlIHR5cGUgb2YgdGhlIGZpbGUuXG4gKiBAcGFyYW0gYnJhbmQgLSBUaGUgYnJhbmQgbmFtZS5cbiAqIEByZXR1cm5zIFRoZSBnZW5lcmF0ZWQgZmlsZSBuYW1lLlxuICovXG5leHBvcnRzLmV4cG9ydGVkRmlsZU5hbWUgPSAodHlwZSwgYnJhbmQpID0+IHtcbiAgICBsZXQgZm9sZGVyID0gXCJcIjtcbiAgICBzd2l0Y2ggKGJyYW5kKSB7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLnZpZ286XG4gICAgICAgICAgICBmb2xkZXIgPSBcInZpZ29cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBheWxvYWRzXzEuYnJhbmROYW1lcy5jcHA6XG4gICAgICAgICAgICBmb2xkZXIgPSBcImNwcFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLmtvb3A6XG4gICAgICAgICAgICBmb2xkZXIgPSBcImtvb3BcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBjYXNlIGJyYW5kTmFtZXMua256OlxuICAgICAgICAvLyAgIGZvbGRlciA9IFwia256XCI7XG4gICAgICAgIC8vICAgYnJlYWs7XG4gICAgICAgIC8vIGNhc2UgYnJhbmROYW1lcy5zdXM6XG4gICAgICAgIC8vICAgZm9sZGVyID0gXCJzdXNcIjtcbiAgICAgICAgLy8gICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBoZWFkZXIgY29tbWVudCBFUlJPUjogYnJhbmQgbmFtZSBcXFwiXCIgKyBicmFuZCArIFwiXFxcIiBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gYCR7Zm9sZGVyfS8ke3R5cGV9LmNzc2A7XG59O1xuZXhwb3J0cy50b2tlbk5hbWVXaXRoQ2F0ZWdvcnlGaXhEb3VibGVzID0gKHRva2VuLCBwcmVmaXgpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgbmFtZSA9IChfYSA9IHRva2VuLm9yaWdpbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlkO1xuICAgIGNvbnN0IG5hbWVBcnIgPSBuYW1lID09PSBudWxsIHx8IG5hbWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hbWUuc3BsaXQoXCIvXCIpO1xuICAgIC8vIENoYW5nZSBkYXNoIHRvIENhbWVsQ2FzZVxuICAgIGNvbnN0IHdpdGhvdXREYXNoID0gbmFtZUFyciA9PT0gbnVsbCB8fCBuYW1lQXJyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lQXJyLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBpdGVtLnNwbGl0KFwiLVwiKVxuICAgICAgICAgICAgLm1hcCgod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XG4gICAgfSk7XG4gICAgY29uc3QgcmVtb3ZlZERvdWJsZXMgPSB3aXRob3V0RGFzaCA9PT0gbnVsbCB8fCB3aXRob3V0RGFzaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2l0aG91dERhc2guZmlsdGVyKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsb3dlcmNhc2VkSXRlbSA9IGl0ZW0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ID09PSB3aXRob3V0RGFzaC5maW5kSW5kZXgoKHdvcmQpID0+IHdvcmQudG9Mb3dlckNhc2UoKSA9PT0gbG93ZXJjYXNlZEl0ZW0pO1xuICAgIH0pO1xuICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgcmVtb3ZlZERvdWJsZXMgPT09IG51bGwgfHwgcmVtb3ZlZERvdWJsZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlbW92ZWREb3VibGVzLnVuc2hpZnQocHJlZml4KTtcbiAgICB9XG4gICAgY29uc3Qgam9pbmVkID0gcmVtb3ZlZERvdWJsZXMgPT09IG51bGwgfHwgcmVtb3ZlZERvdWJsZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlbW92ZWREb3VibGVzLm1hcCgod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpLmpvaW4oXCJcIik7XG4gICAgaWYgKCFqb2luZWQpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IGZpcnN0TG93ZXIgPSBqb2luZWQuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyAoam9pbmVkID09PSBudWxsIHx8IGpvaW5lZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogam9pbmVkLnNsaWNlKDEpKTtcbiAgICByZXR1cm4gZmlyc3RMb3dlcjtcbn07XG5sZXQgcHJpbnRDb21tZW50ID0gZmFsc2U7XG5sZXQgZ3JvdXBOYW1lID0gXCJcIjtcbi8qKlxuICogR2VuZXJhdGUgYSBncm91cCBuYW1lIGNvbW1lbnQgYmFzZWQgb24gdGhlIHRva2VuIGdyb3VwLlxuICpcbiAqIEBwYXJhbSB0b2tlbkdyb3VwIC0gVGhlIHRva2VuIGdyb3VwIG9iamVjdC5cbiAqIEByZXR1cm5zIFRoZSBnZW5lcmF0ZWQgZ3JvdXAgbmFtZSBjb21tZW50LlxuICovXG5leHBvcnRzLmdyb3VwTmFtZUNvbW1lbnQgPSAodG9rZW5Hcm91cCkgPT4ge1xuICAgIGlmICghKHRva2VuR3JvdXAgPT09IG51bGwgfHwgdG9rZW5Hcm91cCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9rZW5Hcm91cC5wYXJlbnQpKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBjb25zdCB7IHBhcmVudDogeyBuYW1lIH0gfSA9IHRva2VuR3JvdXA7XG4gICAgaWYgKG5hbWUgIT09IGdyb3VwTmFtZSkge1xuICAgICAgICBncm91cE5hbWUgPSBuYW1lO1xuICAgICAgICBwcmludENvbW1lbnQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJpbnRDb21tZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBwcmludENvbW1lbnRcbiAgICAgICAgPyBgLyogLS0tICR7Z3JvdXBOYW1lfSAtLS0gKi9cXG5gIDogXCJcIjtcbn07XG4vKipcbiAqIEZpbHRlciB0b2tlbnMgYmFzZWQgb24gdGhlIG5hbWUuXG4gKlxuICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSB0byBmaWx0ZXIgYnkuXG4gKiBAcGFyYW0gdG9rZW5zIC0gVGhlIGFycmF5IG9mIHRva2Vucy5cbiAqIEByZXR1cm5zIFRoZSBmaWx0ZXJlZCBhcnJheSBvZiB0b2tlbnMuXG4gKi9cbmV4cG9ydHMuZmlsdGVyVG9rZW5zID0gKG5hbWUsIHRva2VucykgPT4ge1xuICAgIHJldHVybiB0b2tlbnMuZmlsdGVyKCh0b2tlbikgPT4ge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICgoX2EgPSB0b2tlbi5vcmlnaW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW4ub3JpZ2luLm5hbWUuaW5jbHVkZXMobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiQ2h5YmFcIjtcbiAgICB9KTtcbn07XG4vKipcbiAqIFByaW50IHRoZSBvdXRwdXQgZGF0YSB0byB0aGUgY29uc29sZS5cbiAqXG4gKiBAcGFyYW0gZGF0YSAtIFRoZSBkYXRhIHRvIHByaW50LlxuICovXG5leHBvcnRzLnByaW50T3V0cHV0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhleHBvcnRzLnN0cmluZ2lmeU91dHB1dChkYXRhKSk7XG59O1xuLyoqXG4gKiBHZW5lcmF0ZSBhIGdyb3VwIG5hbWUgZm9yIHN0eWxleCBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0gbmFtZXMgLSBUaGUgc3RyaW5ncyB0byBnZW5lcmF0ZSB0aGUgZ3JvdXAgbmFtZSBmcm9tLlxuICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCBncm91cCBuYW1lLlxuICovXG5leHBvcnRzLnN0eWxleEdyb3VwTmFtZSA9ICguLi5uYW1lcykgPT4ge1xuICAgIHJldHVybiBuYW1lc1xuICAgICAgICAuam9pbihcIiBcIilcbiAgICAgICAgLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aMC05XSsoLikvZywgKG0sIGNocikgPT4gY2hyLnRvVXBwZXJDYXNlKCkpO1xufTtcbmV4cG9ydHMuam9pbkFycmF5QnlTbGFzaCA9IChzdHJBcnIpID0+IHtcbiAgICByZXR1cm4gc3RyQXJyLmpvaW4oXCIgLyBcIik7XG59O1xuZXhwb3J0cy5ncmFkaWVudEFuZ2xlID0gKGZyb20sIHRvKSA9PiB7XG4gICAgY29uc3QgZGVsdGFYID0gdG8ueCAtIGZyb20ueDtcbiAgICBjb25zdCBkZWx0YVkgPSB0by55IC0gZnJvbS55O1xuICAgIGNvbnN0IHJhZGlhbnMgPSBNYXRoLmF0YW4yKGRlbHRhWSwgZGVsdGFYKTtcbiAgICBjb25zdCByZXN1bHQgPSAocmFkaWFucyAqIDE4MCkgLyBNYXRoLlBJO1xuICAgIGNvbnN0IGZpeGVkUmVzdWx0ID0gcmVzdWx0ICsgOTA7XG4gICAgcmV0dXJuIChmaXhlZFJlc3VsdCA8IDAgPyBmaXhlZFJlc3VsdCArIDM2MCA6IGZpeGVkUmVzdWx0KSAlIDM2MDtcbn07XG5jb25zdCBnZXRWYWx1ZVdpdGhDb3JyZWN0VW5pdCA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gYCR7dmFsdWV9YDtcbiAgICB9XG4gICAgcmV0dXJuIGAke3ZhbHVlfXB4YDtcbn07XG5jb25zdCBub25OZWdhdGl2ZVZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlIDwgMCA/IDAgOiB2YWx1ZTtcbn07XG5leHBvcnRzLnNoYWRvd1Rva2VuVmFsdWUgPSAodG9rZW4pID0+IHtcbiAgICBjb25zdCB7IGNvbG9yLCB4LCB5LCByYWRpdXMsIHNwcmVhZCB9ID0gdG9rZW4udmFsdWU7XG4gICAgY29uc3QgYmx1clJhZGl1cyA9IGdldFZhbHVlV2l0aENvcnJlY3RVbml0KG5vbk5lZ2F0aXZlVmFsdWUocmFkaXVzLm1lYXN1cmUpKTtcbiAgICBjb25zdCBvZmZzZXRYID0gZ2V0VmFsdWVXaXRoQ29ycmVjdFVuaXQoeC5tZWFzdXJlKTtcbiAgICBjb25zdCBvZmZzZXRZID0gZ2V0VmFsdWVXaXRoQ29ycmVjdFVuaXQoeS5tZWFzdXJlKTtcbiAgICBjb25zdCBzcHJlYWRSYWRpdXMgPSBnZXRWYWx1ZVdpdGhDb3JyZWN0VW5pdChzcHJlYWQubWVhc3VyZSk7XG4gICAgcmV0dXJuIGAke29mZnNldFh9ICR7b2Zmc2V0WX0gJHtibHVyUmFkaXVzfSAke3NwcmVhZFJhZGl1c30gIyR7Y29sb3IuaGV4fWA7XG59O1xuZXhwb3J0cy5zaG93VG9rZW5zTmFtZXNCeU9yaWdpblBhdGggPSAodG9rZW4pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0b2tlbk9yaWdpbk9iamVjdDogZXhwb3J0cy5zdHJpbmdpZnlPdXRwdXQodG9rZW4ub3JpZ2luKSxcbiAgICB9O1xufTtcbmNvbnN0IHJlbW92ZWREb3VibGVzID0gKHN0cmluZ0FycikgPT4ge1xuICAgIGlmICghc3RyaW5nQXJyKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZ0FyciA9PT0gbnVsbCB8fCBzdHJpbmdBcnIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0cmluZ0Fyci5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxvd2VyY2FzZWRJdGVtID0gaXRlbS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gaW5kZXggPT09IHN0cmluZ0Fyci5maW5kSW5kZXgoKHdvcmQpID0+IHdvcmQudG9Mb3dlckNhc2UoKSA9PT0gbG93ZXJjYXNlZEl0ZW0pO1xuICAgIH0pO1xufTtcbmV4cG9ydHMubmFtZUZyb21PcmlnaW4gPSAodG9rZW4sIHVzZVByZWZpeCA9IHRydWUpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGNvbnN0IHJlbW92ZWRTcGVjaWFsQ2hhcnMgPSAoX2IgPSAoX2EgPSB0b2tlbi5vcmlnaW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVwbGFjZSgvXFwtfFxccy9nLCBcIlwiKTtcbiAgICBjb25zdCBzcGxpdHRlZE5hbWUgPSByZW1vdmVkU3BlY2lhbENoYXJzID09PSBudWxsIHx8IHJlbW92ZWRTcGVjaWFsQ2hhcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlbW92ZWRTcGVjaWFsQ2hhcnMuc3BsaXQoXCIvXCIpO1xuICAgIHJldHVybiByZW1vdmVkRG91YmxlcyhzcGxpdHRlZE5hbWUpXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpdGVtLnNsaWNlKDEpKVxuICAgICAgICAuam9pbihcIlwiKTtcbiAgICAvLyByZXR1cm4gbmFtZT8uc3BsaXQoXCIvXCIpLm1hcCgoaXRlbSkgPT4gaXRlbS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGl0ZW0uc2xpY2UoMSkpLmpvaW4oXCJcIikgfHwgXCJcIjtcbiAgICAvLyByZXR1cm4gdG9rZW4uaWRcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RyaW5nSFNMQSA9IGV4cG9ydHMuc3RyaW5nSFNMID0gZXhwb3J0cy5jYWxjdWxhdGVTYXR1cmF0aW9uID0gZXhwb3J0cy5jYWxjdWxhdGVMaWdodG5lc3MgPSBleHBvcnRzLmNhbGN1bGF0ZUh1ZSA9IHZvaWQgMDtcbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgaHVlIHZhbHVlIGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIGRlbHRhIC0gVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbWF4aW11bSBhbmQgbWluaW11bSBjb2xvciB2YWx1ZXMuXG4gKiBAcGFyYW0gY21heCAtIFRoZSBtYXhpbXVtIGNvbG9yIHZhbHVlLlxuICogQHBhcmFtIHIgLSBUaGUgcmVkIGNvbG9yIHZhbHVlLlxuICogQHBhcmFtIGcgLSBUaGUgZ3JlZW4gY29sb3IgdmFsdWUuXG4gKiBAcGFyYW0gYiAtIFRoZSBibHVlIGNvbG9yIHZhbHVlLlxuICogQHJldHVybnMgVGhlIGNhbGN1bGF0ZWQgaHVlIHZhbHVlLlxuICovXG5leHBvcnRzLmNhbGN1bGF0ZUh1ZSA9IChkZWx0YSwgY21heCwgciwgZywgYikgPT4ge1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIGlmIChkZWx0YSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGNtYXggPT09IHIpIHtcbiAgICAgICAgcmVzdWx0ID0gKChnIC0gYikgLyBkZWx0YSkgJSA2O1xuICAgIH1cbiAgICBlbHNlIGlmIChjbWF4ID09PSBnKSB7XG4gICAgICAgIHJlc3VsdCA9IChiIC0gcikgLyBkZWx0YSArIDI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNtYXggPT09IGIpIHtcbiAgICAgICAgcmVzdWx0ID0gKHIgLSBnKSAvIGRlbHRhICsgNDtcbiAgICB9XG4gICAgY29uc3Qgcm91bmRlZCA9IE1hdGgucm91bmQocmVzdWx0ICogNjApO1xuICAgIGlmIChyb3VuZGVkIDwgMCkge1xuICAgICAgICByZXR1cm4gcm91bmRlZCArIDM2MDtcbiAgICB9XG4gICAgcmV0dXJuIHJvdW5kZWQ7XG59O1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsaWdodG5lc3MgdmFsdWUgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0gY21heCAtIFRoZSBtYXhpbXVtIGNvbG9yIHZhbHVlLlxuICogQHBhcmFtIGNtaW4gLSBUaGUgbWluaW11bSBjb2xvciB2YWx1ZS5cbiAqIEByZXR1cm5zIFRoZSBjYWxjdWxhdGVkIGxpZ2h0bmVzcyB2YWx1ZS5cbiAqL1xuZXhwb3J0cy5jYWxjdWxhdGVMaWdodG5lc3MgPSAoY21heCwgY21pbikgPT4ge1xuICAgIHJldHVybiAoY21heCArIGNtaW4pIC8gMjtcbn07XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNhdHVyYXRpb24gdmFsdWUgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0gZGVsdGEgLSBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBtYXhpbXVtIGFuZCBtaW5pbXVtIGNvbG9yIHZhbHVlcy5cbiAqIEBwYXJhbSBsaWdodG5lc3MgLSBUaGUgbGlnaHRuZXNzIHZhbHVlLlxuICogQHJldHVybnMgVGhlIGNhbGN1bGF0ZWQgc2F0dXJhdGlvbiB2YWx1ZS5cbiAqL1xuZXhwb3J0cy5jYWxjdWxhdGVTYXR1cmF0aW9uID0gKGRlbHRhLCBsaWdodG5lc3MpID0+IHtcbiAgICByZXR1cm4gZGVsdGEgPT09IDAgPyAwIDogZGVsdGEgLyAoMSAtIE1hdGguYWJzKDIgKiBsaWdodG5lc3MgLSAxKSk7XG59O1xuLyoqXG4gKiBDb252ZXJ0cyB0aGUgSFNMIHZhbHVlcyB0byBhIHN0cmluZyByZXByZXNlbnRhdGlvbi5cbiAqIEBwYXJhbSBodWUgLSBUaGUgaHVlIHZhbHVlLlxuICogQHBhcmFtIHNhdHVyYXRpb24gLSBUaGUgc2F0dXJhdGlvbiB2YWx1ZS5cbiAqIEBwYXJhbSBsaWdodG5lc3MgLSBUaGUgbGlnaHRuZXNzIHZhbHVlLlxuICogQHJldHVybnMgVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgSFNMIHZhbHVlcy5cbiAqL1xuZXhwb3J0cy5zdHJpbmdIU0wgPSAoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpID0+IHtcbiAgICByZXR1cm4gYGhzbCgke2h1ZX0sICR7TWF0aC5yb3VuZChzYXR1cmF0aW9uKX0lLCAke01hdGgucm91bmQobGlnaHRuZXNzKX0lKWA7XG59O1xuLyoqXG4gKiBDb252ZXJ0cyB0aGUgSFNMQSB2YWx1ZXMgdG8gYSBzdHJpbmcgcmVwcmVzZW50YXRpb24uXG4gKiBAcGFyYW0gaHVlIC0gVGhlIGh1ZSB2YWx1ZS5cbiAqIEBwYXJhbSBzYXR1cmF0aW9uIC0gVGhlIHNhdHVyYXRpb24gdmFsdWUuXG4gKiBAcGFyYW0gbGlnaHRuZXNzIC0gVGhlIGxpZ2h0bmVzcyB2YWx1ZS5cbiAqIEBwYXJhbSBhbHBoYSAtIFRoZSBhbHBoYSB2YWx1ZS5cbiAqIEByZXR1cm5zIFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIEhTTEEgdmFsdWVzLlxuICovXG5leHBvcnRzLnN0cmluZ0hTTEEgPSAoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGFscGhhKSA9PiB7XG4gICAgY29uc29sZS5sb2coYGhzbCgke2h1ZX0sICR7TWF0aC5yb3VuZChzYXR1cmF0aW9uKX0sICR7TWF0aC5yb3VuZChsaWdodG5lc3MpfSUsICR7YWxwaGF9KWApO1xuICAgIHJldHVybiBgaHNsYSgke2h1ZX0sICR7TWF0aC5yb3VuZChzYXR1cmF0aW9uKX0lLCAke01hdGgucm91bmQobGlnaHRuZXNzKX0lLCAke01hdGgucm91bmQoYWxwaGEgKiAxMCkgLyAxMH0pYDtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG4vKipcbiAqIENvbnZlcnRzIGEgY29sb3Igb2JqZWN0IHRvIGFuIEhTTCBvciBIU0xBIHN0cmluZyByZXByZXNlbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0NvbG9yVG9rZW5WYWx1ZX0gY29sb3IgLSBUaGUgY29sb3Igb2JqZWN0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyBUaGUgSFNMIG9yIEhTTEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjb2xvci5cbiAqL1xuY29uc3QgaHNsQ29udmVydG9yID0gKGNvbG9yKSA9PiB7XG4gICAgY29uc3QgeyByOiBfciwgZzogX2csIGI6IF9iLCBhOiBfYSB9ID0gY29sb3I7XG4gICAgY29uc3QgciA9IF9yIC8gMjU1O1xuICAgIGNvbnN0IGcgPSBfZyAvIDI1NTtcbiAgICBjb25zdCBiID0gX2IgLyAyNTU7XG4gICAgY29uc3QgYSA9IF9hIC8gMjU1O1xuICAgIGNvbnN0IGNtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICBjb25zdCBjbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgY29uc3QgZGVsdGEgPSBjbWF4IC0gY21pbjtcbiAgICBjb25zdCBodWUgPSBoZWxwZXJzXzEuY2FsY3VsYXRlSHVlKGRlbHRhLCBjbWF4LCByLCBnLCBiKTtcbiAgICBjb25zdCBfbGlnaHRuZXNzID0gaGVscGVyc18xLmNhbGN1bGF0ZUxpZ2h0bmVzcyhjbWF4LCBjbWluKTtcbiAgICBjb25zdCBfc2F0dXJhdGlvbiA9IGhlbHBlcnNfMS5jYWxjdWxhdGVTYXR1cmF0aW9uKGRlbHRhLCBfbGlnaHRuZXNzKTtcbiAgICBjb25zdCBsaWdodG5lc3MgPSArKF9saWdodG5lc3MgKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgY29uc3Qgc2F0dXJhdGlvbiA9ICsoX3NhdHVyYXRpb24gKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgcmV0dXJuIGEgPT09IDEgPyBoZWxwZXJzXzEuc3RyaW5nSFNMKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSA6IGhlbHBlcnNfMS5zdHJpbmdIU0xBKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBhKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBoc2xDb252ZXJ0b3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBoc2xDb252ZXJ0b3JfMSA9IHJlcXVpcmUoXCIuL2hzbENvbnZlcnRvclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhzbENvbnZlcnRvcl8xLmRlZmF1bHQ7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG5jb25zdCBoc2xfY29udmVydG9yXzEgPSByZXF1aXJlKFwiLi9oc2wtY29udmVydG9yXCIpO1xuY29uc3QgcGF5bG9hZHNfMSA9IHJlcXVpcmUoXCIuL3BheWxvYWRzXCIpO1xuLy8gRnVuY3Rpb25zIHJlZ2lzdHJhdGlvblxuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJjdXJyZW50RGF0ZVwiLCBoZWxwZXJzXzEuY3VycmVudERhdGUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJnZXRCcmFuZElkXCIsIGhlbHBlcnNfMS5nZXRCcmFuZElkKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiZXhwb3J0ZWRGaWxlTmFtZVwiLCBoZWxwZXJzXzEuZXhwb3J0ZWRGaWxlTmFtZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImhzbENvbnZlcnRvclwiLCBoc2xfY29udmVydG9yXzEuZGVmYXVsdCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImdyb3VwTmFtZUNvbW1lbnRcIiwgaGVscGVyc18xLmdyb3VwTmFtZUNvbW1lbnQpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJmaWx0ZXJUb2tlbnNcIiwgaGVscGVyc18xLmZpbHRlclRva2Vucyk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInByaW50T3V0cHV0XCIsIGhlbHBlcnNfMS5wcmludE91dHB1dCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInN0eWxleEdyb3VwTmFtZVwiLCBoZWxwZXJzXzEuc3R5bGV4R3JvdXBOYW1lKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiam9pbkFycmF5QnlTbGFzaFwiLCBoZWxwZXJzXzEuam9pbkFycmF5QnlTbGFzaCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImdyYWRpZW50QW5nbGVcIiwgaGVscGVyc18xLmdyYWRpZW50QW5nbGUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJzaGFkb3dUb2tlblZhbHVlXCIsIGhlbHBlcnNfMS5zaGFkb3dUb2tlblZhbHVlKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwidG9rZW5OYW1lV2l0aENhdGVnb3J5Rml4RG91Ymxlc1wiLCBoZWxwZXJzXzEudG9rZW5OYW1lV2l0aENhdGVnb3J5Rml4RG91Ymxlcyk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInNob3dUb2tlbnNOYW1lc0J5T3JpZ2luUGF0aFwiLCBoZWxwZXJzXzEuc2hvd1Rva2Vuc05hbWVzQnlPcmlnaW5QYXRoKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwic3RyaW5naWZ5T3V0cHV0XCIsIGhlbHBlcnNfMS5zdHJpbmdpZnlPdXRwdXQpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJuYW1lRnJvbU9yaWdpblwiLCBoZWxwZXJzXzEubmFtZUZyb21PcmlnaW4pO1xuLy8gUGF5bG9hZHNcblB1bHNhci5yZWdpc3RlclBheWxvYWQoXCJjdXJyZW50RXhwb3J0ZXJWZXJzaW9uXCIsIHBheWxvYWRzXzEuY3VycmVudEV4cG9ydGVyVmVyc2lvbik7XG5QdWxzYXIucmVnaXN0ZXJQYXlsb2FkKFwiYnJhbmROYW1lc1wiLCBwYXlsb2Fkc18xLmJyYW5kTmFtZXMpO1xuUHVsc2FyLnJlZ2lzdGVyUGF5bG9hZChcImJlaGF2aW9yXCIsIHBheWxvYWRzXzEuYmVoYXZpb3IpO1xuUHVsc2FyLnJlZ2lzdGVyUGF5bG9hZChcInN0eWxleENhdGVnb3JpZXNcIiwgcGF5bG9hZHNfMS5zdHlsZXhDYXRlZ29yaWVzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdHlsZXhDYXRlZ29yaWVzID0gZXhwb3J0cy5iZWhhdmlvciA9IGV4cG9ydHMuYnJhbmROYW1lcyA9IGV4cG9ydHMuY3VycmVudEV4cG9ydGVyVmVyc2lvbiA9IHZvaWQgMDtcbmNvbnN0IGV4cG9ydGVyX2pzb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9leHBvcnRlci5qc29uXCIpO1xuZXhwb3J0cy5jdXJyZW50RXhwb3J0ZXJWZXJzaW9uID0gZXhwb3J0ZXJfanNvbl8xLnZlcnNpb247XG5leHBvcnRzLmJyYW5kTmFtZXMgPSB7XG4gICAgY3BwRGFyazogXCJDUFAgRGFya1wiLFxuICAgIGNwcDogXCJDUFAgTGlnaHRcIixcbiAgICBrb29wRGFyazogXCJLb29wIERhcmtcIixcbiAgICBrb29wOiBcIktvb3AgTGlnaHRcIixcbiAgICB2aWdvOiBcIlZJR29cIixcbn07XG5leHBvcnRzLmJlaGF2aW9yID0ge1xuICAgIGNvbG9yVG9rZW5QcmVmaXg6IFwiY29sb3JcIixcbiAgICBib3JkZXJUb2tlblByZWZpeDogXCJib3JkZXJcIixcbiAgICBncmFkaWVudFRva2VuUHJlZml4OiBcImdyYWRpZW50XCIsXG4gICAgbWVhc3VyZVRva2VuUHJlZml4OiBcIm1lYXN1cmVcIixcbiAgICBzaGFkb3dUb2tlblByZWZpeDogXCJzaGFkb3dcIixcbiAgICB0eXBvZ3JhcGh5VG9rZW5QcmVmaXg6IFwidHlwb2dyYXBoeVwiLFxufTtcbmV4cG9ydHMuc3R5bGV4Q2F0ZWdvcmllcyA9IFtcbiAgICBcImNvcmVcIixcbiAgICBcInNlbWFudGljXCIsXG4gICAgXCJjb21wb25lbnRcIlxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=