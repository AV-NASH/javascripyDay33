let randomArray=new Array();
randomArray.push(Math.floor(Math.random()*900)+100);
randomArray.push(Math.floor(Math.random()*900)+100);
randomArray.push(Math.floor(Math.random()*900)+100);
randomArray.push(Math.floor(Math.random()*900)+100);
randomArray.push(Math.floor(Math.random()*900)+100);
randomArray.push(Math.floor(Math.random()*900)+100);
randomArray.push(Math.floor(Math.random()*900)+100);
randomArray.push(Math.floor(Math.random()*900)+100);
randomArray.push(Math.floor(Math.random()*900)+100);
randomArray.push(Math.floor(Math.random()*900)+100);
console.log(randomArray);

function findMaxIndex(array){
    let max=array[0];
    let index=0;
    for(var i=1;i<array.length;i++){
        if(max<array[i])max=array[i];
    }
    for(var i=0;i<array.length;i++){
        if(max==array[i]){index=i; break;}
    }
    return index;
}

function findMinIndex(array){
    let min=array[0];
    let index=0;
    for(var i=1;i<array.length;i++){
        if(min>array[i])min=array[i];
    }
    for(var i=0;i<array.length;i++){
        if(min==array[i]){index=i; break;}
    }
    return index;
}

randomArray.splice(findMaxIndex(randomArray),1);
randomArray.splice(findMinIndex(randomArray),1);

let maxIndex=findMaxIndex(randomArray);
let minIndex=findMinIndex(randomArray);
console.log("Second largest number "+randomArray[maxIndex]);
console.log("Second smallest number "+randomArray[minIndex]);

