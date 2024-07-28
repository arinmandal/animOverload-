let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = 'skyblue';

let c = canvas.getContext('2d');

// Rectangle

for (let i = 0; i < 100; i++){
  let x = Math.random() * innerWidth;
  let y = Math.random() * innerWidth;
  c.fillStyle= `hsl(${Math.random() * 360}, 50%, 50%)`;
  c.fillRect(x, y, 50, 50);
  
}

// Circle
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
