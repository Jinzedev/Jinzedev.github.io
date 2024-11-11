"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8979],{1678:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(5893),o=t(1151);const i={title:"11-11",tags:["C++","\u7b97\u6cd5"]},a=void 0,r={id:"notes/\u7b97\u6cd5/11-11",title:"11-11",description:"2.",source:"@site/docs/notes/\u7b97\u6cd5/11-11.md",sourceDirName:"notes/\u7b97\u6cd5",slug:"/notes/\u7b97\u6cd5/11-11",permalink:"/en/docs/notes/\u7b97\u6cd5/11-11",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notes/\u7b97\u6cd5/11-11.md",tags:[{label:"C++",permalink:"/en/docs/tags/c"},{label:"\u7b97\u6cd5",permalink:"/en/docs/tags/\u7b97\u6cd5"}],version:"current",frontMatter:{title:"11-11",tags:["C++","\u7b97\u6cd5"]},sidebar:"tutorialSidebar",previous:{title:"\u7b97\u6cd5",permalink:"/en/docs/notes/\u7b97\u6cd5/"},next:{title:"\u5192\u6ce1\u6392\u5e8f\u4e0e\u9009\u62e9\u6392\u5e8f",permalink:"/en/docs/notes/\u7b97\u6cd5/\u5192\u6ce1\u6392\u5e8f\u4e0e\u9009\u62e9\u6392\u5e8f"}},c={},l=[];function d(n){const e={code:"code",li:"li",ol:"ol",pre:"pre",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c++",children:'#include <iostream>\n\nusing namespace std;\n#define PI 3.14\n\nclass Cylinder {\nprivate:\n    double radius;\n    double height;  \n\npublic:\n\n    Cylinder(double r = 1.0, double h = 10.0) {\n        radius = r;\n        height = h;\n    }\n\n\n    double volume() {\n        return PI * radius * radius * height;\n    }\n\n    void display() {\n        cout << "\u5706\u67f1\u4f53\u4fe1\u606f\uff1a\u534a\u5f84\uff1a" << radius << " \u9ad8\u5ea6\uff1a" << height << " \u4f53\u79ef\uff1a" << volume() << endl;\n    }\n};\n\nint main() {\n    Cylinder c1; \n    c1.display();\n\n    cout << endl;\n\n    Cylinder c2(3.0, 5.0);  \n    c2.display();\n\n    return 0;\n}\n\n'})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c++",children:'#include <iostream>\n#include <cmath>\nusing namespace std;\n\nclass Line {\nprivate:\n    double x1, y1; \n    double x2, y2; \n\npublic:\n \n    Line(double a1, double b1, double a2, double b2) {\n        x1 = a1;\n        y1 = b1;\n        x2 = a2;\n        y2 = b2;\n    }\n\n \n    double distance() {\n        return sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));\n    }\n\n   \n    void out() {\n        cout << "\u7ebf\u6bb5\u7aef\u70b9\u5750\u6807: (" << x1 << ", " << y1 << "), (" << x2 << ", " << y2 << ")" << endl;\n    }\n};\n\nint main() {\n    Line a(1, 0, 2, 0); \n    float disc;\n    disc = a.distance(); \n    cout << "\u7ebf\u6bb5\u957f\u5ea6\u4e3a\uff1a" << disc << endl;\n    a.out(); \n\n    return 0;\n}\n\n\n'})})]})}function u(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>a});var s=t(7294);const o={},i=s.createContext(o);function a(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);