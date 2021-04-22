//This is  a library which we get from npmjs.com this library is used for getting the first word in a sentence as upper case
//this sample for using a library 
//we can identify the different libraries used in a project from pakage-lock.json in dependency 
var uc=require('upper-case-first')      //reqiure is a keyword after the () and the '' the libraries will be given as suggestion
var sample=uc.upperCaseFirst("the sun is in the sky"); 
console.log(sample)