/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
var content = document.getElementById('content');
var button = document.querySelector('button[id="add"]');
button.addEventListener('click', addEmployee);
function addEmployee() {
    var fullName = document.querySelector('#fullName');
    var register = document.querySelector('#register');
    var admin = document.querySelector('input[name="admin"]:checked');
    var active = document.querySelector('#active');
    content.innerHTML += createLine(fullName.value, +register.value, admin.value, active.checked);
}
function createLine(fullName, nrRegister, admin, active) {
    return "<br>\n      ".concat(fullName, "<br>\n      ").concat(nrRegister, "<br>\n      ").concat(admin, "<br>\n      ").concat(active, "<br>\n      ");
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBSSxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRW5ELElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7QUFFekQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7QUFFN0MsU0FBUyxXQUFXO0lBQ2xCLElBQUksUUFBUSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNwRSxJQUFJLFFBQVEsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDcEUsSUFBSSxLQUFLLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsNkJBQTZCLENBQUM7SUFDbkYsSUFBSSxNQUFNLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBRWhFLE9BQU8sQ0FBQyxTQUFTLElBQVksVUFBVSxDQUNyQyxRQUFRLENBQUMsS0FBSyxFQUNkLENBQUMsUUFBUSxDQUFDLEtBQUssRUFDZixLQUFLLENBQUMsS0FBSyxFQUNYLE1BQU0sQ0FBQyxPQUFPLENBQ2Y7QUFDSCxDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsUUFBZ0IsRUFBRSxVQUFrQixFQUFFLEtBQWEsRUFBRSxNQUFlO0lBQ3RGLE9BQU8sc0JBQ0wsUUFBUSx5QkFDUixVQUFVLHlCQUNWLEtBQUsseUJBQ0wsTUFBTSxpQkFDUCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2lkPVwiYWRkXCJdJylcclxuXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRFbXBsb3llZSlcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRFbXBsb3llZSgpIHtcclxuICAgICAgbGV0IGZ1bGxOYW1lOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Z1bGxOYW1lJylcclxuICAgICAgbGV0IHJlZ2lzdGVyOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZ2lzdGVyJylcclxuICAgICAgbGV0IGFkbWluID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImFkbWluXCJdOmNoZWNrZWQnKVxyXG4gICAgICBsZXQgYWN0aXZlOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjdGl2ZScpXHJcblxyXG4gICAgICBjb250ZW50LmlubmVySFRNTCArPSA8c3RyaW5nPmNyZWF0ZUxpbmUoXHJcbiAgICAgICAgZnVsbE5hbWUudmFsdWUsXHJcbiAgICAgICAgK3JlZ2lzdGVyLnZhbHVlLFxyXG4gICAgICAgIGFkbWluLnZhbHVlLFxyXG4gICAgICAgIGFjdGl2ZS5jaGVja2VkXHJcbiAgICAgIClcclxuICAgIH1cclxuIFxyXG4gICAgZnVuY3Rpb24gY3JlYXRlTGluZShmdWxsTmFtZTogc3RyaW5nLCBuclJlZ2lzdGVyOiBudW1iZXIsIGFkbWluOiBzdHJpbmcsIGFjdGl2ZTogYm9vbGVhbikge1xyXG4gICAgICByZXR1cm4gYDxicj5cclxuICAgICAgJHtmdWxsTmFtZX08YnI+XHJcbiAgICAgICR7bnJSZWdpc3Rlcn08YnI+XHJcbiAgICAgICR7YWRtaW59PGJyPlxyXG4gICAgICAke2FjdGl2ZX08YnI+XHJcbiAgICAgIGA7XHJcbiAgICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9