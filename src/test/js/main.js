
function titleComponent() {
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Buscar Produto'
    elemH1.classList.add('title')
    return elemH1
}

class Produto {
    constructor() {
        this.id = 1
        this.arrayProdutos = []
    }

    salvar() {
        let produto = this.lerDados()
        alert('salvar')
        console.log(produto)
    }

    listaTabela() {
        let tbody = document.querySelector('#tbody')
        for(let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow()
            let td_id = tr.inserCell()
            let td_produtos = tr.inserCell()
            let td_valor = tr.inserCell()
            let td_acoes = tr.inserCell()
        }
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto)
        this.id++
    }

    lerDados() {

        produto.id = this.id
        let product = document.getElementById('produto').value
        let price = document.getElementById('preco').value

        let message = ''
        if(product == '') {
            message += '- Informe o Nome do Produto \n'
        }
        if(price == '') {
            message += '- Informe o Preço do Produto \n'
        }
        if(message != '') {
            alert(message)
            return false
        }

        return true
    }


    cancelar() {

    }
}

document.querySelector('#title').appendChild(titleComponent())

var produto = new Produto()