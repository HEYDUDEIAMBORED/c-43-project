var hr,hrangle,mn,mnangle,sc,scangle;
function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(0);  
  hr=hour()
  mn=minute()
  sc=second()
  
  angleMode(DEGREES)
  
  scangle=map(sc,0,60,0,360)
  mnangle=map(mn,0,60,0,360)
  hrangle=map(hr,0,12,0,360)
  stroke(0,255,0)
  fill('black')
  ellipse(500,500,900,900)  
  translate(500,500)
  push();
  
  rotate(scangle);
  stroke('red');
  strokeWeight(7);
  line(400,200,50,1);
  pop();
  push();
  
  rotate(mnangle);
  stroke('yellow');
  strokeWeight(7);
  line(400,200,50,1);
  pop();
  push();
  
  rotate(hrangle);
  stroke('cyan');
  strokeWeight(7);
  line(400,200,30,1);
  pop();
  
  drawSprites();
}