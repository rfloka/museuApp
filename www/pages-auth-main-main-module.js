(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-main-main-module"],{

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.auth.isAuthenticated()) {
            this.router.navigateByUrl('/entrar/login');
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/pages/auth/main/main.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/auth/main/main.module.ts ***!
  \************************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/auth/main/main.page.ts");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/guards/auth.guard */ "./src/app/guards/auth.guard.ts");









var routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"],
        children: [
            {
                path: 'login',
                loadChildren: '../login/login.module#LoginPageModule'
            },
            {
                path: 'registar',
                loadChildren: '../register/register.module#RegisterPageModule'
            },
        ]
    },
    { path: 'user', loadChildren: '../user/user.module#UserPageModule', canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    {
        path: '',
        redirectTo: 'user'
    }
];
var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]],
            providers: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
        })
    ], MainPageModule);
    return MainPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/main/main.page.html":
/*!************************************************!*\
  !*** ./src/app/pages/auth/main/main.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"vermelho\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" color=\"branco\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"branco\">Entrar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button tab=\"login\">\n        <h4>Login</h4>\n      </ion-tab-button>\n      <ion-tab-button tab=\"registar\">\n        <h4>Registar</h4>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/main/main.page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/auth/main/main.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-button {\n  --color-selected: red; }\n\n.error-messages {\n  font-size: 0.7em;\n  color: red;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JmbG9rYS9EZXNrdG9wL1Byb2plY3RzLzYtMDUvTXVzZXVBcHAvc3JjL2FwcC9wYWdlcy9hdXRoL21haW4vbWFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9tYWluL21haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1idXR0b24ge1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6IHJlZDtcbn1cblxuLmVycm9yLW1lc3NhZ2VzIHtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/auth/main/main.page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/auth/main/main.page.ts ***!
  \**********************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainPage = /** @class */ (function () {
    function MainPage() {
    }
    MainPage.prototype.ngOnInit = function () {
    };
    MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.page.html */ "./src/app/pages/auth/main/main.page.html"),
            styles: [__webpack_require__(/*! ./main.page.scss */ "./src/app/pages/auth/main/main.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainPage);
    return MainPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-main-main-module.js.map