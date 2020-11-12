const prompt=require('prompt-sync')();
let start=prompt("Enter the start ");
let end=prompt("Enter the end");
let repeatednumber=new Array();
var unit,tens;

for(var i=start;i<=end;i++){
 unit=i%10;
 tens=parseInt(i/10);
 if(unit==tens) repeatednumber.push(i);
}
console.log(repeatednumber);

