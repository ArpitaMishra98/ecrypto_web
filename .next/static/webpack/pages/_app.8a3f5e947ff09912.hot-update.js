"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./layout/Header/Header.tsx":
/*!**********************************!*\
  !*** ./layout/Header/Header.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_icons_material_Brightness4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Brightness4 */ \"./node_modules/@mui/icons-material/Brightness4.js\");\n/* harmony import */ var _mui_icons_material_Brightness7__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Brightness7 */ \"./node_modules/@mui/icons-material/Brightness7.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [anchorElNav, setAnchorElNav] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [anchorElUser, setAnchorElUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [darkMode, setDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleOpenNavMenu = (event)=>{\n        setAnchorElNav(event.currentTarget);\n    };\n    const handleOpenUserMenu = (event)=>{\n        setAnchorElUser(event.currentTarget);\n    };\n    const handleCloseNavMenu = ()=>{\n        setAnchorElNav(null);\n    };\n    const handleCloseUserMenu = ()=>{\n        setAnchorElUser(null);\n    };\n    const toggleDarkMode = ()=>{\n        setDarkMode((prevMode)=>!prevMode);\n    };\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)({\n        palette: {\n            mode: darkMode ? \"dark\" : \"light\"\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n            theme: theme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                position: \"fixed\",\n                className: \"navcolor\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    maxWidth: \"xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        disableGutters: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                sx: {\n                                    display: {\n                                        xs: \"none\",\n                                        md: \"flex\",\n                                        gap: 50\n                                    },\n                                    fontFamily: \"Times\"\n                                },\n                                className: \"header-container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\",\n                                        className: \"items\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/exchanges\",\n                                        className: \"items\",\n                                        children: \"Exchange\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/markets\",\n                                        className: \"items\",\n                                        children: \"Market\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/rates\",\n                                        className: \"items\",\n                                        children: \"Rates\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                color: \"inherit\",\n                                onClick: toggleDarkMode,\n                                children: darkMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Brightness7__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 29\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Brightness4__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 51\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Header, \"eZ1kOIsKfkkfOReMnZub0z49I78=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvSGVhZGVyL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRTtBQUNOO0FBQ1E7QUFDSTtBQUNuQjtBQUNxQjtBQUNZO0FBQ0E7QUFDSTtBQUVsRSxNQUFNWSxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHZCxxREFBYyxDQUFxQjtJQUN6RSxNQUFNLENBQUNlLGNBQWNDLGdCQUFnQixHQUFHaEIscURBQWMsQ0FBcUI7SUFDM0UsTUFBTSxDQUFDaUIsVUFBVUMsWUFBWSxHQUFHakIsK0NBQVFBLENBQUM7SUFFekMsTUFBTWtCLG9CQUFvQixDQUFDQztRQUN6Qk4sZUFBZU0sTUFBTUMsYUFBYTtJQUNwQztJQUNBLE1BQU1DLHFCQUFxQixDQUFDRjtRQUMxQkosZ0JBQWdCSSxNQUFNQyxhQUFhO0lBQ3JDO0lBRUEsTUFBTUUscUJBQXFCO1FBQ3pCVCxlQUFlO0lBQ2pCO0lBRUEsTUFBTVUsc0JBQXNCO1FBQzFCUixnQkFBZ0I7SUFDbEI7SUFFQSxNQUFNUyxpQkFBaUI7UUFDckJQLFlBQVksQ0FBQ1EsV0FBYSxDQUFDQTtJQUM3QjtJQUVBLE1BQU1DLFFBQVFoQixpRUFBV0EsQ0FBQztRQUN4QmlCLFNBQVM7WUFDUEMsTUFBTVosV0FBVyxTQUFTO1FBQzVCO0lBQ0Y7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ1AsK0RBQWFBO1lBQUNpQixPQUFPQTtzQkFDcEIsNEVBQUN6Qiw0REFBTUE7Z0JBQUM0QixVQUFTO2dCQUFRQyxXQUFVOzBCQUNqQyw0RUFBQzFCLCtEQUFTQTtvQkFBQzJCLFVBQVM7OEJBQ2xCLDRFQUFDNUIsNkRBQU9BO3dCQUFDNkIsY0FBYzs7MENBQ3JCLDhEQUFDOUIseURBQUdBO2dDQUFDK0IsSUFBSTtvQ0FBRUMsU0FBUzt3Q0FBRUMsSUFBSTt3Q0FBUUMsSUFBSTt3Q0FBUUMsS0FBSztvQ0FBRztvQ0FBR0MsWUFBWTtnQ0FBUTtnQ0FBR1IsV0FBVTs7a0RBQ3hGLDhEQUFDekIsa0RBQUlBO3dDQUFDa0MsTUFBTTt3Q0FBS1QsV0FBVTtrREFBUTs7Ozs7O2tEQUNuQyw4REFBQ3pCLGtEQUFJQTt3Q0FBQ2tDLE1BQU07d0NBQWNULFdBQVU7a0RBQVE7Ozs7OztrREFDNUMsOERBQUN6QixrREFBSUE7d0NBQUNrQyxNQUFNO3dDQUFZVCxXQUFVO2tEQUFROzs7Ozs7a0RBQzFDLDhEQUFDekIsa0RBQUlBO3dDQUFDa0MsTUFBTTt3Q0FBVVQsV0FBVTtrREFBUTs7Ozs7Ozs7Ozs7OzBDQUUxQyw4REFBQ3hCLGdFQUFVQTtnQ0FBQ2tDLE9BQU07Z0NBQVVDLFNBQVNqQjswQ0FDbENSLHlCQUFXLDhEQUFDUix1RUFBZUE7Ozs7OERBQU0sOERBQUNELHdFQUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbEU7R0FuRE1JO0tBQUFBO0FBcUROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xheW91dC9IZWFkZXIvSGVhZGVyLnRzeD8wNWI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcbmltcG9ydCBCcmlnaHRuZXNzNEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9CcmlnaHRuZXNzNCc7XG5pbXBvcnQgQnJpZ2h0bmVzczdJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQnJpZ2h0bmVzczcnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW2FuY2hvckVsTmF2LCBzZXRBbmNob3JFbE5hdl0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbYW5jaG9yRWxVc2VyLCBzZXRBbmNob3JFbFVzZXJdID0gUmVhY3QudXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW2RhcmtNb2RlLCBzZXREYXJrTW9kZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBoYW5kbGVPcGVuTmF2TWVudSA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICBzZXRBbmNob3JFbE5hdihldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlT3BlblVzZXJNZW51ID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIHNldEFuY2hvckVsVXNlcihldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZU5hdk1lbnUgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWxOYXYobnVsbCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2VVc2VyTWVudSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbFVzZXIobnVsbCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRGFya01vZGUgPSAoKSA9PiB7XG4gICAgc2V0RGFya01vZGUoKHByZXZNb2RlKSA9PiAhcHJldk1vZGUpO1xuICB9O1xuXG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIG1vZGU6IGRhcmtNb2RlID8gJ2RhcmsnIDogJ2xpZ2h0JyxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBjbGFzc05hbWU9J25hdmNvbG9yJz5cbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieGxcIj5cbiAgICAgICAgICAgIDxUb29sYmFyIGRpc2FibGVHdXR0ZXJzPlxuICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IHsgeHM6ICdub25lJywgbWQ6ICdmbGV4JywgZ2FwOiA1MCB9LCBmb250RmFtaWx5OiBcIlRpbWVzXCIgfX0gY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30gY2xhc3NOYW1lPSdpdGVtcyc+SG9tZTwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2V4Y2hhbmdlcyd9IGNsYXNzTmFtZT0naXRlbXMnPkV4Y2hhbmdlPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvbWFya2V0cyd9IGNsYXNzTmFtZT0naXRlbXMnPk1hcmtldDwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3JhdGVzJ30gY2xhc3NOYW1lPSdpdGVtcyc+UmF0ZXM8L0xpbms+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXt0b2dnbGVEYXJrTW9kZX0+XG4gICAgICAgICAgICAgICAge2RhcmtNb2RlID8gPEJyaWdodG5lc3M3SWNvbiAvPiA6IDxCcmlnaHRuZXNzNEljb24gLz59XG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9BcHBCYXI+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFwcEJhciIsIkJveCIsIlRvb2xiYXIiLCJDb250YWluZXIiLCJMaW5rIiwiSWNvbkJ1dHRvbiIsIkJyaWdodG5lc3M0SWNvbiIsIkJyaWdodG5lc3M3SWNvbiIsIlRoZW1lUHJvdmlkZXIiLCJjcmVhdGVUaGVtZSIsIkhlYWRlciIsImFuY2hvckVsTmF2Iiwic2V0QW5jaG9yRWxOYXYiLCJhbmNob3JFbFVzZXIiLCJzZXRBbmNob3JFbFVzZXIiLCJkYXJrTW9kZSIsInNldERhcmtNb2RlIiwiaGFuZGxlT3Blbk5hdk1lbnUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVPcGVuVXNlck1lbnUiLCJoYW5kbGVDbG9zZU5hdk1lbnUiLCJoYW5kbGVDbG9zZVVzZXJNZW51IiwidG9nZ2xlRGFya01vZGUiLCJwcmV2TW9kZSIsInRoZW1lIiwicGFsZXR0ZSIsIm1vZGUiLCJwb3NpdGlvbiIsImNsYXNzTmFtZSIsIm1heFdpZHRoIiwiZGlzYWJsZUd1dHRlcnMiLCJzeCIsImRpc3BsYXkiLCJ4cyIsIm1kIiwiZ2FwIiwiZm9udEZhbWlseSIsImhyZWYiLCJjb2xvciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layout/Header/Header.tsx\n"));

/***/ })

});