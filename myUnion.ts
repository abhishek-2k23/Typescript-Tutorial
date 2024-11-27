//This | is tells either this or this data type acceptable
let score : number|string = 33;

//score can also be string
score = "22";

//lets try with our own defined typs

//creating two differect types as User and Admin
type User = {
    userName : string;
    id : number
}

type Admin = {
    adminName : string, 
    id : number
}

//creating user who can also be a admin
let Abhishek : User | Admin = {
    userName : "Abhishek",
    id : 12
}

//Abhishek can also be admin
Abhishek = {
    adminName : "Abhishek Kumar",
    id : 12,
}

//using unions in function
function getID(id: number | string){
    console.log(`id is : ${id}`);
    //Here the id will be treated as both number and string
    //so we can't use string or number functions directly

    // id.toUpperCase(); // This will not allowed
    //you have to check strictly to use
    if(typeof id === 'string'){
        id.toUpperCase(); //now it clear it is string so we can use;
    }
}

//Union in arrays

//only numbers in the array acceptable
const dataN : number[] = [1,2,3,4,5];

//only strings are acceptable in the array
const dataS : string[] = ['1','2','3'];

//either string or numbers array are acceptable
var data : string[] | number[] = [1,2,3,4];
data = ['1','3','4','5'];

//no to do thing but to mix the element type either define type
//or use any
var anyData : (string | boolean | number)[] = [1,'2',true];
var AnyData : any[] = [1,'3',false];

//Example of use case
let seatAllotment : 'asile' | 'middle' | 'right';

//now the seat can be only the defined types
seatAllotment = 'asile';
// seatAllotment = 'crew' //not allowed 

export {}