let img = document.querySelector("img");
let left = 0;
let walkingRight = true;
let isDancing = false;

img.style.left = left + "px";

function catWalkRight() {
  if (walkingRight === true) {
    left += 10;
    if (left == window.innerWidth / 2 && isDancing === false) {
      isDancing === true;
      catDancing();
    } else {
      img.style.left = left + "px";
      let windowWidth = window.innerWidth;
      let rightOfScreen = windowWidth - img.width;

      if (left <= rightOfScreen) {
        setTimeout(catWalkRight, 50);
      } else {
        isDancing === false;
        walkingRight = false;
        catWalkLeft();
        img.style.transform = "scaleX(-1)";
      }
    }
  }
}

function catWalkLeft() {
  if (walkingRight === false) {
    left -= 10;
    if (left == window.innerWidth / 2 && isDancing === false) {
      isDancing === true;
      catDancing();
    } else {
      img.style.left = left + "px";
      if (left > 0) {
        setTimeout(catWalkLeft, 50);
      } else {
        walkingRight = true;
        catWalkRight();
        img.style.transform = "scaleX(1)";
      }
    }
  }
}

catWalkRight();

function catDancing() {
  img.src = "https://media.giphy.com/media/J4mc8iYbLNTtnoX8Uo/giphy.gif";
  setTimeout(catNotDancing, 4000);
}

function catNotDancing() {
  img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";

  isDancing = false;
  if (walkingRight === true) {
    catWalkRight();
  } else if (walkingRight === false) {
    catWalkLeft();
  }
}
