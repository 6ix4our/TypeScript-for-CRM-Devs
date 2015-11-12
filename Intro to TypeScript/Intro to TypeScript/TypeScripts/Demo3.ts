class ThingClass
{
    public PublicExplicitStringVar: string;

    public PublicImplicitStringVar = "";

    private _privateNumberVar = 0;

    public PublicSetNumberVar( value: number )
    {
        this._privateNumberVar = value;
    }

    constructor( private _privateStringValue: string )
    { }
}

debugger;

var thingInstance = new ThingClass( "Private String Value" );

debugger;

class InheritedConstructorlessClass extends ThingClass
{
    public InheritedOnlyNumberMember = 9999;
}

var inheritedInstance = new InheritedConstructorlessClass( "Still requires a private string value" );

debugger;

class InheritedFullClass extends ThingClass
{
    constructor( private _myOwnPrivateNumberValue: number )
    {
        super( "I am required." );
    }
}

var inheritedFullInstance = new InheritedFullClass( 5000 );

debugger;

class GetterSetterClass
{
    private _hiddenStringVar: string;

    public get readonlyStringVar()
    {
        return this._hiddenStringVar;
    }

    public set readonlyStringVar( value: string )
    {
        this._hiddenStringVar = value;
    }
}

var getterSetterInstance = new GetterSetterClass();

getterSetterInstance.readonlyStringVar = "New Value";

debugger;
