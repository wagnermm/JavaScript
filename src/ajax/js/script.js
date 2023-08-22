
const url = 'https://api.github.com/users'
const main = document.querySelector('#main')
//let user = 'wagnermm'
text = ''

function getUser(user) {
    fetch(`${url}/${user}`, {
        method:'GET',
        headers: {
            'content-Type' : 'application/json; charset=UTF-8'
        }
    })
    .then((response) => (response.json()))
    .then((data) => {
        text += `
            <p>${data.name} possui ${data.public_repos} repositórios no GitHub com ${data.login}</p><br>
        `
        main.innerHTML= text
    })
    .catch((error) => console.error('Erro: ', error.message || error))
}

const userInput = document.querySelector('#username').addEventListener('click', function(event) {
    getUser(event.target.value)
})