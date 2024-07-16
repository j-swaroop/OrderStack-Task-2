let a = 3.14159;
let roundA = 2;

// Using Built-in method
console.log(a.toFixed(roundA));

// without built-in
let b = String(a);
let result = "";

for (let i = 0; i <= roundA; i++) {
  if (i === 0) {
    for (let j of b) {
      result += j;
      if (j === ".") {
        break;
      }
    }
  } else {
    let lengthOfResult = result.length
    if (i === roundA) {
      let point = parseInt(b[lengthOfResult + 1]);
      if (point >= 5) {
        result += parseInt(b[lengthOfResult]) + 1;
      } else {
        result += b[lengthOfResult];
      }
    } else {
      result += b[lengthOfResult];
    }
  }
}

console.log(result);
