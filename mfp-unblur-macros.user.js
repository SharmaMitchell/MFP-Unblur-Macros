// ==UserScript==
// @name         MFP Unblur Macros
// @namespace    http://tampermonkey.net/
// @version      2024-01-13
// @description  Unblur macros, heart health, low carb, and custom summary from MFP homepage (for non-premium users)
// @author       Mitchell Sharma
// @match        https://www.myfitnesspal.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=myfitnesspal.com
// @grant        none
// ==/UserScript==

// Function to apply styles
function applyStyles() {
    // Set filter: none on elements with class .css-1av7vdc
    var elementsWithFilter = document.getElementsByClassName('css-1av7vdc');
    console.log('Elements with filter class:', elementsWithFilter);

    for (var i = 0; i < elementsWithFilter.length; i++) {
        elementsWithFilter[i].style.filter = 'none';
    }

    // Set display: none on elements with class .css-1c8d0hv
    var elementsWithDisplayNone = document.getElementsByClassName('css-1c8d0hv');
    console.log('Elements with display none class:', elementsWithDisplayNone);

    for (var j = 0; j < elementsWithDisplayNone.length; j++) {
        elementsWithDisplayNone[j].style.display = 'none';
    }
}

(function main() {
    console.log("I'm running");

    // Initial run
    applyStyles();

    // Create a MutationObserver to watch for changes
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            // Check if nodes were added or removed
            if (mutation.addedNodes.length || mutation.removedNodes.length) {
                // Re-run the styles if there are changes
                applyStyles();
            }
        });
    });

    // Observe changes to the entire document
    observer.observe(document, { childList: true, subtree: true });
})();
