"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2042],{3622:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=t(5893),l=t(1151);const r={title:"\u89e3\u6790\u6807\u51c6\u6a21\u677f",tags:["Flutter"]},s="1. Flutter \u9879\u76ee\u7ed3\u6784",d={id:"notes/Flutter/2\u89e3\u6790\u6807\u51c6\u6a21\u677f",title:"\u89e3\u6790\u6807\u51c6\u6a21\u677f",description:"\u5f53\u4f60\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Flutter \u9879\u76ee\u65f6\uff0c\u4f60\u4f1a\u770b\u5230\u4ee5\u4e0b\u7684\u76ee\u5f55\u7ed3\u6784\uff1a",source:"@site/docs/notes/Flutter/2\u89e3\u6790\u6807\u51c6\u6a21\u677f.md",sourceDirName:"notes/Flutter",slug:"/notes/Flutter/2\u89e3\u6790\u6807\u51c6\u6a21\u677f",permalink:"/docs/notes/Flutter/2\u89e3\u6790\u6807\u51c6\u6a21\u677f",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notes/Flutter/2\u89e3\u6790\u6807\u51c6\u6a21\u677f.md",tags:[{label:"Flutter",permalink:"/docs/tags/flutter"}],version:"current",frontMatter:{title:"\u89e3\u6790\u6807\u51c6\u6a21\u677f",tags:["Flutter"]},sidebar:"tutorialSidebar",previous:{title:"\u4ece0\u5f00\u59cb\u642d\u5efaFlutter\u5de5\u7a0b\u73af\u5883",permalink:"/docs/notes/Flutter/\u5b89\u88c5"},next:{title:"Rust\uff1f",permalink:"/docs/notes/Rust/"}},a={},o=[{value:"\u4ee3\u7801\u89e3\u6790",id:"\u4ee3\u7801\u89e3\u6790",level:2},{value:"1.\u5e94\u7528\u5165\u53e3 (main \u51fd\u6570)",id:"1\u5e94\u7528\u5165\u53e3-main-\u51fd\u6570",level:3},{value:"2.\u5e94\u7528\u6839\u7ec4\u4ef6 (MyApp \u7c7b)",id:"2\u5e94\u7528\u6839\u7ec4\u4ef6-myapp-\u7c7b",level:3},{value:"3.\u4e3b\u9875\u7ec4\u4ef6 (MyHomePage \u7c7b)",id:"3\u4e3b\u9875\u7ec4\u4ef6-myhomepage-\u7c7b",level:3},{value:"4.\u72b6\u6001\u7c7b (_MyHomePageState \u7c7b)",id:"4\u72b6\u6001\u7c7b-_myhomepagestate-\u7c7b",level:3},{value:"\u6d41\u7a0b\u56fe",id:"\u6d41\u7a0b\u56fe",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"1-flutter-\u9879\u76ee\u7ed3\u6784",children:"1. Flutter \u9879\u76ee\u7ed3\u6784"}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u4f60\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Flutter \u9879\u76ee\u65f6\uff0c\u4f60\u4f1a\u770b\u5230\u4ee5\u4e0b\u7684\u76ee\u5f55\u7ed3\u6784\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"my_flutter_app/\n\u251c\u2500\u2500 android/\n\u251c\u2500\u2500 build/\n\u251c\u2500\u2500 ios/\n\u251c\u2500\u2500 lib/\n\u2502   \u2514\u2500\u2500 main.dart\n\u251c\u2500\u2500 test/\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .metadata\n\u251c\u2500\u2500 pubspec.yaml\n\u2514\u2500\u2500 README.md\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e3b\u8981\u76ee\u5f55\u548c\u6587\u4ef6\u8bf4\u660e\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"android/ \u548c ios/: \u8fd9\u4e24\u4e2a\u76ee\u5f55\u5206\u522b\u5305\u542b\u4e86 Android \u548c iOS \u5e73\u53f0\u7684\u539f\u751f\u9879\u76ee\u4ee3\u7801\u3002Flutter \u901a\u8fc7\u8fd9\u4e9b\u539f\u751f\u9879\u76ee\u6765\u4e0e Android \u548c iOS \u8fdb\u884c\u4ea4\u4e92\u3002"}),"\n",(0,i.jsx)(n.li,{}),"\n",(0,i.jsx)(n.li,{children:"android/ \u76ee\u5f55\u5305\u542b Gradle \u6784\u5efa\u6587\u4ef6\u548c Android \u539f\u751f\u4ee3\u7801\u3002"}),"\n",(0,i.jsx)(n.li,{}),"\n",(0,i.jsx)(n.li,{children:"ios/ \u76ee\u5f55\u5305\u542b Xcode \u9879\u76ee\u6587\u4ef6\u548c iOS \u539f\u751f\u4ee3\u7801\u3002"}),"\n",(0,i.jsx)(n.li,{}),"\n",(0,i.jsx)(n.li,{children:"lib/: \u8fd9\u662f\u4f60\u7684 Flutter \u5e94\u7528\u7684\u4e3b\u8981\u4ee3\u7801\u5e93\u3002\u4f60\u6240\u6709\u7684 Dart \u4ee3\u7801\u90fd\u5728\u8fd9\u91cc\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f1a\u6709\u4e00\u4e2a main.dart \u6587\u4ef6\uff0c\u4f5c\u4e3a\u5e94\u7528\u7684\u5165\u53e3\u6587\u4ef6\u3002"}),"\n",(0,i.jsx)(n.li,{}),"\n",(0,i.jsx)(n.li,{children:"build/: \u8fd9\u4e2a\u76ee\u5f55\u662f\u6784\u5efa\u8f93\u51fa\u7684\u76ee\u5f55\u3002\u4f60\u4e0d\u9700\u8981\u624b\u52a8\u4fee\u6539\u8fd9\u91cc\u7684\u6587\u4ef6\uff0cFlutter \u4f1a\u81ea\u52a8\u751f\u6210\u6784\u5efa\u8f93\u51fa\u3002"}),"\n",(0,i.jsx)(n.li,{}),"\n",(0,i.jsx)(n.li,{children:"test/: \u8fd9\u4e2a\u76ee\u5f55\u5305\u542b\u5e94\u7528\u7684\u6d4b\u8bd5\u4ee3\u7801\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u3001Widget \u6d4b\u8bd5\u548c\u96c6\u6210\u6d4b\u8bd5\u3002"}),"\n",(0,i.jsx)(n.li,{}),"\n",(0,i.jsx)(n.li,{children:"pubspec.yaml: \u8fd9\u662f Flutter \u9879\u76ee\u7684\u914d\u7f6e\u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u7ba1\u7406\u9879\u76ee\u7684\u4f9d\u8d56\u3001\u8d44\u6e90\u6587\u4ef6\uff08\u5982\u56fe\u7247\u3001\u5b57\u4f53\uff09\u548c\u5176\u4ed6\u914d\u7f6e\u3002"}),"\n",(0,i.jsx)(n.li,{}),"\n",(0,i.jsx)(n.li,{children:".gitignore: \u8fd9\u4e2a\u6587\u4ef6\u5217\u51fa\u4e86\u5e94\u8be5\u88ab Git \u5ffd\u7565\u7684\u6587\u4ef6\u548c\u76ee\u5f55\u3002"}),"\n",(0,i.jsx)(n.li,{}),"\n",(0,i.jsx)(n.li,{children:"README.md: \u8fd9\u4e2a\u6587\u4ef6\u901a\u5e38\u5305\u542b\u9879\u76ee\u7684\u7b80\u4ecb\u548c\u4f7f\u7528\u8bf4\u660e\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"2-flutter-\u4ee3\u7801\u7ed3\u6784\u4e0e\u5b9e\u73b0",children:"2. Flutter \u4ee3\u7801\u7ed3\u6784\u4e0e\u5b9e\u73b0"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"import 'package:flutter/material.dart';\n\nvoid main() => runApp(MyApp());\n\nclass MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Flutter Demo',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: MyHomePage(title: 'Flutter Demo Home Page'),\n    );\n  }\n}\n\nclass MyHomePage extends StatefulWidget {\n  MyHomePage({Key key, this.title}) : super(key: key);\n\n  final String title;\n\n  @override\n  _MyHomePageState createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  int _counter = 0;\n\n  void _incrementCounter() {\n    setState(() {\n      _counter++;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(widget.title),\n      ),\n      body: Center(\n        child: Column(\n          mainAxisAlignment: MainAxisAlignment.center,\n          children: <Widget>[\n            Text(\n              'You have pushed the button this many times:',\n            ),\n            Text(\n              '$_counter',\n              style: Theme.of(context).textTheme.headline4,\n            ),\n          ],\n        ),\n      ),\n      floatingActionButton: FloatingActionButton(\n        onPressed: _incrementCounter,\n        tooltip: 'Increment',\n        child: Icon(Icons.add),\n      ),\n    );\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4ee3\u7801\u89e3\u6790",children:"\u4ee3\u7801\u89e3\u6790"}),"\n",(0,i.jsxs)(n.p,{children:["\u672c\u6848\u4f8b\u4e2d\u8981\u6ce8\u610f ",(0,i.jsx)(n.strong,{children:"Flutter \u7684\u6838\u5fc3\u8bbe\u8ba1\u601d\u60f3\u4fbf\u662f\u4e00\u5207\u7686 Widget\u3002"})]}),"\n",(0,i.jsx)(n.h3,{id:"1\u5e94\u7528\u5165\u53e3-main-\u51fd\u6570",children:"1.\u5e94\u7528\u5165\u53e3 (main \u51fd\u6570)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"void main() => runApp(MyApp());\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"main"})," \u51fd\u6570\u662f\u5e94\u7528\u7684\u5165\u53e3\u70b9\uff0c\u8c03\u7528 ",(0,i.jsx)(n.code,{children:"runApp"})," \u51fd\u6570\u6765\u542f\u52a8 ",(0,i.jsx)(n.code,{children:"Flutter"})," \u5e94\u7528\uff0c\u5e76\u4f20\u5165 ",(0,i.jsx)(n.code,{children:"MyApp"})," \u4f5c\u4e3a\u53c2\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2\u5e94\u7528\u6839\u7ec4\u4ef6-myapp-\u7c7b",children:"2.\u5e94\u7528\u6839\u7ec4\u4ef6 (MyApp \u7c7b)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"class MyApp extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Flutter Demo',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: MyHomePage(title: 'Flutter Demo Home Page'),\n    );\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MyApp"})," \u7c7b\u7ee7\u627f\u81ea ",(0,i.jsx)(n.code,{children:"StatelessWidget"}),"\uff0c\u8868\u793a\u8fd9\u662f\u4e00\u4e2a\u65e0\u72b6\u6001\u7684\u7ec4\u4ef6\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MaterialApp"})," \u662f\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"Flutter"})," \u63d0\u4f9b\u7684\u5c01\u88c5\u7ec4\u4ef6\uff0c\u5305\u542b\u4e86\u5e94\u7528\u7684\u8bb8\u591a\u57fa\u672c\u914d\u7f6e\uff0c\u5982\u4e3b\u9898\u3001\u6807\u9898\u548c\u4e3b\u9875\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3\u4e3b\u9875\u7ec4\u4ef6-myhomepage-\u7c7b",children:"3.\u4e3b\u9875\u7ec4\u4ef6 (MyHomePage \u7c7b)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"class MyHomePage extends StatefulWidget {\n  MyHomePage({Key key, this.title}) : super(key: key);\n\n  final String title;\n\n  @override\n  _MyHomePageState createState() => _MyHomePageState();\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MyHomePage"})," \u7c7b\u7ee7\u627f\u81ea ",(0,i.jsx)(n.code,{children:"StatefulWidget"}),"\uff0c\u8868\u793a\u8fd9\u662f\u4e00\u4e2a\u6709\u72b6\u6001\u7684\u7ec4\u4ef6\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"StatefulWidget"})," \u9700\u8981\u5b9e\u73b0 ",(0,i.jsx)(n.code,{children:"createState"})," \u65b9\u6cd5\uff0c\u8fd4\u56de\u4e00\u4e2a State \u5bf9\u8c61\uff0c\u8d1f\u8d23\u7ef4\u62a4\u7ec4\u4ef6\u7684\u72b6\u6001\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"4\u72b6\u6001\u7c7b-_myhomepagestate-\u7c7b",children:"4.\u72b6\u6001\u7c7b (_MyHomePageState \u7c7b)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dart",children:"class _MyHomePageState extends State<MyHomePage> {\n  int _counter = 0;\n\n  void _incrementCounter() {\n    setState(() {\n      _counter++;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n      appBar: AppBar(\n        title: Text(widget.title),\n      ),\n      body: Center(\n        child: Column(\n          mainAxisAlignment: MainAxisAlignment.center,\n          children: <Widget>[\n            Text(\n              'You have pushed the button this many times:',\n            ),\n            Text(\n              '$_counter',\n              style: Theme.of(context).textTheme.headline4,\n            ),\n          ],\n        ),\n      ),\n      floatingActionButton: FloatingActionButton(\n        onPressed: _incrementCounter,\n        tooltip: 'Increment',\n        child: Icon(Icons.add),\n      ),\n    );\n  }\n}\n\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"_MyHomePageState"})," \u7c7b\u8d1f\u8d23\u7ef4\u62a4 ",(0,i.jsx)(n.code,{children:"MyHomePage"})," \u7684\u72b6\u6001\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"int _counter = 0;"})," \u5b9a\u4e49\u4e86\u4e00\u4e2a\u72b6\u6001\u53d8\u91cf ",(0,i.jsx)(n.code,{children:"_counter"}),"\uff0c\u7528\u4e8e\u8bb0\u5f55\u6309\u94ae\u70b9\u51fb\u6b21\u6570\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"_incrementCounter"})," \u65b9\u6cd5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"setState"})," \u65b9\u6cd5\u66f4\u65b0\u72b6\u6001\uff0c\u5f53\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\uff0c",(0,i.jsx)(n.code,{children:"Flutter"})," \u4f1a\u91cd\u65b0\u6784\u5efaUI\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"build"})," \u65b9\u6cd5\u6784\u5efaUI\uff0c\u4f7f\u7528\u4e86 ",(0,i.jsx)(n.code,{children:"Scaffold"})," \u7ec4\u4ef6\u6765\u5b9a\u4e49\u5e94\u7528\u7684\u57fa\u672c\u7ed3\u6784\uff0c\u5305\u62ec ",(0,i.jsx)(n.code,{children:"AppBar"}),"\u3001",(0,i.jsx)(n.code,{children:"Body"})," \u548c ",(0,i.jsx)(n.code,{children:"FloatingActionButton"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u6d41\u7a0b\u56fe",children:"\u6d41\u7a0b\u56fe"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img.png",src:t(2146).Z+"",width:"1059",height:"599"})})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2146:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/img-0cff6ecee837846115d3d440ca2e5a75.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var i=t(7294);const l={},r=i.createContext(l);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);