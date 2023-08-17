
const meuCabecalho = document.querySelector('h1');  // Cria-se um elemento html a partir do javascript; ex: 'h1'
meuCabecalho.textContent = 'Treinando JavaScript';
meuCabecalho.style.fontSize = '30px';

//var nome = window.prompt('Qual o seu nome?');
//document.write('<h2>Seu nome tem ' + nome.length + ' Letras ' + nome + ';</h2>'); // Escreve na tela(body) e pode escolher um elemento html para padronizar; ex: <h2></h2>

//var n1 = Number(window.prompt('Escolha um número'));
//var n2 = Number(window.prompt('Escolha outro número'));

/*var add = n1 + n2;
var minus = n1 - n2;
var mult = n1 * n2;
var divid = n1 / n2;
var resto = n1 % n2;
var boolean = n1 == n2;

document.getElementById("cont").innerHTML = n1 + " + " + n2 + " é " + add + `; ${n1} -  ${n2} é ${minus}; ${n1} * ${n2} é ${mult} e ${n1} / ${n2} é ${divid}. resto de divisão é ${resto}; Resultado é ${boolean}`;*/

function obterMedia() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);

    let media = (a + b + c) / 3;

    document.getElementById("resultado").innerHTML = "Resultado: " + media;

    console.log(a + b + c);
}

var h3 = document.getElementsByTagName('h3')[0];
h3.innerText = 'Calculos Aritméticos';

var a = document.getElementById('area');
a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout', sair);

function clicar() {
    a.innerHTML = "Clicou!👏👏👏";
    a.style.background = 'blue';
    a.style.color = 'white';
    a.style.border = '1px solid black';
}

function entrar() {
    a.innerHTML = "Chegou!😁";
    a.style.background = 'red';
    a.style.color = 'white';
    a.style.border = '1px solid black';
}

function sair() {
    a.innerHTML = "Saiu!😢";
    a.style.background = 'black';
    a.style.color = 'white';
    a.style.border = '1px solid red';
}

function velocimetro() {
    let vel = Number(document.getElementById('velTxt').value);
    let res = document.getElementById('result');
    res.innerHTML = `Velocidade ${vel} Km/h`
    res.style.color = 'black';
    if(vel > 40) {
        res.innerHTML = `${vel}km/h! Limite excedido`;
        res.style.color = 'red';
    } else {
        res.innerHTML = `${vel}km/h Siga em frente!`
        res.style.color = 'green';
    }
    if(vel > 80) {
        res.innerHTML = `${vel}km/h! SE TA LOKO`;
        res.style.color = 'red';
    }
}
