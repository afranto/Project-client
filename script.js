// Toggle class active
const navbarNAv = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNAv.classList.toggle("active");
};
