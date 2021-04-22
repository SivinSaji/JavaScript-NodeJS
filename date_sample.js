//There are many date&time properties. we get date and time in Date
var d=new Date("22 April 2021")

console.log(d.getDate())

console.log(d.getDay())

console.log(d.getFullYear())

console.log(d.getUTCFullYear())




//Here we see a time consuption of a forloop we get the output in millisecond (1000millisecond=1second)
var dt=new Date()                  //here we get the time before the forloop execution. In this case we get the current time
console.log("Start")
for(i=0;i<1000000;i++)
{
    console.log('Loop')
}
console.log('End')
var diff=new Date()-dt             //here we find the difference b/w time before forloop and after the forloop
console.log("Time consumed:"+diff) //difference is printed in millisecond it may differ from devices 