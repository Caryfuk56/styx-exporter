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
exports.groupNameComment = exports.stylexTokenName = exports.variableName = exports.exportedFileName = exports.getBrandId = exports.currentDate = void 0;
const payloads_1 = __webpack_require__(/*! ./payloads */ "./src/payloads.ts");
8; /**
 * Return current time in local string
 * @returns
 */
exports.currentDate = () => {
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
exports.getBrandId = (themeName, brands) => {
    const brandObject = brands.filter((brand) => brand.name === themeName);
    if (brandObject.length === 0) {
        console.log("ERROR: brand with name \"" + "name" + "\" doesn't exist.");
        return "";
    }
    return brandObject[0].id;
};
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
let printComment = false;
let groupName = "";
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
exports.calculateLightness = (cmax, cmin) => {
    return (cmax + cmin) / 2;
};
exports.calculateSaturation = (delta, lightness) => {
    return delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));
};
exports.stringHSL = (hue, saturation, lightness) => {
    return `hsl(${hue}, ${Math.round(saturation)}%, ${Math.round(lightness)}%)`;
};
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
// Payloads
Pulsar.registerPayload("currentExporterVersion", payloads_1.currentExporterVersion);
Pulsar.registerPayload("brandNames", payloads_1.brandNames);
Pulsar.registerPayload("behavior", payloads_1.behavior);


/***/ }),

/***/ "./src/payloads.ts":
/*!*************************!*\
  !*** ./src/payloads.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.behavior = exports.brandNames = exports.currentExporterVersion = void 0;
const exporter_json_1 = __webpack_require__(/*! ../../exporter.json */ "../exporter.json");
exports.currentExporterVersion = exporter_json_1.version;
exports.brandNames = {
    vigo: "01 - VIGo",
    cpp: "02 - CPP",
    koop: "03 - Koop",
};
exports.behavior = {
    colorTokenPrefix: "color",
    borderTokenPrefix: "border",
    gradientTokenPrefix: "gradient",
    measureTokenPrefix: "measure",
    shadowTokenPrefix: "shadow",
    typographyTokenPrefix: "typography",
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaGVscGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaHNsLWNvbnZlcnRvci9oc2xDb252ZXJ0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hzbC1jb252ZXJ0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYXlsb2Fkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLG1CQUFtQixtQkFBTyxDQUFDLHFDQUFZO0FBQ3ZDLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsV0FBVyxHQUFHLFdBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsd0JBQXdCO0FBQ25DLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTyxHQUFHLEtBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVLE9BQU8sRUFBRTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuSGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLElBQUksdUJBQXVCLEtBQUssc0JBQXNCO0FBQzVFO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSxJQUFJLHVCQUF1QixJQUFJLHNCQUFzQixLQUFLLDhCQUE4QjtBQUM5Rzs7Ozs7Ozs7Ozs7OztBQ2xDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLGlEQUFXO0FBQ3JDO0FBQ0EsV0FBVyw2QkFBNkI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQscUJBQXFCLG1CQUFPLENBQUMsMkRBQWdCO0FBQzdDLDJDQUEyQyxxQ0FBcUMsK0JBQStCLEVBQUUsRUFBRTs7Ozs7Ozs7Ozs7OztBQ0h0RztBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLG1DQUFXO0FBQ3JDLHdCQUF3QixtQkFBTyxDQUFDLHFEQUFpQjtBQUNqRCxtQkFBbUIsbUJBQU8sQ0FBQyxxQ0FBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDZDQUFxQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImhlbHBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ncm91cE5hbWVDb21tZW50ID0gZXhwb3J0cy5zdHlsZXhUb2tlbk5hbWUgPSBleHBvcnRzLnZhcmlhYmxlTmFtZSA9IGV4cG9ydHMuZXhwb3J0ZWRGaWxlTmFtZSA9IGV4cG9ydHMuZ2V0QnJhbmRJZCA9IGV4cG9ydHMuY3VycmVudERhdGUgPSB2b2lkIDA7XG5jb25zdCBwYXlsb2Fkc18xID0gcmVxdWlyZShcIi4vcGF5bG9hZHNcIik7XG44OyAvKipcbiAqIFJldHVybiBjdXJyZW50IHRpbWUgaW4gbG9jYWwgc3RyaW5nXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnRzLmN1cnJlbnREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIGNvbnN0IHRpbWVTdHJpbmcgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIHJldHVybiBgJHtkYXRlU3RyaW5nfSAke3RpbWVTdHJpbmd9YDtcbn07XG4vKipcbiAqIFJldHVybiBpZCBvZiB0aGUgdGhlbWUgYWNjb3JkaW5nIHRoZW1lIG5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGhlbWVOYW1lIC0gbmFtZSBvZiB0aGVtZVxuICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCB1bmtub3duPn0gYnJhbmRzXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBpZCBvZiB0aGUgdGhlbWVcbiAqL1xuZXhwb3J0cy5nZXRCcmFuZElkID0gKHRoZW1lTmFtZSwgYnJhbmRzKSA9PiB7XG4gICAgY29uc3QgYnJhbmRPYmplY3QgPSBicmFuZHMuZmlsdGVyKChicmFuZCkgPT4gYnJhbmQubmFtZSA9PT0gdGhlbWVOYW1lKTtcbiAgICBpZiAoYnJhbmRPYmplY3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IGJyYW5kIHdpdGggbmFtZSBcXFwiXCIgKyBcIm5hbWVcIiArIFwiXFxcIiBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiBicmFuZE9iamVjdFswXS5pZDtcbn07XG5leHBvcnRzLmV4cG9ydGVkRmlsZU5hbWUgPSAodHlwZSwgYnJhbmQpID0+IHtcbiAgICBsZXQgZm9sZGVyID0gXCJcIjtcbiAgICBsZXQgZmlsZSA9IFwiXCI7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJjb2xvcnNcIjpcbiAgICAgICAgICAgIGZpbGUgPSBcIl9jb2xvcnMuY3NzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1lYXN1cmVzXCI6XG4gICAgICAgICAgICBmaWxlID0gXCJfbWVhc3VyZXMuY3NzXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImJvcmRlcnNcIjpcbiAgICAgICAgICAgIGZpbGUgPSBcIl9ib3JkZXJzLmNzc1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgaGVhZGVyIGNvbW1lbnQgRVJST1I6IGZpbGUgdHlwZSBcXFwiXCIgKyB0eXBlICsgXCJcXFwiIGRvZXNuJ3QgZXhpc3QuXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN3aXRjaCAoYnJhbmQpIHtcbiAgICAgICAgY2FzZSBwYXlsb2Fkc18xLmJyYW5kTmFtZXMudmlnbzpcbiAgICAgICAgICAgIGZvbGRlciA9IFwidmlnb1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgcGF5bG9hZHNfMS5icmFuZE5hbWVzLmNwcDpcbiAgICAgICAgICAgIGZvbGRlciA9IFwiY3BwXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBwYXlsb2Fkc18xLmJyYW5kTmFtZXMua29vcDpcbiAgICAgICAgICAgIGZvbGRlciA9IFwia29vcFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgaGVhZGVyIGNvbW1lbnQgRVJST1I6IGJyYW5kIG5hbWUgXFxcIlwiICsgYnJhbmQgKyBcIlxcXCIgZG9lc24ndCBleGlzdC5cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGAke2ZvbGRlcn0vJHtmaWxlfWA7XG59O1xuLy8gY29uc3QgcmVwbGFjZUxhc3RPbmUgPSAoZGVmaW5pdGlvbjogc3RyaW5nW10sIHNvdXJjZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbi8vIGlmIChkZWZpbml0aW9uLnNvbWUoKGl0ZW0pID0+IHNvdXJjZS5pbmNsdWRlcyhpdGVtKSkpIHtcbi8vIH1cbi8vIH07XG5leHBvcnRzLnZhcmlhYmxlTmFtZSA9IChwcmVmaXgsIHRva2VuLCB0b2tlbkdyb3VwKSA9PiB7XG4gICAgLy8gQ3JlYXRlIGFycmF5IHdpdGggYWxsIHBhdGggc2VnbWVudHMgYW5kIHRva2VuIG5hbWUgYXQgdGhlIGVuZC5cbiAgICBjb25zdCBzZWdtZW50cyA9IFsuLi50b2tlbkdyb3VwLnBhdGhdO1xuICAgIGlmICghdG9rZW5Hcm91cC5pc1Jvb3QpIHtcbiAgICAgICAgc2VnbWVudHMucHVzaCh0b2tlbkdyb3VwLm5hbWUpO1xuICAgIH1cbiAgICBzZWdtZW50cy5wdXNoKHRva2VuLm5hbWUpO1xuICAgIGlmIChwcmVmaXggJiYgcHJlZml4Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2VnbWVudHMudW5zaGlmdChwcmVmaXgpO1xuICAgIH1cbiAgICAvLyBjcmVhdGUgb25lIHN0cmluZyB3aXRoIHNwYWNlIGZvciBjYW1lbENhc2VcbiAgICBjb25zdCBzZW50ZW5jZSA9IHNlZ21lbnRzXG4gICAgICAgIC5qb2luKFwiIFwiKVxuICAgICAgICAudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvW15hLXpBLVowLTldKyguKS9nLCAobSwgY2hyKSA9PiBjaHIudG9VcHBlckNhc2UoKSk7XG4gICAgcmV0dXJuIHNlbnRlbmNlO1xufTtcbmV4cG9ydHMuc3R5bGV4VG9rZW5OYW1lID0gKHRva2VuLCB0b2tlbkdyb3VwKSA9PiB7XG4gICAgLy8gQ3JlYXRlIGFycmF5IHdpdGggYWxsIHBhdGggc2VnbWVudHMgYW5kIHRva2VuIG5hbWUgYXQgdGhlIGVuZC5cbiAgICBjb25zdCBzZWdtZW50cyA9IFsuLi50b2tlbkdyb3VwLnBhdGhdO1xuICAgIGlmICghdG9rZW5Hcm91cC5pc1Jvb3QpIHtcbiAgICAgICAgc2VnbWVudHMucHVzaCh0b2tlbkdyb3VwLm5hbWUpO1xuICAgIH1cbiAgICBzZWdtZW50cy5wdXNoKHRva2VuLm5hbWUpO1xuICAgIC8vIGNyZXRlIG9uZSBzdHJpbmcgd2l0aCBzcGFjZSBmb3IgY2FtZWxDYXNlXG4gICAgY29uc3Qgc2VudGVuY2UgPSBzZWdtZW50c1xuICAgICAgICAuam9pbihcIiBcIilcbiAgICAgICAgLnRvTG9jYWxlTG93ZXJDYXNlKClcbiAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aMC05XSsoLikvZywgKG0sIGNocikgPT4gY2hyLnRvVXBwZXJDYXNlKCkpO1xuICAgIHJldHVybiBzZW50ZW5jZTtcbn07XG5sZXQgcHJpbnRDb21tZW50ID0gZmFsc2U7XG5sZXQgZ3JvdXBOYW1lID0gXCJcIjtcbmV4cG9ydHMuZ3JvdXBOYW1lQ29tbWVudCA9ICh0b2tlbkdyb3VwKSA9PiB7XG4gICAgaWYgKCEodG9rZW5Hcm91cCA9PT0gbnVsbCB8fCB0b2tlbkdyb3VwID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b2tlbkdyb3VwLnBhcmVudCkpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IHsgcGFyZW50OiB7IG5hbWUgfSB9ID0gdG9rZW5Hcm91cDtcbiAgICBpZiAobmFtZSAhPT0gZ3JvdXBOYW1lKSB7XG4gICAgICAgIGdyb3VwTmFtZSA9IG5hbWU7XG4gICAgICAgIHByaW50Q29tbWVudCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcmludENvbW1lbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHByaW50Q29tbWVudFxuICAgICAgICA/IGBcclxuICAgIFxyXG4gIC8qIC0tLSAke2dyb3VwTmFtZX0gLS0tICovXHJcbiAgYCA6IFwiXCI7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0cmluZ0hTTEEgPSBleHBvcnRzLnN0cmluZ0hTTCA9IGV4cG9ydHMuY2FsY3VsYXRlU2F0dXJhdGlvbiA9IGV4cG9ydHMuY2FsY3VsYXRlTGlnaHRuZXNzID0gZXhwb3J0cy5jYWxjdWxhdGVIdWUgPSB2b2lkIDA7XG5leHBvcnRzLmNhbGN1bGF0ZUh1ZSA9IChkZWx0YSwgY21heCwgciwgZywgYikgPT4ge1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIGlmIChkZWx0YSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGNtYXggPSByKSB7XG4gICAgICAgIHJlc3VsdCA9IChnIC0gYikgLyBkZWx0YSAlIDY7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNtYXggPT09IGcpIHtcbiAgICAgICAgcmVzdWx0ID0gKGIgLSByKSAvIGRlbHRhICsgMjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY21heCA9PT0gYikge1xuICAgICAgICByZXN1bHQgPSAociAtIGcpIC8gZGVsdGEgKyA0O1xuICAgIH1cbiAgICBjb25zdCByb3VuZGVkID0gTWF0aC5yb3VuZChyZXN1bHQgKiA2MCk7XG4gICAgaWYgKHJvdW5kZWQgPCAwKSB7XG4gICAgICAgIHJldHVybiByb3VuZGVkICsgMzYwO1xuICAgIH1cbiAgICByZXR1cm4gcm91bmRlZDtcbn07XG5leHBvcnRzLmNhbGN1bGF0ZUxpZ2h0bmVzcyA9IChjbWF4LCBjbWluKSA9PiB7XG4gICAgcmV0dXJuIChjbWF4ICsgY21pbikgLyAyO1xufTtcbmV4cG9ydHMuY2FsY3VsYXRlU2F0dXJhdGlvbiA9IChkZWx0YSwgbGlnaHRuZXNzKSA9PiB7XG4gICAgcmV0dXJuIGRlbHRhID09PSAwID8gMCA6IGRlbHRhIC8gKDEgLSBNYXRoLmFicygyICogbGlnaHRuZXNzIC0gMSkpO1xufTtcbmV4cG9ydHMuc3RyaW5nSFNMID0gKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSA9PiB7XG4gICAgcmV0dXJuIGBoc2woJHtodWV9LCAke01hdGgucm91bmQoc2F0dXJhdGlvbil9JSwgJHtNYXRoLnJvdW5kKGxpZ2h0bmVzcyl9JSlgO1xufTtcbmV4cG9ydHMuc3RyaW5nSFNMQSA9IChodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYWxwaGEpID0+IHtcbiAgICByZXR1cm4gYGhzbCgke2h1ZX0sICR7TWF0aC5yb3VuZChzYXR1cmF0aW9uKX0sICR7TWF0aC5yb3VuZChsaWdodG5lc3MpfSUsICR7TWF0aC5yb3VuZCgoYWxwaGEgKiAxMCkgLyAxMCl9JSlgO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbmNvbnN0IGhzbENvbnZlcnRvciA9IChjb2xvcikgPT4ge1xuICAgIGNvbnN0IHsgcjogX3IsIGc6IF9nLCBiOiBfYiwgYTogX2EgfSA9IGNvbG9yO1xuICAgIGNvbnN0IHIgPSBfciAvIDI1NTtcbiAgICBjb25zdCBnID0gX2cgLyAyNTU7XG4gICAgY29uc3QgYiA9IF9iIC8gMjU1O1xuICAgIGNvbnN0IGEgPSBfYSAvIDI1NTtcbiAgICBjb25zdCBjbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgY29uc3QgY21heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgIGNvbnN0IGRlbHRhID0gY21heCAtIGNtaW47XG4gICAgY29uc3QgaHVlID0gaGVscGVyc18xLmNhbGN1bGF0ZUh1ZShkZWx0YSwgY21heCwgciwgZywgYik7XG4gICAgY29uc3QgX2xpZ2h0bmVzcyA9IGhlbHBlcnNfMS5jYWxjdWxhdGVMaWdodG5lc3MoY21heCwgY21pbik7XG4gICAgY29uc3QgX3NhdHVyYXRpb24gPSBoZWxwZXJzXzEuY2FsY3VsYXRlU2F0dXJhdGlvbihkZWx0YSwgX2xpZ2h0bmVzcyk7XG4gICAgY29uc3QgbGlnaHRuZXNzID0gKyhfbGlnaHRuZXNzICogMTAwKS50b0ZpeGVkKDEpO1xuICAgIGNvbnN0IHNhdHVyYXRpb24gPSArKF9zYXR1cmF0aW9uICogMTAwKS50b0ZpeGVkKDEpO1xuICAgIHJldHVybiBhID09PSAxID8gaGVscGVyc18xLnN0cmluZ0hTTChodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgOiBoZWxwZXJzXzEuc3RyaW5nSFNMQShodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gaHNsQ29udmVydG9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaHNsQ29udmVydG9yXzEgPSByZXF1aXJlKFwiLi9oc2xDb252ZXJ0b3JcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBoc2xDb252ZXJ0b3JfMS5kZWZhdWx0OyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBoZWxwZXJzXzEgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xuY29uc3QgaHNsX2NvbnZlcnRvcl8xID0gcmVxdWlyZShcIi4vaHNsLWNvbnZlcnRvclwiKTtcbmNvbnN0IHBheWxvYWRzXzEgPSByZXF1aXJlKFwiLi9wYXlsb2Fkc1wiKTtcbi8vIEZ1bmN0aW9ucyByZWdpc3RyYXRpb25cblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiY3VycmVudERhdGVcIiwgaGVscGVyc18xLmN1cnJlbnREYXRlKTtcblB1bHNhci5yZWdpc3RlckZ1bmN0aW9uKFwiZ2V0QnJhbmRJZFwiLCBoZWxwZXJzXzEuZ2V0QnJhbmRJZCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImV4cG9ydGVkRmlsZU5hbWVcIiwgaGVscGVyc18xLmV4cG9ydGVkRmlsZU5hbWUpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJ2YXJpYWJsZU5hbWVcIiwgaGVscGVyc18xLnZhcmlhYmxlTmFtZSk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImhzbENvbnZlcnRvclwiLCBoc2xfY29udmVydG9yXzEuZGVmYXVsdCk7XG5QdWxzYXIucmVnaXN0ZXJGdW5jdGlvbihcImdyb3VwTmFtZUNvbW1lbnRcIiwgaGVscGVyc18xLmdyb3VwTmFtZUNvbW1lbnQpO1xuUHVsc2FyLnJlZ2lzdGVyRnVuY3Rpb24oXCJzdHlsZXhUb2tlbk5hbWVcIiwgaGVscGVyc18xLnN0eWxleFRva2VuTmFtZSk7XG4vLyBQYXlsb2Fkc1xuUHVsc2FyLnJlZ2lzdGVyUGF5bG9hZChcImN1cnJlbnRFeHBvcnRlclZlcnNpb25cIiwgcGF5bG9hZHNfMS5jdXJyZW50RXhwb3J0ZXJWZXJzaW9uKTtcblB1bHNhci5yZWdpc3RlclBheWxvYWQoXCJicmFuZE5hbWVzXCIsIHBheWxvYWRzXzEuYnJhbmROYW1lcyk7XG5QdWxzYXIucmVnaXN0ZXJQYXlsb2FkKFwiYmVoYXZpb3JcIiwgcGF5bG9hZHNfMS5iZWhhdmlvcik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYmVoYXZpb3IgPSBleHBvcnRzLmJyYW5kTmFtZXMgPSBleHBvcnRzLmN1cnJlbnRFeHBvcnRlclZlcnNpb24gPSB2b2lkIDA7XG5jb25zdCBleHBvcnRlcl9qc29uXzEgPSByZXF1aXJlKFwiLi4vLi4vZXhwb3J0ZXIuanNvblwiKTtcbmV4cG9ydHMuY3VycmVudEV4cG9ydGVyVmVyc2lvbiA9IGV4cG9ydGVyX2pzb25fMS52ZXJzaW9uO1xuZXhwb3J0cy5icmFuZE5hbWVzID0ge1xuICAgIHZpZ286IFwiMDEgLSBWSUdvXCIsXG4gICAgY3BwOiBcIjAyIC0gQ1BQXCIsXG4gICAga29vcDogXCIwMyAtIEtvb3BcIixcbn07XG5leHBvcnRzLmJlaGF2aW9yID0ge1xuICAgIGNvbG9yVG9rZW5QcmVmaXg6IFwiY29sb3JcIixcbiAgICBib3JkZXJUb2tlblByZWZpeDogXCJib3JkZXJcIixcbiAgICBncmFkaWVudFRva2VuUHJlZml4OiBcImdyYWRpZW50XCIsXG4gICAgbWVhc3VyZVRva2VuUHJlZml4OiBcIm1lYXN1cmVcIixcbiAgICBzaGFkb3dUb2tlblByZWZpeDogXCJzaGFkb3dcIixcbiAgICB0eXBvZ3JhcGh5VG9rZW5QcmVmaXg6IFwidHlwb2dyYXBoeVwiLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=