var thingArray = [
    "thing1",
    "thing2",
    "thing3",
    "thing4",
    "thing5"
];
var unThingArray = thingArray.map(function (thing) { return thing.slice(5); });
debugger;
var concat = unThingArray.reduce(function (flat, unThing) { return flat += unThing; });
debugger;
var notSum = unThingArray.reduce(function (notAggregate, unThing) { return notAggregate += parseInt(unThing); });
debugger;
var sum = unThingArray.reduce(function (aggregate, unThing) { return aggregate += parseInt(unThing); }, 0);
debugger;
var whyThisIsGood = notSum + sum;
debugger;
//# sourceMappingURL=Demo1.js.map