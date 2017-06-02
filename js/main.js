var result;
result = getIndexToIns([40, 60, 30], 50);

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a,b){ return a-b; });
  var index = arr.indexOf(num);
  return index;
}

document.getElementById('result').innerHTML = "<p>" + result + "</p>";
console.log(result);
