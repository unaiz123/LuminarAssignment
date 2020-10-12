str = prompt("Enter String");
result = "";
n=1;

for (i of str){
    result = result+i*n;
    n = n+1;

}
console.log(result);