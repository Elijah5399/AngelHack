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



