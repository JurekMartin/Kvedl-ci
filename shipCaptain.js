const sklady = {
    sklad1: {
        idState: "sklad1Otevreno",    
        idContent: "sklad1Obsah",
        errorContent: "errorSklad1",
        opened:true,
        doorOperable:true,
        content:"hibernační kóje",
        warning:"POZOR, porucha, kóje mimo provoz!",
    },

    sklad2: {
        idState: "sklad2Otevreno",    
        idContent: "sklad2Obsah",
        errorContent: "errorSklad2",
        opened:false,
        doorOperable:true,
        content:"kontejner s označením AV-002",
        warning:"",
    },

    sklad3: {
        idState: "sklad3Otevreno",    
        idContent: "sklad3Obsah",
        errorContent: "errorSklad3",
        opened:false,
        doorOperable:false,
        content:"zásoby jídla, vody, skafandry, nástroje apod.",
        warning:"CHYBA! Roztaveno primární ovládání dveří. Nevratně poškozeno nouzové otevírání dveří.<br>Doporučený postup: otevřít dveře laserovou dýkou.<br>Počet laserových dýk na palubě: 1<br>Laserová dýka se nachází ve: skladovém prostoru 3."
    },
}

function skladDoors(skladID){
    const sklad = sklady[skladID];
    const htmlState = document.getElementById(sklad.idState);
    const htmlContent = document.getElementById(sklad.idContent);

    if (sklad.opened &&sklad.doorOperable){
        sklad.opened=false;
        htmlState.innerHTML="STAV: zavřeno";
    } else if (sklad.doorOperable){
        sklad.opened=true;
        htmlState.innerHTML="STAV: otevřeno";
    } else {alert ("CHYBA! Dveře mimo provoz! Pro více informací spusťte diagnostiku.")};
}

function setStorages(){

    for (i=1;i<4;i++){
        let sklad, state, content, warning;
        sklad = sklady["sklad"+i];    
        state=document.getElementById(sklad.idState);
        content = document.getElementById(sklad.idContent);
        warning = document.getElementById(sklad.errorContent);

        if (sklad.opened){
            state.innerHTML=("STAV: otevřeno");
        } else (state.innerHTML=("STAV: zavřeno"));

        content.innerHTML=(sklad.content);
        warning.innerHTML=(sklad.warning);
    }
}


const messageManager = {

    humanMsgInProgress:false,
    qDlakMsgInProgress:false,

//    canSendandReceiveMessages:false,
//    sendingToKvedlak:true,
    SOSqueueHuman:0,
    SOSqueueQdlak:0,

    messages:{
        humanWarning0:"VS DEATHGALAXY - Potvrzujeme přijetí nouzové zprávy. Vaším směrem byla vyslána záchranná loď VS HOPE.",
        humanWarning1:"VS HOPE - POZOR! Máte kolizní kurz s hvězdou XW3! Opravte kurz, ať vás můžeme zachránit.",
        humanWarning2:"VS HOPE - Netušíme, co se u vás děje, ale uhněte s kolizního kurzu s hvězdou XW3! Při vašem současném kurzu k vám dorazíme asi 40 minut poté, co vás to usmaží zaživa.",
        humanWarning3:"Tady velící technik VS HOPE. Pokud nemůžete uhnout ze současaného kurzu, vyšlete jako potvrzení další tři SOS zprávy.",
        humanWarning4:"Tady kapitán VS HOPE. Zvýšili jsme výkon motorů na 110 %. Budme u vás za 30 minut po předpokládané kolizi s XW3.",
        humanWarning5:"Tady admirál Adama. KDE MÁTE ZBYLÉ DVĚ LODĚ??? VS HOPE na moje doporučení odhodila vše, co nebylo nezbytně nutné. 15 z 20 hrdinů na palubě šlo do vakua. VS HOPE letí k vám na 140 % výkonu. Předpokládaná doba příletu - 15 minut po střetu s XW3. Je mi jedno, jak to uděláte, ale k té lodi se DOSTANETE a náklad ve druhém skladu DORUČÍTE. Jestli ne, tak vás dám zaživa stáhnout z kůže jako nejhorší zrádce, i kdyby to mělo být to poslední, co udělám!",

        kvedlak0:"Dobry den. Zde Krrrr-Quik. Zachytili jsme vasi nouzovou pastu. Jedeme na pomoc. Pokud se vzdate, zachranime vas a predame vasim kamaradum. Pokud souhlasite, vyslete dalsi tri nouzove pasty. Preji hodne stesti. Krrrr-Quik.",
        kvedlak1:"Dobry den. Zde Krrrr-Quik. Dekujeme za duveru. Zaznamenali jsme, ze mate kolizni kurz s hvezdou Nadeje. Predpokladame, ze jej nemuzete zmenit, jinak byste tak jiz ucinili. Prosim pokuste se jej zmenit, je nam to moc lito, ale nestihneme vas zachranit drive nez 20 minut po vasi nestastne potencialni kolizi. Bohuzel nezname vasi presnou situaci, takze nejsme schopni pomoci vice. At vam kloaky zalije pocit stesti. Krrr-Quik.",
        kvedlak2:"Dobry den. Zde Krrr-Quik. Modlime se za vase pneumatiky. Podarilo se nam prekonkfigurovat zrrrd'b, budeme u vas 15 minut po vasi potencialni kolizi. Nevzdavejte se, nadeje muze byt bliz, nez si myslite. Krrr-Quik."
    },

    sentMessages:{
        humanWarning0:false,
        humanWarning1:false,
        humanWarning2:false,
        humanWarning3:false,
        humanWarning4:false,
        humanWarning5:false,
        kvedlak1:false,
        kvedlak2:false,
        kvedlak3:false,
    },

    conditions:{

        humanWarningTrue:{
            trueMessage:true,
            sent:true,
        },

        humanWarning0:{
            trueMessage:"humanWarningTrue",
            SOSqueueHuman:1,
            delayInMS:5000,
            sent:false,
        },
        humanWarning1:{
            trueMessage:"humanWarning0",
            SOSqueueHuman:0,
            delayInMS:10000,
            sent:false,
        },
        humanWarning2:{
            trueMessage:"humanWarning1",
            SOSqueueHuman:0,
            delayInMS:5,
            sent:false,
        },
        humanWarning3:{
            trueMessage:"humanWarning2",
            SOSqueueHuman:0,
            delayInMS:5,
            sent:false,
        },
        humanWarning4:{
            trueMessage:"humanWarning3",
            SOSqueueHuman:3,
            delayInMS:5,
            sent:false,
        },
        humanWarning5:{
            trueMessage:"humanWarning4",
            SOSqueueHuman:0,
            delayInMS:5,
            sent:false,
        },

        humanWarning6:{
            trueMessage:"humanWarning5",
            SOSqueueHuman:9900,
            delayInMS:500000000,
            sent:false,
        },

        kvedlakTrue:{
            trueMessage:true,
            SOSqueueQdlak:1,
            sent:true,
        },

        kvedlak0:{
            trueMessage:"kvedlakTrue",
            SOSqueueQdlak:1,
            sent:false,
        },
        kvedlak1:{
            trueMessage:"kvedlak0",
            SOSqueueQdlak:3,
            delayInMS:5,
            sent:false,
        },
        kvedlak2:{
            trueMessage:"kvedlak1",
            SOSqueueQdlak:1,
            delayInMS:5,
            sent:false,
        },

        kvedlak3:{
            trueMessage:"kvedlak2",
            SOSqueueQdlak:10000,
            delayInMS:5,
            sent:false,
        },

    }


}

function sendSOS(){
    const qdlak = shipSystems.sendingToqDlak;
    messageManager.SOSqueueHuman+=1;
    if (qdlak){messageManager.SOSqueueQdlak+=1;}
}


function resolveMessages(){

    const messages = messageManager.messages;
    const conditions = messageManager.conditions;
    const qHuman = messageManager.SOSqueueHuman;
    const qQdlak = messageManager.SOSqueueQdlak;

    for (i=0;i<6;i++){
        let y = i+1;
        let string = "humanWarning"+i;
        let obj = conditions["humanWarning"+i];

        if (conditions[obj.trueMessage].sent && obj.SOSqueueHuman<=qHuman && obj.sent===false && messageManager.humanMsgInProgress===false){
            messageManager.humanMsgInProgress=true;
            window.setTimeout(
                function(){
                    alert(messages[string],"PŘÍCHOZÍ ZPRÁVA");
                    obj.sent=true;
                    messageManager.humanMsgInProgress=false;
                    messageManager.SOSqueueHuman=0;
                    if (conditions["humanWarning"+y].SOSqueueHuman===0){
                        resolveMessages();
                    }
                },obj.delayInMS
            );
        }
    }

    for (i=0;i<3;i++){
        let y = i+1;
        let string = "kvedlak"+i;
        let obj = conditions["kvedlak"+i];

        if (conditions[obj.trueMessage].sent && obj.SOSqueueQdlak<=qQdlak && obj.sent===false && messageManager.qDlakMsgInProgress===false){
            messageManager.qDlakMsgInProgress=true;
            window.setTimeout(
                function(){
                    alert(messages[string],"PŘÍCHOZÍ ZPRÁVA");
                    obj.sent=true;
                    messageManager.qDlakMsgInProgress=false;
                    messageManager.SOSqueueQdlak=0;
                    if (conditions["kvedlak"+y].SOSqueueQdlak===0){
                        resolveMessages();
                    }
                },obj.delayInMS
            );
        }
    }




}

resolveMessages();