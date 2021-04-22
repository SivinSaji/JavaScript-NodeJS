//Here we create a long task function mannualy to understand the concept of synchronous type
function longTask(milliSecond){
    var initialtime=new Date()
    while((new Date()-initialtime)<=milliSecond){

    }
}

//This is the example sychronous type because we create 3 tasks which is then passed to long task function
//and each task takes 2 second of time its take total 6 second of time becz it is sychronous type
console.log('Start')
longTask(2000)             //1st task
console.log('End')

console.log('Start')
longTask(2000)          //2nd task
console.log('End')

console.log('Start')
longTask(2000)          //3rd task
console.log('End')