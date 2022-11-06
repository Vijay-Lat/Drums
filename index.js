let buttons = document.querySelectorAll(".drum")
let numberOfButtons = buttons.length
console.log(numberOfButtons, "numberOfButtons")
console.log(buttons, "buttons")
const clickHandler = () => {
  const audio = new Audio("sounds/tom-1.mp3")
  audio.play()
}
for (let i = 0; i < numberOfButtons; i++) {
  buttons[i].addEventListener('click', function() {
    console.log(this.innerHTML)
    let fileName = ""
    if (i === 0) {
      fileName = "sounds/tom-1.mp3"
    }
    if (i === 1) {
      fileName = "sounds/tom-2.mp3"
    }
    if (i === 2) {
      fileName = "sounds/tom-3.mp3"
    }
    if (i === 3) {
      fileName = "sounds/tom-4.mp3"
    }
    if (i === 4) {
      fileName = "sounds/snare.mp3"
    }
    if (i === 5) {
      fileName = "sounds/kick-bass.mp3"
    }
    if (i === 6) {
      fileName = "sounds/crash.mp3"
    }
    const audio = new Audio(fileName)
    audio.play()
  })
}
document.addEventListener('keydown', function(event) {
  console.log(event, "event")
  const keyPressed = event.key
  let fileName = ''
  switch (keyPressed) {
    case "k":
      fileName = "sounds/kick-bass.mp3"
      break
    case "w":
      fileName = "sounds/tom-1.mp3"
      break;
    case "a":
      fileName = "sounds/tom-2.mp3"
      break;
    case "s":
      fileName = "sounds/tom-3.mp3"
      break;
    case "d":
      fileName = "sounds/tom-4.mp3"
      break;
    case "j":
      fileName = "sounds/snare.mp3"
      break;
    case "l":
      fileName = "sounds/crash.mp3"
      break;

    default:console.log(event.key);

  }
  const audio = new Audio(fileName)
  audio.play()
})
