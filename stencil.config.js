const sass = require("@stencil/sass");

exports.config = {
  copy: [
    {
      src: "../node_modules/firebase/firebase-*.js",
      dest: "assets/js"
    }
  ],
  outputTargets: [
    {
      type: "www",
      serviceWorker: false,
      resourcesUrl: process.argv.indexOf('--cordova') >= 0 ? "build/app" : false
    }
  ],
  globalScript: "src/global/app.ts",
  globalStyle: "src/global/app.css",
  plugins: [sass()],
  enableCache: false
};

exports.devServer = {
  root: "www",
  watchGlob: "**/**"
};
