function findThree(n) {
  let arr = [];

  //   add numbers from 0 to n into arr array
  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }

  //   use regex test method to filter number that don't contain 3
  let newArr = arr.filter((j) => {
    //   change numbers to string to test
    let testStr = j.toString();
    let testRegex = /3/;
    if (testRegex.test(testStr) == true) {
      return true;
    }
    return false;
  });
  //   return object containing count of numbers and the new array
  return { count: newArr.length, numbers: newArr };
}
