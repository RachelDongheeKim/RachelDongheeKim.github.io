    /* when I need to draw and fuction making, also take 2d info */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const colourPicker = document.getElementById("colour-picker");
const sizePicker = document.getElementById("size-picker");


canvas.width = canvas.parentElement.clientWidth;
canvas.height = canvas.parentElement.clientHeight;

var brushColour = '#0000ff';
colourPicker.value = brushColour;
var brushSize = 20;
sizePicker.value = brushSize;
var isDrawing = false;
ctx.lineCap = 'round';


    /* resize event listener to prevent stretching*/
window.addEventListener('resize', function(){
    /* when rezise the canvas, the drawned line is maintained*/
    var tempCanvas = ctx.getImageData(0,0,canvas.width, canvas.height);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
       /* when rezise the canvas, the drawned line is maintained*/
    ctx.putImageData(tempCanvas, 0, 0);
});


    /* about mouse function */
const mouse = {
    x: undefined,
    y: undefined,
}
canvas.addEventListener('mousedown', function(event){
  ctx.beginPath();
  ctx.fillStyle = brushColour;
  ctx.strokeStyle = brushColour;
  ctx.lineWidth = brushSize;
  isDrawing = true;
});

window.addEventListener('mouseup', function(event){
  if(isDrawing){
  isDrawing = false;
  }
 });

 canvas.addEventListener('mousemove', function(event){
    if(isDrawing){
        mouse.x = event.x;
        mouse.y = event.y;
        drawLine();
    }
 });
 
  /* about brush function (line size) */
function drawLine(){
   ctx.lineTo(mouse.x, mouse.y);
   ctx.stroke();
}

  /* Change the brush colour and size when selecting */
colourPicker.addEventListener('input', function(event){
   brushColour = event.target.value;
});

sizePicker.addEventListener('input', function(event){
    brushSize = event.target.value;
 });
