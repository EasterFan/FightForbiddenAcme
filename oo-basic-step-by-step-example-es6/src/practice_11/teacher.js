let Person = require("./person");
let Klass = require("./class");

class Teacher extends Person{
    constructor(id,name,age,klasses){
        super(id,name,age);
        this.klasses = klasses;
    }

    introduce(){
        if (this.klasses == null) {
            return this.basic_introduce() + " I am a Teacher. I teach No Class.";
        }else{
            let classarr = [];
            this.klasses.forEach(item => classarr.push(item.number));
            return this.basic_introduce() + ` I am a Teacher. I teach Class ${classarr.join(', ')}.`;
        }
    }
}

module.exports = Teacher;