---
title: 常见操作
date: 2021-06-26 19:48:55
categories:
  - 常见操作
subSidebar: 'auto'
tags:
 - 常见操作
sticky: 2
---


:::tip 
配置策略产品    
查询验证码
:::

<!-- more -->

## 配置策略产品

+ [信用百科-策略产品自动配置](./xybk-auto-config.html)

## 查询验证码

+ 在`通知中心管理页面`查询
![](https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx3heccvkj31h30sp0wb.jpg)
+ 数据库查询
```sql
select * from notice_sms where notice_mp like 'xxxx' order by create_time desc;
```

## 上传接口文档

这是一个纯（费）体（时）力（费）活（力）。将产品那边的pages里边的`url`补全，`日志示例`补全，`检查参数`无误后导出为pdf
上传到信用百科并更新wiki。如果在`运维中心`找不到调用日志时，可以在`测试中心`通过`单次调用`接口获取日志示例。

## 数据源加急

+ [跑批调度系统-加急](./obf.md)

## 跑批结果与样本顺序不一致排序
+ [跑批结果与样本顺序不一致排序](http://wiki.tcredit.com/pages/viewpage.action?pageId=35390209)

## 导出全量的对账单列表
+ [跑批结果与样本顺序不一致排序](http://wiki.tcredit.com/pages/viewpage.action?pageId=35390206)

## 导出合同信息
+ [导出合同信息](http://wiki.tcredit.com/pages/viewpage.action?pageId=35391844)

## 根据核心产品编码查找对应的策略产品
+ [根据核心产品编码查找对应的策略产品](http://wiki.tcredit.com/pages/viewpage.action?pageId=35390847)
