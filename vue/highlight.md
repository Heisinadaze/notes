
新建`.js`文件
```
import Hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
let Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    // let blocks = el.querySelectorAll('pre code')
    // blocks.forEach((block) => {
    //   Hljs.highlightBlock(block)
    // })
    Hljs.initHighlightingOnLoad()
  })
}

export default Highlight

```

`main.js`中

```
import Highlight from '<path>/highlight'
Vue.use(Highlight)
```





