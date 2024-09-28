import { defineConfig } from "wxt";
import { nodePolyfills } from "vite-plugin-node-polyfills";

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
    plugins: [
      // nodePolyfills({
      //   include: [],
      //   exclude: [
      //     '_stream_duplex',
      //     '_stream_passthrough',
      //     '_stream_readable',
      //     '_stream_transform',
      //     '_stream_writable',
      //     'assert',
      //     'buffer',
      //     'child_process',
      //     'cluster',
      //     'console',
      //     'constants',
      //     'crypto',
      //     'dgram',
      //     'dns',
      //     'domain',
      //     'events',
      //     'fs',
      //     'http',
      //     'http2',
      //     'https',
      //     'module',
      //     'net',
      //     'os',
      //     'path',
      //     'process',
      //     'punycode',
      //     'querystring',
      //     'readline',
      //     'repl',
      //     'stream',
      //     'string_decoder',
      //     'sys',
      //     'timers',
      //     'timers/promises',
      //     'tls',
      //     'tty',
      //     'url',
      //     'util',
      //     'vm',
      //     'zlib',
      //   ]
      // }),
    ],
  }),
});
