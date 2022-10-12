
 class manoj{
constructor(p1,p2,p3){
    this.p1=p1
    this.p2=p2
    this.p3=p3}

static a=20;
b=30
static void()
{
console.log("correct");
console.log(manoj.a);//acess static variable inside static method
var m=new manoj()
console.log(m.b);//acess not staic varible inside static method
}
static void1(){
manoj.void()
}
disp()
{
    console.log("not correct");
    console.log(c.b);//acess non static variable inside non static method
    console.log(manoj.a);//acess static variable inside non static variable
}
disp1(){
c.disp()
}}
 let c=new manoj ("rara","garagara","kakaka")
 
 manoj.void()//invoke staice method
 c.disp()//invoke non static method
 manoj.void1()
 c.disp1()
 console.log(manoj.a);//Acess static variable
 console.log(c.b);//acess non static variable

 