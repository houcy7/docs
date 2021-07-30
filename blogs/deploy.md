---
title: 上线步骤说明
date: 2021-07-30 12:27:56
categories:
  - 上线步骤
tags:
 - 上线步骤
publish: true
---

## 上线步骤

### 1.打包

按照`odin-core`,`odin-mq-core`, `odin-service-core`,`odin-web-core`顺序进行打包，将jar推送到阿里云仓库

![image-20210730115201759](https://tva1.sinaimg.cn/large/008i3skNly1gsyu30u21wj31g60u045x.jpg)

### 2.Jenkins点一下



```
因为服务部署在不同的机房内，打包的时候根据是否含有git后缀区分部署位置
```

+ ECS地址：http://jenkins.t.tcredit.com/view/ad-online-DataCalculation/

![image-20210730115555716](https://tva1.sinaimg.cn/large/008i3skNly1gsyu72wclqj31eo0u00yf.jpg)

阿里云地址：http://jenkins.container.tcredit.com/login?from=%2F

![image-20210730115637768](https://tva1.sinaimg.cn/large/008i3skNly1gsyu7t4pgoj31ed0u0q8r.jpg)

### 3.发版

#### 3.1 阿里云控制台

+ 找到`容器服务K8s版`

  ![image-20210730115905599](https://tva1.sinaimg.cn/large/008i3skNly1gsyucbv0y2j31in0u0gqd.jpg)

+ 天创信用生产

  ![image-20210730120000518](https://tva1.sinaimg.cn/large/008i3skNly1gsyuc9k52fj31iv0u042e.jpg)

+ 无状态

  ![image-20210730120031057](https://tva1.sinaimg.cn/large/008i3skNly1gsyuc7olqoj31iq0u0n0m.jpg)

+ 命名空间选择`app`

![image-20210730120139857](https://tva1.sinaimg.cn/large/008i3skNly1gsyvi4kjpnj31it0u0tfv.jpg)
+ 点击`编辑`，选择`镜像tag`（tag与Jenkins打包后的一致 一般根据时间可以区分开），后点击`更新`

  ![image-20210730120238779](https://tva1.sinaimg.cn/large/008i3skNly1gsyue2nv5dj31is0u0wif.jpg)

  ![image-20210730120345222](https://tva1.sinaimg.cn/large/008i3skNly1gsyuf800y5j31eb0u0wj4.jpg)

+ 观察节点状态，全绿并且镜像tag为刚才选择的tag时，更新成功。如果出现重启次数大于0，一般就是代码有问题，服务启不来。

  ![image-20210730120427114](https://tva1.sinaimg.cn/large/008i3skNly1gsyufy7n94j31ir0u0gqs.jpg)

+ **回滚**

  选择之前的镜像tag,按照上线方式执行即可。回滚时，需要评估上线的sql脚本是否适用于之前的镜像实例。

#### 3.2 AD平台发版

> AD平台上线需更谨慎，因为页面操作比较卡顿，如果vpn连接的话，响应会更慢。。

+ 找到上线的项目

  ![image-20210730121045124](https://tva1.sinaimg.cn/large/008i3skNly1gsyumi2ls3j31jn0u042t.jpg)

+ 上传代码，此时会提示同步代码

  ![image-20210730121140870](https://tva1.sinaimg.cn/large/008i3skNly1gsyunguthqj31i60u0dki.jpg)

+ 提交内测。提示内测成功后需要观察这台机器的`调用日志`（ECS里边 /data/log）和`服务调用情况`（信百生产环境的产品日志状态码为12的），尽早发现是否有异常！

  ![image-20210730121514492](https://tva1.sinaimg.cn/large/008i3skNly1gsyur6ar9yj31gz0u0aes.jpg)

  ![image-20210730121612076](https://tva1.sinaimg.cn/large/008i3skNly1gsyus7peyuj31ir0u0dkn.jpg)

+ 去掉内测服务器的√，√到下一台服务器，点击上线按钮；！！！一台一台上，观察日志！！！

  ![image-20210730122108614](https://tva1.sinaimg.cn/large/008i3skNly1gsyuxbsqp4j31c00u0aes.jpg)

+ 点击完成，更新版本号

  ![image-20210730122332658](https://tva1.sinaimg.cn/large/008i3skNly1gsyuztjaa3j31c00u0n2v.jpg)

+ **回滚**

  + 勾选要回滚的服务器，点击回滚图标进行回滚，只能回滚到上一个版本

  ![image-20210730122423299](https://tva1.sinaimg.cn/large/008i3skNly1gsyv0oxkmzj31da0u0n1w.jpg)
