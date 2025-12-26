(function () {
  const img = document.getElementById('heroMain');
  if (!img) return;

  // Order: hero.jpg then hero1..hero4 (if present)
  const sources = [
    'assets/hero.jpg',
    'assets/hero1.jpg',
    'assets/hero2.jpg',
    'assets/hero3.jpg',
    'assets/hero4.jpg'
  ];

  // Keep only images that actually exist (best-effort in static hosting: assume all exist)
  let i = 0;

  function swap() {
    i = (i + 1) % sources.length;

    // trigger animation
    img.classList.remove('animate-in');
    // force reflow
    void img.offsetWidth;

    img.src = sources[i];
    img.classList.add('animate-in');
  }

  // Start after a short delay, then rotate every 4 seconds
  img.classList.add('animate-in');
  setInterval(swap, 4000);
})();