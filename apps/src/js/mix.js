/* eslint-disable no-undef */
(function() {
  "use strict";
  const clipboard = new ClipboardJS(".mix-clipboard");

  clipboard.on("success", e => {
    var clipText = e.trigger.textContent;
    e.trigger.innerHTML = "&#10003";

    e.clearSelection();
    setTimeout(function() {
      e.trigger.textContent = clipText;
    }, 1000);
  });

  clipboard.on("error", e => {
    console.error("Action:", e.action);
    console.error("Trigger:", e.trigger);
  });
})();
