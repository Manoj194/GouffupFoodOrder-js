var a=1;//Global
let b=2;//Script
const c=3;//Script

function manu()
{
    var d=4;//Local
    let e=5;//Local
    const f=6;//Local
    {
        var g=7;//Local
        let h=8;//Block
        const i=9;//Block
    }
}
manu(1,2)

{
    var j=10;//Global
    let k=11;//Block
    const l=12; //Block

}
