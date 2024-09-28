export default defineBackground(() => {
  browser.runtime.onMessage.addListener(async (message) => {
    const all_tabs = await browser.tabs.query({ active: true });
    const contentScripts = all_tabs.filter(
      (tab) =>
        tab.id != null &&
        tab.url != null &&
        new MatchPattern("*://*/*").includes(tab.url),
    );
    const data = await Promise.all(
      contentScripts.map(async (x) => {
        const res = await browser.tabs.sendMessage(x.id!, message);
        return { tab: x.id, res };
      }),
    );

    return `${JSON.stringify(data[0])}`;
  });
});
