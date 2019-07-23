module.exports = {
  webpack: config => {
    config.node = {
      fs: 'empty'
    };

    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    );

    return config;
  },
  exportPathMap: () => ({
    '/': { page: '/', query: { lang: 'en' } },
    '/ch': { page: '/', query: { lang: 'ch' } },
    '/en': { page: '/', query: { lang: 'en' } },
    '/jp': { page: '/', query: { lang: 'jp' } },
    '/kr': { page: '/', query: { lang: 'kr' } },
    '/vn': { page: '/', query: { lang: 'vn' } },
    '/ms': { page: '/', query: { lang: 'ms' } },
    '/id': { page: '/', query: { lang: 'id' } },
  }),
}
