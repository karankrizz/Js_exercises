let str = "Hello kirubha";

let slicedStr = str.slice(4, 5)

let substring = str.substring(4, 5)


let substr = str.substr(6, 4)
//Difffernce in when giving negative values 
let substringNegative = str.substring(-7)
let slicedStrNegative = str.slice(-7)

console.log("slicedStr===>", slicedStr)
console.log("substring====>", substring)
console.log("substr=====>", substr)

//DIFFERENCE IN THE slice and substring 
console.log("substr=====>", substringNegative)
console.log("substr=====>", slicedStrNegative)
