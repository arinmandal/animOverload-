let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');


// Rectangle
// c.fillRect{x, y, width, height}
c.fillStyle = 'yellow';
c.fillRect(100, 100, 100, 100)
c.fillStyle = 'green';
c.fillRect(300, 100, 100, 100)
c.fillStyle = 'orange';
c.fillRect(300, 300, 100, 100)
c.fillStyle = 'crimson';
c.fillRect(100, 300, 100, 100)

// line

c.beginPath();
// moveTo(x, y)
c.moveTo(30, 50);
// c.lineTo(x, y);
c.lineTo(30, 500);
c.lineTo(500, 500);
c.lineTo(500, 50);
c.lineTo(30, 50);
c.strokeStyle = "red";
c.stroke()


// Arc / circle
c.beginPath();

// c.arc(x, y, radius, startAngle, endAngle, counterclockwise)

c.arc(250, 250, 50, 0, Math.PI * 2);
c.strokeStyle = "blue";
c.stroke();

// multiple circles with for loops

// for (let i = 0; i < 50; i++) {
//     let x = Math.random() * innerWidth;
//     let y = Math.random() * innerHeight;
//     let radius = Math.random() * 20 + 20;
//     let color = `hsl(${Math.random() * 360}, 100%, 50%)`;

//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI * 2);
//     c.fillStyle = color;
//     c.fill();
// }


for (let i = 0; i < 20; i++){
  let x = Math.random() * innerWidth;
  let y = Math.random() * innerHeight;
  let radius = Math.random() * 30 + 30;
  let color = `hsl(${Math.random() * 360}, 50%, 50%)`;

  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2);
  c.fillStyle = color;
  c.fill();
}