var inp = document.querySelector('#i-color');

function saveColor(e) {
  document.body.style.background = e.target.value;
  localStorage.setItem('color',
    JSON.stringify({ color: e.target.value }));
}

function restoreColor() {
  var data = localStorage.getItem('color');
  if (data != null) {
    data = JSON.parse(data);
    document.body.style.background = data.color;
    inp.value = data.color;
  }
}


inp.addEventListener('change', saveColor);

restoreColor();