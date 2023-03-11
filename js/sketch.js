let pic;
let rate = 0;

function preload(){
  pic = loadImage("js/logo2.png");
}

function setup() {
  
  let canvas = createCanvas(400, 400);
  canvas.parent('copyright-anchor');
  pixelDensity(.2);
  $("#defaultCanvas0").css({ 'height' : '35px'});
  $("#defaultCanvas0").css({ 'width' : '35px'});
}

function draw() {
  clear();
  push();
  rate+= 0.007;
  translate(width/2, height/2);
  rotate(rate);
  imageMode(CENTER);
  image(pic, 0, 0, 400, 400);
  pop();
  strokeCap(SQUARE);
  strokeWeight(24);
  stroke(255);
  noFill();
  line(200,219, 200, 335);
  line(149.375, 272.375, 250.625, 272.375)
  arc(200, 175.75, 110, 110, PI, HALF_PI);
  arc(179, 184, 110, 110, HALF_PI, PI);
}
