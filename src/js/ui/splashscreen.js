//---------------------- Splashscreen ----------------------

(function () {
	const splashscreen = document.querySelector(".splashscreen");

	splashscreen.classList.add("splashscreen--hidden");

	setTimeout(() => {
		splashscreen.style.display = "none";

		// Enable onScroll transitions
		document.documentElement.classList.add("active");
	}, 800);
})();
