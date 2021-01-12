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
  // return result
  console.log(result);
}

isPrime(1);
// export default PrimeNumber;
