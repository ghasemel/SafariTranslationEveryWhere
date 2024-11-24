// content.js
document.addEventListener("contextmenu", (event) => {
    safari.extension.dispatchMessage("showTranslateOption", {
        pageUrl: window.location.href,
    });
});
