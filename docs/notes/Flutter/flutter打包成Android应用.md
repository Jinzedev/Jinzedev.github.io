---
title: flutter打包成Android应用

tags: [flutter,Android]
---


# flutter打包成Android应用

## 生成签名

生成一个用于签名 Flutter 应用程序的 `keystore` 文件

```bash
keytool -genkey -v -keystore <请自己取名字>.keystore -alias <请自己取名字> -keyalg RSA -keysize 2048 -validity 10000
```

注意：

- 两个名字要不同
- 去掉尖括号

后文使用的是下面的例子

```bash
keytool -genkey -v -keystore genai_android.keystore -alias genai -keyalg RSA -keysize 2048 -validity 10000
```

## 删除签名

```bash
keytool -delete -alias genai -keystore genai_android.keystore
```

按照提示填写相关信息，并记住密钥库路径和别名。（在下方配置签名时填写

## 配置签名

打开`android/app`目录下的`build.gradle`文件，添加签名配置：

```java
android {
    ...
    signingConfigs {
        release {
            keyAlias "genai" // 设置你的 alias 名称
            keyPassword "genai_android" // 设置你的密钥库密码
            storeFile file('../../keystore/genai_android.keystore') //生成签名位置
            storePassword "genai_android" // 设置你的密钥库密码
        }
    }
    buildTypes {
        release {
           // 使用上述配置的签名配置来签署APK
            signingConfig = signingConfigs.release
             //由于应用是内部使用所以我就不混淆了
            // 是否启用代码压缩以减少APK大小，设置为false表示不启用
            minifyEnabled false
            // 是否删除未使用的资源以减少APK大小，设置为false表示不启用
            shrinkResources false
            // 指定ProGuard规则文件，用于代码混淆和优化
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
```

## 请求后端

如果牵扯到请求后端接口，那我们需要**配置网络权限**

在`app/src/main/AndroidManifest.xml`中的`manifest`标签内添加网络权限

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"> 
	...
	<uses-permission android:name="android.permission.INTERNET"/>
	...
</manifest>
```

## 打包发布版APK

**生成发布版APK**：

```bash
flutter build apk --release
```

在控制台找到生成对应的包即可

![image-20240705142109895](./img/build.png)