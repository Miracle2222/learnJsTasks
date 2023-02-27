function copySorter(arr) {
    return arr.slice().sort()
}

let arr = ['HTML', 'JavaScript', 'CSS']

console.log(copySorter(arr))
console.log(arr)