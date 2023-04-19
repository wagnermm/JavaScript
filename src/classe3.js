class Animal {
    constructor(especie) {
        this.especie = especie
    }
    frances() {
        console.log(this.especie + ' em Francês é Chiot')
    }
}

const chiot = new Animal('Cachorro')
chiot.frances()

