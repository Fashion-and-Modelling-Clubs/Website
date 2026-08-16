# NITJ Fashion & Modelling

A website for the fashion and modelling clubs of
**Dr. B. R. Ambedkar National Institute of Technology Jalandhar** — Reverie and
Merveilleux.

> Student-run. Not an official institute website unless the institute has
> formally authorised it.

---

## Features

- Full-screen hero
- Club profiles with ideology and achievements, both rendered by the same component
- Events calendar with filters and a detail pop-up
- Filterable photo archive with a keyboard-driven lightbox
- Faculty and student coordinators with working tap-to-call and email links
- Instagram-first contact section
- Styled placeholders that name the exact file to add, instead of broken images
- Lazy loading, reduced-motion support, keyboard navigation, visible focus

## Tech stack

React · Vite · Tailwind CSS · Framer Motion · GitHub Pages
No backend, no database, no login. Everything is static.

## Fonts

Headings use **Cormorant Garamond** (loads automatically from Google Fonts).
Body text uses **Coolvetica** — see `public/assets/fonts/README.md`. Coolvetica's
free download is a desktop licence and does not cover web embedding, so the site
falls back to Helvetica/Arial until you add a licensed webfont file. Nothing
shifts when you do.

---

## Page order

Hero → About → Clubs → Events → Archive → People → Contact → Footer

Set in `src/pages/Home.jsx`. Reorder or remove a section by moving one line.

## Project structure

```
nitj-fashion/
├── public/
│   ├── favicon.svg
│   └── assets/
│       ├── images/      ← ALL photos, one flat folder (README inside)
│       └── fonts/       ← Coolvetica webfont, if you license it
├── src/
│   ├── components/      ← how things look (rarely edited)
│   ├── data/            ← what the site says (edit this)
│   │   ├── images.js        every image path
│   │   ├── clubs.js         names, taglines, descriptions, ideology
│   │   ├── achievements.js  the legacy lists
│   │   ├── coordinators.js  faculty and student contacts
│   │   ├── events.js        the calendar
│   │   ├── gallery.js       archive photos
│   │   └── site.js          headings and general copy
│   ├── pages/Home.jsx   section order
│   ├── utils/format.js  date helpers
│   ├── App.jsx  main.jsx  index.css
├── .github/workflows/deploy.yml
├── vite.config.js  tailwind.config.js  package.json
```

**The rule that keeps this maintainable:** content lives in `src/data/`, photos
live in `public/assets/images/`. Components hold no words and no filenames.

---

## How to run locally

### 1. Install Node.js

Download the **LTS** version from [nodejs.org](https://nodejs.org). Then check:

```bash
node -v
npm -v
```

Both should print a version number. If not, open a fresh terminal and retry.

### 2. Open the project

VS Code → **File → Open Folder** → select `nitj-fashion`.
Then **Terminal → New Terminal**.

### 3. Install packages (once)

```bash
npm install
```

### 4. Start the dev server

```bash
npm run dev
```

Open the address Vite prints, usually <http://localhost:5173/>. Save a file and
the page updates instantly.

- **Stop:** `Ctrl + C` in the terminal
- **Restart:** `npm run dev`
- **Port in use:** stop the other server, or accept the port Vite offers

### 5. Check the production build before pushing

```bash
npm run build
npm run preview
```

**If `npm run build` fails, don't push** — the deployment runs the same command.

---

## How to add images

1. Open `public/assets/images/README.md`
2. Find the filename you need
3. Put your photo in `public/assets/images/` with exactly that name
4. Refresh

All photos live in that one folder — no sub-folders to hunt through.

## Image naming

Lowercase, hyphenated, descriptive:

```
hero-main.jpg
reverie-club-cover.jpg
merveilleux-club-cover.jpg
faculty-manjeet-singh.jpg
event-fashion-night.jpg
reverie-gallery-01.jpg
```

Never `IMG_1234.jpg`, `DSC_8291.jpg` or `photo1.jpg`. Filenames are
case-sensitive once live, so keep them lowercase.

## How to update club information

`src/data/clubs.js`:

```js
reverie: {
  tagline: "The Fashion Society of NIT Jalandhar",
  description: "Write the club's description here.",
  ideology: "A short paragraph on what the club stands for.",
  keywords: ["Expression", "Confidence", "Movement"],
}
```

Anything left empty prints "Content to be added." — deliberate, so nothing is
invented on a club's behalf. Fill both clubs in around the same time; the code
gives them identical space, but a full description next to an empty one will
still look uneven.

## How to add achievements

`src/data/achievements.js`:

```js
reverie: {
  club: "reverie",
  achievements: [
    { year: "2025", event: "Name of the festival", result: "What was achieved" },
  ],
},
```

Only add results someone has confirmed. Empty lists show a short neutral note.

## How to add events

`src/data/events.js` — copy a block:

```js
{
  id: "spring-showcase",
  title: "Spring Showcase",
  date: "2026-03-14",    // or "March 2026", or "" for TBA
  time: "7:00 PM",
  venue: "OAT",
  type: "fashion",       // fashion | performance | cultural | special
  tags: ["night"],
  club: "",              // "reverie" | "merveilleux" | "" if joint
  host: "",
  performance: "",
  image: images.events.springShowcase,
  description: "",
}
```

Add the image path to `src/data/images.js`, drop the photo into
`public/assets/images/`, and the calendar, filters and pop-up update themselves.
Empty fields are hidden rather than shown blank.

## How to add gallery photos

Put the file in `public/assets/images/`, then add one object to
`src/data/gallery.js`:

```js
{
  id: "rev-004",
  club: "reverie",            // "reverie" | "merveilleux" | "" if neither
  category: "fashion",        // fashion | performance | backstage | events
  orientation: "portrait",    // portrait | landscape | square | panoramic
  image: asset("reverie-gallery-04.jpg"),
  caption: "Fashion Night",
}
```

`orientation` decides how much room the photo gets, so faces are never cropped
into the wrong shape.

## How to update coordinators

`src/data/coordinators.js`. `phone` is the digits for the tap-to-call link (no
spaces); `phoneDisplay` is what people read. `department` and `designation` are
blank where they were not supplied — type them in and they appear.

---

## Git commands

| Command | What it does |
| ------- | ------------ |
| `git status` | Shows what you changed |
| `git add .` | Stages your changes |
| `git commit -m "message"` | Saves a version locally |
| `git push` | Uploads to GitHub (this triggers deployment) |
| `git pull` | Downloads the latest version |

## GitHub repository setup

Once, inside the project folder:

```bash
git init
git add .
git commit -m "Initial NITJ fashion website"
```

Create a **new empty repository** on GitHub called `nitj-fashion`. Do **not**
tick "Add a README". Then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/nitj-fashion.git
git branch -M main
git push -u origin main
```

## GitHub Pages deployment

On GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions.**

That's the only setting. `.github/workflows/deploy.yml` builds and publishes on
every push to `main`. Never upload `dist` by hand.

Your site: `https://YOUR_USERNAME.github.io/nitj-fashion/`

### The base path

`vite.config.js` contains:

```js
base: "/nitj-fashion/",
```

It must match your repository name, because Pages serves the site from a
sub-folder. Rename the repo → change this line. Moving to
`YOUR_USERNAME.github.io` or a custom domain → change it to `"/"`.

Image paths are built from this setting, so they follow automatically. Never
hard-code `/assets/...` anywhere.

## Updating the live site

```bash
npm run dev          # make and check changes
npm run build        # confirm the build passes
git add .
git commit -m "Update gallery"
git push             # GitHub Actions deploys it
```

Watch the **Actions** tab. Green tick = live, usually within a couple of minutes.
Hard-refresh (`Ctrl/Cmd + Shift + R`) if you still see the old version.

---

## Troubleshooting

**Images work locally but not on GitHub Pages**
The base path. Check `base` in `vite.config.js` matches the repo name exactly,
slashes included.

**The live page is blank**
Open the console (F12). A 404 on the `.js` file is almost always the base path.

**A photo still shows the "to be added" placeholder**
The filename doesn't match. Check spelling, folder and extension — `.jpeg` is not
`.jpg`, and capitals matter once the site is live.

**The GitHub Action failed**
**Actions → the failed run → the red step.** Run `npm run build` locally, fix,
commit, push.

**Text looks like plain Helvetica**
Coolvetica isn't installed yet — see `public/assets/fonts/README.md`.

---

## Important rules

1. **Content goes in `src/data/`.** Never type a name, date or caption into a
   component.
2. **Photos go in `public/assets/images/`** with the documented filename.
3. **Never invent information.** No made-up achievements, dates, venues or
   designations. Unknown values stay `""` and print "TBA" or "Content to be
   added."
4. **Keep the two clubs level** — same components, same sizes, same effort.
5. **Run `npm run build` before pushing.**

---

© 2026 NITJ Fashion & Modelling Clubs ·
Dr. B. R. Ambedkar National Institute of Technology Jalandhar
