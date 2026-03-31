  // Smooth active nav on scroll
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
          if (window.scrollY >= s.offsetTop - 80) current = s.id;
      });
      navLinks.forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href') === '#' + current) a.classList.add('active');
      });
  });

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile nav when a link is clicked
  mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          hamburger.classList.remove('open');
          mobileNav.classList.remove('open');
          document.body.style.overflow = '';
      });
  });