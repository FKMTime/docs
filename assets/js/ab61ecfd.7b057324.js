"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[879],{2129:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=o(6070),r=o(7468);const s={sidebar_position:1},i="Setup for production",c={id:"production/setup-for-production",title:"Setup for production",description:"The system is designed to be configured from scratch for each competition. Everything should be run on a computer located at the competition venue.",source:"@site/docs/production/setup-for-production.md",sourceDirName:"production",slug:"/production/setup-for-production",permalink:"/docs/production/setup-for-production",draft:!1,unlisted:!1,editUrl:"https://github.com/FKMTime/docs/tree/main/docs/docs/production/setup-for-production.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Production",permalink:"/docs/category/production"},next:{title:"Accessing logs",permalink:"/docs/production/accessing-logs"}},a={},d=[{value:"Clone the repository (and navigate into it)",id:"clone-the-repository-and-navigate-into-it",level:2},{value:"Environment variables",id:"environment-variables",level:2},{value:"Logs user",id:"logs-user",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"setup-for-production",children:"Setup for production"}),"\n",(0,t.jsx)(n.p,{children:"The system is designed to be configured from scratch for each competition. Everything should be run on a computer located at the competition venue."}),"\n",(0,t.jsx)(n.p,{children:"We use Docker for production. Do the following steps to run the server:"}),"\n",(0,t.jsx)(n.h2,{id:"clone-the-repository-and-navigate-into-it",children:"Clone the repository (and navigate into it)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/FKMTime/FKMTime\ncd FKMTime\n"})}),"\n",(0,t.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,t.jsx)(n.p,{children:"Rename the .env.example file to .env and fill in the required fields."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mv .env.example .env\n"})}),"\n",(0,t.jsx)(n.p,{children:"For now, contact us and we will send you hash, token, proxy and WCA oauth credentials. Server will be running locally, but will be accessible from the internet through our proxy server."}),"\n",(0,t.jsxs)(n.p,{children:["We are using ",(0,t.jsx)(n.a,{href:"https://github.com/FKMTime/fkm-proxy",children:"fkm-proxy"})," for proxying requests to the server. You can find more information about it in the repository."]}),"\n",(0,t.jsx)(n.h2,{id:"logs-user",children:"Logs user"}),"\n",(0,t.jsx)(n.p,{children:"Generate a password hash for the logs user using the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"echo -n 'secret-password' | shasum -a 256\n"})}),"\n",(0,t.jsx)(n.p,{children:'Rename the users-example.yml file to users.yml and paste your hash into "password" field'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mv dozzle/users-example.yml dozzle/users.yml\n"})}),"\n",(0,t.jsx)(n.p,{children:"And finally, run the following command to start the server:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker compose up\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will start backend, micro-connector, database and the frontend."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},7468:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var t=o(758);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);