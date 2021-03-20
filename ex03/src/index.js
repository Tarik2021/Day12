function rangeOfNumbers(startN, endN) {
  if (startN == endN) {
    return [startN];
  } else if (startN > endN) {
    return "The starting number will always be less than or equal to the ending number";
  } else {
    const numb = rangeOfNumbers(startN, endN - 1);
    numb.push(endN);
    return numb;
  }
}
console.log(rangeOfNumbers(1, 50));
module.exports = rangeOfNumbers;
