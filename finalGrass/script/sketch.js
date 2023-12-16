let t = 0;
let lineObj = null;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  noFill();

  stroke(143, 188, 143);
}

function draw() {
  stroke(0);
  strokeWeight(2);
  fill(127);
  textSize(15);
  textAlign(CENTER, CENTER);
  text(
    '마우스를 이동해 잔디 방향을 정하고 클릭해서 풀을 뽑아보자',
    width / 2,
    height - 20
  );

  background(10, 10);

  if (lineObj) {
    strokeWeight(1);

    stroke(143, 188, 143);
    line(lineObj.x1, lineObj.y1, lineObj.x2, lineObj.y2);
    lineObj.y1 += 3;
    lineObj.y2 += 3;

    if (lineObj.y1 > height || lineObj.y2 > height) {
      lineObj = null;
    }
  }

  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);

      let angle = xAngle * (x / width) + yAngle * (y / height);

      let length = random(10, 40);

      let myX = x + length * cos(2 * PI * t + angle);
      let myY = y + length * sin(2 * PI * t + angle);

      strokeWeight(0.5);

      stroke(143, 188, 143);
      line(x, y, myX, myY);
    }
  }

  t = t + 0.01;
}

function mouseClicked() {
  let x = mouseX;
  let y = mouseY;
  let xAngle = map(x, 0, width, -4 * PI, 4 * PI, true);
  let yAngle = map(y, 0, height, -4 * PI, 4 * PI, true);
  let angle = xAngle + yAngle;

  y -= 10;

  let length = random(10, 40);

  let myX = x + length * cos(2 * PI * t + angle);
  let myY = y + length * sin(2 * PI * t + angle);

  lineObj = {
    x1: x,
    y1: y,
    x2: myX,
    y2: myY,
  };
}
