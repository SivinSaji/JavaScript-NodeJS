//Here we use module. Using modele we can get access from another file function,variable etc..
//Here we export this file to module_2.js
module.exports.hello=function(){           //function which can be used from another file because we use export here
    console.log("Hello I am Module")
    
}
module.exports.num=3913                  //varriable which can be used from another file because we use export here     
