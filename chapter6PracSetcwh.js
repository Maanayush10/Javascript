//q1
/*
let age = prompt('Please input your age: ');
if (age > 18 && age > 0) {
  document.clear();
  document.write('You can Drive');
}
else if (age < 0) {
  alert('Please enter a valid age!');
}
else {
  document.clear();
  document.write('You cannot drive!');
}
*/

//q2 & q3

/*
let con;
let age = prompt('Please input your age: ');
age = Number.parseInt(age);
if (age > 18 && age > 0) {
  // document.clear();
  document.write('You can Drive');
}
else if (age < 0) {
  // console.error('Please enter a valid age!');
  alert('Please enter a valid age!');
}
else {
  // document.clear();
  document.write('You cannot drive!');
}
con = confirm('Do you want to see the prompt again?');
*/

//q4
/*
let num = prompt('Enter a number');

if (num > 4) {
  window.location.href = 'https://www.google.com/'
}
*/

//q5
/*
let option = prompt('choose any color between red,yellow, green');

if (option == 'yellow') {
  document.body.style.background = "Yellow";
}
else if (option == 'red') {
  document.body.style.background = "Red";
}
else {
  document.body.style.background = "Green";
}
*/
// let age = prompt('Enter your age!');
// age = Number.parseInt(age);

const canDrive = (age) => {

  if (age > 18 && age > 0) {
    // document.clear();
    // document.write('You can Drive');
    return 1;
  }
  else if (age < 0) {
    // console.error('Please enter a valid age!');
    // alert('Please enter a valid age!');
    return -1;
  }
  else {
    // document.clear();
    // document.write('You cannot drive!');
    return 0;
  }

}
let check = true;
while (check) {
  let age = prompt('Enter your age!');
  age = Number.parseInt(age);
  if (canDrive(age) == 1) {
    alert('You can drive!');
  }
  else if (canDrive(age) == -1) {
    alert('Please Enter a valid age!');
  }
  else {
    alert('You cannot drive!');
  }
  check = confirm('Do you want to play again?');

}
