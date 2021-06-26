---
title: 博客的搭建 - 上
date: 2021-03-04
cover: https://zyj_yida.gitee.io/source/img/indexbg/52.jpg
categories:
  - 博客搭建
subSidebar: 'auto'
tags:
 - 博客
 - 前端
sticky: 1
---


:::tip 

+ [博客的搭建 - 上](./blog-deploy-1.html)    
+ [博客的搭建 - 下](./blog-deploy-2.html) 
:::

<!-- more -->

## 获取代码

这是我第三次使用vuepress搭建博客了。第一次是发现了好看的vuepress，第二次是发现了好看的vuepress-theme-reco，
第三次是发现了好看的魔改博客[后来的我们](https://zyj_yida.gitee.io/)，经过和此博客作者的交流后，得到了一些优化的思路，
便开始了第三次搭建。

此次博客基础代码源自zealsay开源的(vuepress-blog)[https://gitee.com/GodLikeZeal/vuepress_blog]，这种直接引用
主题代码的方式着实让我这个后端小菜为之一惊，可以通过我仅有的vue知识进行微妙的调整了，具体搭建过程参考zealsay的文章[使用vuepress_blog搭建博客
](https://www.zealsay.com/blogs/tec/2020/20201223.html)。


:::tip 

为了避免大佬修改博客地址，此处搬运关键命令
:::


+ 1.首先按照node环境并安装npm或者yarn，因为vuepress是基于node环境的，这一步可以随便百度。

+ 2.安装vuepress

```shell script
yarn add -D vuepress # npm install -D vuepress
```

+ 3.检出代码

```shell script
git clone https://gitee.com/GodLikeZeal/vuepress_blog.git
```

+ 4.进入到.vuepress目录下运行dev

::: danger
注意⚠️：一定要到.vuepress目录下运行。

:::

 + 5.进入到.vuepress目录
 ```shell script
 cd .vuepress
 ```


 + 6.安装依赖
  ```shell script
 yarn install  # or npm install
  ```
 
 + 7.运行项目
  ```shell script
 yarn run dev # or npm run dev
  ```

+ 8.打开浏览器 localhost:8080就能访问了

![](https://tva1.sinaimg.cn/large/008eGmZEly1go87j8u3iej31hc0u0x6r.jpg)
![](https://tva1.sinaimg.cn/large/008eGmZEly1go87kg896gj31h70qv4bd.jpg)

::: tip
我把[张益达大佬](https://github.com/yida-zyj)的图片也抄过来了，实在是有点漂亮。手动狗头。
:::

## 修改配置

与博客有关的配置基本上都在`.vuepress`下的`config.js`设置，配置都写在一个文件内难免会有些过于冗长又不好进行维护，所以
将配置分成了单独的模块。

![](https://tva1.sinaimg.cn/large/008eGmZEly1go89etsotzj30ky0cs756.jpg)

| 目录     | 说明   |
| -------- | ------ |
| blogConfig    | 博客的目录和标签位置顺序配置 |
| friendLink    | 友链配置 |
| nav  | 除博客的目录和标签其他导航的配置 |
| theme | 主题配置 |
| config.js | 其余配置 |

基本上没有什么需要特别注意的配置，参考[config.js的配置](https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html)
均可以搞定

## frontMatter

[官方文档](https://vuepress-theme-reco.recoluan.com/views/1.x/frontMatter.html)中已经有相关介绍了，但是zealsay
大佬给每一个文章都添加了一个`cover`属性来配置个性图的链接，如果不想为文章指定图片的话，可以设置为`null`.这样可以展示或者展示一张
随机的图片。

![](https://tva1.sinaimg.cn/large/008eGmZEly1go89qzpb1gj30vw0cggmt.jpg)

## 结语
至此，你将会得到一个专属于自己的博客空间，作为一个`hello world`达人，还不快去写点什么~    
下一篇[博客的搭建 - 下](./blog-deploy-2.html) 咱们继续折腾


## 鸣谢
感谢[reco_luan](https://github.com/vuepress-reco/vuepress-theme-reco).    
感谢[yida-zyj](https://github.com/yida-zyj).    
感谢[zeal](https://github.com/GodLikeZeal).    
老铁们，小红心请点亮~
