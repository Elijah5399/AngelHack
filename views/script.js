const container = document.querySelector("#content");
const initialText = container.innerHTML;

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function home() {
  container.innerHTML = initialText;
}

function about() {}

function help() {}

function contact() {}



const wrapper = document.querySelector('.wrapper')
const rightContainer = document.getElementById('right-container')

function openSlideMenu() {
  wrapper.style.width = "250px";
  rightContainer.style.marginLeft = "250px";
}
function closeSlideMenu() {
  wrapper.style.width = "0";
  rightContainer.style.marginLeft = "0";
}

const mediaQuery = window.matchMedia('(min-width: 768px)')
if (mediaQuery.matches) {
  openSlideMenu();
  wrapper.style.transition = "width 0.3s";
  rightContainer.style.transition = "margin-left 0.3s";
} else {
  closeSlideMenu();
  wrapper.style.transition = "width 0.3s";
  rightContainer.style.transition = "margin-left 0.3s"
}
