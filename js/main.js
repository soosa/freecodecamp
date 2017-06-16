/*Make a function that looks through an array of objects (first argument)
and returns an array of all objects that have matching property and value 
pairs (second argument). Each property and value pair of the source object has to be 
present in the object from the collection if it is to be included in the returned array.*/


function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  arr = Object.keys(collection[0]);
  
  // Only change code above this line
  return arr;

}

var result = whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) ;
console.log(result); //should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]


function lookUpProfile(firstName, prop){
// Only change code below this line
 var answer;

  for (var i = 0; i < contacts.length; i++ ){

    if (contacts[i].firstName == firstName) {
        if (contacts[i].hasOwnProperty(prop)){
           answer = contacts[i][prop];
           return answer;
        }else {
          answer = "No such property";
          return answer;
        }

    }else {
        answer = "No such contact";
    }    
  }
  return answer;
  
// Only change code above this line
}