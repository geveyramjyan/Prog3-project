class Don{
	constructor(x,y){
		this.x = x;
		this.y = y;
	

	}
		newDirections(){
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1],
			[this.x - 2, this.y - 2],
			[this.x - 1, this.y - 2],
			[this.x    , this.y - 2],
			[this.x + 1, this.y - 2],
			[this.x + 2, this.y - 2],
			[this.x - 2, this.y - 1],
			[this.x + 2, this.y - 1],
			[this.x - 2, this.y    ],
			[this.x + 2, this.y    ],
			[this.x - 2, this.y + 1],
			[this.x + 2, this.y + 1],
			[this.x - 2, this.y + 2],
			[this.x - 1, this.y + 2],
			[this.x    , this.y + 2],
			[this.x + 1, this.y + 2]
			
		];
}

getDirections(t){
		this.newDirections();
		var found = [];

		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t){
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}


eat(){
var	found = this.getDirections(2).concat(this.getDirections(3).concat(this.getDirections(1)));
	if(found.length != 0 ){
	found = random(found);
	matrix[this.y][this.x] = 0;
	if(matrix[found[1]][found[0]] == 2){
		for(var m in xotakerArr){
			if(xotakerArr[m].x == found[0] && xotakerArr[m].y == found[1]){
				xotakerArr.splice(m,1);
				matrix[found[1]][found[0]] = 4;
				this.x = found[0];
				this.y = found[1];
			}
		}
	}
	else if(matrix[found[1]][found[0]] == 3){
		for(var m in gishatichArr){
			if(gishatichArr[m].x == found[0] && gishatichArr[m].y == found[1]){
				gishatichArr.splice(m,1);
				matrix[found[1]][found[0]] = 4;
				this.x = found[0];
				this.y = found[1];
			}
		}
	}
	else if(matrix[found[1]][found[0]] == 1){
		for(var m in xotArr){
			if(xotArr[m].x == found[0] && xotArr[m].y == found[1]){
				xotArr.splice(m,1);
				matrix[found[1]][found[0]] = 4;
				this.x = found[0];
				this.y = found[1];
			}
		}
	}
}
	else this.move();


}
move(){
	var found = this.getDirections(0);
	if(found.length != 0 ){
		found = random(found);
		matrix[this.y][this.x] = 0;
		this.x = found[0];
		this.y = found[1];
		matrix[this.y][this.x] = 4;

	}
}
}