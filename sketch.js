var grid;
const columns=32;
const rows=32;
function create2dArray(cols,rows){
  var arr= new Array(cols);
  for(i=0;i<arr.length;i++){
    arr[i] = new Array(rows);
  }
    return arr;
}
function fillGrid(grid){
  for(i=0;i<columns;i++){
    for(j=0;j<rows;j++){
      grid[i][j]=Math.round(Math.random());
    }
  }

}
function setup(){
  grid = create2dArray(columns,rows);
  fillGrid(grid);
  GameLoop();

}
function GameLoop(){
  draw();
  Rules();
  setTimeout(GameLoop,100);
}
function draw(){
  var GamingField = document.getElementById("GameField");
  var ctx = GamingField.getContext("2d");
  ctx.beginPath();
  ctx.clearRect(0, 0, 800, 800);
  var x=0;
  var y=0;
  for(i=0;i<columns;i++){
    for(j=0;j<rows;j++){
      if(grid[i][j] == 1 ){
          ctx.fillRect(x,y,25,25)
        }else {
          ctx.rect(x,y,25,25)
        }
      ctx.stroke();
      x+=25;
    }
      x=0;
      y+=25;
  }
  ctx.stroke();
}
function Rules(){
let next = create2dArray(columns,rows);
for(let i=0;i<columns;i++){
   for(let j=0;j<rows;j++){

     let state = grid [i][j];

     if(i ==0 || i == columns-1 || j ==0 || j== rows-1){ //Edges
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
