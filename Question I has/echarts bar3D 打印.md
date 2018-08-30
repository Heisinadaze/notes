![bar3D](https://upload-images.jianshu.io/upload_images/2941543-834e58975163f94a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 引入
```
import echarts from 'echarts'
import 'echarts-gl' // 引入3d
import SimplexNoise from 'simplex-noise' // A fast simplex noise implementation in Javascript.
import html2canvas from 'html2canvas'
```

#### html

```
    <section class="table" id="preview">
        <tr>
          <td colspan="4" style="padding: 10px; width: 50px;" class="chart-td">
            <section style="width: 100%;" class="charts-box"> // 第一个echarts
              <div class="bar3d" id="bar3d1" style="width:100%; height:400px;"></div>
            </section>
          </td>
          <td colspan="4" style="padding: 10px; width: 50px;" class="chart-td">
            <section style="width: 100%;" class="charts-box"> // 第二个echarts
              <div class="bar3d" id="bar3d2" style="width:100%; height:400px;"></div>
            </section>
          </td>
        </tr>
    </section>

    <!-- 打印显示 -->
    <aside class="print-box">
      <img :src="src" alt="">
    </aside>
```

#### js

```
  data () {
    return {
      bar3d1: null,
      bar3d2: null,
      src: ''
    }
  },
  methods: {
    print () { // 定义的打印方法
      this.$store.dispatch('inspection/print', '.print-box')
    },
    drawColumnChart () { // 第一个charts 定义
      this.bar3d1 = echarts.init(document.getElementById('bar3d1'));
      let noise = new SimplexNoise(Math.random);
      function generateData (theta, min, max) {
        let data = []
        for (let i = 0; i <= 50; i++) {
          for (let j = 0; j <= 50; j++) {
            let value = noise.noise2D(i / 20, j / 20)
            valMax = Math.max(valMax, value)
            valMin = Math.min(valMin, value)
            data.push([i, j, value * 2 + 4])
          }
        }
        return data
      }
      let valMin = Infinity;
      let valMax = -Infinity;
      let data = generateData(2, -5, 5);
      console.log(valMin, valMax);
      this.bar3d1.setOption({
        visualMap: {
          show: false,
          min: 2,
          max: 6,
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          }
        },
        xAxis3D: {
          type: 'value'
        },
        yAxis3D: {
          type: 'value'
        },
        zAxis3D: {
          type: 'value',
          max: 10,
          min: 0
        },
        grid3D: {
          axisLine: {
            lineStyle: { color: '#fff' }
          },
          axisPointer: {
            lineStyle: { color: '#fff' }
          },
          viewControl: {
            // autoRotate: true
          },
          light: {
            main: {
              shadow: true,
              quality: 'ultra',
              intensity: 1.5
            }
          }
        },
        series: [{
          type: 'bar3D',
          data: data,
          shading: 'lambert',
          label: {
            formatter: function (param) {
              return param.value[2].toFixed(1);
            }
          }
        }]
      })
    },
    drawCharts () { // 渲染到页面
      this.$nextTick(() => {
        // 由于是在一个大的table中用的，两边一样大小
        // 但是echarts会自定义宽高，不自适应，所以js定义一个宽高,每次刷新页面进来都是ok的
        let wi = this.getStyle(document.querySelector('.axis'), 'width').width.split('px')[0];
        wi = (Number(wi) - 40) / 2
        document.querySelectorAll('.chart-td').forEach(item => {
          item.style.width = wi + 'px'
          item.querySelector('.charts-box').style.width = wi + 'px'
        })
        this.drawColumnChart()
        // this.drawBarChart()
      })

      // 给打印做准备
      let _th = this
      this.$nextTick(() => {
        setTimeout(() => {
          html2canvas(document.querySelector('.table')).then(canvas => {
            _th.src = canvas.toDataURL('image/png')
          })
        }, 2000)
      })
    },
    getStyle(el, name) {　　
      if (window.getComputedStyle) {　　　
        return window.getComputedStyle(el, null);　　
      } else {　　　
        return el.currentStyle;　　
      }　
    }
  },
  // 调用
  mounted () {
    this.drawCharts()
  },
  updated () {
    this.drawCharts()
  }
```
![bar3D](https://upload-images.jianshu.io/upload_images/2941543-35fe0a29ca1746cb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





