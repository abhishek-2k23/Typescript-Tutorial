//basic synatax of object making in TS and JS
const User = {
    name : "Abhishek",
    age : 10,
    isActive : true,
}

//passing an object to the function
function createUser({name: string, age: number, isActive: boolean}){};

//calling the function
createUser({name: "Abhishek",age: 10, isActive: true});

//when we have to return object from a funcion
function createCourse():{name: string, price: number}{
    return {name:"reactjs",price: 999} //we must have to return object in the specied format
}

//in the parameter we can pass the extra element than the specified. Yes this should not allowed but 
//it is possible
let newUser = {name: "Abhishek",age: 10, isActive: true, email: "Abhishek@gmail.com"};
createUser(newUser); //This is not complain although email is not defined in the parameters


//************* Type Aliases *****************/
//we can use "type" to create our own datatype like classes in java or c++

type Student = {
    name : string;
    age : number;
    isActive : boolean;
}

//function which will accept only Student type of data
function createStudent(student: Student){};

//we can also make aliases of default types like number, string
type Mystring = string;
type Mynumber = number;

// returning the Student type data from a function
function newStudent(student: Student):Student{
    // return student;
    return {name: "abhi",age : 10,isActive : true,} //returning the Student type data
}

//creating a s1 student of Student type
const  s1 : Student = {
    name: "abhi",
    age : 10,
    isActive : true,
}

//calling the function with  passing s1 
newStudent(s1);


//************ ReadOnly and ?: in TS */

//we can use ReadOnly to make the variable non-mutable
//we can use ? just before colon to make the variable optional

type employee = {
    readonly _id : string; //once id assigned it can't be changed
    name : string;
    salary : number;
    prevJob ?: string; // this is option he may tell or he may not
}

//making the employee
let e1: employee = {
    _id : "1234daasd",
    name : "Abhishek",
    salary: 1234,
    //not giving the prevJob details still not complaining because of (?:)
}

e1.name = "abhi"
// e1._id = "12341ads" //can't be changed after assigning

//To make a single type variable by combining other multiple types of variables
type cardNumber = {
    cardNumber : number;
}
type cardDate = {
    cardDate : Date;
}
type cardHolderName = {
    cardHolderName : string;
}

//final card 
//& is used to add the details. (| is used to either add if have);
type cardDetails = cardHolderName & cardNumber & cardDate & {cvv : number};

export {};