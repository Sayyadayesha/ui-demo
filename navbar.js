// // navbar.js

// const menuToggle = document.getElementById('menuToggle');
// const dropdownMenu = document.getElementById('dropdownMenu');

// // Toggle dropdown on hamburger click
// menuToggle.addEventListener('click', () => {
//   dropdownMenu.classList.toggle('show');
// });

// // Close dropdown if clicking outside
// document.addEventListener('click', (event) => {
//   if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
//     dropdownMenu.classList.remove('show');
//   }
// });

// // Close dropdown with ESC key
// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') {
//     dropdownMenu.classList.remove('show');
//   }
// });

// // Highlight active nav link (optional)
// const currentPath = window.location.pathname.split("/").pop();
// document.querySelectorAll('.nav-link').forEach(link => {
//   if (link.getAttribute('href') === currentPath) {
//     link.classList.add('active');
//   }
// });
// document.addEventListener('DOMContentLoaded', function () {
//   const toggle = document.getElementById('menuToggle');
//   const dropdown = document.getElementById('dropdownMenu');

//   toggle.addEventListener('click', () => {
//     dropdown.classList.toggle('active');
//   });

//   window.addEventListener('click', (e) => {
//     if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
//       dropdown.classList.remove('active');
//     }
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const dropdownMenu = document.getElementById("dropdownMenu");

  if (menuToggle && dropdownMenu) {
    menuToggle.addEventListener("click", function () {
      dropdownMenu.classList.toggle("show");
    });

    // Optional: Hide menu if you click outside
    window.addEventListener("click", function (e) {
      if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("show");
      }
    });
  }
});
