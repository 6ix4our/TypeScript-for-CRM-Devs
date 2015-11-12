interface IThingArray
{
    Things: Array<string>;
}

class HasThings implements IThingArray
{
    public Things = ["thing1", "thing2"];
}

var hasThingsInstance = new HasThings();

var thing1 = hasThingsInstance.Things[0];

debugger;

interface IGenericThingInterface<T>
{
    Thing: T;
}

class StringThing implements IGenericThingInterface<string>
{
    public Thing: string;
}

var stringThingInstance = new StringThing();

stringThingInstance.Thing = "8675309";

debugger;

interface IMethodInterface
{
    Save(): void;
}

interface IExtendedInterface extends IMethodInterface
{
    Delete(): void;
}

class EnhancedStringClass extends StringThing implements IExtendedInterface
{
    public Delete()
    {
        return;
    }

    public Save()
    {
        return;
    }
}