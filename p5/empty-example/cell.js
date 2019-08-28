class cell {
	constructor(positionX, positionY){
		this.positionX = positionX;
		this.positionY = positionY;
		this.bomb = false;
		this.value = 0;
		this.hidden = true;

		this.lowerBoundsX = 50 + positionX * 40;
    this.higherBoundsX = this.lowerBoundsX + 40;

    this.lowerBoundsY = 50 + positionY * 40;
    this.higherBoundsY = this.lowerBoundsY + 40;
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
	setHidden(val){
		this.hidden = val;
	}
	getHidden(){
		return this.hidden;
	}

	isInBounds(mouseXCoord, mouseYCoord){
		if (mouseXCoord >= this.lowerBoundsX && mouseXCoord <= this.higherBoundsX &&
		mouseYCoord >= this.lowerBoundsY && mouseYCoord <= this.higherBoundsY)
		{
			return true;
		}
	}

	drawCell(){
		textSize(18);
		strokeWeight(1);
		textAlign(CENTER);
		// draw new square when clicked/hovered
		//rect(50 + this.positionX * 40, 50 + this.positionY * 40, 40, 40);
		if (this.hidden == false){
			if (this.getBomb() == true){
				text('X', 50 + 20 + this.positionX * 40, 50 + 20 + this.positionY * 40);
			}
			else{
				if (this.getValue() != 0){
					text(this.getValue().toString(), 50 + 20 + this.positionX * 40, 50 + 20 + this.positionY * 40);
				}
			}
		}
	}
}