let likesCount = document.getElementsByClassName("likesCount");
let voteButton = document.getElementsByClassName("voteButton");
for (let i = 0; i < voteButton.length; i++) {
  voteButton[i].addEventListener("click", function () {
    if (this.classList.contains("inactive")) {
      voteButton[i].classList.remove("inactive");
      let currentInt = parseInt(likesCount[i].innerHTML);
      likesCount[i].innerHTML = `${currentInt + 1}`;
    } else {
      voteButton[i].classList.add("inactive");
      let currentInt = parseInt(likesCount[i].innerHTML);
      likesCount[i].innerHTML = `${currentInt - 1}`;
    }
  });
}
