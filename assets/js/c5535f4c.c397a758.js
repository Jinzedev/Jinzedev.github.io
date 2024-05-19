"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[6221],{8113:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>d,toc:()=>t});var s=l(5893),i=l(1151);const r={title:"\u53d8\u91cf\u548c\u7c7b\u578b",tags:["Rust"]},c="\u53d8\u91cf",d={id:"notes/Rust/\u53d8\u91cf\u548c\u7c7b\u578b",title:"\u53d8\u91cf\u548c\u7c7b\u578b",description:"\u53d8\u91cf\u58f0\u660e",source:"@site/docs/notes/Rust/3.\u53d8\u91cf\u548c\u7c7b\u578b.md",sourceDirName:"notes/Rust",slug:"/notes/Rust/\u53d8\u91cf\u548c\u7c7b\u578b",permalink:"/docs/notes/Rust/\u53d8\u91cf\u548c\u7c7b\u578b",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notes/Rust/3.\u53d8\u91cf\u548c\u7c7b\u578b.md",tags:[{label:"Rust",permalink:"/docs/tags/rust"}],version:"current",sidebarPosition:3,frontMatter:{title:"\u53d8\u91cf\u548c\u7c7b\u578b",tags:["Rust"]},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5rust\u4e0eCargo",permalink:"/docs/notes/Rust/\u5b89\u88c5rust\u4e0eCargo"},next:{title:"\u6e05\u9664\u56fe\u6807\u7f13\u5b58",permalink:"/docs/notes/Win\u811a\u672c/2023-12-29-\u6e05\u9664\u56fe\u6807\u7f13\u5b58"}},h={},t=[{value:"\u53d8\u91cf\u58f0\u660e",id:"\u53d8\u91cf\u58f0\u660e",level:2},{value:"\u5c40\u90e8\u53d8\u91cf",id:"\u5c40\u90e8\u53d8\u91cf",level:3},{value:"\u5e38\u91cf",id:"\u5e38\u91cf",level:3},{value:"\u9759\u6001\u53d8\u91cf",id:"\u9759\u6001\u53d8\u91cf",level:3},{value:"\u4e0d\u53ef\u53d8\u9759\u6001\u53d8\u91cf",id:"\u4e0d\u53ef\u53d8\u9759\u6001\u53d8\u91cf",level:4},{value:"\u53ef\u53d8\u9759\u6001\u53d8\u91cf",id:"\u53ef\u53d8\u9759\u6001\u53d8\u91cf",level:4},{value:"\u7ebf\u7a0b\u5b89\u5168\u7684\u53ef\u53d8\u9759\u6001\u53d8\u91cf",id:"\u7ebf\u7a0b\u5b89\u5168\u7684\u53ef\u53d8\u9759\u6001\u53d8\u91cf",level:4},{value:"\u7c7b\u578b\u63a8\u5bfc",id:"\u7c7b\u578b\u63a8\u5bfc",level:2},{value:"\u7c7b\u578b\u63a8\u5bfc\u793a\u4f8b",id:"\u7c7b\u578b\u63a8\u5bfc\u793a\u4f8b",level:3},{value:"\u663e\u5f0f\u6307\u5b9a\u7c7b\u578b\u7684\u60c5\u51b5",id:"\u663e\u5f0f\u6307\u5b9a\u7c7b\u578b\u7684\u60c5\u51b5",level:3},{value:"\u521d\u59cb\u5316\u7ed1\u5b9a Initializing bindings",id:"\u521d\u59cb\u5316\u7ed1\u5b9a-initializing-bindings",level:2},{value:"\u4f5c\u7528\u57df Scope",id:"\u4f5c\u7528\u57df-scope",level:2},{value:"\u9690\u85cf shadowing",id:"\u9690\u85cf-shadowing",level:2},{value:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",id:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",level:2},{value:"bool",id:"bool",level:3},{value:"char",id:"char",level:3},{value:"\u6574\u6570\u7c7b\u578b",id:"\u6574\u6570\u7c7b\u578b",level:3},{value:"\u6d6e\u70b9\u7c7b\u578b",id:"\u6d6e\u70b9\u7c7b\u578b",level:3},{value:"\u590d\u5408\u7c7b\u578b",id:"\u590d\u5408\u7c7b\u578b",level:2},{value:"\u5143\u7ec4 Tuples",id:"\u5143\u7ec4-tuples",level:3},{value:"\u6570\u7ec4",id:"\u6570\u7ec4",level:3},{value:"\u5207\u7247 Slices",id:"\u5207\u7247-slices",level:3},{value:"str",id:"str",level:3},{value:"\u5b57\u7b26\u4e32\u5207\u7247 (<code>&amp;str</code>)",id:"\u5b57\u7b26\u4e32\u5207\u7247-str",level:4},{value:"<code>String</code> \u7c7b\u578b",id:"string-\u7c7b\u578b",level:4},{value:"\u8f6c\u6362",id:"\u8f6c\u6362",level:4},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:4}];function x(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u53d8\u91cf",children:"\u53d8\u91cf"}),"\n",(0,s.jsx)(e.h2,{id:"\u53d8\u91cf\u58f0\u660e",children:"\u53d8\u91cf\u58f0\u660e"}),"\n",(0,s.jsx)(e.h3,{id:"\u5c40\u90e8\u53d8\u91cf",children:"\u5c40\u90e8\u53d8\u91cf"}),"\n",(0,s.jsx)(e.p,{children:"\u5c40\u90e8\u53d8\u91cf\u58f0\u660e\u4e00\u5b9a\u662f\u4ee5\u5173\u952e\u5b57let\u5f00\u5934\uff0c\u7c7b\u578b\u4e00\u5b9a\u662f\u8ddf\u5728\u5192\u53f7\uff1a\u7684\u540e\u9762\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"let x = 5;       // \u4e0d\u53ef\u53d8\u53d8\u91cf\nlet mut y = 10;  // \u53ef\u53d8\u53d8\u91cf\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"let"})," \u5173\u952e\u5b57\u7528\u4e8e\u58f0\u660e\u53d8\u91cf\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"mut"})," \u5173\u952e\u5b57\u8868\u793a\u53d8\u91cf\u662f\u53ef\u53d8\u7684\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5e38\u91cf",children:"\u5e38\u91cf"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"const MAX_POINTS: u32 = 100_000;\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5e38\u91cf\u7528 ",(0,s.jsx)(e.code,{children:"const"})," \u58f0\u660e\uff0c\u5fc5\u987b\u6307\u5b9a\u7c7b\u578b\uff0c\u4e14\u5728\u6574\u4e2a\u7a0b\u5e8f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u4fdd\u6301\u4e0d\u53d8\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u9759\u6001\u53d8\u91cf",children:"\u9759\u6001\u53d8\u91cf"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4f7f\u7528",(0,s.jsx)(e.code,{children:"static"}),"\u5173\u952e\u5b57\u6765\u58f0\u660e\u9759\u6001\u53d8\u91cf\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\u9759\u6001\u53d8\u91cf\u5728\u6574\u4e2a\u7a0b\u5e8f\u8fd0\u884c\u671f\u95f4\u5b58\u5728\uff0c\u62e5\u6709",(0,s.jsx)(e.code,{children:"static"}),"\u751f\u547d\u5468\u671f(\u6574\u4e2a\u7a0b\u5e8f\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u9759\u6001\u53d8\u91cf\u7684\u5185\u5b58\u5206\u914d\u5728\u7f16\u8bd1\u65f6\u5b8c\u6210\uff08\u4e0d\u4f1a\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u6536\u56de\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9759\u6001\u53d8\u91cf\u662f\u4e0d\u53ef\u53d8\u7684\uff1b\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(e.code,{children:"static mut"}),"\u58f0\u660e\u53ef\u53d8\u9759\u6001\u53d8\u91cf\uff0c\u4f46\u9700\u8981\u4f7f\u7528",(0,s.jsx)(e.code,{children:"unsafe"}),"\u4ee3\u7801\u5757\u6765\u8bbf\u95ee\u548c\u4fee\u6539\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\xb7\u5168\u5c40\u53d8\u91cf\u5fc5\u987b\u5728\u58f0\u660e\u7684\u65f6\u5019\u9a6c\u4e0a\u521d\u59cb\u5316\uff1b"}),"\n",(0,s.jsx)(e.li,{children:"\u5168\u5c40\u53d8\u91cf\u7684\u521d\u59cb\u5316\u5fc5\u987b\u662f\u7f16\u8bd1\u671f\u53ef\u786e\u5b9a\u7684\u5e38\u91cf\uff0c\u4e0d\u80fd\u5305\u62ec\u6267\u884c\u671f\u624d\u80fd\u786e\u5b9a\u7684\u8868\u8fbe\u5f0f\u3001\u8bed\u53e5\u548c\u51fd\u6570\u8c03\u7528\uff1b"}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"\u4e0d\u53ef\u53d8\u9759\u6001\u53d8\u91cf",children:"\u4e0d\u53ef\u53d8\u9759\u6001\u53d8\u91cf"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u58f0\u660e\u548c\u4f7f\u7528\u4e0d\u53ef\u53d8\u9759\u6001\u53d8\u91cf"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'static HELLO_WORLD: &str = "Hello, world!";\n\nfn main() {\n    println!("{}", HELLO_WORLD);\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"\u53ef\u53d8\u9759\u6001\u53d8\u91cf",children:"\u53ef\u53d8\u9759\u6001\u53d8\u91cf"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u58f0\u660e\u548c\u4f7f\u7528\u53ef\u53d8\u9759\u6001\u53d8\u91cf"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'static mut COUNTER: i32 = 0;\n\nfn add_to_counter(value: i32) {\n    unsafe {\n        COUNTER += value;\n    }\n}\n\nfn main() {\n    add_to_counter(3);\n    unsafe {\n        println!("COUNTER: {}", COUNTER);\n    }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"\u7ebf\u7a0b\u5b89\u5168\u7684\u53ef\u53d8\u9759\u6001\u53d8\u91cf",children:"\u7ebf\u7a0b\u5b89\u5168\u7684\u53ef\u53d8\u9759\u6001\u53d8\u91cf"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528",(0,s.jsx)(e.code,{children:"Mutex"}),"\u786e\u4fdd\u7ebf\u7a0b\u5b89\u5168"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'use std::sync::Mutex;\n\nstatic GLOBAL_COUNTER: Mutex<i32> = Mutex::new(0);\n\nfn main() {\n    {\n        let mut counter = GLOBAL_COUNTER.lock().unwrap();\n        *counter += 1;\n    }\n    println!("GLOBAL_COUNTER: {}", GLOBAL_COUNTER.lock().unwrap());\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u7c7b\u578b\u63a8\u5bfc",children:"\u7c7b\u578b\u63a8\u5bfc"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Rust \u53ef\u4ee5\u81ea\u52a8\u63a8\u5bfc\u53d8\u91cf\u7684\u7c7b\u578b\uff0c\u4e0d\u9700\u8981\u663e\u5f0f\u6307\u5b9a\u7c7b\u578b\uff0c\u9664\u975e\u7f16\u8bd1\u5668\u65e0\u6cd5\u63a8\u5bfc\u51fa\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u7c7b\u578b\u63a8\u5bfc\u793a\u4f8b",children:"\u7c7b\u578b\u63a8\u5bfc\u793a\u4f8b"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u7b80\u5355\u53d8\u91cf\u7684\u7c7b\u578b\u63a8\u5bfc"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'let x = 5; // x \u88ab\u63a8\u5bfc\u4e3a i32\nlet y = 3.14; // y \u88ab\u63a8\u5bfc\u4e3a f64\nlet is_active = true; // is_active \u88ab\u63a8\u5bfc\u4e3a bool\nlet name = "Alice"; // name \u88ab\u63a8\u5bfc\u4e3a &str\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u63a8\u5bfc\u6570\u7ec4\u7c7b\u578b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"let numbers = [1, 2, 3, 4, 5]; // numbers \u88ab\u63a8\u5bfc\u4e3a [i32; 5]\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u663e\u5f0f\u6307\u5b9a\u7c7b\u578b\u7684\u60c5\u51b5",children:"\u663e\u5f0f\u6307\u5b9a\u7c7b\u578b\u7684\u60c5\u51b5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5f53\u7c7b\u578b\u4e0d\u660e\u786e\u6216\u65e0\u6cd5\u63a8\u5bfc\u65f6\u9700\u8981\u663e\u5f0f\u6307\u5b9a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'let guess: u32 = "42".parse().expect("Not a number!");\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528\u6cdb\u578b\u6216\u590d\u6742\u7c7b\u578b\u65f6"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'let result: Result<i32, _> = "42".parse();\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u521d\u59cb\u5316\u7ed1\u5b9a-initializing-bindings",children:"\u521d\u59cb\u5316\u7ed1\u5b9a Initializing bindings"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728\u58f0\u660e\u53d8\u91cf\u65f6\u7acb\u5373\u4e3a\u5176\u8d4b\u503c\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u65e0\u6784\u9020\u51fd\u6570\uff0c\u65e0\u521d\u59cb\u503c"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u4e0d\u8d4b\u503c\uff0cRust \u662f\u4e0d\u4f1a\u8ba9\u6211\u4eec\u4f7f\u7528\u4e00\u4e2a\u6ca1\u6709\u7ecf\u8fc7\u521d\u59cb\u5316\u7684\u503c\u7684\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e3e\u4f8b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\n    let x: i32;\n    println!("The value of x is: {}", x);\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6784\u5efa\u540e\u51fa\u73b0\uff0cerror"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"use of possibly uninitialized variable: `x`\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u4f5c\u7528\u57df-scope",children:"\u4f5c\u7528\u57df Scope"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u53d8\u91cf\u5728\u7a0b\u5e8f\u4e2d\u6709\u6548\u7684\u8303\u56f4\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u901a\u8fc7\u82b1\u62ec\u53f7",(0,s.jsx)(e.code,{children:"{}"}),"\u6765\u5b9a\u4e49\u4f5c\u7528\u57df\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u53d8\u91cf\u8d85\u51fa\u4f5c\u7528\u57df\u65f6\u4f1a\u88ab\u81ea\u52a8\u9500\u6bc1\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u53d8\u91cf\u7684\u4f5c\u7528\u57df"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\n    let x = 5; // x \u7684\u4f5c\u7528\u57df\u5f00\u59cb\n    {\n        let y = 10; // y \u7684\u4f5c\u7528\u57df\u5f00\u59cb\n        println!("x: {}, y: {}", x, y);\n    } // y \u7684\u4f5c\u7528\u57df\u7ed3\u675f\n    // println!("y: {}", y); // \u7f16\u8bd1\u9519\u8bef\uff1ay \u4e0d\u5728\u4f5c\u7528\u57df\u5185\n    println!("x: {}", x);\n} // x \u7684\u4f5c\u7528\u57df\u7ed3\u675f\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5d4c\u5957\u4f5c\u7528\u57df"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\n    let x = 5;\n    {\n        let x = x * 2;\n        println!("Inner scope x: {}", x); // \u6253\u5370: Inner scope x: 10\n    }\n    println!("Outer scope x: {}", x); // \u6253\u5370: Outer scope x: 5\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u9690\u85cf-shadowing",children:"\u9690\u85cf shadowing"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5728\u540c\u4e00\u4f5c\u7528\u57df\u6216\u5185\u5d4c\u4f5c\u7528\u57df\u4e2d\u91cd\u65b0\u58f0\u660e\u4e00\u4e2a\u53d8\u91cf\u540d\uff0c\u4ee5\u9690\u85cf\u524d\u4e00\u4e2a\u540c\u540d\u53d8\u91cf\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u9690\u85cf\u5141\u8bb8\u6539\u53d8\u53d8\u91cf\u7684\u7c7b\u578b\u548c\u53ef\u53d8\u6027\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u7b80\u5355\u7684\u9690\u85cf"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\n    let x = 5;\n    let x = x + 1; // \u9690\u85cf\u4e86\u4e4b\u524d\u7684 x\n    {\n        let x = x * 2; // \u5728\u5d4c\u5957\u4f5c\u7528\u57df\u4e2d\u518d\u6b21\u9690\u85cf x\n        println!("Inner scope x: {}", x); // \u6253\u5370: Inner scope x: 12\n    }\n    println!("Outer scope x: {}", x); // \u6253\u5370: Outer scope x: 6\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6539\u53d8\u53d8\u91cf\u7c7b\u578b\u548c\u53ef\u53d8\u6027"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\n    let spaces = "   ";\n    let spaces = spaces.len(); // \u9690\u85cf\u5e76\u6539\u53d8\u7c7b\u578b\n    println!("spaces length: {}", spaces);\n\n    let mut x = 5; // \u53ef\u53d8\u53d8\u91cf\n    x = 6;\n    let x = x; // \u9690\u85cf\u5e76\u53d8\u4e3a\u4e0d\u53ef\u53d8\u53d8\u91cf\n    // x = 7; // \u7f16\u8bd1\u9519\u8bef\uff1ax \u73b0\u5728\u662f\u4e0d\u53ef\u53d8\u7684\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:"\u6570\u636e\u7c7b\u578b",children:"\u6570\u636e\u7c7b\u578b"}),"\n",(0,s.jsx)(e.h2,{id:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",children:"\u57fa\u672c\u6570\u636e\u7c7b\u578b"}),"\n",(0,s.jsx)(e.h3,{id:"bool",children:"bool"}),"\n",(0,s.jsx)(e.p,{children:"Rust \u7684\u5e03\u5c14\u7c7b\u578b\u7528\u4e8e\u8868\u793a\u771f\u6216\u5047\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5e03\u5c14\u503c"}),"\uff1a",(0,s.jsx)(e.code,{children:"bool"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"let is_true: bool = true;\nlet is_false = false;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"char",children:"char"}),"\n",(0,s.jsx)(e.p,{children:"Rust \u7684\u5b57\u7b26\u7c7b\u578b\u7528\u4e8e\u8868\u793a\u5355\u4e2aUnicode\u5b57\u7b26\uff0c\u7528\u5355\u5f15\u53f7\u5305\u88f9\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5b57\u7b26"}),"\uff1a",(0,s.jsx)(e.code,{children:"char"})]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"let c: char = 'A';\nlet emoji = '\ud83d\ude0a';\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0d\u50cf\u5176\u5b83\u8bed\u8a00\uff0c\u8fd9\u610f\u5473\u7740Rust\u7684char\u5e76\u4e0d\u662f 1 \u4e2a\u5b57\u8282\uff0c\u800c\u662f 4 \u4e2a\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u6574\u6570\u7c7b\u578b",children:"\u6574\u6570\u7c7b\u578b"}),"\n",(0,s.jsx)(e.p,{children:"Rust \u63d0\u4f9b\u4e86\u591a\u79cd\u6574\u6570\u7c7b\u578b\uff0c\u5305\u62ec\u6709\u7b26\u53f7\u548c\u65e0\u7b26\u53f7\u6574\u6570\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u6709\u7b26\u53f7\u6574\u6570"}),"\uff1a",(0,s.jsx)(e.code,{children:"i8"}),", ",(0,s.jsx)(e.code,{children:"i16"}),", ",(0,s.jsx)(e.code,{children:"i32"}),", ",(0,s.jsx)(e.code,{children:"i64"}),", ",(0,s.jsx)(e.code,{children:"i128"}),", ",(0,s.jsx)(e.code,{children:"isize"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u8303\u56f4\uff1a",(0,s.jsx)(e.code,{children:"i8"}),"\uff08-128 \u5230 127\uff09\uff0c",(0,s.jsx)(e.code,{children:"i16"}),"\uff08-32,768 \u5230 32,767\uff09\uff0c",(0,s.jsx)(e.code,{children:"i32"}),"\uff08-2,147,483,648 \u5230 2,147,483,647\uff09\uff0c",(0,s.jsx)(e.code,{children:"i64"}),"\u548c",(0,s.jsx)(e.code,{children:"i128"}),"\u5177\u6709\u66f4\u5927\u7684\u8303\u56f4\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"isize"}),"\uff1a\u5e73\u53f0\u76f8\u5173\u5927\u5c0f\u7684\u6574\u6570\uff0832\u4f4d\u621664\u4f4d\uff09\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u65e0\u7b26\u53f7\u6574\u6570"}),"\uff1a",(0,s.jsx)(e.code,{children:"u8"}),", ",(0,s.jsx)(e.code,{children:"u16"}),", ",(0,s.jsx)(e.code,{children:"u32"}),", ",(0,s.jsx)(e.code,{children:"u64"}),", ",(0,s.jsx)(e.code,{children:"u128"}),", ",(0,s.jsx)(e.code,{children:"usize"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u8303\u56f4\uff1a",(0,s.jsx)(e.code,{children:"u8"}),"\uff080 \u5230 255\uff09\uff0c",(0,s.jsx)(e.code,{children:"u16"}),"\uff080 \u5230 65,535\uff09\uff0c",(0,s.jsx)(e.code,{children:"u32"}),"\uff080 \u5230 4,294,967,295\uff09\uff0c",(0,s.jsx)(e.code,{children:"u64"}),"\u548c",(0,s.jsx)(e.code,{children:"u128"}),"\u5177\u6709\u66f4\u5927\u7684\u8303\u56f4\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"usize"}),"\uff1a\u5e73\u53f0\u76f8\u5173\u5927\u5c0f\u7684\u65e0\u7b26\u53f7\u6574\u6570\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u6d6e\u70b9\u7c7b\u578b",children:"\u6d6e\u70b9\u7c7b\u578b"}),"\n",(0,s.jsx)(e.p,{children:"Rust \u63d0\u4f9b\u4e86\u5355\u7cbe\u5ea6\u548c\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u7c7b\u578b\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5355\u7cbe\u5ea6\u6d6e\u70b9\u6570"}),"\uff1a",(0,s.jsx)(e.code,{children:"f32"})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570"}),"\uff1a",(0,s.jsx)(e.code,{children:"f64"}),"\uff08\u9ed8\u8ba4\uff09"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u590d\u5408\u7c7b\u578b",children:"\u590d\u5408\u7c7b\u578b"}),"\n",(0,s.jsx)(e.h3,{id:"\u5143\u7ec4-tuples",children:"\u5143\u7ec4 Tuples"}),"\n",(0,s.jsx)(e.p,{children:"\u5143\u7ec4\u53ef\u4ee5\u5c06\u591a\u4e2a\u4e0d\u540c\u7c7b\u578b\u7684\u503c\u7ec4\u5408\u5728\u4e00\u8d77\u3002\u5143\u7ec4\u7684\u957f\u5ea6\u662f\u56fa\u5b9a\u7684\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'let tup: (i32, f64, u8) = (500, 6.4, 1);\nlet (x, y, z) = tup; // \u89e3\u6784\u5143\u7ec4\nprintln!("x: {}, y: {}, z: {}", x, y, z);\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u901a\u8fc7\u7d22\u5f15\u8bbf\u95ee\u5143\u7ec4\u4e2d\u7684\u503c,\u4e0b\u6807\u662f\u4ece0\u5f00\u59cb\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"let a = tup.0;\nlet b = tup.1;\nlet c = tup.2;\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u6570\u7ec4",children:"\u6570\u7ec4"}),"\n",(0,s.jsx)(e.p,{children:"\u6570\u7ec4\u5305\u542b\u4e00\u7ec4\u76f8\u540c\u7c7b\u578b\u7684\u503c\uff0c\u957f\u5ea6\u662f\u56fa\u5b9a\u7684\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"let arr: [i32; 3] = [1, 2, 3];\nlet first = arr[0];\nlet second = arr[1];\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f60\u8fd8\u53ef\u4ee5\u7528\u76f8\u540c\u7684\u503c\u521d\u59cb\u5316\u6570\u7ec4\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"let arr = [3; 5]; // \u7b49\u540c\u4e8e [3, 3, 3, 3, 3]\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u5207\u7247-slices",children:"\u5207\u7247 Slices"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5207\u7247\u662f",(0,s.jsx)(e.strong,{children:"\u5bf9\u6570\u7ec4\u6216\u5b57\u7b26\u4e32\u7684\u4e00\u90e8\u5206\u7684\u5f15\u7528"})," \u6240\u4ee5\u6709",(0,s.jsx)(e.code,{children:"&"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5207\u7247\u6ca1\u6709\u6240\u6709\u6743\uff0c\u53ea\u662f\u501f\u7528\u6570\u7ec4\u6216\u5b57\u7b26\u4e32\u7684\u4e00\u90e8\u5206\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528\u8303\u56f4\u8bed\u6cd5",(0,s.jsx)(e.code,{children:"[start..end]"}),"\u6765\u521b\u5efa\u5207\u7247\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8d77\u59cb\u7d22\u5f15\uff08start\uff09"}),"\uff1a\u5305\u542b\u5728\u5207\u7247\u4e2d\uff0c\u4ece0\u5f00\u59cb\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u7ed3\u675f\u7d22\u5f15\uff08end\uff09"}),"\uff1a\u6392\u4ed6\u6027\u7684\uff08exclusive\uff09\uff0c\u5373\u4e0d\u5305\u62ec\u5728\u5207\u7247\u4e2d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'let arr = [1, 2, 3, 4, 5];\nlet slice = &arr[1..3];  // \u5305\u542b\u7d22\u5f15 1 \u548c 2 \u7684\u5143\u7d20\uff0c\u5373 2 \u548c 3\nprintln!("slice: {:?}", slice); // \u8f93\u51fa: slice: [2, 3]\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u7701\u7565\u7d22\u5f15\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u7701\u7565\u8d77\u59cb\u7d22\u5f15"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'let arr = [1, 2, 3, 4, 5];\nlet slice = &arr[..3]; // \u7b49\u540c\u4e8e &arr[0..3]\nprintln!("slice: {:?}", slice); // \u8f93\u51fa: slice: [1, 2, 3]\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u7701\u7565\u7ed3\u675f\u7d22\u5f15"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'let arr = [1, 2, 3, 4, 5];\nlet slice = &arr[2..]; // \u7b49\u540c\u4e8e &arr[2..5]\nprintln!("slice: {:?}", slice); // \u8f93\u51fa: slice: [3, 4, 5]\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u7701\u7565\u8d77\u59cb\u7d22\u5f15\u548c\u7ed3\u675f\u7d22\u5f15"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'let arr = [1, 2, 3, 4, 5];\nlet slice = &arr[..]; // \u7b49\u540c\u4e8e &arr[0..5]\nprintln!("slice: {:?}", slice); // \u8f93\u51fa: slice: [1, 2, 3, 4, 5]\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.strong,{children:"\u5b57\u7b26\u4e32\u5207\u7247"})}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'let s = String::from("hello world");\nlet hello = &s[..5]; // \u7b49\u540c\u4e8e &s[0..5]\nlet world = &s[6..]; // \u7b49\u540c\u4e8e &s[6..11]\nlet whole = &s[..];  // \u7b49\u540c\u4e8e &s[0..11]\nprintln!("hello: {}", hello); // \u8f93\u51fa: hello: hello\nprintln!("world: {}", world); // \u8f93\u51fa: world: world\nprintln!("whole: {}", whole); // \u8f93\u51fa: whole: hello world\n'})}),"\n",(0,s.jsx)(e.h3,{id:"str",children:"str"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"str"})," \u662f\u5b57\u7b26\u4e32\u5207\u7247\u7c7b\u578b\uff0c\u901a\u5e38\u4ee5\u5f15\u7528\u7684\u5f62\u5f0f\u4f7f\u7528\uff0c\u5373 ",(0,s.jsx)(e.code,{children:"&str"}),"\u3002"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsxs)(e.strong,{children:["\u5b57\u7b26\u4e32\u5207\u7247 (",(0,s.jsx)(e.code,{children:"&str"}),")"]}),"\uff1a\u4e0d\u53ef\u53d8\u7684\u5b57\u7b26\u4e32\u5f15\u7528\uff0c\u901a\u5e38\u7528\u6765\u5f15\u7528\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u6216 ",(0,s.jsx)(e.code,{children:"String"})," \u7c7b\u578b\u7684\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsxs)(e.strong,{children:["\u5b57\u7b26\u4e32 (",(0,s.jsx)(e.code,{children:"String"}),")"]}),"\uff1a\u53ef\u53d8\u7684\u3001\u62e5\u6709\u6240\u6709\u6743\u7684\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u5141\u8bb8\u5b57\u7b26\u4e32\u7684\u4fee\u6539\u548c\u52a8\u6001\u589e\u957f\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.h4,{id:"\u5b57\u7b26\u4e32\u5207\u7247-str",children:["\u5b57\u7b26\u4e32\u5207\u7247 (",(0,s.jsx)(e.code,{children:"&str"}),")"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5b9a\u4e49\u5b57\u7b26\u4e32\u5207\u7247"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'let greeting: &str = "Hello, world!";\nprintln!("{}", greeting);  // \u8f93\u51fa: Hello, world!\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h4,{id:"string-\u7c7b\u578b",children:[(0,s.jsx)(e.code,{children:"String"})," \u7c7b\u578b"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5b9a\u4e49\u548c\u4fee\u6539 ",(0,s.jsx)(e.code,{children:"String"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'let mut s = String::from("Hello");\ns.push_str(", world!");  // \u6dfb\u52a0\u4e00\u4e2a\u5b57\u7b26\u4e32\u5207\u7247\u5230 `String` \u672b\u5c3e\nprintln!("{}", s);  // \u8f93\u51fa: Hello, world!\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"\u8f6c\u6362",children:"\u8f6c\u6362"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.strong,{children:[(0,s.jsx)(e.code,{children:"String"})," \u8f6c ",(0,s.jsx)(e.code,{children:"&str"})]})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'let s = String::from("Hello");\nlet slice: &str = &s;  // `String` \u8f6c `&str`\nprintln!("{}", slice);  // \u8f93\u51fa: Hello\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.strong,{children:[(0,s.jsx)(e.code,{children:"&str"})," \u8f6c ",(0,s.jsx)(e.code,{children:"String"})]})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'let slice: &str = "Hello, world!";\nlet s = String::from(slice);  // `&str` \u8f6c `String`\nprintln!("{}", s);  // \u8f93\u51fa: Hello, world!\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5b57\u7b26\u4e32\u5207\u7247"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'let s = String::from("Hello, world!");\nlet hello = &s[0..5];  // \u5207\u7247\uff0c\u5305\u542b\u7d22\u5f15 0 \u5230 4 \u7684\u5b57\u7b26\nlet world = &s[7..12];  // \u5207\u7247\uff0c\u5305\u542b\u7d22\u5f15 7 \u5230 11 \u7684\u5b57\u7b26\nprintln!("hello: {}, world: {}", hello, world);  // \u8f93\u51fa: hello: Hello, world: world\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h1,{id:""})]})}function j(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},1151:(n,e,l)=>{l.d(e,{Z:()=>d,a:()=>c});var s=l(7294);const i={},r=s.createContext(i);function c(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);