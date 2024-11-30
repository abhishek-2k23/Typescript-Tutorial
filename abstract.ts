// abstract class: 
//     -> abstract class don't have any object
//     -> it helps to create another class
//     -> abstract keyword is used to make any class or function abstract
//     -> abstract class can have function definions also and they can be used freely with the child class object.
//     -> also abstract class have abstract functions which must be overriden.

abstract class Person{
    public name: string;
    public age : number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }

     function getAge() : number{
        return this.age;
    }
}