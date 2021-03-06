/*! portfolio v1.0.0 | (c) 2020  | ISC License | git+https://github.com/Sebsterio/portfolio.git */
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

const icons = {
	site: `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 194.818 194.818"><title>External</title><g><path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"></path><path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"></path></g></svg>`,
	// preview: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve"><g><g><path d="M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035 c-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201 C513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418 c26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418 C447.361,287.923,358.746,385.406,255.997,385.406z"/></g></g><g><g><path d="M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275 s101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516 s30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`,
	// preview: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M4626.4,4998C2554,4839.9,780.6,3362.8,256.9,1354.7c-205-790.4-210-1669.7-9.9-2452.7c516.2-2045.2,2314.4-3544.5,4416.4-3682.9c1193-79,2351.5,266.8,3307.4,990.5c259.4,195.1,731.1,666.9,926.3,926.3c1459.8,1931.6,1311.6,4611.6-350.7,6350.5C7521.3,4555.8,6091.1,5109.1,4626.4,4998z M5673.7,2132.7c355.7-69.2,600.2-153.1,968.3-335.9c649.6-321.1,1269.6-859.6,1731.5-1506.7l155.6-219.8l-49.4-81.5c-175.4-298.9-691.6-869.5-1035-1148.6c-526.1-424.8-1114-711.4-1734-849.7c-293.9-64.2-1128.8-64.2-1422.7,0c-620,138.3-1205.4,424.9-1734,849.7C2210.7-880.7,1694.5-312.6,1519.1-13.7l-49.4,84l153.1,214.9c716.3,997.9,1731.5,1682.1,2759,1857.5c128.4,22.2,279.1,44.5,333.5,49.4C4912.9,2211.8,5429.2,2179.6,5673.7,2132.7z"/><path d="M4698,1861c-706.4-128.4-1286.9-666.9-1469.7-1358.5c-56.8-219.8-56.8-674.3,2.5-889.2c180.3-657,696.6-1168.3,1336.3-1323.9c229.7-56.8,637.3-56.8,864.5,0c516.3,126,978.1,501.4,1210.3,988c128.4,274.2,170.4,457,170.4,780.5c0,335.9-39.5,516.2-180.3,802.8c-227.2,461.9-622.4,795.4-1126.3,951C5310.6,1870.9,4890.7,1898.1,4698,1861z M5283.4,1255.9C5812,1120,6182.5,682.8,6224.5,149.3c61.7-765.7-639.7-1420.3-1398-1304.2c-662,98.8-1138.7,726.2-1044.8,1375.8c32.1,219.8,158.1,494,301.3,657C4381.9,1213.9,4861.1,1364.5,5283.4,1255.9z"/><path d="M4789.4,922.4c-251.9-61.7-484.1-256.9-595.3-501.4c-61.8-130.9-71.6-185.3-71.6-363.1c0-187.7,9.9-229.7,79-373c96.3-195.1,251.9-345.8,447.1-437.2c118.6-54.3,175.4-66.7,350.8-66.7c249.5,0,419.9,66.7,602.7,234.7c200.1,182.8,321.1,516.2,274.2,755.8l-14.8,91.4l-46.9-76.6c-130.9-214.9-444.6-261.8-632.3-98.8c-116.1,103.7-158.1,190.2-158.1,340.9c0,192.7,91.4,328.5,271.7,402.6l84,37.1l-133.4,39.5C5108.1,949.6,4917.9,954.5,4789.4,922.4z"/></g></g></svg>`,
	// preview: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><path d="M643.8,410.9c0,31.5-24.7,56.7-55.7,56.7c-31,0-56.2-25.2-56.2-56.7c0-31,25.2-56.2,56.2-56.2c3.9,0,7.3,1.4,11.2,1.9c-28.1-19.9-62.5-32-99.3-32c-95.9,0-173.4,78.4-173.4,175.3c0,96.3,77.5,174.8,173.4,174.8c95.9,0,173.3-78.4,173.3-174.8c0-37.3-12.1-72.2-32-100.2C642.4,403.7,643.8,407,643.8,410.9z"/><path d="M980.8,483.1C899.9,334.9,709.2,185.3,500,185.3c-209.2,0-400,149.6-480.3,297.8L10,500l9.7,16.9C100,664.6,290.8,814.7,500,814.7c209.2,0,399.9-150.1,480.8-297.8L990,500L980.8,483.1z M500,745c-172.4,0-335.6-123.5-410.1-245C164.4,378,327.6,255,500,255c172.3,0,335.5,123,410.1,245C835.5,621.5,672.3,745,500,745z"/></g></svg>`,
	preview: `<svg xmlns="http://www.w3.org/2000/svg" role="img" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><title>Preview</title><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M4626.4,4998C2554,4839.9,780.6,3362.8,256.9,1354.7c-205-790.4-210-1669.7-9.9-2452.7c516.2-2045.2,2314.4-3544.5,4416.4-3682.9c1193-79,2351.5,266.8,3307.4,990.5c259.4,195.1,731.1,666.9,926.3,926.3c1459.8,1931.6,1311.6,4611.6-350.7,6350.5C7521.3,4555.8,6091.1,5109.1,4626.4,4998z M5673.7,2132.7c355.7-69.2,600.2-153.1,968.3-335.9c649.6-321.1,1269.6-859.6,1731.5-1506.7l155.6-219.8l-49.4-81.5c-175.4-298.9-691.6-869.5-1035-1148.6c-526.1-424.8-1114-711.4-1734-849.7c-293.9-64.2-1128.8-64.2-1422.7,0c-620,138.3-1205.4,424.9-1734,849.7C2210.7-880.7,1694.5-312.6,1519.1-13.7l-49.4,84l153.1,214.9c716.3,997.9,1731.5,1682.1,2759,1857.5c128.4,22.2,279.1,44.5,333.5,49.4C4912.9,2211.8,5429.2,2179.6,5673.7,2132.7z"/><path d="M4698,1861c-706.4-128.4-1286.9-666.9-1469.7-1358.5c-56.8-219.8-56.8-674.3,2.5-889.2c180.3-657,696.6-1168.3,1336.3-1323.9c229.7-56.8,637.3-56.8,864.5,0c516.3,126,978.1,501.4,1210.3,988c128.4,274.2,170.4,457,170.4,780.5c0,335.9-39.5,516.2-180.3,802.8c-227.2,461.9-622.4,795.4-1126.3,951C5310.6,1870.9,4890.7,1898.1,4698,1861z M5283.4,1255.9C5812,1120,6182.5,682.8,6224.5,149.3c61.7-765.7-639.7-1420.3-1398-1304.2c-662,98.8-1138.7,726.2-1044.8,1375.8c32.1,219.8,158.1,494,301.3,657C4381.9,1213.9,4861.1,1364.5,5283.4,1255.9z"/><path d="M4789.4,922.4c-251.9-61.7-484.1-256.9-595.3-501.4c-61.8-130.9-71.6-185.3-71.6-363.1c0-187.7,9.9-229.7,79-373c96.3-195.1,251.9-345.8,447.1-437.2c118.6-54.3,175.4-66.7,350.8-66.7c249.5,0,419.9,66.7,602.7,234.7c200.1,182.8,321.1,516.2,274.2,755.8l-14.8,91.4l-46.9-76.6c-130.9-214.9-444.6-261.8-632.3-98.8c-116.1,103.7-158.1,190.2-158.1,340.9c0,192.7,91.4,328.5,271.7,402.6l84,37.1l-133.4,39.5C5108.1,949.6,4917.9,954.5,4789.4,922.4z"/></g></g></svg>`,
	github: `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 438.549 438.549"><title>GitHub</title><path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"></path></svg>`,
	codepen: `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 31.665 31.665"><title>Codepen</title><path d="M16.878,0.415c-0.854-0.565-1.968-0.552-2.809,0.034L1.485,9.214c-0.671,0.468-1.071,1.233-1.071,2.052v9.444 c0,0.84,0.421,1.623,1.122,2.086l12.79,8.455c0.836,0.553,1.922,0.553,2.758,0l13.044-8.618c0.7-0.463,1.122-1.246,1.122-2.086 v-9.279c0-0.839-0.421-1.622-1.121-2.085L16.878,0.415z M26.621,10.645l-4.821,3.237l-4.521-3.288L17.25,4.127L26.621,10.645z M13.979,4.133v6.329l-4.633,3.24l-4.621-3.099L13.979,4.133z M3.458,13.722l2.991,2.004l-2.991,2.093V13.722z M14.058,27.215 l-9.331-6.258l4.661-3.258l4.67,3.133V27.215z M12.286,15.674l3.021-2.113l3.519,2.313l-3.119,2.095L12.286,15.674z M17.354,27.215 V20.83l4.463-2.991l4.805,3.159L17.354,27.215z M27.954,17.927l-3.168-2.082l3.168-2.125V17.927z"></path></svg>`,
	linkedin: `<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 430.117 430.117"><title>LinkedIn</title><path d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"></path></svg>`,
	// email: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 477.867 477.867" style="enable-background:new 0 0 477.867 477.867;" xml:space="preserve"><g><g><path d="M460.8,68.267H17.067C7.641,68.267,0,75.908,0,85.333v307.2c0,9.426,7.641,17.067,17.067,17.067H460.8    c9.426,0,17.067-7.641,17.067-17.067v-307.2C477.867,75.908,470.226,68.267,460.8,68.267z M432.811,102.4L238.933,251.529    L45.056,102.4H432.811z M443.733,375.467h-409.6V137.062L228.54,286.6c6.13,4.707,14.657,4.707,20.787,0l194.406-149.538V375.467z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`,
	email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><title>Email</title><path d="M 15.203125 17.136719 L 15.109375 17.136719 C 14.390625 19.15625 13.089844 20.164063 11.199219 20.164063 C 9.78125 20.164063 8.640625 19.636719 7.773438 18.578125 C 6.902344 17.523438 6.46875 16.058594 6.46875 14.1875 C 6.46875 11.769531 7.070313 9.800781 8.273438 8.28125 C 9.472656 6.765625 10.921875 6.007813 12.613281 6.007813 C 14.144531 6.007813 15.105469 6.625 15.496094 7.863281 L 15.558594 7.863281 L 15.710938 6.292969 L 19.175781 6.292969 C 18.714844 10.796875 18.480469 13.738281 18.480469 15.125 C 18.480469 16.605469 18.871094 17.34375 19.652344 17.34375 C 20.476563 17.34375 21.152344 16.78125 21.6875 15.664063 C 22.21875 14.542969 22.488281 13.078125 22.488281 11.273438 C 22.488281 8.800781 21.722656 6.773438 20.191406 5.191406 C 18.660156 3.613281 16.527344 2.820313 13.785156 2.820313 C 10.847656 2.820313 8.40625 3.875 6.460938 5.984375 C 4.515625 8.09375 3.542969 10.664063 3.542969 13.699219 C 3.542969 16.636719 4.402344 18.949219 6.121094 20.640625 C 7.84375 22.332031 10.214844 23.179688 13.246094 23.179688 C 15.558594 23.179688 17.671875 22.726563 19.59375 21.816406 L 19.59375 24.84375 C 17.835938 25.613281 15.578125 26 12.816406 26 C 9.023438 26 5.941406 24.882813 3.566406 22.648438 C 1.1875 20.410156 0 17.40625 0 13.632813 C 0 9.785156 1.269531 6.554688 3.804688 3.933594 C 6.339844 1.3125 9.605469 0 13.601563 0 C 17.296875 0 20.289063 1.015625 22.574219 3.050781 C 24.859375 5.085938 26 7.769531 26 11.097656 C 26 13.835938 25.300781 16.03125 23.90625 17.6875 C 22.507813 19.339844 20.777344 20.167969 18.714844 20.167969 C 17.699219 20.167969 16.871094 19.886719 16.234375 19.328125 C 15.597656 18.765625 15.253906 18.035156 15.203125 17.136719 Z M 13.152344 8.765625 C 12.230469 8.765625 11.476563 9.308594 10.898438 10.390625 C 10.316406 11.476563 10.027344 12.730469 10.027344 14.15625 C 10.027344 15.171875 10.226563 15.960938 10.621094 16.527344 C 11.015625 17.09375 11.523438 17.375 12.152344 17.375 C 13.117188 17.375 13.878906 16.84375 14.433594 15.773438 C 14.984375 14.707031 15.261719 13.28125 15.261719 11.496094 C 15.261719 10.648438 15.070313 9.984375 14.683594 9.496094 C 14.300781 9.011719 13.789063 8.765625 13.152344 8.765625 Z"></path></svg>`,
	flickr: `<svg xmlns="http://www.w3.org/2000/svg" role="img" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 34"> <title>Flickr</title> <g>	<path d="M17,0C7.611,0,0,7.61,0,17c0,9.391,7.611,17,17,17c9.389,0,17-7.609,17-17C34,7.61,26.389,0,17,0z M10.727,22.001   c-2.762,0-5.001-2.241-5.001-5.002c0-2.762,2.239-5,5.001-5c2.761,0,5.001,2.238,5.001,5C15.728,19.76,13.488,22.001,10.727,22.001   z M23.273,22.001c-2.762,0-5-2.241-5-5.002c0-2.762,2.238-5,5-5s5,2.238,5,5C28.273,19.76,26.035,22.001,23.273,22.001z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`,
};

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

(function (icons) {
	document.querySelectorAll(".social-link").forEach((link) => {
		const dataTag = link.dataset.svg;
		const svg = icons[dataTag];
		if (dataTag && svg) link.innerHTML = svg;
	});
})(icons);
