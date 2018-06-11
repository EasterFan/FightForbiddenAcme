let Person = require("./person");
let Student = require("./student");
let Klass = require("./class");


class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }

    introduce(){
        return this.klass == null ? this.basic_introduce() + " I am a Teacher. I teach No Class." : this.basic_introduce() + ` I am a Teacher. I teach Class ${this.klass.number}.`;
    }

    introduceWith(student){
        return this.klass.number === student.klass.number ? this.basic_introduce() + ` I am a Teacher. I teach ${student.name}.` : this.basic_introduce() + ` I am a Teacher. I don't teach ${student.name}.`;
    }
}

// console.log(new Teacher("tom",20,4).introduceWith(new Student("jerry",2,new Klass(3))));

module.exports = Teacher;