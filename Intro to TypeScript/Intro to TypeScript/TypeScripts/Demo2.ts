var integer1 = 500;
var integer2 = 250;

var string1 = "600";
var string2 = "50";

function blindAdd( a, b )
{
    return a + b;
}

var integerSum = blindAdd( integer1, integer2 );

var stringConcat = blindAdd( string1, string2 );

debugger;

function genericAdd<T> ( a: T, b ): T
{
    return a + b;
}

var genericIntegerSum = genericAdd( integer1, integer2 );

var genericStringConcat = genericAdd( string1, string2 );

debugger;
