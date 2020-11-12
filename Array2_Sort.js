let randomArray=new Array();
for(var i=0;i<10;i++){
    randomArray.push(Math.floor(Math.random()*900)+100);
    }
randomArray.sort();
console.log("second largest number "+randomArray[8]);
console.log("second smallest number "+randomArray[1]);
