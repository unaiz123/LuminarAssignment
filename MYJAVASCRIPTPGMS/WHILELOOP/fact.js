fact=1;
function factorial(num){
    while(i<=num){
       var fact=fact*i;
        i++;
        return fact;
    }
}
res = factorial(5);
console.log(res)
