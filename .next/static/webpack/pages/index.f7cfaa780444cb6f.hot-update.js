"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/supabaseClient */ \"./lib/supabaseClient.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Page() {\n    _s();\n    const [Projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    async function getProjects() {\n        let { data , error  } = await _lib_supabaseClient__WEBPACK_IMPORTED_MODULE_2__.supabase.from(\"Projects\").select(\"name\");\n        if (error) console.log(\"error\", error);\n        console.log(\"Projects:\", Projects);\n        return Projects;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setProjects(getProjects());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: Projects ? Projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: project.name\n            }, project.id, false, {\n                fileName: \"/Users/home/Documents/Code/supabase/pps/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 35\n            }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n    }, void 0, false, {\n        fileName: \"/Users/home/Documents/Code/supabase/pps/pages/index.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"FOOk+B1iF3ADq8NtVjh8uP8lxPk=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNLO0FBRWpELFNBQVNHLE9BQU87O0lBQ2QsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDLElBQUk7SUFFN0MsZUFBZUssY0FBYztRQUMzQixJQUFJLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUcsTUFBTU4sOERBQWEsQ0FBQyxZQUFZUSxNQUFNLENBQUM7UUFFN0QsSUFBSUYsT0FBT0csUUFBUUMsR0FBRyxDQUFDLFNBQVNKO1FBQ2hDRyxRQUFRQyxHQUFHLENBQUMsYUFBYVI7UUFDekIsT0FBT0E7SUFDVDtJQUVBSixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RLLFlBQVlDO0lBQ2QsR0FBRyxFQUFFO0lBQ0wscUJBQ0UsOERBQUNPO2tCQUNFVCxXQUNDQSxTQUFTVSxHQUFHLENBQUMsQ0FBQ0Msd0JBQVksOERBQUNDOzBCQUFxQkQsUUFBUUUsSUFBSTtlQUF6QkYsUUFBUUcsRUFBRTs7OztzQ0FFN0MsNklBQ0Q7Ozs7OztBQUdQO0dBdkJTZjtLQUFBQTtBQXlCVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4uL2xpYi9zdXBhYmFzZUNsaWVudFwiO1xuXG5mdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbUHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIGxldCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwiUHJvamVjdHNcIikuc2VsZWN0KFwibmFtZVwiKTtcblxuICAgIGlmIChlcnJvcikgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgY29uc29sZS5sb2coXCJQcm9qZWN0czpcIiwgUHJvamVjdHMpO1xuICAgIHJldHVybiBQcm9qZWN0cztcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UHJvamVjdHMoZ2V0UHJvamVjdHMoKSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICB7UHJvamVjdHMgPyAoXG4gICAgICAgIFByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gPGxpIGtleT17cHJvamVjdC5pZH0+e3Byb2plY3QubmFtZX08L2xpPilcbiAgICAgICkgOiAoXG4gICAgICAgIDw+PC8+XG4gICAgICApfVxuICAgIDwvdWw+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdXBhYmFzZSIsIlBhZ2UiLCJQcm9qZWN0cyIsInNldFByb2plY3RzIiwiZ2V0UHJvamVjdHMiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiY29uc29sZSIsImxvZyIsInVsIiwibWFwIiwicHJvamVjdCIsImxpIiwibmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});