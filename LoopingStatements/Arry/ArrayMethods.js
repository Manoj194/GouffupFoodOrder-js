var arr=[1,2,3]
var arr1=["manoj"]
console.log(arr.concat(arr1));
console.log(arr);
// It is used to combining two are more array

/*************************************** */
var arr1=[6,8,10]
var arr2="M"
console.log(arr1.push(arr2));
console.log(arr1);
//array.push(Element)
//It will add the given element at the end of an array and return leangth of modified array
//It will modify the existing array

/******************************** */
var arr3=[9,8,7]
console.log(arr3.pop())
console.log(arr3);
//It will remove the last element of an array and return the removed element in the console
//it will modify the existing array
/******************************** */
var arr4=[9,8,7]
console.log(arr4.unshift('5000'));
console.log(arr4);
//It will add the given element ata the begining of an array and leangth of array
//it will modify the existing array
/********************************* */
var arr5=[9,8,7]
console.log(arr5.shift());
console.log(arr5);
//It will remove the 1st element from array and return the removed element
//it will modify the existing array
/********************************* */
var arr6=[9,8,7,10]
console.log(arr6.splice(1,3,5000));
console.log(arr6);
//array.splice(start index,delete count, new element)
//It will delete as well as adds the given element to the specific index of an array and return the deleted element in the form of an array
//it will modify the existing array
/************************************ */
var arr7=[9,8,7,10,5,8,9,10]
console.log(arr7.slice(1,5));
//array.slice(start index,end index
//It will return the argument of an array based on the specified index and end index element will be executed
//console.log(arr3);
/************************************* */
var arr8=[9,8,7,10,5,8,9,10]
console.log(arr8.every((element)=>
{
    return element <9
}))
console.log(arr8);
//It will the boolean result based on the condition like it will check each and every value present in the array
//return TRUE only if all the element in an array are satisfying the condition
//return FALSE if any one element of an array is not satisfying the condition
//Without modification any existing array
/*************************************** */
var arr9=[9,8,7,10,5]
console.log(arr9.some((element)=>
{
    return element <6
}
));
//It will return the boolean result based on the condition like it will check atleast value present in the array and result TRUE
//return TRUE only if all the element in an array are satisfying the condition
//return FALSE if any one element of an array is not satisfying the condition
//Without modification any existing array
/**************************************** */
var arr10=[9,8,7,10,5]//========================================================================>>>>Dout
console.log(arr10.indexOf(5,5));
console.log(arr10);
//It will return the index value of search element traversing is form left==>right 
////Without modification any existing changes
//indexof(searchElement,Formindex)

/**************************************** */
var arr11=[9,8,7,18,5,8,7,6]//========================================================================>>>>Dout
console.log(arr11.lastIndexOf(18,4));
console.log(arr11);
//it will return the index value of search element traversing is form right==>left
//Without modification any existing changes
/******************************************* */
var arr12=[9,8,7,18,5,5,7,6]
console.log(arr12.reverse());
//It will retrn the array in reverse order
// it modify the changes in existing array
/******************************************* */
var arr13=[9,8,7,18,5,5,7,6]
console.log(arr13.includes(8));
//it will return the Boolean result based on the search elemenbt presence 
//Without modification any existing changes
/******************************************** */
var arr14=[9,8,7,18,5,5,7,6]
console.log(arr14.join ("string"));
//It will add teh element of an array based on the character specified and return the string 
///Without modification any existing changes
/******************************************** */
var arr15=[9,8,7,1,5]
arr15.forEach((element,index)=>
{
    console.log(element+"         "+index);
    console.log(element*100
        );
})
console.log(arr15);
//will the call back function as the argument
//Without modification any existing changes 
/********************************************* */
var arr16=[9,8,7,1,5]

    console.log(arr16.map((element,index)=>{
        return element
    }))
console.log(arr16);
//It will perform the operations and return all the resulted element in the form of array
//Without modification any existing changes
/******************************************** */
var arr17=[9,8,7,1,5]
console.log(arr17.filter((element,index)=>{
    if(element>1)
    return element}))
    console.log(arr17);
    //array.filter(()=>{//filtercondition})
    //It will return the array based on filter condition and it will return the element in the form of an array that only satisfyed the given filter condition
    //it will not modify the existing array
/*********************************************** */
var arr18=[1,3,5,7,9]
console.log(arr18.sort((a,b)=>{
    return a-b
}));
console.log(arr18);
//It will sort the array in ascending order(return a-b)descending order(return b-a)
//based on return specifiedd in compare function
//modifies the existing array
/************************************************ */
var arr19=[1,3,5,7,9]
console.log(arr19.sort((a,b)=>{
    return b-a
}));
console.log(arr19);
//It will sort the array in ascending order(return a-b)descending order(return b-a)
/************************************************* */
var number=[55,65,75]
function myfunc(total,number)
{
    return total-number
}
console.log(number.reduce(myfunc));
console.log(number);
//array.reduce((previousvalue,currentvalue)=>{})
//It will reduce the entire array into a single unit / to the required for(array,object,number)
/*********************************************** */
var letter="Have a good day manoj"
console.log(letter.length);
//array.reduceRight((previousvalue,currentvalue)=>{})
//similar to reduce method but traversing is from right==>left
/*********************************************** */
var letter1="Have a good day manoj"
console.log(letter1.split(""));
/*********************************************** */













4














