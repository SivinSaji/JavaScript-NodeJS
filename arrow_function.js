//Arrow function is used to write the code of a function in a single line
function hello(a,b){                    //This is the normal function syntax
    return a+b;
}


let hello2=(a,b) => a+b              //this arrow function syntax for the same code on the top. 
                                     //we can also use {} to represent more code (eg for same function):- let hello2(a,b)=>{return a+b}

console.log(hello2(10,20))