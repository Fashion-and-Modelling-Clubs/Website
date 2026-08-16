# Photos go here — all of them, in this one folder

No sub-folders. Drop every photo straight into `public/assets/images/` using the
filename from the table below.

## How to add or change a photo

1. Find the filename in the table.
2. Save your photo into this folder with **exactly that name**.
3. Refresh the browser. Done.

You never open a React file to change a photo.

Until a file exists, the site shows a styled "Image — to be added" card with the
filename printed on it, so you always know what is missing. Nothing breaks and
there is never a broken-image icon.

## Formats and sizes

`.jpg`, `.png`, `.webp` and `.avif` all work. WebP is smallest — use it if you
can. If you save as `.webp` instead of `.jpg`, change that one extension in
`src/data/images.js`.

Compress before uploading (squoosh.app is free):

| Use          | Long edge | Aim for      |
| ------------ | --------- | ------------ |
| Hero         | 2400 px   | under 400 KB |
| Club covers  | 1600 px   | under 300 KB |
| Portraits    | 1200 px   | under 200 KB |
| Gallery      | 1600 px   | under 300 KB |

---

## The full list — 19 files

### Hero

| Filename        | Where it appears |
| --------------- | ---------------- |
| `hero-main.jpg` | Full-screen homepage image. Top and bottom are darkened for text, so keep the subject near the centre. |

### Clubs

| Filename                        | Where it appears |
| ------------------------------- | ---------------- |
| `reverie-club-cover.jpg`        | Reverie's block in "The clubs". Portrait 4:5. |
| `merveilleux-club-cover.jpg`    | Merveilleux's block in "The clubs". Portrait 4:5. |

### Coordinators — portraits, 3:4, head and shoulders

| Filename                                          | Where it appears |
| ------------------------------------------------- | ---------------- |
| `faculty-shefali-arora-chouhan.jpg`               | Dr. Shefali Arora Chouhan. |
| `faculty-manjeet-singh.jpg`                       | Dr. Manjeet Singh. |
| `reverie-student-coordinator-vikram-singh.jpg`    | Vikram Singh. |
| `merveilleux-student-coordinator-pushpendra.jpg`  | Pushpendra. |

### Events — used in the calendar row and the pop-up

| Filename                    | Where it appears |
| --------------------------- | ---------------- |
| `event-bollywood-night.jpg` | Bollywood Night. |
| `event-fashion-night.jpg`   | Fashion Night.   |

Adding a new event? Name the file `event-<name>.jpg`, put it here, add the path
to `src/data/images.js`, then add the event to `src/data/events.js`.

### Gallery — "The archive"

| Filename                          | Where it appears |
| --------------------------------- | ---------------- |
| `reverie-gallery-01.jpg`          | Reverie, on the ramp. Portrait. |
| `reverie-gallery-02.jpg`          | Reverie, on stage. Landscape.   |
| `reverie-gallery-03.jpg`          | Reverie, backstage. Square.     |
| `merveilleux-gallery-01.jpg`      | Merveilleux, on the ramp. Portrait. |
| `merveilleux-gallery-02.jpg`      | Merveilleux, on stage. Landscape.   |
| `merveilleux-gallery-03.jpg`      | Merveilleux, backstage. Square.     |
| `event-gallery-bollywood-01.jpg`  | Bollywood Night. Square. |
| `event-gallery-fashion-01.jpg`    | Fashion Night. Square.   |
| `backstage-01.jpg`                | Backstage, call time. Panoramic 21:9. |
| `backstage-02.jpg`                | Backstage, final checks. Portrait.    |

To add more, keep counting: `reverie-gallery-04.jpg`, `backstage-03.jpg`, and so
on — then add one line to `src/data/gallery.js`.

### Sharing

| Filename       | Where it appears |
| -------------- | ---------------- |
| `og-cover.jpg` | The preview picture when the link is shared on WhatsApp, Instagram or X. Landscape 1200×630. |

---

## Naming rules

Lowercase, hyphens, and say what the photo is.

Good: `event-fashion-night.jpg`, `reverie-gallery-04.jpg`
Bad: `IMG_1234.jpg`, `DSC_8291.jpg`, `photo1.jpg`, `final-new-2.png`

Filenames are case-sensitive once the site is live on GitHub Pages, even if they
are not on your computer. Keep everything lowercase.
