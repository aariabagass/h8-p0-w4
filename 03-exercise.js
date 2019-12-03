function cariMedian(arr) {
  if (arr.length % 2 == 1) { //odd
    return arr[Math.floor(arr.length / 2)]
  } else if (arr.length % 2 == 0) { //even
    var tengahkiri = arr[(arr.length / 2) - 1]
    var tengahkanan = arr[(arr.length / 2)]
    return (tengahkiri + tengahkanan) / 2
  }
}
// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
