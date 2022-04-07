const less = require('../util/less')
const exchange = require('../util/exchange')
const args = process.argv.slice(2)
const arr = JSON.parse(args[0])

function insertionSort(arr) {
  if (arr.length <= 1) return
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j > 0; j--) {
      if (less(arr[j], arr[j-1])) exchange(arr, j, j-1)
      else break
    }
  }
}

insertionSort(arr)
console.log(arr)

module.exports = insertionSort