//Here we use module. Using modele we can get access from another file function,variable etc..
//Here we export module_1.js file 

var sample=require('./module_1')   //This is the same syntax for using libraries. we use the same syntax for inputing. ./ is used for represent locally
sample.hello()                     //Here we call the function in module_1.js file
console.log(sample.num)            //Here we call the varriables in module_1.js file