const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members || !members.length) return false;
  members = members.map(current => typeof current === 'string' ? current.trim() : current);
  return members.reduce(function(result, current) {
    if(typeof current === 'string') result.push(current.split('')[0].toUpperCase());
    return result;
  }, new Array).sort().join('');
}

module.exports = {
  createDreamTeam
};
