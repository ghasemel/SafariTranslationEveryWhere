// Create the context menu item
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "translate-page",
        title: "Translate Page",
        contexts: ["all"] // Adds this option to all context menus
    });
    console.log("Context menu item created!");
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "translate-page") {
        const translateUrl = `https://translate.google.com/translate?sl=auto&tl=en&u=${encodeURIComponent(
            tab.url
        )}`;
        chrome.tabs.update(tab.id, { url: translateUrl });
    }
});
