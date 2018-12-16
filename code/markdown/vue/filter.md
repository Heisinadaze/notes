全局过滤器
在src目录，新建filter

在main.js中引入
```
import * as filters from './filters'

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
```

一个时间过滤器
```

/**
*
* @export
* @param {any} time 输入需要转化的时间参数
* @param {any} format 需要转化的格式
* @returns 返回处理后的时间格式
*/
export function dateFormat (time, format) {
  const between = (Date.now() - Number(time)) / 1000
  if (between < 3600 && ((between / 60) < 1)) {
    return '刚刚'
  } else if (between < 3600) {
    return pluralize(~~(between / 60), '分钟')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), '小时')
  }
  if (!time) return null
  var date = new Date(time)
  var o = {
    'M+': date.getMonth() + 1, // month
    'd+': date.getDate(), // day
    'h+': date.getHours(), // hour
    'm+': date.getMinutes(), // minute
    's+': date.getSeconds(), // second
    'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
    'S': date.getMilliseconds() // millisecond
  }
  let sss = format
  if (/(y+)/.test(format)) {
    if (new Date().getFullYear() !== date.getFullYear()) {
      format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    } else {
      format = format.replace(RegExp.$1, '')
    }
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  if (/(y+)/.test(sss) && new Date().getFullYear() === date.getFullYear()) {
    format = format.substr(1)
  }
  return format
}

function pluralize (time, label) {
  return time + label + '以前'
}

```

只在某个文件中的过滤器
```
  filters: {
    chnNum (val) {
      if (val === 10) return '第十节'
      var chnNumChar = {
        0: '早读',
        1: '第一节',
        2: '第二节',
        3: '第三节',
        4: '第四节',
        5: '第五节',
        6: '第六节',
        7: '第七节',
        8: '第八节',
        9: '第九节'
      }
      return chnNumChar[val]
    }
  }
```

![image.png](http://upload-images.jianshu.io/upload_images/2941543-5ef7b8a152426070.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 根据数字里面对象的某个属性，过滤该数组




![image.png](http://upload-images.jianshu.io/upload_images/2941543-637e4461dc09b9c9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

