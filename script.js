gsap.registerPlugin(ScrollTrigger);

const bgVideo = document.querySelector("#bgVideo");

bgVideo.pause();
bgVideo.currentTime = 0;

let sections = gsap.utils.toArray(".step");
sections.forEach((step, index) => {
  ScrollTrigger.create({
    trigger: step,
    start: "bottom bottom",
    end: "+=1000",
    pin: true,
    anticipatePin: 1,
  });

  gsap.fromTo(
    bgVideo,
    { currentTime: 3 * index },
    {
      scrollTrigger: {
        trigger: step,
        scrub: 2,
        start: "top bottom",
        end: "bottom bottom",
      },
      currentTime: 3 * (index + 1),
      duration: 1,
      ease: "none",
    }
  );
});

gsap.to("#bgVideo", {
  scrollTrigger: {
    scrub: true,
  },
  scale: 1.5,
});
