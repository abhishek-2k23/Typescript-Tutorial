//Getters and Setters are used in the class to access or set the class variables (specially for the private variable)
class User {
    private name: string;
    private email : string;
    private address:  string;
    constructor(email:string, name:string){
        this.name = name;
        this.email = email;
    }

    //getters must have a return value and return type 
        get getEmail(): string{
        return this.address;
    }

    //setters don't have any return value, not even void
    set setEmail(address: string){
        this.address = address
    }
}