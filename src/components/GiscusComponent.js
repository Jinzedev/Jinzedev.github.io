import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common"; // 导入当前主题 API

export default function GiscusComponent() {
  const { colorMode } = useColorMode(); // 获取当前主题
  var themeColor = "";
  if (colorMode == "dark")
    themeColor = "noborder_dark";
  else
    themeColor = "noborder_light";
  return (
    // 前面放一个带 margin 的 div，美观
    <div style={{ marginTop: "30px" }}>
      <Giscus
        repo="Jinzedev/Jinzedev.github.io"
        repoId="R_kgDOK-3_WA"
        category="General"
        categoryId="DIC_kwDOK-3_WM4CdeWP"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={themeColor}// 根据当前主题设置
        lang="zh-CN"
        loading="lazy"
        crossorigin="anonymous"
        async
      />
    </div>
  );
}