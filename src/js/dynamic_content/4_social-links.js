(function (icons) {
	document.querySelectorAll(".social-link").forEach((link) => {
		const dataTag = link.dataset.svg;
		const svg = icons[dataTag];
		if (dataTag && svg) link.innerHTML = svg;
	});
})(icons);
