// 处理跨域
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://www.jianshu.com/asimov',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    );
    app.use(
        createProxyMiddleware('/zhi', {
            target: 'https://news-at.zhihu.com/api/4',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/zhi': ''
            }
        })
    );
};
