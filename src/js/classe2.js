class Animal {
    constructor(especie) {
        this.especie = especie
    }
    espanhol() {
        console.log(this.especie + ' em Espanhol é Perro')
    }
}

const perro = new Animal('Cachorro')
perro.espanhol()