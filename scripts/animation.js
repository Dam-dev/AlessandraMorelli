const animation = () => {
  const navLinks = document.querySelector(".nav-links");
  const burger = document.querySelector(".burger");
  const link = document.querySelectorAll(".link");
  const body = document.querySelector("body");
  burger.addEventListener("click", (event) => {
    body.classList.toggle("noOver");
    navLinks.classList.toggle("active-bar");
    //console.log(link.classList);
    link.forEach((element) => {
      element.classList.toggle("active-links");
    });
  });
};
animation();
