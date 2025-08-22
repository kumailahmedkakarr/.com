document.addEventListener("DOMContentLoaded", function() {
  // Menu toggle
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // Animate skills
  const skills = document.querySelectorAll(".skill-bar");
  skills.forEach(skill => {
    const percentage = skill.getAttribute("data-skill");
    setTimeout(() => {
      skill.style.setProperty("--width", percentage + "%");
      skill.style.position = "relative";
      skill.querySelector("::after");
      skill.style.setProperty("width", percentage + "%");
    }, 500);
  });

  // Contact form
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    status.textContent = "Message sent successfully!";
    form.reset();
  });

  // Background animation
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const icons = [];
  const iconChars = ["🔒","🛡️","💻","🕵️","⚡"];
  for(let i=0;i<40;i++){
    icons.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      size: Math.random()*20 + 15,
      speed: Math.random()*0.6 + 0.3,
      char: iconChars[Math.floor(Math.random()*iconChars.length)]
    });
  }

  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    icons.forEach(icon=>{
      ctx.font = icon.size + "px Arial";
      ctx.fillStyle = "rgba(76, 175, 80, 0.4)";
      ctx.fillText(icon.char, icon.x, icon.y);
      icon.y -= icon.speed;
      if(icon.y < -50) icon.y = canvas.height + 50;
    });
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener("resize", ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
