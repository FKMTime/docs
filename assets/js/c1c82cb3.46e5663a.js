"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[938],{1475:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=s(6070),r=s(7468);const t={sidebar_position:1},o="FKM rev2.0 (standalone device - not display)",l={id:"assembly-guide/fkm-r2.0-wo-display",title:"FKM rev2.0 (standalone device - not display)",description:"To build your own FKM device you need few things:",source:"@site/docs/assembly-guide/fkm-r2.0-wo-display.md",sourceDirName:"assembly-guide",slug:"/assembly-guide/fkm-r2.0-wo-display",permalink:"/docs/assembly-guide/fkm-r2.0-wo-display",draft:!1,unlisted:!1,editUrl:"https://github.com/FKMTime/docs/tree/main/docs/docs/assembly-guide/fkm-r2.0-wo-display.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Assembly Guide",permalink:"/docs/category/assembly-guide"}},d={},c=[{value:"Electronics components",id:"electronics-components",level:2},{value:"PCB Board",id:"pcb-board",level:2},{value:"Panelization",id:"panelization",level:3},{value:"3D prints",id:"3d-prints",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"fkm-rev20-standalone-device---not-display",children:"FKM rev2.0 (standalone device - not display)"}),"\n",(0,i.jsx)(n.p,{children:"To build your own FKM device you need few things:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Soldering experience (and obviously soldering iron)"}),"\n",(0,i.jsx)(n.li,{children:"Basic electronics knowledge"}),"\n",(0,i.jsx)(n.li,{children:"A few electronics components"}),"\n",(0,i.jsx)(n.li,{children:"FKM PCB board"}),"\n",(0,i.jsx)(n.li,{children:"3d Printed case"}),"\n",(0,i.jsx)(n.li,{children:"m3 bolts (20mm)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"electronics-components",children:"Electronics components"}),"\n",(0,i.jsx)(n.p,{children:"I strongly recommend not buying them on aliexpress (quality of electronics there varies).\nIm going to link things i bought on TME, so you can buy the exact things i bought."}),"\n",(0,i.jsx)(n.p,{children:"Shops i recommend:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"TME"}),"\n",(0,i.jsx)(n.li,{children:"Mouser (expensive delivery options)"}),"\n",(0,i.jsx)(n.li,{children:"Botland"}),"\n",(0,i.jsx)(n.li,{children:"Digikey (expensive delivery options)"}),"\n",(0,i.jsx)(n.li,{children:"Lcsc (expensive delivery options)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"List of required electronics components:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.tme.eu/pl/details/esp32-wroom-32e/moduly-iot-wifi-bluetooth/espressif/esp32-wroom-32e-n4/",children:"ESP32-WROOM-32E"})," x1"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.tme.eu/pl/details/bhc-18650-1a/baterie-pojemniki-i-uchwyty/comf/",children:"18650 Cell holder"})," x1"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.tme.eu/pl/details/cl21a106kpfnnne/kondensatory-mlcc-smd/samsung/",children:"10uF capacitor"})," x1"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.tme.eu/pl/details/0805s8j0103t5e/rezystory-smd/royal-ohm/",children:"10kOHM resistor"})," x3"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.tme.eu/pl/details/ap2111h-3.3trg1/stabilizatory-napiecia-nieregulowane-ldo/diodes-incorporated/",children:"3.3V LDO (AP2111H-3.3TRG1"})," x1"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://botland.store/connectors-goldpin/20031-straight-goldpin-1x40-connector-with-254mm-pitch-black-10pcs-justpi-5904422329198.html",children:"Raster 2.54mm male headers"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"With this one, you can just buy other connector and cables for 2.54mm"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://botland.store/charger-modules-for-li-po-batteries/16979-tp4056-type-c-usb-5v-1a-lithium-battery-charger-module-board-5904422326708.html",children:"TP4056 with protection"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can buy it whereever, and you can also choose your plug (USB-C, MicroUsb, etc..)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"MFRC522 module (you can sea4ch for it on aliexpress - this blue one)"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://pl.aliexpress.com/item/1005006291057456.html?spm=a2g0o.home.pcJustForYouTop.2.3011405fo3T8yr&gps-id=pcJustForYouTop&scm=1007.13562.333647.0&scm_id=1007.13562.333647.0&scm-url=1007.13562.333647.0&pvid=5af44ded-8df1-4e8a-b1fd-5982fc7d2bec&_t=gps-id:pcJustForYouTop,scm-url:1007.13562.333647.0,pvid:5af44ded-8df1-4e8a-b1fd-5982fc7d2bec,tpp_buckets:668%232846%238116%232002&pdp_npi=4%40dis%21PLN%214.20%214.74%21%21%217.44%218.40%21%402102f6cb17153299350271189e1cba%2112000036755786465%21rec%21PL%212112067295%21&utparam-url=scene%3ApcJustForYouTop%7Cquery_from%3A",children:"LCD 16x2"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"HD44780 LCD + I2C adapter"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"PCB RED ARROWS",src:s(5507).A+"",width:"933",height:"726"})}),"\n",(0,i.jsx)(n.h2,{id:"pcb-board",children:"PCB Board"}),"\n",(0,i.jsx)(n.p,{children:"To connect everything together you need to buy custom PCB's."}),"\n",(0,i.jsx)(n.p,{children:"I personally prefer JLCPCB, so i'll provide guide only for JLCPCB. Here are the steps:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(1117).A+"",children:"Get the gerber files"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can also generate them yourself, just download KICAD and search for Fabrication Output"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Upload them on JLCPCB's website and get the quote"}),"\n",(0,i.jsx)(n.li,{children:"Use default settings (2 layers, 1.6 thickness, 1oz copper weight, etc..)"}),"\n",(0,i.jsx)(n.li,{children:"Click SAVE TO CART button and then order it"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"panelization",children:"Panelization"}),"\n",(0,i.jsxs)(n.p,{children:["To order more PCBs for less money you can panelize them using the ",(0,i.jsx)(n.code,{children:"panelize.sh"})," script located in the ",(0,i.jsx)(n.code,{children:"pcb"})," directory of the ",(0,i.jsx)(n.code,{children:"firmware"})," github repo.\nRunning this script will generate Gerber files for panel with 6PCB's. Ordering this will be much cheaper than ordering just one PCB."]}),"\n",(0,i.jsx)(n.h2,{id:"3d-prints",children:"3D prints"}),"\n",(0,i.jsx)(n.p,{children:"You need to print these things:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://example.com",children:"Case"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://example.com",children:"Lid"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://example.com",children:"Switch holder"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1117:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/files/gerbers-fkm20wod-6e9d74ebf434542b0ecb72935df9cfdc.zip"},5507:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/pcb-arrows-3d52b8d5b0d4a630dbcf5a5b1d13673a.png"},7468:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(758);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);