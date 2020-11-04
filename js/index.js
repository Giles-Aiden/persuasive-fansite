function darkTheme() {
	var body = document.body;
	var tux = document.getElementById('tux');
	body.classList.toggle('dark-theme');
	if (tux.src.slice(tux.src.length - 7, tux.src.length) == 'tux.png') {
		tux.src = 'images/coolerTux.png';
	} else {
		tux.src = 'images/tux.png';
	}
}
