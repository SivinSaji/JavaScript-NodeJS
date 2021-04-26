/*Here we collect data from the user in a form with method GET and which has 
action=signupaction we use her url library to fetch the data */ 
var http=require('http')
var fs=require('fs')
var url=require('url')          //url library used here

http.createServer(function(req,res){

    var q=url.parse(req.url,true)           //we set the value into q
    //console.log(q.pathname)

    if(q.pathname==='/'){                  //we check the paath using q.pathname
    fs.readFile('MDcollege.html',function(err,data){
        res.writeHead(200,{'content':'text/html'})
        res.write(data)
        res.end()
    })
    }else if(q.pathname==='/signup'){
        fs.readFile('input.html',function(err,data){
            res.writeHead(200,{'content':'text/html'})
            res.write(data)
            res.end()
        })
 }else if(q.pathname==='/signupaction'){      //we check the paath using q.pathname which only takes the signupaction only donot take the next data in the url
    console.log(q.query)                      //we print the data we collected in form like an object in console
     console.log(q.query.gender)               //we can seperate the data using the name used in html page
     res.writeHead(200,{'content':'text/html'})
        res.write('<h1>'+q.query.Name+' your account created succesfully'+'</h1>')
        //Here we give response to user using the data which is collected from the user, we also use HTML tags inside the function 
        res.end()
  
}else{
     res.write('ERROR')
     res.end()
 }
        
    
    
}).listen(5000,function(){
    console.log('SERVER STARTED')})
