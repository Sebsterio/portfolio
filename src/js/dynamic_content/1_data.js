// name:          Displayed when tile active or not active,
// type:          Name superscript; displayed when tile active
// displayedTags: Displayed when tile active
// hiddenTags:    For filtering only
// blurb:         Shown when tile active
// links:         Displayed if not empty
// image:         500x500

const projects = [
	// --------------------- Animalysis ---------------------
	{
		name: "Animalysis",
		type: "web_app",
		displayedTags: ["React", "Node", "Mongo", "PWA"],
		hiddenTags: ["commercial"],
		blurb:
			"App for streamlining the process of reporting pet health problems to vet clinics",
		links: [
			{ type: "preview", url: "" },
			{ type: "site", url: "https://animalysis.com/demo" },
			{ type: "github", url: "https://github.com/Sebsterio/animalysis" },
		],
		image: "img/projects/animalysis.jpg",
	},
	// --------------------- Narbon ---------------------
	{
		name: "Narbon Fashion Store",
		type: "e-commerce",
		displayedTags: ["React", "Node", "APIs", "PWA"],
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
		type: "website",
		displayedTags: ["JavaScript", "SCSS", "APIs"],
		hiddenTags: ["commercial"],
		blurb: "Responsive brochure website with Instagarm feed integration",
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
			"Dynamically translated website with lazy-laoding and pre-loading of image formats optimized for given screen size and browser support",
		links: [
			{ type: "preview", url: "" },
			{ type: "site", url: "https://rolewicz-tsl.com/" },
			{ type: "github", url: "https://github.com/Sebsterio/rolewicz" },
		],
		image: "img/projects/rolewicz.jpg",
	},
	// --------------------- Warm Up ---------------------
	{
		name: "3D Gallery",
		type: "web_app",
		displayedTags: ["JavaScript", "SCSS", "APIs"],
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
		type: "website",
		displayedTags: ["WordPress"],
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
		type: "website",
		displayedTags: ["JavaScript", "SCSS"],
		hiddenTags: ["hobby"],
		blurb: "This website",
		links: [{ type: "github", url: "https://github.com/Sebsterio/portfolio" }],
		image: "img/projects/feedback-loop.jpg",
	},
	// --------------------- Say Color Name ---------------------
	{
		name: "Say Color",
		type: "code_challenge",
		displayedTags: ["JavaScript", "APIs"],
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
		type: "code_challenge",
		displayedTags: ["JavaScript", "Canvas"],
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
		type: "website",
		displayedTags: ["jQuery", "CSS", "APIs"],
		hiddenTags: ["coursework"],
		blurb: "My old portfolio made at the first code bootcamp I attended",
		links: [
			{ type: "preview", url: "" },
			{ type: "site", url: "" },
			{ type: "codepen", url: "https://codepen.io/Semaviro/full/oZZgRx" },
		],
		image: "img/projects/portfolio_v1.jpg",
	},
	// --------------------- Brickbreak ---------------------
	// {
	// 	name: "Brick-break",
	// 	type: "game",
	// 	displayedTags: ["JavaScript", "Canvas", "OOP"],
	// 	hiddenTags: ["coursework"],
	// 	blurb: "Browser game (currently desktop only; mobile support on the way)",
	// 	links: [
	// 		{ type: "preview", url: "" },
	// 		{ type: "site", url: "https://brickbreak-game.netlify.app/" },
	// 		{ type: "github", url: "https://github.com/Sebsterio/brickbreak-game" },
	// 	],
	// 	image: "img/projects/brickbreak.jpg",
	// },
];
