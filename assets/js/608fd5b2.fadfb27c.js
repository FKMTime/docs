"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[754],{949:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=i(6070),o=i(7468);const t={sidebar_position:4},s="Firmware",l={id:"development/firmware",title:"Firmware",description:"Install PlatformIO CLI",source:"@site/docs/development/firmware.md",sourceDirName:"development",slug:"/development/firmware",permalink:"/docs/development/firmware",draft:!1,unlisted:!1,editUrl:"https://github.com/FKMTime/docs/tree/main/docs/docs/development/firmware.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Setup micro-connector",permalink:"/docs/development/micro-connector"},next:{title:"Tests",permalink:"/docs/development/tests"}},d={},c=[{value:"Install PlatformIO CLI",id:"install-platformio-cli",level:2},{value:"Building",id:"building",level:2},{value:"Flashing",id:"flashing",level:2},{value:"Common issues",id:"common-issues",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"firmware",children:"Firmware"}),"\n",(0,r.jsx)(n.h2,{id:"install-platformio-cli",children:"Install PlatformIO CLI"}),"\n",(0,r.jsxs)(n.p,{children:["First of all you need to follow the ",(0,r.jsx)(n.a,{href:"https://docs.platformio.org/en/latest/core/installation/index.html",children:"installation guide"})]}),"\n",(0,r.jsx)(n.h2,{id:"building",children:"Building"}),"\n",(0,r.jsx)(n.p,{children:"You can easily build the firmware using platformio CLI commands."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd firmware #ensure you are in the firmware directory (in firmware repo)\npio run\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default after build binaries are copied into ",(0,r.jsx)(n.code,{children:"/tmp/fkm-build"})," folder. Development binaries are marked with their build time (epoch seconds)."]}),"\n",(0,r.jsx)(n.h2,{id:"flashing",children:"Flashing"}),"\n",(0,r.jsxs)(n.p,{children:["To easily flash firmware on the device, you can use the built-in OTA (over the air update) in the ",(0,r.jsx)(n.code,{children:"micro-connector"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["By default ",(0,r.jsx)(n.code,{children:"micro-connector"})," is watching ",(0,r.jsx)(n.code,{children:"/tmp/fkm-build"})," dir for firmware changes."]}),"\n",(0,r.jsxs)(n.p,{children:["To flash development firmware you need to add ",(0,r.jsx)(n.code,{children:"DEV"})," environment variable. If you are running ",(0,r.jsx)(n.code,{children:"micro-connector"})," using cargo (not docker) you can change that in ",(0,r.jsx)(n.code,{children:".env"})," file in project dir."]}),"\n",(0,r.jsx)(n.h3,{id:"common-issues",children:"Common issues"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["If you aren't using ",(0,r.jsx)(n.code,{children:"DEV"})," mode your firmware won't be updated to the development version of firmware."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},7468:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var r=i(758);const o={},t=r.createContext(o);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);