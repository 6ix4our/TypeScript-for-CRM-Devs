System.register([], function(exports_1) {
    var ModuleDemo;
    return {
        setters:[],
        execute: function() {
            (function (ModuleDemo) {
                function ModuleFunction() {
                    alert("I'm from a module");
                    return true;
                }
                ModuleDemo.ModuleFunction = ModuleFunction;
            })(ModuleDemo = ModuleDemo || (ModuleDemo = {}));
            exports_1("ModuleDemo", ModuleDemo);
        }
    }
});
//# sourceMappingURL=ModuleDemo.js.map