/*___prints 10___*/
var foo = 1;

function bar() {
  if (!foo) {
    var foo = 10;
  }
  console.log(foo);
}
bar();  

/*___prints 1___*/
var a = 1;

function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a); 

/*___prints "Pinky"___*/
hoisted();
function hoisted(){
  console.log("Pinky"); 
}

/*___TypeError, notHoiseted is not defined___*/
notHoisted();
var notHoisted = function(){
console.log("nothoisted"); 
}