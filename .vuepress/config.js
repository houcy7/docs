const themeConfig = require('./config/theme/index');

module.exports = {
    "title": "工作文档",
    "description": "努力不一定成功，但放弃一定失败",
    "dest": "dist",
    "head" : [
        ["link", {"rel": "icon", "href": "/favicon.ico"}],
        ["meta", {"name": "viewport", "content": "width=device-width,initial-scale=1,user-scalable=no"}],
        ['script', {}, `var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?a46ad829404b742959db51bb648db536";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();`]
    ],
    locales:{
        "/": {
            "lang": 'zh-CN'
        }
    },
    themeConfig,
    "markdown": {
        "lineNumbers": false,
        extendMarkdown: md => {
            md.use(require('markdown-it-task-lists'), {enabled: true});
        }
    },
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
};
