(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-autores-autores-module"],{

/***/ "./src/app/pages/autores/autores.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/autores/autores.module.ts ***!
  \*************************************************/
/*! exports provided: AutoresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoresPageModule", function() { return AutoresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _autores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./autores.page */ "./src/app/pages/autores/autores.page.ts");







var routes = [
    {
        path: ':id',
        component: _autores_page__WEBPACK_IMPORTED_MODULE_6__["AutoresPage"]
    }
];
var AutoresPageModule = /** @class */ (function () {
    function AutoresPageModule() {
    }
    AutoresPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_autores_page__WEBPACK_IMPORTED_MODULE_6__["AutoresPage"]]
        })
    ], AutoresPageModule);
    return AutoresPageModule;
}());



/***/ }),

/***/ "./src/app/pages/autores/autores.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/autores/autores.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"vermelho\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" color=\"branco\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"branco\">{{autor.title}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content *ngIf=\"autor\" [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row size=\"12\">\n      <ion-card-header\n        style=\"margin:10px;border-style: solid;border-width: 5px;border-color: #252422;background-color: #FFFCF2;border-radius: 10px;width:100%;\">\n        <ion-img style=\"height:30vh;width:auto;display: block;margin-left: auto;margin-right: auto;\"\n          src=\"{{ autor.Foto.src }}\">\n        </ion-img>\n      </ion-card-header>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\"> <b>Nascimento:</b>{{ autor.Nascimento }} </ion-col>\n    </ion-row>\n    <div class=\"ion-text-wrap\" class=\"ion-padding\">\n      {{ autor.Descricao }}\n    </div>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/autores/autores.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/autores/autores.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dG9yZXMvYXV0b3Jlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/autores/autores.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/autores/autores.page.ts ***!
  \***********************************************/
/*! exports provided: AutoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoresPage", function() { return AutoresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_api_pecasdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/pecasdata.service */ "./src/app/api/pecasdata.service.ts");




var AutoresPage = /** @class */ (function () {
    function AutoresPage(route, pecasdata) {
        this.route = route;
        this.pecasdata = pecasdata;
    }
    AutoresPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.id = this.route.snapshot.paramMap.get('id');
                        return [4 /*yield*/, this.pecasdata.getAutores().subscribe(function (data) {
                                var autores = Object.values(data);
                                for (var i = 0; i < autores.length; i++) {
                                    if (autores[i].title == _this.id) {
                                        console.log("data " + autores[i] + "id " + _this.id);
                                        _this.autor = autores[i];
                                    }
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AutoresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-autores',
            template: __webpack_require__(/*! ./autores.page.html */ "./src/app/pages/autores/autores.page.html"),
            styles: [__webpack_require__(/*! ./autores.page.scss */ "./src/app/pages/autores/autores.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_pecasdata_service__WEBPACK_IMPORTED_MODULE_3__["PecasdataService"]])
    ], AutoresPage);
    return AutoresPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-autores-autores-module.js.map