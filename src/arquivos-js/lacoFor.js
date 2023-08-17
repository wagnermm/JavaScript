
/*var c = document.getElementById('container');
c.addEventListener('click', clicar);
c.addEventListener('mouseout', sair);

function clicar() {
    c.style.backgroundColor = "blue";
    c.style.borderRadius = "80%";
}

function sair() {
    c.style.backgroundColor = "lightblue";
    c.style.borderRadius = "0";
    c.innerHTML = ""
}*/


function verificarKM() {
    var km = Number(document.getElementById('contador').value);
    var revisao = 50;
    var resp = document.getElementById('result');
    if(km < revisao) {
        resp.innerHTML = `${km} km, pode rodar`;
        resp.style.color = "blue";
    } else {
        resp.innerHTML = `${km} km, precisa fazer revisão`;
        resp.style.color = "red";
    }
}

var hora = 15;
if(hora <= 12) {
    console.log('Bom dia');
} else if(hora < 18 || hora > 12) {
    console.log('Boa tarde');
} else {
    console.log('Boa noite')
}


// Algorítmo para verificar se um número é par ou ímpar

function parimp(num) {
    if(num % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

console.log(parimp(20));

// Var com uma função, retornar, multiplicar por 2

var v = function(x) {
    return x*2
}
console.log(v(5));


// Fatorial de 5, ou seja, 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(n) {
    let fat = 1;
    for(let c = n; c > 1; c--) {
        fat *= c;
    }
    return fat
}

console.log(fatorial(5));


// Declaração de um objeto

let pessoa = {nome:'wagner', idade:'36', cidade:'curitiba', peso: 85, engordar(p=0){
    console.log('Engordou');
    this.peso += p
}}

pessoa.engordar(2);
console.log(`${pessoa.nome} pesa ${pessoa.peso}`);



// Algorítmo para verificar quantos kms pode rodar antes de fazer revisão

var km;
var revisao = 5
for(km = 0; km <= revisao; km++) {
    console.log('Seu km é ' + km + ' pode rodar');
}








