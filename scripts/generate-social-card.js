#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Generates `static/img/social-card.png` (1200x630) — the OpenGraph embed
 * image used by Discord, Twitter, etc.
 *
 * Pipeline:
 *   1. Render `static/img/logo.svg` to a transparent PNG via rsvg-convert.
 *   2. Render an SVG composite (gradient + text + CTA) to a PNG.
 *   3. Use Python + Pillow to paste the logo onto the corner of the
 *      composite (rsvg-convert in this environment doesn't reliably
 *      render <image> children, so we composite externally).
 *
 * Requires `rsvg-convert` and Python 3 with Pillow on the build host.
 */
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const LOGO_SVG = path.join(ROOT, "static", "img", "logo.svg");
const OUT_PNG = path.join(ROOT, "static", "img", "social-card.png");
const CACHE = path.join(ROOT, "node_modules", ".cache");
const TMP_LOGO = path.join(CACHE, "social-logo.png");
const TMP_BG_SVG = path.join(CACHE, "social-card-bg.svg");
const TMP_BG_PNG = path.join(CACHE, "social-card-bg.png");

fs.mkdirSync(CACHE, { recursive: true });

// 1. Logo as transparent PNG.
const LOGO_W = 260;
const LOGO_H = 130;
execFileSync("rsvg-convert", ["-w", String(LOGO_W), LOGO_SVG, "-o", TMP_LOGO], {
  stdio: "inherit",
});

// 2. Background + text composite SVG (no raster <image> elements).
const bgSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1a8870"/>
      <stop offset="1" stop-color="#205d3b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Title -->
  <text x="80" y="290" font-family="Helvetica, Arial, sans-serif" font-size="72" font-weight="800" fill="#ffffff">FKMTime Documentation</text>

  <!-- Tagline -->
  <text x="80" y="360" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="400" fill="#e6f5ee">Run scorecard-free speedcubing competitions:</text>
  <text x="80" y="402" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="400" fill="#e6f5ee">setup guides, hardware assembly, firmware flashing &amp; debugging.</text>

  <!-- CTA button -->
  <rect x="80" y="470" width="310" height="76" rx="38" fill="#ffffff"/>
  <text x="235" y="520" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="700" fill="#1a8870">Read the docs →</text>

  <!-- URL -->
  <text x="1120" y="585" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="500" fill="#cfe9dd">docs.fkmtime.com</text>
</svg>
`;
fs.writeFileSync(TMP_BG_SVG, bgSvg);
execFileSync("rsvg-convert", [TMP_BG_SVG, "-o", TMP_BG_PNG], {
  stdio: "inherit",
});

// 3. Composite logo onto background using Python + Pillow.
const LOGO_X = 1200 - LOGO_W - 60; // 60px right margin
const LOGO_Y = 50;
const py = `
from PIL import Image
bg = Image.open(${JSON.stringify(TMP_BG_PNG)}).convert("RGBA")
logo = Image.open(${JSON.stringify(TMP_LOGO)}).convert("RGBA")
bg.alpha_composite(logo, (${LOGO_X}, ${LOGO_Y}))
bg.convert("RGB").save(${JSON.stringify(OUT_PNG)}, "PNG", optimize=True)
`;
execFileSync("python3", ["-c", py], { stdio: "inherit" });

console.log(`[social-card] Wrote ${OUT_PNG}`);
