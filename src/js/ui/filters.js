(function () {
	const form = document.querySelector(".filters__form");
	// const toggle = document.querySelector(".filters__toggle");

	function filterProjects(e) {
		// Ignore dropdown toggle
		if (!e.target.classList.contains("filters__filter")) return;

		// rebuilding instead of disabling due to the nth-child styles for enlarged first row
		window.insertProjectsHtml(form.filter.value);
	}

	// TODO later <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	// function hideDropdown() {
	// 	toggle.setAttribute.checked = null; // remove html attr
	// 	toggle.checked = true; // set input value (true = disabled)
	// }

	form.addEventListener("input", (e) => {
		filterProjects(e);
		// hideDropdown;
	});
})();
