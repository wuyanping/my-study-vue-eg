<template>
	<div id="vueShiLi">
		<div>
			<h3>1.构造器</h3>
			<pre>
				var vm = new Vue({
				    // 选项
				    name: '',
				    el: '',
				    data: { //对象},
				    methods: { //对象},
				    computed: { //对象},
				    watch: { //对象},
					template,
					钩子  () {}

				})
				在实例化 Vue 时，需要传入一个选项对象，它可以包含数据、模板、挂载元素、方法、生命周期钩子等选项。全部的选项可以在 API 文档中查看。
			</pre>
		</div>
		<div>
			<h3>钩子</h3>
			<button @click="updatedFn">更改</button> {{number}}
			<!-- <img src="../../../../../public/images/lifecycle.png" height="2800" width="1200" alt=""> -->
		</div>
	</div>
</template>
<script>
export default {
    data () {
        return {
            data: 'aaaa',
            number: 0
        }
    },
    methods: {
        updatedFn () {
            this.number ++
        }
    },
    beforeCreate () {
        console.log('创建前=======beforeCreate')
        console.log('this.number: ' + this.number)
        console.log(this.$el)
    },
    created () {
        console.log('已创建==========created')
        console.log('this.number: ' + this.number)
        console.log(this.$el)
    },
    beforeMount () {
        console.log('mount挂载完成之前=============beforeMount')
        console.log('this.number: ' + this.number)
        console.log(this.$el)
    },
    mounted () {
        console.log('mounted挂载完成==========mounted')
        console.log('this.number: ' + this.number)
        console.log(this.$el)
    },
    beforeUpdate () {
        console.log('更新前========beforeUpdate')
    },
    updated () {
        console.log('更新完成=============updated')
    },
    beforeDestory () {
        console.log('销毁前============beforeDestory')
        console.log('this.number: ' + this.number)
        console.log(this.$el)
    },
    destoryed () {
        console.log('已销毁===========destoryed')
        console.log('this.number: ' + this.number)
        console.log(this.$el)
    }
}
</script>
