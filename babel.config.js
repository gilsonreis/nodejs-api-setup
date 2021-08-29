module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['module-resolver', {
      alias: {
        '@controllers': './src/App/Controllers',
        '@models': './src/App/Models',
        '@config': './src/Config',
        '@helpers': './src/Helpers',
        '@services': './src/App/Services',
        '@repositories': './src/App/Repositories',
        '@middlewares': './src/App/Middlewares',
        '@validators': './src/App/Validators',
        '@routers': './src/Routers',
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
