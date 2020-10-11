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
// newFunction();
// var newFunction = function () {
//   console.log("NEW FUNCTION");
// };


//Args
//Spread operator
//rest operator

function testArgs( ...args ){
  // console.log('args',arguments)
  // console.log('args',args)
  // let total = 0;
  // for(var i = 0 ; i<args.length;i++){
  //   total = total +args[i]
  // }
  // return total
  return args.reduce((total,elements)=>total=total+elements)
}

console.log(testArgs(1,2,3))


//arrow function
// const person = {
//   name:"Ca map",
//   age:3,
//   diNgu: function(){
//     const danhRang = ()=>{
//       console.log(this.name + " da danh rang")
//     }
//     danhRang();
//     console.log(this.name + " da di ngu")
//   }
// }
// person.diNgu();

// function doesn't have "THIS"
// method => "THIS" will be object

//arrow function
//"THIS" will be parent "THIS"
//ES6
class Person {
  constructor(name,age){
    // super()//inherit
    this.name =name;
    this.age =age;
  }

  diNgu(){
    const danhRang = () => {
      console.log(`Ban ${this.name} da danh rang`) //template string
    }
    danhRang();
    console.log("Ban " + this.name +  " da di ngu")
  }
}

const new_person = new Person("Phuc",3)
new_person.diNgu();