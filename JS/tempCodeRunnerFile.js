console.log(toInfix("2+2"));

function toInfix(expression) {
  // expression is a string
  let items = expression.split("");
  let values = [];
  let operations = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i] == " ") {
      continue;
    }

    // Case that items[i] is a number
    // JavaScript converts numbers in a string back to regular numbers for comparison
    else if (items[i] >= "0" && items[i] <= "9") {
      j = 0;
      val = items[i];
      while (items[i + j] >= "0" && items[i + j] <= "9") {
        j++;
        if (items[i + j] >= "0" && items[i + j] <= "9") {
          val += items[i + j];
        }
      }
      j = 0;
      values.push(val);
      // If a digit is seen keep searching until it's no longer a digit
    }

    // Case that items[i] is an operation (+-/*)
    else if (
      items[i] == "*" ||
      items[i] == "/" ||
      items[i] == "+" ||
      items[i] == "-"
    ) {
      operations.push(items[i]);
    }
  }
  // First in first out
  while (operations.length > 0) {
    values.unshift(applyOp(operations.shift(), values.shift(), values.shift())); // Pop ops once, pop values twice // well use shift because that takes the first element rather than the last
  }
  return values.unshift();
}

function applyOp(op, b, a) {
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
      }
      return parseInt(a / b, 10);
  }
  return 0;
}
