const pluginConf = require('./config/plugin.js');
const navConf = require('./config/nav.js');


module.exports = {
    theme: 'antdocs',
    title: 'YUSHUO WIKI',
    dest: 'dist',
    markdown: {
        lineNumbers: true
    },
    plugins: pluginConf,
    themeConfig: {
        lastUpdated: 'Last updated at',
        repo: 'liuyami/ys-wiki',
        editLinks: true,
        editLinkText: '编辑此文档！',
        docsDir: 'docs',
        nav: navConf
    },
}