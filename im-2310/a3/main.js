    /* when I need to draw and fuction making, also take 2d info */
const canvas = document.getElementById("canvas");
canvas.width = window.innerwidth - 60;
canvas.height = 400;

let context = canvas.getContext("2d");

context.fillRect(0, 0, canvas.width, canvas.height);

let draw_color = "black";
let draw_width = "2";
let is_drawing = false;

    /* about mouse function */
canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

function start(event) {
is_drawing = true;
context.beginPath();
/* the location, which the mouse is clicked */
context.moveTo(event.clientX - canvas.offsetLeft,
               event.clientY - canvas.offsetTop);
event.preventDefault();
}

/* The drawing function */
function draw(event) {
   if ( is_drawing) {
       context.lineTo(event.clientX - canvas.offsetLeft,
                      event.clientY - canvas.offsetTop);
       context.strokeStyle = draw_color;
       context.lineWidth = draw_width;
       context.lineCap = "round";
       context.lineJoin = "round";               
       context.stroke();
   }
}


