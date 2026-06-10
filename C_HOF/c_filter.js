let orignalArr = [100, 200, 300, 400, 750, 1000]

let greaterThen500 = orignalArr.filter(
    (value, index, arr) => {
        return value > 500
    }
)
console.log("500 greater then ====>", greaterThen500)

/* example 2 - Remove duplicate Elements */

let array = ["apple", "orange", "apple", "mango", "mango", "pineapple", "grapes", "grapes", "lichi", "pineapple"]

let uniqueArr = array.filter(
    (value, index, arr) => {

        return arr.indexOf(value) == index
        // 
    }
)

console.log("unique Arrr ====>", uniqueArr)





