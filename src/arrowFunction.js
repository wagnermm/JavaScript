function Person() {
    //const person = this
    this.age = 0

    setInterval(/*function*/() => {
        console.log(/*person*/this.age++)
    },2000)
}

const p1 = new Person()

/*Arrow Fuction
 * (parametro1, parametro2, parametro3) => {expressao}
 * (parametro1, parametro2) => expressao
 * parametro => {expressao}
 */