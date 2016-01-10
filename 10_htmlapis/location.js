function handleResult(pos) {
  console.log('found you');
  document.body.textContent = pos.coords.latitude + ',' +pos.coords.longitude;
}

navigator.geolocation.getCurrentPosition(handleResult);