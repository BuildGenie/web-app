# Applying the BuildGenie next iteration

This patch is designed for the existing `BuildGenie/web-app` repository. It preserves the current orange / charcoal / warm-neutral brand direction.

## Apply

1. Extract this ZIP into the root of your repository, allowing the `components/` and `app/services/` folders to be added.
2. Run:

```bash
python3 apply_patch.py
```

The script updates `app/page.tsx` to use the shared header, directs capability cards to `/services`, points the growth CTA to `/services#marketing-growth`, and appends the new styles to `app/globals.css`.

The script checks that the existing homepage header is present before writing and avoids appending the CSS twice.

## Verify

```bash
npm run lint
npm run build
npm run dev
```

Then check:
- `/` at desktop and mobile widths
- Open and close the mobile nav, including the Escape key
- `/services`
- `/services#marketing-growth`
- Homepage service cards and growth CTA navigation

No pricing is published on the page yet. Engagement options are presented without inventing prices or guaranteed outcomes.
