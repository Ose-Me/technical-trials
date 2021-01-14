function mode(str) {
  // split string to array
  let arr = str.split("");
  let map = {};

  //   create a map of occurence
  for (let i = 0; i < arr.length; i++) {
    //   if not found in the map object initialise the value to one
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    }
    // if found in the map object increment by 1
    else {
      map[arr[i]]++;
    }
  }

  //   set max value to 0
  let max = 0;

  //   map through keys of the map object
  Object.keys(map).forEach((n) => {
    //if max is equal to value(occurence) of the key push to mode
    if (max === map[n]) {
      mode.push(n);
    }

    // if new max,
    if (max < map[n]) {
      // set mode to new occurence
      mode = [n];

      //   assign new max
      max = map[n];
    }
  });

  //   if mode contains only one character return it
  if (mode.length === 1) {
    return mode[0];
  }

  //   else return an array containing all characters with the highest occurence
  return mode;
}

console.log(mode("afhuuusnimr443o0sggg"));
