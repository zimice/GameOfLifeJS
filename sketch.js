function make2dArray(cols ,rows){
  let arr = new Array(cols);
  for(let i= 0;i< arr.length;i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols;
let rows;
let resolution = 40;

function setup(){
  createCanvas(3000,3000);

  cols = width / resolution;
  rows = height/resolution;

  grid = make2dArray(cols,rows);
  for(i =0;i<cols;i++){
    for(j =0;j<rows;j++){
      grid[i][j] = Math.round(Math.random());
    }
  }

}

function draw(){
  background(0);

  

  for(let i=0;i<cols;i++){
    for(let j=0;j<rows;j++){
      let x = i * resolution;
      let y = j * resolution;
      if(grid[i][j] ==1){
        fill(255);
        stroke(0)   //0 for seeing grid lines
        rect(x,y,resolution-1 ,resolution)
      }
      
    }
  }

  let next = make2dArray(cols,rows);

  for(let i=0;i<cols;i++){
    for(let j=0;j<rows;j++){

      let state = grid [i][j];

      if(i ==0 || i == cols-1 || j ==0 || j== rows-1){ //Edges
        next [i][j] =state;
      } else{

      let sum = 0;
      let neighbors = countNeighbors(grid,i,j);//Compute alive neighbors
      
      
      if(state == 0 && neighbors ==3){
        next[i][j] =1;
      } else if(state == 1 && neighbors <2 || neighbors > 3){
        next[i][j] =0;
      } else{
        next[i][j] = state;
      }
    }
    }
  }    

  grid=next;
}
function countNeighbors(grid,x,y){
  let sum =0;
  for(let i = -1;i<2;i++){
    for(let j = -1;j<2;j++){
      sum += grid[i+x][j+y];
    }
  }
  sum -=grid[x][y];
  return sum;
}

