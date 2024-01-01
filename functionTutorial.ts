//declaring type in the parameters
function takeString(name: string){
    console.log("Name is : ",name);
}

takeString("Abhishek");

//defining default value
function userLogin(name: string, email: string, Mobile: number, isMale: boolean = false){
    console.log("User name : ",name);
}

userLogin("abhishek","ex@gmail.com",123);

//defining the return type of the function
function isLoggedIn(email: string, Mobile: number): boolean{
    return false;
} 

let isloggedin = isLoggedIn("a@gmail.com",123342);

//defining the parameter type in a arrow function 
let handleUser = (email: string, Mobile: number) => { 
    console.log(email);
    console.log(Mobile);
}

handleUser("email@gmail.com",12434);

//defining the return type in the arrow function
//By default the fuction return type is void -> means not returning value
// we can use never if the function will never return any value
let checkPassword = (email: string, Password: string): boolean => { 
    return false;
}

checkPassword("email@gmail.com","Password");


//using types in js implicit function

// let arr = [1,2,3];
let arr = ["abc","def","ghi"];

//in this map function  the arr element must have to string 
//and the fuction will only return string values
//if we didn't specify the type TS will automatically detect type based on the array elements type
arr.map((num: string): string => {
    console.log("num is : ",num);
    num.toUpperCase();
    return num;
})

export{}