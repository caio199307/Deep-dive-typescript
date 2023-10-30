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
    accessOptions["undefined"] = "n\u00E3o definido";
})(accessOptions || (accessOptions = {}));


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

var content = document.getElementById('content');
var button = document.querySelector('button[id="add"]');
var accessRadio = document.getElementById('accessRadio');
button.addEventListener('click', addEmployee);
var accessOptionsValues = Object.values(_models__WEBPACK_IMPORTED_MODULE_0__.accessOptions);
var updateUserLayout = function () { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getUser()];
            case 1:
                users = _a.sent();
                users.map(function (user) {
                    content.innerHTML += createLine(user);
                });
                return [2 /*return*/];
        }
    });
}); };
var getUser = function () { return __awaiter(void 0, void 0, void 0, function () {
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
}); };
updateUserLayout();
function addEmployee() {
    var formFields = [
        document.querySelector('#fullName'),
        document.querySelector('#register'),
        document.querySelector('input[name="access"]:checked'),
        document.querySelector('#active'),
        document.querySelector('#addressHome'),
        document.querySelector('#addressWork')
    ];
    var fullName = formFields[0], register = formFields[1], admin = formFields[2], active = formFields[3], addressHome = formFields[4], addressWork = formFields[5];
    var user = {
        fullName: fullName.value,
        register: register.value != '' ? register.value : undefined,
        active: active.checked,
        access: admin.value
    };
    content.innerHTML += createLine(user, addressHome.value, addressWork.value);
}
accessOptionsValues.forEach(function (value, i) {
    accessRadio.innerHTML += "\n  <div class=\"form-check\">\n    <input class=\"form-check-input\" type=\"radio\" name=\"access\" id=\"accessRadio".concat(i, "\" value=\"").concat(value, "\">\n    <label class=\"form-check-label capitalLetter\" for=\"no\">\n      ").concat(value, "\n    </label>\n  </div>\n  ");
});
document.getElementById('accessRadio0').checked = true;
function createLineByUserFields(fullName, register, active, access) {
    if (register === void 0) { register = Math.random().toString(36).substring(7).toUpperCase(); }
    if (active === void 0) { active = false; }
    if (access === void 0) { access = _models__WEBPACK_IMPORTED_MODULE_0__.accessOptions.undefined; }
    var address = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        address[_i - 4] = arguments[_i];
    }
    return "\n  <div class=\"card mb-1\">\n    <div class=\"card-header\">\n      ".concat(register, "\n    </div>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">").concat(fullName, "</h5>\n      <a href=\"#\" class=\"btn btn-primary\">").concat(active ? 'Ativo' : 'Inativo', "</a>\n    </div>\n    <div class=\"card-body\">\n      <h6 class=\"card-title\">").concat(address.join('<br/>'), "</h6>\n    </div>\n    <div class=\"card-footer bg-transparent border-success\">\n      Acesso: ").concat(access == _models__WEBPACK_IMPORTED_MODULE_0__.accessOptions.undefined ? 'não definido' : access, "\n    </div>\n  </div>");
}
function createLine(_a) {
    var fullName = _a.fullName, _b = _a.register, register = _b === void 0 ? Math.random().toString(36).substring(7).toUpperCase() : _b, _c = _a.active, active = _c === void 0 ? false : _c, _d = _a.access, access = _d === void 0 ? _models__WEBPACK_IMPORTED_MODULE_0__.accessOptions.undefined : _d;
    var address = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        address[_i - 1] = arguments[_i];
    }
    return "\n  <div class=\"card mb-1\">\n    <div class=\"card-header\">\n      ".concat(register, "\n    </div>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">").concat(fullName, "</h5>\n      <a href=\"#\" class=\"btn btn-primary\">").concat(active ? 'Ativo' : 'Inativo', "</a>\n    </div>\n    ").concat(address.length > 0 ?
        "<div class=\"card-body\">\n        <h6 class=\"card-title\">".concat(address.join('<br/>'), "</h6>\n      </div>") : '', "\n    \n    <div class=\"card-footer bg-transparent border-success\">\n      Acesso: ").concat(access, "\n    </div>\n  </div>");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssT0FDZCxjQUFnQyxFQUFoQyxNQUFNLG1CQUFHLGtEQUFhLENBQUMsU0FBUztJQUVsQyxpQkFBb0I7U0FBcEIsVUFBb0IsRUFBcEIscUJBQW9CLEVBQXBCLElBQW9CO1FBQXBCLGdDQUFvQjs7SUFDbEIsT0FBTyxnRkFHRCxRQUFRLHlGQUdlLFFBQVEsa0VBQ0ssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsbUNBR2xFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEIsc0VBQzJCLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUN6QyxDQUFDLENBQUMsQ0FBQyxFQUFFLGtHQUlGLE1BQU0sMkJBRWIsQ0FBQztBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBhY2Nlc3NPcHRpb25zIHtcclxuICAgIGFkbWluaXN0cmF0b3IgPSAnYWRtaW5pc3RyYWRvcicsXHJcbiAgICBtYW5hZ2VyID0gJ2dlcmVudGUnLFxyXG4gICAgZW1wbG95ZWUgPSAnZnVuY2lvbsOhcmlvJyxcclxuICAgIHVuZGVmaW5lZCA9ICduw6NvIGRlZmluaWRvJ1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSB1c2VyVHlwZSA9IHtcclxuICAgIGZ1bGxOYW1lOiBzdHJpbmcsXHJcbiAgICByZWdpc3Rlcj86IHN0cmluZyB8IG51bWJlcixcclxuICAgIGFjY2Vzcz86IGFjY2Vzc09wdGlvbnMsXHJcbiAgICBhY3RpdmU/OiBib29sZWFuXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFjY2Vzc09wdGlvbnMsIHVzZXJUeXBlIH0gZnJvbSBcIi4vbW9kZWxzXCJcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpIGFzIEhUTUxFbGVtZW50XHJcbmNvbnN0IGJ1dHRvbiA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltpZD1cImFkZFwiXScpXHJcbmNvbnN0IGFjY2Vzc1JhZGlvID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2Nlc3NSYWRpbycpXHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEVtcGxveWVlKVxyXG5cclxuY29uc3QgYWNjZXNzT3B0aW9uc1ZhbHVlcyA9IE9iamVjdC52YWx1ZXMoYWNjZXNzT3B0aW9ucylcclxuXHJcbmNvbnN0IHVwZGF0ZVVzZXJMYXlvdXQgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgY29uc3QgdXNlcnM6IHVzZXJUeXBlW10gPSBhd2FpdCBnZXRVc2VyKClcclxuICB1c2Vycy5tYXAoKHVzZXI6IHVzZXJUeXBlKSA9PiB7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCArPSA8c3RyaW5nPmNyZWF0ZUxpbmUodXNlcilcclxuICB9KVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IGdldFVzZXIgPSBhc3luYyAoKTogUHJvbWlzZTx1c2VyVHlwZVtdPiA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAxMS91c2VycycpXHJcbiAgY29uc3QgdXNlcnM6IHVzZXJUeXBlW10gPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICByZXR1cm4gdXNlcnM7XHJcbn1cclxuXHJcbnVwZGF0ZVVzZXJMYXlvdXQoKSBcclxuXHJcbmZ1bmN0aW9uIGFkZEVtcGxveWVlKCk6IHZvaWQge1xyXG4gIGxldCBmb3JtRmllbGRzID0gW1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Z1bGxOYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWdpc3RlcicpIGFzIEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYWNjZXNzXCJdOmNoZWNrZWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjdGl2ZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkcmVzc0hvbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50LFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZHJlc3NXb3JrJykgYXMgSFRNTElucHV0RWxlbWVudFxyXG4gIF1cclxuXHJcbiAgY29uc3QgW2Z1bGxOYW1lLCByZWdpc3RlciwgYWRtaW4sIGFjdGl2ZSwgYWRkcmVzc0hvbWUsIGFkZHJlc3NXb3JrXSA9IGZvcm1GaWVsZHNcclxuXHJcbiAgbGV0IHVzZXI6IHVzZXJUeXBlID0ge1xyXG4gICAgZnVsbE5hbWU6IGZ1bGxOYW1lIS52YWx1ZSxcclxuICAgIHJlZ2lzdGVyOiByZWdpc3Rlci52YWx1ZSAhPSAnJyA/IHJlZ2lzdGVyLnZhbHVlIDogdW5kZWZpbmVkLFxyXG4gICAgYWN0aXZlOiBhY3RpdmUuY2hlY2tlZCxcclxuICAgIGFjY2VzczogPGFjY2Vzc09wdGlvbnM+YWRtaW4udmFsdWVcclxuICB9XHJcblxyXG4gIGNvbnRlbnQuaW5uZXJIVE1MICs9IDxzdHJpbmc+Y3JlYXRlTGluZShcclxuICAgIHVzZXIsXHJcbiAgICBhZGRyZXNzSG9tZS52YWx1ZSxcclxuICAgIGFkZHJlc3NXb3JrLnZhbHVlXHJcbiAgKVxyXG59XHJcblxyXG5hY2Nlc3NPcHRpb25zVmFsdWVzLmZvckVhY2goKHZhbHVlOiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xyXG4gIGFjY2Vzc1JhZGlvLmlubmVySFRNTCArPSBgXHJcbiAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYWNjZXNzXCIgaWQ9XCJhY2Nlc3NSYWRpbyR7aX1cIiB2YWx1ZT1cIiR7dmFsdWV9XCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsIGNhcGl0YWxMZXR0ZXJcIiBmb3I9XCJub1wiPlxyXG4gICAgICAke3ZhbHVlfVxyXG4gICAgPC9sYWJlbD5cclxuICA8L2Rpdj5cclxuICBgXHJcbn0pO1xyXG4oPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2Vzc1JhZGlvMCcpKS5jaGVja2VkID0gdHJ1ZTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmVCeVVzZXJGaWVsZHMoXHJcbiAgZnVsbE5hbWU6IHN0cmluZyxcclxuICByZWdpc3Rlcjogc3RyaW5nIHwgbnVtYmVyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnRvVXBwZXJDYXNlKCksXHJcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2UsXHJcbiAgYWNjZXNzOiBhY2Nlc3NPcHRpb25zID0gYWNjZXNzT3B0aW9ucy51bmRlZmluZWQsXHJcbiAgLi4uYWRkcmVzczogc3RyaW5nW11cclxuKTogc3RyaW5nIHtcclxuICByZXR1cm4gYFxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTFcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAke3JlZ2lzdGVyfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke2Z1bGxOYW1lfTwvaDU+XHJcbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj4ke2FjdGl2ZSA/ICdBdGl2bycgOiAnSW5hdGl2byd9PC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgIDxoNiBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke2FkZHJlc3Muam9pbignPGJyLz4nKX08L2g2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXIgYmctdHJhbnNwYXJlbnQgYm9yZGVyLXN1Y2Nlc3NcIj5cclxuICAgICAgQWNlc3NvOiAke2FjY2VzcyA9PSBhY2Nlc3NPcHRpb25zLnVuZGVmaW5lZCA/ICAnbsOjbyBkZWZpbmlkbycgOiBhY2Nlc3N9XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5lICh7XHJcbiAgZnVsbE5hbWUsXHJcbiAgcmVnaXN0ZXIgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykudG9VcHBlckNhc2UoKSxcclxuICBhY3RpdmUgPSBmYWxzZSxcclxuICBhY2Nlc3MgPSBhY2Nlc3NPcHRpb25zLnVuZGVmaW5lZFxyXG59OiB1c2VyVHlwZSwgXHJcbi4uLmFkZHJlc3M6IHN0cmluZ1tdKSB7XHJcbiAgcmV0dXJuIGBcclxuICA8ZGl2IGNsYXNzPVwiY2FyZCBtYi0xXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgJHtyZWdpc3Rlcn1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHtmdWxsTmFtZX08L2g1PlxyXG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+JHthY3RpdmUgPyAnQXRpdm8nIDogJ0luYXRpdm8nfTwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgJHtcclxuICAgICAgYWRkcmVzcy5sZW5ndGggPiAwID9cclxuICAgICAgYDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8aDYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHthZGRyZXNzLmpvaW4oJzxici8+Jyl9PC9oNj5cclxuICAgICAgPC9kaXY+YCA6ICcnXHJcbiAgICB9XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlciBiZy10cmFuc3BhcmVudCBib3JkZXItc3VjY2Vzc1wiPlxyXG4gICAgICBBY2Vzc286ICR7YWNjZXNzfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=