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
