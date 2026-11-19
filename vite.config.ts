import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // relative, so the build works under the github pages subpath (/wip-ring/)
  base: "./",
  plugins: [
    {
      // vite serves public/ as-is and doesn't reload when it changes. reload so edits to the
      // config and stylesheet show up right away.
      name: "reload-public",
      configureServer(server) {
        server.watcher.on("change", (file) => {
          if (file.startsWith(server.config.publicDir)) {
            server.ws.send({ type: "full-reload" });
          }
        });
      },
    },
  ],
  test: {
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: "chromium" }],
    },
  },
});
