
function toggleHuge(ev) {
  var el = ev.target;

  if (el.classList.contains('huge')) {
    el.classList.remove('huge');
  } else {
    el.classList.add('huge');
  }
}

// returns an array of all elements
// matching a selector
var p_array = document.querySelectorAll('p');


var container = document.querySelector('#sandbox');
container.addEventListener('click', toggleHuge);




