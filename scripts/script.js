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




document.getElementById("whatsappForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let query = document.getElementById("query").value;

  let message = `Hello VinoraAI,%0A%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Requirement: ${query}`;

  let whatsappNumber = "919480253601";

  let url = `https://wa.me/${whatsappNumber}?text=${message}`;

  window.open(url, "_blank");
});
