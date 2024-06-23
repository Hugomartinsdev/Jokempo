let playmusic=true
function musicon(){
    if (playmusic == true) {
        document.getElementById("musicplayer").play();
        document.getElementById("MusicBt").innerText="on";
        playmusic=false
    }else{
        document.getElementById("musicplayer").pause();
        document.getElementById("musicplayer").currentTime=0;
        document.getElementById("MusicBt").innerText="off";
        playmusic=true;

    }
}

window.onkeydown = function options(keyBoard){
    if(keyBoard.key == 1){
        alert("Entrando no modo Player VS Player")
        window.location.href="PvP.html"
    }else if(keyBoard.key == 2){
        alert("Entrando no modo Player VS Bot")
         window.location.href="Pvb.html"
    }
}

function exit(){
    alert("Saindo")
    alert("olha meus outros trabalhos")
    window.location.href="https://github.com/dashboard"
    
}