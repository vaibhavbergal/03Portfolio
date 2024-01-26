gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

var tl = gsap.timeline();

gsap.from(".navbar h1, .menu li, .navbar .switch,.navbar i", {
  y: -100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.1,
});

tl.from(".hero h1,.hero h3, .hero button", {
  y: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
});

tl.from(".hero-right img, .hero-right .hero-icons", {
  x: 100,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2,
});

gsap.from(".about h1, .about .about-p,.about-card", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".about h1, .about .about-p, .about-card",
    scroller: "[data-scroll-container]",
  },
});

gsap.from(".about img", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".about img",
    scroller: "[data-scroll-container]",
  },
});

gsap.from(".skill h1, .skill-list", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".skill h1, .skill-list",
    scroller: "[data-scroll-container]",
  },
});

gsap.from(".project h1", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".project h1",
    scroller: "[data-scroll-container]",
  },
});

gsap.from(".project-card", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".project-card",
    scroller: "[data-scroll-container]",
  },
});

gsap.from(".contact h1, .contact-card", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".contact h1, .contact-card",
    scroller: "[data-scroll-container]",
  },
});

gsap.from(".contact img", {
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".contact img",
    scroller: "[data-scroll-container]",
  },
});
