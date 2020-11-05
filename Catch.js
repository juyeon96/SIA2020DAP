function catchGame() {
  textSize(30);
  textAlign(CENTER, CENTER);
  fill(0);
  textFont("Sugarpunch DEMO");
  text('Score', 540, 30);
  textSize(25);
  textFont("Modern Love");
  text(score, 540, 65);

  for(i=0; i<ballNum; i++) {
    let power = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
    particle[i].applyForce(power);

    fill(color[i][0], color[i][1], color[i][2]);

    particle[i].updateCatch();
    particle[i].edges();
    particle[i].display();
  }
}

function mousePressed() {
  for(i=0; i<ballNum; i++) {
    if(mouseX > particle[i].pos.x-particle[i].mass*5 && mouseX < particle[i].pos.x+particle[i].mass*5 && mouseY > particle[i].pos.y-particle[i].mass*5 && mouseY < particle[i].pos.y+particle[i].mass*5) {
      score++;
      sum++;
      continue;
    }
  }

  if(sum == ballNum) {
    ballNum++;
    sum = 0;
  }
}
