//TODO: Implement postfix expressions
// let makes variables block scoped
const readline = require("readline-sync");
const nonInteger = Error("Non-integer division found");
// dice_set1 = readline
//   .question("Enter the dice you wish to target here (Separate by spaces): ")
//   .split(" ")
//   .map(Number); // Converts to a list of numbers2 3z
dice_set2 = toInfix(
  readline.question(
    "Enter the expression you wish to play here (Separate by expressions): "
  )
);

console.log(`hello!, ${dice_set2}!`); // TEMPLATE LITERALS ONLY WORK WITH BACKTICKS??

// TODO: Throw errors whenever there's non-arithmetic division
function toInfix(expression) {
  // expression is a string
  let items = expression.split("");
  2;
  let values = [];
  let operations = [];
  let i = 0;
  while (i < items.length) {
    if (items[i] == " ") {
      i++;
      continue;
    }
    // Case where items[i] is a number

    if (items[i] >= "0" && items[i] <= "9") {
      val = "";
      while (i < items.length && items[i] >= "0" && items[i] <= "9") {
        val += items[i];
        i++;
      }
      values.push(parseInt(val));
      continue;
    }
    // Cae where items[i] is an operation

    if (
      items[i] == "*" ||
      items[i] == "/" ||
      items[i] == "+" ||
      items[i] == "-"
    ) {
      operations.push(items[i]);
      i++;
      continue;
    }
  }
  // First in first out
  while (operations.length > 0) {
    values.unshift(applyOp(operations.shift(), values.shift(), values.shift())); // Pop ops once, pop values twice // well use shift because that takes the first element rather than the last
  }
  return values[0];
}

function applyOp(op, a, b) {
  parseInt(a);
  parseInt(b);
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b == 0) {
        console.log("So how the fuck did we get here bruh");
        2;
      }
      if (!Number.isInteger(a / b)) {
        throw new Error("You are evaluating a non-integer division!", {
          cause: nonInteger,
        });
      }
      return parseInt(a / b, 10);
  }
  return 0;
}
