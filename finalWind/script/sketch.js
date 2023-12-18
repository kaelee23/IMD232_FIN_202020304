let circlePos = [];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(0);

  wordPlace();
}
//글자가 셔플하는 부분은 gpt의 도움을 얻었습니다.
////function mouseClicked() {
// shuffleCharacterPositions(); // 마우스 클릭 시 글자의 위치를 랜덤하게 섞는 함수 호출
//}

//function shuffleCharacterPositions() {
//for (let i = circlePos.length - 1; i > 0; i--) {
//const j = floor(random(i + 1));
// [circlePos[i], circlePos[j]] = [circlePos[j], circlePos[i]]; // Fisher-Yates 알고리즘을 사용하여 배열을 섞//음
// }
//}
function mouseClicked() {
  shuffleWord();
}
function shuffleWord() {
  for (let i = circlePos.length - 1; i > 0; i--) {
    const j = floor(random(i + 1));
    [circlePos[i], circlePos[j]] = [circlePos[j], circlePos[i]];
  }
}

function draw() {
  background(0);
  fill(127);
  textSize(15);
  textAlign(CENTER, CENTER);
  text(
    '마우스를 클릭해 글자 위치가 랜덤하게 왔다갔다 하게 하고, 마우스를 움직여 바람을 일으켜보자',
    width / 2,
    height - 20
  );

  circle(mouseX, mouseY, 50);

  updateCirclePos();

  drawW(circlePos[0].x, circlePos[0].y);
  drawI(circlePos[1].x, circlePos[1].y);
  drawN(circlePos[2].x, circlePos[2].y);
  drawD(circlePos[3].x, circlePos[3].y);
}

function wordPlace() {
  circlePos.push(createVector(width / 5, height / 2));
  circlePos.push(createVector((2 * width) / 5, height / 2));
  circlePos.push(createVector((3 * width) / 5, height / 2));
  circlePos.push(createVector((4 * width) / 5, height / 2));
}

function updateCirclePos() {
  for (let i = 0; i < circlePos.length; i++) {
    let dis = dist(mouseX, mouseY, circlePos[i].x, circlePos[i].y);

    //이 부분도 부드럽게 이동하기 위해 gpt의 도움을 받았습니다.
    // let maxDistance = 100;

    // 마우스와 각 글자 사이의 거리가 일정 값 이하인 경우
    //if (distance < maxDistance) {
    //let direction = createVector(
    //circlePos[i].x - mouseX,
    // circlePos[i].y - mouseY
    //);
    //direction.normalize();
    //direction.mult(maxDistance - distance);
    //circlePos[i].add(direction); // 글자를 마우스 방향으로 이동
    //} else {
    // 일정 거리 이상인 경우 초기 위치로 부드럽게 이동
    //let initialPosition = createVector(((i + 1) * width) / 5, height / 2);
    //let moveBack = p5.Vector.sub(initialPosition, circlePos[i]);
    // moveBack.mult(0.05);
    //circlePos[i].add(moveBack);
    // }
    //}
    //}
    let maxDis = 100;

    if (dis < maxDis) {
      let direction = createVector(
        circlePos[i].x - mouseX,
        circlePos[i].y - mouseY
      );
      direction.normalize();
      direction.mult(maxDis - dis);
      circlePos[i].add(direction);
    } else {
      let initialPos = createVector(((i + 1) * width) / 5, height / 2);
      let moveBack = p5.Vector.sub(initialPos, circlePos[i]);
      moveBack.mult(0.05);
      circlePos[i].add(moveBack);
    }
  }
}

function drawW(x, y) {
  fill(255);
  ellipse(constrain(x - 20, 0, width), y - 30, 4); //1
  ellipse(constrain(x - 20, 0, width), y - 25, 4); // 2
  ellipse(constrain(x - 20, 0, width), y - 20, 4); // 3
  ellipse(constrain(x - 20, 0, width), y - 15, 4); // 4
  ellipse(constrain(x - 15, 0, width), y - 10, 4);
  ellipse(constrain(x, 0, width), y - 15, 4);
  ellipse(constrain(x + 20, 0, width), y - 30, 4);
  ellipse(constrain(x + 20, 0, width), y - 25, 4);
  ellipse(constrain(x + 20, 0, width), y - 20, 4);
  ellipse(constrain(x + 20, 0, width), y - 15, 4);
  ellipse(constrain(x - 10, 0, width), y - 5, 4);
  ellipse(constrain(x - 5, 0, width), y - 10, 4);
  ellipse(constrain(x + 5, 0, width), y - 10, 4);
  ellipse(constrain(x + 10, 0, width), y - 5, 4);
  ellipse(constrain(x + 15, 0, width), y - 10, 4);
}

function drawI(x, y) {
  fill(255);
  ellipse(constrain(x, 0, width), y - 30, 4);
  ellipse(constrain(x - 5, 0, width), y - 30, 4);
  ellipse(constrain(x + 5, 0, width), y - 30, 4);
  ellipse(constrain(x, 0, width), y - 25, 4);
  ellipse(constrain(x, 0, width), y - 20, 4);
  ellipse(constrain(x, 0, width), y - 15, 4);
  ellipse(constrain(x, 0, width), y - 10, 4);
  ellipse(constrain(x, 0, width), y - 5, 4);
  ellipse(constrain(x, 0, width), y, 4);
  ellipse(constrain(x - 5, 0, width), y, 4);
  ellipse(constrain(x + 5, 0, width), y, 4);
}

function drawN(x, y) {
  fill(255);
  ellipse(constrain(x - 15, 0, width), y - 30, 4);
  ellipse(constrain(x - 15, 0, width), y - 25, 4);
  ellipse(constrain(x - 15, 0, width), y - 20, 4);
  ellipse(constrain(x - 15, 0, width), y - 15, 4);
  ellipse(constrain(x - 15, 0, width), y - 10, 4);
  ellipse(constrain(x - 15, 0, width), y - 5, 4);
  ellipse(constrain(x - 15, 0, width), y, 4);

  ellipse(constrain(x - 10, 0, width), y - 25, 4);
  ellipse(constrain(x - 5, 0, width), y - 20, 4);
  ellipse(constrain(x, 0, width), y - 15, 4);
  ellipse(constrain(x + 5, 0, width), y - 10, 4);
  ellipse(constrain(x + 10, 0, width), y - 5, 4);

  ellipse(constrain(x + 15, 0, width), y - 30, 4);
  ellipse(constrain(x + 15, 0, width), y - 25, 4);
  ellipse(constrain(x + 15, 0, width), y - 20, 4);
  ellipse(constrain(x + 15, 0, width), y - 15, 4);
  ellipse(constrain(x + 15, 0, width), y - 10, 4);
  ellipse(constrain(x + 15, 0, width), y - 5, 4);
  ellipse(constrain(x + 15, 0, width), y, 4);
}

function drawD(x, y) {
  fill(255);
  ellipse(constrain(x - 15, 0, width), y - 30, 4);
  ellipse(constrain(x - 15, 0, width), y - 25, 4);
  ellipse(constrain(x - 15, 0, width), y - 20, 4);
  ellipse(constrain(x - 15, 0, width), y - 15, 4);
  ellipse(constrain(x - 15, 0, width), y - 10, 4);
  ellipse(constrain(x - 15, 0, width), y - 5, 4);
  ellipse(constrain(x - 15, 0, width), y, 4);
  ellipse(x - 10, y - 30, 4);
  ellipse(x - 5, y - 30, 4);
  ellipse(x - 5, y - 30, 4);
  ellipse(x, y - 25, 4);
  ellipse(x + 5, y - 20, 4);
  ellipse(x + 5, y - 15, 4);
  ellipse(x + 5, y - 10, 4);
  ellipse(x, y - 5, 4);
  ellipse(x - 5, y, 4);
  ellipse(x - 10, y, 4);
}
