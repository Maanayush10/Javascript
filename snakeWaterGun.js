//snake Water gun game
//input should be S,W, G 
//confirmation taken whenever required
const myArray = ['S', 'W', 'G'];
let sth;
const checkForWin = (input) => {
  if (input == 'S' && sth == 'W') {
    return 1;
  }
  else if (input == 'S' && sth == 'G') {
    return 0;
  }
  else if (input == 'W' && sth == 'S') {
    return 0;
  }
  else if (input == 'W' && sth == 'G') {
    return 1;
  }
  else if (input == 'G' && sth == 'S') {
    return 1;
  }
  else if (input == 'G' && sth == 'W') {
    return 0;
  }
  else {
    return -1;
  }

}
let check = true;
while (check) {
  sth = myArray[Math.floor(Math.random() * myArray.length)];
  console.log(sth);
  let ip = prompt('Enter your choice(between Snake, Water and Gun)----> ONLY I/P S,W,G');

  if (checkForWin(ip) == 1) {
    alert('You win!');
  }
  else if (checkForWin(ip) == 0) {
    alert('You lose!');
  }
  else {
    alert('It is a tie!');
  }
  check = confirm('Do you want to play again?');
}
