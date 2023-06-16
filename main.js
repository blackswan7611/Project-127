song1 = "Alone.mp3";
song2 = "LetMeLoveYou.mp3";

function preload()
{
     loadSound("Alone.mp3");
     loadSound("LetMeLoveYou.mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,600,500);
}
