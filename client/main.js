var socket = io();

var form = document.querySelector('form');


document.addEventListener("DOMContentLoaded", function() {
  const follower = document.getElementById("follower");
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  function moveFollower(event) {
    targetX = event.clientX;
    targetY = event.clientY;
  }

  function animate() {
    currentX += (targetX - currentX) * 0.15;
    currentY += (targetY - currentY) * 0.15;

    follower.style.left = currentX + 'px';
    follower.style.top = currentY + 'px';

    requestAnimationFrame(animate);
  }

  animate();

  document.addEventListener("mousemove", moveFollower);
});
