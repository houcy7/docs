module.exports =
    {
        // -- 个人信息 start --
        "type": "blog",
        "author": "侯春宇",
        "authorAvatar": "/avatar.png",
        "logo": "/logo.png",
        "startYear": "2017",
        // "record": "你的备案号 ", //icp备案
        // -- 个人信息 end --


        // -- 博客设置 start --
        "title": "工作文档",
        "description": "努力不一定成功，但放弃一定失败",
        "dest": "dist",
        'subSidebar': 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        "search": false,
        "searchMaxSuggestions": 10,
        "lastUpdated": "最后更新时间",
        // "huawei": true, //首页出现华为文案
        "codeTheme": "tomorrow",
        // -- 博客设置 end --

        // 自我介绍 start
        "info": "这家伙不懒，也只留下了一句话。",
        "socials": {
            "github": "https://github.com/houcy7", //github
            "gitlub": false, //gitlub
            "gitee": false, //gitee
            "jianshu": false, //简书
            "zhihu": false, //知乎
            "toutiao": false, //头条
            "juejin": false, //掘金
            "segmentfault": false, //思否
            "csdn": false, //CSDN
            "wechat": "https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008eGmZEly1goaqpuypj6j30tc12l0wx.jpg", //微信
            "qq": "https://image.baidu.com/search/down?url=https://tva1.sinaimg.cn/large/008eGmZEly1goaqpkhqyjj30u01hddlt.jpg" //QQ
        },
        // 自我介绍 end
        noFoundPageByTencent: false,

        // 评论
        "valineConfig": {
            "appId": "LVsgxsL3e7scdUrYsMEbLz5i-gzGzoHsz",// your appId
            "appKey": "tCw25P6ucwIsd3Jrd0GwvUSv", // your appKey
            "avatar": "", //
            "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
            "requiredFields": ['nick', 'mail'], //设置必填项
        },
        // 密钥
        // "keyPage": {
        //     keys: ['e10adc3949ba59abbe56e057f20f883e'], // 1.3.0 版本后需要设置为密文
        //     color: '#42b983', // 登录页动画球的颜色
        //     lineColor: '#42b983' // 登录页动画线的颜色
        // }

    };
