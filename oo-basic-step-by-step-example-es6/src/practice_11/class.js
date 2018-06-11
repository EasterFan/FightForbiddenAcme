let Student = require('./student');
let Teacher = require('./teacher');

/**
 * 观察者模式
 */

class Class {
    constructor(number){
        this.number = number;
    }

    getDisplayName(){
        return `Class ${this.number}`;
    }

    assignLeader(student){
        // 判断这个学生是不是本班级学生
     if(student.klass.number === this.number) {
         this.leader = student;
         // 如果有老师的话,通知老师
         if (this.teacher) console.log(`I am ${this.teacher.name}. I know ${student.name} become Leader of Class ${this.number}.`);
     }else {
         console.log("It is not one of us.")
     }
    }

    appendMember(student){
        student.klass = this;
        // 如果有老师的话,通知老师
        if (this.teacher) console.log(`I am ${this.teacher.name}. I know ${student.name} has joined Class ${this.number}.`);
    }

    // 为 class 添加 teacher 属性
    registerJoinListener(teacher){
        if (teacher.klasses.includes(this)) this.teacher = teacher;
    }

    registerAssignLeaderListener(teacher){
        if (teacher.klasses.includes(this)) this.teacher = teacher;
    }
}

module.exports = Class;
