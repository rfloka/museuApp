(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/pages/auth/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/auth/login/login.page.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/login/login.page.html":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-grid fixed>\n    <ion-row justify-content-center>\n      <h1>Login</h1>\n    </ion-row>\n    <form [formGroup]=\"loginForm\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <div *ngIf=\"erro\" class=\"alert alert-danger\" role=\"alert\">\n            Username ou Password incorretos\n          </div>\n          <ion-item>\n            <ion-label position=\"floating\"><i class=\"fas fa-user\"></i> Username</ion-label>\n            <ion-input formControlName=\"username\" type=\"text\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\"><i class=\"fas fa-lock\"></i> Password</ion-label>\n            <ion-input formControlName=\"password\" type=\"password\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row justify-content-center>\n        <ion-button [disabled]=\"!loginForm.valid\" (click)=\"login()\" color=\"vermelho\">\n          Login\n        </ion-button>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-messages {\n  font-size: 0.7em;\n  color: red;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JmbG9rYS9EZXNrdG9wL1Byb2plY3RzLzYtMDUvTXVzZXVBcHAvc3JjL2FwcC9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlcyB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/auth/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_pecasdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/pecasdata.service */ "./src/app/api/pecasdata.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");





var LoginPage = /** @class */ (function () {
    function LoginPage(api, formBuilder, auth) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.erro = false;
        this.loginForm = this.formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]))
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = [this.loginForm.value.username, this.loginForm.value.password];
                        return [4 /*yield*/, this.api.login(user).then(function (data) {
                                console.log(JSON.stringify(data));
                                _this.response = data;
                            }).catch(function (error) {
                                console.log(JSON.stringify(error));
                                _this.response = error['status'];
                            })];
                    case 1:
                        _a.sent();
                        if (this.response == 401) {
                            this.erro = true;
                        }
                        else {
                            this.auth.login(this.response);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/auth/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/auth/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_pecasdata_service__WEBPACK_IMPORTED_MODULE_2__["PecasdataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map