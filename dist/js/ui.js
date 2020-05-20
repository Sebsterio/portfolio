/*! portfolio v1.0.0 | (c) 2020  | ISC License | git+https://github.com/Sebsterio/portfolio.git */
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
