document.addEventListener("DOMContentLoaded", function () {
  const dropDown = document.querySelector(".drop-down");
  const list = document.querySelector(".list");
  const selectedText = document.querySelector(".selected");
  const selectedImg = document.querySelector(".selected-img");

  // Load from local storage or use default values
  let currentText = localStorage.getItem("selectedText") || "ENG";
  let currentSrc = localStorage.getItem("selectedSrc") || "./assits/en-lng.svg";

  // Set initial values
  selectedText.innerHTML = currentText;
  selectedImg.src = currentSrc;

  // Function to change language based on the stored language in local storage
  function changeLanguageFromStorage() {
    // Load language from local storage
    currentText = localStorage.getItem("selectedText") || "ENG";
    currentSrc = localStorage.getItem("selectedSrc") || "./assits/en-lng.svg";

    // Set the values
    selectedText.innerHTML = currentText;
    selectedImg.src = currentSrc;

    // Update the styles based on the selected language
    setLanguageStyles();
  }

  // Call the function on page load
  changeLanguageFromStorage();

  dropDown.addEventListener("click", () => {
    list.classList.toggle("show-drop-down");
  });

  list.addEventListener("click", (e) => {
    const listItem = e.target.closest(".list-item");

    if (listItem) {
      const newImg = listItem.querySelector("img");
      const newText = listItem.querySelector(".text");

      if (newImg && newText) {
        // Update the current values
        currentText = newText.innerHTML;
        currentSrc = newImg.src;

        // Save to local storage
        localStorage.setItem("selectedText", currentText);
        localStorage.setItem("selectedSrc", currentSrc);

        selectedText.innerHTML = currentText;
        selectedImg.src = currentSrc;

        // Update the styles based on the selected language
        setLanguageStyles();
      }

      e.stopPropagation();
      list.classList.toggle("show-drop-down");
    }
  });

  function setLanguageStyles() {
    const htmlElement = document.querySelector("html");

    // Remove all existing stylesheet links with the specified ID
    const existingStylesheets = document.querySelectorAll(
      'link[id^="languageStylesheet"]'
    );
    existingStylesheets.forEach((stylesheet) => {
      stylesheet.parentNode.removeChild(stylesheet);
    });

    // Load language from local storage
    const currentText = localStorage.getItem("selectedText") || "ENG";

    if (currentText === "AR") {
      // If the language is Arabic, add the RTL stylesheet with ID
      const head = document.head || document.getElementsByTagName("head")[0];
      head.insertAdjacentHTML(
        "beforeend",
        '<link rel="stylesheet" href="../css/style-rtl.css" id="languageStylesheetRTL">'
      );
      htmlElement.setAttribute("dir", "rtl");
    } else {
      // If the language is not Arabic, add the LTR stylesheet with ID (default for English)
      const head = document.head || document.getElementsByTagName("head")[0];
      head.insertAdjacentHTML(
        "beforeend",
        '<link rel="stylesheet" href="../css/style-ltr.css" id="languageStylesheetLTR">'
      );
      htmlElement.setAttribute("dir", "ltr");
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Set the direction and CSS file based on the language

  const menu = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-links");
  const closeNavigation = document.querySelector(".btn.close-btn");

  menu.addEventListener("click", () => {
    navLinks.classList.toggle("show-navigation");
  });

  closeNavigation.addEventListener("click", () => {
    navLinks.classList.toggle("show-navigation");
  });
});
