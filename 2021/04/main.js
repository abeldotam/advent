/* ------ Loading input ------ */
const { readFileSync } = require('fs');
const { resolve } = require('path');
const input = readFileSync(resolve(__dirname, './input.txt'), 'utf-8').split('\n');

// console.log((input.at('').split(',')).sort())
// console.log(input.indexOf(''))

const data10 = [100, 97, 101, 109, 111, 110, 109, 198, 18, 20]

const data100 = [41, 67, 93, 76, 38, 4, 47, 24, 33, 51, 40, 100, 85, 95, 18, 35, 32, 26, 52, 10, 82, 66, 57, 92, 73, 2, 49, 27, 70, 62, 90, 5, 60, 42, 56, 22, 89, 59, 63, 23, 65, 19, 28, 99, 97, 94, 46, 61, 29, 36, 78, 71, 12, 20, 64, 48, 13, 83, 98, 86, 74, 37, 80, 81, 9, 91, 72, 3, 44, 69, 31, 6, 11, 30, 75, 21, 50, 7, 87, 15, 96, 1, 17, 34, 84, 79, 58, 39, 25, 8, 43, 16, 53, 55, 45, 68, 14, 77, 54, 88]

function isPartitionned(values, index) {
  const refValue = values[index]
  const firstPart = values.slice(0, index)
  const secondPart = values.slice(index + 1)
  return firstPart.every(val => val < refValue) && secondPart.every(val => val > refValue)
}

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInt = (max) => Math.floor(Math.random() * max)

// console.log('Execution time with array of 10 number as input')
// console.time("benchmark_10_Numbers")
// console.log(isPartitionned(data10, getRandomInt(10)))
// console.timeEnd("benchmark_10_Numbers")


console.log('Execution time with array of 100 number as input')
console.time("benchmark_100_Numbers-100")
console.log(isPartitionned(data100, getRandomInt(100)))
console.timeEnd("benchmark_100_Numbers-100")