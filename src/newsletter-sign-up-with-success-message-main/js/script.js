
let form = document.getElementById('form');
let email = document.getElementById('email').value;
let erro = document.getElementById('erro');
let btn = document.getElementById('button');

btn.addEventListener('click',(event)=> {
    event.preventDefault();
    //const validEmail =  /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
    if(email == 1) {
        erro.innerHTML = "parabens";
    } else {
        erro.innerHTML = "Valid email required";
    }
});