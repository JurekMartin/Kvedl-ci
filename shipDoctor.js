let setVirus = function setVirus(){
    resultArray[0][1]=Math.random()+1;
}

let randomize = function randomize(){
    for (i=0;i<resultArray.length;i++){
        resultArray[i][1]=Math.random();
    }
}

let testIsRunning = false;
let abortOldTest = false;

function waitForResults(miliseconds, ...functions){

    if(testIsRunning){
        abortOldTest=true;
    }
    testIsRunning = true;

    let timeSpent = 0;
    let timeLeft = miliseconds;
    let timeLeftInTime = 0;
    let timer = document.getElementById("specimenWorking");

    let Interval = setInterval(()=>{

        if (abortOldTest){
            abortOldTest=false;
            clearInterval(Interval);
        }

        let minutes = Math.floor(timeLeft/(1000*60));
        let seconds = Math.floor(timeLeft/1000)-minutes*60;
        let bonusZero ="";
        if (seconds<10){bonusZero="0"};
        timer.innerHTML = "PRACUJI... Odhadovaný čas do konce analýzy: "+minutes+" : "+bonusZero+seconds;
        timeLeft -=10;
        if (timeLeft<0){
            clearInterval(Interval);
            testIsRunning=false;
            timer.innerHTML = "";


            if (functions){
                for (y=0;y<functions.length;y++){
                    functions[y]();
                }
            }

        }
        },10)

}

let createTable = function createTable(){

    let table = document.createElement("table");

    for(i=0;i<resultArray.length;i++){
        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");
        cell1.innerHTML = resultArray[i][0];
        cell2.innerHTML = resultArray[i][1];
        

        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    }

    results.appendChild(table);

}

let resultArray =[
    ["XH1C: ",0],
    ["TRZG: ",0],
    ["PKKC: ",0],
    ["EWQQ: ",0],
    ["LMBB: ",0],
    ["XYZA: ",0]
]

function analyzeSpecimen(code){

    let working = document.getElementById("specimenWorking");
    let results = document.getElementById("results");
    results.innerHTML="VZOREK "+code;
 
    switch (code){

        case "VZ1":
        case "VZ2":
        case "VZ3":
        case "VZ4":
            waitForResults(20000,randomize, setVirus,createTable);
            break;

        default:
            waitForResults(5000,randomize,createTable);
            break;

    }

}