`js`  `以太坊` 

操作以太坊的js

> 推荐使用`google chrome`，安装扩展程序`main metaMask`(一个网页钱包)
![小狐狸](https://upload-images.jianshu.io/upload_images/2941543-ce6f35d96e211a76.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
前期测试可以使用测试环境
![小狐狸](https://upload-images.jianshu.io/upload_images/2941543-d973f16696de6ee4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



#### 一、 安装包 / 引入js

```
// node
npm i web3

// yarn
yarn add web3

// cdn
<script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js/dist/web3.min.js"></script>
```

#### 二、 使用（vue）

1. 引入`web3`对象

```
import Web3 from 'web3'

// new一个实例对象，并设置服务器
// var web3 = new Web3('http://localhost:8545');
// 或
var web3 = new Web3(Web3.givenProvider || 'ws://remotenode.com:8546');
```

2. 设置自己的默认账户，即有些方法的`from`参数

```
web3.eth.defaultAccount = '0x0d97b58930abdc14ac8c2aa80ab8e82928c6def1';

// 在以下方法中如果没有指定from属性， 将使用该属性的值作为默认的from
// web3.eth.sendTransaction()
// web3.eth.call()
// new web3.eth.Contract() -> myContract.methods.myMethod().call()
// new web3.eth.Contract() -> myContract.methods.myMethod().send()
```

3. 向以太坊提交一个交易

```
    var code = "603d80600c6000396000f3007c01000000000000000000000000000000000000000000000000000000006000350463c6888fa18114602d57005b6007600435028060005260206000f3";
    var from = '0x0d97b58930abdc14ac8c2aa80ab8e82928c6def1'
    var to = '0x81b7e08f65bdf5648606c89998a9cc8164397647'
    web3.eth.sendTransaction({data: code, from, to}, function(err, address) {
      if (err) {
        console.log(err)
        return
      }
      console.log(address);
    });
```

> from: 交易发送方的账户地址
> to: 目标地址
> value: 交易值
> data 可以是包含合约方法数据的ABI字符串，或者是合约创建交易中的初始化代码
> callback: 第一个参数为错误信息，第二个参数为结果
> 返回值：返回一个32字节的交易哈希值
> 成功调用，会弹出`metamask`弹框，如果账户没有余额，会出现充值页面
![小狐狸](https://upload-images.jianshu.io/upload_images/2941543-ce94eca3aa04dfc0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
正常会出现的页面为
![小狐狸](https://upload-images.jianshu.io/upload_images/2941543-86e19b059cfc3c34.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



[中文文档地址](http://cw.hubwiz.com/card/c/web3.js-1.0/1/2/19/)

[git地址](https://github.com/ethereum/web3.js/tree/master)


