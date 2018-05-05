
var matrix = [];
var x = 100;
var y = 100;
var side = 10;
var xotArr = [];
var xotakerArr = [];
var gishatichArr = [];
var deathArr =[];
function setup() {
  for(var i = 0; i < y; i++){
  matrix[i] = [];
  for(var d = 0; d < x; d++){
    matrix[i][d] = random([0,1,0,1,2,0,1,0,0,0,1,1,1,1,0,0,0,0,0,2,0,1,0,0,0,1,1,1,1,0,0,0,0,0,2,0,2,0,0,0,1,1,1,1,0,0,3,0,0,1,0,2,0,0,0,1,1,1,1,0,0,0,0,0,2,0,2,0,0,0,1,1,1,1,0,0,0,0,0,1,0,2,0,0,0,1,1,1,1,0,0,0,4,0])
  }


}
    frameRate(2);
    createCanvas(x * side, y * side);
    background('#acacac');

    for(var i = 0; i < matrix.length; i++){
      for(var j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] == 1){
          xotArr.push(new Grass(j, i));
        }
        else if(matrix[i][j] == 2){
          xotakerArr.push(new GrassEater(j, i));
        }
        else if(matrix[i][j] == 3){
          gishatichArr.push(new Predator(j, i));
        }
        else if(matrix[i][j] == 4){
        deathArr.push(new Don(j, i));
        }
      }
    }    
}
function draw() {
  background('#acacac');
  for(var i in xotArr){
    xotArr[i].mul();
  }
  for(var i in xotakerArr){
    xotakerArr[i].eat();
  }
  for(var i in gishatichArr){
    gishatichArr[i].eat();
  }
  for(var i in deathArr){
    deathArr[i].eat();
  }

  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] == 1){
        fill("green");
        rect(j * side, i * side, side, side);
      }
      else if(matrix[i][j] == 2){
        fill("yellow");
        rect(j * side, i * side, side,side);
      }
       else if(matrix[i][j] == 3){
         fill("brown");
         rect(j * side, i * side, side, side);

      }
      else if(matrix[i][j] == 4){
        fill("black");
        rect(j * side, i * side, side, side,50);

      }
    }
  }
} 

