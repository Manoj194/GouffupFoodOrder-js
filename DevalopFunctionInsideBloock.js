var a=1;//Global
let b=2;//Script
const c=3;//Script

{
    var d=4;//Global
    let e=5;//Block
    const f=6;//Block
  
    function manu()
{
    var g=7//Local
    let h=8;//local
    const i=9;//local
    {
        var d=15//local
    let e=16//block
    const f=618//block
  
    }
}
}
manu(1,2)
    
