var find=require('../Utility/utility')
const readline=require('readline-sync')
var low =+ process.argv[2];
var high =+ process.argv[3];
var n = find.findNumber(low,high);
console.log("Your number is : "+n);