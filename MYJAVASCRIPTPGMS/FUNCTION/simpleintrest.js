function simpl(p,r,t)
    {
    var p,r,t;

    p=parseFloat(prompt("Please Enter Principle Amount"));
    r=parseFloat(prompt("Please Enter Rate Amount"));
    t=parseFloat(prompt("Please Enter Time(year)"));

    var si=(p*r*t)/100;
    console.log("Simple Interest is: "+si);
    }