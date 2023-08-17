var ativa = document.getElementById('sbmt');
ativa.addEventListener('click', perguntarNome);

var ativa2 = document.getElementById('sbmt2');
ativa2.addEventListener('click', idadeVotar);

function perguntarNome() {
    var name = document.getElementById('nome').value;
    var resp = document.getElementById('resp');
    if(name == "") {
        resp.innerHTML = "Por favor digite o seu nome"
    } else {
        resp.innerHTML = `Olá ${name}! prazer em conhecê-lo`
    }
}

function idadeVotar(){
    var idade = Number(document.getElementById('idade').value);
    var resp = document.getElementById('resp-2');
    if(idade < 16) {
        resp.innerHTML = "Sem idade para votar"
    } else if(idade >= 16 && idade < 18 || idade > 65) {
        resp.innerHTML = "Voto facultativo"
    } else {
        resp.innerHTML = "Você tem idade para votar"
    }       
 } 

function horaCerta() {

    var agora = new Date();
    var hora = agora.getHours();
    var resp = document.getElementById('resp-3');
    if(hora < 12){
        resp.innerHTML = `Agora são ${hora} horas, bom dia!`
    } else {
        if(hora > 12 && hora < 18) {
            resp.innerHTML = `Agora são ${hora} horas, boa tarde!`
        } else {
            if(hora > 18 && hora <= 24) {
                resp.innerHTML = `Agora são ${hora} horas, boa noite!`
            } else {
                resp.innerHTML = "Hora inválida"
            }
        }
    }
}

function paisNasc() {
    var pais = document.getElementById('pais').value;
    var resp = document.getElementById('resp-4');
    if(pais == 'Brasil'){
        resp.innerHTML = "Você é brasileiro";
    } else if(pais == ""){
        resp.innerHTML = "Por favor, informe um país";
    } else {
        resp.innerHTML = "Então você é um estrangeiro";
    }
}

function diaSem() {
    var hoje = new Date();        /*0 = domingo, 1 = segunda, 2 = terça, 3 = quarta, 4 = quinta, 5 = sexta, 6 = sabado */ 
    var sem = hoje.getDay();
    var resp = document.getElementById('resp-5');
    switch(sem) {
        case 0:
            resp.innerHTML = "Hoje é Domingo"
            break
        case 1:
            resp.innerHTML = "Hoje é Segunda-feira"
            break
        case 2:
            resp.innerHTML = "Hoje é Terça-feira"
            break
        case 3:
            resp.innerHTML = "Hoje é Quarta-feira"
            break
        case 4:
            resp.innerHTML = "Hoje é Quinta-feira"
            break                 
        case 5:
            resp.innerHTML = "Hoje é Sexta-feira"
            break
        case 6:
            resp.innerHTML = "Hoje é Sábado"
            break
        default:     
    }
}