
function sumAll(arr) {
 var sum = arr.reduce(function(a,b){
  return a + b;
 });
 return sum;
}

var result = sumAll([1, 4]);
console.log(result);

