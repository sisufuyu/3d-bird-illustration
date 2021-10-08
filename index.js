(function () {
  var container = document.querySelector(".container");
  var painting = document.querySelector(".painting");
  var bird = document.querySelector(".bird");
  var branch = document.querySelector(".branch");
  var stamp = document.querySelector(".stamp");

  container.addEventListener("mousemove", (event) => {
    let x_dist = (window.innerWidth / 2 - event.pageX) / 10;
    let y_dist = (window.innerHeight / 2 - event.pageY) / 10;

    painting.style.transform = `rotateY(${x_dist}deg) rotateX(${y_dist}deg)`;
  });

  container.addEventListener("mouseenter", () => {
    painting.style.transition = "none";
    bird.style.transform = "translate3d(0,0,100px)";
    stamp.style.transform = "translate3d(0,0,50px)";
    branch.style.transform = "translate3d(0,0,70px)";
  });

  container.addEventListener("mouseleave", () => {
    painting.style.transition = "all 0.7s ease";
    bird.style.transform = "translate3d(0,0,0)";
    stamp.style.transform = "translate3d(0,0,0)";
    branch.style.transform = "translate3d(0,0,0)";
    painting.style.transform = "rotateY(0) rotateX(0)";
  });
})();
