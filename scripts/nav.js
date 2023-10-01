const webMenu = document.getElementById("web-nav");
const domMenu = document.getElementById("dom-nav");
const htmlCSSMenu = document.getElementById("html-css-nav");
const jsMenu = document.getElementById("js-nav");
const devopsNav = document.getElementById("devops-nav");
const etcNav = document.getElementById("etc-nav");
const navIcon = document.getElementsByClassName("nav-icon")[0];
const gnb = document.getElementsByClassName("gnb")[0];
const closeBtn = document.getElementsByClassName("close-btn")[0];

const menuHandler = (element) => {
  const isOpen = element.hasAttribute("open");

  if (isOpen) {
    element.classList.remove("open");
  } else {
    element.classList.add("open");
  }
};

webMenu.addEventListener("click", () => {
  menuHandler(webMenu);
});

domMenu.addEventListener("click", () => {
  menuHandler(domMenu);
});

htmlCSSMenu.addEventListener("click", () => {
  menuHandler(htmlCSSMenu);
});

jsMenu.addEventListener("click", () => {
  menuHandler(jsMenu);
});

devopsNav.addEventListener("click", () => {
  menuHandler(devopsNav);
});

etcNav.addEventListener("click", () => {
  menuHandler(etcNav);
});

navIcon.addEventListener("click", () => {
  const isOpend = document.getElementsByClassName("gnb-opened")[0];
  const body = document.getElementsByTagName("body")[0];

  if (isOpend) {
    gnb.classList.remove("gnb-opened");
    body.classList.remove("overflow-hidden");
  } else {
    gnb.classList.add("gnb-opened");
    body.classList.add("overflow-hidden");
  }
});

closeBtn.addEventListener("click", () => {
  gnb.classList.remove("gnb-opened");
  document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");
});
