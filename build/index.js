"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Dog = (function () {
    function Dog(name) {
    }
    return Dog;
}());
var Husky = (function (_super) {
    __extends(Husky, _super);
    function Husky(name) {
        return _super.call(this, name + "Go dawgs") || this;
    }
    return Husky;
}(Dog));
dog.throwFootball();
var CoffeeShop = (function () {
    function CoffeeShop() {
        this.secret = "Abracadabra";
    }
    CoffeeShop.prototype.payWithVisa = function (cardNum) { };
    return CoffeeShop;
}());
exports.CoffeeShop = CoffeeShop;
var CharityDrive = (function () {
    function CharityDrive() {
    }
    CharityDrive.prototype.payWithVisa = function (cardNum) { };
    return CharityDrive;
}());
