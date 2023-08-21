
const url = 'https://api.github.com/users'
const main = document.querySelector('#main')
//let user = 'wagnermm'

function getUser(user) {
    fetch(`${url}/${user}`)
    .then((response) => (response.json()))
    .then((data) => {
        main.innerHTML = `${data.name} possui ${data.public_repos} repositórios no GitHub com ${data.login}`
    })
    .catch((error) => console.error('Erro: ', error.message || error))
}

const userInput = document.querySelector('#username').addEventListener('click', function(event) {
    getUser(event.target.value)
})