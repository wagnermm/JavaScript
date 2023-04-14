class Animal {

    constructor(especie) {
        this.especie = especie
    }

    frances() {
        console.log(this.especie + ' em Francês é chien')
    }

    espanhol() {
        console.log(this.especie + ' em Espanhol é perro')
    }

    ingles() {
        console.log(this.especie + ' em Ingês é dog')
    }
}

const cachorro = new Animal('cachorro')
cachorro.frances()
cachorro.espanhol()
cachorro.ingles()