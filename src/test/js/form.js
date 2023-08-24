
document.querySelector('#main').innerHTML='<form><h2>Faça seu cadastro</h2><input type="text" placeholder="Digite seu nome" name="nome" id="nome" onchange="disableButton()"><div class="mensagem-nome"></div><input type="text" placeholder="Digite seu e-mail" name="email" id="email" onchange="disableButton()"><div class="mensagem-email"></div><input type="text" placeholder="Digite seu telefone" name="telefone" id="telefone" onchange="disableButton()" onkeypress="return event.charCode >= 48 && event.charCode <= 57" maxlength="12"><div class="mensagem-phone"></div><button type="submit" id="btn" disabled>Enviar</button></form>'

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

function disableButton() {
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    if(name && email && telefone) {
        document.querySelector('#btn').disabled = false;
        return
    } else {
        document.querySelector('#btn').disabled = true;
    };
};