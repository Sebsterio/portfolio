/*! portfolio v1.0.0 | (c) 2020  | ISC License | git+https://github.com/Sebsterio/portfolio.git */
// ==================== Album UI ===============

(function () {
	const projects = [...document.querySelectorAll(".project")];

	// Toggle the display of additional project details
	function toggleActive(e, project) {
		// Ignore button click
		if (e.target.closest(".project__button")) return;

		// Disable clicked project if active
		if (project.classList.contains("active")) {
			project.classList.remove("active");
		}

		// Disable all and enable clicked
		else {
			projects.forEach((proj) => proj.classList.remove("active"));
			project.classList.add("active");
		}
	}

	projects.forEach((project) =>
		project.addEventListener("click", (e) => toggleActive(e, project))
	);
})();

(function () {
	const containers = [...document.querySelectorAll(".projects__grid-cell")];
	const form = document.querySelector(".filters__form");
	const toggle = document.querySelector(".filters__toggle");

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
