const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const btnEle = document.getElementById("generate-btn");
let passkey1 = "";
let passkey2 = "";
const btn1 = document.getElementById("key-one");
const btn2 = document.getElementById("key-two");
console.log("hello");
btnEle.addEventListener("click", function () {
  console.log("hello");
  let len = document.getElementById("len-ele").value;
  let rep = document.getElementById("rep-ele").value;

  passkey1 = createPasskey(len, rep);
  passkey2 = createPasskey(len, rep);
  btn1.textContent = passkey1;
  btn2.textContent = passkey2;
  console.log(passkey1);
  console.log(passkey2);
});

function createPasskey(len, rep) {
  let passkey = "";
  let map = new Map();
  if (!len || !rep) {
    len = 15;
    rep = 1;
  }
  while (len > 0) {
    console.log("in the loop");
    const idx = Math.floor(Math.random() * (characters.length - 1));
    if (
      (map.has(characters[idx]) && map.get(characters[idx]) > rep) ||
      (passkey.length > 0 &&
        passkey.charAt(passkey.length - 1) === characters[idx])
    )
      continue;

    passkey += characters[idx];
    if (!map.has(characters[idx])) map.set(characters[idx], 1);
    else map.set(characters[idx], map.get(characters[idx]) + 1);

    len--;
  }
  return passkey;
}

document.addEventListener("click", function (e) {
    console.log("button clicked")
  if (e.target.id === "key-one") {
    navigator.clipboard.writeText(passkey1);
  }
  else if(e.target.id === "key-two"){
    navigator.clipboard.writeText(passkey2);
  }
});
