function checkSum(arr, num) {
  // start first loop from first index of the array
  for (let x = 0; x < arr.length; x++) {
    // second loop starts from the second index
    for (let y = x + 1; y < arr.length; y++) {
      // third loop starts from the third index
      for (let z = y + 1; z < arr.length; z++) {
        // checking if any of 3 numbers in the array sum up to the number
        if (arr[x] + arr[y] + arr[z] === num) {
          return [arr[x], arr[y], arr[z]];
        }
      }
    }
  }

  // return empty array if condition is not met
  return [];
}
