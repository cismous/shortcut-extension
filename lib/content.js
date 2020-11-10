document.addEventListener("keydown", function (event) {
  const target = event.target;
  const key = event.key;

  // 是否是可输入dom
  const isInput = ["input", "textarea"].includes(
    target.nodeName.toLocaleLowerCase()
  );
  // 是否是可编辑dom
  const editableDom = target.getAttribute("contenteditable") === "true";
  if ((!isInput && !editableDom) || (isInput && target.disabled === true)) {
    try {
      if (key.toLocaleLowerCase() === "x") {
        chrome.runtime.sendMessage({ action: "close tab" });
      }

      if (key.toLocaleLowerCase() === "r") {
        chrome.runtime.sendMessage({ action: "reload tab" });
      }

      if (key.toLocaleLowerCase() === "h") {
        chrome.runtime.sendMessage({ action: "switch left tab" });
      }

      if (key.toLocaleLowerCase() === "l") {
        chrome.runtime.sendMessage({ action: "switch right tab" });
      }
    } catch {}
  }
});
