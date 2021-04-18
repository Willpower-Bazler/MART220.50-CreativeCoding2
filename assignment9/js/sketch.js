//texture variables
let clouds;
let lava;
let rock;
let stone;
let water;

//model variable
let man;

//simple shape array var
let shapeArray = [];

//random location variables
var boxTranslationX = -100;
var boxTranslationY = -100;

var cylinderTranslationX = 200;
var cylinderTranslationY = 20;

//preload
function preload() {

  clouds = loadImage('assets/clouds.jpg');
  lava = loadImage('assets/lava.jpg');
  rock = loadImage('assets/rock.jpg');
  stone = loadImage('assets/stone.jpg');
  water = loadImage('assets/water.jpg');

  man = loadModel('assets/man.obj');
}

//setup
function setup() {

  createCanvas(1200, 800, WEBGL);

  //simple shape array setup
  shapeArray.push(new shapeclass("box", 150, 150, 150, 0, 0, boxTranslationX, boxTranslationY, 0.02, 0.03, 0, clouds));
  shapeArray.push(new shapeclass("cylinder", 80, 90, 0, 0, 0, cylinderTranslationX, cylinderTranslationY, 0.01, 0.01, 0, rock));
  shapeArray.push(new shapeclass("torus", 100, 20, 24, 16, 0, 300, 150, 0.01, 0.01, 0, lava));
  shapeArray.push(new shapeclass("sphere", 50, 0, 0, 0, 0, 300, 150, -0.01, -0.01, 0, lava));
  shapeArray.push(new shapeclass("ellipsoid", 50, 150, 75, 24, 24, -300, -200, -0.05, 0.05, 0, stone));
  shapeArray.push(new shapeclass("cone", 50, 100, 0, 0, 0, -100, 100, 0.03, -0.05, 0, water));
}

//draw
function draw() {


  background(0);
    //print name and title
    fill(255, 128 , 128);
    textSize(100);
    text('will bazler', 100, 100);
    text('"rotating objects"', 100, 300);
    
  normalMaterial();

  image(clouds);
  image(lava);
  image(rock);
  image(stone);
  image(water);

  //show simple shapes
  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }





  //man
  push();
  translate(0, -100);
  scale(50);
  //rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.02);
  texture(clouds);
  model(man);
  pop();







}

  //new random location box
  function mousePressed() {
    boxTranslationX = (random(600));
    boxTranslationY = (random(600));
    shapeArray[0].setX(boxTranslationX);
    shapeArray[0].setY(boxTranslationY);
    set.boxTranslationX = (random(800));
    set.boxTranslationY = (random(600));

    cylinderTranslationX = (random(600));
    cylinderTranslationY = (random(600));
    shapeArray[1].setX(cylinderTranslationX);
    shapeArray[1].setY(cylinderTranslationY);
    set.cylinderTranslationX = (random(800));
    set.cylinderTranslationY = (random(600));
  }
