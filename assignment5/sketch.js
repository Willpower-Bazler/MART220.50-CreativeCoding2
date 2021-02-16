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
var currentobject;

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

  setInterval(incrementIndex, 50);

  currentbbjects = robo;
    
}

function draw() 
{

  background(120);


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
        if (key == "d") 
        {
          
          currentanimation = runright;
          currentobject = roboright;
    
          if (counter >= currentanimation.length) 
          {
            counter = 0;
          }

          currentobjects[counter].setX(currentobjects[counter].getX() + 40);
    
          for (var i = 0; i < roboleft.length; i++)
          {
            roboleft[i].setX(currentobjects[0].getX());
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
          currentobjects[counter].setX(currentobjects[counter].getX() - 40);
    
          for (var i = 0; i < roboright.length; i++)
          {
            roboright[i].setX(currentobjects[0].getX());
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
    

    //display regardless
    image(currentanimation[counter], currentobjects[counter].getX(), currentobjects[counter].getY());


//-----------------------



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
          
          currentanimation = runright;
          currentobject = roboright;
    
          if (counter >= currentanimation.length) 
          {
            counter = 0;
          }

          currentobjects[counter].setY(currentobjects[counter].getY() - 40);
    
          for (var i = 0; i < roboleft.length; i++)
          {
            roboleft[i].setY(currentobjects[0].getY());
          }
            
          roboright = currentobjects;
    
    
        } 
        //move left
        else if (key == "s") 
        {
    
          currentanimation = runleft;
          currentobjects = roboleft;
    
          if (counter >= currentanimation.length) 
          {
            counter = 0;
          }
          currentobjects[counter].setY(currentobjects[counter].getY() + 40);
    
          for (var i = 0; i < roboright.length; i++)
          {
            roboright[i].setY(currentobjects[0].getY());
          }
            
    
          roboleft = currentobjects;
        }
    
        for (var i = 0; i < robo.length; i++)
          robo[i].setY(currentobjects[0].getY());
    
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