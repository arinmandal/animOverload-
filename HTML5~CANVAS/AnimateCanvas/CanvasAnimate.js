let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = 'acid blue';
canvas.style.border = '1px solid'

let c = canvas.getContext('2d');

// c.beginPath();


var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = 4//velocity value
var dy = 4//
var radius = 30;
function animate() {
  requestAnimationFrame(animate);
  console.log('Animate');
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "red";
  c.stroke();

  x += dx;
  y += dy;
  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }

}

animate();