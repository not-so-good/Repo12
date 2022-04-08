// Only change code below this line
function sumFibonacci(num, tempNum = 0, prevNum = 1) {
    if (tempNum > num) {
        return 0;
    } else if(num === 1) {
        return 1;
      } else if(tempNum % 2 !== 0) {
          return tempNum + sumFibonacci(num, tempNum + prevNum, tempNum);
      }else {
          return 0 + sumFibonacci(num, tempNum + prevNum, tempNum);
      }
  }

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;