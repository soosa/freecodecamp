
function diffArray(arr1, arr2) {
  var newArray = [];
  var index, index2;
  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }

  var reducedArr1 = arr1.filter(onlyUnique);
  var reducedArr2 = arr2.filter(onlyUnique);

  var arg1Counter = reducedArr1.length;
  var arg2Counter = reducedArr2.length;
  //console.log(arg2Counter);

  for (var i = 0; i < arg1Counter; i++) {
    for (var j = 0; j < arg2Counter; j++) {
      if (reducedArr1[i] == reducedArr2[j]){
        //console.log(reducedArr1[i]);
        reducedArr1.splice(reducedArr1[i], 1);
        reducedArr2.splice(reducedArr2[j], 1);
        console.log(index2);
       // reducedArr2.splice(index2, 1);
      }
    }
  }
  return reducedArr1.concat(reducedArr2);
}

var result = diffArray([1, 2, 3, 5], [1, 2, 3, 4]);
console.log(result);


