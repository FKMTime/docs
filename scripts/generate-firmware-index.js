#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Scans `static/firmware` for merged firmware binaries and generates
 * `static/firmware/index.json`, used by the in-browser flasher page.
 *
 * Expected filename format: `<hwRev>_<type>_v<version>_MERGED.bin`
 *   e.g. `v3_STATION_v3.4.0_MERGED.bin`, `v4_STATION_v3.4.0_MERGED.bin`
 */
const fs = require("fs");
const path = require("path");

const FIRMWARE_DIR = path.join(__dirname, "..", "static", "firmware");
const OUTPUT_FILE = path.join(FIRMWARE_DIR, "index.json");

const FILE_REGEX = /^(v\d+)_([A-Z0-9]+)_v(\d+\.\d+\.\d+)_MERGED\.bin$/i;

function compareVersionsDesc(a, b) {
  const av = a.split(".").map(Number);
  const bv = b.split(".").map(Number);
  for (let i = 0; i < Math.max(av.length, bv.length); i++) {
    const diff = (bv[i] || 0) - (av[i] || 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

function main() {
  if (!fs.existsSync(FIRMWARE_DIR)) {
    fs.mkdirSync(FIRMWARE_DIR, { recursive: true });
  }

  const entries = fs
    .readdirSync(FIRMWARE_DIR)
    .filter((f) => f.toLowerCase().endsWith(".bin"));

  /** @type {Record<string, { hwRev: string, type: string, versions: { version: string, file: string }[] }>} */
  const groups = {};

  for (const file of entries) {
    const match = file.match(FILE_REGEX);
    if (!match) {
      console.warn(`[firmware-index] Skipping unrecognized file: ${file}`);
      continue;
    }
    const [, hwRev, type, version] = match;
    const key = `${hwRev.toLowerCase()}_${type.toUpperCase()}`;
    if (!groups[key]) {
      groups[key] = {
        hwRev: hwRev.toLowerCase(),
        type: type.toUpperCase(),
        versions: [],
      };
    }
    groups[key].versions.push({ version, file });
  }

  const groupList = Object.values(groups)
    .map((g) => ({
      ...g,
      versions: g.versions.sort((a, b) => compareVersionsDesc(a.version, b.version)),
    }))
    .sort((a, b) => {
      // Sort by hardware revision (newest first), then by type alphabetically
      const hwCmp = compareVersionsDesc(
        a.hwRev.replace(/^v/, ""),
        b.hwRev.replace(/^v/, "")
      );
      if (hwCmp !== 0) return hwCmp;
      return a.type.localeCompare(b.type);
    });

  const output = {
    generatedAt: new Date().toISOString(),
    groups: groupList,
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2) + "\n");
  console.log(
    `[firmware-index] Wrote ${OUTPUT_FILE} (${groupList.length} group(s), ${entries.length} file(s))`
  );
}

main();
