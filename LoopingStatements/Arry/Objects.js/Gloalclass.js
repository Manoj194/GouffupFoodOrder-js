var Details={
 name:"manoj",
 f_name:"manu",
 l_name:"gowda",

 greet:function(){
    console.log(this.name);
    console.log(this.f_name);
    console.log(this.l_name);
 }
}
var Newdetails={
    name:"manju",
    f_name:"manjunath",
    l_name:"manju11",

    greet:function(){
        console.log( Details.name);
        console.log(this.f_name);
        console.log(this.l_name);

    }

}
Details.greet()
Newdetails.greet()


