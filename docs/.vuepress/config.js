module.exports = {
    title: 'hello pengkiwi', // 设置网站标题
    description: 'kiwi 文档',
    keywords: '前端文档',
    head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }],
    ],
    base: '/document/',
    themeConfig: {
        repo: 'https://github.com/kiwkiw/master',
        logo: '/logo.jpg',
        displayAllHeaders: false,
        smoothScroll: true,
        nav: [
            { text: 'HOME', link: '/home' },
        ],
        sidebar: [{
                title: '解决方案', // 必要的
                path: '/word/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                sidebarDepth: 2, // 可选的, 默认值是 1
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    '/word/html', /* /word/html.html */
                    '/word/inputLimit', /* /word/inputLimit.html */
                    '/word/render', /* /word/render.html */
                ]
            },
            {
                title: '学习笔记', // 必要的
                path: '/docs/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 2, // 可选的, 默认值是 1
                children: [
                    '/docs/home', /* /docs/home.html */
                    '/study/es6', /* /docs/html.html */
                ]
            }
        ]
    }
}