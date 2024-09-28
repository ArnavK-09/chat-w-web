export default defineContentScript({
  matches: ["*://*/*"],
  main() {
    browser.runtime.onMessage.addListener(async (message) => {
      const data = {
        title: document.title,
        url: document.location.href,
        content: document.body.innerText,
      };
      return data;
    });
  },
});
