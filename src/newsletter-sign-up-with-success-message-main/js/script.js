let emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;

const validEmail = (elemento) => {   
    elemento.addEventListener('focusout', function(e) { 
        e.preventDefault();    
        if(this.value.match(emailValido)) {
            document.querySelector('.info-erro').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            return false
        } else {
            document.querySelector('.info-erro').innerHTML = "valid email required";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
        }
    });
};

let emailField = document.querySelectorAll('input#email');
for( let emFoco of emailField) {
    validEmail(emFoco);
};

const buttonAbled = ()=> {
    const email = document.getElementById('email').value;
    if(email.match(emailValido)) {
        document.querySelector('#button').disabled = false;
        return
    } else {
        document.querySelector('#button').disabled = true;
    };
};