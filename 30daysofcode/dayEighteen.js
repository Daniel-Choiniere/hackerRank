function Solution() {
  let stack = [];
  let queue = [];
  //Write your code here
  this.pushCharacter = s => {
    return stack.push(s);
  };
  this.enqueueCharacter = s => {
    return queue.push(s);
  };
  this.popCharacter = s => {
    return stack.pop();
  };
  this.dequeueCharacter = s => {
    return queue.shift();
  };
}
