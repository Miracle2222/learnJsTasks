function number(str) {
    return +str.slice(1)
}

console.log(number("$154"))
console.log(number("$120"))
console.log(number("$11111"))