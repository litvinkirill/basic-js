const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const A = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
  }
  encrypt() {
    if(arguments.length < 2) throw new Error('Incorrect arguments!');
    let [m, k] = arguments;
    if(typeof m !== 'string' || typeof k !== 'string') throw new Error('Incorrect arguments!');
    m = m.toUpperCase();
    k = k.toUpperCase();
    while(m.length > k.length) k += k;
    let c = '';
    for(let i = 0, j = 0; i < m.length; i++){
      if(A.indexOf(m[i]) < 0) {c += m[i]; continue;}
      c += A[(A.indexOf(m[i]) + A.indexOf(k[j])) % A.length];
      j++;
    }
    return this.reverse === false ? c.split('').reverse().join('') : c;
  }
  decrypt() {
    if(arguments.length < 2) throw new Error('Incorrect arguments!');
    let [c, k] = arguments;
    if(typeof c !== 'string' || typeof k !== 'string') throw new Error('Incorrect arguments!');
    k = k.toUpperCase();
    while(c.length > k.length) k += k;
    let m = '';
    for(let i = 0, j = 0; i < c.length; i++){
      if(A.indexOf(c[i]) < 0) {m += c[i]; continue;}
      m += A[(A.indexOf(c[i]) - A.indexOf(k[j]) + A.length) % A.length];
      j++;
    }
    return this.reverse === false ?  m.split('').reverse().join('') : m ;
  }
}

module.exports = {
  VigenereCipheringMachine
};
