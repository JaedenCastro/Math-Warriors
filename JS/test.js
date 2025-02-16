console.log(toInfix("232+22+39*2"));

function toInfix(expression) {
  // expression is a string
  let items = expression.split("");
  let values = [];
  let operations = [];
  let i = 0;
  while (i < items.length) {
    if (items[i] == " ") {
      i++;
      continue;
    }

    if (items[i] >= "0" && items[i] <= "9") {
      val = "";
      while (i < items.length && items[i] >= "0" && items[i] <= "9") {
        val += items[i];
        i++;
      }
      console.log(`Val: ${val}`);
      values.push(parseInt(val));
      continue;
    }

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
  console.log(items);
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
      }
      return parseInt(a / b, 10);
  }
  return 0;
}
