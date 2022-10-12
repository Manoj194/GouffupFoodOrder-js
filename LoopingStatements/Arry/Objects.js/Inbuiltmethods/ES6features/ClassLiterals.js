class mobile{
    constructor(Mobname,Mfgcountry,mfgyear)
    {
        this.Mobname=Mobname
        this.Mfgcountry=Mfgcountry
        this.mfgyear=mfgyear
    }
    static a=30
    b=20

    static void()
    {
        console.log("goodMorning");
        console.log(mobile.a);
        console.log(this.a);

        var MOB=new mobile()
        console.log(MOB.b);
    }

    static void1()
    {
console.log(mobile.void);
    }
    disp()
    {
        console.log("hi");
        console.log(this.b);

      

    }
    disp1()
    {
mobile2.disp()
    }
}

var mobile1=new mobile("Redmi Note7s","china",2018)
var mobile2=new mobile("Redmi Note7s","china",2018)


//mobile.void()
//mobile1.disp()

//mobile.void1()
mobile2.disp1()

console.log(mobile.a);
console.log(mobile1.b);