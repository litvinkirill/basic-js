const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  if(arr.length === 0) return arr;
  let res = [];
  for(let i = 0; i < arr.length; i++){
    switch(arr[i]){
      case '--discard-prev' : 
        if(i === 0) break;
        res.pop();
        break;
      case '--double-prev' :
        if(i === 0) break;
        res.push(arr[i - 1]);
        break;
      case '--discard-next' :
        if(i === arr.length - 1) break;
        if(arr[i + 2] == '--double-prev' || arr[i + 2] == '--discard-prev') i++;
        i++;
        break;
      case '--double-next' :
        if(i === arr.length - 1) break;
        res.push(arr[i + 1]);
        break;
      default : res.push(arr[i]);
    }
  }
  return res;
}

module.exports = {
  transform
};
