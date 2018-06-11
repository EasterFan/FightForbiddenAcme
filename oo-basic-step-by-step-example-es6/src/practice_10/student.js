let Person = require('./person');
let Klass = require('./class');

class Student extends Person{
    constructor(id,name,age,klass){
       super(id,name,age);
       this.klass = klass;
    }

    introduce(){
        return this.klass.leader === this ? super.basic_introduce() + ` I am a Student. I am Leader of Class ${this.klass.number}.`: this.basic_introduce() + ` I am a Student. I am at Class ${this.klass.number}.`;
    }
}

// console.log(new Student("tom",30,new Klass(3)).introduce());
module.exports = Student;