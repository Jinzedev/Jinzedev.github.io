---
title: Portainer安装汉化一步到位
tags: [linux,Portainer,docker]
---


## 使用root权限
**为了方便直接root吧：**

```bash
sudo -s
cd
```
## 下载
**首先下载安装汉化包：**

```bash
wget http://code.imnks.com/zip/portainer-ce-public-cn-20221227.zip
unzip portainer-ce-public-cn-20221227.zip
```
## 创建数据目录
**首先创建一个目录作为Portainer的数据目录，方便后续迁移：**

```bash
mkdir data
```
## 挂载
**然后在启动时将Portainer的public目录挂载到宿主主机刚刚解压出来的目录下，直接输入下面的命令一步到位：**

```docker
docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v /root/data:/data -v /root/public:/public portainer/portainer
```

**然后就可以开始享受生活了。**
