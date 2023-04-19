
//function validaName(elemento) {
const validaName = (elemento) => {
    elemento.addEventListener('focusout', function(e) {
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

//function validaEmail(elemento){
const validaEmail = (elemento) => {   
    elemento.addEventListener('focusout', function(e) { 
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

const validaPhone = (elemento) => {
    elemento.addEventListener('focusout', function(e) {
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

//function validaCity(elemento){
const validaCity = (elemento) => { 
    elemento.addEventListener('focusout', function(e) {    
        e.preventDefault(); 
        if(this.value == ""){
            document.querySelector('.mensagem-city').innerHTML = "Por favor, informe sua cidade";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem-city').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    }); 
};
let camposObrigatorios2 = document.querySelectorAll('input#cidade');
for( let emFoco of camposObrigatorios2) {
    validaCity(emFoco);
};



//function validaCep(elemento){
const validaCep = (elemento) => {    
    elemento.addEventListener('focusout', function(e) {
        e.preventDefault();
        const cepValido = /^[0-9]{5}[-][0-9]{3}$/; 
        if(this.value.match(cepValido)){
            document.querySelector('.mensagem-cep').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            return false;
        } else {
            document.querySelector('.mensagem-cep').innerHTML = "Por favor, informe seu cep";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
        }
        
    });
};
let camposCep = document.querySelectorAll('input#cep');
for( let emFoco of camposCep) {
    validaCep(emFoco);
};


//function validaCampoUf(elemento) {
const validaCampoUf = (elemento) => {
    elemento.addEventListener('focusout', function(e) {
        e.preventDefault();
        const ufValido = /^[a-z]{2}$/i;
        if(this.value.match(ufValido)) {
            document.querySelector('.mensagem-uf').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            return false;
        } else {
            document.querySelector('.mensagem-uf').innerHTML = "Por favor, informe sua UF";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
        }
    });
};
let camposUf = document.querySelectorAll('input#uf');
for( let emFoco of camposUf) {
    validaCampoUf(emFoco);
};


// Abilitar botão
function disableButton() {
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cidade = document.getElementById('cidade').value;
    const cep = document.getElementById('cep').value;
    const uf = document.getElementById('uf').value;
    if(name && email && telefone && cidade && cep && uf) {
        document.querySelector('#btn').disabled = false;
        return
    } else {
        document.querySelector('#btn').disabled = true;
    };
};