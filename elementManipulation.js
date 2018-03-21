function toggleID(idStringShow,idStringHide){
    let elementShow = document.getElementById(idStringShow);
    let elementHide = idStringHide;
    idStringHide ? elementHide = document.getElementById(idStringHide) : elementHide = elementShow ;
    elementShow.style.display === "none" || elementShow.style.display === "" ?
        elementShow.style.display="block" 
        :
        elementHide.style.display="none";
}

function showID(idString){
    let element = document.getElementById(idString);
    element.style.display="block";
}

function hideID(idString){
    let element = document.getElementById(idString);
    element.style.display="none";
}

function password(password, passwordName, controlName){
    if (passwords[passwordName]===password){
//        alert("JEDNORÁZOVÝ PŘÍSTUP POVOLEN: SEKCE KAPITÁN")
        control(controlName);
    } else {alert("PŘÍSTUP ZAMÍTNUT!!!")}
}

function restartField(fieldId){
    document.getElementById(fieldId).value="";
}

let elementsWithId = document.querySelectorAll("[id]");
let arrayOfId =[];
for (i=0;i<elementsWithId.length;i++){
    arrayOfId[i]=elementsWithId[i].id;
}


function changeElement(elementID,newText){
    let ele = document.getElementById(elementID);
    ele.innerHTML=newText;
}