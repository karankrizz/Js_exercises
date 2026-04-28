/* Example 1 - Shallow copy */
var foods = ["idly", "dosai", "vadai", "bonda"]
var newfoods = foods

newfoods.push("poratta")
newfoods.push("kalaki")


console.log("Foods ======>", foods)
console.log("New Foods=====>", newfoods)

/* Example2 - Deep copy */
var foods = ["idly", "dosai", "vadai", "bonda"]
var newfoods = [...foods]

newfoods.push("poratta")
newfoods.push("kalaki")


console.log("Foods ======>", foods)
console.log("New Foods=====>", newfoods)
