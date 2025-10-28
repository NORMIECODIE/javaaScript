// primitive

//7 types : String, Number, Boolean, Null, Undefined, symbol, BigInt

//Reference type (non-primitive)

// Array, Object, Functions

const heroes = ["saktiman", "batman"] //array
let myObj ={ name : negi,
    age : 55
} // Objects

// type        //result
// Undefined	"undefined"
// Null     	"object" (reason)
// Boolean   	"boolean"
// Number	    "number"
// BigInt	    "bigint"
// String	     "string"
// Symbol	    "symbol"
// Function     (implements [[Call]] in ECMA-262 terms; classes are functions as well)	"function"
// Any other object	"object"

//Reference = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof