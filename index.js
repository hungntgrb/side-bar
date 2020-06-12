const sideBar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".btn-toggle");
const closeBtn = document.querySelector(".btn-close");

toggleBtn.addEventListener("click", function () {
  sideBar.classList.toggle("show");
});

closeBtn.addEventListener("click", function () {
  sideBar.classList.remove("show");
});
