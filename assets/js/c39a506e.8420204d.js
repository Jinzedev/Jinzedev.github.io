"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2750],{7131:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var l=s(5893),r=s(1151);const i={title:"\u6808\u3001\u5806",tags:["stack","heap"]},t="\u6808\u3001\u5806",d={id:"notes/Rust/\u6808\u3001\u5806",title:"\u6808\u3001\u5806",description:"\u6808",source:"@site/docs/notes/Rust/1.\u6808\u3001\u5806.md",sourceDirName:"notes/Rust",slug:"/notes/Rust/\u6808\u3001\u5806",permalink:"/docs/notes/Rust/\u6808\u3001\u5806",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notes/Rust/1.\u6808\u3001\u5806.md",tags:[{label:"stack",permalink:"/docs/tags/stack"},{label:"heap",permalink:"/docs/tags/heap"}],version:"current",sidebarPosition:1,frontMatter:{title:"\u6808\u3001\u5806",tags:["stack","heap"]},sidebar:"tutorialSidebar",previous:{title:"Rust\uff1f",permalink:"/docs/notes/Rust/"},next:{title:"\u5b89\u88c5rust\u4e0eCargo",permalink:"/docs/notes/Rust/\u5b89\u88c5rust\u4e0eCargo"}},c={},o=[{value:"\u6808",id:"\u6808",level:2},{value:"\u5e27",id:"\u5e27",level:3},{value:"\u8c03\u7528\u8fc7\u7a0b",id:"\u8c03\u7528\u8fc7\u7a0b",level:3},{value:"\u600e\u4e48\u786e\u5b9a\u9700\u8981\u591a\u5927\u7684\u5e27\u5462\uff1f",id:"\u600e\u4e48\u786e\u5b9a\u9700\u8981\u591a\u5927\u7684\u5e27\u5462",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:3},{value:"\u653e\u6808\u4e0a\u7684\u5b58\u5728\u95ee\u9898",id:"\u653e\u6808\u4e0a\u7684\u5b58\u5728\u95ee\u9898",level:3},{value:"\u6808\u6ea2\u51fa",id:"\u6808\u6ea2\u51fa",level:4},{value:"\u5806",id:"\u5806",level:2},{value:"\u9884\u7559\u7a7a\u95f4",id:"\u9884\u7559\u7a7a\u95f4",level:3},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",level:3},{value:"\u653e\u5806\u4e0a\u7684\u95ee\u9898",id:"\u653e\u5806\u4e0a\u7684\u95ee\u9898",level:3},{value:"\u5185\u5b58\u6cc4\u6f0f",id:"\u5185\u5b58\u6cc4\u6f0f",level:4},{value:"\u4f7f\u7528\u5df2\u91ca\u653e\u5185\u5b58",id:"\u4f7f\u7528\u5df2\u91ca\u653e\u5185\u5b58",level:4},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2},{value:"\u6808",id:"\u6808-1",level:3},{value:"\u5806",id:"\u5806-1",level:3}];function h(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u6808\u5806",children:"\u6808\u3001\u5806"}),"\n",(0,l.jsx)(n.h2,{id:"\u6808",children:"\u6808"}),"\n",(0,l.jsx)(n.h3,{id:"\u5e27",children:"\u5e27"}),"\n",(0,l.jsxs)(n.p,{children:["\u6808\u662f\u7a0b\u5e8f\u8fd0\u884c\u7684\u57fa\u7840\u3002\u6bcf\u5f53\u4e00\u4e2a\u51fd\u6570\u88ab\u8c03\u7528\u65f6\uff0c\u4e00\u5757\u8fde\u7eed\u7684\u5185\u5b58\u5c31\u4f1a\u5728\u6808\u9876\u88ab\u5206\u914d\u51fa\u6765\uff0c\u8fd9\u5757\n\u5185\u5b58\u88ab\u79f0\u4e3a",(0,l.jsx)(n.strong,{children:"\u5e27(frame)"}),"\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u8c03\u7528\u8fc7\u7a0b",children:"\u8c03\u7528\u8fc7\u7a0b"}),"\n",(0,l.jsx)(n.p,{children:"\u6808\u662f\u81ea\u9876\u5411\u4e0b\u589e\u957f\u7684\uff0c\u4e00\u4e2a\u7a0b\u5e8f\u7684\u8c03\u7528\u6808\u6700\u5e95\u90e8\uff0c\u9664\u53bb\u5165\u53e3\u5e27(entry frame),\u5c31\u662fmain\u51fd\u6570\u5bf9\u5e94\u7684\u5e27\uff0c\u800c\u968f\u7740main\u51fd\u6570\u4e00\u5c42\u5c42\u8c03\u7528\uff0c\u6808\u4f1a\u4e00\u5c42\u5c42\u6269\u5c55\uff1b\u8c03\u7528\u7ed3\u675f\uff0c\u6808\u53c8\u4f1a\u4e00\u5c42\u5c42\u56de\u6eaf\uff0c\u628a\u5185\u5b58\u91ca\u653e\u56de\u53bb\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u8c03\u7528\u7684\u8fc7\u7a0b\u4e2d\uff0c",(0,l.jsx)(n.strong,{children:"\u4e00\u4e2a\u65b0\u7684\u5e27\u4f1a\u5206\u914d\u8db3\u591f\u7684\u7a7a\u95f4\u5b58\u50a8\u5bc4\u5b58\u5668\u7684\u4e0a\u4e0b\u6587"}),"\u3002\u5728\u51fd\u6570\u91cc\u4f7f\u7528\u5230\u7684\u901a\u7528\u5bc4\u5b58\u5668\u4f1a\u5728\u6808\u4fdd\u5b58\u4e00\u4e2a\u526f\u672c\uff0c\u5f53\u8fd9\u4e2a\u51fd\u6570\u8c03\u7528\u7ed3\u675f\uff0c\u901a\u8fc7\u526f\u672c\uff0c\u53ef\u4ee5\u6062\u590d\u51fa\u539f\u672c\u7684\u5bc4\u5b58\u5668\u7684\u4e0a\u4e0b\u6587\uff0c\u5c31\u50cf\u4ec0\u4e48\u90fd\u6ca1\u6709\u7ecf\u5386\u4e00\u6837\u3002\u6b64\u5916\uff0c\u51fd\u6570\u6240\u9700\u8981\u4f7f\u7528\u5230\u7684\u5c40\u90e8\u53d8\u91cf\uff0c\u4e5f\u90fd\u4f1a\u5728\u5e27\u5206\u914d\u7684\u65f6\u5019\u88ab\u9884\u7559\u51fa\u6765\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u600e\u4e48\u786e\u5b9a\u9700\u8981\u591a\u5927\u7684\u5e27\u5462",children:"\u600e\u4e48\u786e\u5b9a\u9700\u8981\u591a\u5927\u7684\u5e27\u5462\uff1f"}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u8981\u5f52\u529f\u4e8e\u7f16\u8bd1\u5668\u3002\u5728\u7f16\u8bd1\u5e76\u4f18\u5316\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u4e00\u4e2a\u51fd\u6570\u5c31\u662f\u4e00\u4e2a\u6700\u5c0f\u7684\u7f16\u8bd1\u5355\u5143\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u8fd9\u4e2a\u51fd\u6570\u91cc\uff0c\u7f16\u8bd1\u5668\u5f97\u77e5\u9053\u8981\u7528\u5230\u54ea\u4e9b\u5bc4\u5b58\u5668\u3001\u6808\u4e0a\u8981\u653e\u54ea\u4e9b\u5c40\u90e8\u53d8\u91cf\uff0c\u800c\u8fd9\u4e9b\u90fd\u8981\u5728\u7f16\u8bd1\u65f6\u786e\u5b9a\u3002\u6240\u4ee5\u7f16\u8bd1\u5668\u5c31\u9700\u8981\u660e\u786e\u6bcf\u4e2a\u5c40\u90e8\u53d8\u91cf\u7684\u5927\u5c0f\uff0c\u4ee5\u4fbf\u4e8e\u9884\u7559\u7a7a\u95f4\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5728\u7f16\u8bd1\u65f6\uff0c\u4e00\u5207\u65e0\u6cd5\u786e\u5b9a\u5927\u5c0f\u6216\u8005\u5927\u5c0f\u53ef\u4ee5\u6539\u53d8\u7684\u6570\u636e\uff0c\u90fd\u65e0\u6cd5\u5b89\u5168\u5730\u653e\u5728\u6808\u4e0a\uff0c\u6700\u597d\u653e\u5728\u5806\u4e0a\u3002"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u653e\u6808\u4e0a\u7684\u5b58\u5728\u95ee\u9898",children:"\u653e\u6808\u4e0a\u7684\u5b58\u5728\u95ee\u9898"}),"\n",(0,l.jsx)(n.h4,{id:"\u6808\u6ea2\u51fa",children:"\u6808\u6ea2\u51fa"}),"\n",(0,l.jsxs)(n.p,{children:["\u6808\u4e0a\u7684\u5185\u5b58\u5206\u914d\u662f\u975e\u5e38\u9ad8\u6548\u7684\u3002\u53ea\u9700\u8981\u6539\u52a8\u6808\u6307\u9488\uff08stack pointer\uff09\uff0c\u5c31\u53ef\u4ee5\u9884\u7559\u76f8\u5e94\u7684\u7a7a\u95f4\uff1b\u628a\u6808\u6307\u9488\u6539\u52a8\u56de\u6765\uff0c\u9884\u7559\u7684\u7a7a\u95f4\u53c8\u4f1a\u88ab\u91ca\u653e\u6389\u3002\u9884\u7559\u548c\u91ca\u653e\u53ea\u662f\u52a8\u52a8\u5bc4\u5b58\u5668\uff0c\u4e0d\u6d89\u53ca\u989d\u5916\u8ba1\u7b97\u3001\u4e0d\u6d89\u53ca\u7cfb\u7edf\u8c03\u7528\uff0c\u56e0\u800c\u6548\u7387\u5f88\u9ad8\u3002\n",(0,l.jsx)(n.strong,{children:"\u6240\u4ee5\u7406\u8bba\u4e0a\u8bf4\uff0c\u53ea\u8981\u53ef\u80fd\uff0c\u6211\u4eec\u5e94\u8be5\u628a\u53d8\u91cf\u5206\u914d\u5230\u6808\u4e0a\uff0c\u8fd9\u6837\u53ef\u4ee5\u8fbe\u5230\u66f4\u597d\u7684\u8fd0\u884c\u901f\u5ea6\u3002"}),"\n\u90a3\u4e3a\u4ec0\u4e48\u5728\u5b9e\u9645\u5de5\u4f5c\u4e2d\uff0c\u6211\u4eec\u53c8\u8981\u907f\u514d\u628a\u5927\u91cf\u7684\u6570\u636e\u5206\u914d\u5728\u6808\u4e0a\u5462\uff1f"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8fd9\u4e3b\u8981\u662f\u8003\u8651\u5230",(0,l.jsx)(n.strong,{children:"\u8c03\u7528\u6808\u7684\u5927\u5c0f\uff0c\u907f\u514d\u6808\u6ea2\u51fa\uff08stack overflow\uff09"}),"\u3002\u4e00\u65e6\u5f53\u524d\u7a0b\u5e8f\u7684\u8c03\u7528\u6808\u8d85\u51fa\u4e86\u7cfb\u7edf\u5141\u8bb8\u7684\u6700\u5927\u6808\u7a7a\u95f4\uff0c\u65e0\u6cd5\u521b\u5efa\u65b0\u7684\u5e27\uff0c\u6765\u8fd0\u884c\u4e0b\u4e00\u4e2a\u8981\u6267\u884c\u7684\u51fd\u6570\uff0c\u5c31\u4f1a\u53d1\u751f\u6808\u6ea2\u51fa\uff0c\u8fd9\u65f6\u7a0b\u5e8f\u4f1a\u88ab\u7cfb\u7edf\u7ec8\u6b62\uff0c\u4ea7\u751f\u5d29\u6e83\u4fe1\u606f\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5806",children:"\u5806"}),"\n",(0,l.jsxs)(n.p,{children:["\u6808\u867d\u7136\u4f7f\u7528\u8d77\u6765\u5f88\u9ad8\u6548\uff0c\u4f46\u5b83\u7684\u5c40\u9650\u4e5f\u663e\u800c\u6613\u89c1\u3002\u5f53\u6211\u4eec",(0,l.jsx)(n.strong,{children:"\u9700\u8981\u52a8\u6001\u5927\u5c0f\u7684\u5185\u5b58\u65f6\uff0c\u53ea\u80fd\u4f7f\u7528\u5806"}),"\uff0c\u6bd4\u5982\u53ef\u53d8\u957f\u5ea6\u7684\u6570\u7ec4\u3001\u5217\u8868\u3001\u54c8\u5e0c\u8868\u3001\u5b57\u5178\uff0c\u5b83\u4eec\u90fd\u5206\u914d\u5728\u5806\u4e0a\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u9884\u7559\u7a7a\u95f4",children:"\u9884\u7559\u7a7a\u95f4"}),"\n",(0,l.jsx)(n.p,{children:"\u5806\u4e0a\u5206\u914d\u5185\u5b58\u65f6\uff0c\u4e00\u822c\u90fd\u4f1a\u9884\u7559\u4e00\u4e9b\u7a7a\u95f4\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:"let mut arr = Vec::new();\narr.push(1);\narr.push(2);\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u4e2a\u5217\u8868\u5b9e\u9645\u9884\u7559\u7684\u5927\u5c0f\u662f 4\uff0c\u5e76\u4e0d\u7b49\u4e8e\u5176\u957f\u5ea6 2\u3002\u8fd9\u662f\u56e0\u4e3a\u5806\u4e0a\u5185\u5b58\u5206\u914d\u4f1a\u4f7f\u7528 libc \u63d0\u4f9b\u7684 malloc() \u51fd\u6570\uff0c\u5176\u5185\u90e8\u4f1a\u8bf7\u6c42\u64cd\u4f5c\u7cfb\u7edf\u7684\u7cfb\u7edf\u8c03\u7528\uff0c\u6765\u5206\u914d\u5185\u5b58\u3002\u7cfb\u7edf\u8c03\u7528\u7684\u4ee3\u4ef7\u662f\u6602\u8d35\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u8981\u907f\u514d\u9891\u7e41\u5730 malloc()\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5bf9\u4e0a\u9762\u7684\u4ee3\u7801\u6765\u8bf4\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u591a\u5c11\u5c31\u5206\u914d\u591a\u5c11\uff0c\u90a3\u5217\u8868\u6bcf\u6b21\u65b0\u589e\u503c\uff0c\u90fd\u8981\u65b0\u5206\u914d\u4e00\u5927\u5757\u7684\u5185\u5b58\uff0c\u5148\u62f7\u8d1d\u5df2\u6709\u6570\u636e\uff0c\u518d\u628a\u65b0\u7684\u503c\u6dfb\u52a0\u8fdb\u53bb\uff0c\u6700\u540e\u91ca\u653e\u65e7\u7684\u5185\u5b58\uff0c\u8fd9\u6837\u6548\u7387\u5f88\u4f4e\u3002\u6240\u4ee5\u5728\u5806\u5185\u5b58\u5206\u914d\u65f6\uff0c\u9884\u7559\u7684\u7a7a\u95f4\u5927\u5c0f 4 \u4f1a\u5927\u4e8e\u9700\u8981\u7684\u5b9e\u9645\u5927\u5c0f 2 \u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u751f\u547d\u5468\u671f",children:"\u751f\u547d\u5468\u671f"}),"\n",(0,l.jsxs)(n.p,{children:["\u9664\u4e86\u52a8\u6001\u5927\u5c0f\u7684\u5185\u5b58\u9700\u8981\u88ab\u5206\u914d\u5230\u5806\u4e0a\u5916\uff0c",(0,l.jsx)(n.strong,{children:"\u52a8\u6001\u751f\u547d\u5468\u671f\u7684\u5185\u5b58\u4e5f\u9700\u8981\u5206\u914d\u5230\u5806\u4e0a"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u4e0a\u6587\u4e2d\u6211\u4eec\u8bb2\u5230\uff0c\u6808\u4e0a\u7684\u5185\u5b58\u5728\u51fd\u6570\u8c03\u7528\u7ed3\u675f\u4e4b\u540e\uff0c\u6240\u4f7f\u7528\u7684\u5e27\u88ab\u56de\u6536\uff0c\u76f8\u5173\u53d8\u91cf\u5bf9\u5e94\u7684\u5185\u5b58\u4e5f\u90fd\u88ab\u56de\u6536\u5f85\u7528\u3002\u6240\u4ee5\u6808\u4e0a\u5185\u5b58\u7684\u751f\u547d\u5468\u671f\u662f\u4e0d\u53d7\u5f00\u53d1\u8005\u63a7\u5236\u7684\uff0c\u5e76\u4e14\u5c40\u9650\u5728\u5f53\u524d\u8c03\u7528\u6808\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u800c",(0,l.jsx)(n.strong,{children:"\u5806\u4e0a\u5206\u914d\u51fa\u6765\u7684\u6bcf\u4e00\u5757\u5185\u5b58\u9700\u8981\u663e\u5f0f\u5730\u91ca\u653e\uff0c\u8fd9\u5c31\u4f7f\u5806\u4e0a\u5185\u5b58\u6709\u66f4\u52a0\u7075\u6d3b\u7684\u751f\u547d\u5468\u671f\uff0c\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u8c03\u7528\u6808\u4e4b\u95f4\u5171\u4eab\u6570\u636e"})]}),"\n",(0,l.jsx)(n.h3,{id:"\u653e\u5806\u4e0a\u7684\u95ee\u9898",children:"\u653e\u5806\u4e0a\u7684\u95ee\u9898"}),"\n",(0,l.jsx)(n.h4,{id:"\u5185\u5b58\u6cc4\u6f0f",children:"\u5185\u5b58\u6cc4\u6f0f"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u624b\u5de5\u7ba1\u7406\u5806\u5185\u5b58\u7684\u8bdd\uff0c\u5806\u4e0a\u5185\u5b58\u5206\u914d\u540e\u5fd8\u8bb0\u91ca\u653e\uff0c\u5c31\u4f1a\u9020\u6210",(0,l.jsx)(n.strong,{children:"\u5185\u5b58\u6cc4\u6f0f"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4e00\u65e6\u6709\u5185\u5b58\u6cc4\u6f0f\uff0c\u7a0b\u5e8f\u8fd0\u884c\u5f97\u8d8a\u4e45\uff0c\u5c31\u8d8a\u5403\u5185\u5b58\uff0c\u6700\u7ec8\u4f1a\u56e0\u4e3a\u5360\u6ee1\u5185\u5b58\u800c\u88ab\u64cd\u4f5c\u7cfb\u7edf\u7ec8\u6b62\u8fd0\u884c\u3002\u5982\u679c\u5806\u4e0a\u5185\u5b58\u88ab\u591a\u4e2a\u7ebf\u7a0b\u7684\u8c03\u7528\u6808\u5f15\u7528\uff0c\u8be5\u5185\u5b58\u7684\u6539\u52a8\u8981\u7279\u522b\u5c0f\u5fc3\uff0c\u9700\u8981\u52a0\u9501\u4ee5\u72ec\u5360\u8bbf\u95ee\uff0c\u6765\u907f\u514d\u6f5c\u5728\u7684\u95ee\u9898\u3002\u6bd4\u5982\u8bf4\uff0c\u4e00\u4e2a\u7ebf\u7a0b\u5728\u904d\u5386\u5217\u8868\uff0c\u800c\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u5728\u91ca\u653e\u5217\u8868\u4e2d\u7684\u67d0\u4e00\u9879\uff0c\u5c31\u53ef\u80fd\u8bbf\u95ee\u91ce\u6307\u9488\uff0c\u5bfc\u81f4",(0,l.jsx)(n.strong,{children:"\u5806\u8d8a\u754c"}),"\uff08heap out of bounds\uff09\u3002\u800c\u5806\u8d8a\u754c\u662f\u7b2c\u4e00\u5927\u5185\u5b58\u5b89\u5168\u95ee\u9898\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u4f7f\u7528\u5df2\u91ca\u653e\u5185\u5b58",children:"\u4f7f\u7528\u5df2\u91ca\u653e\u5185\u5b58"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u5806\u4e0a\u5185\u5b58\u88ab\u91ca\u653e\uff0c\u4f46\u6808\u4e0a\u6307\u5411\u5806\u4e0a\u5185\u5b58\u7684\u76f8\u5e94\u6307\u9488\u6ca1\u6709\u88ab\u6e05\u7a7a\uff0c\u5c31\u6709\u53ef\u80fd\u53d1\u751f**\u4f7f\u7528\u5df2\u91ca\u653e\u5185\u5b58\uff08use after free\uff09**\u7684\u60c5\u51b5\uff0c\u7a0b\u5e8f\u8f7b\u5219\u5d29\u6e83\uff0c\u91cd\u5219\u9690\u542b\u5b89\u5168\u9690\u60a3\u3002\u6839\u636e\u5fae\u8f6f\u5b89\u5168\u53cd\u5e94\u4e2d\u5fc3\uff08MSRC\uff09\u7684\u7814\u7a76\uff0c\u8fd9\u662f\u7b2c\u4e8c\u5927\u5185\u5b58\u5b89\u5168\u95ee\u9898\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u7ec3\u4e60",children:"\u7ec3\u4e60"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u5982\u679c\u6709\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\u9700\u8981\u5728\u591a\u4e2a\u7ebf\u7a0b\u4e2d\u8bbf\u95ee\uff0c\u53ef\u4ee5\u628a\u5b83\u653e\u5728\u6808\u4e0a\u5417\uff1f\u4e3a\u4ec0\u4e48\uff1f\n\u4e0d\u80fd, \u6bcf\u4e2a\u7ebf\u7a0b\u90fd\u4f1a\u62e5\u6709\u81ea\u5df1\u7684\u6808,\u6808\u4e0a\u6570\u636e\u65e0\u6cd5\u8fdb\u884c\u8de8\u6808\u8bbf\u95ee."}),"\n",(0,l.jsx)(n.li,{children:"\u53ef\u4ee5\u4f7f\u7528\u6307\u9488\u5f15\u7528\u6808\u4e0a\u7684\u67d0\u4e2a\u53d8\u91cf\u5417\uff1f\u5982\u679c\u53ef\u4ee5\uff0c\u5728\u4ec0\u4e48\u60c5\u51b5\u4e0b\u53ef\u4ee5\u8fd9\u4e48\u505a\uff1f\n\u53ef\u4ee5,\u53ea\u8981\u6307\u9488\u7684\u751f\u547d\u5468\u671f\u5c0f\u4e8e\u6216\u8005\u7b49\u4e8e\u6808\u4e0a\u7684\u5f15\u7528\u6e90\u5c31\u884c,\u5982\u679c\u751f\u547d\u5468\u671f\u5927\u4e8e\u5f15\u7528\u6e90\u5c31\u4f1a\u51fa\u73b0\u91ce\u6307\u9488\u7684\u60c5\u51b5.\u5728rust\u4e2d\u4f1a\u62a5\u9519\u4ece\u800c\u65e0\u6cd5\u7f16\u8bd1."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,l.jsx)(n.h3,{id:"\u6808-1",children:"\u6808"}),"\n",(0,l.jsx)(n.p,{children:"\u6808\u4e0a\u5b58\u653e\u7684\u6570\u636e\u662f\u9759\u6001\u7684\uff0c\u9759\u6001\u5927\u5c0f\uff0c\u9759\u6001\u751f\u547d\u5468\u671f\uff08\u4e0d\u53d7\u63a7\u5236\uff0c\u51fd\u6570\u8c03\u7528\u5b8c\u5c31\u88ab\u56de\u6536\uff1b"}),"\n",(0,l.jsx)(n.p,{children:"\u5b58\u5728\u95ee\u9898\uff1a\u6808\u6ea2\u51fa"}),"\n",(0,l.jsx)(n.h3,{id:"\u5806-1",children:"\u5806"}),"\n",(0,l.jsx)(n.p,{children:"\u5806\u4e0a\u5b58\u653e\u7684\u6570\u636e\u662f\u52a8\u6001\u7684\uff0c\u52a8\u6001\u5927\u5c0f\uff0c\u52a8\u6001\u751f\u547d\u5468\u671f\uff08\u5206\u914d\u51fa\u7684\u6bcf\u4e00\u5757\u5185\u5b58\u9700\u8981\u663e\u5f0f\u5730\u91ca\u653e\uff0c\u7075\u6d3b\u7684\u751f\u547d\u5468\u671f\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5b58\u5728\u95ee\u9898\uff1a\u5185\u5b58\u6cc4\u6f0f\uff0c\u4f7f\u7528\u5df2\u91ca\u653e\u5185\u5b58"})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>t});var l=s(7294);const r={},i=l.createContext(r);function t(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);