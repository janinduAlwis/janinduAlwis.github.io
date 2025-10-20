// Toggle mobile nav, smooth scroll and simple email validation

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle?.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
    toggle.querySelector('i')?.classList.toggle('fa-times'); // change icon
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        navLinks.classList.remove('mobile-open');
      }
    });
  });

  // Simple newsletter validation
  const form = document.getElementById('newsletter-form');
  const email = document.getElementById('mail');
  const msg = document.getElementById('form-msg');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = email.value.trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    if (!ok) {
      msg.textContent = 'Please enter a valid email address.';
      msg.style.color = '#ff6b6b';
      email.focus();
      return;
    }
    msg.textContent = 'Thanks — you are subscribed!';
    msg.style.color = '#9fffa8';
    form.reset();
    // TODO: send to server or API here
  });
});