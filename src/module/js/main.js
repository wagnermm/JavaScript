import color from './colors'
import carros from './cars'


// filtrer faz a filtragem
let filteredCar = carros.filter( (carros) => {
    return carros.country == 'usa'
    //return carros.km === 200
})

let toPrint = ''

filteredCar.forEach( carro => { //laço for ou forEach faz a listagem dos arreys
    toPrint += carro.car + ', '
})


// Reduce - função com todos os itens do array e devolve um valor único
let totalKm = filteredCar.reduce( (prev, next) => {
    return {km: prev.km + next.km}
})

//map
let kmCars = carros.map( (carros)=> {
    return carros.km
})

document.getElementById('main').innerHTML = color + '<br>' +'Marcas americanas: ' + toPrint + '<br> A soma do km desses carros é de ' + totalKm.km + '<br> O km de todos carros da loja são: ' + kmCars + '<br> Qual o km das marcas americanas?'