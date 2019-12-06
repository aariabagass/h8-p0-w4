function shoppingTime(memberId, money) {
    if (memberId == '') {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup'
    }
    if (memberId === undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    var listHarga = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ]
    var beli = {
        memberId: memberId,
        money: money, //2475000
        listPurchased: [],
        changeMoney: money
    }
    for (i = 0; i < listHarga.length; i -= -1) {
        if (money > listHarga[i][1]) {
            beli.listPurchased.push(listHarga[i][0])
            beli.changeMoney -= listHarga[i][1]
        }
    }
    return beli;
}
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); //Mohon maaf, toko X hanya berlaku untuk member saja
/*
Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
*/