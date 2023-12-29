---
title: 搭建私有Docker Registry
tags: [linux,Registry,docker]
---
## 创建验证密码
**我们需要搭建一个私有的容器仓库，不能随意访问，因此要先创建验证密码才可以：**

```bash
yum install httpd-tools
```

**然后创建密码：**

```bash
htpasswd -Bbn admin 123456 > /root/registry/auth/passwd
```
## 启动
**这里直接使用命令一步到位：**

```bash
docker run -d -p 5000:5000 -v /root/registry/auth:/etc/registry/auth -v /root/registry/data:/var/lib/registry -e "REGISTRY_AUTH=htpasswd" -e "REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm" -e "REGISTRY_AUTH_HTPASSWD_PATH=/etc/registry/auth/passwd" registry
```

**这样，之后我们就可以往自己的私有Docker仓库上传镜像了。**

**Mac/Windows处理HTTP问题：**

```json
"insecure-registries":["仓库ip:port"]
```

**Linux：**

```json
 --insecure-registry ip:port
```
