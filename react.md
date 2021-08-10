01- react中的受控组件和非受控组件的实现方式？
	受控组件：表单元素能够受到state里面的数据进行控制
	将state里面的数据绑定给表单元素，给表单元素注册onChange事件，通过onChange将表单元素的值同步给state
	非受控组件：通过创建ref，从而获取到表单元素，通过表单元素的value方式获取到输入框的值

02 - react中实现组件通讯的方式
	父传子：通过属性绑定的形式进行传递，子组件通过props形式进行接收
	子传父：实际上是通过父组件给子组件传了一个回调函数，子组件通过调用父组件的回调函数，通过传参的形式进行传递
	兄弟组件：将传递的数据和修改数据的方法，提到就近的父组件上面，通过父组件传值，传递数据和方法，传递给对应的兄弟组件
	跨组件传值：创建一个context，通过provider和consumer分别进行传值和接收值

03 - 在使用props传值的时候，如何来实现校验传递的值的类型？
	通过props-types这个插件来实现props传递值的类型校验

04 - 在哪个阶段可以调用setState？
	在constructor中：在constructor中不允许调用setState，也就是在组件挂载之前不允许调用setState
	render生命周期函数中能否调用setState？
	一旦调用setState就会重新调用render，调用render就又调用了setState，进入递归循环
	componentDidMount：可以调用的

05 - （子组件没有用到父组件的数据）当父组件的数据发生变化，子组件会重新触发render吗？
	会，组件会更新，不会重新加载
	父组件调用setState的时候，父组件本身，及其所有的子组件的render都会重新执行，但是render重新执行不代表页面会重新渲染，render这个阶段会进行虚拟dom的比较的，然后进行按需更新

06 - setState更新数据是同步还是异步？
	setState本身是同步的，但在同一生命周期内是异步的，多个setState修改会合并成一个回调函数

07- 为什么建议传递给 setState 的参数是一个 callback 而不是一个对象
	因为 this.props 和 this.state 的更新可能是异步的，不能依赖它们的值去计算下一个 state。

08- diff算法又是怎么去对比的：tree diff、component diff、element diff
	把树形结构按照层级分解，只比较同级元素。
	列表结构的每个单元添加唯一的 key 属性，方便比较。
	React 只会匹配相同 class 的 component（这里面的 class 指的是组件的名字）
	合并操作，调用 component 的 setState 方法的时候, React 将其标记为 dirty.到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制.
	选择性子树渲染。开发人员可以重写 shouldComponentUpdate 提高 diff 的性能。

09- createElement 和 cloneElement 有什么区别？
	React.createElement(
		type,
		[props],
		[...children]
	)
	React.cloneElement(
		element, // element是一个react元素
		[props],
		[...children]
	)

10- React 中有三种构建组件的方式
	React.createClass()、ES6 class 和无状态函数。

11- React Fiber
	v16版本新增的功能，React Fiber是对核心算法的一次重新实现
	之前更新是同步的，React Fiber把更新过程分成多个小片，每次执行完一个小片后，会查看是否更高级别的任务，有的话去执行，执行完再继续执行其他小片
	进程（Process）和线程（Thread），纤维 Fiber，意思比线程还要精密的划分
	Fiber分为两个阶段(Phase)：第一个阶段Reconciliation Phase和第二阶段Commit Phase。在第一阶段Reconciliation Phase，React Fiber会找出需要更新哪些DOM，这个阶段是可以被打断的；但是到了第二阶段Commit Phase，那就一鼓作气把DOM更新完，绝不会被打断。
	第一阶段可能会调用下面这些生命周期函数：componentWillMount，componentWillReceiveProps，shouldComponentUpdate，componentWillUpdate
	第二阶段可能会调用下面这些生命周期函数：componentDidMount，componentDidUpdate，componentWillUnmount
	也就是说第一阶段的函数会被打断，返回之后重新执行，也就是说会多次执行



