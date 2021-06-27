---
title: 风控系统
date: 2021-06-26 19:48:42
cover: https://tva1.sinaimg.cn/large/008i3skNly1grw5fk4rnxj318k0ljn55.jpg
categories:
  - 风控系统
tags:
 - 风控系统
 - 跑批调度系统
publish: true
sticky: 1
---


:::tip 

风控产品管理系统    
变量回溯跑批系统
:::

<!-- more -->

## 写在前面
这个系统可以说是完全由我一个人从前到后，一点一点堆砌起来的项目。    
从接收到需求，这个系统就注定要充满我的天马行空。自学一周vue开始尝试自己写前端、难写的合并单元格和动态表格、
画出产品节点的依赖关系图、整合蜂嗅项目的模块、千万级日志量的存储和查询、回溯跑批的调度、执行过程的时间轴展示以及手画的原型图等等
都是用我的头发"换"来的。
正因如此，这个项目对我的意义很大，也是我在公司最满意的作品。

:::tip    
别人写的代码，几乎被我删除重写了，现在项目中不是我写的代码不超过1% QAQ
:::


## 内容
这个项目的`功能描述`、`前端开发说明`、`后端开发说明`，都在[风控系统帮助手册](http://dpm.ypcredit.com/docs/)中详细的进行了说明，
以下是对手册中没有提到或者不是很详细的`样本回溯任务`和`部署`进行补充，其他内容请移步[风控系统帮助手册](http://dpm.ypcredit.com/docs/)。

## 样本回溯任务
`信用百科`通过样本进件可以通过`一次进件`调用`多个`回溯产品，多个产品有可能存在`相同`的数据源，而这些数据源多次调用和一次调用结果上`没有
区别`，却会造成资源的浪费。通过在`调用obf之前`对数据源进行去重后，再发起调用。
![](https://tva1.sinaimg.cn/large/008i3skNly1grwxfjyc17j31dj0u0e12.jpg)

合并后示例如下：
![](https://tva1.sinaimg.cn/large/008i3skNly1grwxgh39uxj30uc0cmq4i.jpg)
![](https://tva1.sinaimg.cn/large/008i3skNly1grwxh9woqtj31bp0l940r.jpg)

## 部署
这个项目没有使用前后端分离的方式进行部署，而是将前端（`项目前端`+`文档前端`）执行打包命令后生成的静态文件拷贝到后端的指定目录下，
在通过将后端项目发版进行部署。

前端打包命令如下：

```shell script
currTime=$(date +"%Y-%m-%d %T")
echo $currTime
echo '清空文件夹开始'
rm -rf /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/templates/index.html
rm -rf /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/static/static/*
echo '清空文件夹结束'
cd /Users/hou/study/vue/vue-admin-template
echo '开始构建'
npm run build:prod
echo '构建结束'
echo '移动文件开始'
mv ./dist/index.html /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/templates
mv ./dist/* /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/static
echo '移动文件结束'
currTime=$(date +"%Y-%m-%d %T")
echo $currTime
```

文档打包命令如下：
```shell script
currTime=$(date +"%Y-%m-%d %T")
echo $currTime
echo '清空文件夹开始'
rm -rf /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/templates/docs/*
rm -rf /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/static/docs/*


echo '清空文件夹结束'
cd /Users/hou/study/vue/vue-element-admin-site
echo '开始构建'
npm run build
echo '构建结束'
echo '移动文件开始'
mv ./docs/.vuepress/dist/favicon.ico /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/static/docs
mv ./docs/.vuepress/dist/home.png /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/static/docs
mv ./docs/.vuepress/dist/manifest.json /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/static/docs
mv ./docs/.vuepress/dist/assets /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/static/docs

mv ./docs/.vuepress/dist/* /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/templates/docs
echo '移动文件结束'
currTime=$(date +"%Y-%m-%d %T")
echo $currTime
```

+ 测试环境：
    + 通过测试环境Jenkins进行发版
    ![](https://tva1.sinaimg.cn/large/008i3skNly1grw64uv3owj31h30iwgq4.jpg)
    + 服务器: 172.19.160.60
    + 端口号：8888
    + 数据库：88数据库 config_manager

+ 生产环境:
    + 通过容器环境Jenkins打包：
    ![](https://tva1.sinaimg.cn/large/008i3skNly1grw67bmwj5j31fv0sswon.jpg)
    
    + 在阿里云控制台中进行部署，命名空间：`rc-data`
    ![](https://tva1.sinaimg.cn/large/008i3skNly1grw68mg9ecj31hb0qx471.jpg)
    + 数据库：阿里云rds rc_approve
    + 日志
    ![](https://tva1.sinaimg.cn/large/008i3skNly1grw69xj3tij31hb0r1tig.jpg)

:::tip 遗憾
一直没能给项目起新名字... 
:::
