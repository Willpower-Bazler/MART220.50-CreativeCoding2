//main
var robot;

//results
var resultidle, resultrunleft, resultrunright;

//static obstacles
var axe;



//preload
function preload()
{
    //resultobjects = loadStrings('assets/objects.txt');
    resultidle = loadStrings('assets/idle.txt');
    resultrunleft = loadStrings('assets/runleft.txt');
    resultrunright = loadStrings('assets/runright.txt');
}

//canvas
function setup() {

    createCanvas(1500, 800);

    robot = createSprite(400, 400);
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

//draw
function draw() 
{

  background(120);

  if (keyDown('d'))
    {
      robot.changeAnimation('runright');
      robot.velocity.x += .5;
      if(robot.collide(axe))
      {
        robot.changeAnimation('idle');
      }
    }
    /*
    else
    {
      cowGirlObjects.changeAnimation('idle');
      cowGirlObjects.velocity.x = 0;
    }
    */

  else if (keyDown('a'))
  {
    robot.changeAnimation('runleft');
    robot.velocity.x += .5;
    if(robot.collide(axe))
    {
      robot.changeAnimation('idle');
    }
  }

  else if (keyDown('w'))
  {
    robot.changeAnimation('runright');
    robot.velocity.y += .5;
    if(robot.collide(axe))
    {
      robot.changeAnimation('idle');
    }
  }

  else if (keyDown('s'))
  {
    robot.changeAnimation('runright');
    robot.velocity.y += .5;
    if(robot.collide(axe))
    {
      robot.changeAnimation('idle');
    }
  }

  else
  {
    cowGirlObjects.changeAnimation('idle');
    cowGirlObjects.velocity.x = 0;
  }

    robot.debug = mouseIsPressed;
    axe.debug = mouseIsPressed;
    drawSprites();

}

}