//In var we can declare a same named many times it may lead to confussion in program
var a=20
var a=30
console.log(a)


//But in case of let we can only declare a variable name only one time next when we use that name to declare a variable it may lead to error in the program
//But we can change the value in the variable using assigning to the varriable
let b=40
b=60
console.log(b)

//let allows us to declare variables that are limited to the scope of a block(we acan only the let avarriable inside a block(one block is {}))
function hello(){
    let i=100
    var a=0
    if(a===0)
    {
        let i=200//here we change i to 200 but we get output as 100 itself it shows that let scope is inside a block
    }
    console.log(i)
}
hello()