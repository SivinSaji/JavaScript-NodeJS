//FUNCTION DEFINITION
//Function without argument & without return value
function sum1()
{
    var num1=10
    var num2=20
    var result=num1+num2
    console.log("Sum1 of numbers: "+result)

}

//Function without argument & with return value
function sum2()
{
    var num1=20
    var num2=5
    var result=num1+num2
    return result
}


//Function with argument & without return value
function sum3(a,b)
{
    var c=a+b
    console.log("Sum3 of 2 numbers:"+c)

}


//Function with argument & with return value
function sum4(a,b){
    c=a+b
    return c
}



//MAIN FUNCTION(function calling)


//Function without argument & without return value
sum1()

//Function without argument & with return value
value=sum2()
console.log("Sum2 of numbers:"+value)


//Function with argument & without return value
var a=10
var b=5
sum3(a,b)

//Function with argument & with return value
var a=20
var b=30
result1=sum4(a,b)
console.log("Sum4 of 2 numbers: "+result1)