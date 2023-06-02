    /* when I need to draw and fuction making, also take 2d info */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const colourPicker = document.getElementById("colour-picker");
const sizePicker = document.getElementById("size-picker");

 /* var canvasBox = canvas.getBoundingClientRect(); - I want to modify the mouse sensitive, but
 If I use this, brush doesn't work*/ 
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
    canvas.width = window.innerWidth;  /*  canvas.width = canvas.parentElement.clientWidth; - If I use this, brush doesn't work*/
    canvas.height = window.innerHeight; /*  canvas.height = canvas.parentElement.clientHeight; - If I use this, brush doesn't work*/
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
  console.log("test")
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

 const video = document.getElementById("video");
 const videohover = document.getElementById("videohover");
 videohover.addEventListener('mouseenter', function(){
   video.style.display="block";
});

const audio = document.getElementById("audio");
const audiohover = document.getElementById("audiohover");
audiohover.addEventListener('mouseenter', function(){
  audio.style.display="block";
});

