/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/models.ts":
/*!***********************!*\
  !*** ./src/models.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accessOptions: () => (/* binding */ accessOptions)
/* harmony export */ });
var accessOptions;
(function (accessOptions) {
    accessOptions["administrator"] = "administrador";
    accessOptions["manager"] = "gerente";
    accessOptions["employee"] = "funcion\u00E1rio";
    accessOptions["undefined"] = "N\u00E3o Definido";
})(accessOptions || (accessOptions = {}));


/***/ }),

/***/ "./src/output.ts":
/*!***********************!*\
  !*** ./src/output.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserController: () => (/* binding */ UserController)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/models.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var UserController = /** @class */ (function () {
    function UserController() {
        var _this = this;
        //propriedades
        this.button = this.getFormElement('#insert');
        this.content = this.getElement('#content');
        this.accessRadio = this.getElement('#accessRadio');
        this.accessOptionsValues = Object.values(_models__WEBPACK_IMPORTED_MODULE_0__.accessOptions);
        this.button.addEventListener('click', function () { return _this.addEmployee(); });
    }
    UserController.prototype.getElement = function (selector) {
        return document.querySelector(selector);
    };
    UserController.prototype.getFormElement = function (selector) {
        return document.querySelector(selector);
    };
    //funcionalidades
    UserController.prototype.userLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUser()];
                    case 1:
                        users = _a.sent();
                        users.map(function (user) {
                            _this.content.innerHTML += _this.createLine(user);
                        });
                        this.accessOptionsValues.forEach(function (value, i) {
                            _this.accessRadio.innerHTML += "\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"access\" id=\"accessRadio".concat(i, "\" value=\"").concat(value, "\">\n          <label class=\"form-check-label capitalLetter\" for=\"no\">\n            ").concat(value, "\n          </label>\n        </div>\n        ");
                        });
                        (this.getFormElement('#accessRadio0')).checked = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    UserController.prototype.getUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('http://localhost:5011/users')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        });
    };
    ;
    UserController.prototype.addEmployee = function () {
        var formFields = [
            this.getFormElement('#fullName'),
            this.getFormElement('#register'),
            this.getFormElement('input[name="access"]:checked'),
            this.getFormElement('#active'),
            this.getFormElement('#addressHome'),
            this.getFormElement('#addressWork'),
        ];
        var fullName = formFields[0], register = formFields[1], admin = formFields[2], active = formFields[3], addressHome = formFields[4], addressWork = formFields[5];
        var user = {
            fullName: fullName.value,
            register: register.value != '' ? register.value : undefined,
            active: active.checked,
            access: admin.value,
        };
        this.content.innerHTML += this.createLine(user, addressHome.value, addressWork.value);
    };
    UserController.prototype.createLine = function (_a) {
        var fullName = _a.fullName, _b = _a.register, register = _b === void 0 ? Math.random().toString(36).substring(7).toUpperCase() : _b, _c = _a.active, active = _c === void 0 ? false : _c, _d = _a.access, access = _d === void 0 ? _models__WEBPACK_IMPORTED_MODULE_0__.accessOptions.undefined : _d;
        var address = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            address[_i - 1] = arguments[_i];
        }
        return "\n      <div class=\"card mb-1\">\n        <div class=\"card-header\">\n          ".concat(register, "\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(fullName, "</h5>\n          <a href=\"#\" class=\"btn btn-primary\">").concat(active ? 'Ativo' : 'Inativo', "</a>\n        </div>\n        ").concat(address.length > 0
            ? "<div class=\"card-body\">\n            <h6 class=\"card-title\">".concat(address.join('<br/>'), "</h6>\n          </div>")
            : '', "\n        <div class=\"card-footer bg-transparent border-success\">\n          Acesso: ").concat(access, "\n        </div>\n      </div>");
    };
    return UserController;
}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _output__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output */ "./src/output.ts");

var userController = new _output__WEBPACK_IMPORTED_MODULE_0__.UserController();
userController.userLayout();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VDbEdEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOeUM7QUFFekMsSUFBTSxjQUFjLEdBQUcsSUFBSSxtREFBYyxFQUFFO0FBQzNDLGNBQWMsQ0FBQyxVQUFVLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9vdXRwdXQudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIGFjY2Vzc09wdGlvbnMge1xyXG4gICAgYWRtaW5pc3RyYXRvciA9ICdhZG1pbmlzdHJhZG9yJyxcclxuICAgIG1hbmFnZXIgPSAnZ2VyZW50ZScsXHJcbiAgICBlbXBsb3llZSA9ICdmdW5jaW9uw6FyaW8nLFxyXG4gICAgdW5kZWZpbmVkID0gJ07Do28gRGVmaW5pZG8nXHJcbiAgfVxyXG4gIFxyXG4gIGludGVyZmFjZSBJUGVyc29uIHtcclxuICAgIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgICBhZGRyZXNzPzogc3RyaW5nW107XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSVVzZXIgZXh0ZW5kcyBJUGVyc29uIHtcclxuICAgIHJlZ2lzdGVyPzogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgYWNjZXNzPzogYWNjZXNzT3B0aW9ucztcclxuICAgIGFjdGl2ZT86IGJvb2xlYW47XHJcbiAgfSIsImltcG9ydCB7IGFjY2Vzc09wdGlvbnMsIElVc2VyIH0gZnJvbSBcIi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlckNvbnRyb2xsZXIge1xyXG4gIC8vcHJvcHJpZWRhZGVzXHJcbiAgYnV0dG9uOiBIVE1MRm9ybUVsZW1lbnQgPSB0aGlzLmdldEZvcm1FbGVtZW50KCcjaW5zZXJ0Jyk7XHJcbiAgY29udGVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoJyNjb250ZW50Jyk7XHJcbiAgYWNjZXNzUmFkaW86IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KCcjYWNjZXNzUmFkaW8nKTtcclxuICBhY2Nlc3NPcHRpb25zVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhhY2Nlc3NPcHRpb25zKVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hZGRFbXBsb3llZSgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RWxlbWVudChzZWxlY3Rvcjogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIGFzIEhUTUxFbGVtZW50XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0Rm9ybUVsZW1lbnQoc2VsZWN0b3I6IHN0cmluZyk6IEhUTUxGb3JtRWxlbWVudCB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgSFRNTEZvcm1FbGVtZW50XHJcbiAgfVxyXG5cclxuICAvL2Z1bmNpb25hbGlkYWRlc1xyXG4gIGFzeW5jIHVzZXJMYXlvdXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCB1c2VyczogSVVzZXJbXSA9IGF3YWl0IHRoaXMuZ2V0VXNlcigpO1xyXG5cclxuICAgIHVzZXJzLm1hcCgodXNlcjogSVVzZXIpID0+IHtcclxuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCArPSA8c3RyaW5nPnRoaXMuY3JlYXRlTGluZSh1c2VyKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hY2Nlc3NPcHRpb25zVmFsdWVzLmZvckVhY2goKHZhbHVlOiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuYWNjZXNzUmFkaW8uaW5uZXJIVE1MICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhY2Nlc3NcIiBpZD1cImFjY2Vzc1JhZGlvJHtpfVwiIHZhbHVlPVwiJHt2YWx1ZX1cIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWwgY2FwaXRhbExldHRlclwiIGZvcj1cIm5vXCI+XHJcbiAgICAgICAgICAgICR7dmFsdWV9XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgICAgfSk7XHJcbiAgICAgICh0aGlzLmdldEZvcm1FbGVtZW50KCcjYWNjZXNzUmFkaW8wJykpLmNoZWNrZWQgPSB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGFzeW5jIGdldFVzZXIoKTogUHJvbWlzZTxJVXNlcltdPiB7XHJcbiAgICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDExL3VzZXJzJyk7XHJcbiAgICBjb25zdCB1c2VyczogSVVzZXJbXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiB1c2VycztcclxuICB9O1xyXG5cclxuICBhZGRFbXBsb3llZSAoKTogdm9pZCB7XHJcbiAgICBsZXQgZm9ybUZpZWxkcyA9IFtcclxuICAgICAgdGhpcy5nZXRGb3JtRWxlbWVudCgnI2Z1bGxOYW1lJyksXHJcbiAgICAgIHRoaXMuZ2V0Rm9ybUVsZW1lbnQoJyNyZWdpc3RlcicpLFxyXG4gICAgICB0aGlzLmdldEZvcm1FbGVtZW50KCdpbnB1dFtuYW1lPVwiYWNjZXNzXCJdOmNoZWNrZWQnKSxcclxuICAgICAgdGhpcy5nZXRGb3JtRWxlbWVudCgnI2FjdGl2ZScpLFxyXG4gICAgICB0aGlzLmdldEZvcm1FbGVtZW50KCcjYWRkcmVzc0hvbWUnKSxcclxuICAgICAgdGhpcy5nZXRGb3JtRWxlbWVudCgnI2FkZHJlc3NXb3JrJyksXHJcbiAgICBdO1xyXG4gIFxyXG4gICAgY29uc3QgW2Z1bGxOYW1lLCByZWdpc3RlciwgYWRtaW4sIGFjdGl2ZSwgYWRkcmVzc0hvbWUsIGFkZHJlc3NXb3JrXSA9IGZvcm1GaWVsZHM7XHJcbiAgXHJcbiAgICBsZXQgdXNlcjogSVVzZXIgPSB7XHJcbiAgICAgIGZ1bGxOYW1lOiBmdWxsTmFtZSEudmFsdWUsXHJcbiAgICAgIHJlZ2lzdGVyOiByZWdpc3Rlci52YWx1ZSAhPSAnJyA/IHJlZ2lzdGVyLnZhbHVlIDogdW5kZWZpbmVkLFxyXG4gICAgICBhY3RpdmU6IGFjdGl2ZS5jaGVja2VkLFxyXG4gICAgICBhY2Nlc3M6IDxhY2Nlc3NPcHRpb25zPmFkbWluLnZhbHVlLFxyXG4gICAgfTtcclxuICBcclxuICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgKz0gPHN0cmluZz50aGlzLmNyZWF0ZUxpbmUodXNlciwgYWRkcmVzc0hvbWUudmFsdWUsIGFkZHJlc3NXb3JrLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUxpbmUoXHJcbiAgICB7XHJcbiAgICAgIGZ1bGxOYW1lLFxyXG4gICAgICByZWdpc3RlciA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS50b1VwcGVyQ2FzZSgpLFxyXG4gICAgICBhY3RpdmUgPSBmYWxzZSxcclxuICAgICAgYWNjZXNzID0gYWNjZXNzT3B0aW9ucy51bmRlZmluZWQsXHJcbiAgICB9OiBJVXNlcixcclxuICAgIC4uLmFkZHJlc3M6IHN0cmluZ1tdXHJcbiAgKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICR7cmVnaXN0ZXJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7ZnVsbE5hbWV9PC9oNT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj4ke2FjdGl2ZSA/ICdBdGl2bycgOiAnSW5hdGl2byd9PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICR7XHJcbiAgICAgICAgICBhZGRyZXNzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgPyBgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHthZGRyZXNzLmpvaW4oJzxici8+Jyl9PC9oNj5cclxuICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXIgYmctdHJhbnNwYXJlbnQgYm9yZGVyLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgIEFjZXNzbzogJHthY2Nlc3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PmA7XHJcbiAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBVc2VyQ29udHJvbGxlciB9IGZyb20gJy4vb3V0cHV0J1xyXG5cclxuY29uc3QgdXNlckNvbnRyb2xsZXIgPSBuZXcgVXNlckNvbnRyb2xsZXIoKVxyXG51c2VyQ29udHJvbGxlci51c2VyTGF5b3V0KCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=