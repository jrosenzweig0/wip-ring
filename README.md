# wip ring

a [fairy-ring](https://fairy-ring.loga.nz) webring.

- `public/fairy-ring.toml`: the ring's config. members are listed under `[[sites]]`.
- `public/fairy-ring.css`: the ring's shared theme.

both are published to github pages on every push to `main`, along with a preview page.

## development

```sh
pnpm install
pnpm dev          # preview at http://localhost:5173. reloads when public/ changes.
pnpm test         # check the config and compare screenshots (runs in docker)
pnpm test:update  # update screenshots after an intended change
```

CI fails if the widget's look changes without updated screenshots. commit the new screenshots
from `pnpm test:update`, and the PR shows the before/after images.
