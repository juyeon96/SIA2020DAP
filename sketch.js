let particle = [];
let color = [];
let i;
let dbool;
let ballNum;
let score;
let sum;
let time;
let now;
let gameover;

function setup() {
  createCanvas(640, 360);
  background(255);
  dbool = 0;
  ballNum = 1;
  score = 0;
  sum = 0;
  time = 10;
  gameover = 0;

  for(i=0; i<30; i++) {
    particle[i] = new Particle(random(20, width-20), random(20, height-20), random(3, 5));
    color[i] = [];
    color[i][0] = random(255);
    color[i][1] = random(255);
    color[i][2] = random(255);
  }
}

function draw() {
  if(dbool == 1) {
    background(255, 255, 255, 100);
    noStroke();
  }

  else {
    if(mouseIsPressed && key!= 'c') {
      noStroke();
    }
    
    else {
      background(255, 255, 255, 20);
      stroke(0);
    }
  }

  if(key == 'c')
    catchGame();
  
  else if(key == 'a') {
    avoidGame();
  }
  
  else {
    ballNum = 1;
    score = 0;
    sum = 0;
    time = 10;
    gameover = 0;

    for(i=0; i<30; i++) {
      let power = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
      particle[i].applyForce(power);

      fill(color[i][0], color[i][1], color[i][2]);

      particle[i].update();
      particle[i].edges();
      particle[i].display();
    }
  }
}

function keyTyped() {

  for(i=0; i<30; i++) {
    if(key == 'r') {
      color[i][0] = random(255);
      color[i][1] = 0;
      color[i][2] = 0;
      dbool = 0;
    }

    else if(key == 'g') {
      color[i][0] = 0;
      color[i][1] = random(255);
      color[i][2] = 0;
      dbool = 0;
    }

    else if(key == 'b') {
      color[i][0] = 0;
      color[i][1] = 0;
      color[i][2] = random(255);
      dbool = 0;
    }

    else if(key == 'w') {
      color[i][0] = random(255);
      color[i][1] = random(255);
      color[i][2] = random(255);
      dbool = 0;
    }

    else if(key == 'd') {
      let r = random(255);

      color[i][0] = r;
      color[i][1] = r;
      color[i][2] = r;
      dbool = 1;
    }

    else if(key == ' ') {
      background(255);
      dbool = 0;
    }

    else if(key == 'a')
      now = frameCount;
  }
}