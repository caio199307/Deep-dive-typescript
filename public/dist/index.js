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
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/service */ "./src/service/service.ts");
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
            var service, users;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        service = new _service_service__WEBPACK_IMPORTED_MODULE_1__.UserService();
                        return [4 /*yield*/, service.getItems()];
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


/***/ }),

/***/ "./src/service/service.ts":
/*!********************************!*\
  !*** ./src/service/service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenericService: () => (/* binding */ GenericService),
/* harmony export */   UserService: () => (/* binding */ UserService)
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
var GenericService = /** @class */ (function () {
    function GenericService() {
    }
    GenericService.prototype.getItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.URL)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        list = _a.sent();
                        this.items = list;
                        return [2 /*return*/, list];
                }
            });
        });
    };
    ;
    return GenericService;
}());

var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.URL = 'http://localhost:5011/users';
        return _this;
    }
    UserService.prototype.getItemByName = function (name) {
        return this.items ? this.items.find(function (item) { return (item.fullName = name); }) : undefined;
    };
    ;
    UserService.prototype.getItemById = function (id) {
        return this.items ? this.items.find(function (item) { return (item.register = id); }) : undefined;
    };
    ;
    return UserService;
}(GenericService));



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLFFBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0lBQ2pGLENBQUM7SUFBQSxDQUFDO0lBQ0osa0JBQUM7QUFBRCxDQUFDLENBVnVELGNBQWMsR0FVckU7Ozs7Ozs7O1VDaENIO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7QUFFdEMsK0NBQWMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2RlbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL291dHB1dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9zZXJ2aWNlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBhY2Nlc3NPcHRpb25zIHtcclxuICBhZG1pbmlzdHJhdG9yID0gJ2FkbWluaXN0cmFkb3InLFxyXG4gIG1hbmFnZXIgPSAnZ2VyZW50ZScsXHJcbiAgZW1wbG95ZWUgPSAnZnVuY2lvbsOhcmlvJyxcclxuICB1bmRlZmluZWQgPSAnTsOjbyBEZWZpbmlkbydcclxufVxyXG5cclxuY2xhc3MgUGVyc29uIHtcclxuICBwdWJsaWMgYWRkcmVzcz86IHN0cmluZ1tdXHJcbiAgLy8gQ29uc3RydXRvclxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGZ1bGxOYW1lOiBzdHJpbmcsIFxyXG4gICkge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBQZXJzb24ge1xyXG4gIGFjY2Vzcz86IGFjY2Vzc09wdGlvbnM7XHJcbiAgYWN0aXZlPzogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZnVsbE5hbWU6IHN0cmluZywgXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXI/OiBzdHJpbmcgfCBudW1iZXJcclxuICApIHtcclxuICAgIHN1cGVyKGZ1bGxOYW1lKVxyXG4gIH1cclxufSIsImltcG9ydCB7IGFjY2Vzc09wdGlvbnMsIFVzZXIgfSBmcm9tIFwiLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgSVNlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9zZXJ2aWNlXCI7XHJcblxyXG5jbGFzcyBVc2VyQ29udHJvbGxlciB7XHJcbiAgLy9wcm9wcmllZGFkZXNcclxuICBjb250ZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgnI2NvbnRlbnQnKTtcclxuICBhY2Nlc3NSYWRpbzogSFRNTEVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoJyNhY2Nlc3NSYWRpbycpO1xyXG4gIGFjY2Vzc09wdGlvbnNWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGFjY2Vzc09wdGlvbnMpO1xyXG4gIGJ1dHRvbjogSFRNTEZvcm1FbGVtZW50ID0gdGhpcy5nZXRGb3JtRWxlbWVudCgnI2luc2VydCcpO1xyXG5cclxuICAvL2NvbnN0cnV0b3JcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hZGRFbXBsb3llZSgpKTtcclxuICAgIHRoaXMudXNlckxheW91dCgpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEVsZW1lbnQoc2VsZWN0b3I6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSBhcyBIVE1MRWxlbWVudFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGb3JtRWxlbWVudChzZWxlY3Rvcjogc3RyaW5nKTogSFRNTEZvcm1FbGVtZW50IHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSBhcyBIVE1MRm9ybUVsZW1lbnRcclxuICB9XHJcblxyXG4gIC8vZnVuY2lvbmFsaWRhZGVzXHJcbiAgYXN5bmMgdXNlckxheW91dCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHNlcnZpY2U6IElTZXJ2aWNlPFVzZXI+ID0gbmV3IFVzZXJTZXJ2aWNlPFVzZXI+KCk7XHJcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHNlcnZpY2UuZ2V0SXRlbXMoKTtcclxuXHJcbiAgICB1c2Vycy5tYXAoKHVzZXI6IFVzZXIpID0+IHtcclxuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCArPSA8c3RyaW5nPnRoaXMuY3JlYXRlTGluZSh1c2VyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWNjZXNzT3B0aW9uc1ZhbHVlcy5mb3JFYWNoKCh2YWx1ZTogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgdGhpcy5hY2Nlc3NSYWRpby5pbm5lckhUTUwgKz0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYWNjZXNzXCIgaWQ9XCJhY2Nlc3NSYWRpbyR7aX1cIiB2YWx1ZT1cIiR7dmFsdWV9XCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbCBjYXBpdGFsTGV0dGVyXCIgZm9yPVwibm9cIj5cclxuICAgICAgICAgICR7dmFsdWV9XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9KTtcclxuICAgICh0aGlzLmdldEZvcm1FbGVtZW50KCcjYWNjZXNzUmFkaW8wJykpLmNoZWNrZWQgPSB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGFkZEVtcGxveWVlICgpOiB2b2lkIHtcclxuICAgIGxldCBmb3JtRmllbGRzID0gW1xyXG4gICAgICB0aGlzLmdldEZvcm1FbGVtZW50KCcjZnVsbE5hbWUnKSxcclxuICAgICAgdGhpcy5nZXRGb3JtRWxlbWVudCgnI3JlZ2lzdGVyJyksXHJcbiAgICAgIHRoaXMuZ2V0Rm9ybUVsZW1lbnQoJ2lucHV0W25hbWU9XCJhY2Nlc3NcIl06Y2hlY2tlZCcpLFxyXG4gICAgICB0aGlzLmdldEZvcm1FbGVtZW50KCcjYWN0aXZlJyksXHJcbiAgICAgIHRoaXMuZ2V0Rm9ybUVsZW1lbnQoJyNhZGRyZXNzSG9tZScpLFxyXG4gICAgICB0aGlzLmdldEZvcm1FbGVtZW50KCcjYWRkcmVzc1dvcmsnKSxcclxuICAgIF07XHJcbiAgXHJcbiAgICBjb25zdCBbZnVsbE5hbWUsIHJlZ2lzdGVyLCBhZG1pbiwgYWN0aXZlLCBhZGRyZXNzSG9tZSwgYWRkcmVzc1dvcmtdID0gZm9ybUZpZWxkcztcclxuICBcclxuICAgIGxldCB1c2VyOiBVc2VyID0ge1xyXG4gICAgICBmdWxsTmFtZTogZnVsbE5hbWUhLnZhbHVlLFxyXG4gICAgICByZWdpc3RlcjogcmVnaXN0ZXIudmFsdWUgIT0gJycgPyByZWdpc3Rlci52YWx1ZSA6IHVuZGVmaW5lZCxcclxuICAgICAgYWN0aXZlOiBhY3RpdmUuY2hlY2tlZCxcclxuICAgICAgYWNjZXNzOiA8YWNjZXNzT3B0aW9ucz5hZG1pbi52YWx1ZSxcclxuICAgIH07XHJcbiAgXHJcbiAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MICs9IDxzdHJpbmc+dGhpcy5jcmVhdGVMaW5lKHVzZXIsIGFkZHJlc3NIb21lLnZhbHVlLCBhZGRyZXNzV29yay52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVMaW5lKFxyXG4gICAge1xyXG4gICAgICBmdWxsTmFtZSxcclxuICAgICAgcmVnaXN0ZXIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykudG9VcHBlckNhc2UoKSxcclxuICAgICAgYWN0aXZlID0gZmFsc2UsXHJcbiAgICAgIGFjY2VzcyA9IGFjY2Vzc09wdGlvbnMudW5kZWZpbmVkLFxyXG4gICAgfTogVXNlcixcclxuICAgIC4uLmFkZHJlc3M6IHN0cmluZ1tdXHJcbiAgKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICR7cmVnaXN0ZXJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7ZnVsbE5hbWV9PC9oNT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj4ke2FjdGl2ZSA/ICdBdGl2bycgOiAnSW5hdGl2byd9PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICR7XHJcbiAgICAgICAgICBhZGRyZXNzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgPyBgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHthZGRyZXNzLmpvaW4oJzxici8+Jyl9PC9oNj5cclxuICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXIgYmctdHJhbnNwYXJlbnQgYm9yZGVyLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgIEFjZXNzbzogJHthY2Nlc3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PmA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVXNlckNvbnRyb2xsZXI7IiwiaW50ZXJmYWNlIGdlbmVyaWNJdGVtIHtcclxuICAgIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgICByZWdpc3Rlcj86IHN0cmluZyB8IG51bWJlcjtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGludGVyZmFjZSBJU2VydmljZTxUPiB7XHJcbiAgICBpdGVtczogVFtdO1xyXG4gICAgZ2V0SXRlbXM6ICgpID0+IFByb21pc2U8VFtdPjtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGNsYXNzIEdlbmVyaWNTZXJ2aWNlPFQ+IGltcGxlbWVudHMgSVNlcnZpY2U8VD57XHJcbiAgICBwdWJsaWMgaXRlbXM6IFRbXTtcclxuICAgIHByb3RlY3RlZCBVUkw6IHN0cmluZztcclxuICBcclxuICAgIGFzeW5jIGdldEl0ZW1zKCk6IFByb21pc2U8VFtdPiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMuVVJMKTtcclxuICAgICAgY29uc3QgbGlzdDogVFtdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB0aGlzLml0ZW1zID0gbGlzdDtcclxuICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9O1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgY2xhc3MgVXNlclNlcnZpY2U8VCBleHRlbmRzIGdlbmVyaWNJdGVtPiBleHRlbmRzIEdlbmVyaWNTZXJ2aWNlPFQ+IHtcclxuICAgIFVSTDogc3RyaW5nID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAxMS91c2Vycyc7XHJcbiAgXHJcbiAgICBnZXRJdGVtQnlOYW1lKG5hbWU6IHN0cmluZyk6IFQgfCB1bmRlZmluZWQge1xyXG4gICAgICByZXR1cm4gdGhpcy5pdGVtcyA/IHRoaXMuaXRlbXMuZmluZCgoaXRlbSkgPT4gKGl0ZW0uZnVsbE5hbWUgPSBuYW1lKSkgOiB1bmRlZmluZWRcclxuICAgIH07XHJcbiAgXHJcbiAgICBnZXRJdGVtQnlJZChpZDogbnVtYmVyKTogVCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zID8gdGhpcy5pdGVtcy5maW5kKChpdGVtKSA9PiAoaXRlbS5yZWdpc3RlciA9IGlkKSkgOiB1bmRlZmluZWRcclxuICAgIH07XHJcbiAgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFVzZXJDb250cm9sbGVyIGZyb20gJy4vb3V0cHV0JztcclxuXHJcblVzZXJDb250cm9sbGVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==