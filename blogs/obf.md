---
title: 跑批调度系统
date: 2021-06-26 19:48:35
cover: https://tva1.sinaimg.cn/large/008i3skNly1grw6eufjpbj31hb0qsq8h.jpg
categories:
  - 跑批调度系统
tags:
 - 跑批调度系统
publish: true
---


<!-- more -->

## 功能
obf作为跑批调度的最后一步，负责对内部数仓（`v3`,`v4`,`dt`,`wk`）和外部数仓(`TLZFBL`，`TLZFBLADV`，`ZJZFBL`)进行调用。   

## 配置 
内部数据源通过接口`http://variate116.recall.ypcredit.com/uploadfile`上传文件，通过接口`http://variate116.recall.ypcredit.com/recall`
发起数据源的调用。
![](https://tva1.sinaimg.cn/large/008i3skNly1grwr0q0skyj31dm0u0too.jpg)

`通联`的回溯文件需要上传到`通联`的ftp服务器；
![](https://tva1.sinaimg.cn/large/008i3skNly1grwr1ihfpkj31do0u0gyb.jpg)

通联ftp登录命令：
```shell script
sftp -oPort=5022 tianchuang@180.168.54.251 (Lqo6^d1Pn)
```

`ZJ`的回溯文件则是存在`天创`的ftp服务器
![](https://tva1.sinaimg.cn/large/008i3skNly1grwr1xu0z1j61dj0u014x02.jpg)

## 内部数据源<Badge text="重点"/>
为了避免数仓资源浪费，而且数仓资源消耗和跑批任务成正比，所以在调用数仓时进行`同一数据源`文件的合并后交给数仓处理，并在`该类数据源`回调
时进行下一次调用的触发，保证数仓侧同一数据源同时只会有一个任务在执行。

### 调用
+ dpm调用入口
![](https://tva1.sinaimg.cn/large/008i3skNly1grwracq4juj31dj0u0tp3.jpg)
+ 因内部数据源处理逻辑基本一致，将处理流程抽象出一个`模板`，通过`数据源类型标识`不同来区分不同的数据源，在`系统启动时`进行加载
![](https://tva1.sinaimg.cn/large/008i3skNly1grwrgef5mbj31dj0u04g5.jpg)
![](https://tva1.sinaimg.cn/large/008i3skNly1grwriudhd2j31dj0u0h3f.jpg)
+ 内部数据源处理逻辑
![](https://tva1.sinaimg.cn/large/008i3skNly1grwrkvmx56j31dj0u0kae.jpg)
### 回调
+ 数仓回调：`数仓`回调后由`obf`对`dpm`进行回调通知，更新obf回溯任务调用状态后`触发下一次调用`
![](https://tva1.sinaimg.cn/large/008i3skNly1grwrppmaf9j31dj0u0tq9.jpg)
![](https://tva1.sinaimg.cn/large/008i3skNly1grwrslx31aj31dj0u01be.jpg)
+ dpm手动回调：因"不可抗力"可能导致`数仓`无法正常回调`obf`,但是跑批任务已经完成，此时由`运营人员`通过`dpm`进行`手动回调`信用百科，
但是此时`obf`中任务的状态需要同步更新，这样下一次任务才会正常的执行
![](https://tva1.sinaimg.cn/large/008i3skNly1grwrw9o23qj31dj0u07kv.jpg)

## 外部数据源<Badge text="重点"/>
不同于内部数据源的调用过程，外部数据源的上传通过约定时间由`定时任务`将当天的同一数据源合并成一个文件上传的指定的ftp路径下，
在一段时间后进行`主动处理`
### 调用
+ 进件样本的接收
![](https://tva1.sinaimg.cn/large/008i3skNly1grws2dmzw9j31dj0u0ndc.jpg)

+ 定时任务触发
![](https://tva1.sinaimg.cn/large/008i3skNly1grws3bplxrj31dj0u0k7b.jpg)

+ 因为不同数据源需要的字段可能不同，在模板类中添加了几个抽象方法，需要在子类中具体实现。
![](https://tva1.sinaimg.cn/large/008i3skNly1grws814zx6j31dj0u0wub.jpg)

### 回调
`外部数据源`处理完成后通过`http`进行回调，`回调服务器ip`需`预置`到`ip白名单`中
![](https://tva1.sinaimg.cn/large/008i3skNly1grws9r8qv6j31dj0u0wva.jpg)

### 加急
`外部数据源`处理时效一般为`T+1`，有紧急任务时，通过`dpm`触发`加急`操作，将`已上传`的回溯文件`提前合并`发送到`加急文件夹`下，并在相应的`运维群`中通知
`对应负责人`手动处理。
![](https://tva1.sinaimg.cn/large/008i3skNly1grwsfbpc4fj31dj0u0qku.jpg)

+ TL加急路径
![](https://tva1.sinaimg.cn/large/008i3skNly1grwsgzvoefj31dj0u04gl.jpg)

+ 通联通知人
![](https://tva1.sinaimg.cn/large/008i3skNly1grwshzwfdzj314p0u0whd.jpg)

+ ZJ加急路径
![](https://tva1.sinaimg.cn/large/008i3skNly1grwsg6m2s8j31dj0u0h04.jpg)

+ ZJ通知人
![](https://tva1.sinaimg.cn/large/008i3skNly1grwsj7r5qyj313u0u0jua.jpg)

## 相关资料

+ [内部源跑批任务回调接口](http://wiki.tcredit.com/pages/viewpage.action?pageId=35390658)
+ [外部源跑批任务回调接口](http://wiki.tcredit.com/pages/viewpage.action?pageId=35390404)

