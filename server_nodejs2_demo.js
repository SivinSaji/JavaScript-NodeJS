var http=require('http')
http.createServer(function(req,res){
    res.write('Its a response from a server')
    res.end()

}).listen(5000)