const less = require('../util/less')
const exchange = require('../util/exchange')
const args = process.argv.slice(2)
const arr = JSON.parse(args[0])

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i+1; j < arr.length; j++) {
      if (less(arr[j], arr[min])) min = j
    }
    exchange(arr, i, min)
  }
  return arr
}

selectionSort(arr)
console.log(arr)

module.exports = selectionSort
