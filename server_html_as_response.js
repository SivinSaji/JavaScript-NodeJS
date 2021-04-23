//Here we use an HTML file as response to the user for his request
//Its is a web ser created by nodeJS
var http=require('http')               //Here we call the library http
var fs=require('fs')                   //Here we call the library fs(file system) 
http.createServer(function(req,res){   //createServer is a inbuilt module of http library.But this code will run when we host server(when we run code in terminal)
    fs.readFile('MDcollege.html',function(err,data){   //readFile is a inbuilt function of library fs. Inside this function we give the name of html file and a function which include 2 parrameters err,data here err represet the error and data represent the data in the file.
    res.writeHead(200,{'Content-type':'text/html'})    //writeHead is a inbuilt function. which has 2 parameters one is 200. 200 represents the request has succed. and next is the content type:text/html 
    res.write(data)                                    //res.write(data) the html data
    res.end()                                           //It is used to understand the server the response is finished
})
}).listen(7000)                                          //Here 7000 is the port number.listen(7000) This is used to search the site using localhost:7000 in the same device we host the server using the code we only get this site at that device only.
