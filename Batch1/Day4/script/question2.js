const student={
  name:"helsiki",
  age:24,
  project:
  {
    diceGame:"two players dice game using javascript"
  }
}

//using destructuring object

const{name,age,project}=student;
console.log(name,age,project);
console.log(name,age, project.diceGame);
