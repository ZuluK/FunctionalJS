/* ---------------- Why Functional Programming? ----------------------*/

More predicatabale, safer //they only depend on the input
Easier to test/debug

/* ---------------- Why Functional Javascript? ----------------------*/
Object-oriented JS gets tricky
established community/tools
reuseability of code
performance issues


/*----------------- What are side effects of functional Javascript -----*/
Do nothing but return output
Avoid Mutablitiy//don't change in-place instead, replace
Mutation (dangerious!);

var numSysts = ["African", "Kemet", "Chinese"];
numSysts[1] = "Hindu-" + numSysts[1];

numSysts;
//["African", "Hindu-Arabic, "Chinese"]



Side effects:
var conf = {name: "SaintJS", date: 2017}//

function renameConf(newName){
  conf.name = newName;//this is a side effect. Changes something in the world. Not a return value
  console.log("Renamed!");//this is a side effect. Logging to the console.
}

renameConf("HolyJS");//Renamed!
conf;//{name: "HolyJS", date: 2017}


No side effects:
var conf = {name: "SaintJS", date: 2017};

function renameConf(oldConf, newName){
  return {name:newName, date: oldConf.date}
}

var newConf = renameConf(conf,"HolyJS");
newConf;


//Non Functional

var name = "Anubis";
var greeting = "Hi, I'm ";
console.log(greeting + name);


//Functional
function greet (name){
  return "Hi, I'm " + name;
}
greet("Anubis");

//You want a function to take an input and return an output called "Pure" function

// Not a pure function
//not return keyword
//takes no arguments

var name = "Myla Biton";//Takes input from global state. There is no input taken in as a parameter for the function
function greet (){
  console.log("Hi, I'm " + name)
}

var name = "Saint Petersburg";

function greet (){
  console.log('Hello,' + name + "!");//side effect.
}
greet();//Hello, Saint Petersburg!

name = "HolyJS";
greet();//Hello, HolyJS!




//Pure Functions
//Do everything with functions

//Imperative function -doesn't use functions to create it's world

var city = "St. Petersburg";
var greeting = "Hi";

console.log(greeting + ", " + city + "!");
//Hi, St. Petersburg!
//THis is not functional


function greet (greeting, name){//inputs
  return greeting + ", " + name + "!";//output
}
greet("Hi", "WohDey");
//THis is functional
greet();

function greet(name){
  return "Hi, I'm " + name;
}

greet("Saint Petersburg");
greet("Kriss Kross");
//this is functional


//Use of Higher Order Function

function makeAdjectifier(adjective){
  return function (string){
    return adjective + " " + string;
  };
}
var coolifer = makeAdjectifier("cool");
//Don't iterate
//instead map, reduce, filter


//Example of "Mutation" which is non-functional

var rooms = ['h1','h2','h3'];
room[2] = "h4";
rooms;

//No Mutation (good)

var rooms = ['h1', 'h2', 'h3'];
var newRooms = rooms.map(function (rm){
  if (rm === "h3") {
    return "h4";
  } else {
    return rm;
  }
});
newRooms;

//Persistent data structures for efficient immutablity
