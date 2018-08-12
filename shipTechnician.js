let errors = {
    
    fatal:{

        lifeSupport:{
            id: "lifeSupport",
            text: "Podpora Života",
            fixed: false,
            status:{
                broken: "POZOR! Chyba v dodávce energie! Podpora života je napájena z nouzových zdrojů! Nutná rychlé zapojení a/nebo zprovoznění generátoru!",
                fixed: "Chyba opravena. Podpora života je funkční." ,
            }
        },

        motors:{
            id: "motors",
            text: "Motory",
            fixed: false,
            status: {
                broken: "POZOR! Přívod paliva do motoru přerušen! Stabilizátor paliva zničen! Otevření přívodu paliva do motoru může vést s pravděpodobností 100 % k explozi nádrží!",
                fixed: "Přívod paliva do motoru otevřen. Připoutejte se a vyčkejte na zážeh.",
            }
        },

        structure:{
            id: "structure",
            text: "Struktura lodi",
            fixed: false,
            status: {
                broken: "POZOR! Roztavení pláště strojovny!",
                fixed: "Tato chyba nejde ve hře opravit, ajajajajaj! :) ",
            }
        },

        generator:{
            id: "generator",
            text: "Generátor energie",
            fixed: false,
            status: {
                broken: "POZOR! Roztavení pláště reaktoru! Výkon reaktoru: 0 %. Systémy pracují na záložní baterii. Nutná oprava dříve, než dojde záložní zdroj!",
                fixed: "Generátor energie běží na nízký výkon.",
            }
        },

        engRoom:{
            id: "engRoom",
            text: "Strojovna",
            fixed: false,
            status: {
                broken: "POZOR! Přístup do strojovny uzavřen! Důvod: Nebezpečné prostředí po explozi způsobené výbuchem střely. Spuštěny automatické systémy pro dekomtaminaci a ochlazení místnosti na provozní teplotu. Místnost bude zpřístupněna v blízké době.",
                fixed: "Přístup do strojovny otevřen. Prostředí ve strojovně nepředstavuje bezprostřední riziko pro život.",
            }
        },

        communications:{
            id: "communications",
            text: "Komunikace",
            fixed: false,
            status: {
                broken: "Vysílač není připojen ke zdroji energie. Záložní zdroj fatálně zničen. Připojte vysílač ke generátoru a ujistěte se, že generátor funguje.",
                fixed: "Vysílač je připojen ke slabému zdroji energie. Kodér je zničen. Je možné vysílat pouze standardizované nouzové zprávy.",
            }
        },

        shields:{
            id: "shields",
            text: "Štíty",
            fixed: false,
            status: {
                broken: "POZOR! Štíty jsou nefunkční. Loď je bez fyzické ochrany! Roztavený stabilizátor. Vyměňte stabilizátor - k dispozici ve skladovém prostoru č. 3.",
                fixed:"Tato chyba nejde ve hře opravit, ajajajajaj! :) ",
            }
        },

        scanner:{
            id: "scanner",
            text: "Lodní skener",
            fixed: false,
            status: {
                broken: "POZOR! Zesilovač skeneru poškozen. Dosah skeneru je omezen. Odhadovaný dosah skeneru: 20 centimetrů.",
                fixed:"Tato chyba nejde ve hře opravit, ajajajajaj! :) ",
            }
        },

        autoRepair:{
            id: "autoRepair",
            text: "Systémy automatické opravy lodi",
            fixed: false,
            status: {
                broken: "POZOR! Systémy automatické opravy vyřazeny z provozu. Potřebné náhradní díly jsou ve strojovně (zničeny). Záložní náhradní díly pro systémy automatické ochrany jsou ve skladovém prostoru č. 3.",
                fixed:"Tato chyba nejde ve hře opravit, ajajajajaj! :) ",
            }
        },


    },

    other:{

        temperature:{
            id: "temperature",
            text: "Teplota v obytných částech lodi",
            fixed: false,
            status: {
            broken: "POZOR! Vyšší teplota vzduchu v části pro posádku. Zdravotní nebezpečí: minimální",
            fixed:"Teplota v části pro posádku je stabilizována.",
            }
        },

        backupLifeSupport:{
            id: "backupLifeSupport",
            text: "Záložní podpora života",
            fixed: false,
            status: {
            broken: "POZOR! Silné poškození záložní podpory života. Poškození: 90 %. Záložní podpora života je schopná udržet naživu po dobu delší než pár minut maximálně jednoho dospělého člověka. Nebezpečí: minimální, dokud funguje hlavní podpora života. NEVYPÍNEJTE hlavní podporu života!",
            fixed:"Tato chyba nejde ve hřhe opravit, ajajajajaj! :) ",
            }
        },

        cargoDoors:{
            id: "cargoDoors",
            text: "Dveře k nákladovému prostoru č. 3",
            fixed: false,
            status: {
            broken: "Dveře k nákladovému prostoru č. 3 jsou zaseklé. Otevírací mechanismus je roztaven.",
            fixed:"Tato chyba nejde ve hřhe opravit, ajajajajaj! :) ",
            }
        },

        stasisCabin:{
            id: "stasisCabin",
            text: "Stázová kabina v nákladovém prostoru č. 1",
            fixed: false,
            status: {
            broken: "Poškození stázové kabiny v nákladovém prostoru č. 1. Kabina je nefunční. Proběhlo nouzové vypnutí stázového pole.",
            fixed:"Tato chyba nejde ve hřhe opravit, ajajajajaj! :) ",
            }
        },

        computerData:{
            id: "computerData",
            text: "Data v lodním počítači",
            fixed: false,
            status: {
            broken: "Poškození dat v lodním po49t@$$. Neukládají se informace o dění na palubě. N^#teré soubory jsou poškozeny. Ohrožení: cannot read '.d@nger' of undefinaed! N€zjiszt€n0 poskozeni wichtig s0ubbbboru. List witchtig subbbboru muuuze bit poszkozsen.",
            fixed:"Tato chyba nejde ve hřhe opravit, ajajajajaj! :) ",
            }
        },

    }

}

function showErrors () {

    let crits = document.getElementById("criticalErrors");
    let other = document.getElementById("otherErrors");
    crits.innerHTML="";
    other.innerHTML="";

    for (var propertyName in errors.fatal ) {
        let error = errors.fatal[propertyName];
        let errorElement = document.createElement("div");
        errorElement.id = error.id;
        let status = error.status.broken;

        if (!error.fixed){
            errorElement.className = "error unsolvedError";
        } else {
            errorElement.className = "error solvedError";
        }

        if (error.fixed){
            status = error.status.fixed;
        }

        errorElement.innerHTML = "<span class='errorTitle'>"+error.text+"</span>: "+status;

        crits.appendChild(errorElement);
    }

    for (var propertyName in errors.other ) {
        let error = errors.other[propertyName];
        let errorElement = document.createElement("div");
        errorElement.id = error.id;
        let status = error.status.broken;

        if (!error.fixed){
            errorElement.className = "error unsolvedError";
        } else {
            errorElement.className = "error solvedError";
        }

        if (error.fixed){
            status = error.status.fixed;
        }

        errorElement.innerHTML = "<span class='errorTitle'>"+error.text+"</span>: "+status;

        other.appendChild(errorElement);
    }
    

}

function solveError (errorType, errorName) {

    errors[errorType][errorName].fixed = true;
    addMessage("zpravy", errors[errorType][errorName].status.fixed, "messageSuccess");
    showErrors();

}

function logErrors () {

    let arrayOfProps1 = [];
    let arrayOfProps2 = [];

    for (propt in errors.other) {
        arrayOfProps1.push(propt);
    }

    for (property in errors.fatal) {
        arrayOfProps2.push(property);
    }

    for (i = 0; i < arrayOfProps1.length; i++) {
        displayErrorWithTimeout(errors.other[arrayOfProps1[i]].status.broken,i*1000);
    }

    for (i = 0; i < arrayOfProps2.length; i++) {
        displayErrorWithTimeout(errors.fatal[arrayOfProps2[i]].status.broken,i*1000+10000);
    }

}

function displayErrorWithTimeout (message, timeout) {
    window.setTimeout(function(){
        addMessage("zpravy", message,"alertNoBlink");
        playSound(alertSound);
    }, timeout);
}


function setSystem(command){

    switch (command) {

        case "frekvence":
            shipSystems.sendingToqDlak=!shipSystems.sendingToqDlak;
            if (shipSystems.sendingToqDlak) {
                addMessage("zpravy", "Vysílací frekvence změněna. Vysílač nastaven na široké pásmo frekvencí maximalizující dosah zpráv.", "messageSuccess");
            } else {
                addMessage("zpravy", "Vysílací frekvence změněna. Vysílač nastaven na šifrovanou nouzovou frekvenci Republiky.", "messageSuccess");
            }
        break;

        case "generator":
            shipSystems.generator=true;

            solveError("fatal","lifeSupport");
            solveError("fatal","generator");
            solveError("fatal","communications");
            shipSystems.canSendandReceiveMessages=true;
        break;

        case "ventilator":
            shipSystems.ventilator = true;
            solveError("other","temperature");
        break;

        case "motor":
            solveError("fatal","motors");
            endGame();
        break;

        default:
            alert("Nahození systému neúspěšné. Nic se nestalo.")
        break;

    }

}