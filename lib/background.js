chrome.runtime.onMessage.addListener(function (request) {
  const action = request.action;
  if (!action) return;

  chrome.tabs.query({}, function (tabs) {
    const id = tabs.find((item) => item.active)?.id;
    if (!id) return;
    const len = tabs.length;
    const currentTabIndex = tabs.findIndex((item) => item.id === id);

    switch (action) {
      case "close tab":
        chrome.tabs.remove(id);
        break;

      case "reload tab":
        chrome.tabs.reload(id);
        break;

      case "switch right tab":
        if (len === 1) break;
        const rightTabId = tabs[(currentTabIndex + 1) % len].id;
        chrome.tabs.update(rightTabId, { active: true });
        break;

      case "switch left tab":
        if (len === 1) break;
        const leftTabId = tabs[(currentTabIndex - 1 + len) % len].id;
        chrome.tabs.update(leftTabId, { active: true });
        break;

      default:
        break;
    }
  });
});
