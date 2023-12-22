document.querySelectorAll('.open').forEach(function (openElement) {
  openElement.addEventListener('click', function () {
    var container = this.closest('.topic');
    var answer = container.querySelector('.answer');
    var trigger = container.querySelector('.faq-t');
  });
});