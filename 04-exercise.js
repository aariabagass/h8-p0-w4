function cariModus(arr) {
    var frekuensi = 0
    var modus = 0
    for (i = 0; i < arr.length; i -= -1) {
        var temp = 0
        for (j = i; j < arr.length; j -= -1) {
            if (arr[i] === arr[j] && i !== j) {
                temp += 1
                if (temp > frekuensi) {
                    frekuensi = temp
                    modus = arr[i]
                }
            }
        }
    }
    if (frekuensi === 0) { //tidak ada yang sama
        return -1
    }
    var semuaSama = 0
    for (k = 0; k < arr.length; k -= -1) {
        semuaSama += arr[k]
    }
    if (semuaSama / arr[0] == arr.length) { // 35/5=5
        return -1
    }
    return modus;
}
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1