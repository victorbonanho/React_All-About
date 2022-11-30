// ...

//Spread Operators -> Used to split up array elements OR object properties

// const newArray = [...oldArray,1,2]
// const newObject = {
//    ...oldObject, Get all the properties
//    newProp: 5 //Takes precedence over a old one
//}

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);
// [1,2,3,4]
// [[1,2,3],4] without the dots -> consider 1 element

const person = {
  name: "Max",
};

const newPerson = {
  ...person,
  age: 28,
};
/*
[object Object] {
    age: 28,
    name: "Max"
}
*/

//Rest Operators -> Used to merge a list of function arguments into an array

// function sortArgs(...args) {
//     return args.sort()
// }

const filter = (...args) => {
  return args.filter((el) => el === 1); //Return true or false if el === 1
};
console.log(filter(1, 2, 3));
//[1]
