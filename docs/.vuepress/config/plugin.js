const moment = require('moment');
moment.locale("zh-cn");

module.exports = {

    '@vuepress/back-to-top': true,

    '@vuepress/medium-zoom': {
        selector: '.content__default img',
    },

    '@vuepress/last-updated': {
        transformer: (timestamp) => moment(timestamp).utcOffset("+08:00").format('YYYY-MM-DD HH:mm:ss')
    },

    "vuepress-plugin-auto-sidebar": {}
};