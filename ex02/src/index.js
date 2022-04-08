function myCounter(n) {
    if (n >= 1) {
        const countDownArray = myCounter(n - 1);
        countDownArray.unshift(n);
        return countDownArray;
    } else {
        return [];
    }
}

console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;