const primaryHeading = new SplitType(".primary-heading");

gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.1,
});

gsap.from("header", {
  duration: 1.1,
  delay: 5,
  opacity: 0,
});

gsap.from("footer", {
  duration: 1.1,
  delay: 5,
  opacity: 0,
});

gsap.from(".anim1", {
  duration: 1,
  opacity: 0,
  y: -50,
  delay: 1.6,
  stagger: 0.6,
});

gsap.from(".hero-img", {
  duration: 1.2,
  opacity: 0,
  y: 50,
  delay: 5,
  ease: "back",
});

gsap.to(".button", {
  duration: 0.5,
  scale: 1.1,
  yoyo: true,
  repeat: 1,
  delay: 4,
});
