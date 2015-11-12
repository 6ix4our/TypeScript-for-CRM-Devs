var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ThingClass = (function () {
    function ThingClass(_privateStringValue) {
        this._privateStringValue = _privateStringValue;
        this.PublicImplicitStringVar = "";
        this._privateNumberVar = 0;
    }
    ThingClass.prototype.PublicSetNumberVar = function (value) {
        this._privateNumberVar = value;
    };
    return ThingClass;
})();
debugger;
var thingInstance = new ThingClass("Private String Value");
debugger;
var InheritedConstructorlessClass = (function (_super) {
    __extends(InheritedConstructorlessClass, _super);
    function InheritedConstructorlessClass() {
        _super.apply(this, arguments);
        this.InheritedOnlyNumberMember = 9999;
    }
    return InheritedConstructorlessClass;
})(ThingClass);
var inheritedInstance = new InheritedConstructorlessClass("Still requires a private string value");
debugger;
var InheritedFullClass = (function (_super) {
    __extends(InheritedFullClass, _super);
    function InheritedFullClass(_myOwnPrivateNumberValue) {
        _super.call(this, "I am required.");
        this._myOwnPrivateNumberValue = _myOwnPrivateNumberValue;
    }
    return InheritedFullClass;
})(ThingClass);
var inheritedFullInstance = new InheritedFullClass(5000);
debugger;
var GetterSetterClass = (function () {
    function GetterSetterClass() {
    }
    Object.defineProperty(GetterSetterClass.prototype, "readonlyStringVar", {
        get: function () {
            return this._hiddenStringVar;
        },
        set: function (value) {
            this._hiddenStringVar = value;
        },
        enumerable: true,
        configurable: true
    });
    return GetterSetterClass;
})();
var getterSetterInstance = new GetterSetterClass();
getterSetterInstance.readonlyStringVar = "New Value";
debugger;
//# sourceMappingURL=Demo3.js.map