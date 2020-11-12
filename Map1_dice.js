let diceMap=new Map();
let check=true;
for(var i=1;i<=6;i++){
    diceMap.set(i,0);
}
while(check){
    let dice=(Math.floor(Math.random()*10)%6)+1;
    let value=diceMap.get(dice);
    value++;
    diceMap.set(dice,value);
   for(let [key,val] of diceMap){
       if(val==10) check=false;
   }
}
console.log(diceMap);
let no_of_rolls=0;
let max;
let min;
for(let [key,val] of diceMap){
    if(no_of_rolls<val) {max=key;no_of_rolls=val;}
}
no_of_rolls=10;
for(let [key,val] of diceMap){
    if(no_of_rolls>val) {min=key;no_of_rolls=val;}
}

console.log("max is "+max);
console.log("min is "+min);