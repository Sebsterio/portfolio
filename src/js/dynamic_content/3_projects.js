// ==================== Projects ====================

(function (projects) {
	const album = document.querySelector(".projects__grid");

	// Create Project HTML Element (wrapped in .projects__grid-cell)
	function buildProjectHtml(project, i) {
		const { type, name, blurb, tech, links, image } = project;

		const zIndex = i * -1;

		const visual = `
			<div class="project__visual" 
					style="${image ? `background-image: url('${image}')` : ""}">
				<div class="project__visual-overlay"></div>
			</div>
		`;

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
		//data-rellax-speed="5"
		return `
			<div class="projects__grid-cell" style="--index: 0">
				<div class="project" style="z-index:${zIndex}">
					${visual}
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

	// Create element html and project tags
	function generateProjectsProps(projects) {
		projects.map((project, i) => {
			const { type, category, tech } = project;
			project.tags = [type, category, ...tech].map((tag) => tag.toLowerCase());
			project.html = buildProjectHtml(project, i);
		});
	}

	// Rebuild album with filtered projects array
	window.insertProjectsHtml = function (filter) {
		album.innerHTML = projects
			.filter(
				(project) => project.tags.indexOf(filter) > -1 || filter === "all"
			)
			.map((project, i) =>
				project.html.replace('style="--index: 0', 'style="--index:' + i)
			)
			.join("");
	};

	// ---------------- init ------------

	generateProjectsProps(projects);
	insertProjectsHtml("all");
})(projects);
