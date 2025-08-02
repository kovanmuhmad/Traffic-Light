const lights = document.querySelectorAll('.light');
let currentIndex = 0;

function changeLight() {
  // remove active from all
  lights.forEach(light => light.classList.remove('active'));

  // add active to current
  lights[currentIndex].classList.add('active');

  // next light index
  currentIndex = (currentIndex + 1) % lights.length;
}

// Start with red
changeLight();

// Change every 2 seconds
setInterval(changeLight, 2000);
