function darkThemeIndex() {
	var body = document.body;
	var tux = document.getElementById('tux');
	body.classList.toggle('dark-theme');
  //Checks if the last 7 letters in the SRC are equal to tux.png, and changes image based on result
  if (tux.src.slice(tux.src.length - 7, tux.src.length) == 'tux.png') {
		tux.src = 'images/coolerTux.png';
	} else {
		tux.src = 'images/tux.png';
	}
}

function darkThemeLinux() {
	var body = document.body;
  var items = document.getElementsByClassName('item');
	body.classList.toggle('dark-theme');
  for (i = 0; i < items.length; i++) {
    items[i].classList.toggle('term');
  }
}
