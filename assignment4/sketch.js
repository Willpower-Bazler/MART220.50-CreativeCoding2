var robot;
var animation = [];
var runanimation = [];
var robo = [];
var roboleft = [];
var roboright = [];
var i = 0;
var j = 0;
var k = 0;
var x = 0;
var counter = 0;


function preload()
{
    //idle preload
    robot = new imageclass('assets/Idle (1).png', 0, 0);
    robo[0] = robot
    robot = new imageclass('assets/Idle (2).png', 0, 0);
    robo[1] = robot
    robot = new imageclass('assets/Idle (3).png', 0, 0);
    robo[2] = robot
    robot = new imageclass('assets/Idle (4).png', 0, 0);
    robo[3] = robot
    robot = new imageclass('assets/Idle (5).png', 0, 0);
    robo[4] = robot
    robot = new imageclass('assets/Idle (6).png', 0, 0);
    robo[5] = robot
    robot = new imageclass('assets/Idle (7).png', 0, 0);
    robo[6] = robot
    robot = new imageclass('assets/Idle (8).png', 0, 0);
    robo[7] = robot
    robot = new imageclass('assets/Idle (9).png', 0, 0);
    robo[8] = robot

    //run right preload
    robot = new imageclass('assets/Run (1).png', 0, 0);
    roboright[0] = robot
    robot = new imageclass('assets/Run (2).png', 0, 0);
    roboright[1] = robot
    robot = new imageclass('assets/Run (3).png', 0, 0);
    roboright[2] = robot
    robot = new imageclass('assets/Run (4).png', 0, 0);
    roboright[3] = robot
    robot = new imageclass('assets/Run (5).png', 0, 0);
    roboright[4] = robot
    robot = new imageclass('assets/Run (6).png', 0, 0);
    roboright[5] = robot
    robot = new imageclass('assets/Run (7).png', 0, 0);
    roboright[6] = robot
    robot = new imageclass('assets/Run (8).png', 0, 0);
    roboright[7] = robot

        //run left preload
        robot = new imageclass('assets/Run (1) - Copy.png', 0, 0);
        roboleft[0] = robot
        robot = new imageclass('assets/Run (2) - Copy.png', 0, 0);
        roboleft[1] = robot
        robot = new imageclass('assets/Run (3) - Copy.png', 0, 0);
        roboleft[2] = robot
        robot = new imageclass('assets/Run (4) - Copy.png', 0, 0);
        roboleft[3] = robot
        robot = new imageclass('assets/Run (5) - Copy.png', 0, 0);
        roboleft[4] = robot
        robot = new imageclass('assets/Run (6) - Copy.png', 0, 0);
        roboleft[5] = robot
        robot = new imageclass('assets/Run (7) - Copy.png', 0, 0);
        roboleft[6] = robot
        robot = new imageclass('assets/Run (8) - Copy.png', 0, 0);
        roboleft[7] = robot

    for (var i = 0; i < robo.length; i++)
    {
        animation[i] = robo[i].getImage();
    }

    for(var i = 0; i < roboright.length; i++)
    {
        runanimation[i] = roboright[i].getImage();
    }

    for(var i = 0; i < roboleft.length; i++)
    {
        runanimation[i] = roboleft[i].getImage();
    }
}

//canvas
function setup() {

    createCanvas(600, 600);
    setInterval(incrementIndex, 50);
}

//draw
function draw()
{
    background(120);

    if(keyIsPressed)
    {
        if(key == "d")
        {
            image(runanimation[j], roboright[j].getX(), roboright[j].getY());
            //clock
            counter++;
            if(counter > 5)
            {
                let move = roboright[j].getX() + 40
                roboright[j].setX(move)

                for(let i = 0; i < robo.length; i++)
                {
                    robo[i].setX(move)
                }
            
                incrementRunIndex();
                counter = 0;
            }   
        }

        if(key == "a")
        {

            image(runanimation[k], roboleft[k].getX(), roboleft[k].getY());
            //clock
            counter++;
            if(counter > 5)
            {
                let move = roboleft[k].getX() - 40
                roboright[k].setX(move)

                for(let i = 0; i < robo.length; i++)
                {
                    robo[i].setX(move)
                }
            

                incrementRunIndex();

                counter = 0;
            }   
        }

        if(key == "w")
        {

            image(runanimation[j], roborun[j].getX(), roborun[j].getY());
            //clock
            counter++;
            if(counter > 5)
            {
                let move = roborun[j].getY() - 40
                roborun[j].setY(move)

                for(let i = 0; i < robo.length; i++)
                {
                    robo[i].setY(move)
                }
            
     
                incrementRunIndex();
   
                counter = 0;
            }   
        }

        if(key == "s")
        {

            image(runanimation[j], roborun[j].getX(), roborun[j].getY());
            //clock
            counter++;
            if(counter > 5)
            {
                let move = roborun[j].getY() + 40
                roborun[j].setY(move)

                for(let i = 0; i < robo.length; i++)
                {
                    robo[i].setY(move)
                }
            
       
                incrementRunIndex();
 
                counter = 0;
            }   
        }
    }

    else
    {
        image(animation[i], robo[i].getX(), robo[i].getY());
    }

}

function incrementIndex()
{
     //increment i
     i += 1;

     //if end of array start over
     if (i >= animation.length) {
         i = 0;
     }
}

function incrementRunIndex()
{

     //increment j
     j += 1;

     //if end of array start over
     if (j >= runanimation.length) {
         j = 0;
     }
}

function incrementRunIndex()
{

     //increment k
     k += 1;

     //if end of array start over
     if (k >= runanimation.length) {
         k = 0;
     }
}