var numberOfDrumButtons = document.querySelectorAll(".drum").length; //finds all the buttons with the class drum and counts them. This is stored in a variable called numberOfDrumButtons.
for (var i = 0; i < numberOfDrumButtons; i++) { //this is a for loop that will run as long as i is less than the number of drum buttons. It will increment i by 1 each time it runs.
  document.querySelectorAll(".drum")[i].addEventListener("click", function() { //this is an event listener that will run a function when the button is clicked. The function will play the sound associated with the button that was clicked.
    var buttonInnerHTML = this.innerHTML; //this gets the innerHTML of the button that was clicked and stores it in a variable called buttonInnerHTML.
    makeSound(buttonInnerHTML); //this calls the makeSound function and passes in the buttonInnerHTML variable as an argument.

    switch (buttonInnerHTML) { //this is a switch statement that will run different code depending on the value of buttonInnerHTML.
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3"); //this creates a new audio object and sets the source to the sound file associated with the button that was clicked. The this keyword refers to the button that was clicked, and innerHTML gets the text inside the button (which is the letter associated with the sound).
        tom1.play();
        break; //this breaks out of the switch statement so that the code doesn't continue to run.
      
        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
     
        case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
     
        case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      
        case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      
        case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      
        case "l":
        var kickbass = new Audio("sounds/kick-bass.mp3");
        kickbass.play();
        break;
        
        default: console.log(buttonInnerHTML); //this is the default case that will run if none of the other cases match. It will log the value of buttonInnerHTML to the console.
    }
  });
}

document.addEventListener("keydown", function(event) { //this is an event listener that will run a function when a key is pressed. The function will play the sound associated with the key that was pressed.

  makeSound(event.key); //this calls the makeSound function and passes in the key that was pressed as an argument.
});

  function makeSound(key) { //this is a function that will play the sound associated with the key that was pressed. The key parameter is the key that was pressed.
  
  switch (key) { //this is a switch statement that will run different code depending on the value of buttonInnerHTML.
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); //this creates a new audio object and sets the source to the sound file associated with the button that was clicked. The this keyword refers to the button that was clicked, and innerHTML gets the text inside the button (which is the letter associated with the sound).
      tom1.play();
      break; //this breaks out of the switch statement so that the code doesn't continue to run.

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    default: console.log(buttonInnerHTML); //this is the default case that will run if none of the other cases match. It will log the value of buttonInnerHTML to the console.
  }
};














//var audio = new Audio("sounds/tom-1.mp3"); //this creates a new audio object and sets the source to the sound file associated with the button that was clicked. The this keyword refers to the button that was clicked, and innerHTML gets the text inside the button (which is the letter associated with the sound).
    //audio.play();