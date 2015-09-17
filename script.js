// This is a comment
// This text doesn't affect anything, use comments to leave yourself
// and other developers notes, so that you and others can understand code.

// Variables
// Variables are like boxes in our computer that we can put values into.
// Variables can have types like, integers, strings, doubles (decimals), etc.
// In javascript, we don't need to tell our variable what type the variable
// should take, because it will know automatically.
// The way variables work is we give them a name (so, x), and assign them
// a value using the '=' operator. The value they'll be assigned follows the
// "=" operator.
// This is important to note that every time you use '=', it will assign
// a value. You cannot use a single equal sign to determine equality.
// (This is will further explained at the next part.)
var x = 0, y = 10, sum = 0;


// If/Then
// If/then statements are your first, basic kind of flow control for a progam.
// They let you choose an action based on a boolean statement (a statement
// that either evaluates to true or false). In this example, we're saying
// if x = 0 (which is does, we just said said it was on the earlier lines)
// then we're going to output the words "x == 0" on the console.
// Notice that here we have an '==', or an 'is equal to' operator. This
// must be used instead of '=', otherwise we'd be setting x to equal 0,
// instead of checking that it is equal.
if(x == 0){
  // The console is a really important tool to use when writing javascript.
  // You can see the console on your browser usually by right clicking and
  // selecting "Inspect Element", and then there should be a tab on your
  // developer tool section where you can see the HTML of the page to see
  // the console. The console is used to debug code. It's really useful to
  // see what part of your program might be breaking and checking values.
  // We'll use this a lot in the future.
  console.log("x == 0");
}

// For Loops
// For loops are the second kind of flow control we discussed.
// For loops look a little funky, but basically they're saying while some
// counter satisfies a condition, do this action. In our example, the variable
// 'i' is our counter. We start i off with a value of 0. Our condition is 'i < y'.
// We know that y == 10 from line 16. So, the first time our loop runs, when
// i = 0 and y = 0, our condition says, 0 < 10, thats correct! so it will go
// run the block of code inside the loop, which right now we have just outputting
// the value of i to the console. So, we'll see a 0 in the console. The loop isn't
// done yet though! The next step is to perform the after effect, which is the 'i++'
// in our for loop. This mean thats once the block of code inside the loop
// is fulfilled, we could increment i (our counter) by 1. (i++ or ++i
// both just increment a variable.)
// Once i is incremented, we start over. So now, i = 1, and we'll check the
// condition (i < y), and that's true since 1 < 10. The inner code will run
// so we'll see 1 in the console. We'll then increment i by 1, so i will
// now be equal to 2.
// We'll continue this process 8 more times until i is incremented all the way
// to 10. Then, when we check the condition, i will no longer be less than y,
// so we'll exit our loop and continue on.
// Note that it's really important to have a counter, after effect, and condition
// that will eventually no longer be true, otherwise you'll have an endless
// loop and your program will crash your browser!
for(var i = 0; i < y; i++){
  console.log(i);
}

// Function
// Functions are a really important programming concept. Functions are
// repeatable blocks of code with a name and can be called anytime after
// they're defined. Our function is called add() and it will get the values
// of the two text boxes from our html file and it will add them together.
// Functions are awesome, and should be used all the time. They make you
// have to write less code, because you can repeat them. They make your code
// easier to debug and understand.
function add(){

  // Here, we set x and y to the value from our HTML elements with the id's
  // of num1 and num2 (the text boxes, respectively.) The values are stored
  // in the variables as strings.
  x = document.getElementById('num1').value;
  y = document.getElementById('num2').value;

  // Because the values are stored as strings, we get 12. 1+2 definitely is
  // not 12, but because they're strings, the values were concatenated (or
  // combined), we got 12. Let's fix this.
  sum = x + y;
  console.log(sum); // why did we get 12?

  // Here, we'll parseInt, or convert the value of x and y into integers.
  // This allows us to do normal math on our x and y variables, so now,
  // sum will = 2. Now that our math makes sense, we'll update our HTML
  // page to display our answer. 
  sum = parseInt(x) + parseInt(y);
  document.getElementById('label').innerHTML = "Our answer is: " + sum;
}
