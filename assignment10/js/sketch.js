//variables
let playing;
let button, muteButton;
let muted;
let volumeDownButton, volumeUpButton;
let myCurrentVolume = 1;
let myVideos = [];

//setup
function setup() {

    //video object
    myVideos.push(new myVideo("assets/video.mp4", 460, 100, 480, 360));

    createCanvas(screen.width, screen.height);
    background(64);

    textSize(50);
    text("shaved boi", 50, 50);
    textSize(30);
    text("will bazler", 100, 100);

    //buttons
    button = createButton('play');
    button.position(100, 600);

    muteButton = createButton('mute');
    muteButton.position(100, 630);

    volumeDownButton = createButton('volume down');
    volumeDownButton.position(100, 660);

    volumeUpButton = createButton('volume up');
    volumeUpButton.position(100, 690);

    //press mouse
    button.mousePressed(playVideo);
    muteButton.mousePressed(audioVolume);
    volumeDownButton.mousePressed(volumeDown);
    volumeUpButton.mousePressed(volumeUp);

    //create video
    for (let i = 0; i < myVideos.length; i++) {
        let tempVideo = createVideo([myVideos[i].theVideoPath]);
        tempVideo.size(myVideos[i].theW, myVideos[i].theH);
        tempVideo.position(myVideos[i].theX, myVideos[i].theY);
        myVideos[i].settheVideoObject(tempVideo);
    }

}

//volume down
function volumeDown() {
    myCurrentVolume -= .1;
    if (myCurrentVolume <= 0) {
        myCurrentVolume = 0;
    }
    for (let i = 0; i < myVideos.length; i++) {
        let temp = myVideos[i].theVideoObject;
        temp.volume(myCurrentVolume);
    }

}

//volume up
function volumeUp() {
    myCurrentVolume += .1;
    if (myCurrentVolume >= 1) {
        myCurrentVolume = 1;
    }

    for (let i = 0; i < myVideos.length; i++) {
        let temp = myVideos[i].theVideoObject;
        temp.volume(myCurrentVolume);
    }

}

//mute and unmute
function audioVolume() {
    if (muted) {
        muteButton.html('unmute')
        for (let i = 0; i < myVideos.length; i++) {
            let temp = myVideos[i].theVideoObject;
            temp.volume(0);
        }

    } else {
        muteButton.html('mute');
        for (let i = 0; i < myVideos.length; i++) {
            let temp = myVideos[i].theVideoObject;
            temp.volume(myCurrentVolume);

        }

    }

    muted = !muted;

}

//video loads
function playVideo() {

    if (playing) {
        for (let i = 0; i < myVideos.length; i++) {
            let temp = myVideos[i].theVideoObject;
            temp.pause();
            temp.volume(1);
        }
        button.html('play');
        playing = false;
    } else {
        for (let i = 0; i < myVideos.length; i++) {
            let temp = myVideos[i].theVideoObject;
            temp.loop();
            temp.volume(1);
        }

        button.html('pause');
        playing = true;

    }

}