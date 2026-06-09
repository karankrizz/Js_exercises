function employee(basicSalary) {
    
    return function(hra,da,bonus){

        let gross = basicSalary +  hra + da + bonus
        

        return function(pf,pt){


            let netSal = basicSalary - (pf + pt)

            return netSal
        }
        
    }

    
}

let salary = employee(50000)(2500,1000,6000)(3600,1200)

console.log("salary=====>",salary)