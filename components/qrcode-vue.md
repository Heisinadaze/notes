
1. install

`cnpm i --save qrcode.vue`

2. import and use

```
import QrcodeVue from 'qrcode.vue';

components: {
  QrcodeVue
}


<qrcode-vue :value="url"></qrcode-vue>
```

|prop	|type	|default value	|expain|
|-|-|-|-|
|value	| String|	''|	qrcode value|
|className|	String|	''|	qrcode element className|
|size|	Number|	100	|qrcode element size|
|level|	String|	L	|Error correction level ('L', 'M', 'Q', 'H')|
|background|	String|	#fff|	qrcode background color|
|foreground	|String|	#000|	qrcode color|









