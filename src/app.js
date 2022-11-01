/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const excuse = document.querySelector("#the-excuse");
  const btn = document.querySelector("#btn");
  let generateExcuse = () => {
    let pronoun = ["A", "The"];
    let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pincone"];
    let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
    let possetion = ["homework", "toe", "car", "shoe"];
    let where = ["on the street", "in my house", "in my driveway"];

    let proIndx = Math.floor(Math.random() * pronoun.length);
    let subjIndx = Math.floor(Math.random() * subject.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let possetionIndex = Math.floor(Math.random() * possetion.length);
    let whereIndex = Math.floor(Math.random() * where.length);
    let result =
      pronoun[proIndx] +
      " " +
      subject[subjIndx] +
      " " +
      action[actionIndex] +
      " " +
      possetion[possetionIndex] +
      " " +
      where[whereIndex];
    console.log(result);
    return result;
  };
  btn.addEventListener("click", () => {
    excuse.innerHTML = generateExcuse();
  });
  excuse.innerHTML = generateExcuse();
};
