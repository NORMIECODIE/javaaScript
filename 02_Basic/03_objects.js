// Singleton 

// object literals
const mySym = Symbol("key1")

const JsUSer = {
    name: "Hitesh",
    "full name": "Hitesh Choudary",
    [mySym]: "key1", // syntax of printing key
    age: "23",
    location: "jaipur",
    email: "hitesh@google.com",
    lastLogin: ["Monday","sunday"]
}

// console.log(JsUSer["email"])
// console.log(JsUSer.email)
// console.log(JsUSer.lastLogin)
// console.log([mySym]) // we call symbol like thiss 
// // console.log( typeof JsUSer.mySym)// If WE call like this its give us string value not the symbol value
//  JsUSer.email = "deepak@chat.gamil.com"
// //  console.log(JsUSer.email)
//  Object.freeze(JsUSer);


 
 /***************************************************************** */


 // const tinderUser = new Object()  it is a singleton object

 const tinderUser = {}
 tinderUser.id = "123bdc",
 tinderUser.name = "sammy",
 tinderUser.lastLogin = false

//  console.log(  tinderUser);

const regularUser = {
    email : "deeapk65@gmail.com",
    userName: {
        userFullname :{
        fristname: "deepak",
        lastName: "sh"
        }
    }
}
// console.log(regularUser.userName.userFullname.fristname)

const obj1 = {
    1: "a", 2:"b",
    3: "c", 4:"d"
}

const obj2 ={
    5: "e", 6: "f"
}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign( {},obj1,obj2)

// const obj3 = {...obj1,...obj2} // ... means spread it spread all the value and sotre in one object
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


/*********** destructing************************/

const course = {
    coursename :"js ",
    price: "899",
    courseInstructor: "hitesh"

}
const {courseInstructor: instructor} = course
console.log(instructor); // when ever we curly braces {} we say  that we are destructioring the object
