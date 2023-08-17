
// Muda a cor de elementos
$(document).ready(function() {
    $('h1').click(function() {
        $(this).css('color', '#030a44')
    })
    $('h2').click(function() {
        $(this).css('color', '#7e1616');
    })
})

// Exibir mensagem/ Velocímetro/ if else
function velocimetro() {
    let vel = Number(document.getElementById('vel').value);
    let mess = document.getElementById('message');
    mess.innerHTML = `Velocidade ${vel} Km/h`;
    mess.style.color = '#333';
    if(vel > 41) {
        mess.innerHTML = `Velocidade ${vel} Km/h, ultrapassou o limite`;
        mess.style.color = '#d80000';
    } else {
        mess.style.color = '#333';
    }
}

// Calcular média de 4 números com add Event Listener

var calc = document.getElementById('calc').addEventListener('click', calcularMedia);

function calcularMedia() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var c = Number(document.getElementById('c').value);
    var d = Number(document.getElementById('d').value);
    var media = (a + b + c + d) / 4;
    if(media >= 6) {
        document.getElementById('res').innerHTML = `Média ${media} Aluno aprovado`;
        res.style.color = "#030a44"
    } else {
        res.innerHTML = `Média ${media} Aluno reprovado`;
        res.style.color = "#f10707"
    }
}

var contagem = document.getElementById('cont').addEventListener('click', contador);
function contador() {
    var i;
    var final = 10;
    for(i = 0; i <= final; i++) {
        var e = document.getElementById('exibir').innerHTML = `${i}`;
    }
}
