var read=require('readline-sync')
var row=read.question("Enter Row no: ")
for(i=0;i<row;i++)
{
    for(j=0;j<=i;j++)
    {
        document.write("*")
    }
    document.write("\n")
}