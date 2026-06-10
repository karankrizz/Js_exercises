
    const user = {
        "name": "kirubha",
        "lastName" : "karan",
        "age": 25,
        "isLoggedIn": true,
        fullName: function(){
            return this.name + " " + this.lastName
        }
         
    };

    user.city = "chennai";           // add-value
    user.age = 26                      // update-value
    delete user.isLoggedIn             // delete value
    
    let name =  user.fullName()
    console.log(user.city)
    console.log("name====>",name)

    