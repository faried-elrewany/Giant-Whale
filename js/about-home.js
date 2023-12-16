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
