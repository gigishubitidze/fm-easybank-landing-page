// 
const navLinkEls = document.querySelectorAll(".nav-link");

navLinkEls.forEach((navLinkEl) => {
  navLinkEl.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    navLinkEl.classList.add("active");
  });
});

// 
const navEl = document.querySelector("#nav");
const navBtnEl = document.querySelector("#nav-btn");
const navBtnImgEl = document.querySelector("#nav-btn-img");

navBtnEl.onclick = () => {
  if (navEl.classList.toggle("open")) {
    navBtnImgEl.src="./images/icon-close.svg"
  } else {
    navBtnImgEl.src="./images/icon-hamburger.svg"
  }
};
