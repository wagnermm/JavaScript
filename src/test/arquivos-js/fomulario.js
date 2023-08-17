function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem-nom').innerHTML = "Por favor, informe o seu nome";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem-nom').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });
}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

function validaCity(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

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
}

let camposObrigatorios2 = document.querySelectorAll('input.obrigatorio-2');
for( let emFoco of camposObrigatorios2) {
    validaCity(emFoco);
}



function validaCep(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const cepValido = /^[0-9]{5}[-][0-9]{3}$/; 

        if(this.value.match(cepValido)){
            document.querySelector('.mensagem-cep').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem-cep').innerHTML = "Por favor, informe seu cep";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });
}

let camposCep = document.querySelectorAll('input.cep');
for( let emFoco of camposCep) {
    validaCep(emFoco);
}


function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem-email').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem-email').innerHTML = "Por favor, informe o seu e-mail";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });
}

let camposEmail = document.querySelectorAll('input.email');
for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}


function validaCampoUf(elemento) {

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const ufValido = /^[a-z][a-z]{1,1}$/i;
        if(this.value.match(ufValido)) {
            document.querySelector('.mensagem-uf').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem-uf').innerHTML = "Por favor, informe sua uf";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }


    });
}

let camposUf = document.querySelectorAll('input.uf');
for( let emFoco of camposUf) {
    validaCampoUf(emFoco);
}

function disableButton() {
    let nome = document.querySelector('#nome').value;
    let email = document.querySelector('#email').value;
    let fone = document.querySelector('#fone').value;
    let cep = document.querySelector('#cep').value;
    let cidade = document.querySelector('#cidade').value;
    let uf = document.querySelector('#uf').value;
    if(nome && email && fone && cep && cidade && uf) {
        document.querySelector('#btn').disabled = false;
        return
    }
    document.querySelector('#btn').disabled = true;
}
