---
sidebar_position: 1
---

# FKM rev2.0 (standalone device - not display)

To build your own FKM device you need few things:
- Soldering experience (and obviously soldering iron)
- Basic electronics knowledge
- A few electronics components
- FKM PCB board
- 3d Printed case

## Electronics components

I strongly recommend not buying them on aliexpress (quality of electronics there varies).
Im going to link things i bought on TME, so you can buy the exact things i bought.

Shops i recommend:
- TME
- Mouser (expensive delivery options)
- Botland
- Digikey (expensive delivery options)
- Lcsc (expensive delivery options)

List of required electronics components:
- [ESP32-WROOM-32E](https://www.tme.eu/pl/details/esp32-wroom-32e/moduly-iot-wifi-bluetooth/espressif/esp32-wroom-32e-n4/) x1
- [18650 Cell holder](https://www.tme.eu/pl/details/bhc-18650-1a/baterie-pojemniki-i-uchwyty/comf/) x1
- [10uF capacitor](https://www.tme.eu/pl/details/cl21a106kpfnnne/kondensatory-mlcc-smd/samsung/) x1
- [10kOHM resistor](https://www.tme.eu/pl/details/0805s8j0103t5e/rezystory-smd/royal-ohm/) x3
- [3.3V LDO (AP2111H-3.3TRG1](https://www.tme.eu/pl/details/ap2111h-3.3trg1/stabilizatory-napiecia-nieregulowane-ldo/diodes-incorporated/) x1
- [Raster 2.54mm male headers](https://botland.store/connectors-goldpin/20031-straight-goldpin-1x40-connector-with-254mm-pitch-black-10pcs-justpi-5904422329198.html)
    - With this one, you can just buy other connector and cables for 2.54mm
- [TP4056 with protection](https://botland.store/charger-modules-for-li-po-batteries/16979-tp4056-type-c-usb-5v-1a-lithium-battery-charger-module-board-5904422326708.html)
    - You can buy it whereever, and you can also choose your plug (USB-C, MicroUsb, etc..)

![PCB RED ARROWS](/img/pcb-arrows.png)

## PCB Board

To connect everything together you need to buy custom PCB's.

I personally prefer JLCPCB, so i'll provide guide only for JLCPCB. Here are the steps:
- [Get the gerber files](/gerbers-fkm20wod.zip)
    - You can also generate them yourself, just download KICAD and search for Fabrication Output
- Upload them on JLCPCB's website and get the quote
- Use default settings (2 layers, 1.6 thickness, 1oz copper weight, etc..)
- Click SAVE TO CART button and then order it

### Panelization

To order more PCBs for less money you can panelize them using the `panelize.sh` script located in the `pcb` directory of the `firmware` github repo.
Running this script will generate Gerber files for panel with 6PCB's. Ordering this will be much cheaper than ordering just one PCB.
