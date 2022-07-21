const navbar = document.querySelector(".hamburger");
const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close");

document.addEventListener("DOMContentLoaded", () => {
  navbar.addEventListener("click", () => {
    //   console.log("click");
    sideBar.classList.toggle("show-sidebar");
  });
});

closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("show-sidebar");
});
