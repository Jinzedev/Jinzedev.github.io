"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7201],{2505:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=r(5893),t=r(1151);const i={title:"flutter\u6253\u5305\u6210Android\u5e94\u7528",tags:["flutter","Android"]},d="flutter\u6253\u5305\u6210Android\u5e94\u7528",l={id:"notes/Flutter/flutter\u6253\u5305\u6210Android\u5e94\u7528",title:"flutter\u6253\u5305\u6210Android\u5e94\u7528",description:"\u751f\u6210\u7b7e\u540d",source:"@site/docs/notes/Flutter/flutter\u6253\u5305\u6210Android\u5e94\u7528.md",sourceDirName:"notes/Flutter",slug:"/notes/Flutter/flutter\u6253\u5305\u6210Android\u5e94\u7528",permalink:"/en/docs/notes/Flutter/flutter\u6253\u5305\u6210Android\u5e94\u7528",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notes/Flutter/flutter\u6253\u5305\u6210Android\u5e94\u7528.md",tags:[{label:"flutter",permalink:"/en/docs/tags/flutter"},{label:"Android",permalink:"/en/docs/tags/android"}],version:"current",frontMatter:{title:"flutter\u6253\u5305\u6210Android\u5e94\u7528",tags:["flutter","Android"]},sidebar:"tutorialSidebar",previous:{title:"Widget\u6784\u5efa",permalink:"/en/docs/notes/Flutter/Widget"},next:{title:"Rust\uff1f",permalink:"/en/docs/notes/Rust/"}},a={},o=[{value:"\u751f\u6210\u7b7e\u540d",id:"\u751f\u6210\u7b7e\u540d",level:2},{value:"\u5220\u9664\u7b7e\u540d",id:"\u5220\u9664\u7b7e\u540d",level:2},{value:"\u914d\u7f6e\u7b7e\u540d",id:"\u914d\u7f6e\u7b7e\u540d",level:2},{value:"\u8bf7\u6c42\u540e\u7aef",id:"\u8bf7\u6c42\u540e\u7aef",level:2},{value:"\u6253\u5305\u53d1\u5e03\u7248APK",id:"\u6253\u5305\u53d1\u5e03\u7248apk",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"flutter\u6253\u5305\u6210android\u5e94\u7528",children:"flutter\u6253\u5305\u6210Android\u5e94\u7528"}),"\n",(0,s.jsx)(n.h2,{id:"\u751f\u6210\u7b7e\u540d",children:"\u751f\u6210\u7b7e\u540d"}),"\n",(0,s.jsxs)(n.p,{children:["\u751f\u6210\u4e00\u4e2a\u7528\u4e8e\u7b7e\u540d Flutter \u5e94\u7528\u7a0b\u5e8f\u7684 ",(0,s.jsx)(n.code,{children:"keystore"})," \u6587\u4ef6"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"keytool -genkey -v -keystore <\u8bf7\u81ea\u5df1\u53d6\u540d\u5b57>.keystore -alias <\u8bf7\u81ea\u5df1\u53d6\u540d\u5b57> -keyalg RSA -keysize 2048 -validity 10000\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e24\u4e2a\u540d\u5b57\u8981\u4e0d\u540c"}),"\n",(0,s.jsx)(n.li,{children:"\u53bb\u6389\u5c16\u62ec\u53f7"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u540e\u6587\u4f7f\u7528\u7684\u662f\u4e0b\u9762\u7684\u4f8b\u5b50"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"keytool -genkey -v -keystore genai_android.keystore -alias genai -keyalg RSA -keysize 2048 -validity 10000\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5220\u9664\u7b7e\u540d",children:"\u5220\u9664\u7b7e\u540d"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"keytool -delete -alias genai -keystore genai_android.keystore\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6309\u7167\u63d0\u793a\u586b\u5199\u76f8\u5173\u4fe1\u606f\uff0c\u5e76\u8bb0\u4f4f\u5bc6\u94a5\u5e93\u8def\u5f84\u548c\u522b\u540d\u3002\uff08\u5728\u4e0b\u65b9\u914d\u7f6e\u7b7e\u540d\u65f6\u586b\u5199"}),"\n",(0,s.jsx)(n.h2,{id:"\u914d\u7f6e\u7b7e\u540d",children:"\u914d\u7f6e\u7b7e\u540d"}),"\n",(0,s.jsxs)(n.p,{children:["\u6253\u5f00",(0,s.jsx)(n.code,{children:"android/app"}),"\u76ee\u5f55\u4e0b\u7684",(0,s.jsx)(n.code,{children:"build.gradle"}),"\u6587\u4ef6\uff0c\u6dfb\u52a0\u7b7e\u540d\u914d\u7f6e\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"android {\n    ...\n    signingConfigs {\n        release {\n            keyAlias \"genai\" // \u8bbe\u7f6e\u4f60\u7684 alias \u540d\u79f0\n            keyPassword \"genai_android\" // \u8bbe\u7f6e\u4f60\u7684\u5bc6\u94a5\u5e93\u5bc6\u7801\n            storeFile file('../../keystore/genai_android.keystore') //\u751f\u6210\u7b7e\u540d\u4f4d\u7f6e\n            storePassword \"genai_android\" // \u8bbe\u7f6e\u4f60\u7684\u5bc6\u94a5\u5e93\u5bc6\u7801\n        }\n    }\n    buildTypes {\n        release {\n           // \u4f7f\u7528\u4e0a\u8ff0\u914d\u7f6e\u7684\u7b7e\u540d\u914d\u7f6e\u6765\u7b7e\u7f72APK\n            signingConfig = signingConfigs.release\n             //\u7531\u4e8e\u5e94\u7528\u662f\u5185\u90e8\u4f7f\u7528\u6240\u4ee5\u6211\u5c31\u4e0d\u6df7\u6dc6\u4e86\n            // \u662f\u5426\u542f\u7528\u4ee3\u7801\u538b\u7f29\u4ee5\u51cf\u5c11APK\u5927\u5c0f\uff0c\u8bbe\u7f6e\u4e3afalse\u8868\u793a\u4e0d\u542f\u7528\n            minifyEnabled false\n            // \u662f\u5426\u5220\u9664\u672a\u4f7f\u7528\u7684\u8d44\u6e90\u4ee5\u51cf\u5c11APK\u5927\u5c0f\uff0c\u8bbe\u7f6e\u4e3afalse\u8868\u793a\u4e0d\u542f\u7528\n            shrinkResources false\n            // \u6307\u5b9aProGuard\u89c4\u5219\u6587\u4ef6\uff0c\u7528\u4e8e\u4ee3\u7801\u6df7\u6dc6\u548c\u4f18\u5316\n            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8bf7\u6c42\u540e\u7aef",children:"\u8bf7\u6c42\u540e\u7aef"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u7275\u626f\u5230\u8bf7\u6c42\u540e\u7aef\u63a5\u53e3\uff0c\u90a3\u6211\u4eec\u9700\u8981",(0,s.jsx)(n.strong,{children:"\u914d\u7f6e\u7f51\u7edc\u6743\u9650"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728",(0,s.jsx)(n.code,{children:"app/src/main/AndroidManifest.xml"}),"\u4e2d\u7684",(0,s.jsx)(n.code,{children:"manifest"}),"\u6807\u7b7e\u5185\u6dfb\u52a0\u7f51\u7edc\u6743\u9650"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:'<manifest xmlns:android="http://schemas.android.com/apk/res/android"> \n\t...\n\t<uses-permission android:name="android.permission.INTERNET"/>\n\t...\n</manifest>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u6253\u5305\u53d1\u5e03\u7248apk",children:"\u6253\u5305\u53d1\u5e03\u7248APK"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u751f\u6210\u53d1\u5e03\u7248APK"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"flutter build apk --release\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u63a7\u5236\u53f0\u627e\u5230\u751f\u6210\u5bf9\u5e94\u7684\u5305\u5373\u53ef"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240705142109895",src:r(15).Z+"",width:"934",height:"114"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},15:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/build-558415743d3beca9897f33962bfc4038.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>d});var s=r(7294);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);