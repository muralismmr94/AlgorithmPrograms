var mer=require('../Utility/utility');
const readline=require('readline-sync');
var num = readline.questionInt("Enter the number of elements you want to enter:");
console.log("Enter " + num + " elements: ");
var arr=[];
arr=mer.createArray(num);
arr=mer.mergeSort(arr);
console.log(arr);