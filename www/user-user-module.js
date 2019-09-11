(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/pages/auth/user/user.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/auth/user/user.module.ts ***!
  \************************************************/
/*! exports provided: UserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.page */ "./src/app/pages/auth/user/user.page.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");








var routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]
    }
];
var UserPageModule = /** @class */ (function () {
    function UserPageModule(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserPageModule);
    return UserPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/user/user.page.html":
/*!************************************************!*\
  !*** ./src/app/pages/auth/user/user.page.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"vermelho\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button href=\"/home\" color=\"branco\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"branco\">\n      Olá {{username}}\n    </ion-title>\n    <ion-buttons slot=\"secondary\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon color=\"branco\" slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"linha\"></div>\n  <ion-list>\n    <div *ngFor=\"let peca of pecas; index as i\">\n      <ion-item no-lines [routerLink]=\"['/pecadetails',peca.Nid,lastpage]\" *ngIf=\"peca.guardado\">\n        <ion-thumbnail slot=\"start\">\n          <ion-img style=\"border-radius: 50%;border: 3px solid #252422;margin-bottom: 30px;\"\n            src=\"{{ peca.imagens.src }}\">\n          </ion-img>\n          <ul class=\"lista-icons\">\n            <div *ngIf=\"peca.visto\">\n              <li><i style=\"color:#469911;\" class=\"fas fa-check-square\"></i></li>\n            </div>\n            <div *ngIf=\"peca.guardado\">\n              <li><i style=\"color:#E72F37;\" class=\"fas fa-bookmark\"></i></li>\n            </div>\n            <div *ngIf='peca.audio != false'>\n              <li><i class=\"fas fa-volume-up\"></i></li>\n            </div>\n          </ul>\n        </ion-thumbnail>\n        <ion-label style=\"margin-bottom: -9%;\">\n          <h1 style=\"color:#252422;margin-left: 15px;\">{{ peca.Title }}</h1>\n          <ul style=\"list-style-type: none;margin-left: -9%;color:#FDE93E;\">\n            <li>\n              <div [ngSwitch]=\"peca.rating\">\n                <div *ngSwitchCase=\"1\">\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"far fa-star\"></i>\n                  <i class=\"far fa-star\"></i>\n                  <i class=\"far fa-star\"></i>\n                  <i class=\"far fa-star\"></i>\n                </div>\n                <div *ngSwitchCase=\"2\">\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"far fa-star\"></i>\n                  <i class=\"far fa-star\"></i>\n                  <i class=\"far fa-star\"></i>\n                </div>\n                <div *ngSwitchCase=\"3\">\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"far fa-star\"></i>\n                  <i class=\"far fa-star\"></i>\n                </div>\n                <div *ngSwitchCase=\"4\">\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"far fa-star\"></i>\n                </div>\n                <div *ngSwitchCase=\"5\">\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"fas fa-star\"></i>\n                  <i class=\"fas fa-star\"></i>\n                </div>\n                <div *ngSwitchDefault>\n                  <i class=\"far fa-star\"></i>\n                  <i class=\"far fa-star\"></i>\n                  <i class=\"far fa-star\"></i>\n                  <i class=\"far fa-star\"></i>\n                  <i class=\"far fa-star\"></i>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/auth/user/user.page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/auth/user/user.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".linha {\n  background-color: #252422;\n  width: 5px;\n  height: 100%;\n  margin-left: 12%;\n  position: fixed; }\n\n.circle {\n  position: absolute;\n  margin-top: 50%;\n  left: 25px;\n  font-size: 25px;\n  text-align: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  color: #fff;\n  background-color: #252422;\n  z-index: 3; }\n\n.lista-icons {\n  top: -5%;\n  left: 10%;\n  position: absolute;\n  list-style-type: none; }\n\nion-list {\n  --ion-background-color: rgba(255, 255, 255, 0); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JmbG9rYS9EZXNrdG9wL1Byb2plY3RzLzYtMDUvTXVzZXVBcHAvc3JjL2FwcC9wYWdlcy9hdXRoL3VzZXIvdXNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUluQjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFHekI7RUFFSSw4Q0FBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvdXNlci91c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5oYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjQyMjtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMTIlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxufVxuXG4uY2lyY2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogNTAlO1xuICAgIGxlZnQ6IDI1cHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI0MjI7XG4gICAgei1pbmRleDogMztcbn1cblxuLmxpc3RhLWljb25zIHtcbiAgICB0b3A6IC01JTtcbiAgICBsZWZ0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuaW9uLWxpc3Qge1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/auth/user/user.page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/auth/user/user.page.ts ***!
  \**********************************************/
/*! exports provided: UserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPage", function() { return UserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_api_pecasdata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/pecasdata.service */ "./src/app/api/pecasdata.service.ts");
/* harmony import */ var src_app_sql_sql_peca_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sql/sql-peca-crud.service */ "./src/app/sql/sql-peca-crud.service.ts");






var TOKEN_KEY = 'auth-token';
var UserPage = /** @class */ (function () {
    function UserPage(auth, storage, pecasdata, sql) {
        this.auth = auth;
        this.storage = storage;
        this.pecasdata = pecasdata;
        this.sql = sql;
        this.lastpage = "user";
    }
    UserPage.prototype.ngOnInit = function () {
        var _this = this;
        this.pecasdata.getPecas().subscribe(function (data) {
            _this.pecas = data;
            _this.pecasdata.setLocalData('pecas', data);
            for (var i = 0; i < _this.pecas.length; i++) {
                var rating = _this.pecas[i].rating.split("/");
                rating = parseFloat(rating[0]);
                rating = Math.round(rating);
                _this.pecas[i].rating = rating;
            }
            _this.pecas[0].expanded = false;
            var _loop_1 = function (i) {
                var nid = parseInt(_this.pecas[i].Nid);
                _this.sql.getData(nid).then(function (data) {
                    if (data != null) {
                        _this.pecas[i].visto = 1;
                        if (data.guardado === 1) {
                            _this.pecas[i].guardado = 1;
                        }
                    }
                });
            };
            for (var i = 0; i < _this.pecas.length; i++) {
                _loop_1(i);
            }
        });
        this.storage.get(TOKEN_KEY).then(function (res) {
            if (res) {
                _this.username = res;
            }
        });
    };
    UserPage.prototype.logout = function () {
        this.auth.logout();
    };
    UserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.page.html */ "./src/app/pages/auth/user/user.page.html"),
            styles: [__webpack_require__(/*! ./user.page.scss */ "./src/app/pages/auth/user/user.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            src_app_api_pecasdata_service__WEBPACK_IMPORTED_MODULE_4__["PecasdataService"],
            src_app_sql_sql_peca_crud_service__WEBPACK_IMPORTED_MODULE_5__["SqlPecaCrudService"]])
    ], UserPage);
    return UserPage;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map