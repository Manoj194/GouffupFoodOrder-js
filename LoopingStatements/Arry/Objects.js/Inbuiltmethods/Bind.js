var myself={
    f_name:"manoj",
    l_name:"gowda",

   names :function () {
console.log("my name is "+" "+this.f_name+" "+this.l_name);
   }}

   var myself1={
    f_name:"manu",
    l_name:"gowdru",
   
   name1 :function (){
    cconsole.log("my name is "+" "+this.f_name+" "+this.l_name);

   }}

   myself.names()

 var ref= myself.names.bind(myself1)

   ref()
   


