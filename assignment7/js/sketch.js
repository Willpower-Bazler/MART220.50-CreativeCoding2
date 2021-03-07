//main
var robot;

//results
var resultidle, resultrunleft, resultrunright, resultattack;

//static obstacles
var axe;

//song
//var song;

//particles
const particles = [];

//health
var health1 = 100;
var health2 = 100;
var health3 = 100;
var health4 = 100;



//preload
function preload() {
  //song = loadSound('assets/lol.mp3');

  resultidle = loadStrings('assets/idle.txt');
  resultrunleft = loadStrings('assets/runleft.txt');
  resultrunright = loadStrings('assets/runright.txt');
  resultattack = loadStrings('assets/attack.txt');
}

//canvas
function setup() {

  createCanvas(1500, 800);

  //song.play();

  robot = createSprite(1000, 800);
  robot.addAnimation('idle', resultidle[0], resultidle[resultidle.length - 1]);
  robot.addAnimation('runright', resultrunright[0], resultrunright[resultrunright.length - 1]);
  robot.addAnimation('runleft', resultrunleft[0], resultrunleft[resultrunleft.length - 1]);
  robot.addAnimation('attack', resultattack[0], resultattack[resultattack.length - 1]);

  armor = createSprite(Math.floor(random(1400)), Math.floor(random(700)));
  armor.addImage(loadImage('assets/armor.png'));

  axe = createSprite(Math.floor(random(1400)), Math.floor(random(700)));
  axe.addImage(loadImage('assets/axe.png'));
  console.log(axe.position.x)

  backpack = createSprite(Math.floor(random(1400)), Math.floor(random(700)));
  backpack.addImage(loadImage('assets/backpack.png'));

  bow = createSprite(Math.floor(random(1400)), Math.floor(random(700)));
  bow.addImage(loadImage('assets/bow.png'));
}
//draw


function draw() {
  scale(0.5, 0.5);

  background(120);

  if (isKeyPressed) {
    //right
    if (keyDown('d')) {
      robot.changeAnimation('runright');
      robot.velocity.x += .2;
      checkcollision()

    }

    //left
    else if (keyDown('a')) {
      robot.changeAnimation('runleft');
      robot.velocity.x += -.2;
      checkcollision()

    }

    //up
    else if (keyDown('w')) {
      robot.changeAnimation('runright');
      robot.velocity.y += -.2;
      checkcollision()

    }

    //down
    else if (keyDown('s')) {
      robot.changeAnimation('runright');
      robot.velocity.y += .2;
      checkcollision()

    }



    // /*
    //attack
    else if (keyDown('x')) {

      robot.changeAnimation('attack');
      if (axe != null) {
        if (dist(robot.position.x, robot.position.y, axe.position.x, axe.position.y) < 400) {
          console.log('attack' + axe.position.x)
          createParticles(axe.position.x, axe.position.y);
          health1 -= 1;
          if (health1 <= 0) {
            axe.remove();
            axe = null;
          }
        }
      }

      if (armor != null) {
        if (dist(robot.position.x, robot.position.y, armor.position.x, armor.position.y) < 400) {
          createParticles(armor.position.x, armor.position.y);
          health2 -= 1;
          if (health2 <= 0) {
            armor.remove();
            armor = null;
          }
        }
      }
      if (bow != null) {
        if (dist(robot.position.x, robot.position.y, bow.position.x, bow.position.y) < 400) {
          createParticles(bow.position.x, bow.position.y);
          health3 -= 1;
          if (health3 <= 0) {
            bow.remove();
            bow = null;
          }
        }
      }
      if (backpack != null) {
        if (dist(robot.position.x, robot.position.y, backpack.position.x, backpack.position.y) < 400) {
          createParticles(backpack.position.x, backpack.position.y);
          health4 -= 1;
          if (health4 <= 0) {
            backpack.remove();
            backpack = null;
          }

        }
      }




    }

  }

  else {
    robot.changeAnimation('idle');
    robot.velocity.x = 0;
    robot.velocity.y = 0;
  }


  drawSprites();
  robot.debug = mouseIsPressed;
  if ((armor == null) && (axe == null) && (backpack == null) && (bow == null)) {
    textSize(100);
    text("you win", 750, 400);
  }
}


function checkcollision() {
  if (armor != null) {
    if (robot.collide(armor)) {
      robot.changeAnimation('idle');
    }

  }
  if (axe != null) {
    if (robot.collide(axe)) {
      robot.changeAnimation('idle');
    }

  }
  if (backpack != null) {
    if (robot.collide(backpack)) {
      robot.changeAnimation('idle');
    }

  }
  if (bow != null) {
    if (robot.collide(bow)) {
      robot.changeAnimation('idle');
    }

  }




}
function createParticles(x, y) {
  for (let i = 0; i < 10; i++) {
    let p = new Particle(x, y);
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}