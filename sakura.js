const canvas = document.getElementById('sakuraCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numPetals = 100;
const petals = [];

class Petal {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 4 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 3 + 1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 182, 193, 0.8)';
    ctx.fill();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.y > canvas.height) {
      this.y = 0 - this.radius;
      this.x = Math.random() * canvas.width;
    }
  }
}

function init() {
  for (let i = 0; i < numPetals; i++) {
    petals.push(new Petal());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  petals.forEach((petal) => {
    petal.update();
    petal.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// okkkkkkk

