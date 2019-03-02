var request=require('readline-sync');
var utility=require('../Utility/utility');
var num=request.questionInt('please enter a number :');
var str = num.toString();
console.log('the decimal number is:'+str);
var str1=utility.decimalToBinary(str);
console.log('the binary number is:'+str1);
var str2=utility.swapNibble(str);
console.log('the decimal number is:'+str2);
var str3=utility.decimalToBinary(str2);
console.log('the binary  of decimal is :'+str3);




