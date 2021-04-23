//HERE WE HAVE 2 SERVER USING NodeJS
//This is  how we create a server using NodeJS.Here we create 2 servers we can create the rever using this 2 methods the commonly used method is the first method.
var http=require('http')                   //Here we call the librarry http 
http.createServer(function(req,res){       //createServer is a inbuilt module of http library.But this code will run when we host server(when we run code in terminal)
    res.write('Its a response from a server')   //But this function will only run when a request come to the server(ie. when a user search the web site in the browser). Here we write Crossroads it will be displaye in the browser
    res.end()                                   //It is used to understand the server the response is finished
}).listen(5000)                                   //Here 5000 is the port number.listen(5000) This is used to search the site using localhost:5000 in the same device we host the server using the code we only get this site at that device only.


//This is same as that in the top its only differnce is here we create a fubction named server and that function is only called when user access the website. server function is a call back function
var http=require('http')                      //Here we call the librarry 
http.createServer(server).listen(7000)        //Here 7000 is the port number.listen(7000) This is used to search the site using localhost:7000 in the same device we host the server using the code we only get this site at that device only.
function server(req,resp){                   //But this function will only run when a request come to the server(ie. when a user search the web site in the browser). Here we write Crossroads it will be displaye in the browser. Here server function is a call back Function
    resp.write('Cross Roads  a well known tech channnel')  //here we print the output
    resp.end()                                                   //It is used to understand the server the response is finished
}




