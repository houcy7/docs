(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{514:function(t,r,a){"use strict";a.r(r);var e=a(4),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容"}},[t._v("#")]),t._v(" 内容")]),t._v(" "),a("p",[a("code",[t._v("企业报告")]),t._v("的导出分为"),a("code",[t._v("pdf版本")]),t._v("和"),a("code",[t._v("word版本")]),t._v("。"),a("code",[t._v("pdf版本")]),t._v("的实现原理为将调用接口的响应结果渲染到页面上，通过只有内核的浏览器组件模拟打印，\n保存pdf并下载；word版本与之相似，将调用结果填充到"),a("code",[t._v("word模板（xml格式）")]),t._v("中，通过"),a("code",[t._v("freemarker")]),t._v("生成文件并下载。")]),t._v(" "),a("ul",[a("li",[t._v("账号密码："),a("a",{attrs:{href:"http://wiki.tcredit.com/pages/viewpage.action?pageId=42107792",target:"_blank",rel:"noopener noreferrer"}},[t._v("系统密码"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("登录地址： "),a("a",{attrs:{href:"https://api.ypcredit.com/norns/service/cas/doLogin?service=https://api.ypcredit.com/odin/user/sso",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://api.ypcredit.com/norns/service/cas/doLogin?service=https://api.ypcredit.com/odin/user/sso"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"pdf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pdf"}},[t._v("#")]),t._v(" pdf")]),t._v(" "),a("ul",[a("li",[t._v("后台接口："),a("code",[t._v("ReportQueryController")]),t._v(" "),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx1vncjnij31dj0u0wws.jpg",alt:""}})]),t._v(" "),a("li",[t._v("pdf_url： http://api.ypcredit.com/odin/user/report/query/pdfIndex?seqNumToken=seqnum_token")]),t._v(" "),a("li",[t._v("pdf_service： http://pdf.tcredit.com/printpdf/html2Pdf?url=pdf_url&fileName=filename&flag=1")])]),t._v(" "),a("h3",{attrs:{id:"word"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#word"}},[t._v("#")]),t._v(" word")]),t._v(" "),a("ul",[a("li",[t._v("后台接口：\n"),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx22lpj3rj31dj0u0arv.jpg",alt:""}})]),t._v(" "),a("li",[t._v("模板文件和工具类\n"),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx23eoaozj31dj0u0kaj.jpg",alt:""}})])]),t._v(" "),a("h2",{attrs:{id:"批量导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#批量导出"}},[t._v("#")]),t._v(" 批量导出")]),t._v(" "),a("p",[t._v("企业报告的导出分为"),a("code",[t._v("获取公司相关信息")]),t._v(","),a("code",[t._v("调用企业报告接口")]),t._v(","),a("code",[t._v("生成文件")]),t._v("三个步骤。前两个步骤均需要调用接口，调用的时候使用"),a("code",[t._v("bgtest")]),t._v("这个账号\n的"),a("code",[t._v("appId")]),t._v("和"),a("code",[t._v("tokenKey")]),t._v("调用；拿到结果后调用"),a("code",[t._v("本地方法")]),t._v("生成文件进行保存。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("main\n"),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx2e35grij31dj0u04in.jpg",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("获取公司信息\n"),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx2ek4ojrj31dj0u07nx.jpg",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("调用企业报告\n"),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx2f6ybipj31dj0u01aq.jpg",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("导出报告\n"),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx2fk6x7cj31dj0u0k9x.jpg",alt:""}})])]),t._v(" "),a("li",[a("p",[t._v("导出结果示例")]),t._v(" "),a("ul",[a("li",[t._v("文件列表\n"),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx2jc0s22j31c00u04qp.jpg",alt:""}})]),t._v(" "),a("li",[t._v("执行时间\n"),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx2k7j0hoj31c00u0qka.jpg",alt:""}})]),t._v(" "),a("li",[t._v("执行结果\n"),a("img",{attrs:{src:"https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008i3skNly1grx2lgpe5sj31c00u0txx.jpg",alt:""}})])])])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",[t._v("导出前需要确认账号余额或授信额度是否足够。")])]),t._v(" "),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qq_14873105/article/details/51394026",target:"_blank",rel:"noopener noreferrer"}},[t._v("最好用Html转pdf的工具——wkhtmltopdf"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://freemarker.foofun.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("freemarker在线手册"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=s.exports}}]);