const allBtns = document.querySelectorAll("button");
function playAudio(audioFile) {
  new Audio(audioFile).play();
}

function addKeyPressed(element) {
  const currentElement = document.querySelector(`.${element}`);
  currentElement.classList.add("pressed");
  setTimeout(function () {
    currentElement.classList.remove("pressed");
  }, 500);
}

function handleClick(buttonInnerHtml) {
  // Evaluate which key was triggered and take action accordingly
  switch (buttonInnerHtml) {
    case "w":
      playAudio("sounds/tom-1.mp3");
      addKeyPressed(buttonInnerHtml);

      break;
    case "a":
      playAudio("sounds/tom-2.mp3");
      addKeyPressed(buttonInnerHtml);

      break;
    case "s":
      playAudio("sounds/tom-3.mp3");
      addKeyPressed(buttonInnerHtml);

      break;
    case "d":
      playAudio("sounds/tom-4.mp3");
      addKeyPressed(buttonInnerHtml);

      break;
    case "j":
      playAudio("sounds/snare.mp3");
      addKeyPressed(buttonInnerHtml);

      break;
    case "k":
      playAudio("sounds/crash.mp3");
      addKeyPressed(buttonInnerHtml);

      break;
    case "l":
      playAudio("sounds/kick-bass.mp3");
      addKeyPressed(buttonInnerHtml);

      break;
  }
}

const handleKeyPresses = function (e) {
  // e refers to the key being pressed
  const keyPressed = e.key;
  handleClick(keyPressed);
};

allBtns.forEach(function (btns) {
  // adding an event listener to each individual btns
  btns.addEventListener("click", function () {
    // checks the content of the element clicked and if it matches any of the above keys, handleClick() would be called on that element.
    const buttonInnerHtml = this.innerHTML;
    handleClick(buttonInnerHtml);
  });
});

document.addEventListener("keydown", handleKeyPresses);
