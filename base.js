const menuButtonElement = document.getElementById("menu-btn");
const asideMenutButtonElement = document.getElementById("aside-menu-btn");
const firstHeaderElement = document.getElementById("header-one");
const asideElement = document.querySelector("aside");

function showAsideBar() {
  asideElement.style.display = "block";
  firstHeaderElement.style.display = "none";
  asideMenuButtonElement.style.transform = "scale(1.3)";
}

menuButtonElement.addEventListener("click", showAsideBar);

const asideMenuButtonElement = document.getElementById("aside-menu-btn");
function hideAsideBar() {
  asideElement.style.display = "none";
  firstHeaderElement.style.display = "block";
}

asideMenuButtonElement.addEventListener("click", hideAsideBar);
