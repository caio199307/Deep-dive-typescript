/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
var button = document.querySelector('button[id="add"]');
var accessRadio = document.getElementById('accessRadio');
button.addEventListener('click', addEmployee);
var accessOptions;
(function (accessOptions) {
    accessOptions["administrator"] = "administrador";
    accessOptions["manager"] = "gerente";
    accessOptions["employee"] = "funcion\u00E1rio";
})(accessOptions || (accessOptions = {}));
var accessOptionsValues = Object.values(accessOptions);
accessOptionsValues.forEach(function (value, i) {
    accessRadio.innerHTML += "\n  <div class=\"form-check\">\n    <input class=\"form-check-input\" type=\"radio\" name=\"access\" id=\"accessRadio".concat(i, "\" value=\"").concat(value, "\">\n    <label class=\"form-check-label capitalLetter\" for=\"no\">\n      ").concat(value, "\n    </label>\n  </div>\n  ");
});
function addEmployee() {
    var content = document.getElementById('content');
    var fullName = document.querySelector('#fullName');
    var register = document.querySelector('#register');
    var admin = document.querySelector('input[name="access"]:checked');
    var active = document.querySelector('#active');
    content.innerHTML += createLine(fullName.value, register.value, admin.value, active.checked);
}
function createLine(fullName, NrRegister, admin, active) {
    return "\n  <div class=\"card mb-1\">\n    <div class=\"card-header\">\n      ".concat(NrRegister, "\n    </div>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">").concat(fullName, "</h5>\n      <a href=\"#\" class=\"btn btn-primary\">").concat(active ? 'Ativo' : 'Inativo', "</a>\n    </div>\n    <div class=\"card-footer bg-transparent border-success\">\n      Acesso: ").concat(admin, "\n    </div>\n  </div>");
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUMzRSxJQUFNLFdBQVcsR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDdkUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7QUFFN0MsSUFBSyxhQUlKO0FBSkQsV0FBSyxhQUFhO0lBQ2hCLGdEQUErQjtJQUMvQixvQ0FBbUI7SUFDbkIsOENBQXdCO0FBQzFCLENBQUMsRUFKSSxhQUFhLEtBQWIsYUFBYSxRQUlqQjtBQUVELElBQU0sbUJBQW1CLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7QUFFeEQsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBYSxFQUFFLENBQVM7SUFDbkQsV0FBVyxDQUFDLFNBQVMsSUFBSSwrSEFFcUQsQ0FBQyx3QkFBWSxLQUFLLHlGQUUxRixLQUFLLGlDQUdWO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsU0FBUyxXQUFXO0lBQ2xCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFnQjtJQUVqRSxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBcUI7SUFDdEUsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQXFCO0lBQ3RFLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsOEJBQThCLENBQXFCO0lBQ3RGLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFxQjtJQUVsRSxPQUFPLENBQUMsU0FBUyxJQUFZLFVBQVUsQ0FDckMsUUFBUSxDQUFDLEtBQUssRUFDZCxRQUFRLENBQUMsS0FBSyxFQUNkLEtBQUssQ0FBQyxLQUFLLEVBQ1gsTUFBTSxDQUFDLE9BQU8sQ0FDZjtBQUNILENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBRSxRQUFnQixFQUFFLFVBQTBCLEVBQUUsS0FBYSxFQUFFLE1BQWU7SUFDL0YsT0FBTyxnRkFHRCxVQUFVLHlGQUdhLFFBQVEsa0VBQ0ssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsNEdBR3hELEtBQUssMkJBRVosQ0FBQztBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnV0dG9uID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW2lkPVwiYWRkXCJdJylcclxuY29uc3QgYWNjZXNzUmFkaW8gPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2Vzc1JhZGlvJylcclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkRW1wbG95ZWUpXHJcblxyXG5lbnVtIGFjY2Vzc09wdGlvbnMge1xyXG4gIGFkbWluaXN0cmF0b3IgPSAnYWRtaW5pc3RyYWRvcicsXHJcbiAgbWFuYWdlciA9ICdnZXJlbnRlJyxcclxuICBlbXBsb3llZSA9ICdmdW5jaW9uw6FyaW8nXHJcbn1cclxuXHJcbmNvbnN0IGFjY2Vzc09wdGlvbnNWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGFjY2Vzc09wdGlvbnMpXHJcblxyXG5hY2Nlc3NPcHRpb25zVmFsdWVzLmZvckVhY2goKHZhbHVlOiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xyXG4gIGFjY2Vzc1JhZGlvLmlubmVySFRNTCArPSBgXHJcbiAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiYWNjZXNzXCIgaWQ9XCJhY2Nlc3NSYWRpbyR7aX1cIiB2YWx1ZT1cIiR7dmFsdWV9XCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsIGNhcGl0YWxMZXR0ZXJcIiBmb3I9XCJub1wiPlxyXG4gICAgICAke3ZhbHVlfVxyXG4gICAgPC9sYWJlbD5cclxuICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBhZGRFbXBsb3llZSgpOiB2b2lkIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKSBhcyBIVE1MRWxlbWVudFxyXG5cclxuICBsZXQgZnVsbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnVsbE5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50XHJcbiAgbGV0IHJlZ2lzdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlZ2lzdGVyJykgYXMgSFRNTElucHV0RWxlbWVudFxyXG4gIGxldCBhZG1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJhY2Nlc3NcIl06Y2hlY2tlZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuICBsZXQgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjdGl2ZScpIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuXHJcbiAgY29udGVudC5pbm5lckhUTUwgKz0gPHN0cmluZz5jcmVhdGVMaW5lKFxyXG4gICAgZnVsbE5hbWUudmFsdWUsXHJcbiAgICByZWdpc3Rlci52YWx1ZSxcclxuICAgIGFkbWluLnZhbHVlLFxyXG4gICAgYWN0aXZlLmNoZWNrZWRcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmUgKGZ1bGxOYW1lOiBzdHJpbmcsIE5yUmVnaXN0ZXI6c3RyaW5nIHwgbnVtYmVyLCBhZG1pbjogc3RyaW5nLCBhY3RpdmU6IGJvb2xlYW4pIHtcclxuICByZXR1cm4gYFxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTFcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAke05yUmVnaXN0ZXJ9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7ZnVsbE5hbWV9PC9oNT5cclxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPiR7YWN0aXZlID8gJ0F0aXZvJyA6ICdJbmF0aXZvJ308L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlciBiZy10cmFuc3BhcmVudCBib3JkZXItc3VjY2Vzc1wiPlxyXG4gICAgICBBY2Vzc286ICR7YWRtaW59XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==