function buyItems(){

    let productItem = {
        item : "dosa",
        price : 120,
        cgst : 2.5,
        sgst : 2.5
    }


    return function(){

        let cgstAmout = productItem.price * productItem.cgst / 100
        let sgstAmout = productItem.price * productItem.sgst / 100
        let totalPrice = productItem.price + cgstAmout + sgstAmout

        return Math.round(totalPrice)
    }

}

let result = buyItems()()
console.log("result====>",result)
