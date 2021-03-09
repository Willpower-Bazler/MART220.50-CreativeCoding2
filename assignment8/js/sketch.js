var x = 0;
var y = 0;

//box small large variables
var fat1 = 100;
var fat2 = 100;
var fat3 = 100;

function setup() {
  createCanvas(1200, 800, WEBGL);
}

//draw
function draw() {
  background(0);
  normalMaterial();

  createBox(fat1, fat2, fat3, -100, -100, true);
  createTorus();
  createSphere();
  createEllipsoid();
  createCone();

  if (isKeyPressed) {
    //right
    if (key == 'd') {
      x += 5;
    }

    //left
    else if (key == 'a') {
      x -= 5;

    }

    //up
    else if (key == 'w') {
      y -= 5;

    }

    //down
    else if (key == 's') {
      y += 5;

    }

    //big
    if (keyCode == '39') {
      fat1 += 1;
      fat2 += 1;
      fat3 += 1;
      
    }

    //small
    else if (keyCode == '37') {
      fat1 -= 1;
      fat2 -= 1;
      fat3 -= 1;

    }
  }
}



//box function
function createBox(w, h, d, transX, transY, move) {
  push();
  if (move) {
    translate(transX + x, transY + y);
  } else {
    translate(transX, transY);
  }

  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  box(w, h, d);
  pop();


}

//torus function
function createTorus() {
  push();
  translate(300, 150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(100, 20, 24, 16);
  pop();
}

//sphere function
function createSphere() {
  push();
  translate(300, 150);
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  sphere(50);
  pop();
}

//ellipsoid function
function createEllipsoid() {
  push();
  translate(-300, -200);
  rotateX(frameCount * -0.05);
  rotateY(frameCount * 0.05);
  ellipsoid(50, 150, 75, 24, 24);
  pop();
}

//cone function
function createCone() {
  push();
  translate(-100, 100);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * -0.05);
  cone(50, 100);
  pop();
}

