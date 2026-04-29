/* Example 1 :  String itteration using in operator */

let text = "Hi This is kirubhakaran"

for(let letter in text){
      //console.log("letter====>",text.charAt(letter))
}



/* Example 2 : Array itteration */

let icecreams = ["vennila ", "chocolate", "blackcurrant", "butterscotch"];

for(let item in icecreams){
    console.log("item===>",icecreams.at(item) )
}