window.onload = function () {
  var btn = document.querySelectorAll(".btn");
  for (let i = 0; i < 5; i++) {
    btn[i].addEventListener("click", function () {
      localStorage.setItem("ipVal", this.value);
    });
  }
};
