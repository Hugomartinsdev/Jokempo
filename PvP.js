let r=0,pj=0,pj2=0,playmusic=true;

window.onkeydown = function options(keyBoard){
    if(keyBoard.key == 1){
        document.getElementById("ChoicePlayer1").value=1
    }else if(keyBoard.key == 2){
        document.getElementById("ChoicePlayer1").value=2
    }else if (keyBoard.key == 3){
        document.getElementById("ChoicePlayer1").value=3
        alert(j1)
    }else if(keyBoard.key == 8){
        document.getElementById("ChoicePlayer2").value=8
    }else if(keyBoard.key == 9){
        document.getElementById("ChoicePlayer2").value=9
    }else if (keyBoard.key == 0){
        document.getElementById("ChoicePlayer2").value=0
        alert(j1)
    }else if(keyBoard.key == "m" || keyBoard.key == "M"){
        alert("voltando para o menu")
        window.location.href="Menu.html"
    }
}


function rodada() {
   //pedra=8,papel=9,tesoura=0
    const j1=document.getElementById("ChoicePlayer1").value;
    const j2= document.getElementById("ChoicePlayer2").value
    if(j1 ==1){
        if(j2==9){
            document.getElementById("resultado").innerHTML=`Jogador1 jogou pedra e o Jpgador2 jogou papel `
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/pedra.png";
            document.getElementById("EscolhaP2").src="SRCs/assets/IMGs/papel.png";
            pj2=pj2+2;
            
            
        }else if(j2==0){
            document.getElementById("resultado").innerHTML=`Jogador1 jogou pedra e o Jogador2 jogou tesoura `//ganha
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/pedra.png";
            document.getElementById("EscolhaP2").src="SRCs/assets/IMGs/tesoura.png";
            pj=pj+2;
        }
        else{
            document.getElementById("resultado").innerHTML=`Jogador1 jogou pedra e o Jogador2 jogou pedra`//empate
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/pedra.png"
            document.getElementById("EscolhaP2").src="SRCs/assets/IMGs/pedra.png";
            pj++;
            pj2++;
        }
        r++;
        document.getElementById("round").innerHTML= `<b>Rodada: ${r}<b>`;
        document.getElementById("pointJ").innerHTML="Pontuação do jogador 1: "+pj;
        document.getElementById("pointP2").innerHTML="Pontuação do jogador 2: "+pj2;
    }

    if(j1 ==2){
        if(j2==9){
            document.getElementById("resultado").innerHTML=`Jogador1 jogou papel e o Jogador2 jogou papel `//empate
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/papel.png"
            document.getElementById("EscolhaP2").src="SRCs/assets/IMGs/papel.png";
            pj++;
            pj2++;

        }else if(j2==0){
            document.getElementById("resultado").innerHTML=`Jogador1 jogou papel e o Jogador2 jogou tesoura `//perdeu
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/papel.png"
            document.getElementById("EscolhaP2").src="SRCs/assets/IMGs/tesoura.png";
            pj2=pj2+2;
        }
        else{
            document.getElementById("resultado").innerHTML=`Jogador1 jogou papel e o Jogador2 jogou pedra`//ganha
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/papel.png"
            document.getElementById("EscolhaP2").src="SRCs/assets/IMGs/pedra.png";
            pj=pj+2;
        }
        r++;
        document.getElementById("round").innerHTML=`<b>Rodada: ${r}<b>`;
        document.getElementById("pointJ").innerHTML="Pontuação do jogador 1: "+pj;
        document.getElementById("pointP2").innerHTML="Pontuação do jogador 2: "+pj2;
    }

    if(j1 ==3){
        if(j2==9){
            document.getElementById("resultado").innerHTML=`Jogador1 jogou tesoura e o Jogador2 jogou papel `//ganha
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/tesoura.png"
            document.getElementById("EscolhaP2").src="SRCs/assets/IMGs/papel.png";
            pj=pj+2;
        }else if(j2==0){
            document.getElementById("resultado").innerHTML=`Jogador1 jogou tesoura e o Jogador2 jogou tesoura `//empate
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/tesoura.png"
            document.getElementById("EscolhaP2").src="SRCs/assets/IMGs/tesoura.png";
            pj++;
            pj2++;
        }
        else{
            document.getElementById("resultado").innerHTML=`Jogador1 jogou tesoura e o Jogador2 jogou pedra`//perdeu
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/tesoura.png"
            document.getElementById("EscolhaP2").src="SRCs/assets/IMGs/pedra.png";
            pj2=pj2+2;
        }
        r++;
        document.getElementById("round").innerHTML=`<b>Rodada: ${r}<b>`;
        document.getElementById("pointJ").innerHTML="Pontuação do jogador 1: "+pj;
        document.getElementById("pointP2").innerHTML="Pontuação do jogador 2: "+pj2;
    }
    if(r==5){
        if (pj>pj2) {
            setTimeout(alert,110,"Parábens Jogador 1 ganhou!!");
            document.getElementById("musica2").src="SRCs/assets/audios/06-caught-a-pokemon.mp3";
            document.getElementById("musica2").play();
            
            
        }else if(pj==pj2){
            setTimeout(alert,410,"Nossa que loucura deu empate!!!");
            document.getElementById("musica2").src="SRCs/assets/audios/139-item-catch.mp3";
            document.getElementById("musica2").play();
        }
        else{
            setTimeout(alert,110,"Parábens Jogador 2 ganhou!!");
            document.getElementById("musica2").src="SRCs/assets/audios/06-caught-a-pokemon.mp3";
            document.getElementById("musica2").play();
        }
    }else if(r>5){
        alert("reiniciando automaticamente");
        zerar();
    }
}

function zerar() {
    r=0,pj2=0,pj=0

    document.getElementById("EscolhaP").src="";
    document.getElementById("EscolhaP2").src="";
    document.getElementById("round").innerHTML=`<b>Rodada: ${r}<b>`
    document.getElementById("resultado").innerHTML="";
    document.getElementById("pointJ").innerHTML=" ";
    document.getElementById("pointP2").innerHTML=" ";
    document.getElementById("musica2").src="";
    document.getElementById("ChoicePlayer1").value=0;
    document.getElementById("ChoicePlayer2").value=7;
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
4-tentat fazer funcionar essa função de reinicirar
5-posso fazer teclas diferentes,ai eu posso fazer aquele esquema do if else
6-testar com usuarios para ver se els gostam da ideia do 5 e perguntar sugestoes de como melhorar ou criar metodos deles*/
