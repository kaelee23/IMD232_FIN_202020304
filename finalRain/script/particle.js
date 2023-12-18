//6차과제 step1 particle 과제를 활용했습니다.
//https://editor.p5js.org/natureofcode/sketches/H4TMayNak
class Particle {
  constructor(x, y, rotationSp) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0.05);
    this.byeRect = 255.0;

    const rainColor = random(5, 255);
    this.color = color(rainColor, rainColor, rainColor);

    this.rotation = 0;
    this.rotationSp = rotationSp;
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
      let force = createVector(
        this.pos.x - mouseX,
        this.pos.y - mouseY
      ).normalize();

      let strength = map(d, 0, 50, 0.5, 0);
      force.mult(strength);

      this.vel.add(force);
    }

    this.vel.x += force.x;
    this.vel.y += force.y;
  }
  isDead() {
    return this.byeRect < 0;
  }
}
