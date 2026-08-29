import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * BASE PATH — READ THIS BEFORE DEPLOYING
 * --------------------------------------
 * GitHub Pages serves a project repository from a sub-folder:
 *   https://YOUR_USERNAME.github.io/nitj-fashion/
 * so Vite must know that the site does not live at the domain root.
 *
 * If your repository is named something else, change the string below to
 * "/your-repo-name/".
 * If you deploy to YOUR_USERNAME.github.io or to a custom domain,
 * change it to "/".
 *
 * Never hard-code "/assets/..." in your code. Image paths are built in
 * src/data/images.js with import.meta.env.BASE_URL so they follow this setting.
 */
export default defineConfig({
  base: "/Website/",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "build",
  },
});
