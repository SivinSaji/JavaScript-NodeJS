var read=require("readline-sync")
var value=read.question("Eneter the Limit: ")
i=1
while(i<=value)
{
    console.log(i)
    i=i+2
}