(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{505:function(a,t,s){"use strict";s.r(t);var i=s(4),r=Object(i.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"上线步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上线步骤"}},[a._v("#")]),a._v(" 上线步骤")]),a._v(" "),s("h3",{attrs:{id:"_1-打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-打包"}},[a._v("#")]),a._v(" 1.打包")]),a._v(" "),s("p",[a._v("按照"),s("code",[a._v("odin-core")]),a._v(","),s("code",[a._v("odin-mq-core")]),a._v(", "),s("code",[a._v("odin-service-core")]),a._v(","),s("code",[a._v("odin-web-core")]),a._v("顺序进行打包，将jar推送到阿里云仓库")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsyu30u21wj31g60u045x.jpg",alt:"image-20210730115201759"}})]),a._v(" "),s("h3",{attrs:{id:"_2-jenkins点一下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-jenkins点一下"}},[a._v("#")]),a._v(" 2.Jenkins点一下")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("因为服务部署在不同的机房内，打包的时候根据是否含有git后缀区分部署位置\n")])])]),s("ul",[s("li",[a._v("ECS地址：http://jenkins.t.tcredit.com/view/ad-online-DataCalculation/")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsyu72wclqj31eo0u00yf.jpg",alt:"image-20210730115555716"}})]),a._v(" "),s("p",[a._v("阿里云地址：http://jenkins.container.tcredit.com/login?from=%2F")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsyu7t4pgoj31ed0u0q8r.jpg",alt:"image-20210730115637768"}})]),a._v(" "),s("h3",{attrs:{id:"_3-发版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-发版"}},[a._v("#")]),a._v(" 3.发版")]),a._v(" "),s("h4",{attrs:{id:"_3-1-阿里云控制台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-阿里云控制台"}},[a._v("#")]),a._v(" 3.1 阿里云控制台")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("找到"),s("code",[a._v("容器服务K8s版")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsyucbv0y2j31in0u0gqd.jpg",alt:"image-20210730115905599"}})])]),a._v(" "),s("li",[s("p",[a._v("天创信用生产")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsyuc9k52fj31iv0u042e.jpg",alt:"image-20210730120000518"}})])]),a._v(" "),s("li",[s("p",[a._v("无状态")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsyuc7olqoj31iq0u0n0m.jpg",alt:"image-20210730120031057"}})])]),a._v(" "),s("li",[s("p",[a._v("命名空间选择"),s("code",[a._v("app")])])])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsyvi4kjpnj31it0u0tfv.jpg",alt:"image-20210730120139857"}})]),a._v(" "),s("ul",[s("li",[s("p",[a._v("点击"),s("code",[a._v("编辑")]),a._v("，选择"),s("code",[a._v("镜像tag")]),a._v("（tag与Jenkins打包后的一致 一般根据时间可以区分开），后点击"),s("code",[a._v("更新")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsyue2nv5dj31is0u0wif.jpg",alt:"image-20210730120238779"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsyuf800y5j31eb0u0wj4.jpg",alt:"image-20210730120345222"}})])]),a._v(" "),s("li",[s("p",[a._v("观察节点状态，全绿并且镜像tag为刚才选择的tag时，更新成功。如果出现重启次数大于0，一般就是代码有问题，服务启不来。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsyufy7n94j31ir0u0gqs.jpg",alt:"image-20210730120427114"}})])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("回滚")])]),a._v(" "),s("p",[a._v("选择之前的镜像tag,按照上线方式执行即可。回滚时，需要评估上线的sql脚本是否适用于之前的镜像实例。")])])]),a._v(" "),s("h4",{attrs:{id:"_3-2-ad平台发版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-ad平台发版"}},[a._v("#")]),a._v(" 3.2 AD平台发版")]),a._v(" "),s("blockquote",[s("p",[a._v("AD平台上线需更谨慎，因为页面操作比较卡顿，如果vpn连接的话，响应会更慢。。")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("找到上线的项目")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsyumi2ls3j31jn0u042t.jpg",alt:"image-20210730121045124"}})])]),a._v(" "),s("li",[s("p",[a._v("上传代码，此时会提示同步代码")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsyunguthqj31i60u0dki.jpg",alt:"image-20210730121140870"}})])]),a._v(" "),s("li",[s("p",[a._v("提交内测。提示内测成功后需要观察这台机器的"),s("code",[a._v("调用日志")]),a._v("（ECS里边 /data/log）和"),s("code",[a._v("服务调用情况")]),a._v("（信百生产环境的产品日志状态码为12的），尽早发现是否有异常！")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsyur6ar9yj31gz0u0aes.jpg",alt:"image-20210730121514492"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsyus7peyuj31ir0u0dkn.jpg",alt:"image-20210730121612076"}})])]),a._v(" "),s("li",[s("p",[a._v("去掉内测服务器的√，√到下一台服务器，点击上线按钮；！！！一台一台上，观察日志！！！")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsyuxbsqp4j31c00u0aes.jpg",alt:"image-20210730122108614"}})])]),a._v(" "),s("li",[s("p",[a._v("点击完成，更新版本号")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsyuztjaa3j31c00u0n2v.jpg",alt:"image-20210730122332658"}})])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("回滚")])]),a._v(" "),s("ul",[s("li",[a._v("勾选要回滚的服务器，点击回滚图标进行回滚，只能回滚到上一个版本")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsyv0oxkmzj31da0u0n1w.jpg",alt:"image-20210730122423299"}})])])])])}),[],!1,null,null,null);t.default=r.exports}}]);