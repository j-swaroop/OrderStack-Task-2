// Diamond Pattern
let n = 5;

for (let i = 1; i <= 2 * n - 1; i++) {
  if (i <= n) {
    console.log(" ".repeat(n - i) + "* ".repeat(i));
  } else {
    console.log(" ".repeat(i - n) + "* ".repeat(2 * n - i));
  }
}

// Another Simple Way

// let arr = []
// for (let i = 1; i <= n; i++){
//     let row = ' '.repeat(n - i) + '* '.repeat(i)
//     console.log(row)
//     if (i < n){
//         arr.push(row)
//     }

// }

// arr.reverse()
// for (let i of arr){
//     console.log(i)
// }
