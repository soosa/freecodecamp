/*Make a function that looks through an array of objects (first argument)
and returns an array of all objects that have matching property and value 
pairs (second argument). Each property and value pair of the source object has to be 
present in the object from the collection if it is to be included in the returned array.*/


function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  var sourceSize = Object.keys(source).length;
  var arrKey = Object.keys(source);

  for (var x = 0; x < collection.length; x++) {
  	for (var y = 0; y < sourceSize; y++) {
       var sourceKeys = Object.keys(source);
       console.log(source[Object.keys(source)]);

	  	// let collectionKeys = Object.keys(collection[i]);
	  	// if ( collectionKeys[0]  === Object.keys(source)[j] && collection[i][Object.keys(source)] === source[Object.keys(source)] ){
	  	// 	arr.push(Object.keys(collection[i]));
	  	// }
	}
  }  
  //console.log(Object.keys(collection[0]));
  // Only change code above this line
  return arr;
}


//var result = whatIsInAName([{ "a": 1 }, { "a": 1 },{"b": 2}, { "a": 1, "b": 2 }], { "a": 1 }) ;
//var result = whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
var result = whatIsInAName([
	{ first: "Romeo", last: "Montague" }, 
	{ first: "Mercutio", last: null }, 
	{ first: "Tybalt", last: "Capulet" }
	],
	{ last: "Capulet",first: "Tybalt" });
console.log("result: "+result); //should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]

