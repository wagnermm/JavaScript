
//function calcularMedia (notas) {
const calcularMedia = (notas) => {
    var soma = 0;
    for( c = 0; c < notas.length; c++ ) {
        soma += notas[c];
    }
    media = soma / notas.length;
    return media;
};

let media;

//function aprovacao (notas) {
const aprovacao = (notas) => {
    let media = calcularMedia (notas);
    let condicao = media >= 7 ? "aprovado" : "reprovado";
    return 'media: ' + media + ' - resultado: ' + condicao;
};

console.log( "Média: " + calcularMedia([10, 8, 7, 6]));
console.log( aprovacao([10, 8, 7, 6]));


//function contagemRegressiva(numero) {
const contagemRegressiva = (numero) => {
    console.log(numero);
    let proximoNumero = numero - 1;
    if(proximoNumero > 0)
    contagemRegressiva(proximoNumero);  
}
contagemRegressiva(10);



// Formulario 1
//function validaNumero(e){
const validaNumero = (e) => {
    e.addEventListener('focusout', function(event) {
        event.preventDefault();
        const numeroValido = /^(?:10|[0-9](?:\.[0-9])?)$/;
        if(this.value.match(numeroValido)){
            document.querySelector('#resultado').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            document.querySelector('#btn').disabled = false
            return false
        } else {
            document.querySelector('#resultado').innerHTML = "Por favor, digite um número válido";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            document.querySelector('#btn').disabled = true
        }
    });
};
let camposNumero = document.querySelectorAll('input.numero');
for( let emFoco of camposNumero) {
    validaNumero(emFoco)
};

//Calculo da media
let calc = document.getElementById('btn').addEventListener('click', calculo);
function calculo(e) {
    e.preventDefault()
    let a = Number(document.getElementById('n1').value);
    let b = Number(document.getElementById('n2').value);
    let c = Number(document.getElementById('n3').value);
    let d = Number(document.getElementById('n4').value);
    let media = (a + b + c + d) / 4;
    if(media >= 6) {
        document.querySelector('#resultado').innerHTML = `Média ${media} Aluno aprovado`;
        this.classList.remove('erro');
        this.parentNode.classList.remove('erro');
    } else {
        document.querySelector('#resultado').innerHTML = `Média ${media} Aluno reprovado`;
        this.classList.add('erro');
        this.parentNode.classList.add('erro');
        return false;
    };
};


// Formulario 2
//function validaName(e) {
const validaName = (e) => {
    e.addEventListener('focusout', function(e) {
        e.preventDefault();
        const nameValido = /^[a-z]/i
        if(this.value.match(nameValido)){
            document.querySelector('.mensagem-nome').innerHTML = ""
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            return false
        } else {
            document.querySelector('.mensagem-nome').innerHTML = "Digite um nome válido"
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
        }
    })
}
let camposName = document.querySelectorAll('input#nome')
for( let emFoco of camposName) {
    validaName(emFoco)
};

//function validaEmail(e){
const validaEmail = (e) => {   
    e.addEventListener('focusout', function(e) { 
        e.preventDefault();    
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem-email').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            return false
        } else {
            document.querySelector('.mensagem-email').innerHTML = "Por favor, informe o seu E-mail";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
        }
    });
};
let camposEmail = document.querySelectorAll('input#email');
for( let emFoco of camposEmail) {
    validaEmail(emFoco);
};

const validaPhone = (e) => {
    e.addEventListener('focusout', function(e) {
        e.preventDefault();
        const phoneValido = /[0-9]/;
        if(this.value.match(phoneValido)){
            document.querySelector('.mensagem-phone').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            return false
        } else {
            document.querySelector('.mensagem-phone').innerHTML = "Por favor, informe o seu telefone";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
        }
    });
};
let camposPhone = document.querySelectorAll('input#telefone');
for( let emFoco of camposPhone) {
    validaPhone(emFoco)
};