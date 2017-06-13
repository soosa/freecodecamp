var data = [
  sumAll([1, 4]),
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
];

/*Return the sum of two arguments (numbers) and all numbers between them*/
function sumAll(arr) {
  var minArr = arr.reduce(function(a, b) {
    return Math.min(a, b);
  });
  var maxArr = arr.reduce(function(a, b) {
    return Math.max(a, b);
  });
  var sum = 0;
  for (var i = minArr; i <= maxArr; i++) {
  	sum += i;
  }

  return sum;
}

/*Compare two arrays and return a new array with any items only found in 
one of the two given arrays, but not both. In other words, return the 
symmetric difference of the two arrays.*/
function diffArray(arr1, arr2) {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  var newArray = arr1.concat(arr2);
  newArray = newArray.filter(onlyUnique);
  var newArrCopy1 = newArray.slice();
  var newArrCopy2 = newArray.slice();
  var index;

  function spliceArray(i, newArrayCopy, arg) {
    index = newArrayCopy.indexOf(arg[i]);
    if (index > -1) {
      newArrayCopy.splice(index, 1);
    }
  }

  for (var i = 0; i < arr1.length; i++) {
    spliceArray(i, newArrCopy1, arr1);
  }

  for (var j = 0; j < arr2.length; j++) {
    spliceArray(j, newArrCopy2, arr2);
  }

  return newArrCopy1.concat(newArrCopy2);
}