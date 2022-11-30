const number = 1; //Primitive type -> numbers, strings, booleans
const num2 = number; //Copy of number
console.log(num2); //1

//Objects and Arrays are reference Types
const person = {
  name: "Max",
};
const secondPerson = person;

console.log(secondPerson);
/*
[object Object] {
    name: 'Max'
}
*/

person.name = "Manu";
console.log(secondPerson);
/*
[object Object] {
    name: 'Manu'
}
*/
