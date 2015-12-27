// # - ID selector
// . - class selector

var btn = document.querySelector('#toggle-cat');
var kitten = document.querySelector('.content');
var opacity = 0;

function toggleOpacityForKitten() {
  if ( opacity === 0 ) {
    opacity = 1;
  } else {
    opacity = 0;
  }

  kitten.style.opacity = opacity;
}

btn.addEventListener('click', toggleOpacityForKitten);
