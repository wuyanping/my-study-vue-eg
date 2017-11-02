<template>
	<div>
		<ul>
			<li v-for="(item,index) in menues">
				<a @click="expand(item,index,item.show)">{{item.text}} {{item.show}}</a>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
    data () {
        return {
            seen: false,
            menues: [
                {
                    show: false,
                    text: '数据日报',
                    submenues: [
                        {text: '数据日报1'},
                        {text: '数据日报2'},
                        {text: '数据日报3'},
                        {text: '数据日报4'}
                    ]
                },
                {
                    show: false,
                    text: '数据提取',
                    submenues: [
                        {text: '数据提取1'},
                        {text: '数据提取2'},
                        {text: '数据提取3'},
                        {text: '数据提取4'}
                    ]
                }
            ]
        }
    },
    methods: {
        expand (arr, index, newValue) {
            console.log(11)
            console.log(arr)
            // newValue ==! newValue
            // this.$set(this.menues[index], 'show', newValue)
            this.$set(arr, 'show', newValue)
            console.log(22)
            console.log(arr)
        }
    }
}
</script>
<style>
.wrap{
	width: 100%;
}
</style>
