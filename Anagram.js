 const request=require('readline-sync');
 var utility=require('../Utility/utility');
 var string1=request.question('enter first string');
 varstring2=request.question('enter second string')
  var anagram=utility.isAnagram(string1,string2)
 if(anagram== true){
     console.log("the String "+ string1 +" and "+ string2 +" are Anagram")
      }
else{
    console.log("the String "+ string1 +" and "+ string1 +" are not a anagram")
}