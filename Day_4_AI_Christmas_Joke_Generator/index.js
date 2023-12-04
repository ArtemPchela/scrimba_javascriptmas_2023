/** uncomment one of these **/
// import OpenAI from "openai"
// import { HfInference } from '@huggingface/inference'
let isOpen = false;

const jokes = [
  "Why was the math book sad at Christmas? Because it had too many problems.",
  "What do you get when you cross a snowman and a vampire? Frostbite.",
  "What do you call a snowman party? A snowball!",
  "How does a snowman get around? By riding an 'icicle'!",
  "What did the gingerbread man use to fix his house? Icing and gumdrops!",
  "What do you call a cat on the beach during Christmas time? Sandy Claws!",
  "What do you call a reindeer that tells jokes? A 'comedian'!",
  "What's a snowman's favorite cereal? Frosted Flakes!",
  "What do you get when you cross a Christmas tree and an iPad? A pineapple!",
  "What do you call a snowman with a carrot nose and a corn cob pipe? Frozen vegetable!",
  "Why did the ornament go to school? To get a little 'tree'-education!",
  "What do you call a snowman with a lot of money? Frost-bite!",
  "What's Santa's favorite candy? Jolly ranchers!",
  "How does a snowman get around? By riding an 'icicle'!",
  "What do you call a snowman with a six-pack? An abdominal snowman!",
  "What do you call a snowman with a bad temper? A meltdown!",
  "Why did Santa go to music school? To improve his 'wrap' skills!",
  "What do you call a snowman with a six-pack? An abdominal snowman!",
  "What do you get if you cross a snowman and a dog? Frostbite!",
  "What do you call a snowman with a bad temper? A meltdown!",
];

let jokeIndex = 0;

document
  .getElementById("window-container")
  .addEventListener("click", function () {
    const leftDoor = document.querySelector(".left-door");
    const rightDoor = document.querySelector(".right-door");
    const jokeDisplay = document.querySelector(".joke-display");

    if (isOpen) {
      leftDoor.style.animation = "left-close 0.3s forwards";
      rightDoor.style.animation = "right-close 0.3s forwards";
    } else {
      leftDoor.style.animation = "left-open 0.3s forwards";
      rightDoor.style.animation = "right-open 0.3s forwards";

      const currentJokeLines = jokes[jokeIndex].split("? ");
      if (currentJokeLines.length === 2) {
        jokeDisplay.innerHTML = `${currentJokeLines[0]}?<br>${currentJokeLines[1]}`;
      } else {
        jokeDisplay.textContent = jokes[jokeIndex];
      }

      jokeIndex = (jokeIndex + 1) % jokes.length;
      jokeDisplay.style.animation = "display-joke 0.3s forwards";
    }

    isOpen = !isOpen;
  });
