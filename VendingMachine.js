var vend=require('../Utility/utility')
const readline=require('readline-sync')
function vendMachine(){
    var amount=readline.question("enter amount: ");
    vend.vendingMachine(amount,0,0);
}
vendMachine();