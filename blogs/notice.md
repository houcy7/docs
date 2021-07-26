---
title: 通知中心
date: 2021-06-26 19:48:15
cover: https://tva1.sinaimg.cn/large/008i3skNly1grw0cy5p3kj61lo0u0kjm02.jpg
categories:
  - 通知中心
tags:
 - 通知中心
publish: true
subSidebar: 'auto'
---


:::tip 

消息通知基础服务
:::

<!-- more -->

## 管理页面

可以通过管理页面进行通知记录的简单查询。

+ 登录地址: [http://notice.tcredit.com/login.html#1](http://notice.tcredit.com/login.html#1)
+ 账号：admin
+ 密码：123@tcredit


## 账单统计
需要在每个月的月初在对应的运维群中找对接人获取短信账单，然后根据系统中发送记录整理成一个表格发送给威哥，抄送飞哥和田老师。

目前在使用的外部通道只有两个，`云码通`和`易宝YOP`。云码通对接人为`梁洁`，易宝YOP对接人为`国宝`（微信名）

![](https://tva1.sinaimg.cn/large/008i3skNly1grw0qs23uaj314t0u076u.jpg)

![](https://tva1.sinaimg.cn/large/008i3skNly1grw0sae84yj31490u0ac7.jpg)

统计sql如下(日期需要替换)：    
```sql
select ni.notice_name as '业务', ni.notice_code as '业务代码', ns.setting_name as '通道名', count(1) as '总数', sum(case notice_status when 1 then 1 else 0 end) as '成功', sum(case when notice_status != 1 then 1 else 0 end) as '失败' from notice_mp t
left join notice_setting ns on ns.notice_setting_id = t.notice_setting_id
left join notice_info ni on ni.notice_id = t.notice_id
where t.create_time >= '2021-04-01' and t.create_time < '2021-05-01' group by t.notice_id, t.notice_setting_id;
```

邮件内容如下：    
![](https://tva1.sinaimg.cn/large/008i3skNly1grw173dpyfj30ww0u0mz8.jpg)

## 代码开发

通知中心在设计的时候支持`dubbo`和`http`两种调用方式，目前`dubbo`方式已停用。    
基本上没有新的开发需求，只要保证服务稳定即可。如果遇到问题，通过controller往下找即可。

http调用统一入口代码为：`SendNotificationController`
![](https://tva1.sinaimg.cn/large/008i3skNly1grw1jup5b6j31dq0u0tms.jpg)


在系统启动时会启动一个线程对系统的健康进行监控，当某一类通知失败达到上限时会对通知中心的负责人进行告警。相关代码为：`HeathWarnManager`
![](https://tva1.sinaimg.cn/large/008i3skNly1grw2cfq60jj31dj0u0na6.jpg)

通知中心的负责人配置位于：`HealWarnMsgUtil`
![](https://tva1.sinaimg.cn/large/008i3skNly1grw2egjjh9j61dj0u0wv102.jpg)

::: warning     
其实这个配置应该挪到配置文件中    
:::

线上的全通道测试代码：`OnLineAllTest`    
![](https://tva1.sinaimg.cn/large/008i3skNly1grw1n13zzpj31dq0u0qia.jpg)


:::tip 注意
+ 邮件发送给多个人时，收件人使用英文分号进行分隔
+ 短信发给多个人的时候，接收人使用英文逗号进行分隔
+ 使用企业微信进行通知时，需要在管理页面配置别名才可以通过手机号给某人的企业微信进行通知；
微信号为企业微信账号，需要通过企业微信管理员进行查看。
![](https://tva1.sinaimg.cn/large/008i3skNly1grw1uivym5j31h70q70z6.jpg)
:::

## 同步企业微信通讯录<Badge text="NEW"/>
因为短信通道总是不能成功下发短信，为了避免重要信息不能及时送达，所以在发送短信时，默认向企业微信推送消息。
而推送企业微信消息需要配置手机号和企业微信中微信名的映射，所以编写了通讯录同步功能。

### 短信同时推送企业微信
![](https://tva1.sinaimg.cn/large/008i3skNly1gsu5jqvhiaj31c00u045z.jpg)

:::tip 注意
下发短信时候的签名(【】里边的内容)是在云码通策略里边实现的，为了保持一致，在推送企业微信时把逻辑重写了一遍。
:::

### 自动更新
通过定时任务，每天的12：17去获取通讯录信息，然后将库中所有数据清空，重新插入。
[文档](https://work.weixin.qq.com/api/doc/90000/90135/90201)
![](https://tva1.sinaimg.cn/large/008i3skNly1gsu5oymh7oj31c00u07am.jpg)
![](https://tva1.sinaimg.cn/large/008i3skNly1gsu5puk6hfj61c00u044j02.jpg)

:::tip 注意
+ 调用接口是获取的是部门的通讯录，并且允许递归查询，所以将查询部门设置为1（天创信用）可以间接的获取到所有公司员工信息
+ 12:17是我生日😃
:::

### 手动更新
如有需要可以通过页面提前触发定时任务
![](https://tva1.sinaimg.cn/large/008i3skNly1gsu5tlgwr2j31c00u0ag0.jpg)
![](https://tva1.sinaimg.cn/large/008i3skNly1gsu5ujzubuj31c00u0dm0.jpg)

## 部署运维
提交代码后通过[容器的Jenkins](http://jenkins.container.tcredit.com/)进行打包，然后在`阿里云控制台`进行发版。
![](https://tva1.sinaimg.cn/large/008i3skNly1grw1z50zvtj31hb0qzq6z.jpg)
![](https://tva1.sinaimg.cn/large/008i3skNly1grw207qdnmj31h90qt0wh.jpg)

:::tip 注意
通知中心docker镜像部署的命名空间为`app-xiaoxinquan`
:::

线上日志查看地址：    
![](https://tva1.sinaimg.cn/large/008i3skNly1grw22auew7j31hb0qv45f.jpg)

线上数据库（阿里云）：
![](https://tva1.sinaimg.cn/large/008i3skNly1grw24uhau1j31az0daq40.jpg)

| 表名     | 说明   |
| -------- | ------ |
| notice_sms    | 短信通知 |
| notice_email    | 邮件通知 |
| notice_voice  | 语音通知 |

## 相关资料

+ 百度网盘：链接:[https://pan.baidu.com/s/1DTuEQmCHIrPHdYFx73YdDA](https://pan.baidu.com/s/1DTuEQmCHIrPHdYFx73YdDA)  密码:1urp    

内容如下：
![](https://tva1.sinaimg.cn/large/008i3skNly1grw0jfzwb5j31600ls0w6.jpg)

+ [账单统计sql](http://wiki.tcredit.com/pages/viewpage.action?pageId=42107102)
+ [生产Jenkins](http://jenkins.container.tcredit.com/)
+ [git地址](http://gitlab.tcredit.com/third_project/notice)
+ [通知中心-接入](http://wiki.tcredit.com/pages/viewpage.action?pageId=8028802)
