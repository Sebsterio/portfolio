/*! portfolio v1.0.0 | (c) 2020  | ISC License | git+https://github.com/Sebsterio/portfolio.git */
const projects = [
	{
		name: "Narbon Fashion Store",
		type: "e-commerce",
		category: "commercial",
		blurb:
			"Modern progressive web app with animated transitions between lazy-loaded routes",
		tags: ["React", "Node", "Database"],
		links: [
			{ type: "preview", url: "" },
			{ type: "site", url: "https://www.shop.narbonpatricia.com/" },
			{ type: "github", url: "" },
		],
		preview: true,
		image: "img/projects/narbon.jpg",
	},
	{
		name: "NicoleRoss Personal Training",
		type: "website",
		category: "commercial",
		blurb: "Responsive mobile-first website with Instagarm feed integration",
		tags: ["JavaScript", "SCSS"],
		links: [
			{ type: "preview", url: "" },
			{ type: "site", url: "https://nicoleross.fitness/" },
			{ type: "github", url: "" },
		],
		preview: true,
		image: "img/projects/nicole.jpg",
	},
	{
		name: "Rolewicz Transport",
		type: "website",
		category: "commercial",
		blurb:
			"Dynamically translated website with lazy-laoding and pre-loading of image formats optimzed for given screen size and browser support",
		tags: ["JavaScript", "SCSS", "Bootstrap"],
		links: [
			{ type: "preview", url: "" },
			{ type: "site", url: "https://rolewicz-tsl.com/" },
			{ type: "github", url: "" },
		],
		preview: true,
		image: "img/projects/rolewicz.jpg",
	},
	{
		name: "WarmUp Community Album",
		type: "web_app",
		category: "hobby",
		blurb:
			"Animated and interactive 3D media album supporting photos, video, and Youtube",
		tags: ["JavaScript", "SCSS", "Database"],
		links: [
			{ type: "preview", url: "" },
			{ type: "site", url: "https://warmup.netlify.app/?edit&house=portfolio" },
			{ type: "github", url: "" },
		],
		preview: true,
		image: "img/projects/warmup.jpg",
	},
	{
		name: "Cosmo Events",
		type: "website",
		category: "commercial",
		blurb: "Responsive brochure website",
		tags: ["WordPress"],
		links: [
			{ type: "preview", url: "" },
			{ type: "site", url: "https://www.cosmo-events.co.uk/" },
			{ type: "github", url: "" },
		],
		preview: true,
		image: "img/projects/cosmo.jpg",
	},
	{
		name: "Portfolio v.1",
		type: "website",
		category: "coursework",
		blurb: "My old portfolio made at my first code bootcamp some years ago",
		tags: ["JavaScript", "CSS"],
		links: [
			{ type: "preview", url: "" },
			{ type: "site", url: "" },
			{ type: "codepen", url: "https://codepen.io/Semaviro/full/oZZgRx" },
		],
		preview: true,
		image: "img/projects/portfolio_v1.jpg",
	},
];

// Missing Filters: WordPress, CSS

const icons = {
	site: `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 194.818 194.818"><title>External</title><g><path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"></path><path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"></path></g></svg>`,
	preview: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve"><g><g><path d="M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035 c-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201 C513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418 c26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418 C447.361,287.923,358.746,385.406,255.997,385.406z"/></g></g><g><g><path d="M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275 s101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516 s30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`,
	github: `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 438.549 438.549"><title>GitHub</title><path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"></path></svg>`,
	codepen: `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 31.665 31.665"><title>Codepen</title><path d="M16.878,0.415c-0.854-0.565-1.968-0.552-2.809,0.034L1.485,9.214c-0.671,0.468-1.071,1.233-1.071,2.052v9.444 c0,0.84,0.421,1.623,1.122,2.086l12.79,8.455c0.836,0.553,1.922,0.553,2.758,0l13.044-8.618c0.7-0.463,1.122-1.246,1.122-2.086 v-9.279c0-0.839-0.421-1.622-1.121-2.085L16.878,0.415z M26.621,10.645l-4.821,3.237l-4.521-3.288L17.25,4.127L26.621,10.645z M13.979,4.133v6.329l-4.633,3.24l-4.621-3.099L13.979,4.133z M3.458,13.722l2.991,2.004l-2.991,2.093V13.722z M14.058,27.215 l-9.331-6.258l4.661-3.258l4.67,3.133V27.215z M12.286,15.674l3.021-2.113l3.519,2.313l-3.119,2.095L12.286,15.674z M17.354,27.215 V20.83l4.463-2.991l4.805,3.159L17.354,27.215z M27.954,17.927l-3.168-2.082l3.168-2.125V17.927z"></path></svg>`,
	linkedin: `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 430.117 430.117"><title>LinkedIn</title><path d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"></path></svg>`,
};

// ==================== Projects ====================

(function () {
	const album = document.querySelector(".projects__grid");

	// Create Project HTML Element (wrapped in Projects__grid-cell)
	function buildProjectHtml(project) {
		const { type, name, category, blurb, tags, links, image } = project;

		const tagsString = tags.map((tag) => tag.toLowerCase()).join(" ");

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
					${tags.map((tag) => `<li class="project__tag">${tag}</li>`).join("")}
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
			<div class="projects__grid-cell" data-tags="${
				type + " " + category + " " + tagsString
			}">
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
	album.innerHTML = projects
		.map((project) => buildProjectHtml(project))
		.join("");
})();
