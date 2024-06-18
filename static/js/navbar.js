let toggled = false;

const toggleNavbar = () => {
	toggled = !toggled;
	document.getElementById("nav-links").style.right = toggled ? "0%" : "-100%";
}