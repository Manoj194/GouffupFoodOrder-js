var Details={
 name:"manoj",
 f_name:"manu",
 l_name:"kumar",

 greet:function(){
    console.log(Newdetails.name);
    console.log(this.f_name);
    console.log(this.l_name);
 }
}
var Newdetails={
    name:"manojkumar",
    l_name:"mannoj11",

    greet:function(){
        console.log( Details.name);
        console.log(this.name);
        console.log(this.l_name);

    }

}
Details.greet()
Newdetails.greet()


