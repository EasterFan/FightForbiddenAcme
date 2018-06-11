let Person = require("./person");

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }

    introduce(){
        return this.klass == null ? this.basic_introduce() + " I am a Teacher. I teach No Class." : this.basic_introduce() + ` I am a Teacher. I teach Class ${this.klass}.`;
    }
}

module.exports = Teacher;