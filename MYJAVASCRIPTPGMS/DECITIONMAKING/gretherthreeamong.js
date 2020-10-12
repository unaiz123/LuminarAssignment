num1 = Number(prompt("Enter num1 :"));
num2 = Number(prompt("Enter num2 :"));
num3 = Number(prompt("Enter num3 :"));

if((num1>num2) && (num1>num3)){

    console.log("Greater is Num1 : "+num1)
}

else if((num2>num1) && (num2>num3)){
    console.log("Greater is Num2 : "+num2)
}

else{
    console.log("Greater is Num3 : "+num3)
}