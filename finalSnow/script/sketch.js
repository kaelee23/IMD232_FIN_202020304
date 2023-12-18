// gpt의 도움을 얻어서 작성하였습니다.
let snowP;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(0);

  snowP = createVector(width / 2, height / 2);
}

function draw() {
  background(0);
  fill('red');
  ellipse(width / 2, height / 2, 9);

  fill(127);
  textSize(15);
  textAlign(CENTER, CENTER);
  text(
    '마우스를 빨간점으로 다가가서 눈을 뭉치거나 멀리해서 퍼트려보자',
    width / 2,
    height - 20
  );

  let canvasCenterX = width / 2;
  let canvasCenterY = height / 2;

  let dis = dist(mouseX, mouseY, canvasCenterX, canvasCenterY);

  let spread = map(dis, 0, width / 2, 0, 300);

  drawSnow(canvasCenterX, canvasCenterY, spread);
}
function drawSnow(x, y, spread) {
  fill(255);

  for (let i = 0; i < 10; i++) {
    let xOffset = random(-spread, spread);
    let yOffset = random(-spread, spread);

    //  ㄴ
    ellipse(constrain(x - 20 + xOffset, 0, width), y - 35 - yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y - 30 - yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y - 25 - yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y - 20 - yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y - 15 - yOffset, 10);
    ellipse(constrain(x - 15 + xOffset, 0, width), y - 15 - yOffset, 10);
    ellipse(constrain(x - 10 + xOffset, 0, width), y - 15 - yOffset, 10);
    ellipse(constrain(x - 5 + xOffset, 0, width), y - 15 - yOffset, 10);
    ellipse(constrain(x + xOffset, 0, width), y - 15 - yOffset, 10);

    // ㄴ
    ellipse(constrain(x - 20 + xOffset, 0, width), y + 10 + yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y + 15 + yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y + 20 + yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y + 25 + yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y + 30 + yOffset, 10);
    ellipse(constrain(x - 15 + xOffset, 0, width), y + 30 + yOffset, 10);
    ellipse(constrain(x - 10 + xOffset, 0, width), y + 30 + yOffset, 10);
    ellipse(constrain(x - 5 + xOffset, 0, width), y + 30 + yOffset, 10);
    ellipse(constrain(x + xOffset, 0, width), y + 30 + yOffset, 10);

    // ㅜ
    ellipse(constrain(x - 30 + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x - 25 + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x - 20 + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x - 15 + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x - 10 + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x - 5 + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x + 5 + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x + 10 + xOffset, 0, width), y + yOffset, 10);
    ellipse(constrain(x - 10 + xOffset, 0, width), y + 5 + yOffset, 10);
    ellipse(constrain(x - 10 + xOffset, 0, width), y + 10 + yOffset, 10);
  }
}
