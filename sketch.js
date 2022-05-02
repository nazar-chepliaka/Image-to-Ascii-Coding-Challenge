// Image to ASCII
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/166-ascii-image.html
// YT Link TBD

// ASCII video: https://editor.p5js.org/codingtrain/sketches/KTVfEcpWx
// ASCII image canvas: https://editor.p5js.org/codingtrain/sketches/r4ApYWpH_
// ASCII image DOM: https://editor.p5js.org/codingtrain/sketches/ytK7J7d5j
// ASCII image source text: https://editor.p5js.org/codingtrain/sketches/LNBpdYQHP
// ASCII image weather API: https://editor.p5js.org/codingtrain/sketches/DhdqcoWn4


const density = "Ñ@#W$9876543210?!abc;:+=-,._      ";

let uno;
let to;
let third;

let perfect;
let fifths;

function asciiString(image) {
  let asciiImageString = "";

  for (let j = 0; j < image.height; j++) {
    let row = "";
    for (let i = 0; i < image.width; i++) {
      const pixelIndex = (i + j * image.width) * 4;
      const r = image.pixels[pixelIndex + 0];
      const g = image.pixels[pixelIndex + 1];
      const b = image.pixels[pixelIndex + 2];

      const avg = (r + g + b) / 3;

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      const c = density.charAt(charIndex);
      if (c == " ") row += "&nbsp;";
      else row += c;
    }
    asciiImageString = asciiImageString + "<div>" + row + "</div>";
  }

  return asciiImageString;
}

function preload() {
  uno = loadImage("slides/1.jpg");
  to = loadImage("slides/2.jpg");
  third = loadImage("slides/3.jpg");

  perfect = loadImage("slides/4.jpg");
  fifths = loadImage("slides/5.jpg");
}

function setup() {
  noCanvas();
  asciiContainer = [];
  asciiDiv = document.getElementById('inner-wrapper');


  uno.loadPixels();
  to.loadPixels();
  third.loadPixels();

  perfect.loadPixels();
  fifths.loadPixels();


  asciiContainer.push(asciiString(uno));
  asciiContainer.push(asciiString(to));
  asciiContainer.push(asciiString(third));

  asciiContainer.push(asciiString(perfect));
  asciiContainer.push(asciiString(fifths));


  let counter = 1;
  let index = 0;

  let timerId = setInterval(() => {
    if (counter == asciiContainer.length) {
      counter = 1;
    } else {
      counter = counter + 1;
    }

    index = counter - 1;

    asciiDiv.innerHTML = asciiContainer[index];
  }, 500);
}
