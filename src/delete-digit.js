const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = n.toString().split('');
  let numArr = [];
  for (let i = 0; i < numbers.length; i++) {
    let res = n.toString().split('');
    res.splice(i, 1);
    let num = res.join('');
    numArr.push(num);
  }
  let result = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > result) {
      result = numArr[i];
    }
  } 
  return +result;
}

module.exports = {
  deleteDigit
};
