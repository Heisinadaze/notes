
### lint:css

1. 添加`.stylelintrc`文件

```
{
  "processors": ["stylelint-processor-html"],
  "extends": "stylelint-config-standard"
}
```

2. 安装包

```
npm install stylelint -D
npm install stylelint-processor-html -D
npm install stylelint-config-standard -D
npm install stylelint-webpack-plugin -D

npm install stylelint-order -D // 书写顺序插件
```

> 安装失败时：引入当前文件夹下文件夹到`node_modules`

3. 修改`build/webpack.dev.conf.js`文件

```
const StylelintPlugin = require('stylelint-webpack-plugin')


plugins: [
  //...
  new HtmlWebpackPlugin({
    //...
  }),
  new StylelintPlugin({
    files: ['src/**/*.vue']
  })
]

```

或把当前文件夹下同名文件进行覆盖

4. 开发时执行`npm run dev`

<over>

5. 运行检测

`package.json`文件添加命令
```
"script": {
  "lint:css": "stylelint '**/*.vue'"
}
```

运行检测
`npm run dev`

