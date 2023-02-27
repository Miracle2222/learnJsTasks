function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i]
        if (val < a || val > b) {
            arr.splice(i, 1)
            i--
        }
    }
}

let arr = [6, 8, 1, 4, 5];

filterRangeInPlace(arr, 1, 4)

console.log(arr)