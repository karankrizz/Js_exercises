const personInfo = {
    name : "Kirubhakaran",
    dob  : "14-01-2001",
    designation : "IT anayst",
    work : "ZOHO",
    location : "chennai"
}


const personalInformation = {
    smoke  : false,
    DrinkHabit : false,
    driving  : true,
    familyType : "neuclear" 
}


const  personFullinformation = {
    ...personInfo,
    ... personalInformation
}


console.log(personFullinformation)