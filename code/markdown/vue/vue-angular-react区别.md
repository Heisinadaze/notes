一、关于数据绑定

* Angular 
使用双向绑定即：界面的操作能实时反映到数据，数据的变更能实时展现到界面。

> 原理：
$scope变量中使用脏值检查来实现。
$scope.$watch函数，监视一个变量的变化。函数有三参数，”要观察什么”，”在变化时要发生什么”,以及你要监视的是一个变量还是一个对象。
使用ng-model时，你可以使用双向数据绑定。 
调用$scope.$watch时只为它传递了一个参数，无论作用域中的什么东西发生了变化，这个函数都会被调用。在ng-model中，这个函数被用来检查模型和视图有没有同步，如果没有同步，它将会使用新值来更新模型数据。

双向绑定的三个重要方法：

$scope.$apply()

$scope.$digest()

$scope.$watch()

（脏检测）是用来检查绑定的scope中的对象的状态的，例如，在js里创建了一个对象，并且把这个对象绑定在scope下，这样这个对象就处于digest loop中，loop通过遍历这些对象来发现他们是否改变，如果改变就会调用相应的处理方法来实现双向绑定

* Vue 也支持双向绑定，默认为单向绑定，数据从父组件单向传给子组件。在大型应用中使用单向绑定让数据流易于理解。

脏检测的利弊
和ember.js等技术的getter/setter观测机制相比（优）： 
getter/setter当每次对DOM产生变更，它都要修改DOM树的结构，性能影响大，Angular会把批量操作延时到一次更新，性能相对较好。

和Vue相比（呈现劣势）
Vue.js 有更好的性能，并且非常非常容易优化，因为它不使用脏检查。Angular，当 watcher 越来越多时会变得越来越慢，因为作用域内的每一次变化，所有 watcher 都要重新计算。并且，如果一些 watcher 触发另一个更新，脏检查循环（digest cycle）可能要运行多次。 Angular 用户常常要使用深奥的技术，以解决脏检查循环的问题。有时没有简单的办法来优化有大量 watcher 的作用域。Vue.js 则根本没有这个问题，因为它使用基于依赖追踪的观察系统并且异步列队更新，所有的数据变化都是独立地触发，除非它们之间有明确的依赖关系。唯一需要做的优化是在 v-for 上使用 track-by。

React-单向数据流
MVVM流的Angular和Vue，都是通过类似模板的语法，描述界面状态与数据的绑定关系，然后通过内部转换，把这个结构建立起来，当界面发生变化的时候，按照配置规则去更新相应的数据，然后，再根据配置好的规则去，从数据更新界面状态。
React推崇的是函数式编程和单向数据流：给定原始界面（或数据），施加一个变化，就能推导出另外一个状态（界面或者数据的更新）。

React和Vue都可以配合Redux来管理状态数据。

二、 视图渲染

* AngularJS的工作原理是:HTML模板将会被浏览器解析到DOM中, DOM结构成为AngularJS编译器的输入。AngularJS将会遍历DOM模板, 来生成相应的NG指令,所有的指令都负责针对view(即HTML中的ng-model)来设置数据绑定。因此, NG框架是在DOM加载完成之后, 才开始起作用的

*  React 的渲染建立在 Virtual DOM 上——一种在内存中描述 DOM 树状态的[数据结构](http://lib.csdn.net/base/datastructure)。当状态发生变化时，React 重新渲染 Virtual DOM，比较计算之后给真实 DOM 打补丁。

  **Virtual DOM** 提供了函数式的方法描述视图，**它不使用数据观察机制，每次更新都会重新渲染整个应用，因此从定义上保证了视图与数据的同步**。它也开辟了 [JavaScript](http://lib.csdn.net/base/javascript) 同构应用的可能性。

 在超大量数据的首屏渲染速度上，React 有一定优势，因为 Vue 的渲染机制启动时候要做的工作比较多，而且 React 支持服务端渲染。
  
 React 的 Virtual DOM 也需要优化。复杂的应用里可以选择 1. 手动添加 shouldComponentUpdate 来避免不需要的 vdom re-render；2. Components 尽可能都用 pureRenderMixin，然后采用 Flux 结构 + Immutable.js。其实也不是那么简单的。相比之下，Vue 由于采用依赖追踪，默认就是优化状态：动了多少数据，就触发多少更新，不多也不少。

 React 和 Angular 2 都有服务端渲染和原生渲染的功能。

 Vue.js 不使用 Virtual DOM 而是使用真实 DOM 作为模板，数据绑定到真实节点。Vue.js 的应用环境必须提供 DOM。Vue.js 有时性能会比 React 好**，而且几乎不用手工优化。

三 、性能与优化

   性能方面，这几个主流框架都应该可以轻松应付大部分常见场景的性能需求，区别在于可优化性和优化对于开发体验的影响。Vue 的话需要加好 track-by 。React 需要 shouldComponentUpdate 或者全面 Immutable，Angular 2 需要手动指定 change detection strategy。从整体趋势上来说，浏览器和手机还会越变越快，框架本身的渲染性能在整个前端性能优化体系中，会渐渐淡化，更多的优化点还是在构建方式、缓存、图片加载、网络链路、HTTP/2 等方面。


