function control(controlName){

    const element = document.getElementById(controlName);
    const id = controlName;

    const info = controls[id];

    for (i=0;i<info.toggles.length;i++){
        if (info.toggles[i]){
            toggleID(info.toggles[i])
        };
    };

    for (i=0;i<info.displays.length;i++){
        if (info.displays[i]){
            showID(info.displays[i]);
        }
    };

    for (i=0;i<info.hides.length;i++){
        if (info.hides[i]){
            hideID(info.hides[i]);
        }
    };

    for (i=0;i<info.resets.length;i++){
        if (info.resets[i]){
            restartField(info.resets[i]);
        }
    };

}