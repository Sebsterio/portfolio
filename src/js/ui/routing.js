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
		popup.classList.remove("splashscreen--closed");

		// clear URL bar
		if (window.history.replaceState) {
			window.history.replaceState({ page: "main" }, "home", "/");
		}
	}
})();
