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

// Working start / info buttons
const startGame = function () {
  btnStart.addEventListener("click", function (e) {
    e.preventDefault();
    boxContainer.classList.remove("hidden");
  });
};

const infoButton = function () {
  btnInfo.addEventListener("click", function (e) {
    e.preventDefault();
    info.classList.toggle("hidden");
  });
};

//Working on boxes and buttons

allBoxes.forEach((value) => {
  //   console.log(value);
  value.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e);
  });
});

const keyPress = function () {
  window.addEventListener("keydown", function (e) {
    if (e.key === "a" || e.key === "A") {
      box1.style.backgroundColor = "red";
      this.setInterval(() => {
        box1.style.backgroundColor = "white";
      }, 400);
    }
    if (e.key === "w" || e.key === "W") {
      box2.style.backgroundColor = "red";
      this.setInterval(() => {
        box2.style.backgroundColor = "white";
      }, 400);
    }
    if (e.key === "s" || e.key === "S") {
      box3.style.backgroundColor = "red";
      this.setInterval(() => {
        box3.style.backgroundColor = "white";
      }, 400);
    }
    if (e.key === "d" || e.key === "D") {
      box4.style.backgroundColor = "red";
      this.setInterval(() => {
        box4.style.backgroundColor = "white";
      }, 400);
    }
    if (e.key === "z" || e.key === "Z") {
      box5.style.backgroundColor = "red";
      this.setInterval(() => {
        box5.style.backgroundColor = "white";
      }, 400);
    }
  });
};

keyPress();
infoButton();
startGame();
