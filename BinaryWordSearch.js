const readline=require('readline-sync');
var file=require('fs');
var f=file.readFileSync('/home/admin1/Desktop/myjavascript/algorithmprograms/file1.txt','utf8');
var arr=f.split(" ");
var word=readline.question("enter a search word ");
if(arr.includes(word)){
    console.log("Searching word "+word+" is there in file");
}
else{
    console.log("Searching word "+word+" is Not there in file");
}