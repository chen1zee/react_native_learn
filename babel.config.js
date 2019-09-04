// TODO babel 的  babel-plugin-root-import @ 与  node_modules/@XXX 包 冲突
// TODO https://reactnavigation.org/docs/en/hello-react-navigation.html
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    // ["babel-plugin-root-import", {
    //   "rootPathPrefix": "$kkk",
    //   "rootPathSuffix": "kkk"
    // }]
  ],
};
