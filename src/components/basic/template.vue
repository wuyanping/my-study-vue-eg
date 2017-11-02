<template>
	<div id="template">
	<template v-if="ok">
	  	<h1>Title</h1>
	  	<p>Paragraph 1</p>
	  	<p>Paragraph 2</p>
	</template>
	<pre>
		v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
相比之下， v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
一般来说， v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件不太可能改变，则使用 v-if 较好。
	</pre>
	<h3>当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。</h3>
	<button @click="changeItems">改变items</button>
	<ul>
		<li v-for="(item,i) in items">{{item}}--{{i}}</li>
	</ul>
	<h3>数组的变异方法，将会触发视图更新</h3>
	<ul>
		<li>push()</li>
		<li>pop()</li>
		<li>shift()</li>
		<li>unshift()</li>
		<li>splice()</li>
		<li>sort()</li>
		<li>reverse()</li>
	</ul>
	<h3>重塑数组</h3>
	<p>filter(), concat(), slice() 。这些不会改变原始数组，但总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组：</p>
	<pre>
		example1.items = example1.items.filter(function (item) {
  			return item.message.match(/Foo/)
		})
	</pre>
	<h1>过滤器</h1>
	<p>有时，我们想要显示一个数组的过滤或排序副本，而不实际改变或重置原始数据。在这种情况下，可以创建返回过滤或排序数组的计算属性。</p>
	<ul>
		<li v-for="item in filterItems">
			{{item}}
		</li>
	</ul>
	<hr>
	<ul>
		<li v-for="item in reFilterItems">
			{{item}}
		</li>
	</ul>
	<hr>
	<ul>
		<li v-for="item in even(filterItems)">
			{{item}}
		</li>
	</ul>
<hr>
	<h1>对象</h1>
	<ul>
		<li v-for="item in obj">
			{{item}}
		</li>
	</ul>
	<hr>
	</div>
</template>
<style lang="scss">
.swiper-container {
    width: 600px;
    height: 300px;
    background: red;
}  
</style>
<script>
export default {
    data () {
        return {
            ok: true,
            items: ['a', 'b', 'c'],
            filterItems: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            obj: {
                a: 'aaa',
                b: 'bbb',
                c: 'ccc'
            }
        }
    },
    mounted () {
    },
    methods: {
        changeItems () {
            // 由于 JavaScript 的限制， Vue 不能检测以下变动的数组
            // this.items[0] = 'yoko'
            // this.items.length = 2
            this.$set(this.items, 0, 'yoko')
            // console.log(this.items)
            this.items.splice(2, 1)
            // console.log(this.items.length)
            /*
            Vue 不允许在已经创建的实例上动态添加新的根级响应式属性(root-level reactive property)。然而它可以使用 Vue.set(object, key, value) 方法将响应属性添加到嵌套的对象上：
            */
            // this.obj.d = 'dddd'
            this.$set(this.obj, 'd', 'dddddddd')
        },
        even () {
            return this.filterItems.filter((number) => {
                return number % 2 === 0
            })
        }
    },
    computed: {
        reFilterItems () {
            return this.filterItems.filter((number) => {
                return number % 2 === 0
            })
        }
    }
}
</script>
