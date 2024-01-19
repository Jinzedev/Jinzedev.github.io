"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[3717],{5807:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>t,toc:()=>a});var s=i(5893),c=i(1151);const l={title:"Reading 1: Static Checking",tags:["Java","mit","Static Checking"]},r=void 0,t={id:"Java/mit\u5b66\u4e60/Reading 1 Static Checking",title:"Reading 1: Static Checking",description:"\u9759\u6001\u7c7b\u578b",source:"@site/docs/Java/mit\u5b66\u4e60/Reading 1 Static Checking.md",sourceDirName:"Java/mit\u5b66\u4e60",slug:"/Java/mit\u5b66\u4e60/Reading 1 Static Checking",permalink:"/en/docs/Java/mit\u5b66\u4e60/Reading 1 Static Checking",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Java/mit\u5b66\u4e60/Reading 1 Static Checking.md",tags:[{label:"Java",permalink:"/en/docs/tags/java"},{label:"mit",permalink:"/en/docs/tags/mit"},{label:"Static Checking",permalink:"/en/docs/tags/static-checking"}],version:"current",frontMatter:{title:"Reading 1: Static Checking",tags:["Java","mit","Static Checking"]},sidebar:"tutorialSidebar",previous:{title:"MIT\u5b66\u4e60",permalink:"/en/docs/Java/mit\u5b66\u4e60/"},next:{title:"Kotlin\u7b14\u8bb0",permalink:"/en/docs/Kotlin\u7b14\u8bb0/"}},d={},a=[{value:"\u9759\u6001\u7c7b\u578b",id:"\u9759\u6001\u7c7b\u578b",level:2},{value:"\u9759\u6001\u68c0\u67e5\u3001\u52a8\u6001\u68c0\u67e5\u3001\u4e0d\u68c0\u67e5",id:"\u9759\u6001\u68c0\u67e5\u52a8\u6001\u68c0\u67e5\u4e0d\u68c0\u67e5",level:2},{value:"\u60ca\u559c: \u539f\u59cb\u7c7b\u578b\u4e0d\u662f\u771f\u6b63\u7684\u6570\u5b66\u6570\u503c",id:"\u60ca\u559c-\u539f\u59cb\u7c7b\u578b\u4e0d\u662f\u771f\u6b63\u7684\u6570\u5b66\u6570\u503c",level:2},{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2}];function h(n){const e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u9759\u6001\u7c7b\u578b",children:"\u9759\u6001\u7c7b\u578b"}),"\n",(0,s.jsxs)(e.p,{children:["Java \u662f\u4e00\u79cd ",(0,s.jsx)(e.strong,{children:"\u9759\u6001\u7c7b\u578b\u8bed\u8a00"})," \u3002\u6240\u6709\u53d8\u91cf\u7684\u7c7b\u578b\u5728**\u7f16\u8bd1\u65f6\uff08\u7a0b\u5e8f\u8fd0\u884c\u4e4b\u524d\uff09**\u90fd\u662f\u5df2\u77e5\u7684\uff0c\u56e0\u6b64\u7f16\u8bd1\u5668\u4e5f\u53ef\u4ee5\u63a8\u65ad\u51fa\u6240\u6709\u8868\u8fbe\u5f0f\u7684\u7c7b\u578b\u3002\u5982\u679c ",(0,s.jsx)(e.code,{children:"a "}),"\u548c ",(0,s.jsx)(e.code,{children:"b "}),"\u88ab\u58f0\u660e\u4e3a ",(0,s.jsx)(e.code,{children:"int "}),"s\uff0c\u90a3\u4e48\u7f16\u8bd1\u5668\u4f1a\u65ad\u5b9a\u5b83 ",(0,s.jsx)(e.code,{children:"a+b "}),"\u4e5f\u662f\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"int "}),"\u3002\u4e8b\u5b9e\u4e0a\uff0cEclipse \u73af\u5883\u4f1a\u5728\u60a8\u7f16\u5199\u4ee3\u7801\u65f6\u6267\u884c\u6b64\u64cd\u4f5c\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5728\u952e\u5165\u65f6\u53d1\u73b0\u8bb8\u591a\u9519\u8bef\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 Python \u7b49 ",(0,s.jsx)(e.strong,{children:"\u52a8\u6001\u7c7b\u578b\u8bed\u8a00"})," \u4e2d \uff0c\u8fd9\u79cd\u68c0\u67e5\u4f1a\u63a8\u8fdf\u5230",(0,s.jsx)(e.strong,{children:"\u8fd0\u884c\u65f6\uff08\u7a0b\u5e8f\u8fd0\u884c\u65f6"}),"\uff09\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u9759\u6001\u7c7b\u578b\u662f\u4e00\u79cd\u7279\u6b8a\u7684 ",(0,s.jsx)(e.strong,{children:"\u9759\u6001\u68c0\u67e5"})," \uff0c\u8fd9\u610f\u5473\u7740\u5728\u7f16\u8bd1\u65f6\u68c0\u67e5\u9519\u8bef\u3002Bug \u662f\u7f16\u7a0b\u7684\u7978\u6839\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u8bfe\u7a0b\u4e2d\u7684\u8bb8\u591a\u60f3\u6cd5\u65e8\u5728\u6d88\u9664\u4ee3\u7801\u4e2d\u7684\u9519\u8bef\uff0c\u800c\u9759\u6001\u68c0\u67e5\u662f\u6211\u4eec\u770b\u5230\u7684\u7b2c\u4e00\u4e2a\u60f3\u6cd5\u3002\u9759\u6001\u7c7b\u578b\u53ef\u4ee5\u9632\u6b62\u4e00\u5927\u7c7b\u9519\u8bef\u611f\u67d3\u60a8\u7684\u7a0b\u5e8f\uff1a\u51c6\u786e\u5730\u8bf4\uff0c\u662f\u7531\u4e8e\u5c06\u64cd\u4f5c\u5e94\u7528\u4e8e\u9519\u8bef\u7c7b\u578b\u7684\u53c2\u6570\u800c\u5bfc\u81f4\u7684\u9519\u8bef\u3002\u5982\u679c\u4f60\u5199\u4e86\u4e00\u884c\u65ad\u7ebf\u7684\u4ee3\u7801\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'   "5" * "6"\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5c1d\u8bd5\u5c06\u4e24\u4e2a\u5b57\u7b26\u4e32\u76f8\u4e58\uff0c\u90a3\u4e48\u9759\u6001\u7c7b\u578b\u5c06\u5728\u60a8\u4ecd\u5728\u7f16\u7a0b\u65f6\u6355\u83b7\u6b64\u9519\u8bef\uff0c\u800c\u4e0d\u662f\u7b49\u5230\u6267\u884c\u671f\u95f4\u5230\u8fbe\u8be5\u884c\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u9759\u6001\u68c0\u67e5\u52a8\u6001\u68c0\u67e5\u4e0d\u68c0\u67e5",children:"\u9759\u6001\u68c0\u67e5\u3001\u52a8\u6001\u68c0\u67e5\u3001\u4e0d\u68c0\u67e5"}),"\n",(0,s.jsx)(e.p,{children:"\u8003\u8651\u4e00\u79cd\u8bed\u8a00\u53ef\u4ee5\u63d0\u4f9b\u7684\u4e09\u79cd\u81ea\u52a8\u68c0\u67e5\u662f\u5f88\u6709\u7528\u7684\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u9759\u6001\u68c0\u67e5"})," \uff1a\u5728\u7a0b\u5e8f\u8fd0\u884c\u4e4b\u524d\u5c31\u81ea\u52a8\u53d1\u73b0\u9519\u8bef\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u52a8\u6001\u68c0\u67e5"})," \uff1a\u4ee3\u7801\u6267\u884c\u65f6\u81ea\u52a8\u53d1\u73b0bug\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u4e0d\u68c0\u67e5"})," \uff1a\u8be5\u8bed\u8a00\u6839\u672c\u65e0\u6cd5\u5e2e\u52a9\u60a8\u627e\u5230\u9519\u8bef\u3002\u4f60\u5fc5\u987b\u81ea\u5df1\u6ce8\u610f\uff0c\u5426\u5219\u6700\u7ec8\u4f1a\u5f97\u5230\u9519\u8bef\u7684\u7b54\u6848\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e0d\u7528\u8bf4\uff0c\u9759\u6001\u6355\u83b7\u9519\u8bef\u6bd4\u52a8\u6001\u6355\u83b7\u8981\u597d\uff0c\u52a8\u6001\u6355\u83b7\u4e5f\u6bd4\u6839\u672c\u4e0d\u6355\u83b7\u8981\u597d\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u7ecf\u9a8c\u6cd5\u5219\uff0c\u8bf4\u660e\u60a8\u5728\u6bcf\u6b21\u8fd9\u4e9b\u65f6\u95f4\u4e2d\u53ef\u80fd\u4f1a\u53d1\u73b0\u54ea\u4e9b\u9519\u8bef\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u9759\u6001\u68c0\u67e5"})," \u53ef\u4ee5\u6355\u83b7\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u8bed\u6cd5\u9519\u8bef\uff0c\u4f8b\u5982\u591a\u4f59\u7684\u6807\u70b9\u7b26\u53f7\u6216\u865a\u5047\u5355\u8bcd\u3002\u5373\u4f7f\u50cf Python \u8fd9\u6837\u7684\u52a8\u6001\u7c7b\u578b\u8bed\u8a00\u4e5f\u4f1a\u8fdb\u884c\u8fd9\u79cd\u9759\u6001\u68c0\u67e5\u3002\u5982\u679c Python \u7a0b\u5e8f\u4e2d\u5b58\u5728\u7f29\u8fdb\u9519\u8bef\uff0c\u60a8\u4f1a\u5728\u7a0b\u5e8f\u5f00\u59cb\u8fd0\u884c\u4e4b\u524d\u53d1\u73b0\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u9519\u8bef\u7684\u540d\u5b57\uff0c\u6bd4\u5982 ",(0,s.jsx)(e.code,{children:"Math.sine(2) "}),"\u3002\uff08\u6b63\u786e\u7684\u540d\u5b57\u662f ",(0,s.jsx)(e.code,{children:"sin "}),"\u3002\uff09"]}),"\n",(0,s.jsxs)(e.li,{children:["\u53c2\u6570\u6570\u91cf\u9519\u8bef\uff0c\u4f8b\u5982 ",(0,s.jsx)(e.code,{children:"Math.sin(30, 20) "}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["\u9519\u8bef\u7684\u53c2\u6570\u7c7b\u578b\uff0c\u4f8b\u5982 ",(0,s.jsx)(e.code,{children:'Math.sin("30") '}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["\u9519\u8bef\u7684\u8fd4\u56de\u7c7b\u578b\uff0c\u4f8b\u5982 ",(0,s.jsx)(e.code,{children:'return "30"; '}),"\u58f0\u660e\u8fd4\u56de ",(0,s.jsx)(e.code,{children:"int "}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u52a8\u6001\u68c0\u67e5"})," \u53ef\u4ee5\u6355\u83b7\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u975e\u6cd5\u53c2\u6570\u503c\u3002\u4f8b\u5982\uff0c\u6574\u6570\u8868\u8fbe\u5f0f \u4ec5\u5728 \u5b9e\u9645\u4e3a\u96f6",(0,s.jsx)(e.code,{children:"x/y"}),"\u65f6\u624d\u662f\u9519\u8bef\u7684 \uff1b",(0,s.jsx)(e.code,{children:"y"}),"\u5426\u5219\u5b83\u4f1a\u8d77\u4f5c\u7528\u3002\u6240\u4ee5\u5728\u8fd9\u4e2a\u8868\u8fbe\u5f0f\u4e2d\uff0c\u88ab\u96f6\u9664\u4e0d\u662f\u9759\u6001\u8bef\u5dee\uff0c\u800c\u662f\u52a8\u6001\u8bef\u5dee\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u65e0\u6cd5\u8868\u793a\u7684\u8fd4\u56de\u503c\uff0c\u5373\u5f53\u7279\u5b9a\u7684\u8fd4\u56de\u503c\u65e0\u6cd5\u7528\u7c7b\u578b\u8868\u793a\u65f6\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u8d85\u51fa\u8303\u56f4\u7684\u7d22\u5f15\uff0c\u4f8b\u5982\uff0c\u5728\u5b57\u7b26\u4e32\u4e0a\u4f7f\u7528\u8d1f\u6570\u6216\u592a\u5927\u7684\u7d22\u5f15\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u5728\u5bf9\u8c61\u5f15\u7528\u4e0a\u8c03\u7528\u65b9\u6cd5 ",(0,s.jsx)(e.code,{children:"null "}),"\uff08 ",(0,s.jsx)(e.code,{children:"null "}),"\u5c31\u50cf Python \u4e00\u6837 ",(0,s.jsx)(e.code,{children:"None "}),"\uff09\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"**\u9759\u6001\u68c0\u67e5\u901a\u5e38\u6d89\u53ca\u6570\u636e\u7c7b\u578b\uff0c\u8fd9\u4e9b\u9519\u8bef\u4e0e\u53d8\u91cf\u5177\u4f53\u7684\u503c\u65e0\u5173\u3002**\u4e00\u4e2a\u6570\u636e\u7c7b\u578b\u662f\u4e00\u7ec4\u503c\u7684\u96c6\u5408\u3002\u9759\u6001\u7c7b\u578b\u68c0\u67e5\u4fdd\u8bc1\u4e00\u4e2a\u53d8\u91cf\u4f1a\u62e5\u6709\u8be5\u96c6\u5408\u4e2d\u7684\u67d0\u4e2a\u503c\uff0c\u4f46\u76f4\u5230\u8fd0\u884c\u65f6\u6211\u4eec\u624d\u786e\u5207\u77e5\u9053\u5b83\u62e5\u6709\u54ea\u4e2a\u503c\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u56e0\u6b64\uff0c\u5982\u679c\u9519\u8bef\u53ea\u4f1a\u7531\u7279\u5b9a\u7684\u503c\u5f15\u8d77\uff0c\u6bd4\u5982\u9664\u96f6\u6216\u7d22\u5f15\u8d8a\u754c\uff0c\u90a3\u4e48\u7f16\u8bd1\u5668\u4e0d\u4f1a\u5728\u9759\u6001\u9636\u6bb5\u5f15\u53d1\u5173\u4e8e\u5b83\u7684\u9519\u8bef\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u76f8\u6bd4\u4e4b\u4e0b\uff0c\u52a8\u6001\u68c0\u67e5\u5f80\u5f80\u9488\u5bf9\u7279\u5b9a\u503c\u5f15\u8d77\u7684\u9519\u8bef\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u60ca\u559c-\u539f\u59cb\u7c7b\u578b\u4e0d\u662f\u771f\u6b63\u7684\u6570\u5b66\u6570\u503c",children:"\u60ca\u559c: \u539f\u59cb\u7c7b\u578b\u4e0d\u662f\u771f\u6b63\u7684\u6570\u5b66\u6570\u503c"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728Java\u4e2d\uff0c\u539f\u59cb\u6570\u636e\u7c7b\u578b\uff08\u4f8b\u5982\u6574\u6570\u548c\u6d6e\u70b9\u6570\uff09",(0,s.jsx)(e.strong,{children:"\u5e76\u4e0d\u662f\u771f\u6b63\u7684\u6570\u5b66\u6570\u503c"}),"\u3002Java \u548c\u8bb8\u591a\u5176\u4ed6\u7f16\u7a0b\u8bed\u8a00\u4e2d\u7684\u4e00\u4e2a\u9677\u9631\u662f\uff0c",(0,s.jsx)(e.strong,{children:"\u5176\u539f\u59cb\u6570\u5b57\u7c7b\u578b\u5b58\u5728\u4e00\u4e9b\u6781\u7aef\u60c5\u51b5\uff0c\u5176\u884c\u4e3a\u4e0e\u6211\u4eec\u4e60\u60ef\u7684\u6574\u6570\u548c\u5b9e\u6570\u4e0d\u540c"}),"\u3002\u7ed3\u679c\uff0c\u4e00\u4e9b\u771f\u6b63\u5e94\u8be5\u52a8\u6001\u68c0\u67e5\u7684\u9519\u8bef\u6839\u672c\u6ca1\u6709\u88ab\u68c0\u67e5\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u662f\u9677\u9631\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u6574\u6570\u9664\u6cd5\u9677\u9631"}),"\uff1a\u5728Java\u4e2d\uff0c\u6574\u6570\u9664\u6cd5\uff08\u4f8b\u59825/2\uff09\u4e0d\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5c0f\u6570\u5206\u6570\uff0c\u800c\u662f\u8fd4\u56de\u4e00\u4e2a\u88ab\u622a\u65ad\u4e3a\u6574\u6570\u7684\u7ed3\u679c\u3002\u8fd9\u5c31\u610f\u5473\u7740\uff0c\u5f53\u671f\u671b\u7ed3\u679c\u662f\u4e00\u4e2a\u5206\u6570\u65f6\uff0c\u4f7f\u7528\u6574\u6570\u9664\u6cd5\u4f1a\u5f97\u5230\u9519\u8bef\u7684\u7b54\u6848\uff0c\u800c\u4e0d\u4f1a\u5f15\u53d1\u52a8\u6001\u9519\u8bef\u3002\u8fd9\u662f\u56e0\u4e3a\u6574\u6570\u65e0\u6cd5\u7cbe\u786e\u5730\u8868\u793a\u5206\u6570\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u6574\u6570\u6ea2\u51fa\u9677\u9631"}),"\uff1aJava\u7684int\u548clong\u7c7b\u578b\u662f\u6709\u9650\u7684\u6574\u6570\u96c6\u5408\uff0c\u5177\u6709\u6700\u5927\u548c\u6700\u5c0f\u503c\u9650\u5236\u3002\u5f53\u8fdb\u884c\u8ba1\u7b97\u7684\u7ed3\u679c\u8d85\u51fa\u4e86\u8fd9\u4e2a\u6709\u9650\u8303\u56f4\u65f6\uff0c",(0,s.jsx)(e.strong,{children:"\u8ba1\u7b97\u4f1a\u6084\u6084\u5730\u6ea2\u51fa\uff08\u7ed5\u56de\uff09"}),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5728\u5408\u6cd5\u8303\u56f4\u5185\u4f46\u4e0d\u662f\u6b63\u786e\u7b54\u6848\u7684\u6574\u6570\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u6d6e\u70b9\u6570\u548c\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570\u7684\u7279\u6b8a\u503c\u9677\u9631"}),"\uff1a\u5728Java\u4e2d\uff0cfloat\u548cdouble\u7c7b\u578b\u5177\u6709\u51e0\u4e2a\u7279\u6b8a\u503c\uff0c\u4f8b\u5982NaN\uff08\u8868\u793a\u201c\u4e0d\u662f\u4e00\u4e2a\u6570\u5b57\u201d\uff09\u3001POSITIVE_INFINITY\uff08\u6b63\u65e0\u7a77\u5927\uff09\u548cNEGATIVE_INFINITY\uff08\u8d1f\u65e0\u7a77\u5927\uff09\u3002\u56e0\u6b64\uff0c\u4e00\u4e9b\u672c\u5e94\u8be5\u4ea7\u751f\u52a8\u6001\u9519\u8bef\u7684\u64cd\u4f5c\uff0c\u5982\u9664\u4ee5\u96f6\u6216\u5bf9\u8d1f\u6570\u8fdb\u884c\u5e73\u65b9\u6839\u64cd\u4f5c\uff0c\u5b9e\u9645\u4e0a\u4f1a\u4ea7\u751f\u8fd9\u4e9b\u7279\u6b8a\u503c\u4e4b\u4e00\u3002\u5982\u679c\u7ee7\u7eed\u5bf9\u8fd9\u4e9b\u7279\u6b8a\u503c\u8fdb\u884c\u8ba1\u7b97\uff0c\u6700\u7ec8\u53ef\u80fd\u5f97\u5230\u9519\u8bef\u7684\u6700\u7ec8\u7b54\u6848\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6982\u62ec",children:"\u6982\u62ec"}),"\n",(0,s.jsxs)(e.p,{children:["\u4eca\u5929\u6211\u4eec\u4ecb\u7ecd\u7684\u4e3b\u8981\u601d\u60f3\u662f ",(0,s.jsx)(e.strong,{children:"\u9759\u6001\u68c0\u67e5"})," \u3002\u4ee5\u4e0b\u662f\u8fd9\u4e2a\u60f3\u6cd5\u4e0e\u8bfe\u7a0b\u76ee\u6807\u7684\u5173\u7cfb\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Safe from bugs\u3002"})," \u9759\u6001\u68c0\u67e5\u901a\u8fc7\u5728\u8fd0\u884c\u524d\u6355\u83b7\u7c7b\u578b\u9519\u8bef\u548c\u5176\u4ed6\u9519\u8bef\u6765\u5e2e\u52a9\u63d0\u9ad8\u5b89\u5168\u6027\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Easy to understand\u3002"})," \u5b83\u6709\u52a9\u4e8e\u7406\u89e3\uff0c\u56e0\u4e3a\u7c7b\u578b\u5728\u4ee3\u7801\u4e2d\u660e\u786e\u8bf4\u660e\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Ready for change\u3002"})," \u9759\u6001\u68c0\u67e5\u53ef\u4ee5\u901a\u8fc7\u8bc6\u522b\u5176\u4ed6\u9700\u8981\u540c\u65f6\u66f4\u6539\u7684\u4f4d\u7f6e\u6765\u66f4\u8f7b\u677e\u5730\u66f4\u6539\u4ee3\u7801\u3002\u4f8b\u5982\uff0c\u5f53\u60a8\u66f4\u6539\u53d8\u91cf\u7684\u540d\u79f0\u6216\u7c7b\u578b\u65f6\uff0c\u7f16\u8bd1\u5668\u4f1a\u7acb\u5373\u5728\u6240\u6709\u4f7f\u7528\u8be5\u53d8\u91cf\u7684\u5730\u65b9\u663e\u793a\u9519\u8bef\uff0c\u63d0\u9192\u60a8\u4e5f\u8fdb\u884c\u66f4\u65b0\u3002"]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>t,a:()=>r});var s=i(7294);const c={},l=s.createContext(c);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);