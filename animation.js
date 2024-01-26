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
    scroller: "body",
  },
});

gsap.from(".about img", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".about img",
    // scroller: "body",
  },
});

gsap.from(".skill h1, .skill-list", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".skill h1, .skill-list",
    // scroller: "body",
  },
});

gsap.from(".project h1", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".project h1",
    // scroller: "body",
  },
});

gsap.from(".project-card", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".project-card",
    // scroller: "body",
  },
});

gsap.from(".contact h1, .contact-card", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".contact h1, .contact-card",
    // scroller: "body",
  },
});

gsap.from(".contact img", {
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".contact img",
    // scroller: "body",
  },
});
