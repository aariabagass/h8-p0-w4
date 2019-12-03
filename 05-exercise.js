function ubahHuruf(kata) {
    var abjad = 'abcdefghijklmnopqrstuvwxyz';
    var hasil = ''
    for (i = 0; i < kata.length; i -= -1) {
        for (j = 0; j < abjad.length; j -= -1) {
            if (abjad[j] == kata[i]) {
                if (kata[i] == 'z') {
                    hasil += abjad[0]
                } else {
                    hasil += abjad[j + 1]
                }
            }
        }
    }
    return hasil
}
// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
//TEST CASE Z
console.log(ubahHuruf('zigzag')); //ajhabh