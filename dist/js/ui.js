/*! portfolio v1.0.0 | (c) 2020  | ISC License | git+https://github.com/Sebsterio/portfolio.git */
// ==================== Album UI ===============

(function () {
	const projects = [...document.querySelectorAll(".project")];

	// Toggle the display of additional project details
	function toggleActive(e, project) {
		// Ignore button click
		if (e.target.closest(".project__button")) return;

		// Disable clicked project if active
		if (project.classList.contains("active")) {
			project.classList.remove("active");
		}

		// Disable all and enable clicked
		else {
			projects.forEach((proj) => proj.classList.remove("active"));
			project.classList.add("active");
		}
	}

	projects.forEach((project) =>
		project.addEventListener("click", (e) => toggleActive(e, project))
	);
})();

//---------------------- Animations ----------------------

(function () {
	// const NAV_OFFSET_THRESHOLD = 70;
	const FADE_PEEK_THRESHOLD = 150;
	// const PARALLAX_PEEK_THRESHOLD = -250;
	// const PARALLAX_MIN_WIDTH = 768;
	const DEBOUNCE_INTERVAL = 100;

	const hero = document.querySelector(".introduction__content-el--hero");
	const nav = document.querySelector(".navigation");
	const animated = document.querySelectorAll(".animated");
	// const parallaxed = document.querySelectorAll(".parallax");

	let navHeight = 0;
	let windowWidth = 0;

	// ------------------------ Utils -------------------------------

	function updateWindowWidth() {
		windowWidth =
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth;
	}

	function updateNavHeight() {
		navHeight = nav.offsetHeight;
	}

	// threshold < 0 --> image near viewports
	function isPeekingIntoViewport(img, threshold) {
		const rect = img.getBoundingClientRect();
		const imgIsAboveViewport = rect.bottom - threshold < navHeight;
		const imgIsBelowViewport = rect.top + threshold > window.innerHeight;
		return !imgIsBelowViewport && !imgIsAboveViewport;
	}

	// Toggle Nav styles
	function updateNav() {
		return;
		// if (window.pageYOffset > NAV_OFFSET_THRESHOLD)
		// 	document.body.classList.add("page-on-scroll");
		// else document.body.classList.remove("page-on-scroll");
	}

	// ------------------------ Setup -------------------------------

	// function setUpParallax() {
	// 	parallaxed.forEach((el) => {
	// 		el.rellax = new Rellax(".parallax", {
	// 			center: true
	// 		});
	// 	});
	// }

	// ------------------------ View -------------------------------

	// Kill parallax when element not in view
	// function toggleParallaxed() {
	// 	parallaxed.forEach((el) => {
	// 		if (
	// 			windowWidth < PARALLAX_MIN_WIDTH ||
	// 			!isPeekingIntoViewport(el, PARALLAX_PEEK_THRESHOLD)
	// 		) {
	// 			// el.rellax.destroy();
	// 		} else {
	// 			// el.rellax.refresh();
	// 		}
	// 	});
	// }

	// Fade in element when in view
	function fadeAnimated() {
		animated.forEach((el) => {
			// is any part of the el within viewport
			if (isPeekingIntoViewport(el, FADE_PEEK_THRESHOLD)) {
				el.classList.add("active");
			}
			// entire image is outside viewport
			else if (
				!isPeekingIntoViewport(el, 0) // &&
				// !el.classList.contains("animate-once")
			) {
				el.classList.remove("active");
			}
		});
	}

	// ----------------------- Model ---------------------------

	function handleScroll() {
		updateNav();
		// toggleParallaxed();
		fadeAnimated();
	}

	// Debounce
	var scheduled = false;
	function debounceScroll() {
		if (!scheduled) {
			scheduled = true;
			setTimeout((function () {
				scheduled = false;
				/* without timeout, window.offsetY is received when the scrolling starts,
					instead of when it ends */
				setTimeout(handleScroll, 150);
			}), DEBOUNCE_INTERVAL);
		}
	}

	function handleResize() {
		// updateNavHeight();
		updateWindowWidth();
		debounceScroll();
	}

	// ----------------------- Controller ---------------------------

	hero.addEventListener("click", () => hero.classList.toggle("animating"));
	window.addEventListener("scroll", debounceScroll);
	window.addEventListener("resize", handleResize);

	// setUpParallax();
	handleResize();
})();

(function () {
	const form = document.querySelector(".filters__form");
	const mainLabel = document.querySelector(".filters__toggle-label span");
	const filterLabels = document.querySelectorAll(".filters__filter-label");
	// const toggle = document.querySelector(".filters__toggle");

	// Add 'label' prop to each input element, as reference to its label
	function assignLabelsToInputs(labels) {
		labels.forEach((label) => {
			if (label.htmlFor) {
				let input = document.getElementById(label.htmlFor);
				if (input) input.label = label;
			}
		});
	}

	// Update view
	function filterProjects(e) {
		// Ignore dropdown toggle
		if (!e.target.classList.contains("filters__filter")) return;

		const filterVal = form.filter.value;
		const filterText = form.querySelector(`input[value=${filterVal}]`).label
			.innerText;

		// Rebuilding instead of disabling due to the nth-child styles for enlarged first row
		window.insertProjectsHtml(filterVal);

		// "Filter by:"" label
		mainLabel.innerText = filterText;
	}

	// -------TODO later -------------------------------------<<<<<<<<<<<<<<
	// function hideDropdown() {
	// 	toggle.setAttribute.checked = null; // remove html attr
	// 	toggle.checked = true; // set input value (true = disabled)
	// }

	// ------------------------- Init --------------------------

	assignLabelsToInputs(filterLabels);

	form.addEventListener("input", (e) => {
		filterProjects(e);
		// hideDropdown;
	});
})();

(function () {
	//---------------------- Responsive Nav ----------------------

	const navBurger = document.querySelector(".navigation__burger");
	const navContainer = document.querySelector(".navigation__container");

	function toggleNav() {
		navBurger.classList.toggle("navigation__burger--is-open");
		navContainer.classList.toggle("navigation__container--is-open");
		document.documentElement.classList.toggle("scroll-lock");
		document.body.classList.toggle("scroll-lock");
	}

	navBurger.addEventListener("click", toggleNav);

	//---------------------- Smooth Scroll ----------------------

	const links = document.querySelectorAll(".nav-link");

	links.forEach((link) =>
		link.addEventListener("click", (e) => {
			const targetId = link.href.match(/#\w*/);
			const target = document.querySelector(targetId);
			if (!target) return;

			e.preventDefault();

			const initialScroll = window.pageYOffset;
			const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
			window.scrollTo({
				behavior: "smooth",
				left: 0,
				top: targetTop,
			});

			// Clunky fix for Edge & IE:
			// Jump to target if scroll didn't work correctly
			setTimeout((function () {
				if (window.pageYOffset === initialScroll || window.pageYOffset === 0)
					window.scrollTo(0, targetTop);
			}), 100);

			// Close navContainer on mobile
			if (navContainer.classList.contains("navigation__container--is-open"))
				toggleNav();
		})
	);
})();

(function () {
	const urlParams = window.location.search
		.replace("?", "")
		.split("&")
		.reduce((obj, param) => {
			param = param.split("=");
			if (param[0]) obj[param[0]] = param[1] ? param[1] : true;
			return obj;
		}, {});

	if (urlParams["form-sent"]) {
		// Show "Thank You" popup
		const popup = document.querySelector(".splashscreen--popup");
		popup.classList.remove("splashscreen--hidden");

		// clear URL bar
		if (window.history.replaceState) {
			window.history.replaceState({ page: "main" }, "home", "/");
		}
	}
})();

//---------------------- Splashscreen ----------------------

(function () {
	const spinner = document.querySelector(".splashscreen--spinner");
	const popup = document.querySelector(".splashscreen--popup");

	function activatePage() {
		spinner.classList.add("splashscreen--hidden");
		setTimeout(() => {
			spinner.style.display = "none";
			// Enable onScroll transitions
			document.documentElement.classList.add("active");
		}, 800);
	}

	function hidePopup() {
		popup.classList.add("splashscreen--hidden");
		setTimeout(() => {
			popup.style.display = "none";
		}, 800);
	}

	// ------------------------- Init -------------------------

	activatePage();

	popup.addEventListener("click", hidePopup);
	setTimeout(hidePopup, 3000);
})();
