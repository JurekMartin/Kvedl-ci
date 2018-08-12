setStorages();

addMessage("zpravy","POZOR! Kritické poškození lodi! Hlavní počítač mimo provoz! Přepnuto do nouzového rozhraní. Spouštím diagnostiku systémů...","alertMessage");

window.setTimeout(function(){
    addMessage("zpravy","Diagnostická sekce se souhrnem výsledků diagnostiky lodi je on-line.","error solvedError")    
    showErrors();
},25000);

window.setTimeout(function(){
    logErrors();
},0);

window.setTimeout(function(){
   solveError("fatal", "engRoom");
},40000);

window.setTimeout(function(){
    if (!shipSystems.ventilator) {
        addMessage("zpravy","POZOR! Zvyšuje se teplota v obytných částech lodi! Zdravotní riziko: mírné.","alertMessage")
    }
 },20000);

 window.setTimeout(function(){
    if (!shipSystems.ventilator) {
        addMessage("zpravy","POZOR! Zvyšuje se teplota v obytných částech lodi! Zdravotní riziko: zvýšené. Zkontrolujte klimatizaci!","alertMessage")
    }
 },40000);

 window.setTimeout(function(){
    if (!shipSystems.ventilator) {
        addMessage("zpravy","POZOR! Zvyšuje se teplota v obytných částech lodi! Zdravotní riziko: vysoké. Hrozí dehydratace a úpal. Oravte klimatizaci, nebo se svlékněte do plavek!","alertMessage")
    }
 },60000);

 window.setTimeout(function(){
    if (!shipSystems.ventilator) {
        addMessage("zpravy","POZOR! Zdraví nebezpečná teplota v obytných částech lodi! Zdravotní riziko: vysoké. Opravte klimatizaci a svlékněte plavky!","alertMessage")
    }
 },80000);