class Grid {
  constructor(){
    this.cells = new Array(9);
    for (var i = 0; i < 9; i++)
      this.cells[i] = new Array(9);
    
    for (var i = 0; i < 9; i++)
      for (var j = 0; j < 9; j++)
        this.cells[i][j] = new cell(i, j);
  }

  drawCells(){
    for (var i = 0; i < 9; i++)
      for (var j = 0; j < 9; j++)
        this.cells[i][j].drawCell();
  }

  addBombs(){
    for (var i = 0; i < 9; i++)
      for (var j = 0; j < 9; j++){
        if (this.getRandomInt(8) == 0) // val = 100/val%
          this.cells[i][j].setBomb(true);
        else
          this.cells[i][j].setBomb(false);
      }
  }

  getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
  }

  addNumbers(){
    for (var i = 0; i < 9; i++)
      for (var j = 0; j < 9; j++){
        this.cells[i][j] = new cell(i, j);
      }
  }
  
}

class cell {
  constructor(positionX, positionY){
    this.positionX = positionX;
    this.positionY = positionY;
    this.bomb = false;
    this.value = 0;
  }

  setValue(val){
    this.value = val;
  }
  getValue(){
    return this.value;
  }
  setBomb(val){
    this.bomb = val;
  }
  getBomb(){
    return this.bomb;
  }

  drawCell(){
    textSize(18);
    strokeWeight(1);
    textAlign(CENTER);
    // draw new square when clicked/hovered
    //rect(50 + this.positionX * 40, 50 + this.positionY * 40, 40, 40);
    if (this.getBomb() == true){
      text('X', 50 + 20 + this.positionX * 40, 50 + 20 + this.positionY * 40);
    }
    else{
      text('-', 50 + 20 + this.positionX * 40, 50 + 20 + this.positionY * 40);
    }
  }
}

var grid = new Grid();

function setup() {
  // setup code
  var canvas = createCanvas(500, 500);

  grid.addBombs();
  //grid.addNumbers();
}

function draw() {
  drawGrid();
  grid.drawCells();
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