


// async function sync(){
//     console.log("login to the application");
// var p= new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     resolve("In progress")
//     reject("rejected")
// },3000)})


// await p.then((ok)=>console.log(ok)),p.catch((Notok)=>console.log(Notok))

// console.log("Logout the application");
// }
// sync()


// async function sync1(){
//     console.log("login");
//     var p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve("validate")
//     reject("not validate")
//     },4000)})

//     var pa=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Fine")
//         reject("not fine")
//         },4000)}) 

//     await p.then((ok)=>console.log(ok)),p.catch((notok)=>console.log(notok))
//     await pa.then((okk)=>console.log(okk)),pa.catch((notokk)=>console.log(notokk))

//     console.log("Logout");
// }
// sync1()

async function sync()
{
    console.log("hii");
    var p=new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
        resolve("OKOK")
        reject("Not ok ok")},4000)})
        await p.then((ok)=>console.log(ok)),p.catch((n)=>console.log(n))
        console.log("bye");
}
sync()
    
    
