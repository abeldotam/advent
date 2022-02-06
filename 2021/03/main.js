/* ------ Loading input ------ */
const { readFileSync } = require('fs');
const { resolve } = require('path');
const input = readFileSync(resolve(__dirname, './input.txt'), 'utf-8').split('\n');

/* ------ First exercice ------ */
// Instruction: https://adventofcode.com/2021/day/3#part1

function getGammaRate() {
  var counters = new Array(input[0].length).fill(0)
  input.forEach(binary => {
    Array.from(binary).map((bit, index) => bit == 1 ? counters[index] += 1 : counters[index] -= 1)
  })
  return counters.map(count => count < 0 ? 0 : 1).join('')
}

const getEspilonRate = (gammaRate) => Array.from(gammaRate.toString()).map(bit => bit ^= 1).join('')

const gammaRate = getGammaRate()
const espilonRate = getEspilonRate(gammaRate)

console.log(`Power consuption is ${parseInt(gammaRate, 2) * parseInt(espilonRate, 2)}`)

/* ------ Second exercice ------ */
// Instruction: https://adventofcode.com/2021/day/3#part2

function getRating(ratingType) {
  let datas = [...input];

  for (let position = 0; position < input[0].length; position++) {
    if (datas.length > 1) {
      const binariesFromPosition = datas.map(bin => bin[position])
      const filterOnBin = (binary) => binariesFromPosition.filter(bin => bin === binary.toString()).length
      const [negBinNumber, posBinNumber] = [filterOnBin(0), filterOnBin(1)]

      const bitToFilter = ratingType ?
        (negBinNumber <= posBinNumber ? 0 : 1) :
        (posBinNumber >= negBinNumber ? 1 : 0)

      datas = datas.filter(entry => entry[position] === bitToFilter.toString())
    }
  }
  return datas
}

const oxygenRating = getRating(0)
const scuberRating = getRating(1)

console.log(`Life support rating is ${parseInt(oxygenRating, 2) * parseInt(scuberRating, 2)}`)