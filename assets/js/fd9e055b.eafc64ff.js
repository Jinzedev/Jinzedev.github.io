"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[827],{5164:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=e(5893),i=e(1151);const a={title:"\u5192\u6ce1\u6392\u5e8f\u4e0e\u9009\u62e9\u6392\u5e8f",tags:["C++","\u7b97\u6cd5"]},s=void 0,o={id:"notes/\u7b97\u6cd5/\u5192\u6ce1\u6392\u5e8f\u4e0e\u9009\u62e9\u6392\u5e8f",title:"\u5192\u6ce1\u6392\u5e8f\u4e0e\u9009\u62e9\u6392\u5e8f",description:"\u5192\u6ce1\u6392\u5e8f\u4e0e\u9009\u62e9\u6392\u5e8f",source:"@site/docs/notes/\u7b97\u6cd5/\u5192\u6ce1\u6392\u5e8f\u4e0e\u9009\u62e9\u6392\u5e8f.md",sourceDirName:"notes/\u7b97\u6cd5",slug:"/notes/\u7b97\u6cd5/\u5192\u6ce1\u6392\u5e8f\u4e0e\u9009\u62e9\u6392\u5e8f",permalink:"/docs/notes/\u7b97\u6cd5/\u5192\u6ce1\u6392\u5e8f\u4e0e\u9009\u62e9\u6392\u5e8f",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notes/\u7b97\u6cd5/\u5192\u6ce1\u6392\u5e8f\u4e0e\u9009\u62e9\u6392\u5e8f.md",tags:[{label:"C++",permalink:"/docs/tags/c"},{label:"\u7b97\u6cd5",permalink:"/docs/tags/\u7b97\u6cd5"}],version:"current",frontMatter:{title:"\u5192\u6ce1\u6392\u5e8f\u4e0e\u9009\u62e9\u6392\u5e8f",tags:["C++","\u7b97\u6cd5"]},sidebar:"tutorialSidebar",previous:{title:"\u7b97\u6cd5",permalink:"/docs/notes/\u7b97\u6cd5/"}},c={},d=[{value:"\u5192\u6ce1\u6392\u5e8f\u4e0e\u9009\u62e9\u6392\u5e8f",id:"\u5192\u6ce1\u6392\u5e8f\u4e0e\u9009\u62e9\u6392\u5e8f",level:2},{value:"\u5192\u6ce1\u6392\u5e8f",id:"\u5192\u6ce1\u6392\u5e8f",level:3},{value:"\u9009\u62e9\u6392\u5e8f",id:"\u9009\u62e9\u6392\u5e8f",level:3}];function l(n){const r={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"\u5192\u6ce1\u6392\u5e8f\u4e0e\u9009\u62e9\u6392\u5e8f",children:"\u5192\u6ce1\u6392\u5e8f\u4e0e\u9009\u62e9\u6392\u5e8f"}),"\n",(0,t.jsx)(r.h3,{id:"\u5192\u6ce1\u6392\u5e8f",children:"\u5192\u6ce1\u6392\u5e8f"}),"\n",(0,t.jsx)(r.p,{children:"\u57fa\u672c\u601d\u60f3\u662f\u901a\u8fc7\u591a\u6b21\u904d\u5386\u6570\u7ec4\uff0c\u6bcf\u6b21\u6bd4\u8f83\u76f8\u90bb\u7684\u4e24\u4e2a\u5143\u7d20\uff0c\u5c06\u8f83\u5927\u7684\u5143\u7d20\u9010\u6e10\u5411\u6570\u7ec4\u7684\u672b\u5c3e\u201c\u5192\u6ce1\u201d"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c++",children:'#include <iostream>  // \u5f15\u5165\u6807\u51c6\u8f93\u5165\u8f93\u51fa\u6d41\u5e93\uff0c\u63d0\u4f9b\u8f93\u5165\u8f93\u51fa\u529f\u80fd\nusing namespace std; // \u4f7f\u7528\u6807\u51c6\u547d\u540d\u7a7a\u95f4\uff0c\u907f\u514d\u6bcf\u6b21\u4f7f\u7528\u6807\u51c6\u5e93\u65f6\u5199 std::\n\n// \u5192\u6ce1\u6392\u5e8f\u51fd\u6570\nvoid bubbleSort(int arr[], int n) {\n    // \u5916\u5c42\u5faa\u73af\u63a7\u5236\u6392\u5e8f\u7684\u8f6e\u6570\uff0c\u6bcf\u6b21\u5c06\u4e00\u4e2a\u6700\u5927\u7684\u5143\u7d20\u653e\u5230\u6700\u540e\u7684\u4f4d\u7f6e,\u6240\u4ee5\u662fn-1\n    for (int i = 0; i < n - 1; i++) {\n        // \u5185\u5c42\u5faa\u73af\u7528\u4e8e\u6bd4\u8f83\u76f8\u90bb\u7684\u5143\u7d20\uff0c\u5e76\u5c06\u8f83\u5927\u7684\u5143\u7d20\u5411\u540e\u79fb\u52a8\n        // \u7531\u4e8e\u6bcf\u6b21\u904d\u5386\u540e\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u5df2\u7ecf\u6392\u597d\uff0c\u5e76\u4e14\u786e\u4fdd\u6bcf\u4e00\u8f6e\u53ea\u6bd4\u8f83\u672a\u6392\u5e8f\u7684\u90e8\u5206\uff08i\uff09\uff0c\u56e0\u6b64\u5185\u5c42\u5faa\u73af\u8303\u56f4\u662f n-i-1\n        for (int j = 0; j < n - i - 1; j++) {\n            // \u5982\u679c\u524d\u4e00\u4e2a\u5143\u7d20\u6bd4\u540e\u4e00\u4e2a\u5143\u7d20\u5927\uff0c\u5219\u4ea4\u6362\u5b83\u4eec\u7684\u4f4d\u7f6e\n            if (arr[j] > arr[j + 1]) {\n                // \u4ea4\u6362\u76f8\u90bb\u7684\u5143\u7d20\n                int temp = arr[j]; // \u5c06 arr[j] \u6682\u5b58\u5230 temp \u4e2d\n                arr[j] = arr[j + 1]; // \u5c06 arr[j + 1] \u7684\u503c\u8d4b\u7ed9 arr[j]\n                arr[j + 1] = temp; // \u5c06 temp \u4e2d\u5b58\u50a8\u7684\u503c\u8d4b\u7ed9 arr[j + 1]\n            }\n        }\n    }\n}\n\n// \u6253\u5370\u6570\u7ec4\u7684\u51fd\u6570\nvoid printArray(int arr[], int size) {\n    // \u5faa\u73af\u904d\u5386\u6570\u7ec4\u7684\u6bcf\u4e2a\u5143\u7d20\u5e76\u6253\u5370\u51fa\u6765\n    for (int i = 0; i < size; i++) {\n        cout << arr[i] << " "; // \u8f93\u51fa\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\uff0c\u5143\u7d20\u4e4b\u95f4\u7528\u7a7a\u683c\u5206\u9694\n    }\n    cout << endl; // \u8f93\u51fa\u6362\u884c\u7b26\uff0c\u6362\u884c\u4ee5\u4fbf\u4e0b\u4e00\u6b21\u8f93\u51fa\u65f6\u4e0d\u4f1a\u5728\u540c\u4e00\u884c\n}\n\nint main() {\n    // \u5b9a\u4e49\u5e76\u521d\u59cb\u5316\u4e00\u4e2a\u6574\u578b\u6570\u7ec4\n    int arr[] = {64, 34, 25, 12, 22, 11, 90};\n\n    // \u8ba1\u7b97\u6570\u7ec4\u7684\u957f\u5ea6\uff0csizeof(arr) \u83b7\u53d6\u6570\u7ec4\u603b\u5b57\u8282\u5927\u5c0f\uff0csizeof(arr[0]) \u83b7\u53d6\u4e00\u4e2a\u5143\u7d20\u7684\u5b57\u8282\u5927\u5c0f\n    int n = sizeof(arr) / sizeof(arr[0]);\n\n    // \u8f93\u51fa\u6392\u5e8f\u524d\u7684\u6570\u7ec4\n    cout << "\u6392\u5e8f\u524d\u7684\u6570\u7ec4: \\n";\n    printArray(arr, n); // \u8c03\u7528 printArray \u51fd\u6570\uff0c\u6253\u5370\u6392\u5e8f\u524d\u7684\u6570\u7ec4\n\n    // \u8c03\u7528\u5192\u6ce1\u6392\u5e8f\u51fd\u6570\u5bf9\u6570\u7ec4\u8fdb\u884c\u6392\u5e8f\n    bubbleSort(arr, n);\n\n    // \u8f93\u51fa\u6392\u5e8f\u540e\u7684\u6570\u7ec4\n    cout << "\u6392\u5e8f\u540e\u7684\u6570\u7ec4: \\n";\n    printArray(arr, n); // \u518d\u6b21\u8c03\u7528 printArray \u51fd\u6570\uff0c\u6253\u5370\u6392\u5e8f\u540e\u7684\u6570\u7ec4\n    \n\n    return 0; // \u8fd4\u56de 0\uff0c\u8868\u793a\u7a0b\u5e8f\u6b63\u5e38\u7ed3\u675f\n}\n\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"\u5192\u6ce1\u6392\u5e8f",src:e(9895).Z+"",width:"1858",height:"2832"})}),"\n",(0,t.jsx)(r.h3,{id:"\u9009\u62e9\u6392\u5e8f",children:"\u9009\u62e9\u6392\u5e8f"}),"\n",(0,t.jsx)(r.p,{children:"\u9009\u62e9\u6392\u5e8f\u901a\u8fc7\u4e0d\u65ad\u9009\u62e9\u672a\u6392\u5e8f\u90e8\u5206\u7684\u6700\u5c0f\u5143\u7d20\u5e76\u5c06\u5176\u653e\u7f6e\u5230\u524d\u9762\uff0c\u6216\u8005\u9009\u62e9\u6700\u5927\u5143\u7d20\u653e\u5728\u6700\u540e\u9762\uff0c\u6700\u7ec8\u5b8c\u6210\u6574\u4e2a\u6570\u7ec4\u7684\u6392\u5e8f"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c++",children:'#include <iostream>  // \u5f15\u5165\u6807\u51c6\u8f93\u5165\u8f93\u51fa\u5e93\uff0c\u7528\u4e8e\u8f93\u5165\u8f93\u51fa\u64cd\u4f5c\nusing namespace std;  // \u4f7f\u7528\u6807\u51c6\u547d\u540d\u7a7a\u95f4\uff0c\u907f\u514d\u4f7f\u7528 std:: \u524d\u7f00\n\n// \u9009\u62e9\u6392\u5e8f\u51fd\u6570\nvoid selectionSort(int arr[], int n) {\n    // \u5916\u5c42\u5faa\u73af\u63a7\u5236\u8f6e\u6570\uff0c\u6bcf\u4e00\u8f6e\u5c06\u672a\u6392\u5e8f\u90e8\u5206\u7684\u6700\u5c0f\u503c\u653e\u5230\u524d\u9762\n    for (int i = 0; i < n - 1; i++) {\n        int minIndex = i;  // \u5047\u8bbe\u5f53\u524d\u672a\u6392\u5e8f\u90e8\u5206\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f\u6700\u5c0f\u7684\n\n        // \u5185\u5c42\u5faa\u73af\u627e\u5230\u5269\u4f59\u672a\u6392\u5e8f\u90e8\u5206\u4e2d\u7684\u6700\u5c0f\u503c\n        for (int j = i + 1; j < n; j++) {\n            if (arr[j] < arr[minIndex]) {  // \u5982\u679c\u627e\u5230\u66f4\u5c0f\u7684\u503c\uff0c\u66f4\u65b0\u6700\u5c0f\u503c\u7684\u7d22\u5f15\n                minIndex = j;\n            }\n        }\n\n        // \u4ea4\u6362\u6700\u5c0f\u503c\u548c\u5f53\u524d\u672a\u6392\u5e8f\u90e8\u5206\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\n        if (minIndex != i) {  // \u53ea\u6709\u5f53\u6700\u5c0f\u503c\u7684\u7d22\u5f15\u4e0e\u5f53\u524d\u7d22\u5f15\u4e0d\u540c\u65f6\u624d\u8fdb\u884c\u4ea4\u6362\n            int temp = arr[i];  // \u4e34\u65f6\u4fdd\u5b58 arr[i] \u7684\u503c\n            arr[i] = arr[minIndex];  // \u5c06\u6700\u5c0f\u503c\u653e\u5230\u524d\u9762\n            arr[minIndex] = temp;  // \u5c06 arr[i] \u539f\u6765\u7684\u503c\u653e\u5230\u6700\u5c0f\u503c\u7684\u4f4d\u7f6e\n        }\n    }\n}\n\n// \u6253\u5370\u6570\u7ec4\u7684\u51fd\u6570\nvoid printArray(int arr[], int size) {\n    // \u904d\u5386\u6570\u7ec4\u5e76\u8f93\u51fa\u6bcf\u4e2a\u5143\u7d20\n    for (int i = 0; i < size; i++) {\n        cout << arr[i] << " ";  // \u8f93\u51fa\u6bcf\u4e2a\u5143\u7d20\u5e76\u4ee5\u7a7a\u683c\u5206\u9694\n    }\n    cout << endl;  // \u8f93\u51fa\u5b8c\u6bd5\u540e\u6362\u884c\n}\n\nint main() {\n    // \u521d\u59cb\u5316\u4e00\u4e2a\u6570\u7ec4\n    int arr[] = {64, 25, 12, 22, 11};\n    int n = sizeof(arr) / sizeof(arr[0]);  // \u8ba1\u7b97\u6570\u7ec4\u7684\u5143\u7d20\u4e2a\u6570\n\n    cout << "\u6392\u5e8f\u524d\u7684\u6570\u7ec4: \\n";\n    printArray(arr, n);  // \u6253\u5370\u6392\u5e8f\u524d\u7684\u6570\u7ec4\n\n    selectionSort(arr, n);  // \u8c03\u7528\u9009\u62e9\u6392\u5e8f\u51fd\u6570\u8fdb\u884c\u6392\u5e8f\n\n    cout << "\u6392\u5e8f\u540e\u7684\u6570\u7ec4: \\n";\n    printArray(arr, n);  // \u6253\u5370\u6392\u5e8f\u540e\u7684\u6570\u7ec4\n\n    return 0;  // \u8fd4\u56de 0\uff0c\u8868\u793a\u7a0b\u5e8f\u6267\u884c\u6210\u529f\n}\n\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"\u9009\u62e9\u6392\u5e8f",src:e(1785).Z+"",width:"1518",height:"2200"})})]})}function u(n={}){const{wrapper:r}={...(0,i.a)(),...n.components};return r?(0,t.jsx)(r,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},9895:(n,r,e)=>{e.d(r,{Z:()=>t});const t=e.p+"assets/images/maopao-553d200a38faf7b21275b12956029c37.png"},1785:(n,r,e)=>{e.d(r,{Z:()=>t});const t=e.p+"assets/images/xuanze-0d52e85803e86f112bf07cfaed8b741f.png"},1151:(n,r,e)=>{e.d(r,{Z:()=>o,a:()=>s});var t=e(7294);const i={},a=t.createContext(i);function s(n){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function o(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),t.createElement(a.Provider,{value:r},n.children)}}}]);