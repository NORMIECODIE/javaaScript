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

console.log(JsUSer["email"])
console.log(JsUSer.email)
console.log(JsUSer.lastLogin)
console.log([mySym]) // we call symbol like thiss 
console.log( typeof JsUSer.mySym)// If WE call like this its give us string value not the symbol value
 JsUSer.email = "deepak@chat.gamil.com"
 console.log(JsUSer.email)
 Object.freeze(JsUSer);

 