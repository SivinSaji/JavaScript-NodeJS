//Default parameters are used when we doesnot pass any argument it will work as the default value in parameter
function hey(num1=100,num2){
    console.log(num1+num2)
}

hey(10,20)//here we passed the value thats why it use the value

//here we use default value
function hey(num1=100,num2){
    console.log(num1+num2)
}

hey(undefined,20)//here we doesnot pass one argument does it use the default value