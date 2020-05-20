// ==================== Album UI ===============

(function () {
	const projects = document.querySelectorAll(".project");

	projects.forEach((proj) =>
		proj.addEventListener("click", () => {
			if (proj.classList.contains("active")) proj.classList.remove("active");
			else {
				projects.forEach((proj) => proj.classList.remove("active"));
				proj.classList.add("active");
			}
		})
	);
})();
