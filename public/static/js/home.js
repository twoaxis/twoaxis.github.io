document.addEventListener("DOMContentLoaded", (event) => {

	gsap.to("header", {
		scale: 0.8,
		opacity: 0,
		scrollTrigger: {
			trigger: "header",
			pin: false,	
			scrub: true,
			start: "top-=80px top",
			end: "bottom-=50%"
		}
	});
});