let toggled = false;

const toggleNavbar = () => {
	toggled = !toggled;
	document.getElementById("nav-links").style.left = toggled ? "0%" : "-100%";
}