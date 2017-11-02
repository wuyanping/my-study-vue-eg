<template>
	<div id="classAndStyle">
		<!-- 对象的写法 -->
		<div @click="changeBol" :class="{active: bol}">hahah</div>
		<!-- 数组的写法 -->
		<!-- <div @click="changeBol" :class="bol ? active : ''">hahah</div> -->
		<div @click="changeBol" :class="[{active: bol},{errorClass: true}]">hahah</div>
	</div>
</template>
<style lang="scss">
#classAndStyle{
	color: green;
	.active{
		color:red;
	}
	.errorClass{
		background:blue;
	}
}
</style>
<script>
export default {
    data () {
        return {
            bol: true
        }
    },
    methods: {
        changeBol () {
            this.bol = !this.bol
            console.log(this.bol)
        }
    }
}
</script>
