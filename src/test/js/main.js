
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
        if(this.validaCampos(produto)) {
            this.adicionar(produto)
        }
        this.listaTabela()
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
        let produto = {}

        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value
    }

    validaCampos(produto) {
        let message = ''
        if(produto.nomeProduto == '') {
            message += '- Informe o Nome do Produto \n'
        }
        if(produto.preco == '') {
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