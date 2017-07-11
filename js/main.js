function fearNotLetter(str) {
  	var alphabet = ("abcdefghijklmnopqrstuvwxyz");
	var first = alphabet.indexOf(str[0]);
	console.log(alphabet[2]);
	var strIndex = 0;
	var missing;

	for (var i = first ; i < str.length ; i++) {
	    if (str[strIndex] === alphabet[i]) {
	        strIndex++;
	    } else {
	        missing = alphabet[i];
	    }
	}
	return missing;
}


var result = fearNotLetter("abce");
console.log("result: " + result);