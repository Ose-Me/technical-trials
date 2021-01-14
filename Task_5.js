function replace(str) {
  // use split to replace empty strings with %20 with js join method
  let result = str.split(" ").join("%20");
  return result;
}
