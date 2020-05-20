(function () {
	const containers = [...document.querySelectorAll(".projects__grid-cell")];
	const form = document.querySelector(".filters__form");
	const toggle = document.querySelector(".filters__toggle");

	function filterProjects(e) {
		// Ignore dropdown toggle
		if (!e.target.classList.contains("filters__filter")) return;

		const filter = form.filter.value;
		console.log(filter);

		containers.forEach((el) => {
			const tags = el.dataset.tags;
			console.log(tags);
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

	form.addEventListener("input", (e) => {
		filterProjects(e);
		// hideDropdown;
	});
})();
