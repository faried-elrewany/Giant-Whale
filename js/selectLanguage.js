const dropDown = document.querySelector(".drop-down");
const list = document.querySelector(".list");
const selectedText = document.querySelector(".selected");
const selectedImg = document.querySelector(".selected-img");
const mobileImgBox = document.querySelector(".mobile-box-language img");

// Load from local storage or use default values
let currentText = localStorage.getItem("selectedText") || "ENG";
let currentSrc = localStorage.getItem("selectedSrc") || "./assits/en-lng.svg";

// Set initial values
selectedText.innerHTML = currentText;
selectedImg.src = currentSrc;
mobileImgBox.src = getOtherLanguageSrc(currentSrc);

// Function to change language based on the stored language in local storage
function changeLanguageFromStorage() {
  // Load language from local storage
  currentText = localStorage.getItem("selectedText") || "ENG";
  currentSrc = localStorage.getItem("selectedSrc") || "./assits/en-lng.svg";

  // Set the values
  selectedText.innerHTML = currentText;
  selectedImg.src = currentSrc;
  mobileImgBox.src = getOtherLanguageSrc(currentSrc);

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

      // Update the mobile image box
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

  // Save to local storage
  localStorage.setItem("selectedSrc", currentSrc);

  // Update the mobile image box
  mobileImgBox.src = getOtherLanguageSrc(currentSrc);

  // Update the dropdown values
  currentText = currentText === "ENG" ? "AR" : "ENG";
  localStorage.setItem("selectedText", currentText);
  selectedText.innerHTML = currentText;
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

  // Check if the RTL stylesheet is already present
  const rtlStylesheet = document.getElementById("rtlStylesheet");
  const ltrStylesheet = document.getElementById("ltrStylesheet");

  if (currentText === "AR") {
    // If the language is Arabic and the RTL stylesheet is not present, add it
    if (!rtlStylesheet) {
      const head = document.head || document.getElementsByTagName("head")[0];

      // Insert the RTL stylesheet after the main stylesheet
      head.insertAdjacentHTML(
        "beforeend",
        `<link id="rtlStylesheet" rel="stylesheet" type="text/css" href="./css/style-rtl.css">`
      );
    }

    // If the LTR stylesheet is present, remove it
    if (ltrStylesheet) {
      ltrStylesheet.parentNode.removeChild(ltrStylesheet);
    }

    htmlElement.setAttribute("dir", "rtl");
  } else {
    // If the language is not Arabic, remove the RTL stylesheet if it exists
    if (rtlStylesheet) {
      rtlStylesheet.parentNode.removeChild(rtlStylesheet);
    }

    // If the LTR stylesheet is not present, add it
    if (!ltrStylesheet) {
      const head = document.head || document.getElementsByTagName("head")[0];

      // Insert the LTR stylesheet
      head.insertAdjacentHTML(
        "beforeend",
        `<link id="ltrStylesheet" rel="stylesheet" type="text/css" href="./css/style-ltr.css">`
      );
    }

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
