"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[662],{3071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=n(5893),o=n(1151);const i={title:"\u5b89\u88c5\u5f00\u542f\u7ec4\u7b56\u7565",tags:["bash","utils","win"]},a=void 0,r={id:"notes/Win\u811a\u672c/\u5b89\u88c5\u5f00\u542f\u7ec4\u7b56\u7565",title:"\u5b89\u88c5\u5f00\u542f\u7ec4\u7b56\u7565",description:"",source:"@site/docs/notes/Win\u811a\u672c/\u5b89\u88c5\u5f00\u542f\u7ec4\u7b56\u7565.md",sourceDirName:"notes/Win\u811a\u672c",slug:"/notes/Win\u811a\u672c/\u5b89\u88c5\u5f00\u542f\u7ec4\u7b56\u7565",permalink:"/docs/notes/Win\u811a\u672c/\u5b89\u88c5\u5f00\u542f\u7ec4\u7b56\u7565",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notes/Win\u811a\u672c/\u5b89\u88c5\u5f00\u542f\u7ec4\u7b56\u7565.md",tags:[{label:"bash",permalink:"/docs/tags/bash"},{label:"utils",permalink:"/docs/tags/utils"},{label:"win",permalink:"/docs/tags/win"}],version:"current",frontMatter:{title:"\u5b89\u88c5\u5f00\u542f\u7ec4\u7b56\u7565",tags:["bash","utils","win"]},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u5f00\u542f hyper-v",permalink:"/docs/notes/Win\u811a\u672c/\u5b89\u88c5\u5f00\u542fhyper-v"}},c={},d=[];function l(e){const t={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'@echo off\npushd "%~dp0"\ndir /b C:\\Windows\\servicing\\Packages\\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~3*.mum >List.txt\ndir /b C:\\Windows\\servicing\\Packages\\Microsoft-Windows-GroupPolicy-ClientTools-Package~3*.mum >>List.txt\nfor /f %%i in (\'findstr /i . List.txt 2^>nul\') do dism /online /norestart /add-package:"C:\\Windows\\servicing\\Packages\\%%i"\npause\n'})})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var s=n(7294);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);