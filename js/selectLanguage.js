const dropDown = document.querySelector(".drop-down");
const list = document.querySelector(".list");
const selectedText = document.querySelector(".selected");
const selectedImg = document.querySelector(".selected-img");
const mobileImgBox = document.querySelector(".mobile-box-language img");

// Function to get language from the URL path
function getLanguageFromUrl() {
  const pathSegments = window.location.pathname.split("/");
  const languageSegment = pathSegments[1]; // Assuming language code is at position 1

  if (
    languageSegment &&
    (languageSegment.toLowerCase() === "en" ||
      languageSegment.toLowerCase() === "ar")
  ) {
    return languageSegment.toLowerCase(); // Return lowercase language code
  } else {
    // Default language if not specified in the URL
    return "en";
  }
}

// Set initial values based on URL or use default values
let currentText = getLanguageFromUrl();
let currentSrc =
  currentText === "ar" ? "./assits/ar-lng.svg" : "./assits/en-lng.svg";

// Set initial values
selectedText.innerHTML = currentText.toUpperCase();
selectedImg.src = currentSrc;
mobileImgBox.src = getOtherLanguageSrc(currentSrc);

// Function to change language based on the language in the URL
function changeLanguage() {
  // Get language from the URL
  currentText = getLanguageFromUrl();
  currentSrc =
    currentText === "ar" ? "./assits/ar-lng.svg" : "./assits/en-lng.svg";

  // Set the values
  selectedText.innerHTML = currentText.toUpperCase();
  selectedImg.src = currentSrc;
  mobileImgBox.src = getOtherLanguageSrc(currentSrc);

  // Update the styles based on the selected language
  setLanguageStyles();
}

// Call the function on page load
changeLanguage();

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
      currentText = newText.innerHTML.trim().toLowerCase().substring(0, 2);
      currentSrc =
        currentText === "ar" ? "./assits/ar-lng.svg" : "./assits/en-lng.svg";

      // Navigate to the new URL
      const newUrl =
        window.location.origin +
        "/" +
        currentText +
        window.location.pathname.substring(3);

      // Use window.location.assign to navigate to the new URL
      window.location.assign(newUrl);

      // Set the values
      selectedText.innerHTML = currentText.toUpperCase();
      selectedImg.src = currentSrc;
      mobileImgBox.src = getOtherLanguageSrc(currentSrc);

      // Update the styles based on the selected language
      setLanguageStyles();
    }

    e.stopPropagation();
    list.classList.toggle("show-drop-down");
  }
});

mobileImgBox.addEventListener("click", () => {
  // Toggle to the image of the other language
  currentSrc = getOtherLanguageSrc(currentSrc);

  // Update the mobile image box
  mobileImgBox.src = getOtherLanguageSrc(currentSrc);

  // Update the dropdown values
  currentText = currentText === "en" ? "ar" : "en";
  selectedText.innerHTML = currentText.toUpperCase();
  selectedImg.src = currentSrc;

  // Update the styles based on the selected language
  setLanguageStyles();
});

function getOtherLanguageSrc(src) {
  return src.includes("en-lng")
    ? "../assits/ar-lng.svg"
    : "../assits/en-lng.svg";
}

function setLanguageStyles() {
  const htmlElement = document.querySelector("html");

  // Remove all existing stylesheet links with the specified ID
  const existingStylesheets = document.querySelectorAll(
    'link[id^="languageStylesheet"]'
  );
  existingStylesheets.forEach((stylesheet) => {
    stylesheet.parentNode.removeChild(stylesheet);
  });

  if (currentText === "ar") {
    // If the language is Arabic, add the RTL stylesheet with ID
    const head = document.head || document.getElementsByTagName("head")[0];
    head.insertAdjacentHTML(
      "beforeend",
      '<link rel="stylesheet" href="./css/style-rtl.css" id="languageStylesheetRTL">'
    );
    htmlElement.setAttribute("dir", "rtl");
  } else {
    const head = document.head || document.getElementsByTagName("head")[0];
    head.insertAdjacentHTML(
      "beforeend",
      '<link rel="stylesheet" href="./css/style-ltr.css" id="languageStylesheetLTR">'
    );
    htmlElement.setAttribute("dir", "ltr");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Set the direction and CSS file based on the language
  setLanguageStyles();

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
