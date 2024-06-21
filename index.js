//Detecting button press

var numberOfDrumButtons = document.querySelectorAll("button").length;

// For each button, it adds an event listener that listens for a click event.
// When the button is clicked, the specified function will be executed.
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);

    buttonAnimation(buttonInnerHtml);
  });
}

////Detecting KeyBoard press

//KeyStroke (when the key is pressed this funciton will work)
document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});
//repeating by what should need to happen when the key is pressed are mouse is clicked in the specified button
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
