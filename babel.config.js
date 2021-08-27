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
    ['module-resolver', {
      alias: {
        '@controllers': './src/App/Controllers',
        '@models': './src/App/Models',
        '@config': './src/Config',
        '@helpers': './src/Helpers',
        '@services': './src/App/Services',
        '@repositories': './src/App/Repositories'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
