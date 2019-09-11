(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@ionic-native/bluetooth-le/ngx/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic-native/bluetooth-le/ngx/index.js ***!
  \**************************************************************/
/*! exports provided: BluetoothScanMode, BluetoothMatchMode, BluetoothMatchNum, BluetoothCallbackType, BluetoothLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothScanMode", function() { return BluetoothScanMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothMatchMode", function() { return BluetoothMatchMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothMatchNum", function() { return BluetoothMatchNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothCallbackType", function() { return BluetoothCallbackType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothLE", function() { return BluetoothLE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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



var BluetoothScanMode;
(function (BluetoothScanMode) {
    BluetoothScanMode[BluetoothScanMode["SCAN_MODE_OPPORTUNISTIC"] = -1] = "SCAN_MODE_OPPORTUNISTIC";
    BluetoothScanMode[BluetoothScanMode["SCAN_MODE_LOW_POWER"] = 0] = "SCAN_MODE_LOW_POWER";
    BluetoothScanMode[BluetoothScanMode["SCAN_MODE_BALANCED"] = 1] = "SCAN_MODE_BALANCED";
    BluetoothScanMode[BluetoothScanMode["SCAN_MODE_LOW_LATENCY"] = 2] = "SCAN_MODE_LOW_LATENCY";
})(BluetoothScanMode || (BluetoothScanMode = {}));
var BluetoothMatchMode;
(function (BluetoothMatchMode) {
    BluetoothMatchMode[BluetoothMatchMode["MATCH_MODE_AGRESSIVE"] = 1] = "MATCH_MODE_AGRESSIVE";
    BluetoothMatchMode[BluetoothMatchMode["MATCH_MODE_STICKY"] = 2] = "MATCH_MODE_STICKY";
})(BluetoothMatchMode || (BluetoothMatchMode = {}));
var BluetoothMatchNum;
(function (BluetoothMatchNum) {
    BluetoothMatchNum[BluetoothMatchNum["MATCH_NUM_ONE_ADVERTISEMENT"] = 1] = "MATCH_NUM_ONE_ADVERTISEMENT";
    BluetoothMatchNum[BluetoothMatchNum["MATCH_NUM_FEW_ADVERTISEMENT"] = 2] = "MATCH_NUM_FEW_ADVERTISEMENT";
    BluetoothMatchNum[BluetoothMatchNum["MATCH_NUM_MAX_ADVERTISEMENT"] = 3] = "MATCH_NUM_MAX_ADVERTISEMENT";
})(BluetoothMatchNum || (BluetoothMatchNum = {}));
var BluetoothCallbackType;
(function (BluetoothCallbackType) {
    BluetoothCallbackType[BluetoothCallbackType["CALLBACK_TYPE_ALL_MATCHES"] = 1] = "CALLBACK_TYPE_ALL_MATCHES";
    BluetoothCallbackType[BluetoothCallbackType["CALLBACK_TYPE_FIRST_MATCH"] = 2] = "CALLBACK_TYPE_FIRST_MATCH";
    BluetoothCallbackType[BluetoothCallbackType["CALLBACK_TYPE_MATCH_LOST"] = 4] = "CALLBACK_TYPE_MATCH_LOST";
})(BluetoothCallbackType || (BluetoothCallbackType = {}));
var BluetoothLE = /** @class */ (function (_super) {
    __extends(BluetoothLE, _super);
    function BluetoothLE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BluetoothLE.prototype.initialize = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "initialize", { "successIndex": 0, "errorIndex": 2, "observable": true }, arguments); };
    BluetoothLE.prototype.enable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "enable", { "callbackOrder": "reverse", "sync": true }, arguments); };
    BluetoothLE.prototype.disable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "disable", { "callbackOrder": "reverse", "sync": true }, arguments); };
    BluetoothLE.prototype.getAdapterInfo = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getAdapterInfo", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.startScan = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "startScan", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BluetoothLE.prototype.stopScan = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "stopScan", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.retrieveConnected = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "retrieveConnected", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.bond = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "bond", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BluetoothLE.prototype.unbond = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "unbond", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.connect = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "connect", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BluetoothLE.prototype.reconnect = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "reconnect", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BluetoothLE.prototype.disconnect = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "disconnect", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.close = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "close", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.discover = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "discover", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.services = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "services", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.characteristics = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "characteristics", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.descriptors = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "descriptors", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.read = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "read", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.subscribe = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "subscribe", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BluetoothLE.prototype.unsubscribe = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "unsubscribe", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.write = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "write", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.writeQ = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "writeQ", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.readDescriptor = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "readDescriptor", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.writeDescriptor = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "writeDescriptor", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.rssi = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "rssi", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.mtu = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "mtu", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.requestConnectionPriority = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestConnectionPriority", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.isInitialized = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isInitialized", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.isEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isEnabled", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.isScanning = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isScanning", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.isBonded = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isBonded", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.wasConnected = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "wasConnected", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.isConnected = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isConnected", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.isDiscovered = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isDiscovered", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.hasPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hasPermission", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.requestPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestPermission", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.isLocationEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isLocationEnabled", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.requestLocation = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "requestLocation", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.initializePeripheral = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "initializePeripheral", { "callbackOrder": "reverse", "observable": true }, arguments); };
    BluetoothLE.prototype.addService = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "addService", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.removeService = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "removeService", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.removeAllServices = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "removeAllServices", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.startAdvertising = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "startAdvertising", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.stopAdvertising = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "stopAdvertising", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.isAdvertising = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isAdvertising", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.respond = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "respond", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.notify = function (params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "notify", { "callbackOrder": "reverse" }, arguments); };
    BluetoothLE.prototype.encodedStringToBytes = function (value) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "encodedStringToBytes", { "sync": true }, arguments); };
    BluetoothLE.prototype.bytesToEncodedString = function (value) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "bytesToEncodedString", { "sync": true }, arguments); };
    BluetoothLE.prototype.stringToBytes = function (value) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "stringToBytes", { "sync": true }, arguments); };
    BluetoothLE.prototype.bytesToString = function (value) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "bytesToString", { "sync": true }, arguments); };
    Object.defineProperty(BluetoothLE.prototype, "SCAN_MODE_OPPORTUNISTIC", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "SCAN_MODE_OPPORTUNISTIC"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "SCAN_MODE_OPPORTUNISTIC", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "SCAN_MODE_LOW_POWER", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "SCAN_MODE_LOW_POWER"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "SCAN_MODE_LOW_POWER", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "SCAN_MODE_BALANCED", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "SCAN_MODE_BALANCED"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "SCAN_MODE_BALANCED", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "SCAN_MODE_LOW_LATENCY", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "SCAN_MODE_LOW_LATENCY"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "SCAN_MODE_LOW_LATENCY", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "MATCH_MODE_AGGRESSIVE", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "MATCH_MODE_AGGRESSIVE"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "MATCH_MODE_AGGRESSIVE", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "MATCH_MODE_STICKY", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "MATCH_MODE_STICKY"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "MATCH_MODE_STICKY", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "MATCH_NUM_ONE_ADVERTISEMENT", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "MATCH_NUM_ONE_ADVERTISEMENT"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "MATCH_NUM_ONE_ADVERTISEMENT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "MATCH_NUM_FEW_ADVERTISEMENT", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "MATCH_NUM_FEW_ADVERTISEMENT"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "MATCH_NUM_FEW_ADVERTISEMENT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "MATCH_NUM_MAX_ADVERTISEMENT", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "MATCH_NUM_MAX_ADVERTISEMENT"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "MATCH_NUM_MAX_ADVERTISEMENT", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "CALLBACK_TYPE_ALL_MATCHES", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "CALLBACK_TYPE_ALL_MATCHES"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "CALLBACK_TYPE_ALL_MATCHES", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "CALLBACK_TYPE_FIRST_MATCH", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "CALLBACK_TYPE_FIRST_MATCH"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "CALLBACK_TYPE_FIRST_MATCH", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BluetoothLE.prototype, "CALLBACK_TYPE_MATCH_LOST", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertyGet"])(this, "CALLBACK_TYPE_MATCH_LOST"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaPropertySet"])(this, "CALLBACK_TYPE_MATCH_LOST", value); },
        enumerable: true,
        configurable: true
    });
    BluetoothLE.pluginName = "BluetoothLE";
    BluetoothLE.plugin = "cordova-plugin-bluetoothle";
    BluetoothLE.pluginRef = "bluetoothle";
    BluetoothLE.repo = "https://github.com/randdusing/cordova-plugin-bluetoothle";
    BluetoothLE.install = "ionic cordova plugin add cordova-plugin-bluetoothle";
    BluetoothLE.installVariables = [];
    BluetoothLE.platforms = ["Android", "iOS"];
    BluetoothLE = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], BluetoothLE);
    return BluetoothLE;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JsdWV0b290aC1sZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFLTixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUF5VmxDLE1BQU0sQ0FBTixJQUFZLGlCQUtYO0FBTEQsV0FBWSxpQkFBaUI7SUFDM0IsZ0dBQTRCLENBQUE7SUFDNUIsdUZBQXVCLENBQUE7SUFDdkIscUZBQXNCLENBQUE7SUFDdEIsMkZBQXlCLENBQUE7QUFDM0IsQ0FBQyxFQUxXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFLNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxrQkFHWDtBQUhELFdBQVksa0JBQWtCO0lBQzVCLDJGQUF3QixDQUFBO0lBQ3hCLHFGQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFIVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBRzdCO0FBRUQsTUFBTSxDQUFOLElBQVksaUJBSVg7QUFKRCxXQUFZLGlCQUFpQjtJQUMzQix1R0FBK0IsQ0FBQTtJQUMvQix1R0FBK0IsQ0FBQTtJQUMvQix1R0FBK0IsQ0FBQTtBQUNqQyxDQUFDLEVBSlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUk1QjtBQUVELE1BQU0sQ0FBTixJQUFZLHFCQUlYO0FBSkQsV0FBWSxxQkFBcUI7SUFDL0IsMkdBQTZCLENBQUE7SUFDN0IsMkdBQTZCLENBQUE7SUFDN0IseUdBQTRCLENBQUE7QUFDOUIsQ0FBQyxFQUpXLHFCQUFxQixLQUFyQixxQkFBcUIsUUFJaEM7O0lBc0RnQywrQkFBaUI7Ozs7SUFRaEQsZ0NBQVUsYUFBQyxNQUFtQjtJQVU5Qiw0QkFBTTtJQVVOLDZCQUFPO0lBYVAsb0NBQWM7SUFnQmQsK0JBQVMsYUFBQyxNQUFrQjtJQVc1Qiw4QkFBUTtJQVlSLHVDQUFpQixhQUFDLE1BRWpCO0lBa0JELDBCQUFJLGFBQUMsTUFBMkI7SUFhaEMsNEJBQU0sYUFBQyxNQUEyQjtJQWlCbEMsNkJBQU8sYUFBQyxNQUdQO0lBV0QsK0JBQVMsYUFBQyxNQUEyQjtJQVlyQyxnQ0FBVSxhQUFDLE1BQTJCO0lBYXRDLDJCQUFLLGFBQUMsTUFBMkI7SUFtQmpDLDhCQUFRLGFBQUMsTUFHUjtJQVlELDhCQUFRLGFBQUMsTUFHUjtJQVlELHFDQUFlLGFBQ2IsTUFBNEI7SUFZOUIsaUNBQVcsYUFBQyxNQUF3QjtJQVdwQywwQkFBSSxhQUFDLE1BQXdCO0lBYTdCLCtCQUFTLGFBQUMsTUFBd0I7SUFXbEMsaUNBQVcsYUFBQyxNQUF3QjtJQVlwQywyQkFBSyxhQUFDLE1BQWlDO0lBWXZDLDRCQUFNLGFBQUMsTUFBaUM7SUFXeEMsb0NBQWMsYUFBQyxNQUFpQztJQVloRCxxQ0FBZSxhQUFDLE1BQTZCO0lBVzdDLDBCQUFJLGFBQUMsTUFBMkI7SUFXaEMseUJBQUcsYUFBQyxNQUF5QztJQVk3QywrQ0FBeUIsYUFBQyxNQUd6QjtJQVVELG1DQUFhO0lBVWIsK0JBQVM7SUFVVCxnQ0FBVTtJQVdWLDhCQUFRLGFBQUMsTUFBMkI7SUFXcEMsa0NBQVksYUFBQyxNQUEyQjtJQVd4QyxpQ0FBVyxhQUFDLE1BQTJCO0lBV3ZDLGtDQUFZLGFBQUMsTUFBMkI7SUFVeEMsbUNBQWE7SUFXYix1Q0FBaUI7SUFVakIsdUNBQWlCO0lBV2pCLHFDQUFlO0lBWWYsMENBQW9CLGFBQ2xCLE1BQTZCO0lBWS9CLGdDQUFVLGFBQUMsTUFHVjtJQVdELG1DQUFhLGFBQUMsTUFFYjtJQVVELHVDQUFpQjtJQWFqQixzQ0FBZ0IsYUFBQyxNQUF5QjtJQVUxQyxxQ0FBZTtJQVVmLG1DQUFhO0lBV2IsNkJBQU8sYUFBQyxNQUFxQjtJQWE3Qiw0QkFBTSxhQUFDLE1BQW9CO0lBVzNCLDBDQUFvQixhQUFDLEtBQWE7SUFXbEMsMENBQW9CLGFBQUMsS0FBaUI7SUFXdEMsbUNBQWEsYUFBQyxLQUFhO0lBVzNCLG1DQUFhLGFBQUMsS0FBaUI7MEJBSy9CLGdEQUF1Qjs7Ozs7OzBCQUV2Qiw0Q0FBbUI7Ozs7OzswQkFFbkIsMkNBQWtCOzs7Ozs7MEJBRWxCLDhDQUFxQjs7Ozs7OzBCQUVyQiw4Q0FBcUI7Ozs7OzswQkFFckIsMENBQWlCOzs7Ozs7MEJBRWpCLG9EQUEyQjs7Ozs7OzBCQUUzQixvREFBMkI7Ozs7OzswQkFFM0Isb0RBQTJCOzs7Ozs7MEJBRTNCLGtEQUF5Qjs7Ozs7OzBCQUV6QixrREFBeUI7Ozs7OzswQkFFekIsaURBQXdCOzs7Ozs7Ozs7Ozs7O0lBcm9CYixXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVc7c0JBNWF4QjtFQTRhaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb3Jkb3ZhLFxuICBDb3Jkb3ZhUHJvcGVydHksXG4gIElvbmljTmF0aXZlUGx1Z2luLFxuICBQbHVnaW5cbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyogQXZhaWxhYmxlIHN0YXR1cyBvZiBkZXZpY2UgKi9cbmV4cG9ydCB0eXBlIFN0YXR1cyA9XG4gIHwgJ3NjYW5TdGFydGVkJ1xuICB8ICdzY2FuU3RvcHBlZCdcbiAgfCAnc2NhblJlc3VsdCdcbiAgfCAnY29ubmVjdGVkJ1xuICB8ICdkaXNjb25uZWN0ZWQnXG4gIHwgJ2JvbmRpbmcnXG4gIHwgJ2JvbmRlZCdcbiAgfCAndW5ib25kZWQnXG4gIHwgJ2Nsb3NlZCdcbiAgfCAnc2VydmljZXMnXG4gIHwgJ2Rpc2NvdmVyZWQnXG4gIHwgJ2NoYXJhY3RlcmlzdGljcydcbiAgfCAnZGVzY3JpcHRvcnMnXG4gIHwgJ3JlYWQnXG4gIHwgJ3N1YnNjcmliZWQnXG4gIHwgJ3Vuc3Vic2NyaWJlZCdcbiAgfCAnc3Vic2NyaWJlZFJlc3VsdCdcbiAgfCAnd3JpdHRlbidcbiAgfCAncmVhZERlc2NyaXB0b3InXG4gIHwgJ3dyaXRlRGVzY3JpcHRvcidcbiAgfCAncnNzaSdcbiAgfCAnbXR1J1xuICB8ICdjb25uZWN0aW9uUHJpb3JpdHlSZXF1ZXN0ZWQnXG4gIHwgJ2VuYWJsZWQnXG4gIHwgJ2Rpc2FibGVkJ1xuICB8ICdyZWFkUmVxdWVzdGVkJ1xuICB8ICd3cml0ZVJlcXVlc3RlZCdcbiAgfCAnbXR1Q2hhbmdlZCdcbiAgfCAnbm90aWZ5UmVhZHknXG4gIHwgJ25vdGlmeVNlbnQnXG4gIHwgJ3NlcnZpY2VBZGRlZCdcbiAgfCAnc2VydmljZVJlbW92ZWQnXG4gIHwgJ2FsbFNlcnZpY2VzUmVtb3ZlZCdcbiAgfCAnYWR2ZXJ0aXNpbmdTdGFydGVkJ1xuICB8ICdhZHZlcnRpc2luZ1N0b3BwZWQnXG4gIHwgJ3Jlc3BvbmRlZCdcbiAgfCAnbm90aWZpZWQnO1xuXG4vKiogQXZhaWxhYmxlIGNvbm5lY3Rpb24gcHJpb3JpdGllcyAqL1xuZXhwb3J0IHR5cGUgQ29ubmVjdGlvblByaW9yaXR5ID0gJ2xvdycgfCAnYmFsYW5jZWQnIHwgJ2hpZ2gnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFtcyB7XG4gIC8qKiBUaGUgYWRkcmVzcy9pZGVudGlmaWVyIHByb3ZpZGVkIGJ5IHRoZSBzY2FuJ3MgcmV0dXJuIG9iamVjdCAqL1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIC8qKiBUaGUgc2VydmljZSdzIElEICovXG4gIHNlcnZpY2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbml0UGVyaXBoZXJhbFBhcmFtcyB7XG4gIC8qKiBTaG91bGQgdXNlciBiZSBwcm9tcHRlZCB0byBlbmFibGUgQmx1ZXRvb3RoICovXG4gIHJlcXVlc3Q/OiBib29sZWFuO1xuICAvKiBBIHVuaXF1ZSBzdHJpbmcgdG8gaWRlbnRpZnkgeW91ciBhcHAuIEJsdWV0b290aCBDZW50cmFsIGJhY2tncm91bmQgbW9kZSBpcyByZXF1aXJlZCB0byB1c2UgdGhpcywgYnV0IGJhY2tncm91bmQgbW9kZSBkb2Vzbid0IHNlZW0gdG8gcmVxdWlyZSBzcGVjaWZ5aW5nIHRoZSByZXN0b3JlS2V5ICovXG4gIHJlc3RvcmVLZXk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdFBhcmFtcyBleHRlbmRzIEluaXRQZXJpcGhlcmFsUGFyYW1zIHtcbiAgLyoqIFNob3VsZCBjaGFuZ2UgaW4gQmx1ZXRvb3RoIHN0YXR1cyBub3RpZmljYXRpb25zIGJlIHNlbnQgKi9cbiAgc3RhdHVzUmVjZWl2ZXI/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjYW5QYXJhbXMge1xuICAvKiBBbiBhcnJheSBvZiBzZXJ2aWNlIElEcyB0byBmaWx0ZXIgdGhlIHNjYW4gb3IgZW1wdHkgYXJyYXkgLyBudWxsLiBUaGlzIHBhcmFtZXRlciBpcyBub3Qgc3VwcG9ydGVkIG9uIFdpbmRvd3MgcGxhdGZvcm0geWV0ICovXG4gIHNlcnZpY2VzPzogc3RyaW5nW107XG4gIC8qIFRydWUvZmFsc2UgdG8gYWxsb3cgZHVwbGljYXRlIGFkdmVydGlzZW1lbnQgcGFja2V0cywgZGVmYXVsdHMgdG8gZmFsc2UgKGlPUykqL1xuICBhbGxvd0R1cGxpY2F0ZXM/OiBib29sZWFuO1xuICAvKiogRGVmYXVsdHMgdG8gTG93IFBvd2VyLiBBdmFpbGFibGUgZnJvbSBBUEkyMSAvIEFQSSAyMyAoQW5kcm9pZCkgKi9cbiAgc2Nhbk1vZGU/OiBCbHVldG9vdGhTY2FuTW9kZTtcbiAgLyoqIERlZmF1bHRzIHRvIEFnZ3Jlc3NpdmUuIEF2YWlsYWJsZSBmcm9tIEFQSTIzIChBbmRyb2lkKSAqL1xuICBtYXRjaE1vZGU/OiBCbHVldG9vdGhNYXRjaE1vZGU7XG4gIC8qKiBEZWZhdWx0cyB0byBPbmUgQWR2ZXJ0aXNlbWVudC4gQXZhaWxhYmxlIGZyb20gQVBJMjMgKEFuZHJvaWQpICovXG4gIG1hdGNoTnVtPzogQmx1ZXRvb3RoTWF0Y2hOdW07XG4gIC8qKiBEZWZhdWx0cyB0byBBbGwgTWF0Y2hlcy4gQXZhaWxhYmxlIGZyb20gQVBJMjEgLyBBUEkgMjMuIChBbmRyb2lkKSAqL1xuICBjYWxsYmFja1R5cGU/OiBCbHVldG9vdGhDYWxsYmFja1R5cGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZ5UGFyYW1zIHtcbiAgLyoqIFNlcnZpY2UncyBVVUlEICovXG4gIHNlcnZpY2U6IHN0cmluZztcbiAgLyoqIENoYXJhY3RlcmlzdGljJ3MgVVVJRCAqL1xuICBjaGFyYWN0ZXJpc3RpYzogc3RyaW5nO1xuICAvKiogQmFzZTY0IGVuY29kZWQgc3RyaW5nLCBudW1iZXIgb3Igc3RyaW5nICovXG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uZFBhcmFtcyB7XG4gIC8qKiBUaGlzIGludGVnZXIgdmFsdWUgd2lsbCBiZSBpbmNyZW1lbnRlZCBldmVyeSByZWFkL3dyaXRlUmVxdWVzdGVkICovXG4gIHJlcXVlc3RJZDogbnVtYmVyO1xuICAvKiogYmFzZTY0IHN0cmluZyAqL1xuICB2YWx1ZTogc3RyaW5nO1xuICAvKiogbm90IGRvY3VtZW50ZWQgKi9cbiAgb2Zmc2V0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYXJhY3RlcmlzdGljUGFyYW1zIGV4dGVuZHMgUGFyYW1zIHtcbiAgLyoqIEFuIGFycmF5IG9mIGNoYXJhY3RlcmlzdGljIElEcyB0byBkaXNjb3ZlciBvciBlbXB0eSBhcnJheSAvIG51bGwgKi9cbiAgY2hhcmFjdGVyaXN0aWNzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVzY3JpcHRvclBhcmFtcyBleHRlbmRzIFBhcmFtcyB7XG4gIC8qKiBUaGUgY2hhcmFjdGVyaXN0aWMncyBJRCAqL1xuICBjaGFyYWN0ZXJpc3RpYzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wZXJhdGlvbkRlc2NyaXB0b3JQYXJhbXMgZXh0ZW5kcyBEZXNjcmlwdG9yUGFyYW1zIHtcbiAgLyoqIFRoZSBkZXNjcmlwdG9yJ3MgSUQgKi9cbiAgZGVzY3JpcHRvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaXRlQ2hhcmFjdGVyaXN0aWNQYXJhbXMgZXh0ZW5kcyBEZXNjcmlwdG9yUGFyYW1zIHtcbiAgLyogQmFzZTY0IGVuY29kZWQgc3RyaW5nICovXG4gIHZhbHVlOiBzdHJpbmc7XG4gIC8qIFNldCB0byBcIm5vUmVzcG9uc2VcIiB0byBlbmFibGUgd3JpdGUgd2l0aG91dCByZXNwb25zZSwgYWxsIG90aGVyIHZhbHVlcyB3aWxsIHdyaXRlIG5vcm1hbGx5LiAqL1xuICB0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdyaXRlRGVzY3JpcHRvclBhcmFtcyBleHRlbmRzIERlc2NyaXB0b3JQYXJhbXMge1xuICAvKiogVGhlIGRlc2NyaXB0b3IncyBJRCAqL1xuICBkZXNjcmlwdG9yOiBzdHJpbmc7XG4gIC8qKiBCYXNlNjQgZW5jb2RlZCBzdHJpbmcsIG51bWJlciBvciBzdHJpbmcgKi9cbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQWR2ZXJ0aXNpbmdQYXJhbXMgPSBBZHZlcnRpc2luZ1BhcmFtc0FuZHJvaWQgfCBBZHZlcnRpc2luZ1BhcmFtc0lPUztcbmV4cG9ydCB0eXBlIEFkdmVydGlzZU1vZGUgPSAnYmFsYW5jZWQnIHwgJ2xvd0xhdGVuY3knIHwgJ2xvd1Bvd2VyJztcbmV4cG9ydCB0eXBlIFR4UG93ZXJMZXZlbCA9ICdoaWdoJyB8ICdsb3cnIHwgJ3VsdHJhbG93JyB8ICdtZWRpdW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFkdmVydGlzaW5nUGFyYW1zQW5kcm9pZCB7XG4gIC8qKiBTZXJ2aWNlIFVVSUQgb24gQW5kcm9pZCAqL1xuICBzZXJ2aWNlOiBzdHJpbmc7XG4gIC8qKiBub3QgZG9jdW1lbnRlZCAqL1xuICBtb2RlPzogQWR2ZXJ0aXNlTW9kZTtcbiAgLyoqIG5vdCBkb2N1bWVudGVkICovXG4gIGNvbm5lY3RhYmxlPzogYm9vbGVhbjtcbiAgLyoqIG5vdCBkb2N1bWVudGVkICovXG4gIHRpbWVvdXQ/OiBudW1iZXI7XG4gIC8qKiBub3QgZG9jdW1lbnRlZCAqL1xuICB0eFBvd2VyTGV2ZWw/OiBUeFBvd2VyTGV2ZWw7XG4gIC8qKiBub3QgZG9jdW1lbnRlZCAqL1xuICBtYW51ZmFjdHVyZXJJZD86IG51bWJlcjtcbiAgLyoqIG5vdCBkb2N1bWVudGVkICovXG4gIG1hbnVmYWN0dXJlclNwZWNpZmljRGF0YT86IGFueTtcbiAgLyoqIG5vdCBkb2N1bWVudGVkICovXG4gIGluY2x1ZGVEZXZpY2VOYW1lOiBib29sZWFuO1xuICAvKiogbm90IGRvY3VtZW50ZWQgKi9cbiAgaW5jbHVkZVR4UG93ZXJMZXZlbDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZHZlcnRpc2luZ1BhcmFtc0lPUyB7XG4gIC8qKiBBcnJheSBvZiBzZXJ2aWNlIFVVSURzIG9uIGlPUyAqL1xuICBzZXJ2aWNlczogc3RyaW5nW107XG4gIC8qKiBkZXZpY2UncyBuYW1lICovXG4gIG5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbW9uSW5mbyB7XG4gIC8qKiBUaGUgZGV2aWNlJ3MgZGlzcGxheSBuYW1lICovXG4gIG5hbWU6IHN0cmluZztcbiAgLyoqIFRoZSBkZXZpY2UncyBhZGRyZXNzIC8gaWRlbnRpZmllciBmb3IgY29ubmVjdGluZyB0byB0aGUgb2JqZWN0ICovXG4gIGFkZHJlc3M6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VJbmZvIGV4dGVuZHMgQ29tbW9uSW5mbyB7XG4gIC8qKiBEZXZpY2UncyBzdGF0dXMgKi9cbiAgc3RhdHVzOiBTdGF0dXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUlNTSSBleHRlbmRzIERldmljZUluZm8ge1xuICAvKiogc2lnbmFsIHN0cmVuZ3RoICovXG4gIHJzc2k6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNVFUgZXh0ZW5kcyBEZXZpY2VJbmZvIHtcbiAgLyogbXR1IHZhbHVlICovXG4gIG10dTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJvbmRlZFN0YXR1cyBleHRlbmRzIENvbW1vbkluZm8ge1xuICAvKiBCb25kZWQgc3RhdHVzKi9cbiAgaXNCb25kZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJldkNvbm5lY3Rpb25TdGF0dXMgZXh0ZW5kcyBDb21tb25JbmZvIHtcbiAgLyoqIERldGVybWluZSB3aGV0aGVyIHRoZSBkZXZpY2Ugd2FzIGNvbm5lY3RlZCAqL1xuICB3YXNDb25uZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VyckNvbm5lY3Rpb25TdGF0dXMgZXh0ZW5kcyBDb21tb25JbmZvIHtcbiAgLyoqIERldGVybWluZSB3aGV0aGVyIHRoZSBkZXZpY2UgaXMgY29ubmVjdGVkICovXG4gIGlzQ29ubmVjdGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpc2NvdmVyU3RhdHVzIGV4dGVuZHMgQ29tbW9uSW5mbyB7XG4gIC8qKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZGV2aWNlJ3MgY2hhcmFjdGVyaXN0aWNzIGFuZCBkZXNjcmlwdG9ycyBoYXZlIGJlZW4gZGlzY292ZXJlZCAqL1xuICBpc0Rpc2NvdmVyZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NhblN0YXR1cyBleHRlbmRzIERldmljZUluZm8ge1xuICAvKiogc2lnbmFsIHN0cmVuZ3RoICovXG4gIHJzc2k6IG51bWJlcjtcbiAgLyoqXG4gICAqIGFkdmVydGlzZW1lbnQgZGF0YSBpbiBlbmNvZGVkIHN0cmluZyBvZiBieXRlcywgdXNlIGJsdWV0b290aGxlLmVuY29kZWRTdHJpbmdUb0J5dGVzKCkgKEFuZHJvaWQpXG4gICAqIGFkdmVydGlzZW1lbnQgaGFzaCB3aXRoIHRoZSBrZXlzIChpT1MpXG4gICAqIGVtcHR5IChXaW5kb3dzKVxuICAgKi9cbiAgYWR2ZXJ0aXNlbWVudDpcbiAgICB8IHtcbiAgICAgICAgLyoqIEFuIGFycmF5IG9mIHNlcnZpY2UgVVVJRHMgKi9cbiAgICAgICAgc2VydmljZVV1aWRzOiBzdHJpbmdbXTtcbiAgICAgICAgLyoqIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbmFtZSBvZiB0aGUgbWFudWZhY3R1cmVyIG9mIHRoZSBkZXZpY2UgKi9cbiAgICAgICAgbWFudWZhY3R1cmVyRGF0YTogc3RyaW5nO1xuICAgICAgICAvKiogQSBudW1iZXIgY29udGFpbmluZyB0aGUgdHJhbnNtaXQgcG93ZXIgb2YgYSBwZXJpcGhlcmFsICovXG4gICAgICAgIHR4UG93ZXJMZXZlbDogbnVtYmVyO1xuICAgICAgICAvKiogQW4gYXJyYXkgb2Ygb25lIG9yIG1vcmUgQ0JVVUlEIG9iamVjdHMsIHJlcHJlc2VudGluZyBDQlNlcnZpY2UgVVVJRHMgdGhhdCB3ZXJlIGZvdW5kIGluIHRoZSDigJxvdmVyZmxvd+KAnSBhcmVhIG9mIHRoZSBhZHZlcnRpc2VtZW50IGRhdGEgKi9cbiAgICAgICAgb3ZlcmZsb3dTZXJ2aWNlVXVpZHM6IHN0cmluZ1tdO1xuICAgICAgICAvKiogQSBib29sZWFuIHZhbHVlIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGFkdmVydGlzaW5nIGV2ZW50IHR5cGUgaXMgY29ubmVjdGFibGUgKi9cbiAgICAgICAgaXNDb25uZWN0YWJsZTogYm9vbGVhbjtcbiAgICAgICAgLyoqIEFuIGFycmF5IG9mIG9uZSBvciBtb3JlIENCVVVJRCBvYmplY3RzLCByZXByZXNlbnRpbmcgQ0JTZXJ2aWNlIFVVSURzICovXG4gICAgICAgIHNvbGljaXRlZFNlcnZpY2VVdWlkczogc3RyaW5nW107XG4gICAgICAgIC8qIEEgZGljdGlvbmFyeSBjb250YWluaW5nIHNlcnZpY2Utc3BlY2lmaWMgYWR2ZXJ0aXNlbWVudCBkYXRhICovXG4gICAgICAgIHNlcnZpY2VEYXRhOiBhbnk7XG4gICAgICAgIC8qIEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGxvY2FsIG5hbWUgb2YgYSBwZXJpcGhlcmFsICovXG4gICAgICAgIGxvY2FsTmFtZTogc3RyaW5nO1xuICAgICAgfVxuICAgIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZpY2Uge1xuICAvKiogU2VydmljZSdzIHV1aWQgKi9cbiAgdXVpZDogc3RyaW5nO1xuICAvKiogQXJyYXkgb2YgY2hhcmFjdGVyaXN0aWNzICovXG4gIGNoYXJhY3RlcmlzdGljczogQ2hhcmFjdGVyaXN0aWNbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaGFyYWN0ZXJpc3RpYyB7XG4gIC8qIEFycmF5IG9mIGRlc2NyaXB0b3JzICovXG4gIGRlc2NyaXB0b3JzPzogRGVzY3JpcHRvcltdO1xuICAvKiogIENoYXJhY3RlcmlzdGljJ3MgdXVpZCAqL1xuICB1dWlkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiAgQ2hhcmFjdGVyaXN0aWMncyBwcm9wZXJ0aWVzXG4gICAqICBJZiB0aGUgcHJvcGVydHkgaXMgZGVmaW5lZCBhcyBhIGtleSwgdGhlIGNoYXJhY3RlcmlzdGljIGhhcyB0aGF0IHByb3BlcnR5XG4gICAqL1xuICBwcm9wZXJ0aWVzPzoge1xuICAgIHdyaXRlPzogYm9vbGVhbjtcbiAgICBicm9hZGNhc3Q/OiBib29sZWFuO1xuICAgIGV4dGVuZGVkUHJvcHM/OiBib29sZWFuO1xuICAgIHdyaXRlV2l0aG91dFJlc3BvbnNlPzogYm9vbGVhbjtcbiAgICB3cml0ZU5vUmVzcG9uc2U/OiBib29sZWFuO1xuICAgIHNpZ25lZFdyaXRlPzogYm9vbGVhbjtcbiAgICByZWFkPzogYm9vbGVhbjtcbiAgICBub3RpZnk/OiBib29sZWFuO1xuICAgIGluZGljYXRlPzogYm9vbGVhbjtcbiAgICBhdXRoZW50aWNhdGVkU2lnbmVkV3JpdGVzPzogYm9vbGVhbjtcbiAgICBub3RpZnlFbmNyeXB0aW9uUmVxdWlyZWQ/OiBib29sZWFuO1xuICAgIGluZGljYXRlRW5jcnlwdGlvblJlcXVpcmVkPzogYm9vbGVhbjtcbiAgfTtcbiAgLyoqXG4gICAqICBJZiB0aGUgcGVybWlzc2lvbiBpcyBkZWZpbmVkIGFzIGEga2V5LCB0aGUgY2hhcmFjdGVyIGhhcyB0aGF0IHBlcm1pc3Npb25cbiAgICovXG4gIHBlcm1pc3Npb25zPzoge1xuICAgIHJlYWQ/OiBib29sZWFuO1xuICAgIHJlYWRFbmNyeXB0ZWQ/OiBib29sZWFuO1xuICAgIHJlYWRFbmNyeXB0ZWRNSVRNPzogYm9vbGVhbjtcbiAgICB3cml0ZT86IGJvb2xlYW47XG4gICAgd3JpdGVTaWduZWQ/OiBib29sZWFuO1xuICAgIHdyaXRlU2lnbmVkTUlUTT86IGJvb2xlYW47XG4gICAgd3JpdGVFbmNyeXB0ZWRNSVRNPzogYm9vbGVhbjtcbiAgICByZWFkRW5jcnlwdGlvblJlcXVpcmVkPzogYm9vbGVhbjtcbiAgICB3cml0ZUVuY3J5cHRpb25SZXF1aXJlZD86IGJvb2xlYW47XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVzY3JpcHRvciB7XG4gIHV1aWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2UgZXh0ZW5kcyBEZXZpY2VJbmZvIHtcbiAgLyoqIERldmljZSdzIHNlcnZpY2VzICovXG4gIHNlcnZpY2VzOiBTZXJ2aWNlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VydmljZXMgZXh0ZW5kcyBEZXZpY2VJbmZvIHtcbiAgLyoqIEFycmF5IG9mIHNlcnZpY2UgVVVJRFMgKi9cbiAgc2VydmljZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlc2NyaXB0b3JzIGV4dGVuZHMgRGV2aWNlSW5mbyB7XG4gIC8qKiBDaGFyYWN0ZXJpc3RpYydzIFVVSUQgKi9cbiAgY2hhcmFjdGVyaXN0aWM6IHN0cmluZztcbiAgLyoqIFNlcnZpY2UncyBVVUlEICovXG4gIHNlcnZpY2U6IHN0cmluZztcbiAgLyogQXJyYXkgb2YgZGVzY3JpcHRvciBVVUlEcyAqL1xuICBkZXNjcmlwdG9yczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3BlcmF0aW9uUmVzdWx0IGV4dGVuZHMgRGV2aWNlSW5mbyB7XG4gIC8qKiBDaGFyYWN0ZXJpc3RpYyBVVUlEICovXG4gIGNoYXJhY3RlcmlzdGljOiBzdHJpbmc7XG4gIC8qKiBTZXJ2aWNlJ3MgVVVJRCAqL1xuICBzZXJ2aWNlOiBzdHJpbmc7XG4gIC8qKiBCYXNlNjQgZW5jb2RlZCBzdHJpbmcgb2YgYnl0ZXMgKi9cbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVbnN1YnNjcmliZVJlc3VsdCBleHRlbmRzIERldmljZUluZm8ge1xuICAvKiogQ2hhcmFjdGVyaXN0aWMgVVVJRCAqL1xuICBjaGFyYWN0ZXJpc3RpYzogc3RyaW5nO1xuICAvKiogU2VydmljZSdzIFVVSUQgKi9cbiAgc2VydmljZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERlc2NyaXB0b3JSZXN1bHQgZXh0ZW5kcyBPcGVyYXRpb25SZXN1bHQge1xuICBkZXNjcmlwdG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hhcmFjdGVyaXN0aWNzIGV4dGVuZHMgRGV2aWNlSW5mbyB7XG4gIC8qKiBTZXJ2aWNlJ3MgaWQgKi9cbiAgc2VydmljZTogc3RyaW5nO1xuICAvKiBBcnJheSBvZiBjaGFyYWN0ZXJpc3RpYyBvYmplY3RzKi9cbiAgY2hhcmFjdGVyaXN0aWNzOiBDaGFyYWN0ZXJpc3RpY1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluaXRpYWxpemVSZXN1bHQge1xuICAvKiogRGV2aWNlJ3Mgc3RhdHVzICovXG4gIHN0YXR1czogU3RhdHVzO1xuICAvKiogVGhlIGFkZHJlc3MvaWRlbnRpZmllciBwcm92aWRlZCBieSB0aGUgc2NhbidzIHJldHVybiBvYmplY3QgKi9cbiAgYWRkcmVzczogc3RyaW5nO1xuICAvKiogU2VydmljZSdzIFVVSUQgKi9cbiAgc2VydmljZTogc3RyaW5nO1xuICAvKiogQ2hhcmFjdGVyaXN0aWMgVVVJRCAqL1xuICBjaGFyYWN0ZXJpc3RpYzogc3RyaW5nO1xuICAvKiogVGhpcyBpbnRlZ2VyIHZhbHVlIHdpbGwgYmUgaW5jcmVtZW50ZWQgZXZlcnkgcmVhZC93cml0ZVJlcXVlc3RlZCAqL1xuICByZXF1ZXN0SWQ6IG51bWJlcjtcbiAgLyoqIE9mZnNldCB2YWx1ZSAqL1xuICBvZmZzZXQ6IG51bWJlcjtcbiAgLyoqIG10dSB2YWx1ZSAqL1xuICBtdHU6IG51bWJlcjtcbiAgLyoqIEJhc2U2NCBlbmNvZGVkIHN0cmluZyBvZiBieXRlcyAqL1xuICB2YWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBCbHVldG9vdGhTY2FuTW9kZSB7XG4gIFNDQU5fTU9ERV9PUFBPUlRVTklTVElDID0gLTEsXG4gIFNDQU5fTU9ERV9MT1dfUE9XRVIgPSAwLFxuICBTQ0FOX01PREVfQkFMQU5DRUQgPSAxLFxuICBTQ0FOX01PREVfTE9XX0xBVEVOQ1kgPSAyXG59XG5cbmV4cG9ydCBlbnVtIEJsdWV0b290aE1hdGNoTW9kZSB7XG4gIE1BVENIX01PREVfQUdSRVNTSVZFID0gMSxcbiAgTUFUQ0hfTU9ERV9TVElDS1kgPSAyXG59XG5cbmV4cG9ydCBlbnVtIEJsdWV0b290aE1hdGNoTnVtIHtcbiAgTUFUQ0hfTlVNX09ORV9BRFZFUlRJU0VNRU5UID0gMSxcbiAgTUFUQ0hfTlVNX0ZFV19BRFZFUlRJU0VNRU5UID0gMixcbiAgTUFUQ0hfTlVNX01BWF9BRFZFUlRJU0VNRU5UID0gM1xufVxuXG5leHBvcnQgZW51bSBCbHVldG9vdGhDYWxsYmFja1R5cGUge1xuICBDQUxMQkFDS19UWVBFX0FMTF9NQVRDSEVTID0gMSxcbiAgQ0FMTEJBQ0tfVFlQRV9GSVJTVF9NQVRDSCA9IDIsXG4gIENBTExCQUNLX1RZUEVfTUFUQ0hfTE9TVCA9IDRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcnJvciB7XG4gIGNvZGU6IG51bWJlcjtcbiAgbWVzc2FnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkYXB0ZXJJbmZvIHtcbiAgbmFtZTogc3RyaW5nO1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG4gIGlzRW5hYmxlZDogYm9vbGVhbjtcbiAgaXNTY2FubmluZzogYm9vbGVhbjtcbiAgaXNEaXNjb3ZlcmFibGU6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgQmx1ZXRvb3RoTEVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gaGFzIHRoZSBtb3N0IGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIGZvciBpbnRlcmFjdGluZyB3aXRoIEJsdWV0b290aCBMRSBkZXZpY2VzIG9uIEFuZHJvaWQsIGlPUyBhbmQgcGFydGlhbGx5IFdpbmRvd3MuXG4gKiBJdCdzIGEgd3JhcCBhcm91bmQgW3JhbmRkdXNpbmcvY29yZG92YS1wbHVnaW4tYmx1ZXRvb3RobGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9yYW5kZHVzaW5nL2NvcmRvdmEtcGx1Z2luLWJsdWV0b290aGxlL2Jsb2IvbWFzdGVyL3JlYWRtZS5tZCkgY29yZG92YSBwbHVnaW4gZm9yIElvbmljLlxuICogSXQgc3VwcG9ydHMgcGVyaXBoZXJhbCAqKmFuZCoqIGNlbnRyYWwgbW9kZXMgYW5kIGNvdmVycyBtb3N0IG9mIHRoZSBBUEkgbWV0aG9kcyBhdmFpbGFibGUgb24gQW5kcm9pZCBhbmQgaU9TLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmx1ZXRvb3RoTEUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JsdWV0b290aC1sZS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgYmx1ZXRvb3RobGU6IEJsdWV0b290aExFLCBwdWJsaWMgcGx0OiBQbGF0Zm9ybSkge1xuICpcbiAqICB0aGlzLnBsdC5yZWFkeSgpLnRoZW4oKHJlYWR5U291cmNlKSA9PiB7XG4gKlxuICogICAgY29uc29sZS5sb2coJ1BsYXRmb3JtIHJlYWR5IGZyb20nLCByZWFkeVNvdXJjZSk7XG4gKlxuICogICAgdGhpcy5ibHVldG9vdGhsZS5pbml0aWFsaXplKCkudGhlbihibGUgPT4ge1xuICogICAgICBjb25zb2xlLmxvZygnYmxlJywgYmxlLnN0YXR1cykgLy8gbG9ncyAnZW5hYmxlZCdcbiAqICAgIH0pO1xuICpcbiAqICAgfSk7XG4gKiB9XG4gKlxuICogYGBgXG4gKlxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JsdWV0b290aExFJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYmx1ZXRvb3RobGUnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnYmx1ZXRvb3RobGUnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcmFuZGR1c2luZy9jb3Jkb3ZhLXBsdWdpbi1ibHVldG9vdGhsZScsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1ibHVldG9vdGhsZScsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJsdWV0b290aExFIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQG5hbWUgaW5pdGlhbGl6ZVxuICAgKiBJbml0aWFsaXplIEJsdWV0b290aCBvbiB0aGUgZGV2aWNlXG4gICAqIEBwYXJhbSB7SW5pdFBhcmFtc30gW3BhcmFtc11cbiAgICogQHJldHVybnMgeyhPYnNlcnZhYmxlPHsgc3RhdHVzOiAnZW5hYmxlZCcgfCAnZGlzYWJsZWQnfT4pfSBUaGUgY2FsbGJhY2sgdGhhdCBpcyBwYXNzZWQgaW5pdGlhbGl6ZSBzdGF0dXMgKGVuYWJsZWQvZGlzYWJsZWQpXG4gICAqL1xuICBAQ29yZG92YSh7IHN1Y2Nlc3NJbmRleDogMCwgZXJyb3JJbmRleDogMiwgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBpbml0aWFsaXplKHBhcmFtcz86IEluaXRQYXJhbXMpOiBPYnNlcnZhYmxlPHsgc3RhdHVzOiAnZW5hYmxlZCcgfCAnZGlzYWJsZWQnIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZW5hYmxlIChBbmRyb2lkKVxuICAgKiBFbmFibGUgQmx1ZXRvb3RoIG9uIHRoZSBkZXZpY2UuIEFuZHJvaWQgc3VwcG9ydCBvbmx5XG4gICAqIEByZXR1cm5zIHZvaWRcbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLCBzeW5jOiB0cnVlIH0pXG4gIGVuYWJsZSgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZGlzYWJsZSAoQW5kcm9pZClcbiAgICogRGlzYWJsZSBCbHVldG9vdGggb24gdGhlIGRldmljZS4gQW5kcm9pZCBzdXBwb3J0IG9ubHlcbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsIHN5bmM6IHRydWUgfSlcbiAgZGlzYWJsZSgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZ2V0QWRhcHRlckluZm8gKEFuZHJvaWQpXG4gICAqIFJldHJpZXZlIHVzZWZ1bCBpbmZvcm1hdGlvbiBzdWNoIGFzIHRoZSBhZGRyZXNzLCBuYW1lLCBhbmQgdmFyaW91cyBzdGF0ZXMgKGluaXRpYWxpemVkLCBlbmFibGVkLCBzY2FubmluZywgZGlzY292ZXJhYmxlKS5cbiAgICogVGhpcyBjYW4gYmUgdmVyeSB1c2VmdWwgd2hlbiB0aGUgZ2VuZXJhbCBzdGF0ZSBvZiB0aGUgYWRhcHRlciBoYXMgYmVlbiBsb3N0LCBhbmQgd2Ugd291bGQgb3RoZXJ3aXNlIG5lZWQgdG8gZ28gdGhyb3VnaCBhIHNlcmllcyBvZiBjYWxsYmFja3MgdG8gZ2V0IHRoZSBjb3JyZWN0IHN0YXRlIChmaXJzdCBpbml0aWFsaXplZCwgdGhlbiBlbmFibGVkLCB0aGVuIGlzU2Nhbm5pbmcsIGFuZCBzbyBmb3J0aCkuXG4gICAqIFRoZSByZXN1bHQgb2YgdGhpcyBtZXRob2QgYWxsb3dzIHVzIHRvIHRha2UgYnVzaW5lc3MgbG9naWMgZGVjaXNpb25zIHdoaWxlIGF2b2lkaW5nIGEgbGFyZ2UgcGFydCBvZiB0aGUgY2FsbGJhY2sgaGVsbC5cbiAgICogQ3VycmVudGx5IHRoZSBkaXNjb3ZlcmFibGUgc3RhdGUgZG9lcyBub3QgaGF2ZSBhbnkgcmVsZXZhbmNlIGJlY2F1c2UgdGhlcmUgaXMgbm8gXCJzZXREaXNjb3ZlcmFibGVcIiBmdW5jdGlvbmFsaXR5IGluIHBsYWNlLiBUaGF0IG1heSBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cbiAgICogQHJldHVybnMge1Byb21pc2U8QWRhcHRlckluZm8+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgZ2V0QWRhcHRlckluZm8oKTogUHJvbWlzZTxBZGFwdGVySW5mbz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdGFydFNjYW5cbiAgICogU2NhbiBmb3IgQmx1ZXRvb3RoIExFIGRldmljZXMuXG4gICAqIFNpbmNlIHNjYW5uaW5nIGlzIGV4cGVuc2l2ZSwgc3RvcCBhcyBzb29uIGFzIHBvc3NpYmxlLiBUaGUgQ29yZG92YSBhcHAgc2hvdWxkIHVzZSBhIHRpbWVyIHRvIGxpbWl0IHRoZSBzY2FuIGludGVydmFsLlxuICAgKiBBbmRyb2lkIEFQSSA+PSAyMyByZXF1aXJlcyBBQ0NFU1NfQ09BUlNFX0xPQ0FUSU9OIHBlcm1pc3Npb25zIHRvIGZpbmQgdW5wYWlyZWQgZGV2aWNlcy5cbiAgICogUGVybWlzc2lvbnMgY2FuIGJlIHJlcXVlc3RlZCBieSB1c2luZyB0aGUgaGFzUGVybWlzc2lvbiBhbmQgcmVxdWVzdFBlcm1pc3Npb24gZnVuY3Rpb25zLlxuICAgKiBBbmRyb2lkIEFQSSA+PSAyMyBhbHNvIHJlcXVpcmVzIGxvY2F0aW9uIHNlcnZpY2VzIHRvIGJlIGVuYWJsZWQuIFVzZSBpc0xvY2F0aW9uRW5hYmxlZCB0byBkZXRlcm1pbmUgd2hldGhlciBsb2NhdGlvbiBzZXJ2aWNlcyBhcmUgZW5hYmxlZC5cbiAgICogSWYgbm90IGVuYWJsZWQsIHVzZSByZXF1ZXN0TG9jYXRpb24gdG8gcHJvbXB0IHRoZSBsb2NhdGlvbiBzZXJ2aWNlcyBzZXR0aW5ncyBwYWdlLlxuICAgKiBAcGFyYW0ge1NjYW5QYXJhbXN9IHBhcmFtcyBTY2FuIHBhcmFtc1xuICAgKiBAcmV0dXJucyB7KE9ic2VydmFibGU8IFNjYW5TdGF0dXMgPil9XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJywgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBzdGFydFNjYW4ocGFyYW1zOiBTY2FuUGFyYW1zKTogT2JzZXJ2YWJsZTwgU2NhblN0YXR1cyA+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc3RvcFNjYW5cbiAgICogU3RvcCBzY2FuIGZvciBCbHVldG9vdGggTEUgZGV2aWNlcy4gU2luY2Ugc2Nhbm5pbmcgaXMgZXhwZW5zaXZlLCBzdG9wIGFzIHNvb24gYXMgcG9zc2libGVcbiAgICogVGhlIGFwcCBzaG91bGQgdXNlIGEgdGltZXIgdG8gbGltaXQgdGhlIHNjYW5uaW5nIHRpbWUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHtzdGF0dXM6ICdzY2FuU3RvcHBlZCd9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHN0b3BTY2FuKCk6IFByb21pc2U8eyBzdGF0dXM6ICdzY2FuU3RvcHBlZCcgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByZXRyaWV2ZUNvbm5lY3RlZFxuICAgKiBSZXRyaWV2ZWQgcGFpcmVkIEJsdWV0b290aCBMRSBkZXZpY2VzLiBJbiBpT1MsIGRldmljZXMgdGhhdCBhcmUgXCJwYWlyZWRcIiB0byB3aWxsIG5vdCByZXR1cm4gZHVyaW5nIGEgbm9ybWFsIHNjYW4uXG4gICAqIENhbGxiYWNrIGlzIFwiaW5zdGFudFwiIGNvbXBhcmVkIHRvIGEgc2Nhbi5cbiAgICogQHBhcmFtIHt7IHNlcnZpY2VzOiBzdHJpbmdbXSB9fSBBbiBhcnJheSBvZiBzZXJ2aWNlIElEcyB0byBmaWx0ZXIgdGhlIHJldHJpZXZhbCBieS4gSWYgbm8gc2VydmljZSBJRHMgYXJlIHNwZWNpZmllZCwgbm8gZGV2aWNlcyB3aWxsIGJlIHJldHVybmVkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IGRldmljZXM6IERldmljZUluZm9bXSB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHJldHJpZXZlQ29ubmVjdGVkKHBhcmFtcz86IHtcbiAgICBzZXJ2aWNlcz86IHN0cmluZ1tdO1xuICB9KTogUHJvbWlzZTx7IGRldmljZXM6IERldmljZUluZm9bXSB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGJvbmQgKEFuZHJvaWQpXG4gICAqIEJvbmQgd2l0aCBhIGRldmljZS5cbiAgICogVGhlIGRldmljZSBkb2Vzbid0IG5lZWQgdG8gYmUgY29ubmVjdGVkIHRvIGluaXRpYXRlIGJvbmRpbmcuIEFuZHJvaWQgc3VwcG9ydCBvbmx5LlxuICAgKiBAcGFyYW0ge3sgYWRkcmVzczogc3RyaW5nIH19IHBhcmFtcyBUaGUgYWRkcmVzcy9pZGVudGlmaWVyIHByb3ZpZGVkIGJ5IHRoZSBzY2FuJ3MgcmV0dXJuIG9iamVjdFxuICAgKiBAcmV0dXJucyB7KE9ic2VydmFibGU8eyBzdGF0dXM6IERldmljZUluZm8gfT4pfVxuICAgKiBzdWNjZXNzOlxuICAgKiAgICBUaGUgZmlyc3Qgc3VjY2VzcyBjYWxsYmFjayBzaG91bGQgYWx3YXlzIHJldHVybiB3aXRoIHN0YXR1cyA9PSBib25kaW5nLlxuICAgKiAgICBJZiB0aGUgYm9uZCBpcyBjcmVhdGVkLCB0aGUgY2FsbGJhY2sgd2lsbCByZXR1cm4gYWdhaW4gd2l0aCBzdGF0dXMgPT0gYm9uZGVkLlxuICAgKiAgICBJZiB0aGUgYm9uZGluZyBwb3B1cCBpcyBjYW5jZWxlZCBvciB0aGUgd3JvbmcgY29kZSBpcyBlbnRlcmVkLCB0aGUgY2FsbGJhY2sgd2lsbCByZXR1cm4gYWdhaW4gd2l0aCBzdGF0dXMgPT0gdW5ib25kZWQuXG4gICAqIGVycm9yOlxuICAgKiAgICBUaGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBib25kIG9wZXJhdGlvbiBmYWlsc1xuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsIG9ic2VydmFibGU6IHRydWUgfSlcbiAgYm9uZChwYXJhbXM6IHsgYWRkcmVzczogc3RyaW5nIH0pOiBPYnNlcnZhYmxlPHsgc3RhdHVzOiBEZXZpY2VJbmZvIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgdW5ib25kIChBbmRyb2lkKVxuICAgKiBVbmJvbmQgd2l0aCBhIGRldmljZS4gVGhlIGRldmljZSBkb2Vzbid0IG5lZWQgdG8gYmUgY29ubmVjdGVkIHRvIGluaXRpYXRlIGJvbmRpbmcuIEFuZHJvaWQgc3VwcG9ydCBvbmx5LlxuICAgKiBAcGFyYW0ge3thZGRyZXNzOiBzdHJpbmd9fSBwYXJhbXMgVGhlIGFkZHJlc3MvaWRlbnRpZmllclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHN0YXR1czogRGV2aWNlSW5mbyB9Pn1cbiAgICogICAgc3VjY2VzczogVGhlIHN1Y2Nlc3MgY2FsbGJhY2sgc2hvdWxkIGFsd2F5cyByZXR1cm4gd2l0aCBzdGF0dXMgPT0gdW5ib25kZWQsIHRoYXQgaXMgcGFzc2VkIHdpdGggZGV2aWNlIG9iamVjdFxuICAgKiAgICBlcnJvcjogVGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdW5ib25kIG9wZXJhdGlvbiBmYWlsc1xuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgdW5ib25kKHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmcgfSk6IFByb21pc2U8eyBzdGF0dXM6IERldmljZUluZm8gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBjb25uZWN0XG4gICAqIENvbm5lY3QgdG8gYSBCbHVldG9vdGggTEUgZGV2aWNlXG4gICAqIEBwYXJhbSBjb25uZWN0U3VjY2VzcyBUaGUgc3VjY2VzcyBjYWxsYmFjayB0aGF0IGlzIHBhc3NlZCB3aXRoIGRldmljZSBvYmplY3RcbiAgICogQHBhcmFtIGNvbm5lY3RFcnJvciAgIFRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbm5lY3Qgb3BlcmF0aW9uIGZhaWxzXG4gICAqIEBwYXJhbSBwYXJhbXMgICAgICAgICBUaGUgYWRkcmVzcy9pZGVudGlmaWVyXG4gICAqXG4gICAqIEBwYXJhbSB7e2FkZHJlc3M6IHN0cmluZywgYXV0b0Nvbm5lY3Q6IGJvb2xlYW59fSBwYXJhbXNcbiAgICogQHJldHVybnMgeyhPYnNlcnZhYmxlPHsgc3RhdHVzOiBEZXZpY2VJbmZvIH0+KX1cbiAgICogICAgc3VjY2VzczogZGV2aWNlIG9iamVjdCB3aXRoIHN0YXR1c1xuICAgKiAgICBlcnJvcjogVGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgd2hlbiB0aGUgdW5ib25kIG9wZXJhdGlvbiBmYWlsc1xuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsIG9ic2VydmFibGU6IHRydWUgfSlcbiAgY29ubmVjdChwYXJhbXM6IHtcbiAgICBhZGRyZXNzOiBzdHJpbmc7XG4gICAgYXV0b0Nvbm5lY3Q/OiBib29sZWFuO1xuICB9KTogT2JzZXJ2YWJsZTwgRGV2aWNlSW5mbyA+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgcmVjb25uZWN0XG4gICAqIFJlY29ubmVjdCB0byBhIHByZXZpb3VzbHkgY29ubmVjdGVkIEJsdWV0b290aCBkZXZpY2VcbiAgICogQHBhcmFtIHt7YWRkcmVzczogc3RyaW5nfX0gcGFyYW1zIFRoZSBhZGRyZXNzL2lkZW50aWZpZXJcbiAgICogQHJldHVybnMgeyhPYnNlcnZhYmxlPHsgc3RhdHVzOiBEZXZpY2VJbmZvIH0+KX1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLCBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIHJlY29ubmVjdChwYXJhbXM6IHsgYWRkcmVzczogc3RyaW5nIH0pOiBPYnNlcnZhYmxlPHsgc3RhdHVzOiBEZXZpY2VJbmZvIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZGlzY29ubmVjdFxuICAgKiBEaXNjb25uZWN0IGZyb20gYSBCbHVldG9vdGggTEUgZGV2aWNlLlxuICAgKiAgICAgICAgICAgICAgTm90ZTogSXQncyBzaW1wbGVyIHRvIGp1c3QgY2FsbCBjbG9zZSgpLiBTdGFydGluZyB3aXRoIGlPUyAxMCwgZGlzY29ubmVjdGluZyBiZWZvcmUgY2xvc2luZyBzZWVtcyByZXF1aXJlZCFcbiAgICogQHBhcmFtIHt7YWRkcmVzczogc3RyaW5nfX0gcGFyYW1zIFRoZSBhZGRyZXNzL2lkZW50aWZpZXJcbiAgICogQHJldHVybnMge1Byb21pc2U8RGV2aWNlSW5mbz59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBkaXNjb25uZWN0KHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmcgfSk6IFByb21pc2U8RGV2aWNlSW5mbz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBjbG9zZVxuICAgKiBDbG9zZS9kaXNwb3NlIGEgQmx1ZXRvb3RoIExFIGRldmljZS5cbiAgICogUHJpb3IgdG8gMi43LjAsIHlvdSBuZWVkZWQgdG8gZGlzY29ubmVjdCB0byB0aGUgZGV2aWNlIGJlZm9yZSBjbG9zaW5nLCBidXQgdGhpcyBpcyBubyBsb25nZXIgdGhlIGNhc2UuXG4gICAqIFN0YXJ0aW5nIHdpdGggaU9TIDEwLCBkaXNjb25uZWN0aW5nIGJlZm9yZSBjbG9zaW5nIHNlZW1zIHJlcXVpcmVkIVxuICAgKiBAcGFyYW0ge3sgYWRkcmVzczogc3RyaW5nIH19IHBhcmFtcyBUaGUgYWRkcmVzcy9pZGVudGlmaWVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERldmljZUluZm8+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgY2xvc2UocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZyB9KTogUHJvbWlzZTxEZXZpY2VJbmZvPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2NvdmVyXG4gICAqIERpc2NvdmVyIGFsbCB0aGUgZGV2aWNlcyBzZXJ2aWNlcywgY2hhcmFjdGVyaXN0aWNzIGFuZCBkZXNjcmlwdG9ycy5cbiAgICogRG9lc24ndCBuZWVkIHRvIGJlIGNhbGxlZCBhZ2FpbiBhZnRlciBkaXNjb25uZWN0aW5nIGFuZCB0aGVuIHJlY29ubmVjdGluZy5cbiAgICogSWYgdXNpbmcgaU9TLCB5b3Ugc2hvdWxkbid0IHVzZSBkaXNjb3ZlciBhbmQgc2VydmljZXMvY2hhcmFjdGVyaXN0aWNzL2Rlc2NyaXB0b3JzIG9uIHRoZSBzYW1lIGRldmljZS5cbiAgICogVGhlcmUgc2VlbXMgdG8gYmUgYW4gaXNzdWUgd2l0aCBjYWxsaW5nIGRpc2NvdmVyIG9uIGlPUzggZGV2aWNlcywgc28gdXNlIHdpdGggY2F1dGlvbi5cbiAgICogT24gc29tZSBBbmRyb2lkIHZlcnNpb25zLCB0aGUgZGlzY292ZXJlZCBzZXJ2aWNlcyBtYXkgYmUgY2FjaGVkIGZvciBhIGRldmljZS5cbiAgICogU3Vic2VxdWVudCBkaXNjb3ZlciBldmVudHMgd2lsbCBtYWtlIHVzZSBvZiB0aGlzIGNhY2hlLlxuICAgKiBJZiB5b3VyIGRldmljZSdzIHNlcnZpY2VzIGNoYW5nZSwgc2V0IHRoZSBjbGVhckNhY2hlIHBhcmFtZXRlciB0byBmb3JjZSBBbmRyb2lkIHRvIHJlLWRpc2NvdmVyIHNlcnZpY2VzLlxuICAgKiBAcGFyYW0ge3sgYWRkcmVzczogc3RyaW5nLCBjbGVhckNhY2hlOiBib29sZWFuIH19IHBhcmFtcyBUaGUgYWRkcmVzcy9pZGVudGlmaWVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERldmljZT59XG4gICAqICAgIHN1Y2Nlc3M6IGRldmljZSBvYmplY3QgKGNvbnRhaW5zIGFycmF5IG9mIHNlcnZpY2Ugb2JqZWN0cylcbiAgICogICAgZXJyb3I6IFRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgdHJpZ2dlcmVkIHdoZW4gdGhlIHVuYm9uZCBvcGVyYXRpb24gZmFpbHNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGRpc2NvdmVyKHBhcmFtczoge1xuICAgIGFkZHJlc3M6IHN0cmluZztcbiAgICBjbGVhckNhY2hlPzogYm9vbGVhbjtcbiAgfSk6IFByb21pc2U8RGV2aWNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNlcnZpY2VzIChpT1MpXG4gICAqIERpc2NvdmVyIHRoZSBkZXZpY2UncyBzZXJ2aWNlcy5cbiAgICogTm90IHByb3ZpZGluZyBhbiBhcnJheSBvZiBzZXJ2aWNlcyB3aWxsIHJldHVybiBhbGwgc2VydmljZXMgYW5kIHRha2UgbG9uZ2VyIHRvIGRpc2NvdmVyLiBpT1Mgc3VwcG9ydCBvbmx5LlxuICAgKiBAcGFyYW0ge3thZGRyZXNzOiBzdHJpbmcsIHNlcnZpY2VzOiBzdHJpbmdbXX19IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTZXJ2aWNlcz59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBzZXJ2aWNlcyhwYXJhbXM6IHtcbiAgICBhZGRyZXNzOiBzdHJpbmc7XG4gICAgc2VydmljZXM/OiBzdHJpbmdbXTtcbiAgfSk6IFByb21pc2U8U2VydmljZXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgY2hhcmFjdGVyaXN0aWNzIChpT1MpXG4gICAqIERpc2NvdmVyIHRoZSBzZXJ2aWNlJ3MgY2hhcmFjdGVyaXN0aWNzLlxuICAgKiBOb3QgcHJvdmlkaW5nIGFuIGFycmF5IG9mIGNoYXJhY3RlcmlzdGljcyB3aWxsIHJldHVybiBhbGwgY2hhcmFjdGVyaXN0aWNzIGFuZCB0YWtlIGxvbmdlciB0byBkaXNjb3Zlci4gaU9TIHN1cHBvcnQgb25seS5cbiAgICogQHBhcmFtIHtDaGFyYWN0ZXJpc3RpY1BhcmFtc30gcGFyYW1zIENoYXJhY3RlcmlzdGljIHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IGNoYXJhY3RlcmlzdGljczogQ2hhcmFjdGVyaXN0aWNzIH0+fSBUaGUgc2VydmljZSBpZCBhbmQgYW4gQXJyYXkgb2YgY2hhcmFjdGVyaXN0aWNzXG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBjaGFyYWN0ZXJpc3RpY3MoXG4gICAgcGFyYW1zOiBDaGFyYWN0ZXJpc3RpY1BhcmFtc1xuICApOiBQcm9taXNlPHsgY2hhcmFjdGVyaXN0aWNzOiBDaGFyYWN0ZXJpc3RpY3MgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkZXNjcmlwdG9ycyAoaU9TKVxuICAgKiBEaXNjb3ZlciB0aGUgY2hhcmFjdGVyaXN0aWMncyBkZXNjcmlwdG9ycy4gaU9TIHN1cHBvcnQgb25seS5cbiAgICogQHBhcmFtIHtEZXNjcmlwdG9yUGFyYW1zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBkZXNjcmlwdG9yczogRGVzY3JpcHRvcnMgfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBkZXNjcmlwdG9ycyhwYXJhbXM6IERlc2NyaXB0b3JQYXJhbXMpOiBQcm9taXNlPHsgZGVzY3JpcHRvcnM6IERlc2NyaXB0b3JzIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgcmVhZFxuICAgKiBSZWFkIGEgcGFydGljdWxhciBzZXJ2aWNlJ3MgY2hhcmFjdGVyaXN0aWMgb25jZVxuICAgKiBAcGFyYW0ge0Rlc2NyaXB0b3JQYXJhbXN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVhZChwYXJhbXM6IERlc2NyaXB0b3JQYXJhbXMpOiBQcm9taXNlPE9wZXJhdGlvblJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdWJzY3JpYmVcbiAgICogU3Vic2NyaWJlIHRvIGEgcGFydGljdWxhciBzZXJ2aWNlJ3MgY2hhcmFjdGVyaXN0aWMuXG4gICAqIE9uY2UgYSBzdWJzY3JpcHRpb24gaXMgbm8gbG9uZ2VyIG5lZWRlZCwgZXhlY3V0ZSB1bnN1YnNjcmliZSBpbiBhIHNpbWlsYXIgZmFzaGlvbi5cbiAgICogVGhlIENsaWVudCBDb25maWd1cmF0aW9uIGRlc2NyaXB0b3Igd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHdyaXR0ZW4gdG8gZW5hYmxlIG5vdGlmaWNhdGlvbi9pbmRpY2F0aW9uIGJhc2VkIG9uIHRoZSBjaGFyYWN0ZXJpc3RpYydzIHByb3BlcnRpZXMuXG4gICAqIEBwYXJhbSB7RGVzY3JpcHRvclBhcmFtc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPE9wZXJhdGlvblJlc3VsdD59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJywgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICBzdWJzY3JpYmUocGFyYW1zOiBEZXNjcmlwdG9yUGFyYW1zKTogT2JzZXJ2YWJsZTxPcGVyYXRpb25SZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgdW5zdWJzY3JpYmVcbiAgICogVW5zdWJzY3JpYmUgdG8gYSBwYXJ0aWN1bGFyIHNlcnZpY2UncyBjaGFyYWN0ZXJpc3RpYy5cbiAgICogQHBhcmFtIHtEZXNjcmlwdG9yUGFyYW1zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8VW5zdWJzY3JpYmVSZXN1bHQ+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgdW5zdWJzY3JpYmUocGFyYW1zOiBEZXNjcmlwdG9yUGFyYW1zKTogUHJvbWlzZTxVbnN1YnNjcmliZVJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSB3cml0ZSAobGltaXRhdGlvbiBvbiBpT1MsIHJlYWQgYmVsb3cpXG4gICAqIFdyaXRlIGEgcGFydGljdWxhciBzZXJ2aWNlJ3MgY2hhcmFjdGVyaXN0aWNcbiAgICogTm90ZTogbm8gY2FsbGJhY2sgd2lsbCBvY2N1ciBvbiB3cml0ZSB3aXRob3V0IHJlc3BvbnNlIG9uIGlPUy5cbiAgICogQHBhcmFtIHtXcml0ZUNoYXJhY3RlcmlzdGljUGFyYW1zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8T3BlcmF0aW9uUmVzdWx0Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHdyaXRlKHBhcmFtczogV3JpdGVDaGFyYWN0ZXJpc3RpY1BhcmFtcyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHdyaXRlIChsaW1pdGF0aW9uIG9uIGlPUywgcmVhZCBiZWxvdylcbiAgICogV3JpdGUgUXVpY2sgLyBRdWV1ZSwgdXNlIHRoaXMgbWV0aG9kIHRvIHF1aWNrbHkgZXhlY3V0ZSB3cml0ZSB3aXRob3V0IHJlc3BvbnNlIGNvbW1hbmRzIHdoZW4gd3JpdGluZyBtb3JlIHRoYW4gMjAgYnl0ZXMgYXQgYSB0aW1lLlxuICAgKiBOb3RlOiBubyBjYWxsYmFjayB3aWxsIG9jY3VyIG9uIHdyaXRlIHdpdGhvdXQgcmVzcG9uc2Ugb24gaU9TLlxuICAgKiBAcGFyYW0ge1dyaXRlQ2hhcmFjdGVyaXN0aWNQYXJhbXN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPcGVyYXRpb25SZXN1bHQ+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgd3JpdGVRKHBhcmFtczogV3JpdGVDaGFyYWN0ZXJpc3RpY1BhcmFtcyk6IFByb21pc2U8T3BlcmF0aW9uUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlYWREZXNjcmlwdG9yXG4gICAqIFJlYWQgYSBwYXJ0aWN1bGFyIGNoYXJhY3RlcmlzdCdzIGRlc2NyaXB0b3JcbiAgICogQHBhcmFtIHtPcGVyYXRpb25EZXNjcmlwdG9yUGFyYW1zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8RGVzY3JpcHRvclJlc3VsdD59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZWFkRGVzY3JpcHRvcihwYXJhbXM6IE9wZXJhdGlvbkRlc2NyaXB0b3JQYXJhbXMpOiBQcm9taXNlPERlc2NyaXB0b3JSZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgd3JpdGVEZXNjcmlwdG9yXG4gICAqIFdyaXRlIGEgcGFydGljdWxhciBjaGFyYWN0ZXJpc3RpYydzIGRlc2NyaXB0b3IuIFVuYWJsZSB0byB3cml0ZSBjaGFyYWN0ZXJpc3RpYyBjb25maWd1cmF0aW9uIGRpcmVjdGx5IHRvIGtlZXAgaW4gbGluZSB3aXRoIGlPUyBpbXBsZW1lbnRhdGlvbi5cbiAgICogSW5zdGVhZCB1c2Ugc3Vic2NyaWJlL3Vuc3Vic2NyaWJlLCB3aGljaCB3aWxsIGF1dG9tYXRpY2FsbHkgZW5hYmxlL2Rpc2FibGUgbm90aWZpY2F0aW9uLlxuICAgKiBAcGFyYW0ge1dyaXRlRGVzY3JpcHRvclBhcmFtc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERlc2NyaXB0b3JSZXN1bHQ+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgd3JpdGVEZXNjcmlwdG9yKHBhcmFtczogV3JpdGVEZXNjcmlwdG9yUGFyYW1zKTogUHJvbWlzZTxEZXNjcmlwdG9yUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJzc2lcbiAgICogUmVhZCBSU1NJIG9mIGEgY29ubmVjdGVkIGRldmljZS4gUlNTSSBpcyBhbHNvIHJldHVybmVkIHdpdGggc2Nhbm5pbmcuXG4gICAqIEBwYXJhbSB7eyBhZGRyZXNzOiBzdHJpbmcgfX0gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPCBSU1NJID59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByc3NpKHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmcgfSk6IFByb21pc2U8IFJTU0kgPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG10dSAoQW5kcm9pZCwgQW5kcm9pZCA1KylcbiAgICogU2V0IE1UVSBvZiBhIGNvbm5lY3RlZCBkZXZpY2UuIEFuZHJvaWQgb25seS5cbiAgICogQHBhcmFtIHt7IGFkZHJlc3M6IHN0cmluZywgbXR1OiBudW1iZXIgfX0gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPCBNVFUgPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIG10dShwYXJhbXM6IHsgYWRkcmVzczogc3RyaW5nOyBtdHU/OiBudW1iZXIgfSk6IFByb21pc2U8IE1UVSA+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgcmVxdWVzdENvbm5lY3Rpb25Qcmlvcml0eSAoQW5kcm9pZCwgQW5kcm9pZCA1KylcbiAgICogUmVxdWVzdCBhIGNoYW5nZSBpbiB0aGUgY29ubmVjdGlvbiBwcmlvcml0eSB0byBpbXByb3ZlIHRocm91Z2hwdXQgd2hlbiB0cmFuc2ZlciBsYXJnZSBhbW91bnRzIG9mIGRhdGEgdmlhIEJMRS5cbiAgICogQW5kcm9pZCBzdXBwb3J0IG9ubHkuIGlPUyB3aWxsIHJldHVybiBlcnJvci5cbiAgICogQHBhcmFtIHt7IGFkZHJlc3M6IHN0cmluZywgY29ubmVjdGlvblByaW9yaXR5OiBDb25uZWN0aW9uUHJpb3JpdHkgfX0gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERldmljZUluZm8+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVxdWVzdENvbm5lY3Rpb25Qcmlvcml0eShwYXJhbXM6IHtcbiAgICBhZGRyZXNzOiBzdHJpbmc7XG4gICAgY29ubmVjdGlvblByaW9yaXR5OiBDb25uZWN0aW9uUHJpb3JpdHk7XG4gIH0pOiBQcm9taXNlPERldmljZUluZm8+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaXNJbml0aWFsaXplZFxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgYWRhcHRlciBpcyBpbml0aWFsaXplZC4gTm8gZXJyb3IgY2FsbGJhY2suIFJldHVybnMgdHJ1ZSBvciBmYWxzZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICBpc0luaXRpYWxpemVkKCk6IFByb21pc2U8eyBpc0luaXRpYWxpemVkOiBib29sZWFuIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaXNFbmFibGVkXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBhZGFwdGVyIGlzIGVuYWJsZWQuIE5vIGVycm9yIGNhbGxiYWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgaXNFbmFibGVkOiBib29sZWFuIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgaXNFbmFibGVkKCk6IFByb21pc2U8eyBpc0VuYWJsZWQ6IGJvb2xlYW4gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc1NjYW5uaW5nXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBhZGFwdGVyIGlzIHNjYW5uaW5nLiBObyBlcnJvciBjYWxsYmFjay4gUmV0dXJucyB0cnVlIG9yIGZhbHNlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgaXNTY2FubmluZzogYm9vbGVhbiB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGlzU2Nhbm5pbmcoKTogUHJvbWlzZTx7IGlzU2Nhbm5pbmc6IGJvb2xlYW4gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0JvbmRlZCAoQW5kcm9pZClcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGRldmljZSBpcyBib25kZWQgb3Igbm90LCBvciBlcnJvciBpZiBub3QgaW5pdGlhbGl6ZWQuIEFuZHJvaWQgc3VwcG9ydCBvbmx5LlxuICAgKiBAcGFyYW0ge3sgYWRkcmVzczogc3RyaW5nIH19IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxCb25kZWRTdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgaXNCb25kZWQocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZyB9KTogUHJvbWlzZTxCb25kZWRTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgd2FzQ29ubmVjdGVkXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBkZXZpY2Ugd2FzIGNvbm5lY3RlZCwgb3IgZXJyb3IgaWYgbm90IGluaXRpYWxpemVkLlxuICAgKiBAcGFyYW0ge3sgYWRkcmVzczogc3RyaW5nIH19IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxQcmV2Q29ubmVjdGlvblN0YXR1cz59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICB3YXNDb25uZWN0ZWQocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZyB9KTogUHJvbWlzZTxQcmV2Q29ubmVjdGlvblN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0Nvbm5lY3RlZFxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZGV2aWNlIGlzIGNvbm5lY3RlZCwgb3IgZXJyb3IgaWYgbm90IGluaXRpYWxpemVkIG9yIG5ldmVyIGNvbm5lY3RlZCB0byBkZXZpY2VcbiAgICogQHBhcmFtIHt7IGFkZHJlc3M6IHN0cmluZyB9fSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8Q3VyckNvbm5lY3Rpb25TdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgaXNDb25uZWN0ZWQocGFyYW1zOiB7IGFkZHJlc3M6IHN0cmluZyB9KTogUHJvbWlzZTxDdXJyQ29ubmVjdGlvblN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0Rpc2NvdmVyZWRcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGRldmljZSdzIGNoYXJhY3RlcmlzdGljcyBhbmQgZGVzY3JpcHRvcnMgaGF2ZSBiZWVuIGRpc2NvdmVyZWQsIG9yIGVycm9yIGlmIG5vdCBpbml0aWFsaXplZCBvciBub3QgY29ubmVjdGVkIHRvIGRldmljZS5cbiAgICogQHBhcmFtIHt7IGFkZHJlc3M6IHN0cmluZyB9fSBwYXJhbXNcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlzY292ZXJTdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgaXNEaXNjb3ZlcmVkKHBhcmFtczogeyBhZGRyZXNzOiBzdHJpbmcgfSk6IFByb21pc2U8RGlzY292ZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaGFzUGVybWlzc2lvbiAodXNlZnVsIG9ubHkgZm9yIEFuZHJvaWQgNisgLyBBUEkgMjMpXG4gICAqIERldGVybWluZSB3aGV0aGVyIGNvYXJzZSBsb2NhdGlvbiBwcml2aWxlZ2VzIGFyZSBncmFudGVkIHNpbmNlIHNjYW5uaW5nIGZvciB1bnBhaXJlZCBkZXZpY2VzIHJlcXVpcmVzIGl0IGluIEFuZHJvaWQgQVBJIDIzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgaGFzUGVybWlzc2lvbjogYm9vbGVhbiB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTx7IGhhc1Blcm1pc3Npb246IGJvb2xlYW4gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByZXF1ZXN0UGVybWlzc2lvbiAodXNlZnVsIG9ubHkgZm9yIEFuZHJvaWQgNisgLyBBUEkgMjMpXG4gICAqIFJlcXVlc3QgY29hcnNlIGxvY2F0aW9uIHByaXZpbGVnZXMgc2luY2Ugc2Nhbm5pbmcgZm9yIHVucGFpcmVkIGRldmljZXMgcmVxdWlyZXMgaXQgaW4gQW5kcm9pZCBBUEkgMjMuXG4gICAqIFdpbGwgcmV0dXJuIGFuIGVycm9yIGlmIGNhbGxlZCBvbiBpT1Mgb3IgQW5kcm9pZCB2ZXJzaW9ucyBwcmlvciB0byA2LjAuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgcmVxdWVzdFBlcm1pc3Npb246IGJvb2xlYW4gfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPHsgcmVxdWVzdFBlcm1pc3Npb246IGJvb2xlYW4gfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0xvY2F0aW9uRW5hYmxlZCAodXNlZnVsIG9ubHkgZm9yIEFuZHJvaWQgNisgLyBBUEkgMjMpXG4gICAqIERldGVybWluZSBpZiBsb2NhdGlvbiBzZXJ2aWNlcyBhcmUgZW5hYmxlZCBvciBub3QuIExvY2F0aW9uIFNlcnZpY2VzIGFyZSByZXF1aXJlZCB0byBmaW5kIGRldmljZXMgaW4gQW5kcm9pZCBBUEkgMjNcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBpc0xvY2F0aW9uRW5hYmxlZDogYm9vbGVhbiB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGlzTG9jYXRpb25FbmFibGVkKCk6IFByb21pc2U8eyBpc0xvY2F0aW9uRW5hYmxlZDogYm9vbGVhbiB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlcXVlc3RMb2NhdGlvbiAodXNlZnVsIG9ubHkgZm9yIEFuZHJvaWQgNisgLyBBUEkgMjMpXG4gICAqIFByb21wdCBsb2NhdGlvbiBzZXJ2aWNlcyBzZXR0aW5ncyBwYWdlcy4gcmVxdWVzdExvY2F0aW9uIHByb3BlcnR5IHJldHVybnMgd2hldGhlciBsb2NhdGlvbiBzZXJ2aWNlcyBhcmUgZW5hYmxlZCBvciBkaXNhYmxlZC5cbiAgICogTG9jYXRpb24gU2VydmljZXMgYXJlIHJlcXVpcmVkIHRvIGZpbmQgZGV2aWNlcyBpbiBBbmRyb2lkIEFQSSAyMy5cbiAgICogQHJldHVybnMge1Byb21pc2U8eyByZXF1ZXN0TG9jYXRpb246IGJvb2xlYW4gfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZXF1ZXN0TG9jYXRpb24oKTogUHJvbWlzZTx7IHJlcXVlc3RMb2NhdGlvbjogYm9vbGVhbiB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGluaXRpYWxpemVQZXJpcGhlcmFsXG4gICAqIEluaXRpYWxpemUgQmx1ZXRvb3RoIG9uIHRoZSBkZXZpY2UuIE11c3QgYmUgY2FsbGVkIGJlZm9yZSBhbnl0aGluZyBlbHNlLlxuICAgKiBDYWxsYmFjayB3aWxsIGNvbnRpbnVvdXNseSBiZSB1c2VkIHdoZW5ldmVyIEJsdWV0b290aCBpcyBlbmFibGVkIG9yIGRpc2FibGVkLlxuICAgKiBAcGFyYW0ge0luaXRQZXJpcGhlcmFsUGFyYW1zfSBbcGFyYW1zXVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxJbml0aWFsaXplUmVzdWx0Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLCBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIGluaXRpYWxpemVQZXJpcGhlcmFsKFxuICAgIHBhcmFtcz86IEluaXRQZXJpcGhlcmFsUGFyYW1zXG4gICk6IE9ic2VydmFibGU8SW5pdGlhbGl6ZVJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBhZGRTZXJ2aWNlXG4gICAqIEFkZCBhIHNlcnZpY2Ugd2l0aCBjaGFyYWN0ZXJpc3RpY3MgYW5kIGRlc2NyaXB0b3JzLiBJZiBtb3JlIHRoYW4gb25lIHNlcnZpY2UgaXMgYWRkZWQsIGFkZCB0aGVtIHNlcXVlbnRpYWxseVxuICAgKiBAcGFyYW0ge3sgc2VydmljZTogc3RyaW5nLCBjaGFyYWN0ZXJpc3RpY3M6IENoYXJhY3RlcmlzdGljW10gfX0gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgc2VydmljZTogc3RyaW5nLCBzdGF0dXM6IFN0YXR1cyB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGFkZFNlcnZpY2UocGFyYW1zOiB7XG4gICAgc2VydmljZTogc3RyaW5nO1xuICAgIGNoYXJhY3RlcmlzdGljczogQ2hhcmFjdGVyaXN0aWNbXTtcbiAgfSk6IFByb21pc2U8eyBzZXJ2aWNlOiBzdHJpbmc7IHN0YXR1czogU3RhdHVzIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgcmVtb3ZlU2VydmljZVxuICAgKiBSZW1vdmUgYSBzZXJ2aWNlXG4gICAqIEBwYXJhbSB7eyBzZXJ2aWNlOiBzdHJpbmcgfX0gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgc2VydmljZTogc3RyaW5nLCBzdGF0dXM6IFN0YXR1cyB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHJlbW92ZVNlcnZpY2UocGFyYW1zOiB7XG4gICAgc2VydmljZTogc3RyaW5nO1xuICB9KTogUHJvbWlzZTx7IHNlcnZpY2U6IHN0cmluZzsgc3RhdHVzOiBTdGF0dXMgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSByZW1vdmVBbGxTZXJ2aWNlc1xuICAgKiBSZW1vdmUgYWxsIHNlcnZpY2VzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXMgfT59XG4gICAqL1xuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxuICByZW1vdmVBbGxTZXJ2aWNlcygpOiBQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXMgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdGFydEFkdmVydGlzaW5nIChkaWZmZXJlbnQgYmVoYXZpb3Igb24gQW5kcm9pZC9pT1MsIHJlYWQgYmVsb3cpXG4gICAqIFN0YXJ0IGFkdmVydGlzaW5nIGFzIGEgQkxFIGRldmljZS5cbiAgICogTm90ZTogVGhpcyBuZWVkcyB0byBiZSBpbXByb3ZlZCBzbyBzZXJ2aWNlcyBjYW4gYmUgdXNlZCBmb3IgYm90aCBBbmRyb2lkIGFuZCBpT1MuXG4gICAqIE9uIGlPUywgdGhlIGFkdmVydGlzaW5nIGRldmljZXMgbGlrZXMgdG8gcmVuYW1lIGl0c2VsZiBiYWNrIHRvIHRoZSBuYW1lIG9mIHRoZSBkZXZpY2UsIGkuZS4gUmFuZCcgaVBob25lXG4gICAqIEBwYXJhbSB7QWR2ZXJ0aXNpbmdQYXJhbXN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHN0YXR1czogU3RhdHVzIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgc3RhcnRBZHZlcnRpc2luZyhwYXJhbXM6IEFkdmVydGlzaW5nUGFyYW1zKTogUHJvbWlzZTx7IHN0YXR1czogU3RhdHVzIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc3RvcEFkdmVydGlzaW5nXG4gICAqIFN0b3AgYWR2ZXJ0aXNpbmdcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBzdGF0dXM6IFN0YXR1cyB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIHN0b3BBZHZlcnRpc2luZygpOiBQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXMgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0FkdmVydGlzaW5nXG4gICAqIERldGVybWluZSBpZiBhcHAgaXMgYWR2ZXJ0aXNpbmcgb3Igbm90LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHN0YXR1czogYm9vbGVhbiB9Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXG4gIGlzQWR2ZXJ0aXNpbmcoKTogUHJvbWlzZTx7IHN0YXR1czogYm9vbGVhbiB9PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlc3BvbmRcbiAgICogUmVzcG9uZCB0byBhIHJlYWQgb3Igd3JpdGUgcmVxdWVzdFxuICAgKiBAcGFyYW0ge1Jlc3BvbmRQYXJhbXN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHN0YXR1czogU3RhdHVzIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgcmVzcG9uZChwYXJhbXM6IFJlc3BvbmRQYXJhbXMpOiBQcm9taXNlPHsgc3RhdHVzOiBTdGF0dXMgfT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBub3RpZnlcbiAgICogVXBkYXRlIGEgdmFsdWUgZm9yIGEgc3Vic2NyaXB0aW9uLiBDdXJyZW50bHkgYWxsIHN1YnNjcmliZWQgZGV2aWNlcyB3aWxsIHJlY2VpdmUgdXBkYXRlLlxuICAgKiBEZXZpY2Ugc3BlY2lmaWMgdXBkYXRlcyB3aWxsIGJlIGFkZGVkIGluIHRoZSBmdXR1cmUuXG4gICAqIElmIHNlbnQgZXF1YWxzIGZhbHNlIGluIHRoZSByZXR1cm4gdmFsdWUsIHlvdSBtdXN0IHdhaXQgZm9yIHRoZSBwZXJpcGhlcmFsTWFuYWdlcklzUmVhZHlUb1VwZGF0ZVN1YnNjcmliZXJzIGV2ZW50IGJlZm9yZSBzZW5kaW5nIG1vcmUgdXBkYXRlcy5cbiAgICogQHBhcmFtIHtOb3RpZnlQYXJhbXN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHN0YXR1czogU3RhdHVzLCBzZW50OiBib29sZWFuIH0+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcbiAgbm90aWZ5KHBhcmFtczogTm90aWZ5UGFyYW1zKTogUHJvbWlzZTx7IHN0YXR1czogU3RhdHVzOyBzZW50OiBib29sZWFuIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZW5jb2RlZFN0cmluZ1RvQnl0ZXNcbiAgICogSGVscGVyIGZ1bmN0aW9uIHRvIGNvbnZlcnQgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgZnJvbSBhIGNoYXJhY3RlcmlzdGljIG9yIGRlc2NyaXB0b3IgdmFsdWUgaW50byBhIHVpbnQ4QXJyYXkgb2JqZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge1VpbnQ4QXJyYXl9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZW5jb2RlZFN0cmluZ1RvQnl0ZXModmFsdWU6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBieXRlc1RvRW5jb2RlZFN0cmluZ1xuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBhIHVuaXQ4QXJyYXkgdG8gYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgZm9yIGEgY2hhcmFjdGVyaWMgb3IgZGVzY3JpcHRvciB3cml0ZVxuICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ5dGVzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgYnl0ZXNUb0VuY29kZWRTdHJpbmcodmFsdWU6IFVpbnQ4QXJyYXkpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdHJpbmdUb0J5dGVzXG4gICAqIEhlbHBlciBmdW5jdGlvbiB0byBjb252ZXJ0IGEgc3RyaW5nIHRvIGJ5dGVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7VWludDhBcnJheX1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdHJpbmdUb0J5dGVzKHZhbHVlOiBzdHJpbmcpOiBVaW50OEFycmF5IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgYnl0ZXNUb1N0cmluZ1xuICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gY29udmVydCBieXRlcyB0byBhIHN0cmluZy5cbiAgICogQHBhcmFtIHtVaW50OEFycmF5fSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGJ5dGVzVG9TdHJpbmcodmFsdWU6IFVpbnQ4QXJyYXkpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBTQ0FOX01PREVfT1BQT1JUVU5JU1RJQzogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgU0NBTl9NT0RFX0xPV19QT1dFUjogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgU0NBTl9NT0RFX0JBTEFOQ0VEOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBTQ0FOX01PREVfTE9XX0xBVEVOQ1k6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIE1BVENIX01PREVfQUdHUkVTU0lWRTogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgTUFUQ0hfTU9ERV9TVElDS1k6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIE1BVENIX05VTV9PTkVfQURWRVJUSVNFTUVOVDogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgTUFUQ0hfTlVNX0ZFV19BRFZFUlRJU0VNRU5UOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBNQVRDSF9OVU1fTUFYX0FEVkVSVElTRU1FTlQ6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIENBTExCQUNLX1RZUEVfQUxMX01BVENIRVM6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIENBTExCQUNLX1RZUEVfRklSU1RfTUFUQ0g6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIENBTExCQUNLX1RZUEVfTUFUQ0hfTE9TVDogbnVtYmVyO1xufVxuIl19

/***/ }),

/***/ "./src/app/components/filter/filter.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/filter/filter.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid fixed>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item>\n        <ion-label>Autores</ion-label>\n        <ion-select multiple=\"true\" [(ngModel)]=\"autoresSelected\" cancelText=\"Cancelar\" okText=\"OK\">\n          <div *ngFor=\"let autor of autores\">\n            <ion-select-option value=\"{{autor}}\">{{autor}}</ion-select-option>\n          </div>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item>\n        <ion-label>Rating</ion-label>\n        <ion-select multiple=\"true\" [(ngModel)]=\"rating\" cancelText=\"Cancelar\" okText=\"OK\">\n          <ion-select-option value=\"5\">5</ion-select-option>\n          <ion-select-option value=\"4\">4</ion-select-option>\n          <ion-select-option value=\"3\">3</ion-select-option>\n          <ion-select-option value=\"2\">2</ion-select-option>\n          <ion-select-option value=\"1\">1</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"ion-no-margin\">\n    <ion-col size=\"6\">\n      <ion-item>\n        <ion-label>MyVisit</ion-label>\n        <ion-toggle [(ngModel)]=\"myvisit\" color=\"vermelho\"></ion-toggle>\n      </ion-item>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-item>\n        <ion-label>Vistas</ion-label>\n        <ion-toggle [(ngModel)]=\"vistas\" color=\"vermelho\"></ion-toggle>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\"></ion-col>\n    <ion-col size=\"4\">\n      <ion-button (click)=\"ok()\" color=\"vermelho\">\n        Filtrar\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"4\"></ion-col>\n  </ion-row>\n</ion-grid>"

/***/ }),

/***/ "./src/app/components/filter/filter.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/filter/filter.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/filter/filter.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/filter/filter.component.ts ***!
  \*******************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_pecasdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/pecasdata.service */ "./src/app/api/pecasdata.service.ts");



var FilterComponent = /** @class */ (function () {
    function FilterComponent(peca) {
        var _this = this;
        this.parameFiltro = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.esconder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rating = [];
        this.autores = [];
        this.autoresSelected = [];
        this.myvisit = false;
        this.vistas = false;
        peca.getPecas().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.autores.push(data[i].Autor);
            }
        });
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.myvisit = false;
        this.vistas = false;
        this.autoresSelected = [];
        this.rating = [];
    };
    FilterComponent.prototype.ok = function () {
        var filtros = [{
                MyVisit: this.myvisit,
                Vistas: this.vistas,
                Autores: this.autoresSelected,
                Ratings: this.rating
            }];
        this.parameFiltro.emit(filtros);
        this.esconder.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilterComponent.prototype, "parameFiltro", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilterComponent.prototype, "esconder", void 0);
    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/components/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/app/components/filter/filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_pecasdata_service__WEBPACK_IMPORTED_MODULE_2__["PecasdataService"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/components/pecas/pecas.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/pecas/pecas.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "./src/app/components/pecas/pecas.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/pecas/pecas.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expand-wrapper {\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto; }\n\n.collapsed {\n  max-height: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JmbG9rYS9EZXNrdG9wL1Byb2plY3RzLzYtMDUvTXVzZXVBcHAvc3JjL2FwcC9jb21wb25lbnRzL3BlY2FzL3BlY2FzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUNBQXVDO0VBQ3ZDLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BlY2FzL3BlY2FzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuZC13cmFwcGVyIHtcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jb2xsYXBzZWQge1xuICAgIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/pecas/pecas.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/pecas/pecas.component.ts ***!
  \*****************************************************/
/*! exports provided: PecasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PecasComponent", function() { return PecasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PecasComponent = /** @class */ (function () {
    function PecasComponent(renderer) {
        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = '150px';
    }
    PecasComponent.prototype.ngOnInit = function () {
        this.renderer.setStyle(this.expandWrapper.nativeElement, 'max-height', this.expandHeight);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('expandWrapper', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PecasComponent.prototype, "expandWrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('expanded'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PecasComponent.prototype, "expanded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('expandHeight'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PecasComponent.prototype, "expandHeight", void 0);
    PecasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pecas',
            template: __webpack_require__(/*! ./pecas.component.html */ "./src/app/components/pecas/pecas.component.html"),
            styles: [__webpack_require__(/*! ./pecas.component.scss */ "./src/app/components/pecas/pecas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], PecasComponent);
    return PecasComponent;
}());



/***/ }),

/***/ "./src/app/components/sharedpecas.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/sharedpecas.module.ts ***!
  \**************************************************/
/*! exports provided: SharedpecasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedpecasModule", function() { return SharedpecasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pecas_pecas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pecas/pecas.component */ "./src/app/components/pecas/pecas.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var SharedpecasModule = /** @class */ (function () {
    function SharedpecasModule() {
    }
    SharedpecasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pecas_pecas_component__WEBPACK_IMPORTED_MODULE_3__["PecasComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
            exports: [_pecas_pecas_component__WEBPACK_IMPORTED_MODULE_3__["PecasComponent"]]
        })
    ], SharedpecasModule);
    return SharedpecasModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _components_sharedpecas_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sharedpecas.module */ "./src/app/components/sharedpecas.module.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");
/* harmony import */ var _ionic_native_bluetooth_le_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/bluetooth-le/ngx */ "./node_modules/@ionic-native/bluetooth-le/ngx/index.js");










var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ]),
                _components_sharedpecas_module__WEBPACK_IMPORTED_MODULE_7__["SharedpecasModule"]
            ],
            providers: [
                _ionic_native_bluetooth_le_ngx__WEBPACK_IMPORTED_MODULE_9__["BluetoothLE"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__["FilterComponent"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div [hidden]=\"esconder\" >\n    <div style=\"position: fixed;z-index:3;width: 100%;background-color:#ffff;\">\n      <app-filter (parameFiltro)=\"receberfiltros($event)\" (esconder)=\"change($event)\"></app-filter>\n    </div>\n    <div (click)=\"change()\"\n      style=\"position: fixed;width:100%;z-index:2;height: 100vh;background: rgba(0, 0, 0, 0.5);\"></div>\n  </div>\n  <div *ngIf=\"pecas;else empty\">\n    <div class=\"linha\"></div>\n    <ion-list>\n      <div (click)=\"expandPeca(peca)\" *ngFor=\"let peca of pecas; index as i\">\n        <div *ngIf=\"peca.filtra; else normal\">\n          <ion-item no-lines>\n            <ion-thumbnail slot=\"start\">\n              <ion-img style=\"border-radius: 50%;border: 3px solid #CCC5B9;margin-bottom: 30px;filter: blur(1px);\"\n                src=\"{{ peca.imagens.src }}\">\n              </ion-img>\n              <ul class=\"lista-icons\">\n                <div *ngIf=\"peca.visto\">\n                  <li>\n                    <i style=\"color:#7ba760;\" class=\"fas fa-check-square\"></i>\n                  </li>\n                </div>\n                <div *ngIf=\"peca.guardado\">\n                  <li>\n                    <i style=\"color:rgb(185, 104, 108);\" class=\"fas fa-bookmark\"></i>\n                  </li>\n                </div>\n                <div *ngIf=\"peca.audio != false\">\n                  <li><i style=\"color:#CCC5B9;\" class=\"fas fa-volume-up\"></i></li>\n                </div>\n              </ul>\n            </ion-thumbnail>\n            <ion-label style=\"margin-bottom: -9%;\">\n              <h1 style=\"color:#CCC5B9;margin-left: 15px;\">{{ peca.Title }}</h1>\n              <ul style=\"list-style-type: none;margin-left: -9%;color:rgb(243, 232, 135);\">\n                <li>\n                  <div [ngSwitch]=\"peca.rating\">\n                    <div *ngSwitchCase=\"1\">\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                    </div>\n                    <div *ngSwitchCase=\"2\">\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                    </div>\n                    <div *ngSwitchCase=\"3\">\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                    </div>\n                    <div *ngSwitchCase=\"4\">\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                    </div>\n                    <div *ngSwitchCase=\"5\">\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                    </div>\n                    <div *ngSwitchDefault>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </ion-label>\n          </ion-item>\n        </div>\n        <ng-template #normal>\n          <ion-item no-lines>\n            <ion-thumbnail slot=\"start\">\n              <ion-img style=\"border-radius: 50%;border: 3px solid #252422;margin-bottom: 30px;\"\n                src=\"{{ peca.imagens.src }}\">\n              </ion-img>\n              <ul class=\"lista-icons\">\n                <div *ngIf=\"peca.visto\">\n                  <li>\n                    <i style=\"color:#469911;\" class=\"fas fa-check-square\"></i>\n                  </li>\n                </div>\n                <div *ngIf=\"peca.guardado\">\n                  <li><i style=\"color:#E72F37;\" class=\"fas fa-bookmark\"></i></li>\n                </div>\n                <div *ngIf=\"peca.audio != false\">\n                  <li><i class=\"fas fa-volume-up\"></i></li>\n                </div>\n              </ul>\n            </ion-thumbnail>\n            <ion-label style=\"margin-bottom: -9%;\">\n              <h1 style=\"color:#252422;margin-left: 15px;\">{{ peca.Title }}</h1>\n              <ul style=\"list-style-type: none;margin-left: -9%;color:#FDE93E;\">\n                <li>\n                  <div [ngSwitch]=\"peca.rating\">\n                    <div *ngSwitchCase=\"1\">\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                    </div>\n                    <div *ngSwitchCase=\"2\">\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                    </div>\n                    <div *ngSwitchCase=\"3\">\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                    </div>\n                    <div *ngSwitchCase=\"4\">\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                    </div>\n                    <div *ngSwitchCase=\"5\">\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                      <i class=\"fas fa-star\"></i>\n                    </div>\n                    <div *ngSwitchDefault>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                      <i class=\"far fa-star\"></i>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </ion-label>\n          </ion-item>\n        </ng-template>\n        <app-pecas (click)='scan()' class=\"cont\" expandHeight=\"500px\" [expanded]=\"peca.expanded\">\n          <ion-card style=\"margin-left: 10%;overflow: block;z-index: 10;\">\n            <ion-card-header\n              style=\"border-style: solid;border-width: 5px;border-color: #252422;background-color: #FFFCF2;\">\n              <ion-img style=\"height:30vh;width:auto;display: block;margin-left: auto;margin-right: auto;\"\n                src=\"{{ peca.imagens.src }}\">\n              </ion-img>\n            </ion-card-header>\n            <ion-card-content>\n              <hr />\n              <h1>{{ i + 1 }}-{{ peca.Title }}</h1>\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div style=\"overflow: hidden;height: 40px;\">\n                    <p>{{ peca.descricao }}</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row justify-content-end\">\n                <ion-button [routerLink]=\"['/pecadetails', peca.Nid, lastpage]\" color=\"vermelho\">Ver Mais <i\n                    class=\"fas fa-angle-double-right\"></i>\n                </ion-button>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </app-pecas>\n      </div>\n    </ion-list>\n  </div>\n  <ng-template #empty>\n    <h1>Este Museu não tem Website com dados</h1>\n  </ng-template>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" style=\"position:fixed; margin-bottom: 10%;\">\n    <ion-fab-button color=\"vermelho\">\n      <i style=\"color:#FFFCF2\" class=\"fas fa-bars\"></i>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"change()\" color=\"vermelho\">\n        <i style=\"color:#FFFCF2\" class=\"fas fa-filter\"></i>\n      </ion-fab-button>\n      <ion-fab-button [routerLink]=\"['/entrar/user']\" color=\"vermelho\">\n        <i style=\"color:#FFFCF2\" class=\"fas fa-user\"></i>\n      </ion-fab-button>\n    </ion-fab-list>\n    <ion-fab-list side=\"start\">\n      <ion-fab-button (click)=\"scan()\" color=\"vermelho\">\n        <i style=\"color:#FFFCF2\" class=\"fas fa-sync-alt\"></i>\n      </ion-fab-button>\n      <ion-fab-button [routerLink]=\"['/tutorial/tab1']\" color=\"vermelho\">\n        <i style=\"color:#FFFCF2\" class=\"fas fa-question\"></i>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".linha {\n  background-color: #252422;\n  width: 5px;\n  height: 100%;\n  margin-left: 12%;\n  position: fixed; }\n\n.circle {\n  position: absolute;\n  margin-top: 50%;\n  left: 25px;\n  font-size: 25px;\n  text-align: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  color: #fff;\n  background-color: #252422;\n  z-index: 3; }\n\n.cont {\n  width: 88%;\n  float: right; }\n\n.lista-icons {\n  top: -5%;\n  left: 10%;\n  position: absolute;\n  list-style-type: none; }\n\nion-list {\n  --ion-background-color: rgba(255, 255, 255, 0); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JmbG9rYS9EZXNrdG9wL1Byb2plY3RzLzYtMDUvTXVzZXVBcHAvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFJbkI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFHekI7RUFFSSw4Q0FBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluaGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI0MjI7XG4gICAgd2lkdGg6IDVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEyJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbn1cblxuLmNpcmNsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICBsZWZ0OiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNDIyO1xuICAgIHotaW5kZXg6IDM7XG59XG5cbi5jb250IHtcbiAgICB3aWR0aDogODglO1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmxpc3RhLWljb25zIHtcbiAgICB0b3A6IC01JTtcbiAgICBsZWZ0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuaW9uLWxpc3Qge1xuXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_bluetooth_le_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/bluetooth-le/ngx */ "./node_modules/@ionic-native/bluetooth-le/ngx/index.js");
/* harmony import */ var _api_pecasdata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/pecasdata.service */ "./src/app/api/pecasdata.service.ts");
/* harmony import */ var src_app_sql_sql_peca_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sql/sql-peca-crud.service */ "./src/app/sql/sql-peca-crud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");










var HomePage = /** @class */ (function () {
    function HomePage(androidPermissions, router, plt, bluetoothle, pecasdata, toastController, sql, alertController) {
        var _this = this;
        this.androidPermissions = androidPermissions;
        this.router = router;
        this.plt = plt;
        this.bluetoothle = bluetoothle;
        this.pecasdata = pecasdata;
        this.toastController = toastController;
        this.sql = sql;
        this.alertController = alertController;
        this.esconder = true;
        this.onexpand = false;
        this.rssi = -100;
        this.beacons = [];
        this.isVisible = true;
        this.lastpage = "home";
        this.behavior = "smooth";
        this.block = "start";
        this.scrollTo = null;
        this.tempo = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(10000);
        this.plt.ready().then(function (readySource) {
            router.events.subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                    _this.ngOnInit();
                }
            });
            console.log("Platform ready from", readySource);
            _this.androidPermissions
                .checkPermission(_this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                .then(function (result) { return console.log("Has permission?", result.hasPermission); }, function (err) {
                return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION);
            });
            _this.bluetoothle
                .requestPermission()
                .then(function () {
                _this.bluetoothle.initialize().subscribe(function (ble) {
                    console.log("ble status:", ble.status); // logs 'enabled'
                    if (ble.status == 'disabled') {
                        _this.presentAlert();
                    }
                });
                _this.bluetoothle
                    .startScan(null)
                    .subscribe(function (device) { return _this.onDeviceDiscovered(device, _this.pecas); });
                setTimeout(function () {
                    _this.bluetoothle.stopScan();
                }, 3000);
            })
                .catch(function (e) {
                console.log("OLA" + e);
            });
        });
    }
    HomePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pecasdata.getPecas().subscribe(function (data) {
                            _this.pecas = data;
                            _this.pecasdata.setLocalData("pecas", data);
                            for (var i = 0; i < _this.pecas.length; i++) {
                                var rating = _this.pecas[i].rating.split("/");
                                rating = parseFloat(rating[0]);
                                rating = Math.round(rating);
                                _this.pecas[i].rating = rating;
                                _this.pecas[i].expanded = false;
                            }
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
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.scan();
        this.subscription = this.tempo.subscribe(function () { return _this.scan(); });
        this.backButtonSubscription = this.plt.backButton.subscribe(function () {
            navigator['app'].exitApp();
        });
    };
    HomePage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Alerta',
                            subHeader: 'Bluetooth Desligado',
                            message: 'Se estiver num museu com beacons ative bluetooth para ter a melhor experiência.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.scan = function () {
        var _this = this;
        this.rssi = -70;
        this.beacons = [];
        this.bluetoothle
            .startScan(null)
            .subscribe(function (device) { return _this.onDeviceDiscovered(device, _this.pecas); });
        setTimeout(function () {
            _this.bluetoothle.stopScan();
        }, 3000);
    };
    HomePage.prototype.onDeviceDiscovered = function (device, data) {
        var _this = this;
        console.log("beacon:", device);
        var peca;
        if (device.rssi > this.rssi) {
            this.rssi = device.rssi;
            for (var i = 0; i < data.length; i++) {
                if (device.address === data[i].Address) {
                    this.beacons.push(device);
                    peca = data[i];
                    console.log("beacon rssi menor:", device);
                    break;
                }
            }
            if (peca != []) {
                setTimeout(function () {
                    _this.beaconMatch(peca);
                    console.log('teste');
                }, 3100);
            }
            else {
                this.showToast('Não foram encontradas peças');
            }
        }
    };
    HomePage.prototype.beaconMatch = function (peca) {
        console.log('Pecaaa ' + peca);
        this.expandPeca(peca);
        this.scrollListVisible(this.pecas.indexOf(peca));
    };
    HomePage.prototype.expandPeca = function (peca) {
        var _this = this;
        if (peca.expanded) {
            peca.expanded = false;
            this.isVisible = true;
            this.onexpand = false;
            console.log("expandPeca if");
        }
        else {
            console.log("expandPeca else");
            this.onexpand = true;
            this.pecas.map(function (listPeca) {
                if (peca == listPeca) {
                    listPeca.expanded = !listPeca.expanded;
                    _this.isVisible = false;
                }
                else {
                    listPeca.expanded = false;
                    _this.isVisible = true;
                }
                return listPeca;
            });
        }
    };
    HomePage.prototype.showToast = function (messagem) {
        this.toast = this.toastController
            .create({
            message: messagem,
            duration: 1500
        })
            .then(function (toastData) {
            console.log(toastData);
            toastData.present();
        });
    };
    HomePage.prototype.change = function () {
        this.esconder = !this.esconder;
    };
    HomePage.prototype.receberfiltros = function (filtros) {
        console.log(filtros);
        for (var i = 0; i < this.pecas.length; i++) {
            this.pecas[i].filtra = false;
            if (filtros[0].MyVisit === true) {
                if (this.pecas[i].guardado == null || this.pecas[i].guardado == 0) {
                    this.pecas[i].filtra = true;
                }
            }
            if (filtros[0].Vistas === true) {
                if (this.pecas[i].visto === 1) {
                    this.pecas[i].filtra = true;
                }
            }
            if (filtros[0].Ratings.length > 0) {
                this.pecas[i].filtra = true;
                for (var j = 0; j < filtros[0].Ratings.length; j++) {
                    if (filtros[0].Ratings[j] == this.pecas[i].rating) {
                        this.pecas[i].filtra = false;
                    }
                }
            }
            if (filtros[0].Autores.length > 0) {
                this.pecas[i].filtra = true;
                for (var j = 0; j < filtros[0].Autores.length; j++) {
                    if (filtros[0].Autores[j] === this.pecas[i].Autor) {
                        this.pecas[i].filtra = false;
                    }
                }
            }
            console.log(this.pecas[i]);
        }
    };
    HomePage.prototype.scrollListVisible = function (index) {
        var arr = this.list.nativeElement.children;
        var item = arr[index];
        console.log(item);
        item.scrollIntoView({ behavior: this.behavior, block: this.block });
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.subscription.unsubscribe();
        this.backButtonSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomePage.prototype, "list", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_bluetooth_le_ngx__WEBPACK_IMPORTED_MODULE_3__["BluetoothLE"],
            _api_pecasdata_service__WEBPACK_IMPORTED_MODULE_4__["PecasdataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_sql_sql_peca_crud_service__WEBPACK_IMPORTED_MODULE_5__["SqlPecaCrudService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map