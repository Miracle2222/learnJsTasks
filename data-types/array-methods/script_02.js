function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b))
}

let arr = [27, 37, 28, 64, 53]

console.log(filterRange(arr, 27, 50))
console.log(arr)