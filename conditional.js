var read=require('readline-sync')
var num1=read.question("Enter the 1st Number :")
var num2=read.question("Eneter the 2nd Number: ")
if(num1>num2)
{
    console.log(num1+" "+"is largest number" )
}
else if(num1===num2)
{
    console.log("Entered number is same")
}
else
{
    console.log(num2+" "+"is largest number" )
}