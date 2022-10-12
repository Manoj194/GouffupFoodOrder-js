
console.log("Login");

setTimeout(()=>
{
    console.log("Execute aftewr one second");
},1000)

setTimeout(()=>
{
    console.log("Execute aftewr three second");
},3000)

setTimeout(()=>
{
    console.log("Execute aftewr Two second");
},2000)

console.log("Logout");

//Result is Login
// Logout
// Execute aftewr one second
// Execute aftewr Two second
// Execute aftewr three second

