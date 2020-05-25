// ==================== Album UI ===============

(function () {
	const gallery = document.querySelector(".projects__gallery");

	// Toggle the display of additional project details
	function toggleProject(e) {
		const project = e.target.closest(".project");

		// Ignore button click
		if (e.target.closest(".project__button")) return;

		// Disable clicked project if active
		if (project.classList.contains("active")) {
			project.classList.remove("active");
		}

		// Disable all and enable clicked
		else {
			// Query each time as gallery gets rebuild on filter input
			const displayedProjects = [...gallery.querySelectorAll(".project")];
			displayedProjects.forEach((proj) => proj.classList.remove("active"));
			project.classList.add("active");
		}
	}

	gallery.addEventListener("click", (e) => toggleProject(e));
})();
