# CLAUDE.md

Personal website for Abdulaziz Sobirov, served at **abdulazizsobirov.com**.

## Working rules

- Keep responses concise.
- Never run shell commands (builds, installs, servers, git, etc.) unless the
  user explicitly says to. Propose the command and wait.
- Check and verify every code change before reporting it done. Review the
  change by reading it, then ask the user to approve running
  `bundle exec jekyll build` (and, for visible changes, `jekyll serve`). Don't
  call a change verified until that has actually run.
- Baseline: minima 2.5's Sass emits `@import`/color-function deprecation
  warnings on every build. These are expected and come from the theme gem.
- Repo-only files (like this one) must be listed under `exclude:` in
  `_config.yml` so they aren't published to `_site/`.

## Stack

- [Jekyll](https://jekyllrb.com/) 4.4 static site generator (Ruby 3.4, managed with Bundler)
- Theme: [minima](https://github.com/jekyll/minima) 2.5 (gem-based, so layouts/includes/sass live in the gem, not this repo)
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

- `_config.yml` — site-wide settings (title, description, url, social handles, plugins)
- `_posts/` — blog posts, named `YYYY-MM-DD-slug.markdown`, with `layout: post` front matter
- `index.markdown` — home page (`layout: home`, lists posts)
- `about.markdown` — About page (`/about/`)
- `404.html` — not-found page
- `_site/` — build output; generated, git-ignored, never edit by hand

## Conventions

- To customize theme output, override by creating a same-named file locally
  (e.g. `_layouts/post.html`, `_includes/head.html`, `_sass/minima/...`, `assets/main.scss`)
  rather than editing the gem. Find originals with `bundle info --path minima`.
- New posts need front matter with at least `layout`, `title`, and `date`.
- Set `url: "https://abdulazizsobirov.com"` in `_config.yml` so feed and canonical links are absolute.

## Status

Freshly scaffolded from `jekyll new`: `_config.yml`, `about.markdown`, and the
welcome post still contain placeholder content. Hosting/deployment and the custom
domain (e.g. a `CNAME` file for GitHub Pages) are not set up yet — document the
chosen approach here once decided.
