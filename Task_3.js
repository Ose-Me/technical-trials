function PrimeNumbers(arr) {
  // initialise result array
  let result = [];

  for (var i = 0; i < arr.length; i++) {
    //   check if number is prime with previous isPrime function and add to result array
    if (isPrime(arr[i]) === true) {
      result.push(arr[i]);
    }
  }

  return result;
}

// isPrime function from previous task;
function isPrime(num) {
  let result = true;

  if (num === 1) {
    result = false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      result = false;
    }
  }
  return result;
}
