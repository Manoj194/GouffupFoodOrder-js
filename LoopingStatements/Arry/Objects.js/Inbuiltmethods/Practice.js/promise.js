
async function sync()
{
console.log("login");
var p=new Promise((resolve,reject)=>{

setTimeout(()=>
{
    resolve("is solved")
    reject("is reject")},4000)})

await p.then((ok)=>console.log(ok)),p.catch((nok)=>console.log(nok))
console.log("logout");
}
sync()

