<template>
	<div id="classAndStyle">
		值为对象的选项，例如 methods, components 和 directives，将被混合为同一个对象。 两个对象键名冲突时，取组件对象的键值对。
		<button @click="changeBol">aaa</button>
	</div>
</template>
<style lang="sass">
</style>
<script>
import mixin from './mixin.js'
export default {
    data () {
        return {
        }
    },
    mixins: [mixin],
    created: function () {
        console.log('组件钩子被调用')
    },
    methods: {
        changeBol () {
            console.log(22)
            this.$http.get('api/system/1/edit').then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>
