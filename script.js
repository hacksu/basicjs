// this is a comment
// this text doens't affect anything

//variable
var x = 0, y = 10, sum = 0;

//if/then
if(x == 0){
  // console.log("poop");
}

//for loop
for(var i = 0;i<y; i++){
  // console.log(i);
}

//function
function add(){
  x = document.getElementById('num1').value;
  y = document.getElementById('num2').value;
  sum = x + y;
  console.log(sum); // why did we get 12?

  x = document.getElementById('num1').value;
  y = document.getElementById('num2').value;
  sum = parseInt(x) + parseInt(y);
  document.getElementById('label').innerHTML = "Our answer is: " + sum;

}
