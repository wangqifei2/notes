01-js基本数据类型
	undefined、null、number、boolean、string、object

01- 防抖和节流
	防抖:触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
	思路:每次触发事件时都取消之前的延时调用方法
	节流:高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
	思路:每次触发事件时都判断当前是否有等待执行的延时函数

02- Set、Map、WeakSet 和 WeakMap 的区别
	Set:成员唯一、无序且不重复.只有键值，没有键名.可以遍历，方法有：add、delete、has
	WeakSet:成员都是对象.成员都是弱引用，可以被垃圾回收机制回收，可以用来保存DOM节点，不容易造成内存泄漏.不能遍历，方法有add、delete、has
	Map:本质上是键值对的集合，类似集合.可以遍历，方法很多可以跟各种数据格式转换
	WeakMap:只接受对象作为键名(null除外)，不接受其他类型的值作为键名.键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的.不能遍历，方法有get、set、has、delete

03- 检测变量的类型
	typeof A
	undefined、number、boolean、string、object、function  和基础类型比，少null，多function。
	原理是比较unicode码后几位，null的后几位和object相同，认为是object，算是一个语言bug。
	内部带[[call]]方法的object会返回function
	A instance B
	A是否继承来在B,返回boolean值

04- Objec.defineProperty和Proxy?

05- 宏任务和微任务？
