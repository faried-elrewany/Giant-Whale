// window.addEventListener("load", function () {
//   let loader = document.querySelector(".loader-box");
//   loader.classList.add("loader-hide");

//   // Start the second animation immediately after the first animation
//   setTimeout(() => {
//     loader.querySelector(".loader").classList.add("zoom-and-disappear");
//   }, 0);

//   // Wait for the transition to complete before removing the loader
//   loader.addEventListener("transitionend", () => {
//     document.body.removeChild(loader);
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("loading-container").classList.add("zoom-in");
    setTimeout(function () {
      document.getElementById("loading-container").style.display = "none";
    }, 1000);
  }, 1000);
});
