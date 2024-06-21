---
title: 快速套壳 vue3（已部署） 的Electron 项目
tags: [Electron,vue]
---


## 快速套壳 vue3（已部署） 的Electron 项目

### 安装 Node.js 和 npm

确保你已经安装了 [Node.js 和 npm](https://nodejs.org/)。你可以通过以下命令检查是否已经安装：

```bash
node -v
npm -v
```

### **创建项目文件夹**

创建一个新的文件夹作为你的项目目录，然后进入这个目录：

```bash
mkdir my-electron-app
cd my-electron-app
```

### **初始化项目**

初始化一个新的 Yarn 项目：

```bash
yarn init -y
```

### **安装 Electron**

使用 Yarn 安装 Electron：

```bash
yarn add electron --dev
```

接下来，要动手了喔

### 创建项目文件

项目结构

```plaintext
electron/
  ├── main.js				//主进程的入口文件
  ├── preload.cjs			//渲染进程的预加载脚本文件
  ├── img/					//图片存放
node_modules/				//依赖
.gitignore					//不受git控制文件
package.json				//项目的配置文件
README.md					//说明
yarn.lock					//锁定文件
```

根据结构创建，当然你可以直接在根目录创建`main.js`与`preload.cjs`，放在`electron`这个文件夹只是我乐意

### 指定入口文件

在`package.json`添加  `"main": "electron/main.js",` ，`"type": "module",` 这个也顺手带上吧，它的作用是指定整个项目应使用 ECMAScript 模块 (ESM) 格式。（其实就是我们`main.js` 内的写法

```json
{
  "name": "genai-search-electron",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "main": "electron/main.js",
}
```

### 编写main.js	

不细讲，直接看注释改即可，我的算是一个基本的模板了。需要再去看官网添加。

```js
// 从 'electron' 模块中导入所需的类和函数
import { app, BrowserWindow, Tray, Menu } from 'electron';
// 从 'path' 模块中导入 'path'，用于处理文件和目录路径
import path from 'path';
// 从 'url' 模块中导入 'fileURLToPath'，用于将 file URL 转换为路径
import { fileURLToPath } from 'url';


// 定义 __filename 和 __dirname，用于获取当前文件的路径和目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 声明主窗口和托盘图标的变量
let mainWindow;
let tray;

// 创建应用程序的主窗口
function createWindow() {
  // 判断当前环境是否为开发环境
  const isDev = process.env.NODE_ENV === 'development';

  // 创建一个新的 BrowserWindow 实例
  mainWindow = new BrowserWindow({
    width: 1280, // 窗口宽度
    height: 800, // 窗口高度
    center: true, // 窗口居中
    show: false, // 创建窗口时不立即显示
    autoHideMenuBar: true, // 自动隐藏菜单栏
    title: 'GenAI-Search', // 窗口标题
    vibrancy: 'ultra-dark', // 设置窗口的背景模糊效果
    transparent: true, // 窗口透明
    icon: path.join(__dirname, 'img', 'meowoof-logo.jpg'), // 窗口图标
    titleBarStyle: 'hidden', // 隐藏标题栏
    titleBarOverlay: { // 标题栏覆盖设置
      color: '#311D28', // 标题栏背景色
      symbolColor: '#ffffff', // 标题栏符号颜色
      height: 30 // 标题栏高度
    },
    backgroundColor: '#311D28', // 窗口背景颜色
    webPreferences: {
      backgroundThrottling: false, // 禁用后台节流
      preload: path.join(__dirname, 'preload.cjs'), // 预加载脚本
      nodeIntegration: isDev, // 仅在开发环境中启用 Node.js 集成
      contextIsolation: !isDev // 仅在生产环境中启用上下文隔离
    }
  });

  // 延迟显示窗口以确保内容完全加载
  setTimeout(() => {
    console.log("Showing main window...");
    mainWindow.show();
  }, 2000); // 你可以根据需要调整这个延迟时间

  // 根据环境加载不同的 URL
  if (isDev) {
    mainWindow.loadURL('http://thinkcat:8080/'); // 开发环境加载本地服务器
    mainWindow.webContents.openDevTools(); // 打开开发者工具
  } else {
    mainWindow.loadURL('http://thinkcat:8080/'); // 生产环境加载本地文件
  }
}

// 创建托盘图标
function createTray() {
  // 根据操作系统选择不同的托盘图标
  const menubarPic = process.platform === 'darwin'
    ? path.join(__dirname, '../img', 'meowoof-logo2.png') // macOS 系统使用的图标路径
    : path.join(__dirname, '../img','meowoof-logo.png'); // 非 macOS 系统使用的图标路径

  // 检查路径是否正确
  console.log('Tray icon path:', menubarPic);

  // 创建一个新的 Tray 实例
  tray = new Tray(menubarPic); // 指定图片的路径
  
  // 创建托盘图标的上下文菜单
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show App', // 菜单项标签
      click: () => { // 菜单项点击事件
        mainWindow.show(); // 显示主窗口
      },
    },
    {
      label: 'Quit', // 菜单项标签
      click: () => { // 菜单项点击事件
        app.quit(); // 退出应用程序
      },
    },
  ]);

  // 设置托盘图标的提示
  tray.setToolTip('GenAI-Search');

  // 设置托盘图标的上下文菜单
  tray.setContextMenu(contextMenu);
}

// 当 Electron 初始化完成时，调用 createWindow 和 createTray 函数
app.whenReady().then(() => {
  createWindow(); // 创建主窗口
  createTray(); // 创建托盘图标

  // 当应用被激活时（例如，点击应用图标或从其他窗口切换回来）
  app.on('activate', () => {
    // 如果没有打开的窗口，则创建一个新的窗口
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 当所有窗口都关闭时，退出应用程序（除非是在 macOS 上）
app.on('window-all-closed', () => {
  // 在 macOS 上，通常应用会保持活跃，直到用户明确退出
  if (process.platform !== 'darwin') {
    app.quit(); // 退出应用程序
  }
});

```

### preload.cjs

```js
// 所有Node.js API都可以在预加载过程中使用。
// 它拥有与Chrome扩展一样的沙盒。
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })
```

### 需要注意的点

我们回到`main.js`

```js

  if (isDev) {
    mainWindow.loadURL('http://thinkcat:8080/');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL('http://thinkcat:8080/');
  }
```

上方代码是在监听你的vue应用，因为我的是已经部署好了，所以直接这样偷懒就好，如果是文件的话请使用`loadFile`方法（比如将vue项目打包，具体用法请自行摸索，我只想躺着

![img](./img/1.jpg)