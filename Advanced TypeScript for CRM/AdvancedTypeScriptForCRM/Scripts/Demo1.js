var TSDemo;
(function (TSDemo) {
    var Account;
    (function (Account) {
        var Name;
        (function (Name) {
            function OnChange() {
                var grids = Xrm.Page.getControl(function (control) {
                    return control.getControlType() === "subgrid";
                });
                var selectedGridReferences = [];
                /// Demonstrate iterator typing with v7.1 additions
                grids.forEach(function (gridControl) {
                    gridControl.getGrid().getSelectedRows().forEach(function (row) {
                        selectedGridReferences.push(row.getData().getEntity().getEntityReference());
                    });
                });
                debugger;
            }
            Name.OnChange = OnChange;
        })(Name = Account.Name || (Account.Name = {}));
    })(Account = TSDemo.Account || (TSDemo.Account = {}));
})(TSDemo || (TSDemo = {}));
//# sourceMappingURL=Demo1.js.map