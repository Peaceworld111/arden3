// Mobile navigation toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', function () {
    document.body.classList.toggle('menu-open');
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('menu-open');
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') document.body.classList.remove('menu-open');
  });
})();
