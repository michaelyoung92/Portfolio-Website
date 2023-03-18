gsap.from("header", { y: -100, ease: "back", duration: 1 });
gsap.from("footer", { y: 100, ease: "back", duration: 1 });

const myText = new SplitType(".primary-heading");

gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.1,
});
