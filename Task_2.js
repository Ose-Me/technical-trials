function isPrime(num) {
  let result = true;

  // if number is 1 result is false
  if (num === 1) {
    result = false;
  }

  // check for numbers from 2 to the square root of the number
  for (var i = 2; i <= Math.sqrt(num); i++) {
    // if num divided by those number divides without remainder not a prime number
    if (num % i === 0) {
      result = false;
    }
  }

  // else return true
  return result;
}
