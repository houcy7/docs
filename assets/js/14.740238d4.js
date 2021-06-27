(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{505:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",[s._v("风控产品管理系统"),t("br"),s._v("\n变量回溯跑批系统")])]),s._v(" "),t("h2",{attrs:{id:"写在前面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在前面"}},[s._v("#")]),s._v(" 写在前面")]),s._v(" "),t("p",[s._v("这个系统可以说是完全由我一个人从前到后，一点一点堆砌起来的项目。"),t("br"),s._v('\n从接收到需求，这个系统就注定要充满我的天马行空。自学一周vue开始尝试自己写前端、难写的合并单元格和动态表格、\n画出产品节点的依赖关系图、整合蜂嗅项目的模块、千万级日志量的存储和查询、回溯跑批的调度、执行过程的时间轴展示以及手画的原型图等等\n都是用我的头发"换"来的。\n正因如此，这个项目对我的意义很大，也是我在公司最满意的作品。')]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("别人写的代码，几乎被我删除重写了，现在项目中不是我写的代码不超过1% QAQ")])]),s._v(" "),t("h2",{attrs:{id:"内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[s._v("#")]),s._v(" 内容")]),s._v(" "),t("p",[s._v("这个项目的"),t("code",[s._v("功能描述")]),s._v("、"),t("code",[s._v("前端开发说明")]),s._v("、"),t("code",[s._v("后端开发说明")]),s._v("，都在"),t("a",{attrs:{href:"http://dpm.ypcredit.com/docs/",target:"_blank",rel:"noopener noreferrer"}},[s._v("风控系统帮助手册"),t("OutboundLink")],1),s._v("中详细的进行了说明，\n以下是对手册中没有提到或者不是很详细的"),t("code",[s._v("样本回溯任务")]),s._v("和"),t("code",[s._v("部署")]),s._v("进行补充，其他内容请移步"),t("a",{attrs:{href:"http://dpm.ypcredit.com/docs/",target:"_blank",rel:"noopener noreferrer"}},[s._v("风控系统帮助手册"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"样本回溯任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#样本回溯任务"}},[s._v("#")]),s._v(" 样本回溯任务")]),s._v(" "),t("p",[t("code",[s._v("信用百科")]),s._v("通过样本进件可以通过"),t("code",[s._v("一次进件")]),s._v("调用"),t("code",[s._v("多个")]),s._v("回溯产品，多个产品有可能存在"),t("code",[s._v("相同")]),s._v("的数据源，而这些数据源多次调用和一次调用结果上"),t("code",[s._v("没有 区别")]),s._v("，却会造成资源的浪费。通过在"),t("code",[s._v("调用obf之前")]),s._v("对数据源进行去重后，再发起调用。\n"),t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grwxfjyc17j31dj0u0e12.jpg",alt:""}})]),s._v(" "),t("p",[s._v("合并后示例如下：\n"),t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grwxgh39uxj30uc0cmq4i.jpg",alt:""}}),s._v(" "),t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grwxh9woqtj31bp0l940r.jpg",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),t("p",[s._v("这个项目没有使用前后端分离的方式进行部署，而是将前端（"),t("code",[s._v("项目前端")]),s._v("+"),t("code",[s._v("文档前端")]),s._v("）执行打包命令后生成的静态文件拷贝到后端的指定目录下，\n在通过将后端项目发版进行部署。")]),s._v(" "),t("p",[s._v("前端打包命令如下：")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("currTime")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d %T"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$currTime")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'清空文件夹开始'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/templates/index.html\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/static/static/*\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'清空文件夹结束'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /Users/hou/study/vue/vue-admin-template\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'开始构建'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build:prod\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'构建结束'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'移动文件开始'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ./dist/index.html /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/templates\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ./dist/* /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/static\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'移动文件结束'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("currTime")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d %T"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$currTime")]),s._v("\n")])])]),t("p",[s._v("文档打包命令如下：")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("currTime")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d %T"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$currTime")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'清空文件夹开始'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/templates/docs/*\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/static/docs/*\n\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'清空文件夹结束'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /Users/hou/study/vue/vue-element-admin-site\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'开始构建'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'构建结束'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'移动文件开始'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ./docs/.vuepress/dist/favicon.ico /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/static/docs\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ./docs/.vuepress/dist/home.png /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/static/docs\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ./docs/.vuepress/dist/manifest.json /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/static/docs\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ./docs/.vuepress/dist/assets /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/static/docs\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ./docs/.vuepress/dist/* /Users/hou/work/projects/rc-dataprod-management/config-management/src/main/resources/templates/docs\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'移动文件结束'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("currTime")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d %T"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$currTime")]),s._v("\n")])])]),t("ul",[t("li",[t("p",[s._v("测试环境：")]),s._v(" "),t("ul",[t("li",[s._v("通过测试环境Jenkins进行发版\n"),t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grw64uv3owj31h30iwgq4.jpg",alt:""}})]),s._v(" "),t("li",[s._v("服务器: 172.19.160.60")]),s._v(" "),t("li",[s._v("端口号：8888")]),s._v(" "),t("li",[s._v("数据库：88数据库 config_manager")])])]),s._v(" "),t("li",[t("p",[s._v("生产环境:")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("通过容器环境Jenkins打包：\n"),t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grw67bmwj5j31fv0sswon.jpg",alt:""}})])]),s._v(" "),t("li",[t("p",[s._v("在阿里云控制台中进行部署，命名空间："),t("code",[s._v("rc-data")]),s._v(" "),t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grw68mg9ecj31hb0qx471.jpg",alt:""}})])]),s._v(" "),t("li",[t("p",[s._v("数据库：阿里云rds rc_approve")])]),s._v(" "),t("li",[t("p",[s._v("日志\n"),t("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008i3skNly1grw69xj3tij31hb0r1tig.jpg",alt:""}})])])])])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("遗憾")]),s._v(" "),t("p",[s._v("一直没能给项目起新名字...")])])])}),[],!1,null,null,null);a.default=n.exports}}]);