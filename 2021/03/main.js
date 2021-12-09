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