"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7586],{1871:(n,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>K,frontMatter:()=>e,metadata:()=>r,toc:()=>c});var o=i(5893),l=i(1151);const e={title:"\u4ec0\u4e48\u662fKotlin",tags:["Kotlin"]},s=void 0,r={id:"Kotlin\u7b14\u8bb0/\u9996\u4e2aKotlin\u7a0b\u5e8f/\u4ec0\u4e48\u662fkt",title:"\u4ec0\u4e48\u662fKotlin",description:"\u4ec0\u4e48\u662fKotlin",source:"@site/docs/Kotlin\u7b14\u8bb0/\u9996\u4e2aKotlin\u7a0b\u5e8f/1.\u4ec0\u4e48\u662fkt.md",sourceDirName:"Kotlin\u7b14\u8bb0/\u9996\u4e2aKotlin\u7a0b\u5e8f",slug:"/Kotlin\u7b14\u8bb0/\u9996\u4e2aKotlin\u7a0b\u5e8f/\u4ec0\u4e48\u662fkt",permalink:"/docs/Kotlin\u7b14\u8bb0/\u9996\u4e2aKotlin\u7a0b\u5e8f/\u4ec0\u4e48\u662fkt",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Kotlin\u7b14\u8bb0/\u9996\u4e2aKotlin\u7a0b\u5e8f/1.\u4ec0\u4e48\u662fkt.md",tags:[{label:"Kotlin",permalink:"/docs/tags/kotlin"}],version:"current",sidebarPosition:1,frontMatter:{title:"\u4ec0\u4e48\u662fKotlin",tags:["Kotlin"]},sidebar:"tutorialSidebar",previous:{title:"Kotlin\u7b14\u8bb0",permalink:"/docs/Kotlin\u7b14\u8bb0/"},next:{title:"\u4f7f\u7528Kotlin \u56ed\u5730",permalink:"/docs/Kotlin\u7b14\u8bb0/\u9996\u4e2aKotlin\u7a0b\u5e8f/2.1 \u4f7f\u7528Kotlin \u56ed\u5730"}},a={},c=[{value:"\u4ec0\u4e48\u662fKotlin",id:"\u4ec0\u4e48\u662fkotlin",level:2}];function d(n){const t={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,l.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"\u4ec0\u4e48\u662fkotlin",children:"\u4ec0\u4e48\u662fKotlin"}),"\n",(0,o.jsx)(t.p,{children:"Kotlin\u662f\u4e00\u79cd\u73b0\u4ee3\u4f46\u5df2\u7ecf\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u65e8\u5728\u8ba9\u5f00\u53d1\u4eba\u5458\u66f4\u5feb\u4e50\u3002\u5b83\u7b80\u6d01\u3001\u5b89\u5168\u3001\u53ef\u4e0eJava\u548c\u5176\u4ed6\u8bed\u8a00\u4e92\u64cd\u4f5c\uff0c\u5e76\u63d0\u4f9b\u4e86\u8bb8\u591a\u5728\u591a\u4e2a\u5e73\u53f0\u4e4b\u95f4\u91cd\u7528\u4ee3\u7801\u7684\u65b9\u6cd5\u3002\u5b83\u7531JetBrains\u516c\u53f8\u4e8e2011\u5e74\u8bbe\u8ba1\u548c\u5f00\u53d1\uff0c\u5e76\u57282016\u5e74\u6b63\u5f0f\u53d1\u5e03\u3002Kotlin\u65e8\u5728\u89e3\u51b3Java\u8bed\u8a00\u5728\u7f16\u7801\u6548\u7387\u548c\u4ee3\u7801\u8d28\u91cf\u65b9\u9762\u5b58\u5728\u7684\u95ee\u9898\uff0c\u5e76\u4e14\u4e0eJava\u8bed\u8a00\u5b8c\u5168\u517c\u5bb9\u3002Kotlin\u901a\u8fc7\u7b80\u5316\u8bed\u6cd5\u3001\u63d0\u4f9b\u66f4\u5f3a\u5927\u7684\u529f\u80fd\u4ee5\u53ca\u51cf\u5c11\u6837\u677f\u4ee3\u7801\u7684\u7f16\u5199\uff0c\u4f7f\u5f97\u5f00\u53d1\u8005\u80fd\u591f\u66f4\u9ad8\u6548\u5730\u7f16\u5199\u6e05\u6670\u3001\u7b80\u6d01\u800c\u53c8\u5b89\u5168\u7684\u4ee3\u7801\u3002"}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Kotlin\u8bed\u8a00\u540d\u5b57\u7684\u6765\u6e90\u662f\u57fa\u4e8e\u4e00\u4e2a\u53e4\u8001\u65af\u62c9\u592b\u90e8\u843d\u7684\u540d\u5b57\u3002JetBrains\u5f00\u53d1Kotlin\u7684\u521d\u8877\u662f\u4e3a\u4e86\u5728Android\u5f00\u53d1\u4e0a\u53d6\u4ee3Java\uff0c\u5e76\u4e14\u4f5c\u4e3a\u4e00\u95e8\u901a\u7528\u7684\u7f16\u7a0b\u8bed\u8a00\u3002Kotlin\u901a\u8fc7\u51cf\u5c11\u6837\u677f\u4ee3\u7801\u548c\u589e\u52a0\u73b0\u4ee3\u5316\u7684\u8bed\u8a00\u7279\u6027\uff0c\u63d0\u4f9b\u4e86\u66f4\u597d\u7684\u5de5\u5177\u548c\u5e93\u6765\u7b80\u5316Android\u5e94\u7528\u5f00\u53d1\u3002\u7531\u4e8eKotlin\u7684\u8bbe\u8ba1\u7406\u5ff5\u548c\u7279\u6027\u5438\u5f15\u4e86\u5e7f\u6cdb\u7684\u5f00\u53d1\u8005\u5173\u6ce8\uff0c\u5b83\u4e5f\u8fc5\u901f\u88ab\u63a5\u53d7\u5e76\u5f97\u5230\u4e86\u5e7f\u6cdb\u7684\u4f7f\u7528\u3002\u73b0\u5728\uff0cKotlin\u5df2\u6210\u4e3a\u4e00\u95e8\u6d41\u884c\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u88ab\u8bb8\u591a\u5f00\u53d1\u8005\u7528\u4e8eAndroid\u5e94\u7528\u5f00\u53d1\u3001\u670d\u52a1\u5668\u7aef\u5f00\u53d1\u4ee5\u53ca\u5176\u4ed6\u9886\u57df\u7684\u8f6f\u4ef6\u5f00\u53d1\u4e2d\u3002"})}),"\n",(0,o.jsxs)(t.p,{children:["\u5b98\u65b9\u7f51\u7ad9\uff1a",(0,o.jsx)(t.a,{href:"https://www.jetbrains.com/opensource/kotlin/",children:"https://www.jetbrains.com/opensource/kotlin/"})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://s2.loli.net/2023/12/15/58x79t2JvlVZTmo.png",alt:"image-20231215224847189"})}),"\n",(0,o.jsx)(t.p,{children:"Kotlin \u662f\u4e00\u79cd\u73b0\u4ee3\u5316\u7684\u9759\u6001\u7c7b\u578b\u7f16\u7a0b\u8bed\u8a00\uff0c\u5177\u6709\u4ee5\u4e0b\u4f18\u52bf\uff1a"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"\u4e0eJava\u4e92\u64cd\u4f5c\u6027\u5f3a"}),"\uff1aKotlin \u53ef\u4ee5\u4e0e\u73b0\u6709\u7684 Java \u4ee3\u7801\u65e0\u7f1d\u5730\u4e92\u64cd\u4f5c\uff0c\u5141\u8bb8\u5f00\u53d1\u8005\u5728\u73b0\u6709\u7684\u9879\u76ee\u4e2d\u9010\u6b65\u91c7\u7528 Kotlin\uff0c\u800c\u4e0d\u9700\u8981\u91cd\u5199\u6574\u4e2a\u9879\u76ee\u3002\u8fd9\u4f7f\u5f97 Kotlin \u6210\u4e3a Android \u5e94\u7528\u5f00\u53d1\u7684\u7406\u60f3\u9009\u62e9\u3002"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"\u7b80\u6d01\u6613\u8bfb"}),"\uff1aKotlin \u7684\u8bed\u6cd5\u7b80\u6d01\u5e76\u5177\u6709\u66f4\u597d\u7684\u53ef\u8bfb\u6027\uff0c\u51cf\u5c11\u4e86\u6837\u677f\u4ee3\u7801\u7684\u7f16\u5199\u3002\u76f8\u6bd4 Java\uff0cKotlin \u53ef\u4ee5\u4f7f\u7528\u66f4\u5c11\u7684\u4ee3\u7801\u6765\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\uff0c\u4ece\u800c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"\u7a7a\u5b89\u5168\u6027"}),"\uff1aKotlin \u5bf9\u7a7a\u503c\u8fdb\u884c\u4e86\u66f4\u597d\u7684\u5904\u7406\u3002\u5728 Kotlin \u4e2d\uff0c\u53d8\u91cf\u9ed8\u8ba4\u662f\u975e\u7a7a\u7684\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528\u53ef\u80fd\u4e3a\u7a7a\u7684\u503c\uff0c\u9700\u8981\u663e\u5f0f\u58f0\u660e\u7c7b\u578b\u4e3a\u53ef\u7a7a\u3002\u8fd9\u6709\u52a9\u4e8e\u51cf\u5c11\u7a7a\u6307\u9488\u5f02\u5e38\u7684\u53d1\u751f\u3002"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"\u51fd\u6570\u5f0f\u7f16\u7a0b\u652f\u6301"}),"\uff1aKotlin \u652f\u6301\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u7279\u6027\uff0c\u5982\u9ad8\u9636\u51fd\u6570\u3001lambda \u8868\u8fbe\u5f0f\u548c\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u96c6\u5408\u64cd\u4f5c\u7b49\u3002\u8fd9\u4e9b\u7279\u6027\u53ef\u4ee5\u8ba9\u5f00\u53d1\u8005\u7f16\u5199\u66f4\u7b80\u6d01\u3001\u53ef\u7ef4\u62a4\u7684\u4ee3\u7801\uff0c\u5e76\u63d0\u9ad8\u4ee3\u7801\u7684\u8868\u8fbe\u80fd\u529b\u3002"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"\u6269\u5c55\u51fd\u6570"}),"\uff1aKotlin \u5141\u8bb8\u5f00\u53d1\u8005\u4e3a\u67d0\u4e2a\u7c7b\u6dfb\u52a0\u65b0\u7684\u65b9\u6cd5\uff0c\u800c\u4e0d\u9700\u8981\u4fee\u6539\u8be5\u7c7b\u7684\u6e90\u4ee3\u7801\u3002\u8fd9\u79cd\u6269\u5c55\u51fd\u6570\u7684\u7279\u6027\u53ef\u4ee5\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u66f4\u7075\u6d3b\u7684\u65b9\u5f0f\u6765\u6269\u5c55\u73b0\u6709\u7684\u7c7b\u5e93\u3002"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"\u534f\u7a0b\u652f\u6301"}),"\uff1aKotlin \u5f15\u5165\u4e86\u534f\u7a0b\uff08coroutine\uff09\u673a\u5236\uff0c\u4f7f\u5f97\u5f02\u6b65\u64cd\u4f5c\u66f4\u6613\u4e8e\u7ba1\u7406\u548c\u7f16\u5199\u3002\u901a\u8fc7\u4f7f\u7528\u534f\u7a0b\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528\u987a\u5e8f\u7684\u65b9\u5f0f\u7f16\u5199\u5e76\u53d1\u4ee3\u7801\uff0c\u5e76\u907f\u514d\u4e86\u56de\u8c03\u5730\u72f1\u7684\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"\u603b\u7684\u6765\u8bf4\uff0cKotlin \u662f\u4e00\u95e8\u529f\u80fd\u4e30\u5bcc\u3001\u53ef\u8bfb\u6027\u9ad8\u3001\u4e0e Java \u65e0\u7f1d\u4e92\u64cd\u4f5c\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u9002\u7528\u4e8e Android\u3001Web \u540e\u7aef\u5f00\u53d1\u7b49\u591a\u79cd\u573a\u666f\u3002"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://developer.android.com/static/codelabs/basic-android-kotlin-compose-first-program/img/3bbebda874e6003b.png?hl=zh-cn",alt:"Android \u548c Kotlin \u7684\u5fbd\u6807"})}),"\n",(0,o.jsx)(t.p,{children:"\u6b63\u662f\u56e0\u4e3aKotlin\u4e0eJava\u7684\u9ad8\u5ea6\u517c\u5bb9\u6027\uff0c\u518d\u52a0\u4e0a\u7b80\u6d01\u3001\u5b89\u5168\u3001\u4e92\u64cd\u4f5c\u6027\u5f3a\u7b49\u7279\u70b9\uff0c\u8ba9Kotlin\u4e00\u5ea6\u6210\u4e3aAndroid\u5f00\u53d1\u7684\u5b98\u65b9\u6307\u5b9a\u8bed\u8a00\u3002\u5e76\u4e14\u968f\u7740\u65f6\u4ee3\u7684\u53d1\u5c55\uff0c\u73b0\u5728\u5b83\u4e0d\u4ec5\u4ec5\u53ef\u4ee5\u5f00\u53d1\u5b89\u5353\u5e94\u7528\u7a0b\u5e8f\uff0c\u4e5f\u53ef\u4ee5\u5f00\u53d1iOS\u7a0b\u5e8f\uff0c\u751a\u81f3\u5f00\u53d1Java\u540e\u7aef\u3001\u5f00\u53d1\u684c\u9762\u5e94\u7528\u7a0b\u5e8f\u7b49\u3002\u5176\u7b80\u6d01\u9ad8\u6548\u7684\u8bed\u6cd5\u4e5f\u53d7\u5230\u4e00\u4f17\u5f00\u53d1\u8005\u8ffd\u6367\u3002"}),"\n",(0,o.jsx)(t.p,{children:"\u4ece\u4e0b\u8282\u8bfe\u5f00\u59cb\uff0c\u6211\u4eec\u5c31\u6765\u6b63\u5f0f\u5b66\u4e60\u4e00\u4e0bKotlin\u8bed\u8a00\uff0cKotlin\uff0c\u542f\u52a8\uff01"})]})}function K(n={}){const{wrapper:t}={...(0,l.a)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},1151:(n,t,i)=>{i.d(t,{Z:()=>r,a:()=>s});var o=i(7294);const l={},e=o.createContext(l);function s(n){const t=o.useContext(e);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),o.createElement(e.Provider,{value:t},n.children)}}}]);