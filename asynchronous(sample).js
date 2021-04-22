//This is the example asychronous type because we create 3 tasks which we use setTimeout function here we give the call back showEnd and the time 2second after 2second it will call the function showEnd
//and each task takes 2 second of time its take total 2 second of time becz it is asychronous type
 

function showEnd(){
    console.log('End')      //This is the function to print end
}
console.log('Start')        //1st task
setTimeout(showEnd,2000)    //this is the setTimeout function it will call the function showEnd after the time given

console.log('Start')       //2nd task
setTimeout(showEnd,2000)

console.log('Start')       //3rd task
setTimeout(showEnd,2000)