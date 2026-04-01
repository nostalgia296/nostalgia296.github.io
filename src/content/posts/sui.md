---
title: 使用sui搭建vless+reality节点
published: 2026-04-01
description: ''
image: ''
tags: [s-ui]
category: '科学上网'
draft: false 
lang: ''
---

## 购买一台国外的vps

购买vps然后记录ip和root密码等

然后ssh到vps

## 安装sui

通过一键安装脚本

``` shell
bash <(curl -Ls https://raw.githubusercontent.com/alireza0/s-ui/master/install.sh)
```
记录webui的初始登录信息,webui端口和地址

## 配置

进入浏览器 输入webui链接，输入登录账号密码

进入TLS设置界面，添加一个reality

sni和握手服务器填写一个国内可访问的地址，比如bing.com。

然后点击key生成按钮生成公私钥

点击TLS选项开始uTLS，选择一个浏览器指纹

保存

进去入站设置添加一个vless，模版选择刚刚的reality模版即可

## 使用

进入用户管理，添加用户选择节点，然后保存二维码，客户端扫码即可使用(v2rayng/nekobox)