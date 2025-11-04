// array



const myArry =[ 1, 3, 5, 6] 

// console.log(myArry[1]);

// Array methods

// myArry.push(7)
// myArry.pop()

myArry.unshift(9) // adds the value in start of the array
myArry.shift() // removes the value from thestart of the array

// console.log(myArry.includes(8));

// console.log(myArry);

const newArry = myArry.join()
// console.log( typeof newArry);

// slice, spice

// console.log("A",myArry);
const myn1 = myArry.slice(0,2)

// console.log(myn1);
// console.log("B",myArry);

const myn2 = myArry.splice(0,2)
// console.log(myn2);
// console.log("C",myArry);


const marvel_Heroes = ["thor", "Ironmsn", "spipderman"]
const dc_Heroes = ["superman", "flash"]

// marvel_Heroes.push(dc_Heroes)
// console.log(marvel_Heroes);
// console.log(marvel_Heroes[3][1]); //it is use to call the values from arry inside arry
 const allHeroes = marvel_Heroes.concat(dc_Heroes) // by using concat we can meerge to arry and make one new arry
console.log(allHeroes);

const all_new_Heroes = [...dc_Heroes,...marvel_Heroes] // this ... is a spread operators that spreads all the elemnts and the combine them in single arrry

