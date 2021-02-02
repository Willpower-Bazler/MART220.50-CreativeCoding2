//shape variables and counter
var counter = 0;

var shape1x = 100, shape1y = 100;
var shape2x = 150, shape2y = 150;
var shape3x = 200, shape3y = 200;
var shape4x = 250, shape4y = 250;
var shape5x = 300, shape5y = 300;
var shape6x = 350, shape6y = 350;
var shape7x = 400, shape7y = 400;
var shape8x = 450, shape8y = 450;
var shape9x = 500, shape9y = 500;
var shape10x = 550, shape10y = 550;

var red1, green1, blue1;
var red2, green2, blue2;
var red3, green3, blue3;
var red4, green4, blue4;
var red5, green5, blue5;
var red6, green6, blue6;
var red7, green7, blue7;
var red8, green8, blue8;
var red9, green9, blue9;
var red10, green10, blue10;

var shape1s = 10;
var shape2s = 20;
var shape3s = 30;
var shape4s = 40;
var shape5s = 50;
var shape6s = 60;
var shape7s = 70;
var shape8s = 80;
var shape9s = 90;
var shape10s = 100;

//images variables
var sun;
var sunx = 100;
var suny = 100;
var sunspeed = 2;

var moon;
var moonx = 200;
var moony = 200;
var moonspeed = 3;

var stars;
var starsx = 300;
var starsy = 300;
var starsspeed = 5;

//text variables
var Romanica;
var timertext = 0;


//preload
function preload()
{
    sun = loadImage('assets/sun.png');
    moon = loadImage('‪D:\will\Documents\UM LAST SEMESTER B\creative coding 2\assignment3\assets\moon.png');
    stars = loadImage('assets/stars.png');
    Romanica = loadFont('assets/Romanica.ttf');
}


//random colors setup
function setup()
{
  
    createCanvas(800,600);
    red1 = random(255);
    green1 = random(255);
    blue1 = random(255);
    red2 = random(255);
    green2 = random(255);
    blue2 = random(255);
    red3 = random(255);
    green3 = random(255);
    blue3 = random(255);
    red4 = random(255);
    green4 = random(255);
    blue4 = random(255);
    red5 = random(255);
    green5 = random(255);
    blue5 = random(255);
    red6 = random(255);
    green6 = random(255);
    blue6 = random(255);
    red7 = random(255);
    green7 = random(255);
    blue7 = random(255);
    red8 = random(255);
    green8 = random(255);
    blue8 = random(255);
    red9 = random(255);
    green9 = random(255);
    blue9 = random(255);
    red10 = random(255);
    green10 = random(255);
    blue10 = random(255);

    setInterval(changespeed, 1000);
  
    
}

//draw
function draw()
{
    background(255);

    //images
    image(sun,sunx, suny);
    image(moon, moonx, moony);
    image(stars, starsx, starsy);

    //sun x axis
    sunx += sunspeed;
    if(sunx >= width - sun.width || sunx  <= sun.width/8)
    {
        sunspeed *= -1;
    }

    //moon y axis
    moony += moonspeed;
    if(moony >= height - moon.height || moony  <= moon.height/8)
    {
        moonspeed *= -1;
    }

    //stars x + y axis
    starsy += starsspeed;
    if(starsy >= height - stars.height || starsy  <= stars.height/8)
    {
        starsspeed *= -1;
    }
    starsx += starsspeed;
    if(starsx >= width - stars.width || starsx  <= stars.width/8)
    {
        starsspeed *= -1;
    }

    //top
    noStroke();
    fill(255,0,0);
    rect(0,0,800,25);
    //left
    rect(0,25,25,600);
    //bottom
    rect(25,575,800,25);
    //right
    rect(775,25,25,600);

    fill(0);
    //font and text
    textFont(Romanica);
    textSize(20);
    text("Will Bazler",550,560);
    text("Homework 3",50,50);
    text("Time Elapsed: " + timertext, 550, 50);

    //if counter
    if(counter > 1000)
    {
        shape1x = random(100,600);
        shape1y = random(100,500);
        shape2x = random(100,600);
        shape2y = random(100,500);
        shape3x = random(100,600);
        shape3y = random(100,500);
        shape4x = random(100,600);
        shape4y = random(100,500);
        shape5x = random(100,600);
        shape5y = random(100,500);
        shape6x = random(100,600);
        shape6y = random(100,500);
        shape7x = random(100,600);
        shape7y = random(100,500);
        shape8x = random(100,600);
        shape8y = random(100,500);
        shape9x = random(100,600);
        shape9y = random(100,500);
        shape10x = random(100,600);
        shape10y = random(100,500);
      
        red1 = random(255);
        green1 = random(255);
        blue1 = random(255);
        red2 = random(255);
        green2 = random(255);
        blue2 = random(255);
        red3 = random(255);
        green3 = random(255);
        blue3 = random(255);
        red4 = random(255);
        green4 = random(255);
        blue4 = random(255);
        red5 = random(255);
        green5 = random(255);
        blue5 = random(255);
        red6 = random(255);
        green6 = random(255);
        blue6 = random(255);
        red7 = random(255);
        green7 = random(255);
        blue7 = random(255);
        red8 = random(255);
        green8 = random(255);
        blue8 = random(255);
        red9 = random(255);
        green9 = random(255);
        blue9 = random(255);
        red10 = random(255);
        green10 = random(255);
        blue10 = random(255);
      
        shape1s = random(100);
        shape2s = random(100);
        shape3s = random(50);
        shape4s = random(100);
        shape5s = random(100);
        shape6s = random(135);
        shape7s = random(100);
        shape8s = random(200);
        shape9s = random(100);
        shape10s = random(200);
        counter = 0;
    }
}

    counter++;
  
{
        fill(red1,green1,blue1);
        square(shape1x,shape1y,shape1s);

        fill(red2,green2,blue2);
        circle(shape2x,shape2y,shape2s);

        fill(red3,green3,blue3);
        square(shape3x,shape3y,shape3s);

        fill(red4,green4,blue4);
        square(shape4x,shape4y,shape4s);
 
        fill(red5,green5,blue5);
        circle(shape5x,shape5y,shape5s);

        fill(red6,green6,blue6);
        circle(shape6x,shape6y,shape6s);

        fill(red7,green7,blue7);
        square(shape7x,shape7y,shape7s);

        fill(red8,green8,blue8);
        circle(shape8x,shape8y,shape8s);

        fill(red9,green9,blue9);
        circle(shape9x,shape9y,shape9s);

        fill(red10,green10,blue10);
        square(shape10x,shape10y,shape10s);
}

//call back
function changespeed()
{
      timertext++;
      if (timertext % 5 == 0)
      {
        sunspeed = random(1,10);
        moonspeed = random(1,10);
        starsspeed = random(1,10);
      }       
}