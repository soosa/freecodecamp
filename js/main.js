var result;
result = destroyer([3, 5, 1, 2, 2], 2, 3, 5);

/*You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.*/
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  var arrayCounter = args[0].length;
  
  for (var i = 0; i < arrayCounter; i++) {
    for (var j = 1; j < args.length; j++) {
      var index = args[0].indexOf(args[j]);
      if (index > -1){        
        args[0].splice(index, 1); 
      }
    }
  } return args[0];
}

document.getElementById('result').innerHTML = "<p>" + result + "</p>";
console.log(result);
