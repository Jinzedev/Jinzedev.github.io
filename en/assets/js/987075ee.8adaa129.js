"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[109],{7095:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var s=n(5893),t=n(1151);const c={title:"\u642d\u5efa\u79c1\u6709Docker Registry",tags:["linux","Registry","docker"]},o=void 0,i={id:"Docker \u9879\u76ee\u90e8\u7f72\u5b9e\u6218/\u642d\u5efa\u79c1\u6709Docker Registry",title:"\u642d\u5efa\u79c1\u6709Docker Registry",description:"\u521b\u5efa\u9a8c\u8bc1\u5bc6\u7801",source:"@site/docs/Docker \u9879\u76ee\u90e8\u7f72\u5b9e\u6218/\u642d\u5efa\u79c1\u6709Docker Registry.md",sourceDirName:"Docker \u9879\u76ee\u90e8\u7f72\u5b9e\u6218",slug:"/Docker \u9879\u76ee\u90e8\u7f72\u5b9e\u6218/\u642d\u5efa\u79c1\u6709Docker Registry",permalink:"/en/docs/Docker \u9879\u76ee\u90e8\u7f72\u5b9e\u6218/\u642d\u5efa\u79c1\u6709Docker Registry",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker \u9879\u76ee\u90e8\u7f72\u5b9e\u6218/\u642d\u5efa\u79c1\u6709Docker Registry.md",tags:[{label:"linux",permalink:"/en/docs/tags/linux"},{label:"Registry",permalink:"/en/docs/tags/registry"},{label:"docker",permalink:"/en/docs/tags/docker"}],version:"current",frontMatter:{title:"\u642d\u5efa\u79c1\u6709Docker Registry",tags:["linux","Registry","docker"]},sidebar:"tutorialSidebar",previous:{title:"Portainer\u5b89\u88c5\u6c49\u5316\u4e00\u6b65\u5230\u4f4d",permalink:"/en/docs/Docker \u9879\u76ee\u90e8\u7f72\u5b9e\u6218/Portainer\u5b89\u88c5\u6c49\u5316\u4e00\u6b65\u5230\u4f4d"},next:{title:"\u6e05\u9664\u56fe\u6807\u7f13\u5b58",permalink:"/en/docs/Win\u811a\u672c/2023-12-29-\u6e05\u9664\u56fe\u6807\u7f13\u5b58"}},a={},l=[{value:"\u521b\u5efa\u9a8c\u8bc1\u5bc6\u7801",id:"\u521b\u5efa\u9a8c\u8bc1\u5bc6\u7801",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:2}];function d(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"\u521b\u5efa\u9a8c\u8bc1\u5bc6\u7801",children:"\u521b\u5efa\u9a8c\u8bc1\u5bc6\u7801"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u6211\u4eec\u9700\u8981\u642d\u5efa\u4e00\u4e2a\u79c1\u6709\u7684\u5bb9\u5668\u4ed3\u5e93\uff0c\u4e0d\u80fd\u968f\u610f\u8bbf\u95ee\uff0c\u56e0\u6b64\u8981\u5148\u521b\u5efa\u9a8c\u8bc1\u5bc6\u7801\u624d\u53ef\u4ee5\uff1a"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"yum install httpd-tools\n"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u7136\u540e\u521b\u5efa\u5bc6\u7801\uff1a"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"htpasswd -Bbn admin 123456 > /root/registry/auth/passwd\n"})}),"\n",(0,s.jsx)(r.h2,{id:"\u542f\u52a8",children:"\u542f\u52a8"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u8fd9\u91cc\u76f4\u63a5\u4f7f\u7528\u547d\u4ee4\u4e00\u6b65\u5230\u4f4d\uff1a"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'docker run -d -p 5000:5000 -v /root/registry/auth:/etc/registry/auth -v /root/registry/data:/var/lib/registry -e "REGISTRY_AUTH=htpasswd" -e "REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm" -e "REGISTRY_AUTH_HTPASSWD_PATH=/etc/registry/auth/passwd" registry\n'})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"\u8fd9\u6837\uff0c\u4e4b\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u5f80\u81ea\u5df1\u7684\u79c1\u6709Docker\u4ed3\u5e93\u4e0a\u4f20\u955c\u50cf\u4e86\u3002"})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Mac/Windows\u5904\u7406HTTP\u95ee\u9898\uff1a"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'"insecure-registries":["\u4ed3\u5e93ip:port"]\n'})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Linux\uff1a"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:" --insecure-registry ip:port\n"})})]})}function u(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>o});var s=n(7294);const t={},c=s.createContext(t);function o(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);