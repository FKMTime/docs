"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[465],{8802:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(6070),a=t(7468);const i={sidebar_position:5},o="Importing database dump",r={id:"development/importing-database-dump",title:"Importing database dump",description:"You can import the database dump into the development environment in the following way:",source:"@site/docs/development/importing-database-dump.md",sourceDirName:"development",slug:"/development/importing-database-dump",permalink:"/development/importing-database-dump",draft:!1,unlisted:!1,editUrl:"https://github.com/FKMTime/docs/tree/main/docs/docs/development/importing-database-dump.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Firmware",permalink:"/development/firmware"},next:{title:"Tests",permalink:"/category/tests"}},d={},l=[];function c(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"importing-database-dump",children:"Importing database dump"}),"\n",(0,s.jsx)(n.p,{children:"You can import the database dump into the development environment in the following way:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Copy the dump file to the database container:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker cp dump.sql fkmtime-dev-database:/dump.sql;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Enter the database container:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker exec -it fkmtime-dev-database bash;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Enter the psql shell:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"psql -d fkm_time;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Run the following command in the container:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP SCHEMA public CASCADE;\nCREATE SCHEMA public;\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Exit psql shell and run the following command in the Docker container:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"psql -d fkm_time < dump.sql;\n"})}),"\n",(0,s.jsx)(n.p,{children:"That's it! You have successfully imported the database dump into the development environment."})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},7468:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(758);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);