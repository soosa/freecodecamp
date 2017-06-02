var result;
result = rot13("LBH QVQ VG!");

function rot13(str) { // LBH QVQ VG!
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

document.getElementById('result').innerHTML = "<p>" + result + "</p>";
console.log(result);
