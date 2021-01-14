function standardDeviation(arr) {
  let sum = 0;
  let mean = 0;
  let sumOf = 0;

  //get mean of the numbers
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    mean = sum / arr.length;
  }
  for (let i = 0; i < arr.length; i++) {
    sumOf += Math.pow(arr[i] - mean, 2);
  }

  return Math.sqrt(sumOf / (arr.length - 1));
}
