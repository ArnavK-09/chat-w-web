// Imports
import { defineConfig } from "wxt";

// To ignore polyfill errs
function ignoreTelementryClient() {
  return {
    name: "ignore-telementry-chunk",
    load(id: string) {
      if (id.includes("chunk-ZUUDJSVP.mjs")) {
        return `export default {}`;
      }
    },
  };
}

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifestVersion: 3,
  runner: {
    disabled: true,
  },
  manifest: {
    permissions: ["tabs", "activeTab", "scripting"],
  },
  vite: () => ({
    plugins: [ignoreTelementryClient()],
  }),
});
