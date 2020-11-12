const prompt=require('prompt-sync')();
let number=prompt("Enter the number ");
let primefactors=new Array();

let value=parseInt(number);
for(var iterator=2;iterator*iterator<=number;iterator++){
   
    while(value%iterator==0){
        value=value/iterator;
        primefactors.push(iterator);
    }
}
console.log(primefactors.toString());