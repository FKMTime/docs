import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const SITE_TITLE = "FKMTime Documentation — Scorecard-free Speedcubing System";
const SITE_DESCRIPTION =
  "Open-source documentation for FKMTime — run speedcubing competitions without scorecards. Setup guides, hardware assembly, firmware flashing and debugging.";

const config: Config = {
  title: "FKMTime",
  tagline: SITE_DESCRIPTION,
  favicon: "img/favicon.ico",
  url: "https://docs.fkmtime.com",
  baseUrl: "/",
  organizationName: "FKMTime",
  projectName: "FKMTime",
  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  // Static head tags — emitted directly into the HTML, bypassing
  // react-helmet so they take precedence over Docusaurus' auto-generated
  // og:title / twitter:title (which would otherwise just be "FKMTime").
  headTags: [
    {
      tagName: "meta",
      attributes: { property: "og:title", content: SITE_TITLE },
    },
    {
      tagName: "meta",
      attributes: { name: "twitter:title", content: SITE_TITLE },
    },
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    require.resolve("docusaurus-lunr-search"),
    require.resolve("docusaurus-plugin-image-zoom"),
    // Inline plugin: strip Docusaurus' auto-generated og:title /
    // twitter:title (which mirror the short page title) from built HTML
    // so only our long SEO-optimised values from `headTags` remain.
    function stripAutoOgTitlePlugin() {
      return {
        name: "strip-auto-og-title",
        async postBuild({ outDir }: { outDir: string }) {
          const fs = await import("fs");
          const path = await import("path");
          const walk = (dir: string): string[] =>
            fs
              .readdirSync(dir, { withFileTypes: true })
              .flatMap((d) => {
                const full = path.join(dir, d.name);
                if (d.isDirectory()) return walk(full);
                return d.name.endsWith(".html") ? [full] : [];
              });
          const re =
            /<meta[^>]*data-rh="true"[^>]*(?:property="og:title"|name="twitter:title")[^>]*>/g;
          for (const file of walk(outDir)) {
            const html = fs.readFileSync(file, "utf8");
            const stripped = html.replace(re, "");
            if (stripped !== html) fs.writeFileSync(file, stripped);
          }
        },
      };
    },
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          editUrl: "https://github.com/FKMTime/docs/tree/main/docs/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/social-card.png",
    metadata: [
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://docs.fkmtime.com" },
      { property: "og:image", content: "https://docs.fkmtime.com/img/social-card.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: "https://docs.fkmtime.com/img/social-card.png" },
    ],
    navbar: {
      title: "FKMTime",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/FKMTime/FKMTime",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
