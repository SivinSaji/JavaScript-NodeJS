function hello(data){
    console.log("Data:"+data)
}

function hey(callback){
    callback('CrossRoads')
}

hey(hello)  