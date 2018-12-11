
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

**Question 2： 修改标题**

```
        title: {
            text: ''
        },
```

**Question 3： x轴 是否从起始位置开始**

```
    xAxis: {
        boundaryGap: false, // 从起始位置
    },
```

**Question 4： 多条线名称**

图例组件展现了不同系列的标记，颜色和名字。可以通过点击图例控制哪些系列不显示。

```
    legend: {
        data:['邮件营销','联盟广告']
    },
    
    
    需要和series中name对应
  
```

**Question 5： GL**

http://echarts.baidu.com/examples/editor.html?c=bar3d-simplex-noise&gl=1&theme=dark














