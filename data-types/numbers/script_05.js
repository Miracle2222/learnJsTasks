function random(min, max) {
    return min + Math.random() * (max-min)
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand)
}

console.log(random(1, 6))
console.log(randomInteger(1, 6))