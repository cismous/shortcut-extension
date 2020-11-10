document.addEventListener("keydown", function (event) {
  const target = event.target;
  const key = event.key;

  // 非可输入支持快捷键
  const isInput = ["input", "textarea"].includes(
    target.nodeName.toLocaleLowerCase()
  );

  if (!isInput || (isInput && target.disabled)) {
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
