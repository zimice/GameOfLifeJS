var grid;
const columns=16;
const rows=16;
function create2dArray(cols,rows){
  var arr= new Array(cols);
  for(i=0;i<arr.length;i++){
    arr[i] = new Array(rows);
  }
    return arr;
}
function fillGrid(){
  for(i=0;i<cols;i++){
    for(j=0;j<rows;j++){
      arr[i][j]=Math.round(Math.random());
    }
  }
}
function setup(){
  grid = create2dArray(columns,rows);
  var c = document.getElementById("GameField");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  var x=0;
  var y=0;
  ctx.rect(0, 0, 500, 500);
  ctx.stroke();
}
