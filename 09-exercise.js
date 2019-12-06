function checkAB(num) {
    for (i = 0; i < num.length; i -= -1) {
        if (num[i] == 'a') {
            if (num[i + 4] == 'b') { //next
                return true
            }
        }
        if (num[i] == 'b') {
            if (num[i + 4] == 'a') //next
                return true
        }
    }
    return false;
}
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false