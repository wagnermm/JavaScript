

function interagir() {
    var call = document.querySelector('input#nom').value;
    var res = document.getElementById('resp');
    if(call == "" ) {
        res.innerHTML = "Por favor informe o seu nome ";
    } else {
        res.innerHTML = "Olá " + call + " Prazer em conhecê-lo";
    }
}

function calcular() {
    var num = Number(document.querySelector('input#calc').value);
    var res = document.getElementById('resp-2');
    if(num == 10){
        res.innerHTML = "Seu numero é verdadeiro";
    } else {
        res.innerHTML = "Nuero falso";
    }
}


function exibirMsn() {
    let text = document.getElementById('msn').value;
    let res = document.getElementById('resp-3');
    res.innerHTML = "Você clicou";
    /*if(text == /^[a-z]{5}$/i){
        res.innerHTML = "Você digitou certo";
    } else {
        res.innerHTML = "Digite apenas 5 letras";
    }*/
}