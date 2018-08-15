
new `webpack.dll.conf.js`
```
// const path = require("path");
// const webpack = require("webpack");
// const pkg = require('../package.json'); // 引入package.json
// module.exports = {
//     entry: {
//         vendor: Object.keys(pkg.dependencies) // 遍历package.json的所有依赖包
//     },
//     output: {
//         path: path.join(__dirname, 'dll'), // 生成的文件存放路径
//         filename: '[name].dll.js', // 生成的文件名字(默认为vendor.dll.js)
//         library: '[name]_library'  // 生成文件的映射关系，与下面DllPlugin中配置对应
//     },
//     node: {
//       fs: 'empty'
//     },
//     plugins: [
//         new webpack.DllPlugin({
//             // 会生成一个json文件，里面是关于dll.js的一些配置信息
//             path: path.join(__dirname, 'dll', '[name]-manifest.json'),
//             name: '[name]_library', // 与上面output中配置对应
//             context: __dirname // 上下文环境路径（必填，为了与DllReferencePlugin存在与同一上下文中）
//         })
//     ]
// };

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const pkg = require('../package.json');

module.exports = {
    entry: {
        vendor: Object.keys(pkg.dependencies)
    },
    output: {
        path: path.join(__dirname, '../www/dll'), // 生成的文件存放路径
        filename: '[name].dll.js', // 生成的文件名字(默认为vendor.dll.js)
        library: '[name]_[chunkhash]' // 生成文件的映射关系，与下面DllPlugin中配置对应
    },
    plugins: [
        new webpack.DllPlugin({
            // 会生成一个json文件，里面是关于dll.js的一些配置信息
            path: path.join(__dirname, '../www/dll', '[name]-manifest.json'),
            name: '[name]_[chunkhash]', // 与上面output中配置对应
            context: __dirname // 上下文环境路径（必填，为了与DllReferencePlugin存在与同一上下文中）
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new CleanWebpackPlugin(['dll'])
    ]
}
```

```
// const path = require("path");
// const webpack = require("webpack");
// const pkg = require('../package.json'); // 引入package.json
// module.exports = {
//     entry: {
//         vendor: Object.keys(pkg.dependencies) // 遍历package.json的所有依赖包
//     },
//     output: {
//         path: path.join(__dirname, 'dll'), // 生成的文件存放路径
//         filename: '[name].dll.js', // 生成的文件名字(默认为vendor.dll.js)
//         library: '[name]_library'  // 生成文件的映射关系，与下面DllPlugin中配置对应
//     },
//     node: {
//       fs: 'empty'
//     },
//     plugins: [
//         new webpack.DllPlugin({
//             // 会生成一个json文件，里面是关于dll.js的一些配置信息
//             path: path.join(__dirname, 'dll', '[name]-manifest.json'),
//             name: '[name]_library', // 与上面output中配置对应
//             context: __dirname // 上下文环境路径（必填，为了与DllReferencePlugin存在与同一上下文中）
//         })
//     ]
// };

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const pkg = require('../package.json');

module.exports = {
    entry: {
        vendor: Object.keys(pkg.dependencies)
    },
    output: {
        path: path.join(__dirname, '../www/dll'), // 生成的文件存放路径
        filename: '[name].dll.js', // 生成的文件名字(默认为vendor.dll.js)
        library: '[name]_[chunkhash]' // 生成文件的映射关系，与下面DllPlugin中配置对应
    },
    plugins: [
        new webpack.DllPlugin({
            // 会生成一个json文件，里面是关于dll.js的一些配置信息
            path: path.join(__dirname, '../www/dll', '[name]-manifest.json'),
            name: '[name]_[chunkhash]', // 与上面output中配置对应
            context: __dirname // 上下文环境路径（必填，为了与DllReferencePlugin存在与同一上下文中）
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new CleanWebpackPlugin(['dll'])
    ]
}

```

edit `webpack.dev.conf.js`

```
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

    new UglifyJSPlugin(),
    new webpack.DllReferencePlugin({
      context: __dirname, // 与DllPlugin中的那个context保持一致
      manifest: require('./dll/vendor-manifest.json') // 下面这个地址对应webpack.dll.config.js中生成的那个json文件的路径
    })
```

edit `package.json`

```
"scripts": {
    "dll": "webpack -p --config ./build/webpack.dll.config.js --progress --profile --colors",
}
```

edit `index.html`

```
  <script src="./dll/vendor.dll.js"></script>
```

`npm run dll`

`npm run build`







