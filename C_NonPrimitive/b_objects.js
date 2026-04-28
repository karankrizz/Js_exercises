/* Example 1 - Simple object creation */

  let student = {
        "name" : "kirubhakaran",
        "age"  : 25,
        "school":"vidhyaa giri matriculation",
        "location":"karaikudi"
  }








/* Example 2*/

const employee = {
    name : "kirubhakaran",
    age : "25",
    location : "chennai",
    isWorking : true,
    salary : 102454.25,
    skillset : ["html","css","bootstrap","javascript"],
    yearofExp : {
        "2022-2023" : "infosys",
        "2025-2026" : "Tata consultancy services",
        "2026-2050" : "Google "

    }
}

console.log("employeee Name ======>",employee.name)   
console.log("employeee skillset ======>",employee.skillset)       
console.log("employeee main skill ======>",employee.skillset[3])
console.log("employee total experience details====>",employee.yearofExp)
console.log("current working status====>",employee["yearofExp"]["2026-2050"])
