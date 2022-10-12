var numb=14341
var copy=numb
var sum=0

while (numb!=0) {
    var rem=numb/10
    sum=(sum*10)+rem
    numb=numb/10

    
}
if(copy==sum)
{
    console.log("It is palindrom");
}
else{
    console.log(" it is not palindrom");
}