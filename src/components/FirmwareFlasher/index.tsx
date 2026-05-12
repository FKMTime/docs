import React, { useEffect, useMemo, useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

type FirmwareVersion = {
  version: string;
  file: string;
};

type FirmwareGroup = {
  hwRev: string;
  type: string;
  versions: FirmwareVersion[];
};

type FirmwareIndex = {
  generatedAt: string;
  groups: FirmwareGroup[];
};

function useEspWebToolsLoader() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;
    // Dynamic import so the package is only bundled into a client-side
    // chunk (esp-web-tools relies on browser-only APIs and cannot be
    // executed during SSR).
    import("esp-web-tools/dist/web/install-button.js")
      .then(() => {
        if (!cancelled) setLoaded(true);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error("Failed to load esp-web-tools", err);
      });
    return () => {
      cancelled = true;
    };
  }, []);
  return loaded;
}

function buildManifest(group: FirmwareGroup, v: FirmwareVersion, baseUrl: string) {
  return {
    name: `FKMTime ${group.hwRev.toUpperCase()} ${group.type}`,
    version: v.version,
    new_install_prompt_erase: true,
    builds: [
      {
        chipFamily: "ESP32-C3",
        parts: [
          {
            path: `${baseUrl}firmware/${v.file}`,
            offset: 0,
          },
        ],
      },
    ],
  };
}

type FlashButtonProps = {
  group: FirmwareGroup;
  version: FirmwareVersion;
  baseUrl: string;
  label?: string;
};

function FlashButton({ group, version, baseUrl, label }: FlashButtonProps) {
  const ref = React.useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const manifest = buildManifest(group, version, baseUrl);
    const blob = new Blob([JSON.stringify(manifest)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    (ref.current as any).manifest = url;
    return () => URL.revokeObjectURL(url);
  }, [group, version, baseUrl]);

  return (
    <esp-web-install-button ref={ref as React.RefObject<HTMLElement>}>
      <button slot="activate" className={styles.flashButton}>
        {label ?? "Flash"}
      </button>
      <span slot="unsupported" className={styles.unsupported}>
        Your browser does not support Web Serial. Use a Chromium-based browser
        (Chrome, Edge, Opera) over HTTPS.
      </span>
      <span slot="not-allowed" className={styles.unsupported}>
        Web Serial is only available over HTTPS.
      </span>
    </esp-web-install-button>
  );
}

function FirmwareGroupCard({
  group,
  baseUrl,
}: {
  group: FirmwareGroup;
  baseUrl: string;
}) {
  const [latest] = group.versions;
  const [versionSearch, setVersionSearch] = useState("");
  const [selectedVersion, setSelectedVersion] = useState<FirmwareVersion | null>(
    null,
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);
  const allVersions = group.versions;

  const filteredVersions = useMemo(() => {
    const q = versionSearch.trim().toLowerCase();
    if (!q) return allVersions;
    return allVersions.filter((v) => v.version.toLowerCase().includes(q));
  }, [allVersions, versionSearch]);

  useEffect(() => {
    const hasSelected = selectedVersion
      ? allVersions.some((v) => v.version === selectedVersion.version)
      : false;
    if (hasSelected) return;
    setSelectedVersion(allVersions[0] ?? null);
  }, [allVersions, selectedVersion]);

  useEffect(() => {
    if (!menuOpen) return;
    const onMouseDown = (event: MouseEvent) => {
      if (!menuRef.current) return;
      if (menuRef.current.contains(event.target as Node)) return;
      setMenuOpen(false);
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [menuOpen]);

  if (!latest) return null;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.identityBlock}>
          <h3 className={styles.cardTitle}>{group.hwRev.toUpperCase()}</h3>
          <p className={styles.cardSubtitle}>{group.type}</p>
        </div>
        <div className={styles.latestPill}>Latest v{latest.version}</div>
      </div>

      <div className={styles.olderSection}>
        <div className={styles.olderPicker}>
          <div className={styles.searchLabel}>Firmware version</div>
          <div className={styles.controlRow}>
            <div className={styles.dropdown} ref={menuRef}>
              <button
                type="button"
                className={styles.dropdownTrigger}
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
              >
                <span className={styles.dropdownTriggerValue}>
                  {selectedVersion ? (
                    <>
                      <span>v{selectedVersion.version}</span>
                      {selectedVersion.version === latest.version && (
                        <span className={styles.latestTag}>latest</span>
                      )}
                    </>
                  ) : (
                    "Choose version"
                  )}
                </span>
                <span aria-hidden>▾</span>
              </button>
              {menuOpen && (
                <div className={styles.dropdownMenu}>
                  <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search version..."
                    value={versionSearch}
                    onChange={(e) => setVersionSearch(e.target.value)}
                  />
                  <ul className={styles.optionList}>
                    {filteredVersions.length === 0 ? (
                      <li className={styles.emptyOption}>No versions match</li>
                    ) : (
                      filteredVersions.map((v) => (
                        <li key={v.version}>
                          <button
                            type="button"
                            className={styles.optionButton}
                            onClick={() => {
                              setSelectedVersion(v);
                              setMenuOpen(false);
                            }}
                          >
                            <span>v{v.version}</span>
                            {v.version === latest.version && (
                              <span className={styles.latestTag}>latest</span>
                            )}
                          </button>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              )}
            </div>
            {selectedVersion && (
              <FlashButton group={group} version={selectedVersion} baseUrl={baseUrl} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FirmwareFlasherInner() {
  const indexUrl = useBaseUrl("/firmware/index.json");
  const baseUrl = useBaseUrl("/");
  const espLoaded = useEspWebToolsLoader();
  const [index, setIndex] = useState<FirmwareIndex | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(indexUrl)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => {
        if (!cancelled) setIndex(data);
      })
      .catch((e) => {
        if (!cancelled) setError(String(e));
      });
    return () => {
      cancelled = true;
    };
  }, [indexUrl]);

  const isSupported = useMemo(() => {
    if (typeof navigator === "undefined") return false;
    return "serial" in navigator;
  }, []);

  if (error) {
    return (
      <div className={styles.error}>
        Failed to load firmware index: <code>{error}</code>
      </div>
    );
  }

  if (!index) {
    return <div className={styles.loading}>Loading firmware list…</div>;
  }

  if (index.groups.length === 0) {
    return (
      <div className={styles.empty}>
        No firmware binaries are available yet. Please check back later.
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {!isSupported && (
        <div className={styles.warning}>
          <strong>Web Serial not supported.</strong> Use a Chromium-based
          browser (Chrome, Edge or Opera) on desktop to flash firmware directly
          from this page.
        </div>
      )}
      {!espLoaded && (
        <div className={styles.loading}>Loading flasher…</div>
      )}
      <div className={styles.cards}>
        {index.groups.map((g) => (
          <FirmwareGroupCard
            key={`${g.hwRev}_${g.type}`}
            group={g}
            baseUrl={baseUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default function FirmwareFlasher() {
  return (
    <BrowserOnly fallback={<div>Loading flasher…</div>}>
      {() => <FirmwareFlasherInner />}
    </BrowserOnly>
  );
}
