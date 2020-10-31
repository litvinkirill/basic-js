const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {
  repeatTimes = 1,
  separator = '+',
  addition = '',
  additionRepeatTimes = 1,
  additionSeparator = '|'}) {
  
  let result = '';
  
  for (let i = 1; i <= repeatTimes; i++) {
    if (i > 1) result += separator;

    result += str;

    for (let j = 1; j <= additionRepeatTimes; j++) {
      if (j > 1) result += additionSeparator;
      
      result += addition;
    }
  }
  
  return result;
};
  