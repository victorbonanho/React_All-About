class Person {
  name = "Max"; //Property
  call = () => {
    //Method
  };
}

//Similar to constructor functions
const myPerson = new Person();
myPerson.call();
console.log(myPerson.name);

//Similar to prototypes
class Person2 extends Master {
  //Inheritance
}

//Template
class Humam {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person3 extends Humam {
  constructor() {
    super(); //Execute the parent class Humam
    this.name = "Max";
    this.gender = "female"; //Can change it
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person3();
person.printMyName();
person.printGender();
