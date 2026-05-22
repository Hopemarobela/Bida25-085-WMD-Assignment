(function () {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'index.html',    label: 'Home' },
    { href: 'about.html',    label: 'About Us' },
    { href: 'whyus.html',    label: 'Why Us' },
    { href: 'team.html',     label: 'Our Team' },
    { href: 'contact.html',  label: 'Contact Us' },
  ];

  const navLinks = links.map(l => {
    const active = currentPage === l.href ? ' class="active"' : '';
    return `<a href="${l.href}"${active}>${l.label}</a>`;
  }).join('');

  
  const planeSVG = `
  <div class="floating-plane-wrap" aria-hidden="true">
    <img 
      src="images/f35-cutout.png" 
      alt="F-35 Lightning II" 
      class="floating-plane">
    <div class="plane-glow"></div>
  </div>`;

  const headerHTML = `
<header>
  <div class="header-inner">
    <a href="index.html" class="logo-wrap">
      <img src="images/1PSSH.jpg" alt="Air Tech Aviation School Logo">
      <span class="logo-text">AIR <span>TECH</span></span>
    </a>
    <nav id="main-nav">
      ${navLinks}
      <a href="contact.html" class="nav-cta">Enroll Now</a>
    </nav>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
<div class="divider"></div>`;

  const footerHTML = `
<div class="divider"></div>
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo-wrap">
          <img src="images/1PSSH.jpg" alt="Air Tech Logo" style="height:36px;">
          <span class="logo-text">AIR <span>TECH</span></span>
        </a>
        <p>Empowering the next generation of female aviators in Botswana and the SADC region.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="whyus.html">Why Us</a></li>
          <li><a href="team.html">Our Team</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Programs</h4>
        <ul>
          <li><a href="#">Commercial Pilot License</a></li>
          <li><a href="#">Drone Operations</a></li>
          <li><a href="#">Air Traffic Control</a></li>
          <li><a href="#">Aircraft Maintenance</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="#">Maun, Botswana</a></li>
          <li><a href="mailto:info@airtech.ac.bw">info@airtech.ac.bw</a></li>
          <li><a href="tel:+26768000000">+267 68 000 000</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 Air Tech Aviation School. All rights reserved.</p>
      <div class="footer-socials">
        <a href="#" class="social-link" aria-label="Facebook">f</a>
        <a href="#" class="social-link" aria-label="Instagram">in</a>
        <a href="#" class="social-link" aria-label="LinkedIn">li</a>
      </div>
    </div>
  </div>
</footer>`;

 
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

 
  document.body.insertAdjacentHTML('beforeend', footerHTML);

 
  if (currentPage === 'index.html' || currentPage === '') {
    document.body.insertAdjacentHTML('beforeend', planeSVG);
  }

  
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('main-nav').classList.toggle('open');
  });
})();
