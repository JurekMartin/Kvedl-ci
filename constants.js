const passwords = {
    kapitan: ""
}

let shipSystems = {

    generator:false,
    sendingToqDlak:true,
    canSendandReceiveMessages:false,

}







const controls = {

    kapitan:{
        toggles:["kapitanLogin"],
        displays:[],
        hides:["kapitan","lekar","technik"],
        resets:["kapitanHeslo"]
    },

    kapitanskeHeslo:{
        toggles:[],
        displays:["kapitan"],
        hides:["kapitanLogin"],
        resets:["kapitanHeslo"]
    },

    naklad:{
        toggles:["sklady"],
        displays:[""],
        hides:["komunikace","skener","rozkazy"],
        resets:[""]
    },

    komunikace:{
        toggles:["komunikace"],
        displays:[""],
        hides:["sklady","skener","rozkazy"],
        resets:[""]
    },

    skener:{
        toggles:["skener"],
        displays:[""],
        hides:["sklady","komunikace","rozkazy"],
        resets:[""]
    },

    rozkazy:{
        toggles:["rozkazy"],
        displays:[""],
        hides:["sklady","komunikace","skener"],
        resets:[""]
    },

    technik:{
        toggles:["technik"],
        displays:[""],
        hides:["kapitan","lekar","kapitanLogin"],
        resets:[""]
    },

    diagnostika:{
        toggles:["diagnostikaLodi"],
        displays:[""],
        hides:["nastaveniSystemu","lodniDokumentace"],
        resets:[""]
    },

    systemy:{
        toggles:["nastaveniSystemu"],
        displays:[""],
        hides:["diagnostikaLodi","lodniDokumentace"],
        resets:[""]
    },

    dokumentace:{
        toggles:["lodniDokumentace"],
        displays:[""],
        hides:["diagnostikaLodi","nastaveniSystemu"],
        resets:[""]
    },

    lekar:{
        toggles:["lekar"],
        displays:[""],
        hides:["kapitan","technik","kapitanLogin"],
        resets:[""]
    },

    analyzaVzorku:{
        toggles:["analyzaVzorku"],
        displays:[""],
        hides:["prvniPomoc","lekarskeZpravy"],
        resets:[""]
    },

    prvniPomoc:{
        toggles:["prvniPomoc"],
        displays:[""],
        hides:["analyzaVzorku","lekarskeZpravy"],
        resets:[""]
    },

    lekarskeZpravy:{
        toggles:["lekarskeZpravy"],
        displays:[""],
        hides:["prvniPomoc","analyzaVzorku"],
        resets:[""]
    },

    xx:{
        toggles:[""],
        displays:[""],
        hides:["",""],
        resets:[""]
    },


}