//generating random number
let c = Math.floor((Math.random() * 100) + 1);
console.log(c);

let count = 1;


let a;
while (a != c) {
  a = prompt('Guess a number between 1-100');
  if (a != c && a < c) {
    console.log('Wrong guess!, your number is smaller!');
    count++;
  }
  else if (a != c && a > c) {
    console.log('Wrong guess!, your number is larger!');
    count++;
  }
  else {
    console.log('Right guess!');
  }
}
console.log('Number of Tries: ', count);
