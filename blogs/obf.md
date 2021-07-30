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

## 新增数据源流程<Badge text="NEW"/>
### 内部数据源
内部数据源的执行流程完全一致，只有调用时的`标记（数据源类型）`是有区别的。
开发代码时，只要`新建`枚举值，将子类`继承`封装好的`模板方法`
![](https://tva1.sinaimg.cn/large/008i3skNly1gsyqyvjwbbj31c00u0797.jpg)
![](https://tva1.sinaimg.cn/large/008i3skNly1gsyqydijz9j31c00u0q7l.jpg)
![](https://tva1.sinaimg.cn/large/008i3skNly1gsyqwnzoeij31c00u0gse.jpg)
最后将其加入到`静态工厂`中，在项目启动后进行内部数据源的"监听"。
![](https://tva1.sinaimg.cn/large/008i3skNly1gsyqzmt5f3j61c00u0tfi02.jpg)

页面配置示例及参数如下：
![](https://tva1.sinaimg.cn/large/008i3skNly1gsyr1u7vn6j31im0u0q7v.jpg)
![](https://tva1.sinaimg.cn/large/008i3skNly1gsyr2j19raj61ix0u0q8802.jpg)
![](https://tva1.sinaimg.cn/large/008i3skNly1gsyr30ks1vj325q0ti0xi.jpg)

配置项说明：
| 配置项     | 值   | 说明   |
| -------- | ------ |  ------ |
| 名称    | 数据源名称 | 中文英文均可，只是展示用 |
| 虚拟数据源    | 是否为虚拟数据源 | 默认为否 |
| 调用地址  | http://api.tcredit.com/obf/inner/execute | 内部数据源固定调用地址 | 
| 请求方法 | POST | 默认值 |
| 请求头 | application/x-www-form-urlencoded | 默认值 | 
| 超时时间 | 300000 | 毫秒，尽量长一点 |
| 重试次数 | 3 | 失败后重试次数 | 
| 携带文件 | 是 | 调用接口时，是否携带了文件，内部接口为是 |
| 加急 | 否 | 内部数据源不支持加急 |
| 是否回调 | 是 | 是否进行回调 |
| 文件参数 | file | 固定值 |

参数说明：
| 参数名称     | 参数类型   | 值   | 说明   |
| -------- | ------ |  ------ | ------ |
| appId    | appId | af964efd-0732-447b-b5a0-27f0f0f47788 | 固定值 |
|  taskId   | 函数表达式 | append(req.taskId, _, const.taskType, _, file.name) | 固定值 |
| taskType  | 常量 | **代码中的枚举** | 此处需要和代码的枚举值保持一致 |
| tokenKey | 函数表达式 | genTokenKey(appId=req.appId, taskType=const.taskType, taskId=func.append(req.taskId, _, const.taskType, _, file.name), fileName=file.name) | 固定值 |
| fileName | 文件 | name | 固定值 | 


### 外部数据源
外部数据源的执行流程也是好多流程都是相同的，在需要具体数据源具体实现的地方使用`钩子方法`由子类实现。
开发代码时，`新建`枚举值，将子类`继承`封装好的`模板方法`，并`实现`钩子方法
![](https://tva1.sinaimg.cn/large/008i3skNly1gsyrprwjwkj31c00u0q8g.jpg)
![](https://tva1.sinaimg.cn/large/008i3skNly1gsyroaghrnj31c00u0tes.jpg)
![](https://tva1.sinaimg.cn/large/008i3skNly1gsyrp7rnmxj31c00u0dlt.jpg)

将其加入到`静态工厂`中
![](https://tva1.sinaimg.cn/large/008i3skNly1gsyrqdxsj4j31c00u00yu.jpg)

配置定时任务，传入枚举值进行调用
![](https://tva1.sinaimg.cn/large/008i3skNly1gsyrrpp7hnj31c00u0458.jpg)

页面配置示例及参数如下：
![](https://tva1.sinaimg.cn/large/008i3skNly1gsyrt4gvtpj31im0u0jw3.jpg)
![](https://tva1.sinaimg.cn/large/008i3skNly1gsyrtje8moj31is0u043q.jpg)
![](https://tva1.sinaimg.cn/large/008i3skNly1gsyrtt6ls6j31ig0u077i.jpg)

加急调用：
![](https://tva1.sinaimg.cn/large/008i3skNly1gsyrw9th76j31j30u0goz.jpg)

钩子方法说明：
| 方法名     | 作用   | 
| -------- | ------ |  
| getHeaders    | 上传给数据源样本中使用的表头 | 
| getColIndexes    | 上传给数据源样本中使用的字段索引值，默认顺序"idcard-sha256，mobile-sha256，dateBack，idcard-md5，mobile-md5，idcard-sha256-salt，mobile-sha256-salt" | 
| sendSampleToOuter  | 样本传输给数据源的具体实现 | 

配置项说明：
| 配置项     | 值   | 说明   |
| -------- | ------ |  ------ |
| 名称    | 数据源名称 | 中文英文均可，只是展示用 |
| 虚拟数据源    | 是否为虚拟数据源 | 默认为否 |
| 调用地址  | http://api.tcredit.com/obf/sample/uploadSample | 外部数据源固定调用地址 | 
| 请求方法 | POST | 默认值 |
| 请求头 | application/x-www-form-urlencoded | 默认值 | 
| 超时时间 | 300000 | 毫秒，尽量长一点 |
| 重试次数 | 3 | 失败后重试次数 | 
| 携带文件 | 是 | 调用接口时，是否携带了文件，外部接口为是 |
| 加急 | 否 | 外部数据源默认支持加急，只是将定时任务提前执行，一般会将样本传输到不同的文件夹下 |
| 是否回调 | 是 | 是否进行回调 |
| 文件参数 | file | 固定值 |

参数说明：
| 参数名称     | 参数类型   | 值   | 说明   |
| -------- | ------ |  ------ | ------ |
| appId    | appId | af964efd-0732-447b-b5a0-27f0f0f47788 | 固定值 |
|  taskId   | 函数表达式 | append(req.taskId, _, const.taskType, _, file.name) | 固定值 |
| taskType  | 常量 | **代码中的枚举** | 此处需要和代码的枚举值保持一致 |
| tokenKey | 函数表达式 | genTokenKey(appId=const.appId, taskType=const.taskType, taskId=func.append(req.taskId, _, const.taskType, _, file.name), filename=file.name) | 固定值 |
| fileName | 文件 | name | 固定值 | 

### 虚拟数据源
虚拟数据源只是将线下执行的计算处理，在线上进行一个管理操作，只有一个名称必填项。

## 相关资料

+ [内部源跑批任务回调接口](http://wiki.tcredit.com/pages/viewpage.action?pageId=35390658)
+ [外部源跑批任务回调接口](http://wiki.tcredit.com/pages/viewpage.action?pageId=35390404)

