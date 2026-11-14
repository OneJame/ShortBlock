// ==UserScript==
// @name        ShortBlock
// @namespace   Github.com/oneJame
// @description A script that blocks all evidence of Youtube shorts inside of Youtube!
// @version     0.1
//
// @match       https://www.youtube.com/*
// @grant       none
//
// @author      Jame
// ==/UserScript==

const hidden = document.createElement("style");
hidden.textContent = `
.hidden {
display: none
}
`;

function onEach(selector, callback) {
  const seen = new WeakSet();
  const check = () => {
    for (const element of document.querySelectorAll(selector)) {
      if (seen.has(element)) continue;
      seen.add(element);
      callback(element);
    }
  };
  check();
  new MutationObserver(check).observe(document.body, { childList: true, subtree: true });
}

//small button
onEach("#items.ytd-mini-guide-renderer ytd-mini-guide-entry-renderer:nth-child(2)", (post) => {
  post.classList.add("hidden");
});

//big button
onEach("ytd-guide-section-renderer:first-of-type #items.ytd-guide-section-renderer ytd-guide-entry-renderer:nth-child(2)", (post) => {
  post.classList.add('hidden');
});

//home page list
onEach("ytd-rich-section-renderer", (post) => {
  post.classList.add("hidden");
});


//video reccommended list
onEach("yt-horizontal-list-renderer", (post) => {
  post.classList.add("hidden");
});

//static ads
onEach("ytd-ad-slot-renderer", (post) => {
  post.classList.add("hidden");
});

//search shorts
onEach("iron-selector:first-of-type yt-chip-cloud-chip-renderer:nth-child(2)", (post) => {
  post.classList.add('hidden');
});
