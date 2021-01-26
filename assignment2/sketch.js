//var counter
var counter = 0;

//var shapes
var shape1x = 100, shape1y = 100;
var shape2x = 200, shape2y = 200;

//var colors
var red1, green1, blue1;
var red2, green2, blue2;

//var sizes
var size1 = 50;
var size2 = 90;


//colors before play
function setup()
{
    createCanvas(600,600);
  
    //color 1 rgb
    red1 = random(255);
    green1 = random(255);
    blue1 = random(255);
  
    //color 2 rgb
    red2 = random(255);
    green2 = random(255);
    blue2 = random(255);
  
}

//drawwwwww
function draw()
{
    background(255);

    noStroke();
    fill(255,0,0);
    //top
    rect(0,0,600,20);
    //left
    rect(0,20,20,600);
    //bottom
    rect(20,580,600,20);
    //right
    rect(580,20,20,600);


//(if) this fucking works dammit
if(counter > 1000)
{
    shape1x = random(200,400);
    shape1y = random(200,400);
    shape2x = random(200,400);
    shape2y = random(200,400);

    red1 = random(255);
    green1 = random(255);
    blue1 = random(255);
      
    red2 = random(255);
    green2 = random(255);
    blue2 = random(255);
      
    size1 = random(100);
    size2 = random(100);

    counter = 0;
}
    
//(then) this will work
counter++;
  
    //shape 1
    fill(red1,green1,blue1);
    square(shape1x,shape1y,size1);

    //shape 2
    fill(red2,green2,blue2);
    circle(shape2x,shape2y,size2);
    
}