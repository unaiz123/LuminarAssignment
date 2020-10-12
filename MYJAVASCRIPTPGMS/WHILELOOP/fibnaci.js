num=Number(prompt("enter the no of numbers in series : "))
fno=0
sno=1
count=0
while(count<=num){
    console.log("Series is : "+fno)
    res=fno+sno;
    fno=sno;
    sno=res;
    count+=1;
}