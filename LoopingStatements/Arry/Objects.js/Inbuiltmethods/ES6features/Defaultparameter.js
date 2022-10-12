 function mul(a,b){

    return a*b}
   var b= mul(5)

 console.log(b);
/************************************************ */
function add(a=5,b){
return a+b}
var c=add(6,10)
console.log(c);
/************************************************ */

function add(a,b=5){
    return a+b}
    var c=add(6,b=20)
    console.log(c);
    /*********************************************** */
    class names{
        constructor(a,b,c=10){
            this.a=a
            this.b=b
            this.c=c
        }}
         name1=new names(20,30,50)
console.log(name1);

    