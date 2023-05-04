(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{508:function(t,s,a){"use strict";a.r(s);var r=a(4),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[t._v("消息通知基础服务")])]),t._v(" "),a("h2",{attrs:{id:"管理页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理页面"}},[t._v("#")]),t._v(" 管理页面")]),t._v(" "),a("p",[t._v("可以通过管理页面进行通知记录的简单查询。")]),t._v(" "),a("ul",[a("li",[t._v("登录地址: "),a("a",{attrs:{href:"http://notice.tcredit.com/login.html#1",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://notice.tcredit.com/login.html#1"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("账号密码："),a("a",{attrs:{href:"http://wiki.tcredit.com/pages/viewpage.action?pageId=42107792",target:"_blank",rel:"noopener noreferrer"}},[t._v("系统密码"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"账单统计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#账单统计"}},[t._v("#")]),t._v(" 账单统计")]),t._v(" "),a("p",[t._v("需要在每个月的月初在对应的运维群中找对接人获取短信账单，然后根据系统中发送记录整理成一个表格发送给威哥，抄送飞哥和田老师。")]),t._v(" "),a("p",[t._v("目前在使用的外部通道只有两个，"),a("code",[t._v("云码通")]),t._v("和"),a("code",[t._v("易宝YOP")]),t._v("。云码通对接人为"),a("code",[t._v("梁洁")]),t._v("，易宝YOP对接人为"),a("code",[t._v("国宝")]),t._v("（微信名）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grw0qs23uaj314t0u076u.jpg",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grw0sae84yj31490u0ac7.jpg",alt:""}})]),t._v(" "),a("p",[t._v("统计sql如下(日期需要替换)：")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" ni"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notice_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'业务'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ni"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notice_code "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'业务代码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setting_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'通道名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'总数'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" notice_status "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'成功'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" notice_status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'失败'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" notice_mp t\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" notice_setting ns "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notice_setting_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notice_setting_id\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" notice_info ni "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" ni"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notice_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notice_id\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-04-01'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-05-01'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notice_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notice_setting_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("邮件内容如下："),a("br"),t._v(" "),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grw173dpyfj30ww0u0mz8.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"代码开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码开发"}},[t._v("#")]),t._v(" 代码开发")]),t._v(" "),a("p",[t._v("通知中心在设计的时候支持"),a("code",[t._v("dubbo")]),t._v("和"),a("code",[t._v("http")]),t._v("两种调用方式，目前"),a("code",[t._v("dubbo")]),t._v("方式已停用。"),a("br"),t._v("\n基本上没有新的开发需求，只要保证服务稳定即可。如果遇到问题，通过controller往下找即可。")]),t._v(" "),a("p",[t._v("http调用统一入口代码为："),a("code",[t._v("SendNotificationController")]),t._v(" "),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grw1jup5b6j31dq0u0tms.jpg",alt:""}})]),t._v(" "),a("p",[t._v("在系统启动时会启动一个线程对系统的健康进行监控，当某一类通知失败达到上限时会对通知中心的负责人进行告警。相关代码为："),a("code",[t._v("HeathWarnManager")]),t._v(" "),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grw2cfq60jj31dj0u0na6.jpg",alt:""}})]),t._v(" "),a("p",[t._v("通知中心的负责人配置位于："),a("code",[t._v("HealWarnMsgUtil")]),t._v(" "),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grw2egjjh9j61dj0u0wv102.jpg",alt:""}})]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[t._v("其实这个配置应该挪到配置文件中")])]),t._v(" "),a("p",[t._v("线上的全通道测试代码："),a("code",[t._v("OnLineAllTest")]),a("br"),t._v(" "),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grw1n13zzpj31dq0u0qia.jpg",alt:""}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("ul",[a("li",[t._v("邮件发送给多个人时，收件人使用英文分号进行分隔")]),t._v(" "),a("li",[t._v("短信发给多个人的时候，接收人使用英文逗号进行分隔")]),t._v(" "),a("li",[t._v("使用企业微信进行通知时，需要在管理页面配置别名才可以通过手机号给某人的企业微信进行通知；\n微信号为企业微信账号，需要通过企业微信管理员进行查看。\n"),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grw1uivym5j31h70q70z6.jpg",alt:""}})])])]),t._v(" "),a("h2",{attrs:{id:"同步企业微信通讯录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步企业微信通讯录"}},[t._v("#")]),t._v(" 同步企业微信通讯录"),a("Badge",{attrs:{text:"NEW"}})],1),t._v(" "),a("p",[t._v("因为短信通道总是不能成功下发短信，为了避免重要信息不能及时送达，所以在发送短信时，默认向企业微信推送消息。\n而推送企业微信消息需要配置手机号和企业微信中微信名的映射，所以编写了通讯录同步功能。")]),t._v(" "),a("h3",{attrs:{id:"短信同时推送企业微信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#短信同时推送企业微信"}},[t._v("#")]),t._v(" 短信同时推送企业微信")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsu5jqvhiaj31c00u045z.jpg",alt:""}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("下发短信时候的签名(【】里边的内容)是在云码通策略里边实现的，为了保持一致，在推送企业微信时把逻辑重写了一遍。")])]),t._v(" "),a("h3",{attrs:{id:"自动更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动更新"}},[t._v("#")]),t._v(" 自动更新")]),t._v(" "),a("p",[t._v("通过定时任务，每天的12：17去获取通讯录信息，然后将库中所有数据清空，重新插入。\n"),a("a",{attrs:{href:"https://work.weixin.qq.com/api/doc/90000/90135/90201",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1),t._v(" "),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsu5oymh7oj31c00u07am.jpg",alt:""}}),t._v(" "),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsu5puk6hfj61c00u044j02.jpg",alt:""}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("ul",[a("li",[t._v("调用接口是获取的是部门的通讯录，并且允许递归查询，所以将查询部门设置为1（天创信用）可以间接的获取到所有公司员工信息")]),t._v(" "),a("li",[t._v("12:17是我生日😃")])])]),t._v(" "),a("h3",{attrs:{id:"手动更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动更新"}},[t._v("#")]),t._v(" 手动更新")]),t._v(" "),a("p",[t._v("如有需要可以通过页面提前触发定时任务\n"),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsu5tlgwr2j31c00u0ag0.jpg",alt:""}}),t._v(" "),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1gsu5ujzubuj31c00u0dm0.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"部署运维"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署运维"}},[t._v("#")]),t._v(" 部署运维")]),t._v(" "),a("p",[t._v("提交代码后通过"),a("a",{attrs:{href:"http://jenkins.container.tcredit.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("容器的Jenkins"),a("OutboundLink")],1),t._v("进行打包，然后在"),a("code",[t._v("阿里云控制台")]),t._v("进行发版。\n"),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grw1z50zvtj31hb0qzq6z.jpg",alt:""}}),t._v(" "),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grw207qdnmj31h90qt0wh.jpg",alt:""}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("通知中心docker镜像部署的命名空间为"),a("code",[t._v("app-xiaoxinquan")])])]),t._v(" "),a("p",[t._v("线上日志查看地址："),a("br"),t._v(" "),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grw22auew7j31hb0qv45f.jpg",alt:""}})]),t._v(" "),a("p",[t._v("线上数据库（阿里云）：\n"),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grw24uhau1j31az0daq40.jpg",alt:""}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("表名")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("notice_sms")]),t._v(" "),a("td",[t._v("短信通知")])]),t._v(" "),a("tr",[a("td",[t._v("notice_email")]),t._v(" "),a("td",[t._v("邮件通知")])]),t._v(" "),a("tr",[a("td",[t._v("notice_voice")]),t._v(" "),a("td",[t._v("语音通知")])])])]),t._v(" "),a("h2",{attrs:{id:"相关资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关资料"}},[t._v("#")]),t._v(" 相关资料")]),t._v(" "),a("ul",[a("li",[t._v("百度网盘：链接:"),a("a",{attrs:{href:"https://pan.baidu.com/s/1DTuEQmCHIrPHdYFx73YdDA",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pan.baidu.com/s/1DTuEQmCHIrPHdYFx73YdDA"),a("OutboundLink")],1),t._v("  密码:1urp")])]),t._v(" "),a("p",[t._v("内容如下：\n"),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grw0jfzwb5j31600ls0w6.jpg",alt:""}})]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://wiki.tcredit.com/pages/viewpage.action?pageId=42107102",target:"_blank",rel:"noopener noreferrer"}},[t._v("账单统计sql"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://jenkins.container.tcredit.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("生产Jenkins"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://gitlab.tcredit.com/third_project/notice",target:"_blank",rel:"noopener noreferrer"}},[t._v("git地址"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://wiki.tcredit.com/pages/viewpage.action?pageId=8028802",target:"_blank",rel:"noopener noreferrer"}},[t._v("通知中心-接入"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);