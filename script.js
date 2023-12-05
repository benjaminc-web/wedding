document.querySelectorAll('.open').forEach(function (openElement) {
  openElement.addEventListener('click', function () {
    var container = this.closest('.topic');
    var answer = container.querySelector('.answer');
    var trigger = container.querySelector('.faq-t');

    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      trigger.classList.remove('faq-o');
      container.classList.remove('expanded');
    } else {
      answer.style.display = 'block';
      trigger.classList.add('faq-o');
      container.classList.add('expanded');
    }
  });
});

