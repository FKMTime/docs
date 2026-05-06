---
sidebar_position: 1
---

# FKM hardware revision v4

The hardware revision **v4** is the current production version of the FKM
station. All production files (PCB, BOM, 3D-printed case, interactive BOM)
are available in this repository under `/assembly-v4/`.

## What you need

- Soldering experience is **not required** if you have JLCPCB assemble the
  board for you (recommended). Otherwise, SMD soldering skills and
  reflow/hot-air station are needed.
- Access to a 3D printer (FDM is fine) for the case.
- A few non-BOM parts listed below.

## Files

| File | Purpose |
| --- | --- |
| [`Gerber_FKM_PCB.zip`](/assembly-v4/Gerber_FKM_PCB.zip) | PCB fabrication files (upload to JLCPCB / PCBWay) |
| [`BOM_FKM_PCB.csv`](/assembly-v4/BOM_FKM_PCB.csv) | Bill of materials (LCSC part numbers) |
| [`BOM_FKM_PCB.xlsx`](/assembly-v4/BOM_FKM_PCB.xlsx) | Same BOM in Excel format |
| [`InteractiveBOM_FKM_PCB.html`](pathname:///assembly-v4/InteractiveBOM_FKM_PCB.html) | Interactive BOM - open in your browser while soldering |
| [`FKM - Case.stl`](/assembly-v4/FKM%20-%20Case.stl) | Top shell (3D print) |
| [`FKM - Bottom.stl`](/assembly-v4/FKM%20-%20Bottom.stl) | Bottom cover (3D print) |

## PCB manufacturing & assembly (JLCPCB)

The easiest path is to have JLCPCB manufacture **and assemble** the board.
All parts in [`BOM_FKM_PCB.csv`](/assembly-v4/BOM_FKM_PCB.csv) are LCSC
stock items, so SMT assembly is a one-click order.

1. Go to [JLCPCB](https://jlcpcb.com/) and start a new order.
2. Upload [`Gerber_FKM_PCB.zip`](/assembly-v4/Gerber_FKM_PCB.zip).
3. Use default PCB settings (2 layers, 1.6 mm thickness, 1 oz copper).
4. Enable **PCB Assembly** and upload the BOM
   ([`BOM_FKM_PCB.csv`](/assembly-v4/BOM_FKM_PCB.csv) or `.xlsx`) and the
   centroid/pick-and-place file (export from KiCad if building yourself,
   or contact us for the `.pos` file).
5. Confirm part matches and place the order.

If you prefer to solder the board by hand, use the
[interactive BOM](pathname:///assembly-v4/InteractiveBOM_FKM_PCB.html) - it highlights
each component's position on the PCB as you click it.

## Parts **not** included in the BOM

These need to be bought separately and installed by hand after SMT assembly:

- **2.42" OLED display** (128×64, SPI/I²C, SSD1309 driver), e.g.
  [this module on Alibaba](https://www.alibaba.com/product-detail/New-2-42-2-42-Inch_1601742110606.html)
  × 1
- **M2.3 × 8 mm screws** × 2, used to fasten the PCB into the top case, e.g.
  [these on AliExpress](https://pl.aliexpress.com/item/1005008724193768.html)
- **M3 nuts** × 2, press-fit into the bottom of the case
- **M3 screws** × 2, to attach the bottom cover to the case
- **Keycaps for 6×6 mm tact switches** × 4 (one per button), e.g.
  [LCSC C42435552](https://www.lcsc.com/product-detail/C42435552.html)
- **18650 Li-ion cell** × 1 (cell holder is on the BOM)

## 3D-printed case

Print both STL files with any standard FDM profile (0.2 mm layer height,
15-20 % infill). **PETG is recommended** for the case (better impact and
heat resistance than PLA).

- [Top case](/assembly-v4/FKM%20-%20Case.stl): print **upside down** (with
  the open side facing up). **Supports are required** to get a smooth
  outer surface on the front of the case.
- [Bottom cover](/assembly-v4/FKM%20-%20Bottom.stl): no supports needed.

### Multicolor button labels (optional)

If you have a multi-material / multi-color printer (Bambu AMS, Prusa MMU,
etc.), you can print the button labels in a contrasting color so they are
visible directly on the case, no stickers required.

In your slicer:

1. Load the top case STL.
2. Pick the **bucket / paint fill tool** and select your label color.
3. Hover over the top of the case to find the hidden internal mesh that
   has all the letters joined to it. The model contains a dedicated
   structure connecting every label, so a single bucket-fill click on it
   colors all four button labels at once.
4. Slice and print.

## Final assembly

1. Solder the PCB (or pick it up assembled from JLCPCB).
2. Press the 2.42" OLED into its slot in the top case from the inside.
   The printed plastic clamps hold it in place against the front window,
   no glue or screws needed.
3. Place the PCB into the top case.
4. Screw the PCB down with the 2 × M2.3 × 8 mm screws.
5. Connect the OLED's FPC ribbon cable to the connector on the PCB.
6. Insert the 18650 cell into the holder.
7. Press the 2 × M3 nuts into the hex pockets on the bottom cover.
8. Place the bottom cover onto the case and secure it with the 2 × M3
   screws (screwing into the press-fit nuts).
9. Push the 4 keycaps onto the tact switches through the holes in the
   top case.
10. [Flash the firmware](../firmware-flashing) directly from your browser.

Once flashed, follow [Adding devices](../basic-knowledge/adding-devices) to
register the station with your FKMTime server.
