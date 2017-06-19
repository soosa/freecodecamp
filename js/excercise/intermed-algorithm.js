var data = [
  sumAll([1, 4]),
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]),
  convertToRoman(36),
  whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })
];

/*1. Return the sum of two arguments (numbers) and all numbers between them */
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

/*2. Compare two arrays and return a new array with any items only found in 
one of the two given arrays, but not both. In other words, return the 
symmetric difference of the two arrays */
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

/*3. Convert the given number into a roman numeral */
function convertToRoman(num) {
  var romanNumbers = [
    {
      0 : "",
      1 : "I",
      2 : "II",
      3 : "III",
      4 : "IV",
      5 : "V",
      6 : "VI",
      7 : "VII",
      8 : "VIII",
      9 : "IX"
    },
    {
      0 : "",
      1 : "X",
      2 : "XX",
      3 : "XXX",
      4 : "XL",
      5 : "L",
      6 : "LX",
      7 : "LXX",
      8 : "LXXX",
      9 : "XC"
    },
    {
      1 : "C",
      2: "CC",
      3 : "CCC",
      4 : "CD",
      5 : "D",
      6 : "DC",
      7 : "DCC",
      8 : "DCCC",
      9 : "CM"      
    },
    {
      1 : "M",
      2 : "MM",
      3 : "MMM",
      4 : "MMMM",
      5 : "MMMMM"
    }
  ];

  var digits = [];
  while (num > 0) {
      digits[digits.length] = num % 10;
      num = parseInt(num / 10);
  }
 
  var roman1,
    roman10,
    roman100,
    roman1000,
    toDisplay = [];

  if (digits[3] !== undefined) {
    roman1000 = romanNumbers[3][digits[3]];
    toDisplay.push(roman1000);
  } 
  if (digits[2] !== undefined) {
    roman100 = romanNumbers[2][digits[2]];
    toDisplay.push(roman100);
  }
  if (digits[1] !== undefined) {
    roman10 = romanNumbers[1][digits[1]];
    toDisplay.push(roman10);
  }
  if (digits[0] !== undefined) {
    roman1 = romanNumbers[0][digits[0]];
    toDisplay.push(roman1);
  } 
  return toDisplay.join("");
}

/*4. Make a function that looks through an array of objects (first argument)
and returns an array of all objects that have matching property and value 
pairs (second argument). Each property and value pair of the source object has to be 
present in the object from the collection if it is to be included in the returned array.*/
function whatIsInAName(collection, source) {
  var arr = [];

  var sourceSize = Object.keys(source).length; 
  var arraySourceKeys = Object.keys(source);

  for (var x = 0; x < collection.length; x++) {
    let arrayCheck = [];
    for (var y = 0; y < sourceSize; y++) {

      if (collection[x][arraySourceKeys[y]] === source[arraySourceKeys[y]]) { //checks is collection and source have same prop/value pair
          arrayCheck.push(source[arraySourceKeys[y]]); //counting the number of matces

          if (arrayCheck.length === sourceSize ) { //check if every source prop-value is simultaniusly present in collection
            arr.push(collection[x]);
          }     
         }
    }
  }
  return arr;
}

  return arr;
}