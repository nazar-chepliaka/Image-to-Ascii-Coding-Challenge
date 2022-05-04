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

let next;

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
  next = loadImage("1.png");
}

function setup() {
  noCanvas();
  asciiDiv = document.getElementById('inner-wrapper');

  next.loadPixels();

  asciiDiv.innerHTML = asciiString(next);
}
