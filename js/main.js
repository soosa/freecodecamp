
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


var result = diffArray([1, 2, 3, 5], [1, 2, 3, 4]);
console.log(result);
