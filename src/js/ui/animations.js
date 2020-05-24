//---------------------- Animations ----------------------

(function () {
	// const NAV_OFFSET_THRESHOLD = 70;
	const FADE_PEEK_THRESHOLD = 150;
	// const PARALLAX_PEEK_THRESHOLD = -250;
	// const PARALLAX_MIN_WIDTH = 768;
	const DEBOUNCE_INTERVAL = 100;

	const hero = document.querySelector(".introduction__content-el--hero");
	const nav = document.querySelector(".navigation");
	const animated = document.querySelectorAll(".active-in-view");
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
			setTimeout(function () {
				scheduled = false;
				/* without timeout, window.offsetY is received when the scrolling starts,
					instead of when it ends */
				setTimeout(handleScroll, 150);
			}, DEBOUNCE_INTERVAL);
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
