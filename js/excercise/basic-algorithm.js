var results = [
  reverseString("hello"),
  factorialize(5),
  palindrome("eye"),
  findLongestWord("The quick brown fox jumped over the lazy dog"),
  titleCase("I'm a little tea pot"),
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]),
  confirmEnding("Bastian", "n"),
  repeatStringNumTimes("abc", 3),
  truncateString("A-tisket a-tasket A green and yellow basket", 11),
  chunkArrayInGroups(["a", "b", "c", "d"], 2),
  bouncer([7, "ate", "", false, 9]),
  bouncer([false, null, 0, NaN, undefined, ""]),
  mutation(["hello", "lOlh"]),
  destroyer([3, 5, 1, 2, 2], 2, 3, 5),
  getIndexToIns([40, 60], 50),
  rot13("SERR PBQR PNZC, LBH QVQ VG!"),
];

/*Write a function which takes a ROT13 encoded string as input and returns a decoded string.*/
function rot13(str) { 
  var controlAbc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var encryptedAbc = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  controlAbc = controlAbc.split('');
  encryptedAbc = encryptedAbc.split('');
  var strArray = str.split('');

  for (var i = 0; i < strArray.length; i++) {
    var index = encryptedAbc.indexOf(strArray[i]);
    if (index > -1){        
      strArray[i] = controlAbc[index];
    }
  }
  strArray = strArray.join('');
  return strArray;
}

/*Return the lowest index at which a value (second argument) should be inserted into 
an array (first argument) once it has been sorted. The returned value should be a number.*/
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a,b){ return a-b; });
  var index = arr.indexOf(num);
  return index;
}

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

/*Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN*/
function bouncer(arr) {
  var falseValue = [false, null, 0, "", undefined, NaN];
  var arrCounter = arr.length;
  var arrCopy = arr;

  for (var i = 0; i < arrCounter; i++) {
    for (var j = 0; j< falseValue.length; j++){
      var index = arr.indexOf(falseValue[j]);
      if (index > -1){        
        arr.splice(index, 1); 
      }
    }
    if (arr[i] !== arrCopy[i]){
      arr.splice(i, 1); 
    } //had to put this at the end otherwise NaN stayed in
  }  return arr;
} 

/*Return true if the string in the first element of the array contains all of the letters 
of the string in the second element of the array.*/
function mutation(arr) {
  var compArr = arr[1].toLowerCase().split('');
  var compToArr = arr[0].toLowerCase().split('');
  var answer = true;

  for (var i = 0; i < compArr.length; i++) {
    var index = compToArr.indexOf(compArr[i]);
    if (index > -1) {
      compToArr.splice(index, 1);
    } else {
      answer = false;
    }
  };
  return answer;
}

/* Return the remaining elements of an array after chopping off n elements from the head.*/
function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

/*Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays*/
function largestOfFour(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
      arr[i].sort(function(a,b){return b-a;});
      newArray[i] = arr[i].shift();
  }
  return newArray;
}

/*a function that splits an array (first argument) into groups the length of size 
(second argument) and returns them as a two-dimensional array.*/
function chunkArrayInGroups(arr, size) {
  var loopCounter;
  var newArr = [];

  loopCounter = arr.length / size;
  loopCounter = Math.ceil(loopCounter);

  for (var i = 0, j = 0; i < loopCounter; i++, j += size){
    newArr.push(arr.slice(j, j+size));
  } return newArr;
}

/*Truncate a string (first argument) if it is longer than the given maximum 
string length (second argument). Return the truncated string with a ... ending.*/
function truncateString(str, num) {
  var newString;
  var sliceString = str.slice(0, num);

  if (str.length <= num) {
    return str;
  } else {
    if (sliceString.length <= 3) {
            newString = str.slice(0, num).concat("...");
      return newString;
    } else {
      newString = str.slice(0, num-3).concat("...");
      return newString;
    }   
  }
}

/*Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number.*/
function repeatStringNumTimes(str, num) {
   var concatStr = str;
   if (num > 0){
  	for (var i = num - 1; i >= 0; i--) {
  		str.concat(str);
  	}
  }
  return concatStr;
}

/*Return the length of the longest word in the provided sentence.*/
function findLongestWord(str) {
  var newArray = [];
  str = str.split(' ');

  if (str.length >= 1) {
    for (var i = 0; i < str.length; i++) {
      newArray.push(str[i].length);
  }
  newArray.sort(function(a,b){return b-a;});
  return newArray.shift();
  }
}

/*Check if a string (first argument, str) 
ends with the given target string (second argument, target).*/
function confirmEnding(str, target) {
  var targetLength = target.length; 

  if ( str.substr(-targetLength) == target){
  	return true;
  } else {
    return false;
  }  
}

/*Return true if the given string is a palindrome. Otherwise, return false.*/
function palindrome(str) {
  var regExp = /[^a-z0-9]/ig;
  var newStr = str.replace(regExp, "").toLowerCase();
  var newStrReversed = newStr.split('').reverse().join('').toLowerCase();
  
  if (newStr === newStrReversed) {
  	return true;
  } else {
  	return false;
  }
}

/*Return the factorial of the provided integer.*/
function factorialize(num) {
  if (num <= 1){
    num = 1;
  } else {
    for (var i = num - 1; i >= 1; i-- ){ 
      num *= i;
    }  
  }
  return num;
}

/*Return the provided string with the first letter of each 
word capitalized. Make sure the rest of the word is in lower case.*/
function titleCase(str){
  var newArray = [];
  var joinArray = [];
    var array = str.split(' ');

    if (array.length > 0) {
      for (var i = 0; i < array.length; i++) {
        newArray = array[i].toLowerCase().split('');
        newArray[0] = newArray[0].toUpperCase();
        newArray = newArray.join('');
        joinArray.push(newArray);
      }
      return joinArray.join(' ');
    }
}

/*Reverse the provided string.*/
function reverseString(str) {
  var array = str.split("");
  array.reverse();
  array = array.join("");
  return array;
}

