var pink;
var bluebac;
var img1;
var img2;

function preload() {
  pink = loadImage("pinkbacteria.png");
  bluebac = loadImage("bluebacteria.png");
  img1 = loadImage("colorfulpeople.jpeg");
  img2 = loadImage("colorfultrash.jpg");
}

function setup() {
  createCanvas(1500, 820);
}

function draw() {
  background(255);
  imageMode(CORNER);

  if (mouseIsPressed) {
    background(0, 5, 50);
    image(img2, 0, 0);
    imageMode(CENTER);

    image(bluebac, mouseX, mouseY,
      500 + sin(frameCount * 0.1) * 100,
      500 + cos(frameCount * 0.1) * 100);
  } else {
    background(220, 5, 50);
    image(img1, 0, 0);
    imageMode(CENTER);

    image(pink, mouseX, mouseY,
      500 + sin(frameCount * 0.1) * 100,
      500 + cos(frameCount * 0.1) * 100);
  }

}
