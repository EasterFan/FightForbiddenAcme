let Person = require("./person");
let Klass = require("./class");

class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }

    introduce(){
        return this.klass == null ? this.basic_introduce() + " I am a Teacher. I teach No Class." : this.basic_introduce() + ` I am a Teacher. I teach Class ${this.klass.number}.`;
    }
}

module.exports = Teacher;