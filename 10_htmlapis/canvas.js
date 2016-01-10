var canvas = document.querySelector('canvas');

var ctx = canvas.getContext('2d');

function drawIt() {
  ctx.beginPath();
  ctx.strokeStyle = "hsl(249, 41%, 50%)";
  ctx.lineWidth = 6;
  ctx.moveTo(0, 0);
  ctx.lineTo(20, 10);
  ctx.lineTo(0, 20);
  ctx.stroke();
}

drawIt();
ctx.translate(100, 100);
ctx.rotate(Math.PI / 6);
ctx.scale(1.5,1.5);
drawIt();

