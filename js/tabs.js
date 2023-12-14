// Hide all elements with the class "tab-item"
var tabItems = document.querySelectorAll(".tab-item");
for (var i = 0; i < tabItems.length; i++) {
  tabItems[i].style.display = "none";
}

// Show the first element with the class "tab-item"
tabItems[0].style.display = "block";

// Click handler on list elements with the class "tabs"
var tabListItems = document.querySelectorAll("ul.collapsible__tabs li");
for (var i = 0; i < tabListItems.length; i++) {
  tabListItems[i].addEventListener("click", function () {
    // Hide all elements with the class "tab-item"
    for (var j = 0; j < tabItems.length; j++) {
      tabItems[j].style.display = "none";
    }

    var activeTab = this.getAttribute("rel");
    document.getElementById(activeTab).style.display = "block";

    // Remove the class "tab-active" from all list elements
    for (var k = 0; k < tabListItems.length; k++) {
      tabListItems[k].classList.remove("tab-active");
    }

    // Add the class "tab-active" to the current list element
    this.classList.add("tab-active");
    // Remove the class "tab-accordion-active" from all elements with the class "tab-accordion-title"
    var accordionTitles = document.querySelectorAll(".tab-accordion-title");
    for (var l = 0; l < accordionTitles.length; l++) {
      accordionTitles[l].classList.remove("tab-accordion-active");
    }

    // Add the class "tab-accordion-active" to the element with the class "tab-accordion-title" and attribute rel starting with activeTab
    var activeAccordionTitle = document.querySelector(
      ".tab-accordion-title[rel^='" + activeTab + "']"
    );
    activeAccordionTitle.classList.add("tab-accordion-active");
  });
}

// Click handler on elements with the class "tab-accordion-title"
var accordionTitles = document.querySelectorAll(".tab-accordion-title");
for (var i = 0; i < accordionTitles.length; i++) {
  accordionTitles[i].addEventListener("click", function () {
    // Hide all elements with the class "tab-item"
    for (var j = 0; j < tabItems.length; j++) {
      tabItems[j].style.display = "none";
    }

    var activeTab = this.getAttribute("rel");
    document.getElementById(activeTab).style.display = "block";

    // Remove the class "tab-accordion-active" from all elements with the class "tab-accordion-title"
    for (var k = 0; k < accordionTitles.length; k++) {
      accordionTitles[k].classList.remove("tab-accordion-active");
    }

    // Add the class "tab-accordion-active" to the current element with the class "tab-accordion-title"
    this.classList.add("tab-accordion-active");

    // Remove the class "tab-active" from all list elements with the class "tabs"
    for (var l = 0; l < tabListItems.length; l++) {
      tabListItems[l].classList.remove("tab-active");
    }

    // Add the class "tab-active" to the list element with the class "tabs" and attribute rel starting with d_activeTab
    var activeTabListItem = document.querySelector(
      "ul.collapsible__tabs li[rel^='" + activeTab + "']"
    );
    activeTabListItem.classList.add("tab-active");
  });
}
