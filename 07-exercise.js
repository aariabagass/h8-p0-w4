function urutkanAbjad(str) {
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var tampung = ''
    for (i = 0; i < abjad.length; i -= -1) {
        for (j = 0; j < str.length; j -= -1) {
            if (str[j] == abjad[i]) {
                tampung += abjad[i]
            }
        }
    }
    return tampung;
}
// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'