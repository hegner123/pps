"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/projects/[slug]";
exports.ids = ["pages/projects/[slug]"];
exports.modules = {

/***/ "./lib/supabaseClient.js":
/*!*******************************!*\
  !*** ./lib/supabaseClient.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://bfyfmeezmpcdjmpiztrr.supabase.co\";\nconst supabaseKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeWZtZWV6bXBjZGptcGl6dHJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwMDQ2MzEsImV4cCI6MTk5MDU4MDYzMX0.OiDJeCyN8-7vEe2-sAQEH9BsO5gXlTaYO_MGe_sEC-M\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseKey);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3VwYWJhc2VDbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFEO0FBRXJELE1BQU1DLGNBQWM7QUFDcEIsTUFBTUMsY0FDSjtBQUNGLE1BQU1DLFdBQVdILG1FQUFZQSxDQUFDQyxhQUFhQztBQUV2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Bwcy1zdXBhYmFzZS8uL2xpYi9zdXBhYmFzZUNsaWVudC5qcz81ZjBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcblxuY29uc3Qgc3VwYWJhc2VVcmwgPSBcImh0dHBzOi8vYmZ5Zm1lZXptcGNkam1waXp0cnIuc3VwYWJhc2UuY29cIjtcbmNvbnN0IHN1cGFiYXNlS2V5ID1cbiAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGMzTWlPaUp6ZFhCaFltRnpaU0lzSW5KbFppSTZJbUptZVdadFpXVjZiWEJqWkdwdGNHbDZkSEp5SWl3aWNtOXNaU0k2SW1GdWIyNGlMQ0pwWVhRaU9qRTJOelV3TURRMk16RXNJbVY0Y0NJNk1UazVNRFU0TURZek1YMC5PaURKZUN5TjgtN3ZFZTItc0FRRUg5QnNPNWdYbFRhWU9fTUdlX3NFQy1NXCI7XG5jb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VLZXkpO1xuXG5leHBvcnQgeyBzdXBhYmFzZSB9O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlVXJsIiwic3VwYWJhc2VLZXkiLCJzdXBhYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/supabaseClient.js\n");

/***/ }),

/***/ "./pages/projects/[slug].jsx":
/*!***********************************!*\
  !*** ./pages/projects/[slug].jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/supabaseClient */ \"./lib/supabaseClient.js\");\n\n\n\n\nconst Project = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { slug  } = router.query;\n    const [songs, setSongs] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    async function getSongs() {\n        let { data: Songs , error  } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_3__.supabase.from(\"Songs\").select(\"*\");\n        if (error) console.log(\"error\", error);\n        return Songs;\n    }\n    getSongs(slug).then((data)=>setSongs(data));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: slug\n            }, void 0, false, {\n                fileName: \"/Users/home/Documents/Code/supabase/pps/pages/projects/[slug].jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: songs.map((song)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: `/songs/${song.slug}`,\n                            children: song.name\n                        }, void 0, false, {\n                            fileName: \"/Users/home/Documents/Code/supabase/pps/pages/projects/[slug].jsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, undefined)\n                    }, song.id, false, {\n                        fileName: \"/Users/home/Documents/Code/supabase/pps/pages/projects/[slug].jsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/home/Documents/Code/supabase/pps/pages/projects/[slug].jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/home/Documents/Code/supabase/pps/pages/projects/[slug].jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9bc2x1Z10uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNQO0FBQ21CO0FBRXBELE1BQU1HLFVBQVUsSUFBTTtJQUNwQixNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxFQUFFSyxLQUFJLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxlQUFlUSxXQUFXO1FBQ3hCLElBQUksRUFBRUMsTUFBTUMsTUFBSyxFQUFFQyxNQUFLLEVBQUUsR0FBRyxNQUFNViw4REFBYSxDQUFDLFNBQVNZLE1BQU0sQ0FBQztRQUVqRSxJQUFJRixPQUFPRyxRQUFRQyxHQUFHLENBQUMsU0FBU0o7UUFFaEMsT0FBT0Q7SUFDVDtJQUNBRixTQUFTSixNQUFNWSxJQUFJLENBQUMsQ0FBQ1AsT0FBU0YsU0FBU0U7SUFFdkMscUJBQ0UsOERBQUNROzswQkFDQyw4REFBQ0M7MEJBQUdkOzs7Ozs7MEJBQ0osOERBQUNlOzBCQUNFYixNQUFNYyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNDO2tDQUNDLDRFQUFDQzs0QkFBRUMsTUFBTSxDQUFDLE9BQU8sRUFBRUgsS0FBS2pCLElBQUksQ0FBQyxDQUFDO3NDQUFHaUIsS0FBS0ksSUFBSTs7Ozs7O3VCQURuQ0osS0FBS0ssRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQU8xQjtBQUVBLGlFQUFleEIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bwcy1zdXBhYmFzZS8uL3BhZ2VzL3Byb2plY3RzL1tzbHVnXS5qc3g/NjcxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi8uLi9saWIvc3VwYWJhc2VDbGllbnRcIjtcblxuY29uc3QgUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbc29uZ3MsIHNldFNvbmdzXSA9IHVzZVN0YXRlKFtdKTtcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0U29uZ3MoKSB7XG4gICAgbGV0IHsgZGF0YTogU29uZ3MsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiU29uZ3NcIikuc2VsZWN0KFwiKlwiKTtcblxuICAgIGlmIChlcnJvcikgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG5cbiAgICByZXR1cm4gU29uZ3M7XG4gIH1cbiAgZ2V0U29uZ3Moc2x1ZykudGhlbigoZGF0YSkgPT4gc2V0U29uZ3MoZGF0YSkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPntzbHVnfTwvcD5cbiAgICAgIDx1bD5cbiAgICAgICAge3NvbmdzLm1hcCgoc29uZykgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3NvbmcuaWR9PlxuICAgICAgICAgICAgPGEgaHJlZj17YC9zb25ncy8ke3Nvbmcuc2x1Z31gfT57c29uZy5uYW1lfTwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwic3VwYWJhc2UiLCJQcm9qZWN0Iiwicm91dGVyIiwic2x1ZyIsInF1ZXJ5Iiwic29uZ3MiLCJzZXRTb25ncyIsImdldFNvbmdzIiwiZGF0YSIsIlNvbmdzIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJkaXYiLCJwIiwidWwiLCJtYXAiLCJzb25nIiwibGkiLCJhIiwiaHJlZiIsIm5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects/[slug].jsx\n");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/projects/[slug].jsx"));
module.exports = __webpack_exports__;

})();