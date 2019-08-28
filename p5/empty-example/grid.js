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
				if (this.getRandomInt(10) == 0) // val = 100/val%
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
				let totalVal = 0;

				if (this.cells[i - 1 < 0 ? 0 : i - 1][j].getBomb() == true) { totalVal++; } // left
				if (this.cells[i + 1 > 8 ? 8 : i + 1][j].getBomb() == true) { totalVal++; } // right
				if (this.cells[i][j - 1 < 0 ? 0 : j - 1].getBomb() == true) { totalVal++; } // up 
				if (this.cells[i][j + 1 > 8 ? 8 : j + 1].getBomb() == true) { totalVal++; } // down

				if (this.cells[i - 1 < 0 ? 0 : i - 1][j - 1 < 0 ? 0 : j - 1].getBomb() == true) { totalVal++; } // diagonal-top-left
				if (this.cells[i + 1 > 8 ? 8 : i + 1][j - 1 < 0 ? 0 : j - 1].getBomb() == true) { totalVal++; } // diagonal-top-right
				if (this.cells[i - 1 < 0 ? 0 : i - 1][j + 1 > 8 ? 8 : j + 1].getBomb() == true) { totalVal++; } // diagonal-bottom-left
				if (this.cells[i + 1 > 8 ? 8 : i + 1][j + 1 > 8 ? 8 : j + 1].getBomb() == true) { totalVal++; } // diagonal-bottom-right
				
				this.cells[i][j].setValue(totalVal);
			}
	}
	
	mouseChecking(){
		for (var i = 0; i < 9; i++){
			for (var j = 0; j < 9; j++){
				if (this.cells[i][j].isInBounds(mouseX, mouseY) == true){
					this.cells[i][j].setHidden(false);
					if (this.cells[i][j].getValue() == 0){
						console.log("EXPAND RECURSIVELY");
					}
				}
			}
		}
	}

	expandRecursively(){

	}
    
}