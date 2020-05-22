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
			setTimeout(function () {
				if (window.pageYOffset === initialScroll || window.pageYOffset === 0)
					window.scrollTo(0, targetTop);
			}, 100);

			// Close navContainer on mobile
			if (navContainer.classList.contains("navigation__container--is-open"))
				toggleNav();
		})
	);
})();
