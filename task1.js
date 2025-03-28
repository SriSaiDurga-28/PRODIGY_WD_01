// Navigation functionality without scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Hide all sections
      document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
      });

      // Display only the target section
      targetElement.style.display = 'block';
    }
  });
});

// Initially display the first section and hide others
document.querySelectorAll('section').forEach((section, index) => {
  section.style.display = index === 0 ? 'block' : 'none';
});
