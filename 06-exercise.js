function digitPerkalianMinimum(angka) {
    var digit = 0
    for (i = 1; i <= angka; i -= -1) {
        if (angka % i === 0) { //habis dibagi i
            var tampung1 = String(i) //24
            var tampung2 = String(angka / i)
            var wrap = tampung1 + tampung2
            var join = Number(wrap.length)
        }
        if (digit === 0) {
            digit = join
        } else if (join < digit) {
            digit = join
        }
    }
    return digit;
}
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2