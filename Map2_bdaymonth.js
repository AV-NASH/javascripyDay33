
let randomMonth=new Array();
for(var i=1;i<=50;i++){
randomMonth.push((Math.floor(Math.random()*10)%12)+1);
}

let personInMonth=new Map();
personInMonth.set("jan",0);
personInMonth.set("feb",0);
personInMonth.set("mar",0);
personInMonth.set("apr",0);
personInMonth.set("may",0);
personInMonth.set("jun",0);
personInMonth.set("jul",0);
personInMonth.set("aug",0);
personInMonth.set("sep",0);
personInMonth.set("oct",0);
personInMonth.set("nov",0);
personInMonth.set("dec",0);

for(let a of randomMonth){
    var temp;
    switch(a){
        case 1:{
            temp=personInMonth.get("jan");
            personInMonth.set("jan",++temp);
            break;
        }

        case 2:{
            temp=personInMonth.get("feb");
            personInMonth.set("feb",++temp);
            break;
        }

        case 3:{
            temp=personInMonth.get("mar");
            personInMonth.set("mar",++temp);
            break;
        }

        case 4:{
            temp=personInMonth.get("apr");
            personInMonth.set("apr",++temp);
            break;
        }

        case 5:{
            temp=personInMonth.get("may");
            personInMonth.set("may",++temp);
            break;
        }

        case 6:{
            temp=personInMonth.get("jun");
            personInMonth.set("jun",++temp);
            break;
        }

        case 7:{
            temp=personInMonth.get("jul");
            personInMonth.set("jul",++temp);
            break;
        }

        case 8:{
            temp=personInMonth.get("aug");
            personInMonth.set("aug",++temp);
            break;
        }

        case 9:{
            temp=personInMonth.get("sep");
            personInMonth.set("sep",++temp);
            break;
        }

        case 10:{
            temp=personInMonth.get("oct");
            personInMonth.set("oct",++temp);
            break;
        }

        case 11:{
            temp=personInMonth.get("nov");
            personInMonth.set("nov",++temp);
            break;
        }

        case 12:{
            temp=personInMonth.get("dec");
            personInMonth.set("dec",++temp);
            break;
        }
    }
}

console.log(personInMonth);