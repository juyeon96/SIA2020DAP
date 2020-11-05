function avoidGame() {
  background(255);
  textSize(30);
  textAlign(CENTER, CENTER);
  fill(0);
  textFont("Sugarpunch DEMO");
  text('Score', 540, 30);
  text('Time', 60, 30);
  textSize(25);
  textFont("Modern Love");
  text(score, 540, 65);
  text(time, 60, 65);

  for(i=0; i<ballNum; i++) {
    let power = createVector(random(-0.1, 0.1), random(-0.1, 0.1));
    particle[i].applyForce(power);

    fill(color[i][0], color[i][1], color[i][2]);

    particle[i].update();
    particle[i].edges();
    particle[i].display();
  }

  for(i=0; i<ballNum; i++) {
    if(mouseX > particle[i].pos.x-particle[i].mass*5 && mouseX < particle[i].pos.x+particle[i].mass*5 && mouseY > particle[i].pos.y-particle[i].mass*5 && mouseY < particle[i].pos.y+particle[i].mass*5) {
      gameover = 1;
      break;
    }
  }

  if(gameover == 1) {
    background(0);
    textSize(65);
    fill(255);
    text("GAME OVER", 320, 180);
    textSize(20);
    text("Press 'h' to go to main page", 320, 250);
  }

  if(key == 'h') {
    selection = 0;
    gameover = 0;
  }

  if((frameCount-now) % 60 == 0)
    time--;

  if(time == 0){
    ballNum++;
    time = 10;
  }
}
