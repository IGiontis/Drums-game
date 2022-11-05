"use strict";

const btnStart = document.querySelector(".btn-start");
const btnInfo = document.querySelector(".btn-info");
const info = document.querySelector(".info");
const boxContainer = document.querySelector(".box-container");
const allBoxes = document.querySelectorAll(".box");

// BOXes
const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const box4 = document.querySelector(".box-4");
const box5 = document.querySelector(".box-5");

// Sounds

// Working start / info buttons
const startGame = function () {
  btnStart.addEventListener("click", function (e) {
    e.preventDefault();
    boxContainer.classList.remove("hidden");
    keyPress();
  });
};

const infoButton = function () {
  btnInfo.addEventListener("click", function (e) {
    e.preventDefault();
    info.classList.toggle("hidden");
  });
};

//Working on boxes and buttons

// allBoxes.forEach((value) => {
//   //   console.log(value);
//   value.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log(e);
//   });
// });

const keyPress = function () {
  window.addEventListener("keydown", function (e) {
    if (e.key === "a" || e.key === "A") {
      const sound1 = new Audio("./sounds/crash.mp3");
      box1.classList.add("pressed");

      sound1.play();
      setInterval(() => {
        box1.classList.remove("pressed");
      }, 900);
    }
    if (e.key === "w" || e.key === "W") {
      const sound2 = new Audio("./sounds/crash.mp3");
      box2.classList.add("pressed");

      sound2.play();
      setInterval(() => {
        box2.classList.remove("pressed");
      }, 900);
    }
    if (e.key === "s" || e.key === "S") {
      const sound3 = new Audio("./sounds/crash.mp3");
      box3.classList.add("pressed");

      sound3.play();
      setInterval(() => {
        box3.classList.remove("pressed");
      }, 900);
    }
    if (e.key === "d" || e.key === "D") {
      const sound4 = new Audio("./sounds/crash.mp3");
      box4.classList.add("pressed");

      sound4.play();
      setInterval(() => {
        box4.classList.remove("pressed");
      }, 900);
    }
    if (e.key === "z" || e.key === "Z") {
      const sound5 = new Audio("./sounds/crash.mp3");
      box5.classList.add("pressed");

      sound5.play();
      setInterval(() => {
        box5.classList.remove("pressed");
      }, 900);
    }
  });
};

infoButton();
startGame();
