document.querySelector('.button').addEventListener('hover', function () {
  this.setAttribute('scale', '0.6 0.6 0.6');
  console.log('I was hovered!');
});

var menu = document.querySelector('#menu');
menu.style.display = "none";