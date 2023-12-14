///////////////////////////////////////////////////////////
// Make mobile navigation work

// const btnNavEl = document.querySelector(".btn-mobile-nav");
// const headerEl = document.querySelector(".header");

// console.log(btnNavEl);
// console.log(headerEl);
// btnNavEl.addEventListener("click", function () {
//   console.log("hello");
//   headerEl.classList.toggle("nav-open");
// });

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    // const href = link.getAttribute("href");

    // // Scroll back to top
    // if (href === "#")
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });

    // // Scroll to other links
    // if (href !== "#" && href.startsWith("#")) {
    //   const sectionEl = document.querySelector(href);
    //   sectionEl.scrollIntoView({ behavior: "smooth" });
    // }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to be executed when the element is intersecting
  function revealOnScroll(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target); // Optional: Stop observing once revealed
      }
    });
  }

  // Create an Intersection Observer
  const observer = new IntersectionObserver(revealOnScroll, {
    threshold: 0.15, // Adjust as needed, 0.5 means 50% of the element must be visible
  });

  // Get all elements with the class 'reveal-on-scroll'
  const elements = document.querySelectorAll(".reveal-on-scroll");

  // Observe each element
  elements.forEach((element) => {
    observer.observe(element);
  });
});

const tabsBtns = Array.from(document.querySelectorAll("[data-tab-id]"));
const tabs = Array.from(document.querySelectorAll("[data-tab]"));

let selectedTab = tabsBtns[0].dataset.tabId;

const hideTabs = () => {
  tabs
    .filter((tab) => tab.dataset.tab !== selectedTab)
    .forEach((tab) => {
      tab.classList.add("tabs__tab--hide");
    });

  tabsBtns
    .filter((tab) => tab.dataset.tabId !== selectedTab)
    .forEach((tab) => {
      tab.classList.add("tabs__tab-btn--not-selected");
    });
};
hideTabs();

const handleSelectTab = (e) => {
  selectedTab = e.target.dataset.tabId;

  tabs.forEach((tab) => {
    tab.classList.remove("tabs__tab--hide");
  });

  tabsBtns.forEach((tab) => {
    tab.classList.remove("tabs__tab-btn--not-selected");
  });

  hideTabs();
};

tabsBtns.forEach((btn) => {
  btn.addEventListener("click", handleSelectTab);
});

window.addEventListener("load", function () {
  let loader = document.querySelector(".loader-box");
  loader.classList.add("loader-hide");

  // loader.style.display = "none";
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader-box");
  });
});
