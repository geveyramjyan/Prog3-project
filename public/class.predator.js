class Predator{
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.energy = 40;
		this.multiply = 0;
		this.eatcount = 4;

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


mul(){
		var emptyCord = this.getDirections(0);

		var cord = random(emptyCord);
		
		if(cord){

			var x = cord[0];
			var y = cord[1];

			var gishatich = new Predator(x,y);
			gishatichArr.push(gishatich);
			
			matrix[y][x] = 3;
			

		}
		
	}
 
	 
move(){
	var emptyCord = this.getDirections(0);
	var cord = random(emptyCord);

	if(cord){
		var x = cord[0];
		var y = cord[1];
		
		matrix[y][x] = 3;
		matrix[this.y][this.x] = 0
        
		this.x = x;
		this.y = y;
		this.energy--;
			if(this.energy == 0){
	           this.die();
			   

			}
	}

	}




eat(){
	var eaterCord = this.getDirections(2);
	var eater = random(eaterCord);
	if(eater){
		var x = eater[0];
		var y = eater[1];
		matrix[this.y][this.x] = 0;
		matrix[y][x] = 3;
		
		this.x = x;
        this.y = y;
	
		for(var i in xotakerArr){
			if(xotakerArr[i].x == x && xotakerArr[i].y == y){
				xotakerArr.splice(i,1);
			}
		}
		this.multiply++;

		this.energy++


		if(this.multiply == 8)
		{
			this.mul();
		}
	}
	
	else{
		this.move();
		
	}
	
}


die(){
	  for(var i in gishatichArr){
		  if(this.x == gishatichArr[i].x && this.y == gishatichArr[i].y){
			  gishatichArr.splice(i,1);
			  matrix[this.y][this.x] = 0;
		  }
	  }
  }
}