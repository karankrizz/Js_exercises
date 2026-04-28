/* Example 1 - Before object destrcture */

  let student = {
        "student_name" : "Kirubhakaran",
        "student_age"  : 25,
        "student_school":"vidhyaa giri matriculation",
        "student_location":"karaikudi"
  }

  const {student_name,student_age,student_school} = student

   console.log("student Name===>",student_name)
   console.log("student age===>",student_age)
   console.log("student school===>",student_school)







/* Example 2 -  object destrcture */
 
const collage = {
    name : "Alagappa university",
    location : "karaikudi",
    studentCount : 2000,
    currentStatus : true,
    ourBranches : ["karaikudi","pudhuvayal","puliyur","thiruvadanai"],
    records: {
        "firstSem" : "100% pass",
        "secondSem" : "95% pass",
        "finalSem" : "99% pass"
    }
}


const {name,location,ourBranches,records} = collage  
const {firstSem,secondSem,finalSem} = records



console.log("collage name ===>",name)
console.log("collage location====>",location)
console.log("Branches====>",ourBranches)
console.log("collage records====>",firstSem)