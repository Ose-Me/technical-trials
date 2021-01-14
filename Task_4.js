function passwordChecker(str) {
  let testStr = str;

  //   use regex to test

  if (
    //   if it contains special characters including _ , numbers and letters
    /[\W_]+/.test(testStr) &&
    /[0-9]+/.test(testStr) &&
    /[A-Za-z]+/.test(testStr)
  ) {
    return "3 -> very strong";
  }

  //   if it contains numbers and letters
  if (/[0-9]+/.test(testStr) && /[A-Za-z]+/.test(testStr)) {
    return "2 -> strong";
  }

  //   if it contains only numbers
  if (/[0-9]+/.test(testStr)) {
    return "1 -> weak";
  }

  //   if it contains only letters
  if (/[A-Za-z]+/.test(testStr)) {
    return "0 -> very weak";
  }

  return "invalid";
}
