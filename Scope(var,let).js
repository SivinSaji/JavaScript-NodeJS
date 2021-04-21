//let allows us to declare variables that are limited to the scope of a block(we acan only the let avarriable inside a block(one block is {}))
function hello(){
    let i=100
    var a=0
    if(a===0)
    {
        i=200//here we change i to 200 but we get output as 100 itself it shows that let scope is inside a block
    }
    console.log("let scope eg:"+i)
}
hello()


//var has its scope inside a function but when we function inside a funtion(nested function) we can not get the scope in inner function
function sample(){
    var num=10
    var z=0
    if(z===0)
    {
        var num=20
    }
    function hey(){
        var num=30//this statement will not change the value of num because it is inside the inner function
    }
    console.log("var scope eg:"+num)
}
sample()