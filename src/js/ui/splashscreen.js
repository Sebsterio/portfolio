//---------------------- Splashscreen ----------------------

(function () {
	const spinner = document.querySelector(".splashscreen--spinner");
	const popup = document.querySelector(".splashscreen--popup");

	function activatePage() {
		spinner.classList.add("splashscreen--hidden");
		setTimeout(() => {
			spinner.style.display = "none";
			// Enable onScroll transitions
			document.documentElement.classList.add("active");
		}, 800);
	}

	function hidePopup() {
		popup.classList.add("splashscreen--hidden");
	}

	// ------------------------- Init -------------------------

	activatePage();

	popup.addEventListener("click", hidePopup);
	setTimeout(hidePopup, 3000);
})();
