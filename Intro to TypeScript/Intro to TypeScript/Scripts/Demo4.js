var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HasThings = (function () {
    function HasThings() {
        this.Things = ["thing1", "thing2"];
    }
    return HasThings;
})();
var hasThingsInstance = new HasThings();
var thing1 = hasThingsInstance.Things[0];
debugger;
var StringThing = (function () {
    function StringThing() {
    }
    return StringThing;
})();
var stringThingInstance = new StringThing();
stringThingInstance.Thing = "8675309";
debugger;
var EnhancedStringClass = (function (_super) {
    __extends(EnhancedStringClass, _super);
    function EnhancedStringClass() {
        _super.apply(this, arguments);
    }
    EnhancedStringClass.prototype.Delete = function () {
        return;
    };
    EnhancedStringClass.prototype.Save = function () {
        return;
    };
    return EnhancedStringClass;
})(StringThing);
//# sourceMappingURL=Demo4.js.map