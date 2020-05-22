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
	const form = document.querySelector(".filters__form");
	const mainLabel = document.querySelector(".filters__toggle-label span");
	const filterLabels = document.querySelectorAll(".filters__filter-label");
	// const toggle = document.querySelector(".filters__toggle");

	// Add 'label' prop to each input element, as reference to its label
	function assignLabelsToInputs(labels) {
		labels.forEach((label) => {
			if (label.htmlFor) {
				let input = document.getElementById(label.htmlFor);
				if (input) input.label = label;
			}
		});
	}

	// Update view
	function filterProjects(e) {
		// Ignore dropdown toggle
		if (!e.target.classList.contains("filters__filter")) return;

		const filterVal = form.filter.value;
		const filterText = form.querySelector(`input[value=${filterVal}]`).label
			.innerText;

		// Rebuilding instead of disabling due to the nth-child styles for enlarged first row
		window.insertProjectsHtml(filterVal);

		// "Filter by:"" label
		mainLabel.innerText = filterText;
	}

	// -------TODO later -------------------------------------<<<<<<<<<<<<<<
	// function hideDropdown() {
	// 	toggle.setAttribute.checked = null; // remove html attr
	// 	toggle.checked = true; // set input value (true = disabled)
	// }

	// ------------------------- Init --------------------------

	assignLabelsToInputs(filterLabels);

	form.addEventListener("input", (e) => {
		filterProjects(e);
		// hideDropdown;
	});
})();

(function () {
	const hero = document.querySelector(".introduction__content-el--hero");
	hero.addEventListener("click", () => hero.classList.toggle("animate"));
})();
