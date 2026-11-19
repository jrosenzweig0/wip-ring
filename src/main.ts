import "fairy-ring/standalone";

// fill in the embed snippet with wherever this page is hosted
const base = new URL(".", document.baseURI).href;
document.querySelector("#snippet")!.textContent = [
  `<script type="module" src="https://cdn.jsdelivr.net/npm/fairy-ring/dist/standalone.js"></script>`,
  `<link rel="stylesheet" href="${base}fairy-ring.css">`,
  `<fairy-ring class="wip-ring" config-url="${base}fairy-ring.toml"></fairy-ring>`,
].join("\n");
