function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  image(video, 230, 150, 220, 200);

  fill(255,0,0);
  stroke(255,0,0);
  circle(100,40,80);

  
  fill(255,0,0);
  stroke(255,0,0);
  circle(100,460,80);

  fill(255,0,0);
  stroke(255,0,0);
  circle(550,40,80);

  fill(255,0,0);
  stroke(255,0,0);
  circle(550,460,80);

  fill(0,255,0);
  stroke(0,128,0);
  rect(90,10,460,20);

   
  fill(0,255,0);
  stroke(0,128,0);
  rect(90,10,20,460);
   
  fill(0,255,0);
  stroke(0,128,0);
  rect(550,10,20,480);

  fill(0,255,0);
  stroke(0,128,0);
  rect(90,460,460,20);


}
function take_snapshot(){    
  save('photograph.png');
}