/*
let likesCount = document.getElementsByClassName("likesCount");
let voteButton = document.getElementsByClassName("voteButton");
let fireimage = document.getElementsByClassName("fireimg");
for (let i = 0; i < voteButton.length; i++) {
  voteButton[i].addEventListener("click", function () {
    if (this.classList.contains("unclicked")) {
      //liking
      voteButton[i].classList.remove("unclicked");
      let currentInt = parseInt(likesCount[i].innerHTML);
      fireimage[i].classList.remove("inactive");
      likesCount[i].innerHTML = `${currentInt + 1}`;
    } else {
      //unliking
      voteButton[i].classList.add("unclicked");
      let currentInt = parseInt(likesCount[i].innerHTML);
      fireimage[i].classList.add("inactive");
      likesCount[i].innerHTML = `${currentInt - 1}`;
    }
  });
}
*/