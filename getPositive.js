var request=require('readline-sync')
var num=request.questionInt('please enter a number');

function getPositiveNum(num){
    var boolean=false;
    while(!boolean){
        if(num>0){
            boolean=true;
        }
        else 
        console.log('please enter a positive integer')

    }
}
getPositiveNum(num);