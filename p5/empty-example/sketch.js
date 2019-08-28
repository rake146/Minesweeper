var grid = new Grid();

function setup() {
  // setup code
  var canvas = createCanvas(500, 500);

  grid.addBombs();
  grid.addNumbers();
}

function draw() {
  drawGrid();
  grid.drawCells();
}

function mouseClicked() {
  grid.mouseChecking();
}

function drawGrid() {
  // rows
  let maxRows = 9;

  for (var i = 0; i < maxRows + 1; i++){
    strokeWeight(1);

    line(50, 50 + i * 40, 50 + 40 * maxRows, 50 + i * 40);
    line(50 + i * 40, 50, 50 + i * 40, 50 + 40 * maxRows);
  }
}