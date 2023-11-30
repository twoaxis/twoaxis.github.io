document.addEventListener("scroll", (e) => {
	if(window.scrollY >= window.innerHeight * 0.5) {
		document.querySelector("header div#content").style.position = "absolute";
	}
	else {
		document.querySelector("header div#content").style.position = "fixed";
		document.querySelector("header div#content").style.top = "calc(100% - 100vh)";
	}
});