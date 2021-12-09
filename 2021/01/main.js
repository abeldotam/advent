/* ------ Loading input ------ */
const { readFileSync } = require('fs');
const { resolve } = require('path');
const input = readFileSync(resolve(__dirname, './input.txt'), 'utf-8').split('\n').map(n => +n);

/* ------ First exercice ------ */
const reducer = (previous, current, index, array) => current < array[index + 1] ? previous + 1 : previous
const firstResult = input.reduce(reducer, 0);
console.log(`First result: ${firstResult}`)


/* ------ Second exercice ------ */
function countIncrementation(range) {
  let counter = 0

  input.forEach((_, index) => {
    const variables = []
    for (let i = 0; i < range + 1; i++) variables[i] = input[index + i];

    const isDefined = variables.every(variable => variable !== undefined)
    if (isDefined) {
      const addition = (a, b) => a + b
      const [current, next] = [[...variables], [...variables]]

      current.pop()
      next.shift()

      counter = current.reduce(addition) < next.reduce(addition) ? counter + 1 : counter
    }
  });
  return counter
}

const secondResult = countIncrementation(3);
console.log(`Second result: ${secondResult}`)




