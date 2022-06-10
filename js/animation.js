const btn = document.querySelector(".navbar-toggler");

var isClicked = false;

btn.addEventListener("click", () => {
  if (!isClicked) {
    isClicked = true;
    gsap.fromTo(
      ".nav-item",
      {
        delay: 5,

        opacity: 0,
      },
      {
        stagger: 0.2,
        duration: 2,
        opacity: 1,
      }
    );
  } else {
    document.querySelector(".nav-item").style.opacity = "1";
    isClicked = false;
  }
});
