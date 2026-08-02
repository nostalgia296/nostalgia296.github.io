---
title: 在原生termux使用新版claude
published: 2026-08-02
description: ''
image: ''
tags: ["vibe-coding"]
category: 'ai'
draft: false 
lang: ''
---

### 参考
文中直接使用的垫片库来自:

::github{repo="naiyQAQ/claude-code-termux"}

### 介绍

`claude code`在新版将运行时从`node`切换到了`bun`,并打包成了可执行文件，而官方并没有提供`android bionic`平台的打包，因此无法正常使用，好在`bun`的二进制打包本质上是把js文件等直接嵌入`bun`运行时，因此更好把文件提取出来。


### 步骤

首先，需要安装安卓平台的`bun`,现在官方提供安卓构建，直接在`github release`下载即可,接着从claude官网下载新版claude的二进制文件。

这里使用的的是unbun项目提取文件，可通过npm下载unbun。

``` bash
npm i -g unbunjs
```
接下来解包`claude`

比如说我要把文件解包到`bundle`目录:

``` bash
unbun extract ./claude ./bundle
```
接下来就可以通过`bun`启动`cli`

``` bash
bun ./bundle/src/entrypoints/cli.js
```
### 关于N-API库的使用

由于官方内置的2个`N-API`绑定库是基于`glibc`构建的，所以在`bionic`环境无法正常使用。因此要使用`glibc->bionic`的垫片库，然后通过`LD_LIBRARY`加载垫片库目录。