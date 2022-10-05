// var myself={
//     f_name:"GHS",
//     l_name:"kudur",
//     YOP:2016,

//     greet:function(){
//         return "My school name is:" +" "+this.f_name+" "+this.l_name+" "+"Passout year:"+" "+this.YOP
//     }
// }
//  var biodata= Object.create(myself)
//  biodata.f_name="Middle level school"
//  biodata.l_name="kudur"
//  biodata.YOP=2013

//  console.log(biodata);
//  console.log(biodata.greet());
//  console.log(myself.YOP);

//  //f_name: 'Middle school', l_name: 'kudur', YOP: 2013 }
// //My school name is: Middle school kudur Passout year: 2013
// //My school name is: GHS kudur Passout year: 2016

var car={
    car1:"ferrari",
    car2:"lamborgiiini",
    cars:function(){
        return "My car is:"+" "+this.car1+" "+this.car2
    }}
    var car2=Object.create(car)
    car2.car1="ferrari1"
    car2.car2="lamborgiiini2"

    console.log(car2);
    console.log(car2.cars());
