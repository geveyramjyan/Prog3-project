class GrassEater{
   constructor (x,y){
		this.x = x;
		this.y = y;
		this.energy = 3;
		this.multiply = 0;
		
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
		    [this.x + 1, this.y + 1]
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

			var norXotaker = new GrassEater(x,y);
			xotakerArr.push(norXotaker);
			
			matrix[y][x] = 2;
			

		}
		this.multiply = 0; 
	}

	move(){
		var k = this.getDirections(0);
		var cord = random(k);
		if(cord){
			this.multiply = 0;
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 2;
			matrix[this.y][this.x] = 0;
			this.x = x;
			this.y = y;
			this.energy--;
			if(this.energy == 0){
	           this.die();
			   

			}
			
			
			
			
		}

	}


eat(){
	var grassCord = this.getDirections(1);
	var grass = random(grassCord);
	if(grass){
		var x = grass[0];
		var y = grass[1];
		
		matrix[this.y][this.x] = 0;
		matrix[y][x] = 2;
		
		this.x = x;
        this.y = y;
		
		for(var i in xotArr){
			if(xotArr[i].x == x && xotArr[i].y == y){
				xotArr.splice(i,1);
			}
		}
		this.multiply++;


		if(this.multiply == 5)
		{
			this.mul();
		}
	
	}
	else{
		this.move();
		
	}
	
}

  die(){
	  for(var i in xotakerArr){
		  if(this.x == xotakerArr[i].x && this.y ==xotakerArr[i].y){
			  xotakerArr.splice(i,1);
			  matrix[this.y][this.x] = 0;
		  }
	  }
  }
}