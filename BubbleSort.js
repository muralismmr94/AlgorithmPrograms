var utility=require('../Utility/utility');
const readline=require('readline-sync');
var num = readline.questionInt("Enter the number of elements you want to enter:");
console.log("Enter " + num + " elements: ");
var arr=[];
arr=utility.createArray(num);
arr=utility.bubbleSort(arr);
console.log(arr);