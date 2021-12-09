
/* ------ Loading input ------ */
const { readFileSync } = require('fs');
const { resolve } = require('path');
const input = readFileSync(resolve(__dirname, './input.txt'), 'utf-8').split('\n');


/* ------ First exercice ------ */
// Instruction: https://adventofcode.com/2021/day/1#part1
function calculateFirstPosition() {
  const position = {
    distance: 0,
    depth: 0
  }

  input.forEach((instruction) => {
    instruction = instruction.split(" ")
    switch (instruction[0]) {
      case 'forward':
        position.distance += parseInt(instruction[1], 10)
        break;
      case 'down':
        position.depth += parseInt(instruction[1], 10)
        break;
      case 'up':
        position.depth -= parseInt(instruction[1], 10)
        break;
      default:
        break;
    } 
  });
  return position
}

const firstPosition = calculateFirstPosition();
console.log(`Horizontal position: ${firstPosition.distance * firstPosition.depth}`)


/* ------ Second exercice ------ */
// Instruction: https://adventofcode.com/2021/day/2#part2

function calculateSecondPosition() {
  const position = {
    distance: 0,
    depth: 0,
    aim: 0
  }

  input.forEach((instruction) => {
    instruction = instruction.split(" ")
    switch (instruction[0]) {
      case 'forward':
        position.distance += parseInt(instruction[1], 10)
        position.depth += position.aim * parseInt(instruction[1], 10)
        break;
      case 'down':
        position.aim += parseInt(instruction[1], 10)
        break;
      case 'up':
        position.aim -= parseInt(instruction[1], 10)
        break;
      default:
        break;
    } 
  });
  return position
}

const secondPosition = calculateSecondPosition();
console.log(`Horizontal position: ${secondPosition.distance * secondPosition.depth}`)
