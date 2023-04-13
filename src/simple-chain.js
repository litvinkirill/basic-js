const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(!this.chain) this.chain = [];
    let s = '' + value;
    this.chain.push(s.length ? '( ' + s + ' )' : '( )');
    return this;
  },
  removeLink(position) {
    if(isNaN(position) || typeof(position) !== 'number'){
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    if(position < 1 || position > this.getLength()){
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    if(this.chain) this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
