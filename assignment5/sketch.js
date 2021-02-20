var robot;

//animations
var static = [];
var runleft = [];
var runright = [];
var currentanimation;

//objects
var robo = [];
var roboleft = [];
var roboright = [];
var currentobjects;
var objects = [];
var objectimg = [];

//results
var resultobjects;
var resultidle;
var resulrunleft;
var resulrunright;

var index = 0;

var counter = 0;

var myinterval;




function preload()
{
    resultobjects = loadStrings('assets/objects.txt');
    resultidle = loadStrings('assets/idle.txt');
    resultrunleft = loadStrings('assets/runleft.txt');
    resultrunright = loadStrings('assets/runright.txt');
}

//canvas
function setup() {

    createCanvas(1500, 800);

    //image('assets/axe.png', 100, 100);

    for(var i = 0; i < resultidle.length; i++)
  {
    robo.push(new imageclass('assets/' + resultidle[i], 0, 0));
    static[i] = robo[i].getImage();
  }

  for (var i = 0; i < resultrunleft.length; i++) 
  {
    roboleft.push(new imageclass('assets/' + resultrunleft[i], 0, 0));
    runleft[i] = roboleft[i].getImage();
    roboright.push(new imageclass('assets/' + resultrunright[i], 0, 0));
    runright[i] = roboright[i].getImage();

  }

console.log(resultobjects.length)
  for (var i = 0; i < resultobjects.length; i++)
  {
    objects.push(new imageclass('assets/' + resultobjects[i], Math.floor ( random (1400)), Math.floor (random (700))))
    objectimg[i] = objects[i].getImage();
  }
  console.log(roboright.length)

  setInterval(incrementIndex, 50);

  currentobjects = robo;
    
}

function draw() 
{

  background(120);

  for (var i = 0; i < resultobjects.length; i++)
  {
    console.log(objects[i].getX())
    image(objectimg[i], objects[i].getX(), objects[i].getY());
  }



  //if key pressed
  if (keyIsPressed) 
  {
    //stop idle interval
    clearInterval(myinterval);
    myinterval = null;

    //slow down
    index++;
    if (index > 3) 
    {
      incrementIndex();
      index = 0;
    }

    //move right
        if (key == "w") 
        {
          
          currentanimation = runleft;
          currentobjects = roboleft;
    
          if (counter >= currentanimation.length) 
          {
            counter = 0;
          }

          for (var i = 0; i < currentobjects.length; i++)
          currentobjects[i].setY(currentobjects[i].getY() - 5);
    
          for (var i = 0; i < roboleft.length; i++)
          {
            roboleft[i].setY(currentobjects[0].getY());
          }
            
          roboleft = currentobjects;
    
    
        } 
        //move left
        else if (key == "s") 
        {
    
          currentanimation = runright;
          currentobjects = roboright;
    
          if (counter >= currentanimation.length) 
          {
            counter = 0;
          }
          for (var i = 0; i < currentobjects.length; i++)
          currentobjects[i].setY(currentobjects[i].getY() + 5);
    
          for (var i = 0; i < roboright.length; i++)
          {
            roboright[i].setY(currentobjects[0].getY());
          }
            
    
          roboright = currentobjects;
    
      }

    else if (key == "d") 
    {
      
      currentanimation = runright;
      currentobjects = roboright;

      if (counter >= currentanimation.length) 
      {
        counter = 0;
      }

      for (var i = 0; i < currentobjects.length; i++)
      currentobjects[i].setX(currentobjects[i].getX() + 5);

      for (var i = 0; i < roboleft.length; i++)
      {
        roboright[i].setX(currentobjects[0].getX());
      }
        
      roboright = currentobjects;


    } 
    //move left
    else if (key == "a") 
    {

      currentanimation = runleft;
      currentobjects = roboleft;

      if (counter >= currentanimation.length) 
      {
        counter = 0;
      }
      for (var i = 0; i < currentobjects.length; i++)
      currentobjects[i].setX(currentobjects[i].getX() - 5);

      for (var i = 0; i < roboright.length; i++)
      {
        console.log(roboright.length)
        roboleft[i].setX(currentobjects[0].getX());
      }
        

      roboleft = currentobjects;
    }

    for (var i = 0; i < robo.length; i++)
      robo[i].setX(currentobjects[0].getX());

  }

      //check idle reset
      else
      {
        if (myinterval == null) 
        {
          myinterval = setInterval(incrementIndex, 50);
        }
        currentobjects = robo;
        currentanimation = static;
      }
    
//console.log(currentanimation.length)
//console.log(counter)
    //display regardless
    image(currentanimation[counter], currentobjects[counter].getX(), currentobjects[counter].getY());

  }

//----------------------------------

function incrementIndex() 
{
  //increment index
  counter += 1;
  //start over
  if (counter >= currentobjects.length) 
  {
    counter = 0;
  }
}