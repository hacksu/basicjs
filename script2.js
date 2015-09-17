console.log("Hello!!!!!!!!");

var x = 0, y = 10;
//
// if(x == 0){
//   console.log("X is zero");
// }
//
// for(var i = 0; i < 10; i++){
//   console.log(i);
// }

function add(){
  // x and y will be strings
  x = document.getElementById("num1").value;
  y = document.getElementById("num2").value;

  var sum = parseInt(x) + parseInt(y);

  document.getElementById("label").innerHTML = "Your sum is: " + sum;

}
