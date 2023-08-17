
/*var env = document.getElementById('btn'); 
env.addEventListener('click', acessoName);

function acessoName() {
    let res = document.getElementById('resp');
    let name = document.getElementById('nome').value;      Primeira tentativa usando a opção add.EventListener
    if(name == "") {
        res.innerHTML = "Digite seu nome";
        res.style.color = "red"
    } else {
        res.innerHTML = `Olá ${name}`;             
    }
}


function acessoName() {
    let res = document.getElementById('resp');
    let name = document.getElementById('nome').value;       Segunda tentativa usando a opção onclick direto no html
    if(name == "") {
        res.innerHTML = "Por favor digite oseu nome";
    } else {
        res.innerHTML = "Olá " + name;
    }
}*/


function acessoName(elemento){

    elemento.addEventListener('focusout', function(event) { 

        event.preventDefault();                             /*Terceira tentativa!*/

        if(this.value == ""){
            document.querySelector('.mensagem-nome').innerHTML = "Por favor, informe o seu nome";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem-nome').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    }); 
}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
        for( let emFoco of camposObrigatorios) {
            acessoName(emFoco);
        }

