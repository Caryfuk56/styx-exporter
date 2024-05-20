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
exports.shadowTokenValue = exports.gradientAngle = exports.joinArrayBySlash = exports.toLowerCase = exports.stylexGroupName = exports.printOutput = exports.filterTokens = exports.groupNameComment = exports.tokenNameWithCategoryFixDoubles = exports.tokenNameWithCategory = exports.tokenNameByOriginName = exports.stylexTokenName = exports.variableName = exports.exportedFileName = exports.getBrandId = exports.currentDate = void 0;
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
    // console.log(stringifyOutput(token))
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
    console.log(stringifyOutput(withoutDash));
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
Pulsar.registerFunction("tokenNameWithCategoryFixDoubles", helpers_1.tokenNameWithCategoryFixDoubles);
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
exports.stylexCategories = exports.behavior = exports.brandNames = exports.brandNamesOld = exports.currentExporterVersion = void 0;
const exporter_json_1 = __webpack_require__(/*! ../../exporter.json */ "../exporter.json");
exports.currentExporterVersion = exporter_json_1.version;
exports.brandNamesOld = {
    vigo: "01 - VIGo",
    cpp: "02 - CPP",
    koop: "03 - Koop",
    knz: "04 - KNZ",
    sus: "05 - SUS",
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHNsLWNvbnZlcnRvci9oc2xDb252ZXJ0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYXlsb2Fkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHFDQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVcsR0FBRyxXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTyxHQUFHLEtBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImhlbHBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zaGFkb3dUb2tlblZhbHVlID0gZXhwb3J0cy5ncmFkaWVudEFuZ2xlID0gZXhwb3J0cy5qb2luQXJyYXlCeVNsYXNoID0gZXhwb3J0cy50b0xvd2VyQ2FzZSA9IGV4cG9ydHMuc3R5bGV4R3JvdXBOYW1lID0gZXhwb3J0cy5wcmludE91dHB1dCA9IGV4cG9ydHMuZmlsdGVyVG9rZW5zID0gZXhwb3J0cy5ncm91cE5hbWVDb21tZW50ID0gZXhwb3J0cy50b2tlbk5hbWVXaXRoQ2F0ZWdvcnlGaXhEb3VibGVzID0gZXhwb3J0cy50b2tlbk5hbWVXaXRoQ2F0ZWdvcnkgPSBleHBvcnRzLnRva2VuTmFtZUJ5T3JpZ2luTmFtZSA9IGV4cG9ydHMuc3R5bGV4VG9rZW5OYW1lID0gZXhwb3J0cy52YXJpYWJsZU5hbWUgPSBleHBvcnRzLmV4cG9ydGVkRmlsZU5hbWUgPSBleHBvcnRzLmdldEJyYW5kSWQgPSBleHBvcnRzLmN1cnJlbnREYXRlID0gdm9pZCAwO1xuY29uc3QgcGF5bG9hZHNfMSA9IHJlcXVpcmUoXCIuL3BheWxvYWRzXCIpO1xuLyoqXG4gKiBTdHJpbmdpZmllcyBhbiBvYmplY3QsIHJlbW92aW5nIGNpcmN1bGFyIHJlZmVyZW5jZXMuXG4gKlxuICogQHBhcmFtIG9iaiAtIFRoZSBvYmplY3QgdG8gc3RyaW5naWZ5LlxuICogQHJldHVybnMgVGhlIHN0cmluZ2lmaWVkIG9iamVjdC5cbiAqL1xuY29uc3Qgc3RyaW5naWZ5T3V0cHV0ID0gKG9iaikgPT4ge1xuICAgIGxldCBjYWNoZSA9IFtdO1xuICAgIGNvbnN0IHN0ciA9IEpTT04uc3RyaW5naWZ5KG9iaiwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGNhY2hlICYmIGNhY2hlLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FjaGUgPT09IG51bGwgfHwgY2FjaGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhY2hlLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KTtcbiAgICBjYWNoZSA9IG51bGw7XG4gICAgcmV0dXJuIHN0cjtcbn07XG4vKipcbiAqIFJldHVybiBjdXJyZW50IHRpbWUgaW4gbG9jYWwgc3RyaW5nXG4gKiBAcmV0dXJucyBUaGUgY3VycmVudCB0aW1lIGluIGxvY2FsIHN0cmluZyBmb3JtYXQuXG4gKi9cbmV4cG9ydHMuY3VycmVudERhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgY29uc3QgdGltZVN0cmluZyA9IGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgcmV0dXJuIGAke2RhdGVTdHJpbmd9ICR7dGltZVN0cmluZ31gO1xufTtcbi8qKlxuICogUmV0dXJuIGlkIG9mIHRoZSB0aGVtZSBhY2NvcmRpbmcgdGhlbWUgbmFtZS5cbiAqXG4gKiBAcGFyYW0gdGhlbWVOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHRoZW1lLlxuICogQHBhcmFtIGJyYW5kcyAtIFRoZSBhcnJheSBvZiBicmFuZCBvYmplY3RzLlxuICogQHJldHVybnMgVGhlIGlkIG9mIHRoZSB0aGVtZS5cbiAqL1xuZXhwb3J0cy5nZXRCcmFuZElkID0gKHRoZW1lTmFtZSwgYnJhbmRzKSA9PiB7XG4gICAgY29uc3QgYnJhbmRPYmplY3QgPSBicmFuZHMuZmlsdGVyKChicmFuZCkgPT4gYnJhbmQubmFtZSA9PT0gdGhlbWVOYW1lKTtcbiAgICBpZiAoYnJhbmRPYmplY3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IGJyYW5kIHdpdGggbmFtZSBcXFwiXCIgKyBcIm5hbWVcIiArIFwiXFxcIiBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBicmFuZE9iamVjdFswXS5pZDtcbn07XG4vKipcbiAqIEdlbmVyYXRlIHRoZSBleHBvcnRlZCBmaWxlIG5hbWUgYmFzZWQgb24gdGhlIHR5cGUgYW5kIGJyYW5kLlxuICpcbiAqIEBwYXJhbSB0eXBlIC0gVGhlIHR5cGUgb2YgdGhlIGZpbGUuXG4gKiBAcGFyYW0gYnJhbmQgLSBUaGUgYnJhbmQgbmFtZS5cbiAqIEByZXR1cm5zIFRoZSBnZW5lcmF0ZWQgZmlsZSBuYW1lLlxuICovXG5leHBvcnRzLmV4cG9ydGVkRmlsZU5hbWUgPSAodHlwZSwgYnJhbmQpID0+IHtcbiAgICBsZXQgZm9sZGVyID0gXCJcIjtcbiAgICBzd2l0Y2ggKGJyYW5kKSB7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLnZpZ286XG4gICAgICAgICAgICBmb2xkZXIgPSBcInZpZ29cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHBheWxvYWRzXzEuYnJhbmROYW1lcy5jcHA6XG4gICAgICAgICAgICBmb2xkZXIgPSBcImNwcFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLmtvb3A6XG4gICAgICAgICAgICBmb2xkZXIgPSBcImtvb3BcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBjYXNlIGJyYW5kTmFtZXMua256OlxuICAgICAgICAvLyAgIGZvbGRlciA9IFwia256XCI7XG4gICAgICAgIC8vICAgYnJlYWs7XG4gICAgICAgIC8vIGNhc2UgYnJhbmROYW1lcy5zdXM6XG4gICAgICAgIC8vICAgZm9sZGVyID0gXCJzdXNcIjtcbiAgICAgICAgLy8gICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsZSBoZWFkZXIgY29tbWVudCBFUlJPUjogYnJhbmQgbmFtZSBcXFwiXCIgKyBicmFuZCArIFwiXFxcIiBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gYCR7Zm9sZGVyfS8ke3R5cGV9LmNzc2A7XG59O1xuLyoqXG4gKiBHZW5lcmF0ZSBhIHZhcmlhYmxlIG5hbWUgYmFzZWQgb24gdGhlIHByZWZpeCwgdG9rZW4sIGFuZCB0b2tlbiBncm91cC5cbiAqXG4gKiBAcGFyYW0gcHJlZml4IC0gVGhlIHByZWZpeCBmb3IgdGhlIHZhcmlhYmxlIG5hbWUuXG4gKiBAcGFyYW0gdG9rZW4gLSBUaGUgdG9rZW4gb2JqZWN0LlxuICogQHBhcmFtIHRva2VuR3JvdXAgLSBUaGUgdG9rZW4gZ3JvdXAgb2JqZWN0LlxuICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCB2YXJpYWJsZSBuYW1lLlxuICovXG5leHBvcnRzLnZhcmlhYmxlTmFtZSA9IChwcmVmaXgsIHRva2VuLCB0b2tlbkdyb3VwKSA9PiB7XG4gICAgLy8gQ3JlYXRlIGFycmF5IHdpdGggYWxsIHBhdGggc2VnbWVudHMgYW5kIHRva2VuIG5hbWUgYXQgdGhlIGVuZC5cbiAgICBjb25zdCBzZWdtZW50cyA9IFsuLi50b2tlbkdyb3VwLnBhdGhdO1xuICAgIGlmICghdG9rZW5Hcm91cC5pc1Jvb3QpIHtcbiAgICAgICAgc2VnbWVudHMucHVzaCh0b2tlbkdyb3VwLm5hbWUpO1xuICAgIH1cbiAgICBzZWdtZW50cy5wdXNoKHRva2VuLm5hbWUpO1xuICAgIGlmIChwcmVmaXggJiYgcHJlZml4Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2VnbWVudHMudW5zaGlmdChwcmVmaXgpO1xuICAgIH1cbiAgICAvLyBjcmVhdGUgb25lIHN0cmluZyB3aXRoIHNwYWNlIGZvciBjYW1lbENhc2VcbiAgICBjb25zdCBzZW50ZW5jZSA9IHNlZ21lbnRzXG4gICAgICAgIC5qb2luKFwiIFwiKVxuICAgICAgICAudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvW15hLXpBLVowLTldKyguKS9nLCAobSwgY2hyKSA9PiBjaHIudG9VcHBlckNhc2UoKSk7XG4gICAgcmV0dXJuIHNlbnRlbmNlO1xufTtcbi8qKlxuICogR2VuZXJhdGUgYSBzdHlsZXggdG9rZW4gbmFtZSBiYXNlZCBvbiB0aGUgdG9rZW4gYW5kIHRva2VuIGdyb3VwLlxuICpcbiAqIEBwYXJhbSB0b2tlbiAtIFRoZSB0b2tlbiBvYmplY3QuXG4gKiBAcGFyYW0gdG9rZW5Hcm91cCAtIFRoZSB0b2tlbiBncm91cCBvYmplY3QuXG4gKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIHN0eWxleCB0b2tlbiBuYW1lLlxuICovXG5leHBvcnRzLnN0eWxleFRva2VuTmFtZSA9ICh0b2tlbiwgdG9rZW5Hcm91cCkgPT4ge1xuICAgIC8vIENyZWF0ZSBhcnJheSB3aXRoIGFsbCBwYXRoIHNlZ21lbnRzIGFuZCB0b2tlbiBuYW1lIGF0IHRoZSBlbmQuXG4gICAgY29uc3Qgc2VnbWVudHMgPSBbLi4udG9rZW5Hcm91cC5wYXRoXTtcbiAgICBpZiAoIXRva2VuR3JvdXAuaXNSb290KSB7XG4gICAgICAgIHNlZ21lbnRzLnB1c2godG9rZW5Hcm91cC5uYW1lKTtcbiAgICB9XG4gICAgc2VnbWVudHMucHVzaCh0b2tlbi5uYW1lKTtcbiAgICAvLyBjcmV0ZSBvbmUgc3RyaW5nIHdpdGggc3BhY2UgZm9yIGNhbWVsQ2FzZVxuICAgIGNvbnN0IHNlbnRlbmNlID0gc2VnbWVudHNcbiAgICAgICAgLmpvaW4oXCIgXCIpXG4gICAgICAgIC50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOV0rKC4pL2csIChtLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKTtcbiAgICByZXR1cm4gc2VudGVuY2U7XG59O1xuLyoqXG4gKiBHZW5lcmF0ZSBhIHRva2VuIG5hbWUgYmFzZWQgb24gdGhlIG9yaWdpbiBuYW1lIG9mIHRoZSB0b2tlbi5cbiAqXG4gKiBAcGFyYW0gdG9rZW4gLSBUaGUgdG9rZW4gb2JqZWN0LlxuICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCB0b2tlbiBuYW1lLlxuICovXG5leHBvcnRzLnRva2VuTmFtZUJ5T3JpZ2luTmFtZSA9ICh0b2tlbiwga2VlcENhdGVnb3J5KSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGlmICghdG9rZW4ub3JpZ2luKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVG9rZW4gb3JpZ2luIGlzIHVuZGVmaW5lZFwiLCB0b2tlbik7XG4gICAgfVxuICAgIGNvbnN0IG5hbWUgPSAoX2EgPSB0b2tlbi5vcmlnaW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lO1xuICAgIC8vIGNvbnNvbGUubG9nKHN0cmluZ2lmeU91dHB1dCh0b2tlbikpXG4gICAgY29uc3QgdHJhbnNmcm9tZWQgPSBuYW1lID09PSBudWxsIHx8IG5hbWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hbWUuc3BsaXQoXCIvXCIpO1xuICAgIGlmICgha2VlcENhdGVnb3J5KSB7XG4gICAgICAgIHRyYW5zZnJvbWVkID09PSBudWxsIHx8IHRyYW5zZnJvbWVkID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0cmFuc2Zyb21lZC5zaGlmdCgpO1xuICAgIH1cbiAgICBjb25zdCBqb2luZWQgPSB0cmFuc2Zyb21lZCA9PT0gbnVsbCB8fCB0cmFuc2Zyb21lZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdHJhbnNmcm9tZWQuam9pbihcIiBcIikudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWjAtOV0rKC4pL2csIChtLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKTtcbiAgICByZXR1cm4gam9pbmVkIHx8IFwiXCI7XG59O1xuZXhwb3J0cy50b2tlbk5hbWVXaXRoQ2F0ZWdvcnkgPSAodG9rZW4sIHByZWZpeCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBuYW1lID0gKF9hID0gdG9rZW4ub3JpZ2luKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaWQ7XG4gICAgY29uc3QgbmFtZUFyciA9IG5hbWUgPT09IG51bGwgfHwgbmFtZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmFtZS5zcGxpdChcIi9cIik7XG4gICAgaWYgKHByZWZpeCkge1xuICAgICAgICBuYW1lQXJyID09PSBudWxsIHx8IG5hbWVBcnIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hbWVBcnIudW5zaGlmdChwcmVmaXgpO1xuICAgIH1cbiAgICBjb25zdCBqb2luZWQgPSBuYW1lQXJyID09PSBudWxsIHx8IG5hbWVBcnIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hbWVBcnIuam9pbihcIiBcIikudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWjAtOV0rKC4pL2csIChtLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKTtcbiAgICByZXR1cm4gam9pbmVkIHx8IFwiXCI7XG59O1xuZXhwb3J0cy50b2tlbk5hbWVXaXRoQ2F0ZWdvcnlGaXhEb3VibGVzID0gKHRva2VuLCBwcmVmaXgpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgbmFtZSA9IChfYSA9IHRva2VuLm9yaWdpbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlkO1xuICAgIGNvbnN0IG5hbWVBcnIgPSBuYW1lID09PSBudWxsIHx8IG5hbWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hbWUuc3BsaXQoXCIvXCIpO1xuICAgIC8vIENoYW5nZSBkYXNoIHRvIENhbWVsQ2FzZVxuICAgIGNvbnN0IHdpdGhvdXREYXNoID0gbmFtZUFyciA9PT0gbnVsbCB8fCBuYW1lQXJyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lQXJyLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBpdGVtLnNwbGl0KFwiLVwiKVxuICAgICAgICAgICAgLm1hcCgod29yZCkgPT4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coc3RyaW5naWZ5T3V0cHV0KHdpdGhvdXREYXNoKSk7XG4gICAgY29uc3QgcmVtb3ZlZERvdWJsZXMgPSB3aXRob3V0RGFzaCA9PT0gbnVsbCB8fCB3aXRob3V0RGFzaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2l0aG91dERhc2guZmlsdGVyKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBsb3dlcmNhc2VkSXRlbSA9IGl0ZW0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGluZGV4ID09PSB3aXRob3V0RGFzaC5maW5kSW5kZXgoKHdvcmQpID0+IHdvcmQudG9Mb3dlckNhc2UoKSA9PT0gbG93ZXJjYXNlZEl0ZW0pO1xuICAgIH0pO1xuICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgcmVtb3ZlZERvdWJsZXMgPT09IG51bGwgfHwgcmVtb3ZlZERvdWJsZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlbW92ZWREb3VibGVzLnVuc2hpZnQocHJlZml4KTtcbiAgICB9XG4gICAgY29uc3Qgam9pbmVkID0gcmVtb3ZlZERvdWJsZXMgPT09IG51bGwgfHwgcmVtb3ZlZERvdWJsZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlbW92ZWREb3VibGVzLmpvaW4oXCIgXCIpLnRvTG9jYWxlTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXpBLVowLTldKyguKS9nLCAobSwgY2hyKSA9PiBjaHIudG9VcHBlckNhc2UoKSk7XG4gICAgcmV0dXJuIGpvaW5lZCB8fCBcIlwiO1xufTtcbmxldCBwcmludENvbW1lbnQgPSBmYWxzZTtcbmxldCBncm91cE5hbWUgPSBcIlwiO1xuLyoqXG4gKiBHZW5lcmF0ZSBhIGdyb3VwIG5hbWUgY29tbWVudCBiYXNlZCBvbiB0aGUgdG9rZW4gZ3JvdXAuXG4gKlxuICogQHBhcmFtIHRva2VuR3JvdXAgLSBUaGUgdG9rZW4gZ3JvdXAgb2JqZWN0LlxuICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCBncm91cCBuYW1lIGNvbW1lbnQuXG4gKi9cbmV4cG9ydHMuZ3JvdXBOYW1lQ29tbWVudCA9ICh0b2tlbkdyb3VwKSA9PiB7XG4gICAgaWYgKCEodG9rZW5Hcm91cCA9PT0gbnVsbCB8fCB0b2tlbkdyb3VwID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b2tlbkdyb3VwLnBhcmVudCkpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IHsgcGFyZW50OiB7IG5hbWUgfSB9ID0gdG9rZW5Hcm91cDtcbiAgICBpZiAobmFtZSAhPT0gZ3JvdXBOYW1lKSB7XG4gICAgICAgIGdyb3VwTmFtZSA9IG5hbWU7XG4gICAgICAgIHByaW50Q29tbWVudCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcmludENvbW1lbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHByaW50Q29tbWVudFxuICAgICAgICA/IGAvKiAtLS0gJHtncm91cE5hbWV9IC0tLSAqL1xcbmAgOiBcIlwiO1xufTtcbi8qKlxuICogRmlsdGVyIHRva2VucyBiYXNlZCBvbiB0aGUgbmFtZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSAtIFRoZSBuYW1lIHRvIGZpbHRlciBieS5cbiAqIEBwYXJhbSB0b2tlbnMgLSBUaGUgYXJyYXkgb2YgdG9rZW5zLlxuICogQHJldHVybnMgVGhlIGZpbHRlcmVkIGFycmF5IG9mIHRva2Vucy5cbiAqL1xuZXhwb3J0cy5maWx0ZXJUb2tlbnMgPSAobmFtZSwgdG9rZW5zKSA9PiB7XG4gICAgcmV0dXJuIHRva2Vucy5maWx0ZXIoKHRva2VuKSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKChfYSA9IHRva2VuLm9yaWdpbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbi5vcmlnaW4ubmFtZS5pbmNsdWRlcyhuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJDaHliYVwiO1xuICAgIH0pO1xufTtcbi8qKlxuICogUHJpbnQgdGhlIG91dHB1dCBkYXRhLlxuICpcbiAqIEBwYXJhbSBkYXRhIC0gVGhlIGRhdGEgdG8gcHJpbnQuXG4gKi9cbmV4cG9ydHMucHJpbnRPdXRwdXQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0cmluZ2lmeU91dHB1dChkYXRhKSk7XG59O1xuLyoqXG4gKiBHZW5lcmF0ZSBhIGdyb3VwIG5hbWUgZm9yIHN0eWxleCBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0gbmFtZXMgLSBUaGUgc3RyaW5ncyB0byBnZW5lcmF0ZSB0aGUgZ3JvdXAgbmFtZSBmcm9tLlxuICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCBncm91cCBuYW1lLlxuICovXG5leHBvcnRzLnN0eWxleEdyb3VwTmFtZSA9ICguLi5uYW1lcykgPT4ge1xuICAgIHJldHVybiBuYW1lc1xuICAgICAgICAuam9pbihcIiBcIilcbiAgICAgICAgLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aMC05XSsoLikvZywgKG0sIGNocikgPT4gY2hyLnRvVXBwZXJDYXNlKCkpO1xufTtcbi8qKlxuICogU3RyaW4gdG8gbG93ZXIgY2FzZVxuICogQHBhcmFtIHN0ciAtIHN0cmluZyB0byBsb3dlciBjYXNlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnRzLnRvTG93ZXJDYXNlID0gKHN0cikgPT4ge1xuICAgIHJldHVybiBzdHIudG9Mb2NhbGVMb3dlckNhc2UoKTtcbn07XG5leHBvcnRzLmpvaW5BcnJheUJ5U2xhc2ggPSAoc3RyQXJyKSA9PiB7XG4gICAgcmV0dXJuIHN0ckFyci5qb2luKFwiIC8gXCIpO1xufTtcbmV4cG9ydHMuZ3JhZGllbnRBbmdsZSA9IChmcm9tLCB0bykgPT4ge1xuICAgIGNvbnN0IGRlbHRhWCA9IHRvLnggLSBmcm9tLng7XG4gICAgY29uc3QgZGVsdGFZID0gdG8ueSAtIGZyb20ueTtcbiAgICBjb25zdCByYWRpYW5zID0gTWF0aC5hdGFuMihkZWx0YVksIGRlbHRhWCk7XG4gICAgY29uc3QgcmVzdWx0ID0gKHJhZGlhbnMgKiAxODApIC8gTWF0aC5QSTtcbiAgICBjb25zdCBmaXhlZFJlc3VsdCA9IHJlc3VsdCArIDkwO1xuICAgIHJldHVybiAoZml4ZWRSZXN1bHQgPCAwID8gZml4ZWRSZXN1bHQgKyAzNjAgOiBmaXhlZFJlc3VsdCkgJSAzNjA7XG59O1xuY29uc3QgZ2V0VmFsdWVXaXRoQ29ycmVjdFVuaXQgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGAke3ZhbHVlfWA7XG4gICAgfVxuICAgIHJldHVybiBgJHt2YWx1ZX1weGA7XG59O1xuY29uc3Qgbm9uTmVnYXRpdmVWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiB2YWx1ZSA8IDAgPyAwIDogdmFsdWU7XG59O1xuZXhwb3J0cy5zaGFkb3dUb2tlblZhbHVlID0gKHRva2VuKSA9PiB7XG4gICAgY29uc3QgeyBjb2xvciwgeCwgeSwgcmFkaXVzLCBzcHJlYWQgfSA9IHRva2VuLnZhbHVlO1xuICAgIGNvbnN0IGJsdXJSYWRpdXMgPSBnZXRWYWx1ZVdpdGhDb3JyZWN0VW5pdChub25OZWdhdGl2ZVZhbHVlKHJhZGl1cy5tZWFzdXJlKSk7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IGdldFZhbHVlV2l0aENvcnJlY3RVbml0KHgubWVhc3VyZSk7XG4gICAgY29uc3Qgb2Zmc2V0WSA9IGdldFZhbHVlV2l0aENvcnJlY3RVbml0KHkubWVhc3VyZSk7XG4gICAgY29uc3Qgc3ByZWFkUmFkaXVzID0gZ2V0VmFsdWVXaXRoQ29ycmVjdFVuaXQoc3ByZWFkLm1lYXN1cmUpO1xuICAgIHJldHVybiBgJHtvZmZzZXRYfSAke29mZnNldFl9ICR7Ymx1clJhZGl1c30gJHtzcHJlYWRSYWRpdXN9ICMke2NvbG9yLmhleH1gO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdHJpbmdIU0xBID0gZXhwb3J0cy5zdHJpbmdIU0wgPSBleHBvcnRzLmNhbGN1bGF0ZVNhdHVyYXRpb24gPSBleHBvcnRzLmNhbGN1bGF0ZUxpZ2h0bmVzcyA9IGV4cG9ydHMuY2FsY3VsYXRlSHVlID0gdm9pZCAwO1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBodWUgdmFsdWUgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnMuXG4gKiBAcGFyYW0gZGVsdGEgLSBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBtYXhpbXVtIGFuZCBtaW5pbXVtIGNvbG9yIHZhbHVlcy5cbiAqIEBwYXJhbSBjbWF4IC0gVGhlIG1heGltdW0gY29sb3IgdmFsdWUuXG4gKiBAcGFyYW0gciAtIFRoZSByZWQgY29sb3IgdmFsdWUuXG4gKiBAcGFyYW0gZyAtIFRoZSBncmVlbiBjb2xvciB2YWx1ZS5cbiAqIEBwYXJhbSBiIC0gVGhlIGJsdWUgY29sb3IgdmFsdWUuXG4gKiBAcmV0dXJucyBUaGUgY2FsY3VsYXRlZCBodWUgdmFsdWUuXG4gKi9cbmV4cG9ydHMuY2FsY3VsYXRlSHVlID0gKGRlbHRhLCBjbWF4LCByLCBnLCBiKSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgaWYgKGRlbHRhID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoY21heCA9PT0gcikge1xuICAgICAgICByZXN1bHQgPSAoKGcgLSBiKSAvIGRlbHRhKSAlIDY7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNtYXggPT09IGcpIHtcbiAgICAgICAgcmVzdWx0ID0gKGIgLSByKSAvIGRlbHRhICsgMjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY21heCA9PT0gYikge1xuICAgICAgICByZXN1bHQgPSAociAtIGcpIC8gZGVsdGEgKyA0O1xuICAgIH1cbiAgICBjb25zdCByb3VuZGVkID0gTWF0aC5yb3VuZChyZXN1bHQgKiA2MCk7XG4gICAgaWYgKHJvdW5kZWQgPCAwKSB7XG4gICAgICAgIHJldHVybiByb3VuZGVkICsgMzYwO1xuICAgIH1cbiAgICByZXR1cm4gcm91bmRlZDtcbn07XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxpZ2h0bmVzcyB2YWx1ZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cbiAqIEBwYXJhbSBjbWF4IC0gVGhlIG1heGltdW0gY29sb3IgdmFsdWUuXG4gKiBAcGFyYW0gY21pbiAtIFRoZSBtaW5pbXVtIGNvbG9yIHZhbHVlLlxuICogQHJldHVybnMgVGhlIGNhbGN1bGF0ZWQgbGlnaHRuZXNzIHZhbHVlLlxuICovXG5leHBvcnRzLmNhbGN1bGF0ZUxpZ2h0bmVzcyA9IChjbWF4LCBjbWluKSA9PiB7XG4gICAgcmV0dXJuIChjbWF4ICsgY21pbikgLyAyO1xufTtcbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc2F0dXJhdGlvbiB2YWx1ZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cbiAqIEBwYXJhbSBkZWx0YSAtIFRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIG1heGltdW0gYW5kIG1pbmltdW0gY29sb3IgdmFsdWVzLlxuICogQHBhcmFtIGxpZ2h0bmVzcyAtIFRoZSBsaWdodG5lc3MgdmFsdWUuXG4gKiBAcmV0dXJucyBUaGUgY2FsY3VsYXRlZCBzYXR1cmF0aW9uIHZhbHVlLlxuICovXG5leHBvcnRzLmNhbGN1bGF0ZVNhdHVyYXRpb24gPSAoZGVsdGEsIGxpZ2h0bmVzcykgPT4ge1xuICAgIHJldHVybiBkZWx0YSA9PT0gMCA/IDAgOiBkZWx0YSAvICgxIC0gTWF0aC5hYnMoMiAqIGxpZ2h0bmVzcyAtIDEpKTtcbn07XG4vKipcbiAqIENvbnZlcnRzIHRoZSBIU0wgdmFsdWVzIHRvIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxuICogQHBhcmFtIGh1ZSAtIFRoZSBodWUgdmFsdWUuXG4gKiBAcGFyYW0gc2F0dXJhdGlvbiAtIFRoZSBzYXR1cmF0aW9uIHZhbHVlLlxuICogQHBhcmFtIGxpZ2h0bmVzcyAtIFRoZSBsaWdodG5lc3MgdmFsdWUuXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBIU0wgdmFsdWVzLlxuICovXG5leHBvcnRzLnN0cmluZ0hTTCA9IChodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgPT4ge1xuICAgIHJldHVybiBgaHNsKCR7aHVlfSwgJHtNYXRoLnJvdW5kKHNhdHVyYXRpb24pfSUsICR7TWF0aC5yb3VuZChsaWdodG5lc3MpfSUpYDtcbn07XG4vKipcbiAqIENvbnZlcnRzIHRoZSBIU0xBIHZhbHVlcyB0byBhIHN0cmluZyByZXByZXNlbnRhdGlvbi5cbiAqIEBwYXJhbSBodWUgLSBUaGUgaHVlIHZhbHVlLlxuICogQHBhcmFtIHNhdHVyYXRpb24gLSBUaGUgc2F0dXJhdGlvbiB2YWx1ZS5cbiAqIEBwYXJhbSBsaWdodG5lc3MgLSBUaGUgbGlnaHRuZXNzIHZhbHVlLlxuICogQHBhcmFtIGFscGhhIC0gVGhlIGFscGhhIHZhbHVlLlxuICogQHJldHVybnMgVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgSFNMQSB2YWx1ZXMuXG4gKi9cbmV4cG9ydHMuc3RyaW5nSFNMQSA9IChodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYWxwaGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgaHNsKCR7aHVlfSwgJHtNYXRoLnJvdW5kKHNhdHVyYXRpb24pfSwgJHtNYXRoLnJvdW5kKGxpZ2h0bmVzcyl9JSwgJHthbHBoYX0pYCk7XG4gICAgcmV0dXJuIGBoc2xhKCR7aHVlfSwgJHtNYXRoLnJvdW5kKHNhdHVyYXRpb24pfSUsICR7TWF0aC5yb3VuZChsaWdodG5lc3MpfSUsICR7TWF0aC5yb3VuZChhbHBoYSAqIDEwKSAvIDEwfSlgO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBvYmplY3QgdG8gYW4gSFNMIG9yIEhTTEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7Q29sb3JUb2tlblZhbHVlfSBjb2xvciAtIFRoZSBjb2xvciBvYmplY3QgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIFRoZSBIU0wgb3IgSFNMQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIGNvbG9yLlxuICovXG5jb25zdCBoc2xDb252ZXJ0b3IgPSAoY29sb3IpID0+IHtcbiAgICBjb25zdCB7IHI6IF9yLCBnOiBfZywgYjogX2IsIGE6IF9hIH0gPSBjb2xvcjtcbiAgICBjb25zdCByID0gX3IgLyAyNTU7XG4gICAgY29uc3QgZyA9IF9nIC8gMjU1O1xuICAgIGNvbnN0IGIgPSBfYiAvIDI1NTtcbiAgICBjb25zdCBhID0gX2EgLyAyNTU7XG4gICAgY29uc3QgY21pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgIGNvbnN0IGNtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICBjb25zdCBkZWx0YSA9IGNtYXggLSBjbWluO1xuICAgIGNvbnN0IGh1ZSA9IGhlbHBlcnNfMS5jYWxjdWxhdGVIdWUoZGVsdGEsIGNtYXgsIHIsIGcsIGIpO1xuICAgIGNvbnN0IF9saWdodG5lc3MgPSBoZWxwZXJzXzEuY2FsY3VsYXRlTGlnaHRuZXNzKGNtYXgsIGNtaW4pO1xuICAgIGNvbnN0IF9zYXR1cmF0aW9uID0gaGVscGVyc18xLmNhbGN1bGF0ZVNhdHVyYXRpb24oZGVsdGEsIF9saWdodG5lc3MpO1xuICAgIGNvbnN0IGxpZ2h0bmVzcyA9ICsoX2xpZ2h0bmVzcyAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICBjb25zdCBzYXR1cmF0aW9uID0gKyhfc2F0dXJhdGlvbiAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICByZXR1cm4gYSA9PT0gMSA/IGhlbHBlcnNfMS5zdHJpbmdIU0woaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIDogaGVscGVyc18xLnN0cmluZ0hTTEEoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGEpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGhzbENvbnZlcnRvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGhzbENvbnZlcnRvcl8xID0gcmVxdWlyZShcIi4vaHNsQ29udmVydG9yXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaHNsQ29udmVydG9yXzEuZGVmYXVsdDsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbmNvbnN0IGhzbF9jb252ZXJ0b3JfMSA9IHJlcXVpcmUoXCIuL2hzbC1jb252ZXJ0b3JcIik7XG5jb25zdCBwYXlsb2Fkc18xID0gcmVxdWlyZShcIi4vcGF5bG9hZHNcIik7XG4vLyBGdW5jdGlvbnMgcmVnaXN0cmF0aW9uXG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImN1cnJlbnREYXRlXCIsIGhlbHBlcnNfMS5jdXJyZW50RGF0ZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImdldEJyYW5kSWRcIiwgaGVscGVyc18xLmdldEJyYW5kSWQpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJleHBvcnRlZEZpbGVOYW1lXCIsIGhlbHBlcnNfMS5leHBvcnRlZEZpbGVOYW1lKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwidmFyaWFibGVOYW1lXCIsIGhlbHBlcnNfMS52YXJpYWJsZU5hbWUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJoc2xDb252ZXJ0b3JcIiwgaHNsX2NvbnZlcnRvcl8xLmRlZmF1bHQpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJncm91cE5hbWVDb21tZW50XCIsIGhlbHBlcnNfMS5ncm91cE5hbWVDb21tZW50KTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwic3R5bGV4VG9rZW5OYW1lXCIsIGhlbHBlcnNfMS5zdHlsZXhUb2tlbk5hbWUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJmaWx0ZXJUb2tlbnNcIiwgaGVscGVyc18xLmZpbHRlclRva2Vucyk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInByaW50T3V0cHV0XCIsIGhlbHBlcnNfMS5wcmludE91dHB1dCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInRva2VuTmFtZUJ5T3JpZ2luTmFtZVwiLCBoZWxwZXJzXzEudG9rZW5OYW1lQnlPcmlnaW5OYW1lKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwic3R5bGV4R3JvdXBOYW1lXCIsIGhlbHBlcnNfMS5zdHlsZXhHcm91cE5hbWUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJ0b0xvd2VyQ2FzZVwiLCBoZWxwZXJzXzEudG9Mb3dlckNhc2UpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJqb2luQXJyYXlCeVNsYXNoXCIsIGhlbHBlcnNfMS5qb2luQXJyYXlCeVNsYXNoKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiZ3JhZGllbnRBbmdsZVwiLCBoZWxwZXJzXzEuZ3JhZGllbnRBbmdsZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInNoYWRvd1Rva2VuVmFsdWVcIiwgaGVscGVyc18xLnNoYWRvd1Rva2VuVmFsdWUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJ0b2tlbk5hbWVXaXRoQ2F0ZWdvcnlcIiwgaGVscGVyc18xLnRva2VuTmFtZVdpdGhDYXRlZ29yeSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcInRva2VuTmFtZVdpdGhDYXRlZ29yeUZpeERvdWJsZXNcIiwgaGVscGVyc18xLnRva2VuTmFtZVdpdGhDYXRlZ29yeUZpeERvdWJsZXMpO1xuLy8gUGF5bG9hZHNcblB1bHNhci5yZWdpc3RlclBheWxvYWQoXCJjdXJyZW50RXhwb3J0ZXJWZXJzaW9uXCIsIHBheWxvYWRzXzEuY3VycmVudEV4cG9ydGVyVmVyc2lvbik7XG5QdWxzYXIucmVnaXN0ZXJQYXlsb2FkKFwiYnJhbmROYW1lc1wiLCBwYXlsb2Fkc18xLmJyYW5kTmFtZXMpO1xuUHVsc2FyLnJlZ2lzdGVyUGF5bG9hZChcImJlaGF2aW9yXCIsIHBheWxvYWRzXzEuYmVoYXZpb3IpO1xuUHVsc2FyLnJlZ2lzdGVyUGF5bG9hZChcInN0eWxleENhdGVnb3JpZXNcIiwgcGF5bG9hZHNfMS5zdHlsZXhDYXRlZ29yaWVzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdHlsZXhDYXRlZ29yaWVzID0gZXhwb3J0cy5iZWhhdmlvciA9IGV4cG9ydHMuYnJhbmROYW1lcyA9IGV4cG9ydHMuYnJhbmROYW1lc09sZCA9IGV4cG9ydHMuY3VycmVudEV4cG9ydGVyVmVyc2lvbiA9IHZvaWQgMDtcbmNvbnN0IGV4cG9ydGVyX2pzb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9leHBvcnRlci5qc29uXCIpO1xuZXhwb3J0cy5jdXJyZW50RXhwb3J0ZXJWZXJzaW9uID0gZXhwb3J0ZXJfanNvbl8xLnZlcnNpb247XG5leHBvcnRzLmJyYW5kTmFtZXNPbGQgPSB7XG4gICAgdmlnbzogXCIwMSAtIFZJR29cIixcbiAgICBjcHA6IFwiMDIgLSBDUFBcIixcbiAgICBrb29wOiBcIjAzIC0gS29vcFwiLFxuICAgIGtuejogXCIwNCAtIEtOWlwiLFxuICAgIHN1czogXCIwNSAtIFNVU1wiLFxufTtcbmV4cG9ydHMuYnJhbmROYW1lcyA9IHtcbiAgICBjcHBEYXJrOiBcIkNQUCBEYXJrXCIsXG4gICAgY3BwOiBcIkNQUCBMaWdodFwiLFxuICAgIGtvb3BEYXJrOiBcIktvb3AgRGFya1wiLFxuICAgIGtvb3A6IFwiS29vcCBMaWdodFwiLFxuICAgIHZpZ286IFwiVklHb1wiLFxufTtcbmV4cG9ydHMuYmVoYXZpb3IgPSB7XG4gICAgY29sb3JUb2tlblByZWZpeDogXCJjb2xvclwiLFxuICAgIGJvcmRlclRva2VuUHJlZml4OiBcImJvcmRlclwiLFxuICAgIGdyYWRpZW50VG9rZW5QcmVmaXg6IFwiZ3JhZGllbnRcIixcbiAgICBtZWFzdXJlVG9rZW5QcmVmaXg6IFwibWVhc3VyZVwiLFxuICAgIHNoYWRvd1Rva2VuUHJlZml4OiBcInNoYWRvd1wiLFxuICAgIHR5cG9ncmFwaHlUb2tlblByZWZpeDogXCJ0eXBvZ3JhcGh5XCIsXG59O1xuZXhwb3J0cy5zdHlsZXhDYXRlZ29yaWVzID0gW1xuICAgIFwiY29yZVwiLFxuICAgIFwic2VtYW50aWNcIixcbiAgICBcImNvbXBvbmVudFwiXG5dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==