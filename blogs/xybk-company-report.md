---
title: 信用百科-企业报告
date: 2021-06-26 19:48:58
cover: https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grwxmrmyt9j31hb0qt7wh.jpg
categories:
  - 信用百科
subSidebar: 'auto'
tags:
 - 信用百科
---


<!-- more -->

## 内容
`企业报告`的导出分为`pdf版本`和`word版本`。`pdf版本`的实现原理为将调用接口的响应结果渲染到页面上，通过只有内核的浏览器组件模拟打印，
保存pdf并下载；word版本与之相似，将调用结果填充到`word模板（xml格式）`中，通过`freemarker`生成文件并下载。

+ 账号密码：[系统密码](http://wiki.tcredit.com/pages/viewpage.action?pageId=42107792)
+ 登录地址： [https://api.ypcredit.com/norns/service/cas/doLogin?service=https://api.ypcredit.com/odin/user/sso](https://api.ypcredit.com/norns/service/cas/doLogin?service=https://api.ypcredit.com/odin/user/sso)

### pdf

+ 后台接口：`ReportQueryController`
![](https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx1vncjnij31dj0u0wws.jpg)
+ pdf_url： http://api.ypcredit.com/odin/user/report/query/pdfIndex?seqNumToken=seqnum_token
+ pdf_service： http://pdf.tcredit.com/printpdf/html2Pdf?url=pdf_url&fileName=filename&flag=1

### word
+ 后台接口：
![](https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx22lpj3rj31dj0u0arv.jpg)
+ 模板文件和工具类
![](https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx23eoaozj31dj0u0kaj.jpg)


## 批量导出
企业报告的导出分为`获取公司相关信息`,`调用企业报告接口`,`生成文件`三个步骤。前两个步骤均需要调用接口，调用的时候使用`bgtest`这个账号
的`appId`和`tokenKey`调用；拿到结果后调用`本地方法`生成文件进行保存。

+ main
![](https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx2e35grij31dj0u04in.jpg)

+ 获取公司信息
![](https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx2ek4ojrj31dj0u07nx.jpg)

+ 调用企业报告
![](https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx2f6ybipj31dj0u01aq.jpg)

+ 导出报告
![](https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx2fk6x7cj31dj0u0k9x.jpg)

+ 导出结果示例
    + 文件列表
    ![](https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx2jc0s22j31c00u04qp.jpg)
    + 执行时间
    ![](https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx2k7j0hoj31c00u0qka.jpg)
    + 执行结果
    ![](https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx2lgpe5sj31c00u0txx.jpg)
    
:::danger    
导出前需要确认账号余额或授信额度是否足够。    
:::

## 相关链接
+ [最好用Html转pdf的工具——wkhtmltopdf](https://blog.csdn.net/qq_14873105/article/details/51394026)
+ [freemarker在线手册](http://freemarker.foofun.cn/)
