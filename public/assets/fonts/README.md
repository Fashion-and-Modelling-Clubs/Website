# Fonts

The site uses **Coolvetica** for normal text and **Cormorant Garamond** for
headings.

Cormorant Garamond loads automatically from Google Fonts — nothing to do.

## Coolvetica

Coolvetica's free download is a **desktop licence**. It covers posters, graphics
and print, but **not embedding the font on a website**. A webfont licence is
sold at <https://typodermicfonts.com/coolvetica/> (also on MyFonts).

Once you have a webfont licence, put the files here:

```
public/assets/fonts/coolvetica.woff2         (regular)
public/assets/fonts/coolvetica-bold.woff2    (optional, bold)
```

That's the whole setup — the `@font-face` rules at the top of `src/index.css`
already point at these names, and the site picks them up on the next refresh.

## Until then

The site falls back to Helvetica Neue / Arial, which is the typeface Coolvetica
was drawn from. Widths are close, so nothing shifts around when you add the real
font later.

If you'd rather not license Coolvetica, a free alternative with a similar
tight-geometric feel is Archivo or Familjen Grotesk on Google Fonts. Add the
Google Fonts link to `index.html` and change the `body` stack in
`tailwind.config.js`.
