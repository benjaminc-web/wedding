document.querySelectorAll('.open').forEach(function (openElement) {
  openElement.addEventListener('click', function () {
    var container = this.closest('.topic');
    var answer = container.querySelector('.answer');
    var trigger = container.querySelector('.faq-t');

    // Toggle the 'expanded' class on the topic container
    container.classList.toggle('expanded');

    // Toggle the display of the answer
    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }

    // Toggle the rotation of the trigger element
    trigger.classList.toggle('faq-o');
  });
});
// script.js

window.onscroll = function() {
  var navbar = document.getElementById("navbar");
  var stickyClass = "sticky";

  if (window.pageYOffset > 100) {
    if (!navbar.classList.contains(stickyClass)) {
      navbar.classList.add(stickyClass);
    }
  } else {
    navbar.classList.remove(stickyClass);
  }
};

document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll("#navbar a");
  
  navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      navLinks.forEach(function(link) {
        link.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});