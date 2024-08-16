"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28],{8207:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=r(6070),o=r(7468);const s={sidebar_position:2},i="WCA Server",c={id:"development/wca-server",title:"WCA Server",description:"FKMTime needs WCA server and WCA Live server to work properly.",source:"@site/docs/development/wca-server.md",sourceDirName:"development",slug:"/development/wca-server",permalink:"/development/wca-server",draft:!1,unlisted:!1,editUrl:"https://github.com/FKMTime/docs/tree/main/docs/docs/development/wca-server.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup environment",permalink:"/development/dev-environment"},next:{title:"Setup micro-connector",permalink:"/development/micro-connector"}},d={},a=[{value:"WCA website",id:"wca-website",level:2},{value:"WCA Live",id:"wca-live",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"wca-server",children:"WCA Server"}),"\n",(0,n.jsx)(t.p,{children:"FKMTime needs WCA server and WCA Live server to work properly."}),"\n",(0,n.jsx)(t.h2,{id:"wca-website",children:"WCA website"}),"\n",(0,n.jsxs)(t.p,{children:["By default, FKMTime uses ",(0,n.jsx)(t.a,{href:"https://github.com/maxidragon/dummy-wca",children:"dummy-wca"})," that is included in ",(0,n.jsx)(t.code,{children:"docker-compose-dev.yml"})," file. With this as a WCA server, you can login using OAuth and import competition."]}),"\n",(0,n.jsxs)(t.p,{children:["If you want to use real WCA Server you can either setup ",(0,n.jsx)(t.a,{href:"https://docs.worldcubeassociation.org/contributing/quickstart.html",children:"local WCA Server"})," or use a staging one (if you have access). If you want to use staging server just change ",(0,n.jsx)(t.code,{children:"WCA_ORIGIN"})," in ",(0,n.jsx)(t.code,{children:"docker-compose-dev.yml"})," file to ",(0,n.jsx)(t.code,{children:"https://staging.worldcubeassociation.org"})," and update ",(0,n.jsx)(t.code,{children:"frontend/src/logic/request.ts"}),";"]}),"\n",(0,n.jsx)(t.h2,{id:"wca-live",children:"WCA Live"}),"\n",(0,n.jsxs)(t.p,{children:["You can read how to setup local WCA Live server ",(0,n.jsx)(t.a,{href:"https://github.com/thewca/wca-live?tab=readme-ov-file#developing-in-docker",children:"here"})]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},7468:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(758);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);