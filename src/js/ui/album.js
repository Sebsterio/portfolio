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
