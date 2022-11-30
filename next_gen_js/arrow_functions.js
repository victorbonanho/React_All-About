//Normal Function
function printMyName(name) {
  console.log(name);
  //Logic
}
printMyName("Victor");

//Arrow function
const printMyName2 = (name, age) => {
  console.log(name, age);
  //Logic
  //Better to using the THIS
};
printMyName2("Rubens", 28);

const multiply = (number) => {
  return number * 2;
};

//Other way
const multiply2 = (number) => number * 2;
console.log(multiply(2));
