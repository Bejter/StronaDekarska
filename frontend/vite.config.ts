import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { seoHead, seoPages, siteUrl } from "./src/seo.ts";

const withSeo = (html: string, path: string) => html.replace(
  /<!--seo-start-->[\s\S]*?<!--seo-end-->/,
  `<!--seo-start-->\n${seoHead(path)}\n<!--seo-end-->`,
);

export default defineConfig({
  plugins: [react(), tailwindcss(), {
    name: "static-seo-pages",
    transformIndexHtml(html, context) {
      return withSeo(html, context.path.replace(/\/index\.html$/, "/"));
    },
    async writeBundle(options) {
      const outDir = resolve(options.dir ?? "dist");
      const template = await readFile(resolve(outDir, "index.html"), "utf8");
      for (const page of seoPages) {
        const filename = page.path === "/" ? "index.html" : `${page.path.slice(1)}.html`;
        await writeFile(resolve(outDir, filename), withSeo(template, page.path));
      }
      const urls = seoPages.map((page) => `  <url><loc>${siteUrl}${page.path}</loc></url>`).join("\n");
      await writeFile(resolve(outDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
      await writeFile(resolve(outDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
    },
  }],
});
