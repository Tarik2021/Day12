function sumFibonacci(num) {
  var start = 0;
  var next = 1;
  var current;
  var sumOdd = 0;
  if (num < 1) {
    return 0;
  }
  for (var i = 0; i <= num; i++) {
    current = start + next;
    start = next;
    next = current;
    if (current % 2 !== 0 && current <= num) {
      sumOdd = current + sumOdd;
    }
  }
  return sumOdd + 1;
}
console.log(sumFibonacci(2));
module.exports = sumFibonacci;