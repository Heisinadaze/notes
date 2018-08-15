1. 新建elementUI.js  

```
import Vue from 'vue';
import { 
    Row,
    Col,
    Button,
    Input, 
    Dialog,
    Form,
    FormItem,
    Loading,
    Checkbox,
    Tooltip
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default function elementui() {
    Vue.use(Row);
    Vue.use(Col);
    Vue.use(Input);
    Vue.use(Button);
    Vue.use(Dialog);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Loading);
    Vue.use(Checkbox);
    Vue.use(Tooltip);
}
```

2. main.js 

```
import elementui from './utils/elementUI';

elementui()
```





