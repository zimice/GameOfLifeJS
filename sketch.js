function make2dArray(cols ,rows){
  let arr = new Array(cols);
  for(let i= 0;i< arr.length;i++){
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols = 10;
let rows = 10;

function setup(){
  grid = make2dArray(cols,rows);
  for(i =0;i<cols;i++){
    for(j =0;j<rows;j++){
      grid[i][j] = Math.floor(Math.random(2));
    }
  }
}
setup();
