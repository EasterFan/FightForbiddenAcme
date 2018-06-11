let Person = require('./person');
let Klass = require('./class');

class Student extends Person{
    constructor(name,age,klass){
       super(name,age);
       this.klass = klass;
    }

    introduce(){
        return this.basic_introduce() + ` I am a Student. I am at Class ${this.klass.number}.`;
    }
}

// console.log(new Student("tom",30,new Klass(3)).introduce());
module.exports = Student;