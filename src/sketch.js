let z = 0;
let i = 10;
let surprise = false;
let slothS = 0.1;
let shipX = 0;
let shipY = 0;
let shipR = 1;
function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  //draw background and 4 fish
  drawBackground();
  drawShip(shipX, shipR);
  drawFish(40, 40, z, color(101, 186, 84));
  drawFish(0 - 75, 75, z - 375, color(100, 0, 100));
  drawFish(0 - 75, 75, z - 375 - 375, color(100, 0, 0));
  drawFish(0 - 75, 75, z - 375 - 375 - 375, color(242, 143, 5));
  // start fish animation
  if (surprise) {
    z = z + 1;
    slothS += 0.001;
  }
  //end fish animation
  if (z > 1500) {
    surprise = false;
    shipR = shipR - 0.005;
    shipX = shipX - 0.02;
  }
}
function drawFish(x, y, z, f) {
  translate(x, y);
  push();
  noStroke();
  fill(f);
  rect(0, 0, 60 + z, 35, 5);
  triangle(-15, -15, -15, 50, 30, 17.5);
  triangle(32 + z, 33, 48 + z, 33, 39 + z, 49);
  triangle(32 + z, 0, 48 + z, 0, 39 + z, -14);
  fill(0);
  ellipse(50 + z, 10, 7);
  pop();
  push();
  fill(f);
  stroke(0);
  strokeWeight(2);
  arc(13, 7, 10, 10, PI / 2, (3 * PI) / 2);
  arc(13, 17, 10, 10, PI / 2, (3 * PI) / 2);
  arc(13, 27, 10, 10, PI / 2, (3 * PI) / 2);
  arc(20, 9, 10, 10, PI / 2, (3 * PI) / 2);
  arc(20, 18, 10, 10, PI / 2, (3 * PI) / 2);
  arc(20, 28, 10, 10, PI / 2, (3 * PI) / 2);
  pop();

  push();

  stroke(169, 230, 83);
  strokeWeight(4);
  line(4, 17.5, -13, 17.5);
  line(4, 10, -13, 5);
  line(4, 25, -13, 30);
  fill(0);
  ellipse(50 + z, 10, 7);
  pop();
}
function drawBackground() {
  push();
  push();
  background(13, 20, 230);
  fill(230, 282, 74);
  rect(0, 325, 400);
  pop();
  push();
  fill(21, 102, 7);
  drawSloth(100, 325, slothS);
  noStroke();
  triangle(0, 325, 20, 325, 5, 325);
  triangle(0 + i, 325, 10 + i, 325, 5 + i, 300);
  triangle(0 + 2 * i, 325, 10 + 2 * i, 325, 5 + 2 * i, 300);
  triangle(0 + 3 * i, 325, 10 + 3 * i, 325, 5 + 3 * i, 300);
  triangle(0 + 4 * i, 325, 10 + 4 * i, 325, 5 + 4 * i, 300);
  triangle(0 + 5 * i, 325, 10 + 5 * i, 325, 5 + 5 * i, 300);
  triangle(0 + 6 * i, 325, 10 + 6 * i, 325, 5 + 6 * i, 300);
  triangle(0 + 7 * i, 325, 10 + 7 * i, 325, 5 + 7 * i, 300);
  triangle(0 + 8 * i, 325, 10 + 8 * i, 325, 5 + 8 * i, 300);
  triangle(0 + 9 * i, 325, 10 + 9 * i, 325, 5 + 9 * i, 300);
  triangle(0 + 10 * i, 325, 10 + 10 * i, 325, 5 + 10 * i, 300);
  triangle(0 + 11 * i, 325, 10 + 11 * i, 325, 5 + 11 * i, 300);
  triangle(0 + 12 * i, 325, 10 + 12 * i, 325, 5 + 12 * i, 300);
  triangle(0 + 13 * i, 325, 10 + 13 * i, 325, 5 + 13 * i, 300);

  pop();
  push();
  fill(13, 20, 230);
  stroke(12, 247, 236);
  strokeWeight(1.5);
  ellipse(257, 32, 10);
  ellipse(148, 147, 10);
  ellipse(258, 206, 10);
  ellipse(310, 292, 10);
  ellipse(240, 227, 10);
  ellipse(234, 178, 10);
  ellipse(211, 61, 10);
  ellipse(378, 86, 10);
  ellipse(116, 274, 10);
  ellipse(5, 280, 10);
  ellipse(249, 21, 10);
  ellipse(194, 112, 10);
  ellipse(130, 156, 10);
  ellipse(248, 84, 10);
  ellipse(141, 225, 10);
  ellipse(204, 316, 10);
  ellipse(79, 108, 10);
  ellipse(314, 123, 10);
  ellipse(63, 283, 10);
  ellipse(42, 242, 10);
  pop();
  pop();
}
function mouseClicked() {
  if (mouseX < 100 && mouseX > 40 && mouseY < 75 && mouseY > 40) {
    surprise = true;
  }
}
function drawShip(x, s) {
  push();
  scale(s);
  push();
  fill(79, 53, 5);
  strokeWeight(5);
  line(300 + x, 280, 288 + x, 236);
  pop();
  push();
  fill(79, 53, 5);
  noStroke();
  arc(300 + x, 280, 100 + x, 100, (11.5 * PI) / 6, (5.5 * PI) / 6);
  pop();
  push();
  fill(255, 255, 255);
  stroke(255);
  strokeWeight(3);
  triangle(288 + x, 236, 295 + x, 258, 271 + x, 255);
  pop();
  pop();
}

function drawSloth(x, y, s) {
  push();
  //rotate(r);
  translate(x, y);
  scale(s);
  //push();
  fill("#6D7347");
  //right shoulder
  ellipse(30, -65, 30, 50);
  //right hand nails
  fill(212, 197, 195);
  ellipse(75, -55, 15, 5);
  ellipse(75, -50, 15, 5);
  ellipse(75, -45, 15, 5);
  fill("#6D7347");
  //right arm
  ellipse(40, -50, 70, 30);
  fill(250, 233, 230, 98);
  //hand
  circle(63, -50, 15);
  fill("#6D7347");
  //body
  ellipse(0, -50, 80, 100);
  //left hand nails
  fill(212, 197, 195);
  ellipse(-25, -7, 5, 15);
  ellipse(-30, -7, 5, 15);
  ellipse(-35, -7, 5, 15);
  fill("#6D7347");
  //left arm
  ellipse(-30, -50, 40, 80);
  //leg
  ellipse(30, -15, 70, 40);
  //head
  ellipse(0, -125, 85, 65);
  //eye ring
  fill(85, 85, 85);
  ellipse(20, -125, 30, 20);
  ellipse(-20, -125, 30, 20);
  fill(50, 50, 50, 200);
  //eyes
  circle(-17, -125, 13);
  circle(17, -125, 13);
  //nose
  triangle(-5, -115, 5, -115, 0, -110);
  fill(0, 0, 0, 0);
  //mouth
  arc(0, -110, 25, 25, 0, PI);
  //pop();
  pop();
}
