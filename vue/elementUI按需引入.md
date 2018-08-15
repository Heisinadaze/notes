1. 新建elementUI.js  

```
import Vue from 'vue';
import { 
    Row,
    Col,
    Button,
    Input, 
    Select, 
    Carousel,
    CarouselItem,
    Collapse,
    CollapseItem,
    Dialog,
    Progress,
    Card, 
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



export default function elementui() {
    Vue.use(Row);
    Vue.use(Col);
    Vue.use(Input);
    Vue.use(Button);
    Vue.use(Select);
    Vue.use(Carousel);
    Vue.use(CarouselItem);
    Vue.use(Collapse);
    Vue.use(CollapseItem);
    Vue.use(Dialog);
    Vue.use(Progress);
    Vue.use(Card);

}
```

2. main.js 

```
import elementui from './utils/elementUI';

elementui()
```





