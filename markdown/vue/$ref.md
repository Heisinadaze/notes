
![父元素中](http://upload-images.jianshu.io/upload_images/2941543-4dc3d7d78da51d28.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
<template>
    <div id="app">
        <el-button @click="click" >调用子元素</el-button>
        <child ref="children"/><!--子组件-->
    </div>
</template>

<script>
import child from './compponents/child'
export default {
    name: 'app',
    components: {
        child
    },
    methods: {
        click () {
            this.$refs.children.childFn('父元素传递过来的数据')
        }
    }
}

</script>
```



![子组件中](http://upload-images.jianshu.io/upload_images/2941543-f4d5afdc615f6251.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


```
<template>
    <div id="hello">
       
    </div>
</template>

<script>
export default {
    name: 'hello',
    methods: {
        childFn (msg) {
            console.log(msg)
        }
    }
}

</script>
```
