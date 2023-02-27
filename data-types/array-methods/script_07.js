let vasya = {name: "Вася", age: 25}
let petya = {name: "Петя", age: 25}
let masha = {name: "Маша", age: 25}

let users = [vasya, petya, masha]

let names = users.map(item => item.name)

console.log(names)