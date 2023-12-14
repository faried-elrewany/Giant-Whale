document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelector("#filter-btns").children;
  const items = document.querySelector(".portfolio-gallery").children;
  const addMoreButton = document.querySelector(".load-more");

  // Initially display the first 6 items

  for (let i = 0; i < items.length; i++) {
    if (i < 6) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }

  // Event listener for filter buttons
  for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
      for (let j = 0; j < filterButtons.length; j++) {
        filterButtons[j].classList.remove("active");
      }
      this.classList.add("active");
      const target = this.getAttribute("data-target");

      let count = 0; // Keep track of displayed items
      for (let k = 0; k < items.length; k++) {
        items[k].style.display = "none";
        if (
          (target == items[k].getAttribute("data-id") || target == "all") &&
          count < 6
        ) {
          items[k].style.display = "block";
          count++;
        }
      }
    });
  }

  // Event listener for "Show More" button
  addMoreButton.addEventListener("click", function () {
    const activeFilter = document.querySelector(".filter-buttons .active");
    const target = activeFilter.getAttribute("data-target");

    // Display all items for the active filter
    for (let k = 0; k < items.length; k++) {
      if (target == "all" || target == items[k].getAttribute("data-id")) {
        items[k].style.display = "block";
      }
    }
  });
});
