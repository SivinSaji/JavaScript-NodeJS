var num =10
function hello()
{
    num=20
    function hey()
    {
       num=30
    }
    hey()
}
hello()
console.log(num)