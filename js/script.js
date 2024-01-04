const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".dropdown");
menu.addEventListener("mouseenter", () => {
  dropdown.style.display = "block";
});
dropdown.addEventListener("mouseenter", () => {
  dropdown.style.display = "block";
});
dropdown.addEventListener("mouseleave", () => {
  dropdown.style.display = "none";
});
menu.addEventListener("mouseleave", () => {
  dropdown.style.display = "none";
});
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var documentHeight = document.documentElement.scrollHeight;
  var windowHeight = window.innerHeight;
  var scrollPercentage =
    (scrollPosition / (documentHeight - windowHeight)) * 100;

  if (scrollPercentage <= 25) {
    document.querySelector(".top").style.display = "none";
  } else {
    document.querySelector(".top").style.display = "block";
  }
});
