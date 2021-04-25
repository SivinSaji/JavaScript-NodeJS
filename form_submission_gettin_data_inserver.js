//THIS PROGRAM IS NOT COMPLETE BECAUSE (url.parse) NOT WORKING

var http=require('http')
var fs=require('fs')
var url=require('url')
http.createServer(function(req,res){
    var q=url.parse(req,res)
    if(q.pathname==='/'){
    fs.readFile('MDcollege.html',function(err,data){
        res.writeHead(200,{'content':'text/html'})
        res.write(data)
        res.end()
    })
    }else if(q.pathname==='/student'){
        fs.readFile('input.html',function(err,data){
            res.writeHead(200,{'content':'text/html'})
            res.write(data)
            res.end()
        })
 }else{
     res.write('ERROR')
     res.end()
 }
        
    
    
}).listen(5000,function(){
    console.log('SERVER STARTED')})
