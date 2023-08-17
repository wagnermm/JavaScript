class Animal {
    constructor(especie) {
        this.especie = especie
    }
    ingles() {
        console.log(this.especie + ' em Ingês é Dog')
    }
}

const dog = new Animal('Cachorro')
dog.ingles()

export default Animal
