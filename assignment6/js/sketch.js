//main
var robot;

//results
var resultidle, resultrunleft, resultrunright;

//static obstacles
var axe;

//song
var song;



//preload
function preload()
{
    song = loadSound('assets/lol.mp3');
    
    resultidle = loadStrings('assets/idle.txt');
    resultrunleft = loadStrings('assets/runleft.txt');
    resultrunright = loadStrings('assets/runright.txt');
}

//canvas
function setup() {

    createCanvas(1500, 800);

    song.play();

    robot = createSprite(400, 400);
    console.log(resultidle.length);
    robot.addAnimation('idle', resultidle[0], resultidle[resultidle.length-1]);
    robot.addAnimation('runright', resultrunright[0], resultrunright[resultrunright.length-1]);
    robot.addAnimation('runleft', resultrunleft[0], resultrunleft[resultrunleft.length-1]);

    armor = createSprite(Math.floor ( random (1400)), Math.floor (random (700)));
    armor.addImage(loadImage('assets/armor.png'));

    axe = createSprite(Math.floor ( random (1400)), Math.floor (random (700)));
    axe.addImage(loadImage('assets/axe.png'));

    backpack = createSprite(Math.floor ( random (1400)), Math.floor (random (700)));
    backpack.addImage(loadImage('assets/backpack.png'));

    bow = createSprite(Math.floor ( random (1400)), Math.floor (random (700)));
    bow.addImage(loadImage('assets/bow.png'));
}
//draw
function draw() 
{

  background(120);



  if (keyDown('d'))
    {
      robot.changeAnimation('runright');
      console.log("beh");
      robot.velocity.x += .2;
      if(robot.collide(axe) || robot.collide(armor) || robot.collide(backpack) || robot.collide(bow))
      {
        robot.changeAnimation('idle');
      }
    }


  else if (keyDown('a'))
  {
    robot.changeAnimation('runleft');
    robot.velocity.x += -.2;
    if(robot.collide(axe) || robot.collide(armor) || robot.collide(backpack) || robot.collide(bow))
    {
      robot.changeAnimation('idle');
    }
  }

  else if (keyDown('w'))
  {
    robot.changeAnimation('runright');
    robot.velocity.y += -.2;
    if(robot.collide(axe) || robot.collide(armor) || robot.collide(backpack) || robot.collide(bow))
    {
      robot.changeAnimation('idle');
    }
  }

  else if (keyDown('s'))
  {
    robot.changeAnimation('runright');
    robot.velocity.y += .2;
    if(robot.collide(axe) || robot.collide(armor) || robot.collide(backpack) || robot.collide(bow))
    {
      robot.changeAnimation('idle');
    }
  }


  else
  {
  console.log("dsdgs");
    robot.changeAnimation('idle');
    robot.velocity.x = 0;
    robot.velocity.y = 0;
  }

    robot.debug = mouseIsPressed;
    axe.debug = mouseIsPressed;
    armor.debug = mouseIsPressed;
    backpack.debug = mouseIsPressed;
    bow.debug = mouseIsPressed;
    scale(0.5, 0.5);
    drawSprites();

    square(2000,800, 800);

    console.log(robot.position.x);

    if ((robot.position.x > 2000) && (robot.position.y > 800))
    {
      textSize(100);
      text("you win", 750, 400);
    }

}