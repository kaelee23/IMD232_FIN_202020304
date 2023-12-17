class Particle {
  constructor(x, y, rotationSpeed) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.05);
    this.byeRect = 255.0;

    const grayValue = random(5, 255);
    this.color = color(grayValue, grayValue, grayValue);

    this.rotation = 0;
    this.rotationSpeed = rotationSpeed;
    this.lineLength = random(0.2, 1.3);
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.vel.add(this.acc);
    this.byeRect -= 1.5;

    if (this.pos.y > height - 20) {
      this.byeRect = 0;
    }
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rotation);
    stroke(
      this.color.levels[0],
      this.color.levels[1],
      this.color.levels[2],
      this.byeRect
    );
    strokeWeight(2);

    let lineEnd = this.lineLength * 10;
    line(0, -lineEnd, 0, lineEnd);

    pop();
  }
  applyForce(force) {
    let d = dist(this.pos.x, this.pos.y, mouseX, mouseY);

    if (d < 50) {
      let parabolicForce = createVector(
        this.pos.x - mouseX,
        this.pos.y - mouseY
      ).normalize();

      let strength = map(d, 0, 50, 0.5, 0);
      parabolicForce.mult(strength);

      this.vel.add(parabolicForce);
    }

    this.vel.x += force.x;
    this.vel.y += force.y;
  }
  isDead() {
    return this.byeRect < 0;
  }
}