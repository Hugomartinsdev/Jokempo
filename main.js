var r=0,pj=0,pb=0;
//document.getElementById("musica").play();//talvez fazer um menu com musica, talvez usa botão ou teclado do mouse mesmo
//para burlar caso não consiga, fazer um botão para ativae e desativar o som,começado com ele desativado, ]
//ai quando ativa é o play e quanod desativa é o pause.

function rodada(params) {
    const j1=document.getElementById("escolhaJogador").value;
    const b1=Math.floor(Math.random()*3);

    if(j1 ==0){
        if(b1==1){
            document.getElementById("resultado").innerHTML=`Jogador jogou pedra e o Bot jogou papel `//perdeu
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/pedra-100x100-Photoroom.png-Photoroom.png";
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/jogo-papel-pedra-tesoura-Photoroom.png-Photoroom.png";
            pb=pb+2;
            
            
        }else if(b1==2){
            document.getElementById("resultado").innerHTML=`Jogador jogou pedra e o Bot jogou tesoura `//ganha
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/pedra-100x100-Photoroom.png-Photoroom.png";
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/tesoura-100x100-Photoroom.png-Photoroom.png";
            pj=pj+2;
        }
        else{
            document.getElementById("resultado").innerHTML=`Jogador jogou pedra e o Bot jogou pedra`//empate
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/pedra-100x100-Photoroom.png-Photoroom.png"
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/pedra-100x100-Photoroom.png-Photoroom.png";
            pj++;
            pb++;
        }
        r++;
        document.getElementById("round").innerHTML=`Rodada: ${r}`;
        document.getElementById("pointJ").innerHTML="Pontuação do jogador: "+pj;
        document.getElementById("pointB").innerHTML="Pontuação do BOT: "+pb;
    }

    if(j1 ==1){
        if(b1==1){
            document.getElementById("resultado").innerHTML=`Jogador jogou papel e o Bot jogou papel `//empate
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/jogo-papel-pedra-tesoura-Photoroom.png-Photoroom.png"
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/jogo-papel-pedra-tesoura-Photoroom.png-Photoroom.png";
            pj++;
            pb++;

        }else if(b1==2){
            document.getElementById("resultado").innerHTML=`Jogador jogou papel e o Bot jogou tesoura `//perdeu
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/jogo-papel-pedra-tesoura-Photoroom.png-Photoroom.png"
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/tesoura-100x100-Photoroom.png-Photoroom.png";
            pb=pb+2;
        }
        else{
            document.getElementById("resultado").innerHTML=`Jogador jogou papel e o Bot jogou pedra`//ganha
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/jogo-papel-pedra-tesoura-Photoroom.png-Photoroom.png"
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/pedra-100x100-Photoroom.png-Photoroom.png";
            pj=pj+2;
        }
        r++;
        document.getElementById("round").innerHTML=`Rodada: ${r}`;
        document.getElementById("pointJ").innerHTML="Pontuação do jogador: "+pj;
        document.getElementById("pointB").innerHTML="Pontuação do bOT: "+pb;
    }

    if(j1 ==2){
        if(b1==1){
            document.getElementById("resultado").innerHTML=`Jogador jogou tesoura e o Bot jogou papel `//ganha
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/tesoura-100x100-Photoroom.png-Photoroom.png"
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/jogo-papel-pedra-tesoura-Photoroom.png-Photoroom.png";
            pj=pj+2;
        }else if(b1==2){
            document.getElementById("resultado").innerHTML=`Jogador jogou tesoura e o Bot jogou tesoura `//empate
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/tesoura-100x100-Photoroom.png-Photoroom.png"
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/tesoura-100x100-Photoroom.png-Photoroom.png";
            pj++;
            pb++;
        }
        else{
            document.getElementById("resultado").innerHTML=`Jogador jogou tesoura e o Bot jogou pedra`//perdeu
            document.getElementById("EscolhaP").src="SRCs/assets/IMGs/tesoura-100x100-Photoroom.png-Photoroom.png"
            document.getElementById("EscolhaB").src="SRCs/assets/IMGs/pedra-100x100-Photoroom.png-Photoroom.png";
            pb=pb+2;
        }
        r++;
        document.getElementById("round").innerHTML=`Rodada: : ${r}`;
        document.getElementById("pointJ").innerHTML="Pontuação do jogador: "+pj;
        document.getElementById("pointB").innerHTML="Pontuação do BOT: "+pb;
    }
    if(r==5){
        if (pj>pb) {
            setTimeout(alert,410,"Parábens voce ganhou!!");
            document.getElementById("musica2").src="SRCs/assets/audios/06-caught-a-pokemon.mp3";
            //setTimeout(Reiniciar,1,"o");
            //Reiniciar();
        }else if(pj==pb){
            setTimeout(alert,410,"Nossa que loucura deu empate!!!");
            document.getElementById("musica2").src="SRCs/assets/audios/139-item-catch.mp3";
            //Reiniciar();
            //setTimeout(Reiniciar,1,"o");
        }
        else{
            setTimeout(alert,410,"Que pena você perdeu!!!");
            document.getElementById("musica2").src="SRCs/assets/audios/super-mario-death-sound-sound-effect.mp3";
            //setInterval(Reiniciar,5,"o");
            //Reiniciar();

        }
    }else if(r>5){
        alert("reiniciando automaticamente");
        zerar();
    }
    //se perder ou fazer vaia ou fazer o barulho de gameover do Mario;
    //ver se ficar mais legal aparecendo um alert ou na tela mesmo
    //talcez colocar as opções de jogo no meio
    
}

function zerar(params) {
    r=0;
    pb=0;
    pj=0
    document.getElementById("EscolhaP").src="";
    document.getElementById("EscolhaB").src="";
    document.getElementById("round").innerHTML="Rodada: "+r;
    document.getElementById("resultado").innerHTML="";
    document.getElementById("pointJ").innerHTML=" ";
    document.getElementById("pointB").innerHTML=" ";
}

function Reiniciar(){
    var t =prompt("Você quer reiniciar automaticamente?");
    if(t=="sim" || t==""){
        alert("ok,reiniciando");//talvez fazer um coisa continuo,
                                //acho que tem coisa de deixar a mensagem continuo 
                                //no meu drive ou github de alguem que eu sigo, 
                               //ou pergunto para o Carlos ou Casseb 
        zerar();

    }else if(t=="não" || t=="nao"){
        alert("tudo bem,quando quiser reiniciar aperte o botao com o mesmo nome");
    }
}
//estudar mais sobre setTimeOut.


/*OQUE FALTA FAZER
1-TENTAR FAZER EM UM WHILE, fazer isso em um outro codigo
2-COLOCAR OS AUDIOS DE FUNDO E DE VITORIA E DERROTA
3-usar um prompt ou alert com sim e não para ver ve a pessoa que que seja reiniciado o jogo automaticamente, e ver isso talvez no meu do FNAF,não está funcionando.
4-TENTAR FAZER FUNCIONAR O PROMPT COM A FINÇÃO REINICIAR*/
