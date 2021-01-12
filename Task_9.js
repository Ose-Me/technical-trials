function palindrome(str) {
  // split string into an array
  let arr = str.split("");

  // reverse the array and join to make
  let newStr = arr.reverse().join("");

  // initialise result
  let result = true;

  // check if old string matches the new reversed string
  if (str === newStr) {
    result = true;
  } else {
    result = false;
  }

  return result;
}
