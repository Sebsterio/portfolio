/*! portfolio v1.0.0 | (c) 2020  | ISC License | git+https://github.com/Sebsterio/portfolio.git */
// ==================== Album UI ===============

(function () {
	const projects = [...document.querySelectorAll(".project")];

	// Toggle the display of additional project details
	function toggleActive(project) {
		// Disable clicked project if active
		if (project.classList.contains("active"))
			project.classList.remove("active");
		// Disable all and enable clicked
		else {
			projects.forEach((proj) => proj.classList.remove("active"));
			project.classList.add("active");
		}
	}

	projects.forEach((project) =>
		project.addEventListener("click", () => toggleActive(project))
	);
})();

(function () {
	const containers = [...document.querySelectorAll(".projects__grid-cell")];
	const form = document.querySelector(".filters__form");
	const toggle = document.querySelector(".filters__toggle");

	function filterProjects(e) {
		// Ignore dropdown toggle
		if (!e.target.classList.contains("filters__filter")) return;

		const filter = this.filter.value;

		containers.forEach((el) => {
			const tags = el.dataset.tags;
			if (tags.includes(filter) || filter === "all")
				el.classList.remove("hidden");
			else el.classList.add("hidden");
		});
	}

	// TODO later <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	// function hideDropdown() {
	// 	toggle.setAttribute.checked = null; // remove html attr
	// 	toggle.checked = true; // set input value (true = disabled)
	// }

	form.addEventListener("input", () => {
		filterProjects;
		// hideDropdown;
	});
})();
