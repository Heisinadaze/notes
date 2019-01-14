
[echarts官网](http://www.echartsjs.com)

**Question 1： 数据堆叠**

数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加。

![数据堆叠](http://cdn.jsan.top//echarts/20181114181426.png)

![数据堆叠](http://cdn.jsan.top//echarts/20181114181426%20%281%29.png)

删除这个属性，就会正常显示；

**Question 2： x轴显示倾斜**

```
        xAxis: {
            type: 'category',
            axisLabel: {
                rotate: 30
            },
        },
```

**Question 3： 修改标题**

```
        title: {
            text: ''
        },
```

**Question 4： x轴 是否从起始位置开始**

```
    xAxis: {
        boundaryGap: false, // 从起始位置
    },
```

**Question 5： 多条线名称**

图例组件展现了不同系列的标记，颜色和名字。可以通过点击图例控制哪些系列不显示。

```
    legend: {
        data:['邮件营销','联盟广告']
    },
    
    
    需要和series中name对应
  
```

**Question 6： GL**

http://echarts.baidu.com/examples/editor.html?c=bar3d-simplex-noise&gl=1&theme=dark




**Question 7： echart的y轴设置最小值有两种方式**


1.min可以设置为特殊值‘dataMin’，此时取数据在该轴上的最小值作为最小刻度。

```
yAxis: {

    min: 'dataMin' // 最小值

},
```


2.scale设置为true后，坐标刻度不会强制包含零刻度。（注意：只在数值轴中（type:'value'）中有效）

```
yAxis: {

    scale:true

},
```

**Question 8： 设置折现和点的颜色**

```
        series: [
            {
                name:'最大值',
                type:'line',
                itemStyle : {  
                  normal: {
                    color:'#f00',  //圈圈的颜色
                    lineStyle:{  
                        color:'#f00'  //线的颜色
                    }
                  }
                },
                data:[6150, 6150, 6150, 6150, 6150, 6150, 6150]
            }
         ]
```

**Question 9： 数据太多，设置缩放点**

![echarts](http://cdn.jsan.top//echarts/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190114140115.png)

```
        yAxis: {
        },
        dataZoom: [{
            startValue: '2014-06-01' // 开始的点
        }, {
            type: 'inside'
        }],
```









