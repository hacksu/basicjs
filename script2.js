// this is a comment

var x = 0, y = 10, sum = 0;

if(x == 0){
  console.log("x == 0");
}

for(var i = 0; i < y; i++){
  console.log(i);
}

function add(){
  x = document.getElementById('num1').value;
  y = document.getElementById('num2').value;
  sum = x + y;
  console.log(sum);

  sum = parseInt(x) + parseInt(y);
  document.getElementById('label').innerHTML = "Our answer is: " + sum;
}
