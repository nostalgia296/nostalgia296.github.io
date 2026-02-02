---
title: 在termux中使用biome
published: 2026-02-02
description: ''
image: ''
tags: [rust, 编译]
category: '编译'
draft: false 
lang: ''
---

# 编译

`biome`官方的预构建二进制没有android用的，所以通过包管理器安装biome没有用，需要自己编译，虽然可以直接通过termux编译但是安卓设备性能有限而biome编译性能要求较高所以采用交叉编译。

按照常规rust项目交叉编译配置即可，需要注意的是需要在交叉编译前rm掉rust-toolchain.yml文件

> [!TIP] TIP
> 注: 如果交叉编译链接时也OOM了的话，可以把`.cargo/config.toml`中的`lto = true` 改成`false`,因为LTO会消耗大量内存。

# 使用

`biome`提供了一个环境变量来使用外部的二进制文件，所以只需要导出`BIOME_BINARY`即可，比如biome文件放在$HOME下:

``` fish
set -x BIOME_BINARY $HOME/biome
```