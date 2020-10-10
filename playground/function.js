// Hoisting
// Declare
// => Top of the file

//JS Excute******
//var a
//console.log(a)
//a =2
//************
console.log(a);
var a = 2;

newVariable();

function newVariable() {
  //function declaration
  //C's scope is function scope
  //   var c = 4;

  //Now C's scope is global
  c = 4;
  console.log("inside", c);
}

//function expression

/**JS Excute******
 * var newFunction;
 * newFunction();
 * newFunction = function(){
 * ....
 * }
 *
 *
 */
newFunction();
var newFunction = function () {
  console.log("NEW FUNCTION");
};
