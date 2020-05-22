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
