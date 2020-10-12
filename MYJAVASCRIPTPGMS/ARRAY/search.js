var num = [10,20,30,40,50];
var element = 20;
var flag =0;
for (i of num){
    if(i==element){
        flag+=1;
        break;
    }
    else{
        flag=0;
    }
}
if(flag>0){
    console.log("Number found")
}
else{
    console.log("Not found")
}