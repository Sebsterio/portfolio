// ==================== Projects ====================

(function (projects) {
	const album = document.querySelector(".projects__grid");

	// Create Project HTML Element (wrapped in .projects__grid-cell)
	function buildProjectHtml(project) {
		const { type, name, blurb, displayedTags, links, image } = project;

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
					${displayedTags.map((tag) => `<li class="project__tag">${tag}</li>`).join("")}
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
							aria-label="${type}">
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
				<div class="project">
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
		projects.map((project) => {
			const { type, hiddenTags, displayedTags } = project;
			project.tags = [type, ...hiddenTags, ...displayedTags].map((tag) =>
				tag.toLowerCase()
			);
			project.html = buildProjectHtml(project);
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
