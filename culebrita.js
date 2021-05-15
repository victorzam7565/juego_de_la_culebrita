const STATE_RUNNING =1;
const STATE_LOSING =2;

const TICK = 80;
const SQUARE_SIZE =10;
const BOARD_WIDTH =50;
const BOARD_HEIGHT =50;
const GROW_SCALE = 10;
const DIRECTIONS_MAPS={
"A":[-1, 0],
"D":[1, 0],
"S":[0, 1],
"W":[0, 1],
"a":[-1, 0],
"d":[1, 0],
"s":[0, 1],
"w":[0, 1],
};
let state = {
canvas:null,
context:null,
snake :[{x:0,y:0}],
direction: {x:0,y:0},
prey: {x: 0, y: 0},
growing:0,
  runSTATE:STATE_RUNNING
  };
  function randomXY(){
return {
x: parseInt(Math.random() * BOARD_WIDTH),   
y: parseInt(Math.random ()* BOARD_HEIGHT )    
   };
  }

function tick(){
  }
function drawPixel(color,x,y){
state.context.fillStyke =color;
state.context.fillRect(
x * SQUARE_SIZE,
Y* SQUARE_SIZE,
SQUARE_SIZE,
SQUARE_SIZE
);

}
function draw(){
state.context.clearReact(0,0,500,500);


for (var idx =0; idx< state.snake.length; idx++){
  const {x,y} =state.snake[idx];
  drawPixel ("#22dd22",x,y);
}
const { x,y }=state.prey;
drawPixel

}



window.onload = function(){
state.canvas = document.querySelector("canvas");
state.context = state.canvas.getContext("2d");
 
window.onkeydown =function(e){
const direction = DIRECTIONS_MAP [e.key];
if (direction) {
const [x,y]= direction;
if (-x !== state.direction.x
    && -y !== state.direction.y)

{
state.direction.x= x;
state.direction.y = y;


}
}
tick();

}
};

