'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var NetworkInterface = /** @class */ (function (_super) {
    tslib.__extends(NetworkInterface, _super);
    function NetworkInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetworkInterface.prototype.getWiFiIPAddress = function () { return core.cordova(this, "getWiFiIPAddress", {}, arguments); };
    NetworkInterface.prototype.getCarrierIPAddress = function () { return core.cordova(this, "getCarrierIPAddress", {}, arguments); };
    NetworkInterface.prototype.getHttpProxyInformation = function (url) { return core.cordova(this, "getHttpProxyInformation", {}, arguments); };
    NetworkInterface.pluginName = "NetworkInterface";
    NetworkInterface.plugin = "cordova-plugin-networkinterface";
    NetworkInterface.pluginRef = "networkinterface";
    NetworkInterface.repo = "https://github.com/salbahra/cordova-plugin-networkinterface";
    NetworkInterface.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows", "Windows Phone"];
    NetworkInterface.decorators = [
        { type: core$1.Injectable }
    ];
    return NetworkInterface;
}(core.IonicNativePlugin));

exports.NetworkInterface = NetworkInterface;
