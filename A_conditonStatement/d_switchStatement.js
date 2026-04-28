let money = 2500;
let shoe_Quality = null;

if(money >= 5000)
    shoe_Quality = "A"

else if(money >= 2500)
    shoe_Quality = "B"

else if(money >= 700)
    shoe_Quality = "C"

else
    shoe_Quality = "F"



switch(shoe_Quality){

    case "A":
        console.log("Excellent quality")
        break;
    case "B":
        console.log("Decent quality")
        break;
    
    case "C" :
        console.log("cheap and best")
        break;

    default:
        console.log("Failed quality")
}