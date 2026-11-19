# wip ring

a [fairy-ring](https://fairy-ring.loga.nz) webring.

members can use this snippet to embed the ring:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/fairy-ring@0.2/dist/standalone.js"></script>
<link rel="stylesheet" href="https://ring.loga.nz/fairy-ring.css" />
<fairy-ring class="wip-ring" config-url="https://ring.loga.nz/fairy-ring.toml"></fairy-ring>
```

## development

[get pnpm](https://pnpm.io/installation)

```sh
pnpm install
pnpm dev          # preview at http://localhost:5173 with hot reload
pnpm test         # check the config and compare screenshots (runs in docker)
pnpm test:update  # update screenshots after an intended change
```
