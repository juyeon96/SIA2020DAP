function Particle(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = m;

  this.applyForce = function(force) {
    let f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  this.update = function() {
    let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.1);
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
  }

  this.updateCatch = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
  }

  this.display = function() {
    ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
  }
  
  this.edges = function() {
    if(this.pos.y > height-this.mass*5 || this.pos.y < this.mass*5) {
      this.vel.y *= -1;
      
      if(this.pos.y > height-this.mass*5)
        this.pos.y = height-this.mass*5;
      else
        this.pos.y = this.mass*5;
    }

    if(this.pos.x > width-this.mass*5 || this.pos.x < this.mass*5) {
      this.vel.x *= -1;

      if(this.pos.x > width-this.mass*5)
        this.pos.x = width-this.mass*5;
      else
        this.pos.x = this.mass*5;
    }
  }
}