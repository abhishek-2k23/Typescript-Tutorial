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