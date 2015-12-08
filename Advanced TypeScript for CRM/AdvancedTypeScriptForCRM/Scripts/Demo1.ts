namespace TSDemo
{
    export namespace Account
    {
        export namespace Name
        {
            export function OnChange()
            {
                var grids = Xrm.Page.getControl(( control ) =>
                {
                    return control.getControlType() === "subgrid";
                });

                var selectedGridReferences: Xrm.Page.LookupValue[] = [];

                /// Demonstrate iterator typing with v7.1 additions

                grids.forEach(( gridControl: Xrm.Page.GridControl ) =>
                {
                    gridControl.getGrid().getSelectedRows().forEach(( row ) =>
                    {
                        selectedGridReferences.push( row.getData().getEntity().getEntityReference() );
                    })
                });

                debugger;
            }
        }
    }
}
