function obterMedia(){
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);
    var d = Number(document.getElementById("d").value);

    var media = (a + b + c + d) / 4;

    document.getElementById("resultado").innerHTML = "Resultado: " + media;

    if(media > 7) {
        document.getElementById('resultado-2').innerHTML = "Parabéns, você foi aprovado!"
        document.getElementById('resultado-2').style.color = "blue"
    } else if(media == 0) {
        document.getElementById('resultado-2').innerHTML = "Por favor, informe um número"
    } else {
        document.getElementById('resultado-2').innerHTML = "Você fracassou!"
        document.getElementById('resultado-2').style.color = "red"
    }

    console.log(a + b + c);
}

function interagir() {
    let name = document.querySelector('input#nome').value;
    let res = document.getElementById('res');
    if(name == "") {
        res.innerHTML = "Por favor, digite o seu nome"
    } else {
        res.innerHTML = `Olá ${name}! prazer em conhecê-lo`
    }
}


function origem() {
    let nasc = document.getElementById('pais').value;
    let resp = document.getElementById('res-2');
    if(nasc == 'Brasil') {
        resp.innerHTML = "Você é brasileiro";
    } else if(nasc == "") {
        resp.innerHTML = "Por favor, digite um país";
    } else {
        resp.innerHTML = "Você é estrangeiro"
    }
}

/*function aprovacaoMedia() {

    let media = obterMedia();

    let condicao = media >= 7 ? "aprovado" : "reprovado";

    document.getElementById("resultado-2").innerHTML = "resultado: " + condicao;
        
}

console.log(aprovacaoMedia());*/



const meuCabecalho = document.querySelector('h1'); // Cria-se elemento pelo JS
meuCabecalho.textContent = 'Hello, world!';


    /* window.alert('mensagem')
       window.confirm('pergunta') 
       window.prompt('responda')
       window.alert('Prazer em conhecê-lo, ' + nome);
       window.alert('Meu nome é comutador mesmo, mas pode me chamar de PC ');
       var a = window.prompt('Você gosta de teconologia?');
       window.alert('Qua legal, então podemos ser amigos 😊');
       window.alert('Se você studar programação, você vai aprender muita coisa sobre mim');
       window.alert('Até mais ' + nome);   */


