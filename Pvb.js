let r=0,pj=0,pb=0,playmusic=true;

window.onkeydown = function options(keyBoard){
    if(keyBoard.key == 1){
        document.getElementById("escolhaJogador").value=1
    }else if(keyBoard.key == 2){
        document.getElementById("escolhaJogador").value=2
    }else if (keyBoard.key == 3){
        document.getElementById("escolhaJogador").value=3
    }else if(keyBoard.key == "m" || keyBoard.key == "M"){
        alert("voltando para o menu")
        window.location.href="Menu.html"
    }
}
function rodada() {
   
    const j1=document.getElementById("escolhaJogador").value;
    const b1=Math.floor(Math.random()*3+1);
    if(j1 ==1){
        if(b1==2){
            document.getElementById("resultado").innerHTML=`Jogador jogou pedra e o Bot jogou papel `//perdeu
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/pedra.png";
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/papel.png";
            pb=pb+2;
            
            
        }else if(b1==3){
            document.getElementById("resultado").innerHTML=`Jogador jogou pedra e o Bot jogou tesoura `//ganha
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/pedra.png";
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/tesoura.png";
            pj=pj+2;
        }
        else{
            document.getElementById("resultado").innerHTML=`Jogador jogou pedra e o Bot jogou pedra`//empate
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/pedra.png"
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/pedra.png";
            pj++;
            pb++;
        }
        r++;
        document.getElementById("round").innerHTML= `<b>Rodada: ${r}<b>`;
        document.getElementById("pointJ").innerHTML="Pontuação do jogador: "+pj;
        document.getElementById("pointB").innerHTML="Pontuação do BOT: "+pb;
    }

    if(j1 ==2){
        if(b1==2){
            document.getElementById("resultado").innerHTML=`Jogador jogou papel e o Bot jogou papel `//empate
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/papel.png"
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/papel.png";
            pj++;
            pb++;

        }else if(b1==3){
            document.getElementById("resultado").innerHTML=`Jogador jogou papel e o Bot jogou tesoura `//perdeu
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/papel.png"
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/tesoura.png";
            pb=pb+2;
        }
        else{
            document.getElementById("resultado").innerHTML=`Jogador jogou papel e o Bot jogou pedra`//ganha
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/papel.png"
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/pedra.png";
            pj=pj+2;
        }
        r++;
        document.getElementById("round").innerHTML=`<b>Rodada: ${r}<b>`;
        document.getElementById("pointJ").innerHTML="Pontuação do jogador: "+pj;
        document.getElementById("pointB").innerHTML="Pontuação do bOT: "+pb;
    }

    if(j1 ==3){
        if(b1==2){
            document.getElementById("resultado").innerHTML=`Jogador jogou tesoura e o Bot jogou papel `//ganha
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/tesoura.png"
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/papel.png";
            pj=pj+2;
        }else if(b1==3){
            document.getElementById("resultado").innerHTML=`Jogador jogou tesoura e o Bot jogou tesoura `//empate
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/tesoura.png"
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/tesoura.png";
            pj++;
            pb++;
        }
        else{
            document.getElementById("resultado").innerHTML=`Jogador jogou tesoura e o Bot jogou pedra`//perdeu
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/tesoura.png"
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/pedra.png";
            pb=pb+2;
        }
        r++;
        document.getElementById("round").innerHTML=`<b>Rodada: ${r}<b>`;
        document.getElementById("pointJ").innerHTML="Pontuação do jogador: "+pj;
        document.getElementById("pointB").innerHTML="Pontuação do BOT: "+pb;
    }
    if(r==5){
        if (pj>pb) {
            setTimeout(alert,110,"Parábens voce ganhou!!");
            document.getElementById("musica2").src="SRCs/assets/audios/06-caught-a-pokemon.mp3";
            document.getElementById("musica2").play();
        }else if(pj==pb){
            setTimeout(alert,410,"Nossa que loucura deu empate!!!");
            document.getElementById("musica2").src="SRCs/assets/audios/139-item-catch.mp3";
            document.getElementById("musica2").play();
        }
        else{
            setTimeout(alert,410,"Que pena você perdeu!!!");
            document.getElementById("musica2").src="SRCs/assets/audios/super-mario-death-sound-sound-effect.mp3";
            document.getElementById("musica2").play();
        }
    }else if(r>5){
        alert("reiniciando automaticamente");
        zerar();
    }
    
}

function zerar() {
    r=0,pb=0,pj=0

    document.getElementById("EscolhaP").src="";
    document.getElementById("EscolhaB").src="";
    document.getElementById("round").innerHTML=`<b>Rodada: ${r}<b>`
    document.getElementById("resultado").innerHTML="";
    document.getElementById("pointJ").innerHTML=" ";
    document.getElementById("pointB").innerHTML=" ";
    document.getElementById("musica2").src="";
    document.getElementById("escolhaJogador").value=0;
}

function musicon(){
    if (playmusic == true) {
        document.getElementById("musica").play();
        document.getElementById("MusicBt").innerText="on";
        playmusic=false
    }else{
        document.getElementById("musica").pause();
        document.getElementById("musica").currentTime=0;
        document.getElementById("MusicBt").innerText="off";
        playmusic=true;

    }
}



//fase de teste
function Reiniciar(){
    var t =prompt("Você quer reiniciar automaticamente?");
    if(t=="sim" || t==""){
        alert("ok,reiniciando");//talvez fazer um coisa continuo,
                                //acho que tem como de deixar a mensagem continuo 
        zerar();

    }else if(t=="não" || t=="nao"){
        alert("tudo bem,quando quiser reiniciar aperte o botao com o mesmo nome");
    }
}
//estudar mais sobre setTimeOut.


/*OQUE FALTA FAZER
1-TENTAR FAZER EM UM WHILE,SO SE EU QUIZER, fazer isso em um outro codigo
2-tentar usar um prompt ou alert com sim e não para ver ve a pessoa que que seja reiniciado o jogo automaticamente.
3-TENTAR FAZER FUNCIONAR O PROMPT COM A FINÇÃO REINICIAR
4-tentat fazer funcionar essa função de reinicirar*/
