---
title: 信用百科-策略产品自动配置
date: 2021-06-26 19:48:59
cover: https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grwxmrmyt9j31hb0qt7wh.jpg
categories:
  - 信用百科
subSidebar: 'auto'
tags:
 - 信用百科
---


<!-- more -->

## 内容
我接手`信用百科`就只交接了配置产品，配置一个产品整个流程操作下来需要`小20分钟`。配置几个产品后发现，除了`几个变量`需要注意下，其余流程都是
固定的，所以将`配置过程`暴露出一个`接口`来接收`特定参数`，其余过程由`代码自动`完成，完成一个产品的配置耗时`300ms`左右。

![](https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grwyh5ym2rj31hb0qu0vj.jpg)

后台代码：`AutoConfigureController`
![](https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grwyi8e4rkj31dj0u0wzi.jpg)

:::tip    
接收到请求之后，后台的操作是向各个表中插入数据，具体逻辑看一下就好，没有复杂的地方
:::

## 参数来源
参数来源一般是分控核心负责人发来的邮件，`产品名称`、`产品编码`、`接口文档类型`分别对应配置页面上`接口名称`、`接口编号`、`接口分组`；
`使用标识`除非有特殊说明，一般默认`对外产品`即可；`调用参数`根据邮件中最后一列来决定，映射关系如下：    
```javascript
"name-姓名", "idcard-身份证号", "mobile-手机号", "dateBack-回溯时间yyyy-MM-dd", "sceneId-枚举值"
```
![](https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx348s5sfj31240sdaf9.jpg)
