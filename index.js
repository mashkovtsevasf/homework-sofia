const num1 = getNum("1");
const op = getOp();
const num2 = getNum("2");

if (op === "+")
	alert(num1 + num2);
else if (op === "-")
	alert(num1 - num2);
else if (op === "/")
	alert(num1 / num2);
else
	alert(num1 * num2);

function getNum(i) {
	while(true) {
  	const num = prompt("Enter num " + i);
    if (isNaN(num))
    	alert("Not a number. Try again");
    else
    	return Number(num);
  }
}

function getOp() {
	while(true) {
    const op = prompt("Enter operation (+-*/)");
    if (op !== "+" && op !== "-" && op !== "*" && op !== "/")
      alert("No such operation. Try again")
    else
      return op;
  }
}
