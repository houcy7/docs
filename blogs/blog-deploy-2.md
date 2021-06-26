---
title: 博客的搭建 - 下
date: 2021-03-04
cover: https://zyj_yida.gitee.io/source/img/indexbg/52.jpg
categories:
  - 博客搭建
tags:
 - 博客
 - 前端
publish: true
sticky: 2
---


:::tip 

+ [博客的搭建 - 上](./blog-deploy-1.html)    
+ [博客的搭建 - 下](./blog-deploy-2.html) 
:::

<!-- more -->

## 导航栏阴影

因为壁纸会随机出现，有时会出现颜色相近的图片导致导航栏可能不清晰的情况（东北话靠色(shai)）。
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8acjq7ucj327s07s7j8.jpg)

为了解决这个问题，在导航栏添加一个阴影背景，

+ 1.在`Nvabar.vue`中添加行内样式
```vue
  <header class="navbar" style="position: relative;background: none rgba(0, 0, 0, 0.2);box-shadow: none;">
    ...
  </header>
```

![](https://tva1.sinaimg.cn/large/008eGmZEly1go8ao9ycx2j31d80u0q8g.jpg)

+ 2.注释掉`.nvabar`的`lineheight`
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8arb0j52j318u0rujvz.jpg)

最终效果如下：
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8as6s4pnj31ha03jamk.jpg)

## 获取每日一句、每日壁纸
在参(chao)考(xi)大佬们的博客时，发现大家对首页的名言名句和背景图都有不同的处理。`zeal`大佬是根据星期七天轮播，`yida-zyj`
是根据自己的图库随机展示。我选择了一种折中的方式，每天换一次名言名句，通过调用金山词霸的每日一句获取；每天更换一次壁纸，通过
获取bing的背景图获取、

+ 0.找到金山词霸和bing的接口
[百度一下，你就知道](http://www.baidu.com)

+ 1.引入`axios`, 挂载

```vue
import axios from 'axios'

export default ({
  Vue,
  siteData,
  isServer,
  router
}) => {
  Vue.mixin(postMixin);
  Vue.mixin(localMixin);
  Vue.prototype.$axios = axios;
}

```

+ 2.找到展示名言警句和图片的位置


:::tip    
由于两处修改套路相同，此处只以获取词霸每日一句接口举例    
:::

![](https://tva1.sinaimg.cn/large/008eGmZEly1go8b29hcs8j31rs0u0dpq.jpg)
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8b3oi19xj318o0lijuo.jpg)

通过类似上述的修改，对词霸的接口进行请求解析，并绑定到变量上进行展示。    
你会惊喜的发现，[跨域](https://www.jianshu.com/p/8fa2acd103ea)了。    
`_(:з」∠)_`

+ 3.请教度娘，怎么来解决axios的跨域问题    
问了度娘千百遍，给的十几页答案基本上都是相同的，需要配置一个本地代理。

```vue
// 本地跨域代理
devServer : {
    proxy: {
        '/bing/': {
            target: 'https://cn.bing.com/', //接口域名
            changeOrigin: true,             //是否跨域
            ws: true,                       //是否代理 websockets
            secure: true,                   //是否https接口
            pathRewrite: {                  //路径重置
                '^/bing/': ''
            }
        },
        '/ciba/': {
            target: 'http://open.iciba.com/', //接口域名
            changeOrigin: true,             //是否跨域
            ws: true,                       //是否代理 websockets
            secure: true,                   //是否https接口
            pathRewrite: {                  //路径重置
                '^/ciba/': ''
            }
        },
    }
}
```

在哪配置呢？说是应该有一个vue.config.js在根目录下才对啊。    
没有？创建一下。    
在哪创建？所有的根都创建了一遍。    
然并卵，最终在vuepress的issue中找到了思路，把这个配置放到`config.js`下，果然可以了。
来自后端的敏锐嗅觉，放到了github pages中跑了一下，果然404了。    

![](https://tva1.sinaimg.cn/large/e6c9d24ely1go6kd4gjx8j21in0u0kjm.jpg)

+ 4.再次请教度娘, 解决devServer.proxy在github pages中不生效问题    
这种需要跨域的问题，一般后端只需要配置个NGINX就可以了，但是在github上这条路明显是走不通的。继续埋头查看issue，发现了一个
神奇的网站，可以通过[JsonBird - 业界领先的远程代理服务](https://bird.ioliu.cn/#interface)中转解决这个跨域问题，虽然
会消耗资源加载的时间，

![](https://tva1.sinaimg.cn/large/008eGmZEly1go8bh8x3ltj31a80giacs.jpg)

+ 5.查看效果

2021.03.03
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8bi9vaq6j31h60qwnpf.jpg)
2021.03.04
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8bixtv1wj31hb0quhdv.jpg)

::: warning    
感觉这个问题如果是一个有点经验的前端也不会花一小天去处理吧，奈何自己vegetable...    
:::    

## 配置github自动构建

之前自己白嫖学生服务器的时候是通过Jenkins构建的页面，每次更新都需要自己去发版下。这次了解到了一个叫做`github actions`的
东东可以自动的部署，也就学着搞了一下。大致执行过程是：`master分支编译` -> `存到某个地方` -> `切换到gh-pages分支` -> `拉编译后的代码`
-> `发布到gh-pages分支`。    
参考步骤如下：    

+ 1.复制下面的配置到根目录的`.github`目录下
```yaml
name: Deploy to github pages
on:
  push:
    branches:
      - master
jobs:
  build:
    name: Build docs by vuepress
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install npm dependencies
        run: npm install
      - name: build docs
        run: npm run build
      - name: Upload vuepress build result
        uses: actions/upload-artifact@v2
        with:
          name: vuepress-dist
          path: dist
  deploy:
    name: Deploy to github pages
    runs-on: ubuntu-latest
    needs:
      - build
    steps:
      - name: Download previous build result
        uses: actions/download-artifact@v2
        with:
          name: vuepress-dist
      - name: View artifact files
        run: ls
      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@3.7.1
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages # The branch the action should deploy to.
          FOLDER: . # The folder the action should deploy.
          CLEAN: true # Automatically remove deleted files from the deploy branch

```

+ 2.创建GITHUB_TOKEN

按照下面的图示，将红框框里边的按钮都点一下，此时名字可以随便取，但是生成的token需要保存下来，只出现一次，刷新后就不会再出现了。    
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8bu2xzn2j306t0d9q3h.jpg)
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8bun88dhj31h60pkdld.jpg)
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8bvbkgb6j311a093abb.jpg)
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8bvmkn2fj30w90bagn5.jpg)
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8bwgd9laj313b0jnjur.jpg)
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8bwpwswnj30xx0gkjti.jpg)

配置项目的GITHUB_TOKEN。按照下面的图示，将红框框里边的按钮都点一下，此时的`name`不可以随便写，需要与工作流配置中的参数保持一致。
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8bzeglnqj318d0jg0wh.jpg)
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8bzpyn50j30yo0gx764.jpg)
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8c1mass5j310h0kfjua.jpg)
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8c2b17fqj30rb0dpjrw.jpg)
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8c3bu12zj314w0q678a.jpg)

+ 3.推送代码到master，观察是否生效
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8c4kcv9yj31gm0qbwjk.jpg)

## 配置个性域名
xxx.io/blog是在是不好敲也不好记，加上手中有购买的域名可以用，就将博客地址绑定到二级域名上，在此加以记录。

+ 1.在对应的repository下的setttings的github pages的custom domain下配置二级域名
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8c89e6tdj31h80r0n17.jpg)

+ 2.添加域名解析
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8ccrdarfj30kv0fqdgq.jpg)

+ 3.测试访问
![](https://tva1.sinaimg.cn/large/008eGmZEly1go8cdt5u43j31hc0u0hdv.jpg)

## 地址栏中文跳转404问题
我刚搭建了一个狂拽炫酷的博客，点吧点吧404了，腾讯公益？虽然我是个热心人，但是404这个实在是接受不了啊。
然后去vuepress的issue看，没找到，去vuepress-theme-reco的issue看，没找到再去vuepress的issue看，最终找到
了一个看起来还可以的解决方案。    
原因是跳转链接中含有中文，然后balabala，按照issue配置了一下，暂时是没有跳转到腾讯公益了。

## markdown复选框插件不生效
需要通过安装插件解决此问题
```shell script
npm install markdown-it-task-lists 
```
在`config.js`中进行配置

```yaml
"markdown": {
    "lineNumbers": false,
    extendMarkdown: md => {
        md.use(require('markdown-it-task-lists'), {enabled: true});
    }
},
```

示例
```markdown
- [x] 完成
- [ ] 待办
```

- [x] 完成
- [ ] 待办

:::tip 说明     
中括号中间需要有一个空格     
:::    

## 相关链接    
[金山词霸 - 每日一句](http://open.iciba.com/dsapi/)    
[bing - 壁纸](http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1)    
[Vue3.0 axios跨域请求代理服务器配置](https://blog.csdn.net/tdl081071tdy/article/details/90080818)    
[JsonBird - 业界领先的远程代理服务](https://bird.ioliu.cn/#interface)    
[使用 GitHub Actions 自动部署博客](https://vuepress-theme-reco.recoluan.com/views/other/github-actions.html)    
[如何在 GitHub Actions 时使用 secretKey](https://vuepress-theme-reco.recoluan.com/views/other/github-actions-secret-key.html)    
[分类和标签包含中文会导致路由匹配不到，跳转至404页面 ](https://github.com/vuepress-reco/vuepress-theme-reco/issues/276)    
[本文项目地址](https://github.com/houcy7/blog)
