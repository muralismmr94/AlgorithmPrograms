const readline=require('readline-sync')
 function getPosittiveNum(num){
var bol=false;
while(!bol){    
        var n=readline.question("Enter number between 0 to 1000 : ");
        if(n>0&n<1000)
        return true;
        else
        console.log("please enter a positive integer") 
}
}
