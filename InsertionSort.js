var ins=require('../Utility/utility');
const readline=require('readline-sync');
var num = readline.questionInt("Enter the number of elements you want to enter:");
console.log("Enter " + num + " elements: ");
var arr=[];
arr=ins.createArray(num);
arr=ins.insertionSort(arr);
console.log(arr);