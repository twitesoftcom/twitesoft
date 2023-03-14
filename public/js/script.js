window.addEventListener("scroll", function () {
  console.log("ok");
  var nav = document.querySelector("nav");
  nav.classList.toggle("bg-white", window.scrollY > 0);
  nav.classList.toggle("shadow-lg", window.scrollY > 0);
});
