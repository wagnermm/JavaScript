
function titleComponent() {
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Cadastro de Produtos'
    elemH1.classList.add('title')
    return elemH1
}

document.querySelector('#title').appendChild(titleComponent())

class Produto {
    constructor() {
        this.id = 0
        this.arrayProdutos = []
    }

    salvar() {
        let produto = this.lerDados()
        if(this.validaCampos(produto)) {
            this.adicionar(produto)
        }

        this.listaTabela()
        this.cancelar()

    }

    listaTabela() {
        let tbody = document.querySelector('#tbody')
        tbody.innerText = ''
        for(let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_produtos = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerText = this.arrayProdutos[i].id
            td_produtos.innerText = this.arrayProdutos[i].nomeProduto
            td_valor.innerText = this.arrayProdutos[i].preco

            let imgEdit = document.createElement('img')
            imgEdit.src = '../images/pencil.png' 

            let imgDelete = document.createElement('img')
            imgDelete.src = '../images/trash.png'

            td_acoes.appendChild(imgEdit)
            td_acoes.appendChild(imgDelete)
        }
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto)
        this.id++
    }

    lerDados() {

        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value
        produto.preco = document.getElementById('preco').value
        
        return produto
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
        produto.nomeProduto = document.getElementById('produto').value = ''
        produto.preco = document.getElementById('preco').value = ''
    }
}

var produto = new Produto()