/**
 * Define class in ES
 */

'use strict'
console.clear();

//? Define base class (parents class)
class Parents {
  // define attribute inside constructor
  constructor(value = 'anonymous') {
    this.name = value;
  }

  // define getter
  get Name() {
    return "Name is "  + this.name;
  }

  // define setter
  set Name(value) {
    this.name = value;
  }

  toString() {
    return `Name of object is ${this.name}`;
  }

  static getType() {
    return 'parents';
  }
}

//? Define child class - extend parents class
class Child extends Parents {
  // define constructor
  constructor() {
    super();              // -> call to constructor of parents class without parameter
    this.height = 100;     // -> define child attribute 
  }

  get Height() {
    return this.height;
  }

  set Height(value) {
    this.height = value;
  }

  toString() {
    return `${this.name} is tall ${this.height}`;
  }

  static getType() {
    return 'Child';
  }
}

let parents = new Parents();
console.log(parents);
console.log(parents.Name);
console.log(parents.toString());
console.log(Parents.getType());

let child = new Child();
console.log(child);
console.log(child.name);
console.log(child.Name);
console.log(child.toString());
console.log(Child.getType());