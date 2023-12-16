let circlePositions = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(0);

  storeInitialPositions();
}

function draw() {
  background(0);
  fill(127);
  textSize(15);
  textAlign(CENTER, CENTER);
  text('마우스를 움직여 바람을 일으켜보자', width / 2, height - 20);

  circle(mouseX, mouseY, 50);

  updateCirclePositions();

  drawCharacterW(circlePositions[0].x, circlePositions[0].y);
  drawCharacterI(circlePositions[1].x, circlePositions[1].y);
  drawCharacterN(circlePositions[2].x, circlePositions[2].y);
  drawCharacterD(circlePositions[3].x, circlePositions[3].y);
}

function storeInitialPositions() {
  circlePositions.push(createVector(width / 5, height / 2));
  circlePositions.push(createVector((2 * width) / 5, height / 2));
  circlePositions.push(createVector((3 * width) / 5, height / 2));
  circlePositions.push(createVector((4 * width) / 5, height / 2));
}

function updateCirclePositions() {
  for (let i = 0; i < circlePositions.length; i++) {
    let distance = dist(
      mouseX,
      mouseY,
      circlePositions[i].x,
      circlePositions[i].y
    );

    let maxDistance = 100;

    if (distance < maxDistance) {
      let direction = createVector(
        circlePositions[i].x - mouseX,
        circlePositions[i].y - mouseY
      );
      direction.normalize();
      direction.mult(maxDistance - distance);
      circlePositions[i].add(direction);
    } else {
      let initialPosition = createVector(((i + 1) * width) / 5, height / 2);
      let moveBack = p5.Vector.sub(initialPosition, circlePositions[i]);
      moveBack.mult(0.05);
      circlePositions[i].add(moveBack);
    }
  }
}

function drawCharacterW(x, y) {
  fill(255);
  ellipse(constrain(x - 20, 0, width), y - 30, 4); //1
  ellipse(constrain(x - 20, 0, width), y - 25, 4); // 2
  ellipse(constrain(x - 20, 0, width), y - 20, 4); // 3
  ellipse(constrain(x - 20, 0, width), y - 15, 4); // 4
  ellipse(constrain(x - 15, 0, width), y - 10, 4); // bottom-left
  ellipse(constrain(x, 0, width), y - 15, 4); // middle-middle-left
  ellipse(constrain(x + 20, 0, width), y - 30, 4); // top-right
  ellipse(constrain(x + 20, 0, width), y - 25, 4); // top-right
  ellipse(constrain(x + 20, 0, width), y - 20, 4); // top-right
  ellipse(constrain(x + 20, 0, width), y - 15, 4); // top-right
  ellipse(constrain(x - 10, 0, width), y - 5, 4); // bottom-middle-left
  ellipse(constrain(x - 5, 0, width), y - 10, 4); // bottom-middle-left
  ellipse(constrain(x + 5, 0, width), y - 10, 4); // bottom-middle-left
  ellipse(constrain(x + 10, 0, width), y - 5, 4); // bottom-middle-right
  ellipse(constrain(x + 15, 0, width), y - 10, 4); // bottom-right
}

function drawCharacterI(x, y) {
  fill(255);
  ellipse(constrain(x, 0, width), y - 30, 4); // top
  ellipse(constrain(x - 5, 0, width), y - 30, 4); // top
  ellipse(constrain(x + 5, 0, width), y - 30, 4); // top
  ellipse(constrain(x, 0, width), y - 25, 4); // top-middle
  ellipse(constrain(x, 0, width), y - 20, 4); // middle
  ellipse(constrain(x, 0, width), y - 15, 4); // middle-middle
  ellipse(constrain(x, 0, width), y - 10, 4); // bottom
  ellipse(constrain(x, 0, width), y - 5, 4); // bottom-middle
  ellipse(constrain(x, 0, width), y, 4); // bottom
  ellipse(constrain(x - 5, 0, width), y, 4); // bottom
  ellipse(constrain(x + 5, 0, width), y, 4); // bottom
}

function drawCharacterN(x, y) {
  fill(255);
  ellipse(constrain(x - 15, 0, width), y - 30, 4); // left-top
  ellipse(constrain(x - 15, 0, width), y - 25, 4); // left-top-middle
  ellipse(constrain(x - 15, 0, width), y - 20, 4); // left-middle
  ellipse(constrain(x - 15, 0, width), y - 15, 4); // left-middle-middle
  ellipse(constrain(x - 15, 0, width), y - 10, 4); // left-bottom
  ellipse(constrain(x - 15, 0, width), y - 5, 4); // left-bottom-middle
  ellipse(constrain(x - 15, 0, width), y, 4); // left-bottom

  ellipse(constrain(x - 10, 0, width), y - 25, 4); // middle-middle-middle
  ellipse(constrain(x - 5, 0, width), y - 20, 4); // middle-middle-middle
  ellipse(constrain(x, 0, width), y - 15, 4); // middle-middle-middle
  ellipse(constrain(x + 5, 0, width), y - 10, 4); // middle-middle-middle
  ellipse(constrain(x + 10, 0, width), y - 5, 4); // middle-middle-middle

  ellipse(constrain(x + 15, 0, width), y - 30, 4); // right-top
  ellipse(constrain(x + 15, 0, width), y - 25, 4); // right-top-middle
  ellipse(constrain(x + 15, 0, width), y - 20, 4); // right-middle
  ellipse(constrain(x + 15, 0, width), y - 15, 4); // right-middle-middle
  ellipse(constrain(x + 15, 0, width), y - 10, 4); // right-bottom
  ellipse(constrain(x + 15, 0, width), y - 5, 4); // right-bottom-middle
  ellipse(constrain(x + 15, 0, width), y, 4); // right-bottom
}

function drawCharacterD(x, y) {
  fill(255);
  ellipse(constrain(x - 15, 0, width), y - 30, 4); // left-top
  ellipse(constrain(x - 15, 0, width), y - 25, 4); // left-top-middle
  ellipse(constrain(x - 15, 0, width), y - 20, 4); // left-middle
  ellipse(constrain(x - 15, 0, width), y - 15, 4); // left-middle-middle
  ellipse(constrain(x - 15, 0, width), y - 10, 4); // left-bottom
  ellipse(constrain(x - 15, 0, width), y - 5, 4); // left-bottom-middle
  ellipse(constrain(x - 15, 0, width), y, 4); // left-bottom
  ellipse(x - 10, y - 30, 4); // top-middle
  ellipse(x - 5, y - 30, 4); // top-middle
  ellipse(x - 5, y - 30, 4); // top-middle
  ellipse(x, y - 25, 4); // top-middle
  ellipse(x + 5, y - 20, 4); // top-middle
  ellipse(x + 5, y - 15, 4); // top-middle
  ellipse(x + 5, y - 10, 4); // top-middle
  ellipse(x, y - 5, 4); // top-middle
  ellipse(x - 5, y, 4); // top-middle
  ellipse(x - 10, y, 4); // top-middle
}
