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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var react_toggle_dark_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toggle-dark-mode */ \"./node_modules/react-toggle-dark-mode/dist/react-toggle-dark-mode.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [anchorElNav, setAnchorElNav] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [anchorElUser, setAnchorElUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [isDarkMode, setDarkMode] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const handleOpenNavMenu = (event)=>{\n        setAnchorElNav(event.currentTarget);\n    };\n    const handleOpenUserMenu = (event)=>{\n        setAnchorElUser(event.currentTarget);\n    };\n    const handleCloseNavMenu = ()=>{\n        setAnchorElNav(null);\n    };\n    const handleCloseUserMenu = ()=>{\n        setAnchorElUser(null);\n    };\n    const toggleDarkMode = (checked)=>{\n        setDarkMode(checked);\n    };\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.createTheme)({\n        palette: {\n            mode: darkMode ? \"dark\" : \"light\"\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n            theme: theme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                position: \"fixed\",\n                className: \"navcolor\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    maxWidth: \"xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        disableGutters: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                sx: {\n                                    display: {\n                                        xs: \"none\",\n                                        md: \"flex\",\n                                        gap: 50\n                                    },\n                                    fontFamily: \"Times\"\n                                },\n                                className: \"header-container\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/\",\n                                        className: \"items\",\n                                        children: \"Home\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/exchanges\",\n                                        className: \"items\",\n                                        children: \"Exchange\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/markets\",\n                                        className: \"items\",\n                                        children: \"Market\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/rates\",\n                                        className: \"items\",\n                                        children: \"Rates\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toggle_dark_mode__WEBPACK_IMPORTED_MODULE_3__.DarkModeSwitch, {\n                                style: {\n                                    marginBottom: \"2rem\"\n                                },\n                                checked: isDarkMode,\n                                onChange: toggleDarkMode,\n                                size: 120\n                            }, void 0, false, {\n                                fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/webskitters/Desktop/Webskitters/Nextjs/ecrypto/layout/Header/Header.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Header, \"gbw/1T+gEBDGDMrbP2HRTZl90gg=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvSGVhZGVyL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0U7QUFDTjtBQUNRO0FBQ0k7QUFDbkI7QUFJcUM7QUFDVjtBQUV4RCxNQUFNUyxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHWCxxREFBYyxDQUFxQjtJQUN6RSxNQUFNLENBQUNhLGNBQWNDLGdCQUFnQixHQUFHZCxxREFBYyxDQUFxQjtJQUczRSxNQUFNLENBQUNlLFlBQVlDLFlBQVksR0FBR2hCLHFEQUFjLENBQUM7SUFHakQsTUFBTWlCLG9CQUFvQixDQUFDQztRQUN6QlAsZUFBZU8sTUFBTUMsYUFBYTtJQUNwQztJQUNBLE1BQU1DLHFCQUFxQixDQUFDRjtRQUMxQkosZ0JBQWdCSSxNQUFNQyxhQUFhO0lBQ3JDO0lBRUEsTUFBTUUscUJBQXFCO1FBQ3pCVixlQUFlO0lBQ2pCO0lBRUEsTUFBTVcsc0JBQXNCO1FBQzFCUixnQkFBZ0I7SUFDbEI7SUFHQSxNQUFNUyxpQkFBaUIsQ0FBQ0M7UUFDdEJSLFlBQVlRO0lBQ2Q7SUFFQSxNQUFNQyxRQUFRbEIsaUVBQVdBLENBQUM7UUFDeEJtQixTQUFTO1lBQ1BDLE1BQU1DLFdBQVcsU0FBUztRQUM1QjtJQUNGO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUN0QiwrREFBYUE7WUFBQ21CLE9BQU9BO3NCQUNwQiw0RUFBQ3hCLDREQUFNQTtnQkFBQzRCLFVBQVM7Z0JBQVFDLFdBQVU7MEJBQ2pDLDRFQUFDMUIsK0RBQVNBO29CQUFDMkIsVUFBUzs4QkFDbEIsNEVBQUM1Qiw2REFBT0E7d0JBQUM2QixjQUFjOzswQ0FDckIsOERBQUM5Qix5REFBR0E7Z0NBQUMrQixJQUFJO29DQUFFQyxTQUFTO3dDQUFFQyxJQUFJO3dDQUFRQyxJQUFJO3dDQUFRQyxLQUFLO29DQUFHO29DQUFHQyxZQUFZO2dDQUFRO2dDQUFHUixXQUFVOztrREFDeEYsOERBQUN6QixrREFBSUE7d0NBQUNrQyxNQUFNO3dDQUFLVCxXQUFVO2tEQUFROzs7Ozs7a0RBQ25DLDhEQUFDekIsa0RBQUlBO3dDQUFDa0MsTUFBTTt3Q0FBY1QsV0FBVTtrREFBUTs7Ozs7O2tEQUM1Qyw4REFBQ3pCLGtEQUFJQTt3Q0FBQ2tDLE1BQU07d0NBQVlULFdBQVU7a0RBQVE7Ozs7OztrREFDMUMsOERBQUN6QixrREFBSUE7d0NBQUNrQyxNQUFNO3dDQUFVVCxXQUFVO2tEQUFROzs7Ozs7Ozs7Ozs7MENBRTFDLDhEQUFDdEIsa0VBQWNBO2dDQUNiZ0MsT0FBTztvQ0FBRUMsY0FBYztnQ0FBTztnQ0FDOUJqQixTQUFTVDtnQ0FDVDJCLFVBQVVuQjtnQ0FDVm9CLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdEI7R0ExRE1sQztLQUFBQTtBQTRETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9sYXlvdXQvSGVhZGVyL0hlYWRlci50c3g/MDViOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQnJpZ2h0bmVzczRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQnJpZ2h0bmVzczQnO1xuaW1wb3J0IEJyaWdodG5lc3M3SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0JyaWdodG5lc3M3JztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IHsgRGFya01vZGVTd2l0Y2ggfSBmcm9tICdyZWFjdC10b2dnbGUtZGFyay1tb2RlJztcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbYW5jaG9yRWxOYXYsIHNldEFuY2hvckVsTmF2XSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFthbmNob3JFbFVzZXIsIHNldEFuY2hvckVsVXNlcl0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xuXG5cbiAgY29uc3QgW2lzRGFya01vZGUsIHNldERhcmtNb2RlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuXG4gIGNvbnN0IGhhbmRsZU9wZW5OYXZNZW51ID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIHNldEFuY2hvckVsTmF2KGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuICBjb25zdCBoYW5kbGVPcGVuVXNlck1lbnUgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0QW5jaG9yRWxVc2VyKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlTmF2TWVudSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbE5hdihudWxsKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZVVzZXJNZW51ID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsVXNlcihudWxsKTtcbiAgfTtcblxuXG4gIGNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICBzZXREYXJrTW9kZShjaGVja2VkKTtcbiAgfTtcblxuICBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBtb2RlOiBkYXJrTW9kZSA/ICdkYXJrJyA6ICdsaWdodCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgY2xhc3NOYW1lPSduYXZjb2xvcic+XG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInhsXCI+XG4gICAgICAgICAgICA8VG9vbGJhciBkaXNhYmxlR3V0dGVycz5cbiAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiB7IHhzOiAnbm9uZScsIG1kOiAnZmxleCcsIGdhcDogNTAgfSwgZm9udEZhbWlseTogXCJUaW1lc1wiIH19IGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9IGNsYXNzTmFtZT0naXRlbXMnPkhvbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9leGNoYW5nZXMnfSBjbGFzc05hbWU9J2l0ZW1zJz5FeGNoYW5nZTwvTGluaz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL21hcmtldHMnfSBjbGFzc05hbWU9J2l0ZW1zJz5NYXJrZXQ8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9yYXRlcyd9IGNsYXNzTmFtZT0naXRlbXMnPlJhdGVzPC9MaW5rPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPERhcmtNb2RlU3dpdGNoXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMnJlbScgfX1cbiAgICAgICAgICAgICAgICBjaGVja2VkPXtpc0RhcmtNb2RlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0b2dnbGVEYXJrTW9kZX1cbiAgICAgICAgICAgICAgICBzaXplPXsxMjB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvQXBwQmFyPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwQmFyIiwiQm94IiwiVG9vbGJhciIsIkNvbnRhaW5lciIsIkxpbmsiLCJUaGVtZVByb3ZpZGVyIiwiY3JlYXRlVGhlbWUiLCJEYXJrTW9kZVN3aXRjaCIsIkhlYWRlciIsImFuY2hvckVsTmF2Iiwic2V0QW5jaG9yRWxOYXYiLCJ1c2VTdGF0ZSIsImFuY2hvckVsVXNlciIsInNldEFuY2hvckVsVXNlciIsImlzRGFya01vZGUiLCJzZXREYXJrTW9kZSIsImhhbmRsZU9wZW5OYXZNZW51IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlT3BlblVzZXJNZW51IiwiaGFuZGxlQ2xvc2VOYXZNZW51IiwiaGFuZGxlQ2xvc2VVc2VyTWVudSIsInRvZ2dsZURhcmtNb2RlIiwiY2hlY2tlZCIsInRoZW1lIiwicGFsZXR0ZSIsIm1vZGUiLCJkYXJrTW9kZSIsInBvc2l0aW9uIiwiY2xhc3NOYW1lIiwibWF4V2lkdGgiLCJkaXNhYmxlR3V0dGVycyIsInN4IiwiZGlzcGxheSIsInhzIiwibWQiLCJnYXAiLCJmb250RmFtaWx5IiwiaHJlZiIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwib25DaGFuZ2UiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layout/Header/Header.tsx\n"));

/***/ })

});