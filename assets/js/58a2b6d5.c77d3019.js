"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[412],{9997:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=s(6070),i=s(385);const l={sidebar_position:1},t="Setup environment",d={id:"development/dev-environment",title:"Setup environment",description:"You can run FKMTime in development mode in 2 ways:",source:"@site/docs/development/dev-environment.md",sourceDirName:"development",slug:"/development/dev-environment",permalink:"/development/dev-environment",draft:!1,unlisted:!1,editUrl:"https://github.com/FKMTime/docs/tree/main/docs/docs/development/dev-environment.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/category/development"},next:{title:"WCA Server",permalink:"/development/wca-server"}},a={},c=[{value:"Docker",id:"docker",level:2},{value:"Running backend and frontend separately",id:"running-backend-and-frontend-separately",level:2},{value:"Requirements",id:"requirements",level:4},{value:"Setup database",id:"setup-database",level:4},{value:"Backend",id:"backend",level:4},{value:"Frontend",id:"frontend",level:4}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"setup-environment",children:"Setup environment"}),"\n",(0,r.jsx)(n.p,{children:"You can run FKMTime in development mode in 2 ways:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Using Docker"}),"\n",(0,r.jsx)(n.li,{children:"Running backend and frontend separately"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Clone FKMTime repository and navigate into it"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/FKMTime/FKMTime\ncd FKMTime\n"})}),"\n",(0,r.jsx)(n.h2,{id:"docker",children:"Docker"}),"\n",(0,r.jsx)(n.p,{children:"Run the following command in the root directory of the project"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose up\n"})}),"\n",(0,r.jsx)(n.p,{children:"Frontend will be accessible at localhost:5173, backend at localhost:5000, database at localhost:5432 and api-tester at localhost:5001"}),"\n",(0,r.jsxs)(n.p,{children:["Read about setuping WCA and WCA Live server in ",(0,r.jsx)(n.a,{href:"/development/wca-server",children:"WCA Server"})," section."]}),"\n",(0,r.jsx)(n.h2,{id:"running-backend-and-frontend-separately",children:"Running backend and frontend separately"}),"\n",(0,r.jsx)(n.h4,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"NodeJS (version 19.0.0 or later)"}),"\n",(0,r.jsx)(n.li,{children:"PostgreSQL"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"setup-database",children:"Setup database"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Install PostgreSQL"}),"\n",(0,r.jsx)(n.li,{children:"Create a database"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE fkm_time;\n"})}),"\n",(0,r.jsx)(n.h4,{id:"backend",children:"Backend"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Navigate into backend directory"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd backend\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Install dependencies"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Create .env file and enter database URL, JWT secret and WCA and WCA Live URL"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"PORT=5000\nDATABASE_URL=postgres://postgres@localhost:5432/fkm_time\nSECRET=jwt_secret\nWCA_LIVE_API_ORIGIN=http://localhost:4000/api\nWCA_ORIGIN=http://localhost:3000\nWCA_CLIENT_ID=example-application-id\nWCA_CLIENT_SECRET=example-secret\n"})}),"\n",(0,r.jsx)(n.p,{children:"If you don't have WCA server running you can seed the DB with sample data by running"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run prisma:seed-test\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will also create a user with username ",(0,r.jsx)(n.code,{children:"admin"})," and password ",(0,r.jsx)(n.code,{children:"admin"}),", you can use these credentials to login to the admin panel instead of WCA account."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Run backend in development mode"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm run start:dev\n"})}),"\n",(0,r.jsx)(n.p,{children:"The server will be accessible at localhost:5000"}),"\n",(0,r.jsx)(n.h4,{id:"frontend",children:"Frontend"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Navigate into frontend directory"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd frontend\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Install dependencies"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm install\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Run development server"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npm run dev\n"})}),"\n",(0,r.jsx)(n.p,{children:"Admin panel will be accessible at localhost:5173"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},385:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var r=s(758);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);