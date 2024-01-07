//Tuples are just arrays with more restrictions given by ts.
//in tupes the order of the types also matters with the numbes of types

//defining the tuple
type user = [number, string];

//orders can't be changed
//others types can't be accectable
//first should be number and second should be string.
let newUser : user  = [1, "abc@gmail.com"];

//but the tupes don't catch push function
newUser.push("true")

console.log(newUser);


//other Examples
//there must be only 3 numbers in the array
let rgb : [number, number , number] = [233,244,255];
