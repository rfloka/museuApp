(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pecadetails-pecadetails-module"],{

/***/ "./node_modules/@ionic-native/streaming-media/ngx/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic-native/streaming-media/ngx/index.js ***!
  \*****************************************************************/
/*! exports provided: StreamingMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamingMedia", function() { return StreamingMedia; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StreamingMedia = /** @class */ (function (_super) {
    __extends(StreamingMedia, _super);
    function StreamingMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StreamingMedia.prototype.playVideo = function (videoUrl, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "playVideo", { "sync": true }, arguments); };
    StreamingMedia.prototype.playAudio = function (audioUrl, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "playAudio", { "sync": true }, arguments); };
    StreamingMedia.prototype.stopAudio = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "stopAudio", { "sync": true }, arguments); };
    StreamingMedia.prototype.pauseAudio = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "pauseAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMedia.prototype.resumeAudio = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "resumeAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMedia.pluginName = "StreamingMedia";
    StreamingMedia.plugin = "cordova-plugin-streaming-media";
    StreamingMedia.pluginRef = "plugins.streamingMedia";
    StreamingMedia.repo = "https://github.com/nchutchind/cordova-plugin-streaming-media";
    StreamingMedia.platforms = ["Amazon Fire OS", "Android", "iOS"];
    StreamingMedia = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StreamingMedia);
    return StreamingMedia;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0cmVhbWluZy1tZWRpYS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpRnBDLGtDQUFpQjs7OztJQU9uRCxrQ0FBUyxhQUFDLFFBQWdCLEVBQUUsT0FBK0I7SUFRM0Qsa0NBQVMsYUFBQyxRQUFnQixFQUFFLE9BQStCO0lBTTNELGtDQUFTO0lBTVQsbUNBQVU7SUFNVixvQ0FBVzs7Ozs7O0lBakNBLGNBQWM7UUFEMUIsVUFBVSxFQUFFO09BQ0EsY0FBYzt5QkFsRjNCO0VBa0ZvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIE9iamVjdCBvZiBvcHRpb25zIHRvIHBhc3MgaW50byB0aGUgcGxheVZpZGVvIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdHJlYW1pbmdWaWRlb09wdGlvbnMge1xuICAvKiogRXhlY3V0ZXMgYWZ0ZXIgc3VjY2VzcyBwbGF5aW5nIGF1ZGlvLiAqL1xuICBzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbjtcbiAgLyoqIEV4ZWN1dGVzIGFmdGVyIGVycm9yIHBsYXlpbmcgdmlkZW8uICovXG4gIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbjtcbiAgLyoqIEZvcmNlIG9uZSBvcmllbnRhdGlvbiBmb3IgcGxheWluZyB2aWRlby4gKi9cbiAgb3JpZW50YXRpb24/OiBzdHJpbmc7XG4gIC8qKiBTaG91bGQgdGhlIHZpZGVvIGNsb3NlIGFmdGVyIGl0J3Mgb3Zlci4gRGVmYXVsdHMgdG8gdHJ1ZS4gKi9cbiAgc2hvdWxkQXV0b0Nsb3NlPzogYm9vbGVhbjtcbiAgLyoqIFNob3VsZCB0aGUgdmlkZW8gaGF2ZSBjb250cm9scy4gRGVmYXVsdHMgdG8gdHJ1ZS4gQW5kcm9pZCBvbmx5LiAqL1xuICBjb250cm9scz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogT2JqZWN0IG9mIG9wdGlvbnMgdG8gcGFzcyBpbnRvIHRoZSBwbGF5QXVkaW8gbWV0aG9kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVhbWluZ0F1ZGlvT3B0aW9ucyB7XG4gIC8qKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBhdWRpbyBwbGF5ZXIuICovXG4gIGJnQ29sb3I/OiBzdHJpbmc7XG4gIC8qKiBCYWNrZ3JvdW5kIGltYWdlIGZvciBhdWRpbyBwbGF5ZXIuICovXG4gIGJnSW1hZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBCYWNrZ3JvdW5kIGltYWdlIHNjYWxlIGZvciBhdWRpbyBwbGF5ZXIuXG4gICAqIFZhbGlkIHZhbHVlcyBhcmU6XG4gICAqIGZpdFxuICAgKiBzdHJldGNoXG4gICAqIGFzcGVjdFN0cmV0Y2guXG4gICAqL1xuICBiZ0ltYWdlU2NhbGU/OiBzdHJpbmc7XG4gIC8qKiBTdGFydCBhdWRpbyBwbGF5ZXIgaW4gZnVsbCBzY3JlZW4uIGlPUyBvbmx5LiAqL1xuICBpbml0RnVsbHNjcmVlbj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBLZWVwcyB0aGUgc2NyZWVuIGxpdCBhbmQgc3RvcHMgaXQgZnJvbSBsb2NraW5nXG4gICAqIHdoaWxlIGF1ZGlvIGlzIHBsYXlpbmcuIEFuZHJvaWQgb25seS5cbiAgICovXG4gIGtlZXBBd2FrZT86IGJvb2xlYW47XG4gIC8qKiBFeGVjdXRlcyBhZnRlciBzdWNjZXNzIHBsYXlpbmcgYXVkaW8uICovXG4gIHN1Y2Nlc3NDYWxsYmFjaz86IEZ1bmN0aW9uO1xuICAvKiogRXhlY3V0ZXMgYWZ0ZXIgZXJyb3IgcGxheWluZyBhdWRpby4gKi9cbiAgZXJyb3JDYWxsYmFjaz86IEZ1bmN0aW9uO1xufVxuXG4vKipcbiAqIEBuYW1lIFN0cmVhbWluZyBNZWRpYVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHN0cmVhbSBhdWRpbyBhbmQgdmlkZW8gaW4gYSBmdWxsc2NyZWVuLCBuYXRpdmUgcGxheWVyIG9uIGlPUyBhbmQgQW5kcm9pZC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFN0cmVhbWluZ01lZGlhLCBTdHJlYW1pbmdWaWRlb09wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0cmVhbWluZy1tZWRpYS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyZWFtaW5nTWVkaWE6IFN0cmVhbWluZ01lZGlhKSB7IH1cbiAqXG4gKiBsZXQgb3B0aW9uczogU3RyZWFtaW5nVmlkZW9PcHRpb25zID0ge1xuICogICBzdWNjZXNzQ2FsbGJhY2s6ICgpID0+IHsgY29uc29sZS5sb2coJ1ZpZGVvIHBsYXllZCcpIH0sXG4gKiAgIGVycm9yQ2FsbGJhY2s6IChlKSA9PiB7IGNvbnNvbGUubG9nKCdFcnJvciBzdHJlYW1pbmcnKSB9LFxuICogICBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsXG4gKiAgIHNob3VsZEF1dG9DbG9zZTogdHJ1ZSxcbiAqICAgY29udHJvbHM6IGZhbHNlXG4gKiB9O1xuICpcbiAqIHRoaXMuc3RyZWFtaW5nTWVkaWEucGxheVZpZGVvKCdodHRwczovL3BhdGgvdG8vdmlkZW8vc3RyZWFtJywgb3B0aW9ucyk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogU3RyZWFtaW5nVmlkZW9PcHRpb25zXG4gKiBTdHJlYW1pbmdBdWRpb09wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTdHJlYW1pbmdNZWRpYScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN0cmVhbWluZy1tZWRpYScsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuc3RyZWFtaW5nTWVkaWEnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL25jaHV0Y2hpbmQvY29yZG92YS1wbHVnaW4tc3RyZWFtaW5nLW1lZGlhJyxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RyZWFtaW5nTWVkaWEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTdHJlYW1zIGEgdmlkZW9cbiAgICogQHBhcmFtIHZpZGVvVXJsIHtzdHJpbmd9IFRoZSBVUkwgb2YgdGhlIHZpZGVvXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTdHJlYW1pbmdWaWRlb09wdGlvbnN9IE9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBwbGF5VmlkZW8odmlkZW9Vcmw6IHN0cmluZywgb3B0aW9ucz86IFN0cmVhbWluZ1ZpZGVvT3B0aW9ucyk6IHZvaWQge31cblxuICAvKipcbiAgICogU3RyZWFtcyBhbiBhdWRpb1xuICAgKiBAcGFyYW0gYXVkaW9Vcmwge3N0cmluZ30gVGhlIFVSTCBvZiB0aGUgYXVkaW8gc3RyZWFtXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTdHJlYW1pbmdBdWRpb09wdGlvbnN9IE9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBwbGF5QXVkaW8oYXVkaW9Vcmw6IHN0cmluZywgb3B0aW9ucz86IFN0cmVhbWluZ0F1ZGlvT3B0aW9ucyk6IHZvaWQge31cblxuICAvKipcbiAgICogU3RvcHMgc3RyZWFtaW5nIGF1ZGlvXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3RvcEF1ZGlvKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUGF1c2VzIHN0cmVhbWluZyBhdWRpb1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlLCBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgcGF1c2VBdWRpbygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlc3VtZXMgc3RyZWFtaW5nIGF1ZGlvXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUsIHBsYXRmb3JtczogWydpT1MnXSB9KVxuICByZXN1bWVBdWRpbygpOiB2b2lkIHt9XG59XG4iXX0=

/***/ }),

/***/ "./src/app/components/nota/nota.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/nota/nota.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item style=\"border-style: solid;border-width: 5px;border-color: #252422;border-radius: 10px;\">\n  <ion-textarea value=\"{{txt}}\" (focusout)=\"newdata($event)\" placeholder=\"Notas...\" rows=\"4\"></ion-textarea>\n</ion-item>"

/***/ }),

/***/ "./src/app/components/nota/nota.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/nota/nota.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90YS9ub3RhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/nota/nota.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/nota/nota.component.ts ***!
  \***************************************************/
/*! exports provided: NotaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotaComponent", function() { return NotaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_sql_sql_peca_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sql/sql-peca-crud.service */ "./src/app/sql/sql-peca-crud.service.ts");



var NotaComponent = /** @class */ (function () {
    function NotaComponent(peca) {
        this.peca = peca;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NotaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.peca.getData(this.data).then(function (data) {
            _this.txt = data.notas;
        });
    };
    NotaComponent.prototype.newdata = function (event) {
        var nota = event.target.value;
        this.event.emit(nota);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotaComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NotaComponent.prototype, "event", void 0);
    NotaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nota',
            template: __webpack_require__(/*! ./nota.component.html */ "./src/app/components/nota/nota.component.html"),
            styles: [__webpack_require__(/*! ./nota.component.scss */ "./src/app/components/nota/nota.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_sql_sql_peca_crud_service__WEBPACK_IMPORTED_MODULE_2__["SqlPecaCrudService"]])
    ], NotaComponent);
    return NotaComponent;
}());



/***/ }),

/***/ "./src/app/pages/pecadetails/pecadetails.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/pecadetails/pecadetails.module.ts ***!
  \*********************************************************/
/*! exports provided: PecadetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PecadetailsPageModule", function() { return PecadetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pecadetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pecadetails.page */ "./src/app/pages/pecadetails/pecadetails.page.ts");
/* harmony import */ var src_app_components_nota_nota_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/nota/nota.component */ "./src/app/components/nota/nota.component.ts");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");









var routes = [
    {
        path: ':id/:last',
        component: _pecadetails_page__WEBPACK_IMPORTED_MODULE_6__["PecadetailsPage"]
    }
];
var PecadetailsPageModule = /** @class */ (function () {
    function PecadetailsPageModule() {
    }
    PecadetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pecadetails_page__WEBPACK_IMPORTED_MODULE_6__["PecadetailsPage"], src_app_components_nota_nota_component__WEBPACK_IMPORTED_MODULE_7__["NotaComponent"]],
            providers: [_ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_8__["StreamingMedia"]]
        })
    ], PecadetailsPageModule);
    return PecadetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/pecadetails/pecadetails.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/pecadetails/pecadetails.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content *ngIf=\"peca\" [scrollEvents]=\"true\">\n  <ion-grid>\n    <ion-row size=\"12\">\n      <ion-card-header\n        style=\"margin:10px;border-style: solid;border-width: 5px;border-color: #252422;background-color: #FFFCF2;border-radius: 10px;width:100%;\">\n        <ion-img style=\"height:30vh;width:auto;display: block;margin-left: auto;margin-right: auto;\"\n          src=\"{{ peca.imagens.src }}\">\n        </ion-img>\n      </ion-card-header>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"8\">\n        <h1>{{ peca.Title }}</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"7\"> <b>Autor:</b><a style=\"color:#E72F37;\"\n          [routerLink]=\"['/autores',peca.Autor]\">{{ peca.Autor }}</a>\n      </ion-col>\n      <ion-col size=\"5\"> <b>Ano:</b>{{ peca.Data }} </ion-col>\n    </ion-row>\n    <ion-row no-padding>\n      <ion-col size=\"10\">\n        <ul style=\"list-style-type: none;margin-left: -9%;color:#FDE93E;font-size: 20px;\">\n          <li (click)=\"check()\">\n            <div [ngSwitch]=\"peca.rating\">\n              <div *ngSwitchCase=\"1\">\n                <i class=\"fas fa-star\"></i>\n                <i class=\"far fa-star\"></i>\n                <i class=\"far fa-star\"></i>\n                <i class=\"far fa-star\"></i>\n                <i class=\"far fa-star\"></i>\n              </div>\n              <div *ngSwitchCase=\"2\">\n                <i class=\"fas fa-star\"></i>\n                <i class=\"fas fa-star\"></i>\n                <i class=\"far fa-star\"></i>\n                <i class=\"far fa-star\"></i>\n                <i class=\"far fa-star\"></i>\n              </div>\n              <div *ngSwitchCase=\"3\">\n                <i class=\"fas fa-star\"></i>\n                <i class=\"fas fa-star\"></i>\n                <i class=\"fas fa-star\"></i>\n                <i class=\"far fa-star\"></i>\n                <i class=\"far fa-star\"></i>\n              </div>\n              <div *ngSwitchCase=\"4\">\n                <i class=\"fas fa-star\"></i>\n                <i class=\"fas fa-star\"></i>\n                <i class=\"fas fa-star\"></i>\n                <i class=\"fas fa-star\"></i>\n                <i class=\"far fa-star\"></i>\n              </div>\n              <div *ngSwitchCase=\"5\">\n                <i class=\"fas fa-star\"></i>\n                <i class=\"fas fa-star\"></i>\n                <i class=\"fas fa-star\"></i>\n                <i class=\"fas fa-star\"></i>\n                <i class=\"fas fa-star\"></i>\n              </div>\n              <div *ngSwitchDefault>\n                <i class=\"far fa-star\"></i>\n                <i class=\"far fa-star\"></i>\n                <i class=\"far fa-star\"></i>\n                <i class=\"far fa-star\"></i>\n                <i class=\"far fa-star\"></i>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </ion-col>\n      <div *ngIf='peca.audio != false'>\n        <ion-col size=\"2\">\n          <ion-button color=\"vermelho\" (click)=\"som()\">\n            <i class=\"fas fa-play\"></i>\n          </ion-button>\n        </ion-col>\n      </div>\n    </ion-row>\n    <div *ngIf=\"notas;else texto\">\n      <app-nota (event)=\"receberNota($event)\" [data]=\"nid\"></app-nota>\n    </div>\n    <ng-template #texto>\n      <div class=\"ion-text-wrap \">\n        {{ peca.descricao }}\n      </div>\n    </ng-template>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-toolbar color=\"preto\" style=\"font-size: 30px;\">\n    <ion-grid>\n      <ion-row>\n        <ion-col style=\"margin-left: 10%;\">\n          <div *ngIf=\"urlchange;else home\">\n            <a [routerLink]=\"['/entrar/user']\"><i style=\"color:#E72F37;\" class=\"fas fa-arrow-left\"></i></a>\n          </div>\n          <ng-template #home>\n            <a [routerLink]=\"['/home']\"><i style=\"color:#E72F37;\" class=\"fas fa-arrow-left\"></i></a>\n          </ng-template>\n        </ion-col>\n        <ion-col style=\"margin-left: 15%;\">\n          <div *ngIf=\"guardado; else not\">\n            <a href=\"javascript:void(0)\" (click)=\"naoGuardar()\"><i style=\"color:#E72F37;\"\n                class=\"fas fa-bookmark\"></i></a>\n          </div>\n          <ng-template #not>\n            <a href=\"javascript:void(0)\" (click)=\"guardar()\"><i style=\"color:#E72F37;\" class=\"far fa-bookmark\"></i></a>\n          </ng-template>\n        </ion-col>\n        <ion-col style=\"margin-left: 15%;\">\n          <a href=\"javascript:void(0)\" (click)=\"changeDisplay()\"><i style=\"color:#E72F37;\" class=\"fas fa-edit\"></i></a>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/pecadetails/pecadetails.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/pecadetails/pecadetails.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlY2FkZXRhaWxzL3BlY2FkZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/pecadetails/pecadetails.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/pecadetails/pecadetails.page.ts ***!
  \*******************************************************/
/*! exports provided: PecadetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PecadetailsPage", function() { return PecadetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_pecasdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/pecasdata.service */ "./src/app/api/pecasdata.service.ts");
/* harmony import */ var src_app_sql_sql_peca_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sql/sql-peca-crud.service */ "./src/app/sql/sql-peca-crud.service.ts");
/* harmony import */ var src_app_models_sqlpeca__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/sqlpeca */ "./src/app/models/sqlpeca.ts");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");









var PecadetailsPage = /** @class */ (function () {
    function PecadetailsPage(route, pecasdata, pecasql, audio, pickerCtrl, auth, toastController) {
        this.route = route;
        this.pecasdata = pecasdata;
        this.pecasql = pecasql;
        this.audio = audio;
        this.pickerCtrl = pickerCtrl;
        this.auth = auth;
        this.toastController = toastController;
        this.guardado = false;
        this.notas = false;
        this.userTxt = "";
        this.urlchange = false;
    }
    PecadetailsPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.route.snapshot.paramMap.get('last') == 'user') {
                    this.urlchange = true;
                }
                this.id = this.route.snapshot.paramMap.get('id');
                this.pecasdata.getPecas().subscribe(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].Nid == _this.id) {
                            _this.peca = data[i];
                            console.log(_this.peca.Nid);
                            var rating = _this.peca.rating.split("/");
                            rating = parseFloat(rating[0]);
                            rating = Math.round(rating);
                            _this.peca.rating = rating;
                            _this.nid = parseInt(_this.peca.Nid);
                            _this.pecasql.getData(_this.nid).then(function (data) {
                                if (data == null) {
                                    var pecadata = new src_app_models_sqlpeca__WEBPACK_IMPORTED_MODULE_5__["PecaSql"](_this.nid, "", 0);
                                    _this.pecasql.insert(pecadata).then(function (data) { return console.log("data inserted " + data); });
                                }
                                else if (data.guardado == 1) {
                                    _this.guardado = true;
                                    _this.userTxt = data.notas;
                                }
                            });
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ;
    PecadetailsPage.prototype.guardar = function () {
        var peca = new src_app_models_sqlpeca__WEBPACK_IMPORTED_MODULE_5__["PecaSql"](this.nid, "", 1);
        this.pecasql.update(peca);
        this.guardado = true;
    };
    PecadetailsPage.prototype.naoGuardar = function () {
        var peca = new src_app_models_sqlpeca__WEBPACK_IMPORTED_MODULE_5__["PecaSql"](this.nid, "", 0);
        this.pecasql.update(peca);
        this.guardado = false;
    };
    PecadetailsPage.prototype.changeDisplay = function () {
        this.notas = !this.notas;
    };
    PecadetailsPage.prototype.receberNota = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var guardado, peca;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pecasql.getData(this.nid).then(function (data) {
                            guardado = data.guardado;
                        })];
                    case 1:
                        _a.sent();
                        peca = new src_app_models_sqlpeca__WEBPACK_IMPORTED_MODULE_5__["PecaSql"](this.nid, data, guardado);
                        this.pecasql.update(peca);
                        return [2 /*return*/];
                }
            });
        });
    };
    PecadetailsPage.prototype.som = function () {
        var options = {
            initFullscreen: false
        };
        this.audio.playAudio(this.peca.audio, options);
    };
    PecadetailsPage.prototype.check = function () {
        if (!this.auth.isAuthenticated()) {
            this.toast = this.toastController
                .create({
                message: "Tem que estar autenticado",
                duration: 2000
            })
                .then(function (toastData) {
                console.log(toastData);
                toastData.present();
            });
        }
        else {
            this.showRate();
        }
    };
    PecadetailsPage.prototype.showRate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var picker;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pickerCtrl.create({
                            animated: true,
                            buttons: [{
                                    text: 'OK',
                                    handler: function (val) {
                                        var rate = [val['rating'].value, _this.nid];
                                        _this.pecasdata.rate(rate);
                                        picker.dismiss();
                                        _this.toast = _this.toastController
                                            .create({
                                            message: "Peça avaliada com " + val['rating'].text + " estrelas",
                                            duration: 2000
                                        })
                                            .then(function (toastData) {
                                            console.log(toastData);
                                            toastData.present();
                                        });
                                    }
                                }],
                            columns: [
                                {
                                    name: 'rating',
                                    options: [
                                        {
                                            text: '1',
                                            value: '20'
                                        },
                                        {
                                            text: '2',
                                            value: '40'
                                        },
                                        {
                                            text: '3',
                                            value: '60'
                                        },
                                        {
                                            text: '4',
                                            value: '80'
                                        },
                                        {
                                            text: '5',
                                            value: '100'
                                        }
                                    ]
                                }
                            ],
                            cssClass: 'ratepick',
                        })];
                    case 1:
                        picker = _a.sent();
                        picker.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PecadetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pecadetails',
            template: __webpack_require__(/*! ./pecadetails.page.html */ "./src/app/pages/pecadetails/pecadetails.page.html"),
            styles: [__webpack_require__(/*! ./pecadetails.page.scss */ "./src/app/pages/pecadetails/pecadetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _api_pecasdata_service__WEBPACK_IMPORTED_MODULE_3__["PecasdataService"],
            src_app_sql_sql_peca_crud_service__WEBPACK_IMPORTED_MODULE_4__["SqlPecaCrudService"],
            _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_6__["StreamingMedia"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PickerController"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]])
    ], PecadetailsPage);
    return PecadetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pecadetails-pecadetails-module.js.map