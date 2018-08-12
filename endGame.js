
function endGame() {
    window.setTimeout(function(){
        document.querySelector("body").innerHTML = "";
        document.body.style.backgroundColor = "black";
        document.body.style.cursor = "none";
    },10000);
}



//POZNÁMKY: říct technikovi, co to je "vazovagální-beta T" :)