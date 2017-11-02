<template>
	<div>
		<p>{{message}}</p>
		<p>{{reverseMessage}}</p>
		<pre>
			1.vm.reversedMessage 的值始终取决于 vm.message 的值。
			2.你可以像绑定普通属性一样在模板中绑定计算属性。 Vue 知道 vm.reversedMessage 依赖于 vm.message ，因此当 vm.message 发生改变时，所有依赖于 vm.reversedMessage 的绑定也会更新

		</pre>
	</div>
</template>
<script>
export default {
    data () {
        return {
            message: 'wu yan ping'
        }
    },
    computed: {
        reverseMessage () {
            return this.message.split(' ').reverse().join(' ')
        }
    }
}
</script>
