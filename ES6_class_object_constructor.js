//Here we use the new features class and constructor which is introduced in ES6
class hello//this is the class 
{
    constructor(num1,num2){ //this the constructor we created when we create an object to the class satement inside constructor will be exicuted
        this.num1=num1
        this.num2=num2
    }
    display(){
        console.log('Sum of numbers:'+(this.num1+this.num2))
    }}
    let hey=new hello(10,20)//here we create an object to class hello then firstly in exicute the code inside the constructor
    hey.display()//here we call the function hello and the it will display


