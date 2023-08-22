import fetch from "node-fetch"

let _data = {
    title: 'teste de envio',
    body: 'testando envio atravéz do ajax, metodo post',
    userId: 5
}

/*fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {
        'content-Type' : 'application/json; charset=UTF-8'
    }
}) */

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'content-Type' : 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(_data)
})

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))
