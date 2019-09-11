(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/pages/tutorial/tab1/tab1.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/tutorial/tab1/tab1.module.ts ***!
  \****************************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/pages/tutorial/tab1/tab1.page.ts");







var routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
    }
];
var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/tab1/tab1.page.html":
/*!****************************************************!*\
  !*** ./src/app/pages/tutorial/tab1/tab1.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-grid fixed>\n    <ion-row text-center>\n      <b>Siga estas instruções para fazer a Visita Automática</b>\n    </ion-row>\n    <hr>\n    <ion-row justify-content-center>\n      <ol>\n        <li>Ligue o Bluetooth</li>\n        <li>Aproxime-se de uma peça e a aplicação automaticamente apresenta informações sobre a tal.</li>\n        <li>Se quiser ver ainda mais informações pode clicar no botão mais.</li>\n      </ol>\n    </ion-row>\n    <ion-row text-center>\n      <p>O utilizador pode seguir a timeline para ver as peças por ordem ou saltar para as peças que quiser e ainda tem\n        a opção de filtrar para ver apenas as peças que lhe importam</p>\n    </ion-row>\n    <ion-row justify-content-center>\n      <h1>Aproveite <i class=\"fas fa-thumbs-up\"></i></h1>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tutorial/tab1/tab1.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/tutorial/tab1/tab1.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tutorial/tab1/tab1.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tutorial/tab1/tab1.page.ts ***!
  \**************************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab1Page = /** @class */ (function () {
    function Tab1Page() {
    }
    Tab1Page.prototype.ngOnInit = function () {
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/pages/tutorial/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/pages/tutorial/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map