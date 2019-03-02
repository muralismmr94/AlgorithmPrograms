var request=require('readline-sync')
var utility=require('../Utility/utility')
var number=request.questionInt('please enter a number :')
utility.toBinary(number);