(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/pages/auth/register/register.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.module.ts ***!
  \********************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/auth/register/register.page.ts");








var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/register/register.page.html":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-grid fixed>\n    <ion-row justify-content-center>\n      <h1>Registar</h1>\n    </ion-row>\n    <form [formGroup]=\"registerForm\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <div *ngIf=\"erro\" class=\"alert alert-danger\" role=\"alert\">\n            {{erro_messagem}}\n          </div>\n          <ion-item>\n            <ion-label position=\"floating\"><i class=\"fas fa-user\"></i> Username</ion-label>\n            <ion-input formControlName=\"username\" type=\"text\"></ion-input>\n          </ion-item>\n          <div class=\"error-messages\">\n            <ng-container *ngFor=\"let error of error_messages.username\">\n              <div class=\"error-message\"\n                *ngIf=\"registerForm.get('username').hasError(error.type) && (registerForm.get('username').dirty || registerForm.get('username').touched)\">\n                {{error.message}}\n              </div>\n            </ng-container>\n          </div>\n          <ion-item>\n            <ion-label position=\"floating\"><i class=\"fas fa-envelope\"></i> Email</ion-label>\n            <ion-input formControlName=\"email\" type=\"email\"></ion-input>\n          </ion-item>\n          <div class=\"error-messages\">\n            <ng-container *ngFor=\"let error of error_messages.email\">\n              <div class=\"error-message\"\n                *ngIf=\"registerForm.get('email').hasError(error.type) && (registerForm.get('email').dirty || registerForm.get('email').touched)\">\n                {{error.message}}\n              </div>\n            </ng-container>\n          </div>\n          <ion-item>\n            <ion-label position=\"floating\"><i class=\"fas fa-lock\"></i> Password</ion-label>\n            <ion-input formControlName=\"password\" type=\"password\"></ion-input>\n          </ion-item>\n          <div class=\"error-messages\">\n            <ng-container *ngFor=\"let error of error_messages.password\">\n              <div class=\"error-message\"\n                *ngIf=\"registerForm.get('password').hasError(error.type) && (registerForm.get('password').dirty || registerForm.get('password').touched)\">\n                {{error.message}}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row justify-content-center>\n        <ion-button [disabled]=\"!registerForm.valid\" (click)=\"registar()\" color=\"vermelho\">\n          Registar\n        </ion-button>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/register/register.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-messages {\n  font-size: 0.7em;\n  color: red;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JmbG9rYS9EZXNrdG9wL1Byb2plY3RzLzYtMDUvTXVzZXVBcHAvc3JjL2FwcC9wYWdlcy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlcyB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/auth/register/register.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_api_pecasdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/pecasdata.service */ "./src/app/api/pecasdata.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterPage = /** @class */ (function () {
    function RegisterPage(api, formBuilder, auth, router) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.erro = false;
        this.erro_messagem = "";
        this.error_messages = {
            'username': [
                { type: 'required', message: 'Username é obrigatório' },
                { type: 'minlength', message: 'Username tem que ter no mínimo 2 caracteres' },
                { type: 'maxlength', message: 'Username tem que ter no máximo 30 caracteres' }
            ],
            'email': [
                { type: 'required', message: 'Email é obrigatório' },
                { type: 'minlength', message: 'Email tem que ter no mínimo 6 caracteres' },
                { type: 'maxlength', message: 'Email tem que ter no máximo 60 caracteres' },
                { type: 'pattern', message: 'Email tem que ter válido' }
            ],
            'password': [
                { type: 'required', message: 'Password é obrigatório' },
                { type: 'minlength', message: 'Password tem que ter no mínimo 6 caracteres' },
                { type: 'maxlength', message: 'Password tem que ter no máximo 30 caracteres' }
            ],
        };
        this.registerForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
            ]))
        });
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.registar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = [this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password];
                        return [4 /*yield*/, this.api.register(user).then(function (data) {
                                var user_login = [_this.registerForm.value.username, _this.registerForm.value.password];
                                console.log("urra" + data);
                                _this.router.navigate(['/entrar/login']);
                            }).catch(function (error) {
                                console.log(error.statusText);
                                _this.erro_messagem = error.statusText;
                                _this.erro = true;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/auth/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/auth/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_pecasdata_service__WEBPACK_IMPORTED_MODULE_3__["PecasdataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map