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
  createCanvas(400,400);

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
        rect(x,y,resolution,resolution)
      }
      
    }
  }
}
