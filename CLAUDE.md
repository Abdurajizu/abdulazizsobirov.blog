# CLAUDE.md

Personal website for Abdulaziz Sobirov, served at **abdulazizsobirov.com**.

## Working rules

- Keep responses concise.
- After implementing any change, run `bundle exec jekyll build` yourself —
  don't ask first. Run `bundle install` too when the Gemfile changed. Report
  the real result, including failures.
- Verify beyond "it built": check the generated files under `_site/` actually
  contain the change.
- Still ask before anything outward-facing or hard to undo — `git push`,
  deploys, deleting files.
- Baseline: the build is clean — no errors or warnings. Anything that appears
  is new and worth looking at.
- Repo-only files (like this one) must be listed under `exclude:` in
  `_config.yml` so they aren't published to `_site/`.

## Stack

- [Jekyll](https://jekyllrb.com/) 4.4 static site generator (Ruby 3.4, managed with Bundler)
- No theme gem. Layouts, includes and styles are all in this repo.
- Plugins: `jekyll-feed` (generates `/feed.xml`)

## Commands

```sh
bundle install                  # install gems
bundle exec jekyll serve        # dev server at http://localhost:4000, live rebuild
bundle exec jekyll serve --drafts   # also render posts in _drafts/
bundle exec jekyll build        # production build into _site/
```

`_config.yml` is **not** hot-reloaded — restart `jekyll serve` after editing it.

## Layout

- `_config.yml` — site-wide settings; `header_pages` controls the nav order
- `_layouts/` — `default.html` (page shell), `page.html`, `post.html`
- `_includes/` — `head.html`, `header.html` (masthead + nav), `footer.html`,
  `custom-head.html` (Google Fonts link), `social.html` (profile links;
  URLs live under `social:` in `_config.yml`, icons are inline SVG —
  `{% include social.html labels=true %}` for the named list, bare for icons)
- `assets/main.scss` — the whole stylesheet; design tokens are at the top
- `assets/js/site.js` — dark-mode toggle and client-side search
- `search.json` — generated search index (not hand-edited)
- `_posts/` — blog posts, named `YYYY-MM-DD-slug.markdown`, `layout: post`
- `_research/` — one file per research entry (a collection, `output: false`,
  so no individual pages). Rendered by `_includes/research-entry.html`; see
  the existing files for the front matter (`sort_date` orders the list,
  newest first; `media:` is optional and takes an image or a video)
- Pages: `index.markdown` (`/`), `about.markdown`, `projects.markdown`,
  `research.markdown`, `writing.markdown` (post index), `resume.markdown`
- `404.html` — not-found page
- `_site/` — build output; generated, git-ignored, never edit by hand

## Conventions

- Style: academic minimal on a warm off-white. Montserrat (Google Fonts) for
  headings, nav and UI; Libre Baskerville for body text. Change the tokens at
  the top of `assets/main.scss` rather than scattering values.
- Colours are CSS custom properties defined under `:root[data-theme="light"]`
  and `:root[data-theme="dark"]`. Add new colours in **both** blocks; never
  hard-code one in a rule.
- Dark mode: an inline script in `_includes/head.html` sets `data-theme`
  before first paint (saved choice, else OS preference). `assets/js/site.js`
  handles the toggle. Transitions are gated behind the `.theme-ready` class so
  the first paint doesn't animate.
- Search is client-side: `search.json` is the generated index, built from all
  posts and titled pages; `assets/js/site.js` fetches and filters it. The UI
  is a Spotlight-style `<dialog>` (`_includes/search-dialog.html`) opened by
  the header icon or Cmd/Ctrl+K; the index loads lazily on first open.
- A new page needs `layout`, `title` and `permalink` front matter, plus an
  entry in `header_pages` if it belongs in the nav. Add `wide: true` for the
  56rem column (it sets `--measure` via a `layout-wide` class on `<body>`).
- New posts need front matter with at least `layout`, `title` and `date`.
  They publish at `/writing/:title/` (set by `permalink` in `_config.yml`).

## Deployment

Hosted on GitHub Pages. `.github/workflows/jekyll.yml` builds and deploys on
every push to `main`; the custom domain and HTTPS are configured in the repo's
Settings → Pages. DNS (A records + `www` CNAME) lives in Cloudflare.

The `CNAME` file at the repo root pins the custom domain — don't delete it, or
a deploy can reset the domain back to `*.github.io`.

## Status

Every page is still placeholder text waiting to be written. The `_posts/`
directory holds only the generated welcome post, and `/resume/` links to
`assets/resume.pdf`, which does not exist yet.
