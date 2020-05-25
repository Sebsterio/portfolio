// name:          Displayed when tile active or not active,
// type:          Name superscript; displayed when tile active
// displayedTags: Displayed when tile active
// hiddenTags:    For filtering only
// blurb:         Shown when tile active
// links:         Displayed if not empty
// image:         500x500

const projects = [
	// --------------------- Narbon ---------------------
	{
		name: "Narbon Fashion Store",
		type: "e-commerce",
		displayedTags: ["React", "Node", "Database"],
		hiddenTags: ["commercial"],
		blurb:
			"Progressive web app with user authentication and animated transitions between lazy-loaded routes",
		links: [
			{ type: "preview", url: "" },
			{ type: "site", url: "https://www.shop.narbonpatricia.com/" },
			{ type: "github", url: "https://github.com/Sebsterio/narbon" },
		],
		image: "img/projects/narbon.jpg",
	},
	// --------------------- Nicole ---------------------
	{
		name: "NicoleRoss Personal Training",
		displayedTags: ["JavaScript", "SCSS", "APIs"],
		type: "website",
		hiddenTags: ["commercial"],
		blurb: "Responsive mobile-first website with Instagarm feed integration",
		links: [
			{ type: "preview", url: "" },
			{ type: "site", url: "https://nicoleross.fitness/" },
			{ type: "github", url: "https://github.com/Sebsterio/nicole-pt" },
		],
		image: "img/projects/nicole.jpg",
	},
	// --------------------- Rolewicz ---------------------
	{
		name: "Rolewicz Transport",
		type: "website",
		displayedTags: ["JavaScript", "SCSS", "Bootstrap"],
		hiddenTags: ["commercial"],
		blurb:
			"Dynamically translated website with lazy-laoding and pre-loading of image formats optimzed for given screen size and browser support",
		links: [
			{ type: "preview", url: "" },
			{ type: "site", url: "https://rolewicz-tsl.com/" },
			{ type: "github", url: "https://github.com/Sebsterio/rolewicz" },
		],
		image: "img/projects/rolewicz.jpg",
	},
	// --------------------- Warm Up ---------------------
	{
		name: "WarmUp 3D Album",
		type: "web_app",
		displayedTags: ["JavaScript", "SCSS", "Database"],
		hiddenTags: ["hobby"],
		blurb:
			"Animated and interactive 3D media album supporting photos, video, and Youtube",
		links: [
			{ type: "preview", url: "" },
			{ type: "site", url: "https://warmup.netlify.app/?edit&house=portfolio" },
			{ type: "github", url: "https://github.com/Sebsterio/warmup" },
		],
		image: "img/projects/warmup.jpg",
	},
	// --------------------- Cosmo ---------------------
	{
		name: "Cosmo Events",
		displayedTags: ["WordPress"],
		type: "website",
		hiddenTags: ["commercial"],
		blurb: "Responsive brochure website",
		links: [
			{ type: "preview", url: "" },
			{ type: "site", url: "https://www.cosmo-events.co.uk/" },
		],
		image: "img/projects/cosmo.jpg",
	},
	// --------------------- Portfolio 2 ---------------------
	{
		name: "Portfolio v.2",
		displayedTags: ["JavaScript", "SCSS"],
		type: "website",
		hiddenTags: ["hobby"],
		blurb: "This website",
		links: [{ type: "github", url: "https://github.com/Sebsterio/portfolio" }],
		image: "img/projects/feedback-loop.jpg",
	},
	// --------------------- Say Color Name ---------------------
	{
		name: "Say Color",
		displayedTags: ["JavaScript", "APIs"],
		type: "code_challenge",
		hiddenTags: ["hobby"],
		blurb: "Fun with speech recognition",
		links: [
			{ type: "preview", url: "" },
			{ type: "site", url: "https://say-color-name.netlify.app/" },
		],
		image: "img/projects/sayColor.jpg",
	},
	// --------------------- Paint Undo ---------------------
	{
		name: "Paint Undo",
		displayedTags: ["JavaScript", "Canvas"],
		type: "code_challenge",
		hiddenTags: ["hobby"],
		blurb: "Canvas drawing app with the undo feature",
		links: [
			{ type: "preview", url: "" },
			{ type: "site", url: "https://paint-undo.netlify.app/" },
		],
		image: "img/projects/paintUndo.jpg",
	},
	// --------------------- Portfolio 1 ---------------------
	{
		name: "Portfolio v.1",
		displayedTags: ["jQuery", "CSS", "APIs"],
		type: "website",
		hiddenTags: ["coursework"],
		blurb: "My old portfolio made at my first code bootcamp some years ago",
		links: [
			{ type: "preview", url: "" },
			{ type: "site", url: "" },
			{ type: "codepen", url: "https://codepen.io/Semaviro/full/oZZgRx" },
		],
		image: "img/projects/portfolio_v1.jpg",
	},
];
