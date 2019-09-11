(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tutorial-tabs-tabs-module"],{

/***/ "./src/app/pages/tutorial/tabs/tabs.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/tutorial/tabs/tabs.module.ts ***!
  \****************************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tutorial/tabs/tabs.page.ts");







var routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"],
        children: [
            {
                path: 'tab1',
                loadChildren: '../tab1/tab1.module#Tab1PageModule'
            },
            {
                path: 'tab2',
                loadChildren: '../tab2/tab2.module#Tab2PageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full'
    }
];
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/tabs/tabs.page.html":
/*!****************************************************!*\
  !*** ./src/app/pages/tutorial/tabs/tabs.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"vermelho\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" color=\"branco\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"branco\">Tutorial</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button tab=\"tab1\">\n        <h4>Visita Auto</h4>\n      </ion-tab-button>\n      <ion-tab-button tab=\"tab2\">\n        <h4>MyVisit</h4>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tutorial/tabs/tabs.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/tutorial/tabs/tabs.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-button {\n  --color-selected: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JmbG9rYS9EZXNrdG9wL1Byb2plY3RzLzYtMDUvTXVzZXVBcHAvc3JjL2FwcC9wYWdlcy90dXRvcmlhbC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90dXRvcmlhbC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1idXR0b24ge1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tutorial/tabs/tabs.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tutorial/tabs/tabs.page.ts ***!
  \**************************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage.prototype.ngOnInit = function () {
    };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/pages/tutorial/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tutorial/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tutorial-tabs-tabs-module.js.map