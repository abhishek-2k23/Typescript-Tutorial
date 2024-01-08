//In interface we just define not declare the fields
interface User {
  readonly dbID: number
  email: string
  userID: number
  googleID?: string
  //we can also define function and what type of value--
  //function will return
  getCoupon(couponName: string): number
  //also we can define function with arrow
  startTrail: ()=> string
}

//Reopening of the Interface
//it means to we can define other fields-- 
//which will added to the previous named interface
interface User{
    getGitHubID : string
}

//implementing the User Interface
//all the non-optional field should be in the User implementing variable
const Abhishek: User = {
  dbID: 12,
  email: "a@gmail.com",
  userID: 212,
  getCoupon(name: "coupon1") {
    return 121
  },
  startTrail() {
    return "12"
  },
  getGitHubID : '123'
}

//Difference b/w type and interface
/*
    1. we can apply inheritance on both
        -> In interface with help of extend keyword
        -> In type using the &
    
    2. We can reopen the interface but type can't be changed
*/