---
title: 信用百科-操作日志
date: 2021-06-26 19:48:57
cover: https://tva1.sinaimg.cn/large/008i3skNly1grwxmrmyt9j31hb0qt7wh.jpg
categories:
  - 信用百科
subSidebar: 'auto'
tags:
 - 信用百科
---


<!-- more -->

## 内容

`odin`原有的操作日志使用`注解`实现，norns为`硬编码`；`odin`的操作日志通过`http请求`调用`norns`接口，
由`norns`进行数据库插入。在`5.7.19`版本，将`norns`的硬编码注解去掉，并引入了注解。同时，也添加了一个用来
记录小程序操作记录的注解。

![](https://tva1.sinaimg.cn/large/008i3skNly1grwxvh9i60j31dj0u0dxz.jpg)

:::warning 注意
+ 小程序的登录逻辑不是通过`shiro`实现的，所以在记录小程序操作日志时获取当前登录人需要通过`请求头`中的`token`到`redis`进行查取。
![](https://tva1.sinaimg.cn/large/008i3skNly1grwy1sqk0bj31dj0u0dw6.jpg)
+ 记录登录时信息，当次请求没有token，需要在获取登录用户信息为空时，尝试从`response`中获取`用户id`，再去获取用户信息。
![](https://tva1.sinaimg.cn/large/008i3skNly1grwy4vzubuj61dj0u0asn02.jpg)
:::
