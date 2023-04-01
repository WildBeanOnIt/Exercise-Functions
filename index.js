// *JS Function

// !Ex
let warrior = {
  name: "Supper Tuffy",
  attack: 70,
  defense: 55,
  mana: 100,
};

function levelUp(prop, val) {
  warrior[prop] += val;
}

levelUp("attack", 2);
levelUp("defense", 8);
levelUp("mana", 17);

console.log(warrior);

// PEMDAS
// !Ex
function toCelsius(f) {
  let temp = (5 / 9) * (f - 31);
  return temp.toFixed(2);
}

// let cel = toCelsius(45);

let weather = "The temperature outside is " + toCelsius(45) + " Celsius!";
console.log(weather);

// !Ex1.
function calcArea(w, l) {
  return w * l;
}

let kitchenArea = calcArea(15, 18);
let bedRoomArea = calcArea(12, 10);

// console.log(kitchenArea);
// console.log(bedRoomArea);

// --------------------------------------------------------------------
// *Practiceee
// !Ex
function capital(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let stringText = capital("hello");
console.log(stringText);

// --------------------------------------------------------------------

// !Ex
function reverseStr(str) {
  return str.split("").reverse().join("");
}

let backWardsTxt = reverseStr("hello");
console.log(backWardsTxt);

// --------------------------------------------------------------------

// !Ex
function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let num = [1, 2, 3, 4, 5];
let result = sumArray(num);

console.log(result);

// user prompt: console.log(prompt("Hello User"));
// --------------------------------------------------------------------
