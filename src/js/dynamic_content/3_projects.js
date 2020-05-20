// ==================== Projects ====================

(function () {
	const album = document.querySelector(".projects__grid");

	// Create Project HTML Element (wrapped in Projects__grid-cell)
	function buildProjectHtml(project) {
		const { type, name, category, blurb, tech, links, image } = project;

		const titleHtml = `
			<div class="project__title">
				<div class="project__type optional">
					${type.replace("_", " ")}
				</div>
				<div class="project__name">
					${name}
				</div>
			</div>
		`;

		const descriptionHtml = `
			<div class="project__description">
				<div class="project__blurb">
					${blurb}
				</div>
				<ul class="project__tags optional">
					${tech.map((tag) => `<li class="project__tag">${tag}</li>`).join("")}
				</ul>
			</div>
		`;

		function getButtonHtml(link) {
			const { type, url } = link;
			const disabled = url === "";
			const disabledClass = disabled ? "project__button--disabled" : "";
			return `
				<li class="project__button ${disabledClass}">
					<a href="${disabled ? "#" : url}" 
							target="_blank" 
							rel="nofollow noopener noreferrer" 
							aria-label="GitHub">
						${icons[type]}
					</a>
				</li>
			`;
		}
		const buttonsHtml = `
			<ul class="project__buttons">
				${links.map((link) => getButtonHtml(link)).join("")}
			</ul>
		`;

		return `
			<div class="projects__grid-cell"">
				<div class="project">
					<div class="project__visual" style="background-image: url('${image}')">
						<div class="project__visual-overlay"></div>
					</div>
					<div class="project__content-container">
						<div class="project__content">
							${titleHtml}
							${descriptionHtml}
							${buttonsHtml}
						</div>
					</div>
				</div>
			</div>
		`;
	}

	function generateProjectsProps(projects) {
		projects = projects.map((project) => {
			const { type, category, tech } = project;
			project.tags = [type, category, ...tech].map((tag) => tag.toLowerCase());
			project.html = buildProjectHtml(project);
		});
	}

	window.insertProjectsHtml = function (filter) {
		album.innerHTML = projects
			.filter(
				(project) => project.tags.indexOf(filter) > -1 || filter === "all"
			)
			.map((project) => project.html)
			.join("");
	};

	// ---------------- init ------------

	generateProjectsProps(projects);
	insertProjectsHtml("all");
})();
