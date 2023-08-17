let somarJs = document.getElementById('somarJs').addEventListener('click', function(){
    let v1 = document.getElementById('valor-1').value;
    let v2 = document.getElementById('valor-2').value;
    let soma = parseInt(v1) + parseInt(v2);
    let res = document.getElementById('res').value = soma;
})

$('#somarJq').click(function(){
    let v1 = $('#valor-1').val();
    let v2 = $('#valor-2').val();
    let soma = parseInt(v1) + parseInt(v2);
    $('#res').val(soma);
})

/*
 * Esconder as imagens ao clicar nelas
*/
$('#manha, #tarde, #noite').click(function() {
    $(this).hide();
})

$("#btn").click(function(){
    
    let hora = $(".hora").val();
    
    if(hora > 24) {
        $(".informa").html('Hora inválida!');
    } else if(hora >= 0 && hora < 12) {
        $(".informa").html(hora + ' horas da manhã');
        $('#manha').show();   /* Exibir a imagem */
        $("#tarde, #noite").hide();    /* Esconder imagen */
        $(".mensagem").html("Bom dia");
    } else if(hora >= 12 && hora <= 18) {
        $(".informa").html(hora + ' horas da tarde');
        $('#tarde').show();     /* Exibir a imagem */
        $("#manha, #noite").hide();    /* Esonder imagem */
        $(".mensagem").html("Boa Tarde");
    } else {
        $(".informa").html(hora + ' horas da noite');
        $('#noite').show();       /* Exibir a imagem */
        $("#manha, #tarde").hide();    /* Esconder imagem */
        $(".mensagem").html("Boa Noite");
    }
})



