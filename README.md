# mdaoud1.github.io

Personal portfolio site — plain HTML/CSS/JS, hosted on GitHub Pages.

## Structure
- `index.html` — homepage (About, Highlights, Experience, Education, Projects, Skills, Contact)
- `projects/` — one HTML page per project; `project-template.html` is a starting point for new ones
- `css/style.css` — all styling, including light/dark theme tokens
- `js/main.js` — theme toggle + mobile nav toggle
- `assets/` — images; `assets/img/placeholder-project.svg` is the "screenshot coming soon" placeholder
- `resume.pdf` — served directly by the "Download Résumé" button

## Adding a project
1. Copy `projects/project-template.html` to `projects/<slug>.html` and fill in the bracketed placeholders.
2. Add matching images under `assets/img/projects/` (or `assets/<project>/`).
3. Add a project card in the `#projects` section of `index.html` linking to the new page.

## Updating your résumé
Replace `resume.pdf` at the repo root with your latest export — the filename must stay `resume.pdf` (or update the `href` in `index.html`'s two download links).

## Deploying
This is a user-site repo (`mdaoud1.github.io`), so GitHub Pages serves automatically from the `main` branch root on every push — no build step. Just commit and push.
