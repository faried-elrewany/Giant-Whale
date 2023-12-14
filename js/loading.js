window.addEventListener("load", function () {
  let loader = document.querySelector(".loader-box");
  loader.classList.add("loader-hide");

  // loader.style.display = "none";
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader-box");
  });
});
