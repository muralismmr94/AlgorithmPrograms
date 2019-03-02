var request=require('../Utility/utility')
const readline=require('readline-sync')
var n=readline.question("Enter number between 0 to 1000 : ");
function primeNum(n){
for(let i=2;i<=n;i++){
var res=request.isPrime(i);
if(res){
    console.log(i);
}
}
}
primeNum(n);