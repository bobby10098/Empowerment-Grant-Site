// Clean & modern depth motion (desktop only)
const depthElements = document.querySelectorAll(".depth");

function handleMouseMove(e) {
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX - innerWidth / 2) / innerWidth;
  const y = (e.clientY - innerHeight / 2) / innerHeight;

  depthElements.forEach(el => {
    el.style.transform =
      `perspective(1000px)
       rotateY(${x * 6}deg)
       rotateX(${y * -6}deg)
       translateZ(20px)`;
  });
}

// Disable heavy effects on mobile (clean UX)
if (window.innerWidth > 768) {
  window.addEventListener("mousemove", handleMouseMove);
}

// Smooth fade-in on scroll (modern feel)
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("section, .card, .testimonial").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});
