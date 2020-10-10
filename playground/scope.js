var a = 2; //local
// declare a
// set a value is 2
b = 3; //global

newVariable();

function newVariable() {
  //C's scope is function scope
  //   var c = 4;

  //Now C's scope is global
  c = 4;
  console.log("inside", c);
}

console.log("outside", c);

/**
 * VAR - Function scope
 * LET - Block scope
 * CONST - Can't change variable value (STACK)
 */

const cons_a = { a: 3 };
cons_a.a = 5;

const newFunc = function () {
  // Recommend
  console.log("NEW FUNC");
};

console.log(cons_a);

// VAR ? LET ?

for (let i = 0; i < 3; i++) {
  console.log("inside", i);
}
console.log("outside", i);
