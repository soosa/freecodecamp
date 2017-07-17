


function addArg(test){
	var result = 0;
	for (var i = 2; i < test.length; i++ ){
		result += Number(test[i]);
	}
	return result;
}

 console.log(addArg(process.argv))