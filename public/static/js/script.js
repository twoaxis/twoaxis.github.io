document.addEventListener("DOMContentLoaded", (event) => {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	
	ScrollSmoother.create({
		wrapper: "#smooth-wrapper",
		content: "#smooth-content",
		ease: "power2.out",
		effects: true,
		normalizeScroll: false,
		smoothTouch: 0.1, 
	});

});