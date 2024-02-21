let mySong = document.getElementById("mySong");
let icon = document.getElementById("icon");
let text = document.getElementById("text");

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "assets/pause2.png";
    text.innerText = "Freeze the Beats";
  } else {
    mySong.pause();
    icon.src = "assets/play2.png";
    text.innerText = "Hit Play Now";
  }
};
