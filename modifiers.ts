/*  private : only used inside the class
                # is used as suffix in js to make private
    public : by default every variable is public
                easily accessable outside class
    private: the variable can be used in the inherited classes as well
             we use protected keyword before any variable
*/

//defining a class
class User {
  //both are not accessable outside the class
  public email: string
  private Id: number
  protected Sallary: number

  readonly city: string = "Delhi"
  constructor(email: string, Id: number) {
    this.email = email
    this.Id = Id
  }
}

//creating object
const u1 = new User("u1@gmail.com", 12)
  
//another way to define class in ts
class student {
  constructor(private email: string, private number: number, private address:string) {
    this.email = email
    this.number = number
    this.address = address
  }
}

class Employee extends User{
  get knowSallary(): number{
    return this.Sallary; //Sallary is accessable because it is protected
  }
}
export {}
