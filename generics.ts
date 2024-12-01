// component is just a chunk.
//generics helps us to maintain the type of args and type of returned data type same
// Due to this we can avoid to use any or the complexity of writing code for each data type we want to pass and return

//in this function we can pass only number type of value also can return only number type of values.
//problem is that what about other data type values
function identityOne(val: number): number{
    return val;
}

// solution: use any
// but it is not recommending because no one knows what type of compression you are doing with data and returning what.
function identityTwo(val: any): any{
    return val;
}

//Here the generics come in role, you have to return the same type of data as you recieve.
//Type -> Instead of Type we can use any word
//<> is the part of generics syntax so, it is mandatory
function identityThree<Type>(val: Type) : Type {
    return val;
}

// Generics in Array type of data
function searchStudent<T>(students: T[]): T{
    //returning the 3rd index strudent whose type is T
    return students[3];
}

//using Generics in arrow function
//using "," inside the <> is common. It tells that this not a normal tag, this is for generics
const searchEmployees = <T,>(Employees: T[]): T => {
    return Employees[3];
}