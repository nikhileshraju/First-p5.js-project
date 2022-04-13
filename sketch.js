function Preload(){

}

function setup(){
canvas = createCanvas(500, 400);
canvas.position(500, 200);
video = createCapture(VIDEO)
video.hide()
circle(0, 0)
}

function draw(){
image (video,0,0,640,480);
}

function take_snapshot(){
save('birthday_party.png');
}