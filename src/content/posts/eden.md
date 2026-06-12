---
title: 从源码编译Eden
published: 2026-04-01
description: ''
image: ''
tags: [编译]
category: '编译'
draft: false 
lang: ''
---

# 从源码编译Eden

1. 安装java 环境
2. 安装sdkmanager方便安装ndk等

```shell collapse

git clone https://git.eden-emu.dev/eden-emu/eden.git
cd eden
git submodule update --init --recursive
cd src/android
yes | sdkmanager --licenses
sdkmanager "ndk;25.2.9519653" "cmake;3.22.1"
chmod +x ./gradlew
# 标准版
./gradlew copyMainlineReleaseOutputs --console=plain --info -Dorg.gradle.caching=true
```
3. 运行shell脚本