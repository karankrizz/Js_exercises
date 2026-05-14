const arr = [ 100 ,500, 600]

const [a,b,c,d=0] = arr

console.log(a,b,c,d)



//Example 2 

const food = {
    name : "Grilled chicken"
}

const { name : FoodName} = food

console.log(FoodName)