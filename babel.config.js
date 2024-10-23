module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env', {targets: {node: 'current'}}],
  ],
  plugins: [
    '@babel/plugin-transform-class-static-block',
    'module-resolver',
    ['@babel/plugin-proposal-decorators', {version: 'legacy'}],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
  ],
};
