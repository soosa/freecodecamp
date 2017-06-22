
function pairElement(str) {
  str = str.split("");
  var result = [];

  for (var i = 0; i < str.length; i++) {
  	switch (str[i]) {
  		case "T":
  			result[i] = ["T","A"];
  			break;
  		case "A":
  			result[i] = ["A", "T"];
   			break;
  		case "C":
  			result[i] = ["C","G"];
  			break;
  		case "G":
  			result[i] = ["G", "C"];
  			break;
  	}
  };
  
  return result[2];
}

// function Create2DArray(rows) {
//   var arr = [];

//   for (var i=0;i<rows;i++) {
//      arr[i] = ["ted"];
//   }

//   return arr;
// }
// console.log(Create2DArray(3));
//var test = [["G","C"],["C","G"],["G","C"]];

// [["G", "C"], ["C","G"],["G", "C"]]

var result = pairElement("GCTG");
console.log("result: " + result);













