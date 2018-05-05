class Grass{
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.energy = 5;
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
		this.multiply++;
		if(this.multiply == 3){
			var emptyCord = this.getDirections(0);

			var cord = random(emptyCord);
			if(cord){
				var x = cord[0];
				var y = cord[1];

				var norXot = new Grass(x,y,this.index);
				xotArr.push(norXot);

				matrix[y][x] = 1;
				this.multiply = 0;
			}
		}
	}

	die(){

	}

}

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




