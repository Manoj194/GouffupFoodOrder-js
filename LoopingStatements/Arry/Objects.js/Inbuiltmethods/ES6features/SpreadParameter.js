// var arr1=[10,20,30,40]
// var arr2=[...arr1,60]//It will merge variable with value
// console.log(arr2);

// // Result---[ 10, 20, 30, 40, 60 ]
// /**************************************** */
// var arr1=[10,20,30,40]
// var arr2=[11,22,33,44]
// var arr3=[...arr1,...arr2]// it will combine multiple arrays
// console.log(arr3);

// // Result---[10, 20, 30, 40,
// // 11, 22, 33, 44
// // ]

// /**************************************** */
// var empdetails={
//     empname:"manoj",
//     empno:1234,
//     empsal:40000
// }
// var compdetails={
//     companyname:"TYSSj",
//     companyno:123456,
//     empsal:50000
// }
// var details={...empdetails,...compdetails}//It will combine both objects but not combile repeated property but is overidden new value EXAMPLE is=>empsal
// console.log(details);

// // //result------{
// //   empname: 'manoj',
// //   empno: 1234,
// //   empsal: 50000,
// //   companyname: 'TYSSj',
// //   companyno: 123456
// // }

// /************************************************ */
// var arr1=[10,20,30,40]
// var arr2=[...arr1,"details"]
// console.log(arr2);//concating String

// //result is=>[ 10, 20, 30, 40, 'details' ]


/************************** */
var arr=[10,20,30]
var arr1=[...arr,354]
console.log(arr1);
/*************************** */
var arr2=[25,"manu",350]
var arr3=[...arr2,"Gowda"]
console.log(arr3);
/******************************** */
var arr4=[10,20,30]
var arr5=[10,20,30]
console.log(...arr4,...arr5);
/************************************ */
var obj={
name:"manoj",
fname:"maruthi",
lname:"kumae"
}

var obj1={
    village:"bg palya",
    talluk:"magadi",
    lname:"gowdru"
}
var arr={...obj,...obj1}
console.log(arr);


