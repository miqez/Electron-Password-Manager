const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Electron Password Manager';

        return args;
      });

    config
      .entry('app')
      .clear()
      .add('./app/main.js')
      .end();

    config.resolve.alias.set('@',
      path.join(__dirname, 'app'),
    );

    config.resolve.alias.set('@root',
      path.join(__dirname),
    );
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import '@/scss/_variables.scss';
          @import '@/scss/_mixins.scss';
          @import '@/scss/_helpers.scss';
        `,
      },
    },
  },
};