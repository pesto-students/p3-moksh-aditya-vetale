var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
// TODO: create the class Teacher and a method teach

// let Teacher = new Person();

// Teacher.teach = (subject) => {
//   console.log("${this.name} is now teaching ${subject}");
// };
var Teacher = function (name, age) {};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function (subject) {
  return `${this.name} is now teaching ${subject}`;
};

var him = new Teacher();
him.initialize("Adam", 45);
console.log(him.teach("Inheritance"));
