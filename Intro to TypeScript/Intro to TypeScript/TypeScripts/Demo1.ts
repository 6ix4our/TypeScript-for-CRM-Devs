var thingArray = [
    "thing1",
    "thing2",
    "thing3",
    "thing4",
    "thing5"
];

var unThingArray = thingArray.map( thing => thing.slice( 5 ) );

debugger;

var concat = unThingArray.reduce(( flat, unThing ) => flat += unThing );

debugger;

var notSum = unThingArray.reduce(( notAggregate, unThing ) => notAggregate += parseInt( unThing ) );

debugger;

var sum = unThingArray.reduce(( aggregate, unThing ) => aggregate += parseInt( unThing ), 0 );

debugger;

var whyThisIsGood = notSum + sum;

debugger;