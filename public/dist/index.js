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
/* harmony export */   User: () => (/* binding */ User),
/* harmony export */   accessOptions: () => (/* binding */ accessOptions)
/* harmony export */ });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var accessOptions;
(function (accessOptions) {
    accessOptions["administrator"] = "administrador";
    accessOptions["manager"] = "gerente";
    accessOptions["employee"] = "funcion\u00E1rio";
    accessOptions["undefined"] = "N\u00E3o Definido";
})(accessOptions || (accessOptions = {}));
var Person = /** @class */ (function () {
    // Construtor
    function Person(fullName) {
        this.fullName = fullName;
    }
    return Person;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(fullName, register) {
        var _this = _super.call(this, fullName) || this;
        _this.fullName = fullName;
        _this.register = register;
        return _this;
    }
    return User;
}(Person));



/***/ }),

/***/ "./src/output.ts":
/*!***********************!*\
  !*** ./src/output.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
    //construtor
    function UserController() {
        var _this = this;
        //propriedades
        this.content = this.getElement('#content');
        this.accessRadio = this.getElement('#accessRadio');
        this.accessOptionsValues = Object.values(_models__WEBPACK_IMPORTED_MODULE_0__.accessOptions);
        this.button = this.getFormElement('#insert');
        this.button.addEventListener('click', function () { return _this.addEmployee(); });
        this.userLayout();
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
                            _this.accessRadio.innerHTML += "\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"access\" id=\"accessRadio".concat(i, "\" value=\"").concat(value, "\">\n        <label class=\"form-check-label capitalLetter\" for=\"no\">\n          ").concat(value, "\n        </label>\n      </div>\n      ");
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UserController);


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

_output__WEBPACK_IMPORTED_MODULE_0__["default"];

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsQ0FBQyxTQUFTO1FBRWxDLGlCQUFvQjthQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7WUFBcEIsZ0NBQW9COztRQUVwQixPQUFPLDRGQUdDLFFBQVEscUdBR2UsUUFBUSxzRUFDSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUywyQ0FHbEUsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ2hCLENBQUMsQ0FBQywwRUFDdUIsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsNEJBQ3pDO1lBQ0wsQ0FBQyxDQUFDLEVBQUUsb0dBR0ksTUFBTSxtQ0FFYixDQUFDO0lBQ1osQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQztBQUVELGlFQUFlLElBQUksY0FBYyxFQUFDOzs7Ozs7O1VDeEdsQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnNDO0FBRXRDLCtDQUFjLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9vdXRwdXQudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIGFjY2Vzc09wdGlvbnMge1xyXG4gIGFkbWluaXN0cmF0b3IgPSAnYWRtaW5pc3RyYWRvcicsXHJcbiAgbWFuYWdlciA9ICdnZXJlbnRlJyxcclxuICBlbXBsb3llZSA9ICdmdW5jaW9uw6FyaW8nLFxyXG4gIHVuZGVmaW5lZCA9ICdOw6NvIERlZmluaWRvJ1xyXG59XHJcblxyXG5jbGFzcyBQZXJzb24ge1xyXG4gIHB1YmxpYyBhZGRyZXNzPzogc3RyaW5nW11cclxuICAvLyBDb25zdHJ1dG9yXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZnVsbE5hbWU6IHN0cmluZywgXHJcbiAgKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIFBlcnNvbiB7XHJcbiAgYWNjZXNzPzogYWNjZXNzT3B0aW9ucztcclxuICBhY3RpdmU/OiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBmdWxsTmFtZTogc3RyaW5nLCBcclxuICAgIHB1YmxpYyByZWdpc3Rlcj86IHN0cmluZyB8IG51bWJlclxyXG4gICkge1xyXG4gICAgc3VwZXIoZnVsbE5hbWUpXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgYWNjZXNzT3B0aW9ucywgVXNlciB9IGZyb20gXCIuL21vZGVsc1wiO1xyXG5cclxuY2xhc3MgVXNlckNvbnRyb2xsZXIge1xyXG4gIC8vcHJvcHJpZWRhZGVzXHJcbiAgY29udGVudDogSFRNTEVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoJyNjb250ZW50Jyk7XHJcbiAgYWNjZXNzUmFkaW86IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KCcjYWNjZXNzUmFkaW8nKTtcclxuICBhY2Nlc3NPcHRpb25zVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhhY2Nlc3NPcHRpb25zKTtcclxuICBidXR0b246IEhUTUxGb3JtRWxlbWVudCA9IHRoaXMuZ2V0Rm9ybUVsZW1lbnQoJyNpbnNlcnQnKTtcclxuXHJcbiAgLy9jb25zdHJ1dG9yXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuYWRkRW1wbG95ZWUoKSk7XHJcbiAgICB0aGlzLnVzZXJMYXlvdXQoKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFbGVtZW50KHNlbGVjdG9yOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgSFRNTEVsZW1lbnRcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Rm9ybUVsZW1lbnQoc2VsZWN0b3I6IHN0cmluZyk6IEhUTUxGb3JtRWxlbWVudCB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgSFRNTEZvcm1FbGVtZW50XHJcbiAgfVxyXG5cclxuICAvL2Z1bmNpb25hbGlkYWRlc1xyXG4gIGFzeW5jIHVzZXJMYXlvdXQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCB1c2VyczogVXNlcltdID0gYXdhaXQgdGhpcy5nZXRVc2VyKCk7XHJcblxyXG4gICAgdXNlcnMubWFwKCh1c2VyOiBVc2VyKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgKz0gPHN0cmluZz50aGlzLmNyZWF0ZUxpbmUodXNlcik7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFjY2Vzc09wdGlvbnNWYWx1ZXMuZm9yRWFjaCgodmFsdWU6IHN0cmluZywgaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRoaXMuYWNjZXNzUmFkaW8uaW5uZXJIVE1MICs9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFjY2Vzc1wiIGlkPVwiYWNjZXNzUmFkaW8ke2l9XCIgdmFsdWU9XCIke3ZhbHVlfVwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWwgY2FwaXRhbExldHRlclwiIGZvcj1cIm5vXCI+XHJcbiAgICAgICAgICAke3ZhbHVlfVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfSk7XHJcbiAgICAodGhpcy5nZXRGb3JtRWxlbWVudCgnI2FjY2Vzc1JhZGlvMCcpKS5jaGVja2VkID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBhc3luYyBnZXRVc2VyKCk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDExL3VzZXJzJyk7XHJcbiAgICBjb25zdCB1c2VyczogVXNlcltdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIHVzZXJzO1xyXG4gIH07XHJcblxyXG4gIGFkZEVtcGxveWVlICgpOiB2b2lkIHtcclxuICAgIGxldCBmb3JtRmllbGRzID0gW1xyXG4gICAgICB0aGlzLmdldEZvcm1FbGVtZW50KCcjZnVsbE5hbWUnKSxcclxuICAgICAgdGhpcy5nZXRGb3JtRWxlbWVudCgnI3JlZ2lzdGVyJyksXHJcbiAgICAgIHRoaXMuZ2V0Rm9ybUVsZW1lbnQoJ2lucHV0W25hbWU9XCJhY2Nlc3NcIl06Y2hlY2tlZCcpLFxyXG4gICAgICB0aGlzLmdldEZvcm1FbGVtZW50KCcjYWN0aXZlJyksXHJcbiAgICAgIHRoaXMuZ2V0Rm9ybUVsZW1lbnQoJyNhZGRyZXNzSG9tZScpLFxyXG4gICAgICB0aGlzLmdldEZvcm1FbGVtZW50KCcjYWRkcmVzc1dvcmsnKSxcclxuICAgIF07XHJcbiAgXHJcbiAgICBjb25zdCBbZnVsbE5hbWUsIHJlZ2lzdGVyLCBhZG1pbiwgYWN0aXZlLCBhZGRyZXNzSG9tZSwgYWRkcmVzc1dvcmtdID0gZm9ybUZpZWxkcztcclxuICBcclxuICAgIGxldCB1c2VyOiBVc2VyID0ge1xyXG4gICAgICBmdWxsTmFtZTogZnVsbE5hbWUhLnZhbHVlLFxyXG4gICAgICByZWdpc3RlcjogcmVnaXN0ZXIudmFsdWUgIT0gJycgPyByZWdpc3Rlci52YWx1ZSA6IHVuZGVmaW5lZCxcclxuICAgICAgYWN0aXZlOiBhY3RpdmUuY2hlY2tlZCxcclxuICAgICAgYWNjZXNzOiA8YWNjZXNzT3B0aW9ucz5hZG1pbi52YWx1ZSxcclxuICAgIH07XHJcbiAgXHJcbiAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MICs9IDxzdHJpbmc+dGhpcy5jcmVhdGVMaW5lKHVzZXIsIGFkZHJlc3NIb21lLnZhbHVlLCBhZGRyZXNzV29yay52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVMaW5lKFxyXG4gICAge1xyXG4gICAgICBmdWxsTmFtZSxcclxuICAgICAgcmVnaXN0ZXIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykudG9VcHBlckNhc2UoKSxcclxuICAgICAgYWN0aXZlID0gZmFsc2UsXHJcbiAgICAgIGFjY2VzcyA9IGFjY2Vzc09wdGlvbnMudW5kZWZpbmVkLFxyXG4gICAgfTogVXNlcixcclxuICAgIC4uLmFkZHJlc3M6IHN0cmluZ1tdXHJcbiAgKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICR7cmVnaXN0ZXJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7ZnVsbE5hbWV9PC9oNT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj4ke2FjdGl2ZSA/ICdBdGl2bycgOiAnSW5hdGl2byd9PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICR7XHJcbiAgICAgICAgICBhZGRyZXNzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgPyBgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHthZGRyZXNzLmpvaW4oJzxici8+Jyl9PC9oNj5cclxuICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXIgYmctdHJhbnNwYXJlbnQgYm9yZGVyLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgIEFjZXNzbzogJHthY2Nlc3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PmA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlckNvbnRyb2xsZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVXNlckNvbnRyb2xsZXIgZnJvbSAnLi9vdXRwdXQnO1xyXG5cclxuVXNlckNvbnRyb2xsZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9