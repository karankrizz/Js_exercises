let fruits =["orange","apple ","orange","mango","mango","pomegranate","pineapple","pomegranate","apple ","banana"]

let uniquearr = fruits.filter(
    (value,index,arr) =>{

        return arr.indexOf(value) == index       
    }
)
console.log("unique_array==>",uniquearr)

let newfruits =["orange","apple ","orange","mango","mango","pomegranate","pineapple","pomegranate","apple ","banana"]

let duplicatearr = newfruits.filter(
    (value,index,arr) =>{

        return arr.indexOf(value) != index       
    }
)
console.log("ununique_array==>",duplicatearr)