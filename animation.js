const text = document.querySelector('.cta-text');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('type');
    }
  });
});

observer.observe(text);
