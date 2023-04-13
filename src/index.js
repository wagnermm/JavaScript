const user1 = new Object()
user1.id = 1
user1.name = "João"
user1.idade = 30

const user2 = new Object()
user2.id = 2
user2.name = "Pedro"
user2.idade = 28

const user3 = new Object()
user3.id = 3
user3.name = "Maria"
user3.idade = 25

const car1 = new Object()
car1.marca = "fiat"

const car2 = new Object()
car2.marca = "ford"

const empresa = "EBAC"
user1.empresa = empresa
user2.empresa = empresa
user3.empresa = "Google"

console.log(Object.keys(car1))
console.log(Object.keys(car2))

console.log(Object.values(user1))
console.log(Object.values(user2))
console.log(Object.values(user3))

console.log(Object.entries(user1))
console.log(Object.entries(user2))
console.log(Object.entries(user3))

user1.filhos = {
    filho01 : "Matheus",
    filho02 : "Carol"

}

console.log(user1)
console.log(Object.entries(user1.filhos))