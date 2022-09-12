const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use(
        createProxyMiddleware('/animals', {
             target: 'https://api.petfinder.com/v2',
             changeOrigin: true
        })
    )
}
